import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage = ()=> (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

//exact will keep away all the matched URL showing up in the same page
// the moment when switch sees something matched, it doesn't render the rest.
function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/hats' component = {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
