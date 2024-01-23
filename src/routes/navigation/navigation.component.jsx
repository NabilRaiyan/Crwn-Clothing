import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.style.scss';
import { UserContext} from '../../../src/contexts/user.context';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";

// creating navigation functional component
const Navigation = ()=>{

  const { currentUser, setCurrentUser } = useContext(UserContext);

  // const signOutHandler = async ()=>{
  //   signOutUser();
  //   await setCurrentUser(null);
  // }
  //console.log(currentUser);
    return (
      <Fragment>
        {/* Links for nav bar */}
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo" />
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                  // if we have a current user that means user has logged in and we need to render SIGN OUT button
                  currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                  ):(
                    <Link className="nav-link" to='/authentication'>SIGN IN</Link>
                  )
                }
                <CartIcon />
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;