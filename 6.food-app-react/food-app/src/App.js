import React from 'react';
import './App.css';
import Home from './Home/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RestaurantDetails from './Home/RestaurantCard/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home  />}></Route>
          <Route path='restaurant/:id' element={<RestaurantDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
