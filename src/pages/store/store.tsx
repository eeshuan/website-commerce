import React from 'react';
import Layout from '../layout/layout';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ItemCard from '../../components/itemCard/itemCard';
import Item from '../../scripts/class/item';

import './store.scss';
import { assetsMap } from '../../assets/assetsMap';

export default class Store extends React.Component {
    private testItems: Array<Item>;

    constructor(public props) {
        super(props);

        this.testItems = [
            new Item(`Item 1`, 10, assetsMap.pages.store.item, `item-1`),
            new Item(`Item 2`, 11, assetsMap.pages.store.item, `item-2`),
            new Item(`Item 3`, 12, assetsMap.pages.store.item, `item-3`),
            new Item(`Item 4`, 13, assetsMap.pages.store.item, `item-4`),
            new Item(`Item 5`, 14, assetsMap.pages.store.item, `item-5`),
            new Item(`Item 6`, 15, assetsMap.pages.store.item, `item-6`),
            new Item(`Item 7`, 16, assetsMap.pages.store.item, `item-7`),
            new Item(`Item 8`, 17, assetsMap.pages.store.item, `item-8`),
            new Item(`Item 9`, 18, assetsMap.pages.store.item, `item-9`),
        ];
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