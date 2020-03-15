import React from 'react';
import Layout from '../layout/layout';
import { Grid, TextField } from '@material-ui/core';
import { testdata } from '../../testdata/testdata';

import './cart.scss';
import { CartCache } from '../../scripts/cache/cartCache';

export default class Cart extends React.Component {
    private _sessionKey: string = `cart`;
    private _itemQuantity: {[key: string]: number};
    private _itemDetails: {[key: string]: {name: string, price: number, imageUrl: string}};

    state = {
        totalCost: 0
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
        this.setState({[`${itemId}`]: amount, totalCost: this.calculateTotalCost()});
    }

    private calculateTotalCost(): number {
        let totalCost: number = 0;
        Object.keys(this._itemQuantity).map((key: string, index: number) => {
            totalCost += this._itemDetails[key].price * CartCache.instance.getCount(key);
        });
        return totalCost;
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
                                    {(this.state.totalCost * 0.07).toFixed(2)} 
                                </Grid>
                                <Grid item xs={6}>
                                    Total: 
                                </Grid>
                                <Grid item xs={6}>
                                    {(Number((this.state.totalCost).toFixed(2)) + 
                                    Number((this.state.totalCost * 0.07).toFixed(2))).toFixed(2)} 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}