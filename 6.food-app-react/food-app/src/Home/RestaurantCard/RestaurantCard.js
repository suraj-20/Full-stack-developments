import React from 'react';
import '../RestaurantCard/RestaurantCard.css'
import { useNavigate } from 'react-router-dom'

function RestaurantCard(props) {

    const navigate = useNavigate();

    const redirectToDetail = (id) => {
        navigate("/restaurant/" + id);
    }

    const restaurant = props.item;
    return (
        <a href onClick={() => { redirectToDetail(restaurant._id) }}>
            <div className="card">
                <div className="row">
                    {/* <div className="col-sm-12 col-md-12 col-lg-4">
                        <img className="resImage" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt=''></img>
                    </div> */}
                    <div className="tileComponent">
                        <img src={restaurant.thumb} alt=""></img>
                        <p className='nameElement'>{restaurant.name}</p>
                        <p className='locationElement'>Location : {restaurant.location}</p>
                        <p className='contactElement'>{restaurant.contact}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default RestaurantCard;