import { Fragment } from "react";// react is usefull if you dont want to render some of the html elemnet
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import "./navigation-styles.scss"
// Link is use to proper laberage(etiquetar) the proper url. read by the browsers. behaves like anchor tag <a>
const Navigation = () => {
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
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
            </div>
          <div></div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;