import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import NavBar from './components/NavBar';
import { Card, Layout } from 'antd';
import { findByLabelText } from '@testing-library/react';
import ItemCount from './components/ItemCount';
import Item from 'antd/es/list/Item';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const { Header, Content, Footer } = Layout;
const { Meta } = Card;

 



const App = () => {

  return (
    <BrowserRouter>
      <NavBar fill="#FFF" />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
      </Routes>
      <Content style={{ padding: '0 50px' }}>
        
                <ItemDetailContainer/>

      </Content>
    </BrowserRouter>
  );
};




export default App;
