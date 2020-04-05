import React from 'react';
import Item from '../../../scripts/class/item';
import { Link } from 'react-router-dom';

import './itemCard.scss';

export default class ItemCard extends React.Component {
    private _itemDetails: Item;

    constructor(public props) {
        super(props);
        this._itemDetails = this.props.item;
    }

    render() {
        return (
            <Link className="itemcard" to={`/product/${this._itemDetails.urlPath}`}>
                <img src={this._itemDetails.image} style={{width: '300px'}}></img>
                <div>{this._itemDetails.name}</div>
                <div>${this._itemDetails.price}</div>
            </Link>
        );
    }
}