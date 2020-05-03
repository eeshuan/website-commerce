import React from 'react';
import Layout from '../layout/layout';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import ItemCard from '../../components/react/itemCard/itemCard';
import Item from '../../scripts/class/item';
import Slider from '@material-ui/core/Slider';
import { testdata } from '../../testdata/testdata';

import './store.scss';

export default class Store extends React.Component {
    private testItems: Array<Item>

    private readonly PRICE_LOW: number = 0;
    private readonly PRICE_MEDIUM: number = 1;
    private readonly PRICE_HIGH: number = 2;

    private readonly priceMarks = [
        {
            value: this.PRICE_LOW,
            label: `Low`
        },
        {
            value: this.PRICE_MEDIUM,
            label: `Medium`
        },
        {
            value: this.PRICE_HIGH,
            label: `High`
        },
    ];

    state = {
        filteredItems: [],
        priceRange: [this.PRICE_LOW, this.PRICE_HIGH]
    }

    constructor(public props) {
        super(props);
        this.testItems = [];
        Object.keys(testdata.items).map((key: string, index: number) => {
            let item: {name: string, price: number, imageUrl: string} = testdata.items[key];
            this.testItems[index] = new Item(key, item.name, item.price, item.imageUrl, key);
            this.state.filteredItems[index] = this.testItems[index];
        });
    }

    private handlePriceChange(ev: any, newValue: number[]) {
        this.setState({priceRange: newValue});
    }

    private getItemsWithFilter() {
        console.log(this.state.filteredItems);
        return (
            this.state.filteredItems.map((data: Item, index: number) => {
                return (
                    <Grid className="store-items-itemcontainer" item md={4} sm={6} xs={12} key={index}>
                        <ItemCard item={data}/>
                    </Grid>
                );
            })
        );
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
                                        <Slider
                                            classes={{root: "store-navigation-panel-priceslider"}}
                                            value={this.state.priceRange}
                                            onChange={this.handlePriceChange.bind(this)}
                                            marks={this.priceMarks}
                                            min={this.PRICE_LOW}
                                            max={this.PRICE_HIGH}
                                            aria-labelledby="discrete-range-slider"
                                        />
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel className="store-navigation-panel">
                                    <ExpansionPanelSummary className="store-navigation-panel-summary">
                                        <div>Colour</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="store-navigation-panel-details">
                                        <div className="store-navigation-panel-colourpicker">
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_red"/>}
                                                label={
                                                    <span>
                                                        <span>Red</span>
                                                        <span
                                                            className="store-navigation-panel-colourpicker-colour"
                                                            style={{backgroundColor: '#ff0000'}}></span>
                                                    </span>
                                                }
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_blue"/>}
                                                label={
                                                    <span>
                                                        <span>Blue</span>
                                                        <span
                                                            className="store-navigation-panel-colourpicker-colour"
                                                            style={{backgroundColor: '#0000ff'}}></span>
                                                    </span>
                                                }
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_green"/>}
                                                label={
                                                    <span>
                                                        <span>Green</span>
                                                        <span
                                                            className="store-navigation-panel-colourpicker-colour"
                                                            style={{backgroundColor: '#00ff00'}}></span>
                                                    </span>
                                                }
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_yellow"/>}
                                                label={
                                                    <span>
                                                        <span>Yellow</span>
                                                        <span
                                                            className="store-navigation-panel-colourpicker-colour"
                                                            style={{backgroundColor: '#ffff00'}}></span>
                                                    </span>
                                                }
                                            />
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel className="store-navigation-panel">
                                    <ExpansionPanelSummary className="store-navigation-panel-summary">
                                        <div>Sizes</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="store-navigation-panel-details">
                                        <div className="store-navigation-panel-sizepicker">
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_xs"/>}
                                                label="XS"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_s"/>}
                                                label="S"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_m"/>}
                                                label="M"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="checkbox_l"/>}
                                                label="L"
                                            />
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="store-items">
                                <Grid container alignItems="flex-start" justify="flex-start">
                                    {this.getItemsWithFilter()}
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}