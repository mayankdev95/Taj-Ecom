import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShopPage from'../src/App.component/page.compnent/ShopPage/Shop.component'
import './App.css';
import Homepage from '../src/App.component/page.compnent/homepage/HomePage.component'; 



function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/shop' component={ShopPage}></Route>
    
    </Switch>
    
    </div>
  );
}

export default App;
