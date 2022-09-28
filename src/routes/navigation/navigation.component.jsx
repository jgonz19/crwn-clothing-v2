import { Fragment, useContext } from "react";// react is usefull if you dont want to render some of the html element
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation-styles.jsx";

import {signOutUser} from '../../utils/firebase/firebase.utils'


//if we have a condition and then component, in case both are true we will return the last component{isCartOpen}
// Link is use to proper laberage(etiquetar) the proper url. read by the browsers. behaves like anchor tag <a>
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinksContainer>
              <NavLink to='/shop'>
                  SHOP
              </NavLink>
                {
                  currentUser ? 
                  (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                  )
                    :
                  (
                    <NavLink to='/auth'>
                      SIGN IN
                    </NavLink>
                  )
                }
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;