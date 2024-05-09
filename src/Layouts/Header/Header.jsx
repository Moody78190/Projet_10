import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../Reducers/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  // Extraire les valeurs de l'objet `user`
  const { firstName, lastName } = user || {};

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-logo">
          {/* Logo */}
          <NavLink to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Logo Argent-Bank"
            />
          </NavLink>
        </div>

        <NavLink
          to={user ? "/" : "/login"}
          className="main-nav-item"
          onClick={user ? handleLogout : null}
        >
          <p className="main-nav-username">
            {user ? `${firstName} ${lastName}` : ""}
          </p>
          <i className="fa fa-user-circle"></i>
          {user ? "Logout" : "Signin"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
