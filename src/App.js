import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
 

//exact will keep away all the matched URL showing up in the same page
// the moment when switch sees something matched, it doesn't render the rest.
// header is always present and rendered in this location
// we wanna hold the information of users in here in order to be able to use them when necessary
// we want to store the data that we have stored firebase previosly into our states in order to use it in the app
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    };
  }

unsubscribeFromAuth = null;
  // method in firebase
  // match the auth and firebase code together to return desired properties
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //this.setState({currentUser: user});
    if(userAuth){
      // we use userRef to check if the database is updated at that reference with any new data
      const userRef = await createUserProfileDocument(userAuth);
      // getting data related to the user
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id:snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state);
      });
    }
    // when sign out, set user to null
    this.setState({currentUser: userAuth});
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
