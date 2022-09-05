import React from 'react';
import './Header.css'

function Header({locationChange, nameChange}) {
    return (
        <div className='header'>
            <div className="logo">
                <p >
                    e!
                </p>
            </div>
            <div>
                <p className="headline">
                    Find the best restaurants, cafés, and bars
                </p>
            </div>
            <div className="header-form">
                <select onChange={(event) =>  locationChange(event.target.value) } className="form-control form-select">
                    <option value="Select" selected disabled>Please Type a Location</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Pune">Pune</option>
                </select>
                <div>
                    <input onInput={(event) => nameChange(event.target.value) } className="form-control" type="text" placeholder="Search for Restaurants"></input>
                </div>
            </div>
        </div>
    )
}

export default Header;