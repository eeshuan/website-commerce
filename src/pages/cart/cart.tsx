import React from 'react';
import Layout from '../layout/layout';
import { Grid, TextField } from '@material-ui/core';
import { testdata } from '../../testdata/testdata';
import { CartCache } from '../../scripts/cache/cartCache';
import PaypalExpressBtn from 'react-paypal-express-checkout';

import './cart.scss';

export default class Cart extends React.Component {
    private _sessionKey: string = `cart`;
    private _itemQuantity: {[key: string]: number};
    private _itemDetails: {[key: string]: {name: string, price: number, imageUrl: string}};

    state = {
        totalCost: 0,
        taxCost: 0,
        totalCostWithTax: 0
    };

    constructor(public props) {
        super(props);

        let jsonString: string = window.sessionStorage.getItem(this._sessionKey);
        if (jsonString) {
            this._itemQuantity = JSON.parse(jsonString);
        }
        else {
            this._itemQuantity = {};
        }

        this._itemDetails = {};
        Object.keys(this._itemQuantity).map((key: string, index: number) => {
            this._itemDetails[key] = {
                name: testdata.items[key].name || `Cannot find name`,
                price: testdata.items[key].price || 0,
                imageUrl: testdata.items[key].imageUrl || ``,
            };
            this.state[key] = this._itemQuantity[key];
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
        CartCache.instance.setItems(itemId, amount);
        this.setState({
            [`${itemId}`]: amount,
            totalCost: this.calculateTotalCost(),
            taxCost: this.calculateTax(),
            totalCostWithTax: this.calculateTotalCostWithTax()
        });
    }

    private calculateTotalCost(): number {
        let totalCost: number = 0;
        Object.keys(this._itemQuantity).map((key: string, index: number) => {
            totalCost += this._itemDetails[key].price * CartCache.instance.getCount(key);
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

    render () {
        return (
            <Layout>
                <div className="cart">
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <div>
                                Order Summary
                            </div>
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    Product
                                </Grid>
                                <Grid item xs={2}>
                                    Price
                                </Grid>
                                <Grid item xs={2}>
                                    Quantity
                                </Grid>
                                <Grid item xs={2}>
                                    Item Total
                                </Grid>
                            </Grid>
                            {
                                    Object.keys(this._itemDetails).map((key: string, index: number) => {
                                        return (
                                            <Grid container justify="center" alignItems="center" key={index}>
                                                <Grid item xs={6}>
                                                    <img src={this._itemDetails[key].imageUrl} style={{width: '50px'}}></img>
                                                    {this._itemDetails[key].name}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    {this._itemDetails[key].price}
                                                </Grid>
                                                <Grid item xs={2}>
                                                <TextField
                                                    value={this.state[key]}
                                                    label="Amount"
                                                    onChange={this.updateAmount.bind(this, key)}
                                                    type="number"
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                                </Grid>
                                                <Grid item xs={2}>
                                                    {this._itemDetails[key].price * this.state[key]}
                                                </Grid>
                                            </Grid>
                                        );
                                    })
                                }
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    Subtotal: 
                                </Grid>
                                <Grid item xs={6}>
                                    {(this.state.totalCost).toFixed(2)}
                                </Grid>
                                <Grid item xs={6}>
                                    Tax (7%): 
                                </Grid>
                                <Grid item xs={6}>
                                    {(this.state.taxCost).toFixed(2)} 
                                </Grid>
                                <Grid item xs={6}>
                                    Total: 
                                </Grid>
                                <Grid item xs={6}>
                                    {(this.state.totalCostWithTax).toFixed(2)} 
                                </Grid>
                                <Grid item xs={12}>
                                    {this.getPaypalCheckoutButtonState()}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}