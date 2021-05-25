import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
 

//exact will keep away all the matched URL showing up in the same page
// the moment when switch sees something matched, it doesn't render the rest.
// header is always present and rendered in this location
// we wanna hold the information of users in here in order to be able to use them when necessary
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    };
  }

unsubscribeFromAuth = null;
  // method in firebase
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
    this.setState({currentUser: user});
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render()
{return (
    <div>  
      <Header currentUser ={this.state.currentUser}/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/shop' component = {ShopPage}/>
        <Route path ='/signin' component = {SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}}

export default App;
