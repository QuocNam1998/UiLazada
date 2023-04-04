import React, { StrictMode } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import DetailProduct from './components/Products/Detail';
import Layout from './components/Layout';
import Payment from './components/HomePages/Payment';
import ListProductCart from './components/Products/ListProductCart';
import Login from './components/HomePages/Login';


function App() {

  return (
    
      <React.Fragment>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/detailproduct/:id' element={<DetailProduct />} />
            <Route path='/cart' element={<ListProductCart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </React.Fragment>

  );
}

export default App;