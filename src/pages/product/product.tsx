import React from 'react';
import Layout from '../layout/layout';
import { Grid, Button } from '@material-ui/core';
import { testdata } from '../../testdata/testdata';
import { CartCache } from '../../scripts/cache/cartCache';

import './product.scss';
import Item from '../../scripts/class/item';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {
    private _itemDetails: {name: string, price: number, imageUrl: string};
    
    constructor(public props) {
        super(props);
        this._itemDetails = testdata.items[this.props.match.params.name] || {name: "Cannot find name", price: 0, imageUrl: ""};
    }

    private onAddToCartClick() {
        CartCache.instance.addItems(new Item(
            this.props.match.params.name,
            this._itemDetails.name,
            this._itemDetails.price,
            this._itemDetails.imageUrl,
            this.props.match.params.name
        ));
    }

    render() {
        return (
            <Layout>
                <div className="product">
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} className="product-link">
                            <Link to="../store"
                                className="product-link-home"
                            >
                                Home
                            </Link> / {this._itemDetails.name}
                        </Grid>
                        <Grid item xs={6} className="product-image">
                            <img src={this._itemDetails.imageUrl}
                                 style={{width: '400px'}}></img>
                        </Grid>
                        <Grid item xs={6} className="product-details">
                            <div className="product-details-name">
                                {this._itemDetails.name}
                            </div>
                            <div className="product-details-refNo">
                                Ref: 1234567890
                            </div>
                            <div className="product-details-description"
                            dangerouslySetInnerHTML={{__html: 
                            "<p>Takes you from desk to dinner. V-neckline. Button down front closure. Pocketed details. Fitted cut.</p><p>Made of polyester blend material.</p>"
                            }}>
                            </div>
                            <div className="product-details-price">
                                ${this._itemDetails.price}
                            </div>
                            <div className="product-details-addtocart">
                                <Button className="product-details-addtocart-button" onClick={this.onAddToCartClick.bind(this)}>
                                    Add To Cart
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}