import React from 'react';
import Layout from '../layout/layout';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ItemCard from '../../components/itemCard/itemCard';
import Item from '../../scripts/class/item';

import './store.scss';

export default class Store extends React.Component {
    private testItems: Array<Item>;
    private imageUrl: string = "https://static.wixstatic.com/media/05e173_e4a59b04cb5f412fae2ac5218415f09f~mv2.jpg/v1/fill/w_546,h_818,al_c,q_85,usm_0.66_1.00_0.01/05e173_e4a59b04cb5f412fae2ac5218415f09f~mv2.webp";
    
    constructor(public props) {
        super(props);

        this.testItems = [
            new Item("Item 1", 10, this.imageUrl),
            new Item("Item 2", 11, this.imageUrl),
            new Item("Item 3", 12, this.imageUrl),
            new Item("Item 4", 13, this.imageUrl),
            new Item("Item 5", 14, this.imageUrl),
            new Item("Item 6", 15, this.imageUrl),
            new Item("Item 7", 16, this.imageUrl),
            new Item("Item 8", 17, this.imageUrl),
            new Item("Item 9", 18, this.imageUrl),
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