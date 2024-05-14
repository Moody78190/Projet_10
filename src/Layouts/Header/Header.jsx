import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../Reducers/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <header>
      <nav className="main-nav">
        {/* Logo */}
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Logo Argent-Bank"
          />
        </NavLink>

        <div>
          <NavLink className="main-nav-item" to={user ? "/profile" : "/login"}>
            <i className="fa fa-user-circle"></i>
            {user ? user.userName : "Sign In"}
          </NavLink>
          {user ? (
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={() => dispatch(logOut())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
