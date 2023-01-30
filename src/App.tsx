import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Pages/Products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productlist from './Pages/Productlist/Productlist';



function App() {
  // const route = (
  //   <Routes>
  //     {/* <Route path="/home" element={<React.Suspense fallback='loading...'><Home /></React.Suspense>}></Route> */}
  //     <Route path="/products" element={<Products />}></Route>
  //   </Routes>
  // );
  return (
    <div className="App">
      <Productlist/>
    {/* <BrowserRouter>{route}</BrowserRouter> */}
    
    </div>
  );
}

export default App;
