import React from 'react';
import Layout from '../layout/layout';
import { Grid, TextField, Button } from '@material-ui/core';
import { CartCache } from '../../scripts/cache/cartCache';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { formatNumberString } from '../../scripts/utils/utils';
import Item from '../../scripts/class/item';

import './cart.scss';

export default class Cart extends React.Component {
    private _itemDetails: {[key: string]: {item: Item, count: number}};

    state = {
        totalCost: 0,
        taxCost: 0,
        totalCostWithTax: 0
    };

    constructor(public props) {
        super(props);

        this._itemDetails = {};
        CartCache.instance.getCartItems().map((data: {item: Item, count: number}, index: number) => {
            this._itemDetails[data.item.id] = {
                item: data.item,
                count: data.count
            };
            this.state[data.item.id] = data.count;
        });
        this.state.totalCost = this.calculateTotalCost();
        this.state.taxCost = this.calculateTax();
        this.state.totalCostWithTax = this.calculateTotalCostWithTax();
    }

    private updateAmount(itemId: string, event) {
        event.persist();
        let amount: number = event.target.value;
        if (amount < 0) {
            amount = 0
        }
        if (amount > 99999) {
            amount = 99999;
        }
        if (this._itemDetails[itemId] != undefined) {
            CartCache.instance.setItems(this._itemDetails[itemId].item, amount);
            this.setState({
                [`${itemId}`]: amount,
                totalCost: this.calculateTotalCost(),
                taxCost: this.calculateTax(),
                totalCostWithTax: this.calculateTotalCostWithTax()
            });
        }
    }

    private calculateTotalCost(): number {
        let totalCost: number = 0;
        Object.keys(this._itemDetails).map((key: string, index: number) => {
            totalCost += this._itemDetails[key].item.price * CartCache.instance.getCount(key);
        });
        return totalCost;
    }

    private calculateTax(): number {
        return this.calculateTotalCost() * 0.07;
    }

    private calculateTotalCostWithTax(): number {
        return this.calculateTotalCost() + this.calculateTax();
    }

    private onPaymentSuccess() {
        console.log(`Success in a payment of ${this.state.totalCostWithTax}`);
        alert(`Payment Success!`);
        CartCache.instance.clearCache();
        location.reload();
    }

    private onPaymentFail() {
        console.log(`Error in payment`);
    }

    private onPaymentCancel() {
        console.log(`Cancelled Payment`);
    }

    private onProceedToCheckoutClicked() {
        alert(`Checkout Total: $${this.state.totalCostWithTax}`)
    }

    private getPaypalCheckoutButtonState() {
        if (this.state.totalCostWithTax > 0) {
            return(
                <PaypalExpressBtn
                    env={`sandbox`}
                    client={{
                        sandbox:    'AbVNQoDKa7BwDXScFpMtHGkyEf9naXv7nDu5FqITx8c7kRP2825iuM6wfgGmIQqBhzBrnw042xyJTtXZ',
                        production: 'YOUR-PRODUCTION-APP-ID',
                    }}
                    currency={`SGD`}
                    total={this.state.totalCostWithTax}
                    onError={this.onPaymentFail.bind(this)}
                    onSuccess={this.onPaymentSuccess.bind(this)}
                    onCancel={this.onPaymentCancel.bind(this)}
                />
            );
        }
    }

    private getOrderSummary() {
        if (Object.keys(this._itemDetails).length == 0) {
            return (
                <div className="cart-order-summary-list-items-noitems">
                    Cart is empty
                </div>
            );
        }
        else {
            return Object.keys(this._itemDetails).map((key: string, index: number) => {
                return (
                    <Grid container justify="center" alignItems="center" key={index}>
                        <Grid item xs={6} className="cart-order-summary-list-items-style">
                            <Grid container alignItems="center" justify="center">
                                <Grid item xs={4}>
                                    <img src={this._itemDetails[key].item.image} style={{width: '100px'}}></img>
                                </Grid>
                                <Grid item xs={8}>
                                    <div>
                                        {this._itemDetails[key].item.name}
                                    </div>
                                    <div>
                                        Item Description here
                                    </div>
                                    <br></br>
                                    <div>
                                        Ref no: 1234567890
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} className="cart-order-summary-list-items-style">
                            ${formatNumberString(this._itemDetails[key].item.price)}
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                value={this.state[key]}
                                onChange={this.updateAmount.bind(this, key)}
                                type="number"
                                variant="outlined"
                                margin="normal"
                                classes={{root: "cart-order-summary-list-items-quantity-style"}}
                            />
                        </Grid>
                        <Grid item xs={2} className="cart-order-summary-list-items-style">
                            ${formatNumberString(this._itemDetails[key].item.price * this.state[key])}
                        </Grid>
                    </Grid>
                );
            })
        }
    }

    private getCheckoutButton() {
        if (Object.keys(this._itemDetails).length > 0) {
            return (
                <div className="cart-checkout-button">
                    <Button className="cart-checkout-button-style" onClick={this.onProceedToCheckoutClicked.bind(this)}>
                        Proceed to checkout
                    </Button>
                </div>
            );
        }
    }

    render () {
        return (
            <Layout>
                <div className="cart">
                    <Grid container justify="center" alignItems="flex-start">
                        <Grid item xs={12} md={9} className="cart-order-summary">
                            <div className="page-title-style">
                                Order Summary
                            </div>
                            <div className="cart-order-summary-list">
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={6} className="column-header-style">
                                        Product
                                    </Grid>
                                    <Grid item xs={2} className="column-header-style">
                                        Price
                                    </Grid>
                                    <Grid item xs={2} className="column-header-style">
                                        Quantity
                                    </Grid>
                                    <Grid item xs={2} className="column-header-style">
                                        Item Total
                                    </Grid>
                                </Grid>
                                <div className="cart-order-summary-list-items">
                                    {this.getOrderSummary()}
                                </div>
                            </div> 
                        </Grid>
                        <Grid item xs={12} md={3} className="cart-total-summary">
                            <Grid container justify="center" alignItems="center" className="cart-total-summary-details">
                                <Grid item xs={6} className="cart-total-summary-details-style">
                                    Subtotal: 
                                </Grid>
                                <Grid item xs={6} className="cart-total-summary-details-style amount">
                                    ${formatNumberString(this.state.totalCost)}
                                </Grid>
                                <Grid item xs={6} className="cart-total-summary-details-style">
                                    Tax (7%): 
                                </Grid>
                                <Grid item xs={6} className="cart-total-summary-details-style amount">
                                    ${formatNumberString(this.state.taxCost)} 
                                </Grid>
                                <Grid item xs={6} className="cart-total-summary-details-total">
                                    Total: 
                                </Grid>
                                <Grid item xs={6} className="cart-total-summary-details-total amount">
                                    ${formatNumberString(this.state.totalCostWithTax)} 
                                </Grid>
                                {/* <Grid item xs={12}>
                                    {this.getPaypalCheckoutButtonState()}
                                </Grid> */}
                            </Grid>
                            {this.getCheckoutButton()}
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}