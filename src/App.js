import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from'../src/App.component/page.compnent/ShopPage/Shop.component'
import Homepage from '../src/App.component/page.compnent/homepage/HomePage.component'; 
import Header from '../src/App.component/header/Header.component'

function App() {
  return (
    <div>
    <Header></Header>
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/shop' component={ShopPage}></Route>
    
    </Switch>
    
    </div>
  );
}

export default App;
