import React from 'react'
import '../RestaurantCard/QuickSearch.css'
import breakfast from '../../Assets/breakfast.jpg'
import lunch from '../../Assets/lunch.jpg'
import snacks from '../../Assets/snacks.png'
import dinner from '../../Assets/dinner.png'
import drinks from '../../Assets/drinks.png'
import nightlife from '../../Assets/nightlife.png'

function quickSearch() {
    return (
        <a href>
            <div className="quicksearch">
                <p className="quicksearchHeading">
                    Quick Searches
                </p>
                <p className="quicksearchSubHeading">
                    Discover restaurants by type of meal
                </p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={breakfast} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        Breakfast
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive breakfast options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={lunch} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        Lunch
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive lunch options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={snacks} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        Snacks
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive snacks options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={dinner} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        Dinner
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive dinner options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={drinks} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        Drinks
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive drinks options
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={nightlife} height="150" width="150" alt=''/>
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        NightLife
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive nightlife options
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default quickSearch;