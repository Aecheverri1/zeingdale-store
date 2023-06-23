import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ItemPage from './components/ItemDetail';
import './App.css';

function App() {

  const baseUrl = 'https://fakestoreapi.com/products'

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage apiUrl={baseUrl}/>}/>
        <Route path='/item' element={<ItemPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
