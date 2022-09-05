import React from "react";
import Header from "../Header/Header"
import QuickSearch from "../RestaurantCard/QuickSearch";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useState } from 'react'

function Home() {

    var [restaurants, setRestaurants] = useState([]);

    let location;
    let name;
    function filter(type, data) {
        console.log("Filter called")
        if (type === 'location') {
            location = data;
        } else {
            name = data;
        }
        filterRestaurant();
    }

    function filterRestaurant() {
        var url = "http://localhost:4400/api/restaurant/filter?";
        if(location){
            url=url+"location="+location;
        }
        if(name){
            url=url+"&name="+name;
        }
        
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setRestaurants(res);
            });
    }

    return (
        <div>
            <Header
                locationChange={(event) => filter('location', event)}
                nameChange={(event) => filter('name', event)} />

            {
                restaurants.length > 0 &&
                restaurants.map(r => 
                    <RestaurantCard item={r}/>
                )
            }
            <QuickSearch />
        </div>
    )
}

export default Home;