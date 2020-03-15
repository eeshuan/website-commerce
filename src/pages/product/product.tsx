import React from 'react';
import Layout from '../layout/layout';
import { Grid, Button } from '@material-ui/core';
import { testdata } from '../../testdata/testdata';
import { CartCache } from '../../scripts/cache/cartCache';

import './product.scss';

export default class Product extends React.Component {
    private _itemDetails: {name: string, price: number, imageUrl: string};
    
    constructor(public props) {
        super(props);
        this._itemDetails = testdata.items[this.props.match.params.name] || {name: "Cannot find name", price: 0, imageUrl: ""};
    }

    private onAddToCartClick() {
        CartCache.instance.addItems(this.props.match.params.name);
    }

    render() {
        return (
            <Layout>
                <div className="product">
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <img src={this._itemDetails.imageUrl} style={{width: '300px'}}></img>
                        </Grid>
                        <Grid item xs={8}>
                            <div>
                                Name: {this._itemDetails.name}
                            </div>
                            <div>
                                Price: ${this._itemDetails.price}
                            </div>
                            <Button onClick={this.onAddToCartClick.bind(this)}>
                                Add To Cart
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}