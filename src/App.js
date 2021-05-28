import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
 import { setCurrentUser} from './redux/user/user.actions';

//exact will keep away all the matched URL showing up in the same page
// the moment when switch sees something matched, it doesn't render the rest.
// header is always present and rendered in this location
// we wanna hold the information of users in here in order to be able to use them when necessary
// we want to store the data that we have stored firebase previosly into our states in order to use it in the app
class App extends React.Component {

unsubscribeFromAuth = null;
  // method in firebase
  // match the auth and firebase code together to return desired properties
componentDidMount(){

const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //this.setState({currentUser: user});
    if(userAuth){
      // we use userRef to check if the database is updated at that reference with any new data
      const userRef = await createUserProfileDocument(userAuth);
      // getting data related to the user
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()          
        });
      });
    }
    // when sign out, set user to null
    setCurrentUser(userAuth);
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render()
{return (
    <div>  
      <Header/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/shop' component = {ShopPage}/>
        <Route exact path ='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/'/>): (<SignInAndSignUpPage/>)}/>
      </Switch>
    </div>
  );
}}

// destructure userReducer
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

/*App doesn't need current user anymore; it doesn't do anything with it, just sets it
First is null becasue we don't need anything from the reducer*/
const mapDispatchToProps = dispatch => ({
// the action object that is going to pass every reducer
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
