import React from 'react';
import Layout from '../layout/layout';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ItemCard from '../../components/itemCard/itemCard';
import Item from '../../scripts/class/item';
import { testdata } from '../../testdata/testdata';

import './store.scss';

export default class Store extends React.Component {
    private testItems: Array<Item>;

    constructor(public props) {
        super(props);
        this.testItems = [];
        Object.keys(testdata.items).map((key: string, index: number) => {
            let item: {name: string, price: number, imageUrl: string} = testdata.items[key];
            this.testItems[index] = new Item(key, item.name, item.price, item.imageUrl, key);
        });
    }

    render () {
        return (
            <Layout>
                <div className="store">
                    <Grid container alignItems="flex-start" justify="space-evenly">
                        <Grid item xs={2}>
                            <div className="store-navigation">
                                <ExpansionPanel className="store-navigation-panel">
                                    <ExpansionPanelSummary className="store-navigation-panel-summary">
                                        <div>Price</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="store-navigation-panel-details">
                                        <div>Price slider here</div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel className="store-navigation-panel">
                                    <ExpansionPanelSummary className="store-navigation-panel-summary">
                                        <div>Colour</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="store-navigation-panel-details">
                                        <div>Colour picker here</div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel className="store-navigation-panel">
                                    <ExpansionPanelSummary className="store-navigation-panel-summary">
                                        <div>Sizes</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="store-navigation-panel-details">
                                        <div>Size picker here</div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="store-items">
                                <Grid container alignItems="flex-end" justify="flex-end">
                                    {
                                        this.testItems.map((data: Item, index: number) => {
                                            return (
                                                <Grid item md={4} sm={6} xs={12} key={index}>
                                                    <ItemCard item={data}/>
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}