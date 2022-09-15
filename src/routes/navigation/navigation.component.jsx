import { Fragment, useContext } from "react";// react is usefull if you dont want to render some of the html element
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import CartIcon from "../../compenents/cart-icon/cart-icon.component";
import CartDropdown from "../../compenents/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import "./navigation-styles.scss";

import {signOutUser} from '../../utils/firebase/firebase.utils'


//if we have a condition and then component, in case both are true we will return the last component{isCartOpen}
// Link is use to proper laberage(etiquetar) the proper url. read by the browsers. behaves like anchor tag <a>
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return(
      <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
              {
                currentUser ? 
                (
                  <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                )
                  :
                (
                  <Link className='nav-link' to='/auth'>
                    SIGN IN
                  </Link>
                )
              }
              <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;