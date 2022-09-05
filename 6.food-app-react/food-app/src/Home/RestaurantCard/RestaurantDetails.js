import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../RestaurantCard/RestaurantDetails.css'

function RestaurantDetails() {


    var [ restaurant, setRestaurants] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:4400/api/restaurant/" + id, { method: 'GET' })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setRestaurants(result);
            });
    }, []);


    return (


        <div >

            <div className="header2">
                <div className="s-logo">
                    <span>e!</span>
                </div>
                <div className="btn-group login-block">
                    <span className="login2">LogIn</span>
                    <span className="signUp2">Create an account</span>
                </div>
            </div>

            <div className='banner'></div>


            <div className='container'>

                <button className="btn btn-danger" style={{ float: 'right', margin: '15px', backgroundColor: '#ce0505' }}>Place Online Order</button>
                {/* Showing 2 Tabs on screen as Overview and Contact with details in respective sections*/}
                <div class="heading">The Big Chill Cakery{restaurant ? restaurant.name : ''}</div>
                <div class="tabs">
                    {/* Tab-1 */}
                    <div class="tab">
                        <input type="radio" id="tab-1" name="tab-group-1" checked />
                        <label className='tab-3' for="tab-1">Overview</label>

                        <div class="content">
                            <div class="about">About the place</div>
                            <div class="head">Cuisine</div>
                            <div class="value">Fast Food{restaurant ? restaurant.Cuisine: ''}</div>
                            <div class="head">Average Cost</div>
                            <div class="value">&#8377; 700{restaurant ? restaurant.cost: ''}</div>
                        </div>
                    </div>
                    {/* Tab-2 */}
                    <div class="tab">
                        <input type="radio" id="tab-2" name="tab-group-1" />
                        <label className='tab-3' for="tab-2">Contact</label>
                        <div class="content">
                            <div class="head">Phone Number</div>
                            <div class="value">+91-9876543217{restaurant ? restaurant.contact: ''}</div>
                            <div class="head">The Big Chill Cakery{restaurant ? restaurant.name : ''}</div>
                            <div class="value">Shalimar Bagh, Delhi{restaurant ? restaurant.address: ''}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RestaurantDetails;