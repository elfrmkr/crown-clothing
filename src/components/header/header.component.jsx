import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
//import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  Title,
} from "./header.styles";
import "./header.styles-logo.scss";

const Header = ({ currentUser, hidden }) => (
  <div>
    <div>
      <HeaderContainer>
        <Title to="/">
          {/* <Logo  /> */}
          Crown Clothing
        </Title>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
              {" "}
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin"> SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    </div>
  </div>
);

// connect function will help us to acsess the state(the root reducer)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
