import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


//exact will keep away all the matched URL showing up in the same page
// the moment when switch sees something matched, it doesn't render the rest.
// header is always present and rendered in this location
function App() {
  return (
    <div>  
      <Header/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/shop' component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
