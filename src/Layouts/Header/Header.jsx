import { NavLink } from 'react-router-dom';
import argentBankLogo from '../../assets/img/argentBankLogo.png'; // Importez l'image correctement

const Header = () => {
  return (
   <header>
    <nav className="main-nav">
      <div className="main-nav-logo">
        {/* Logo */}
         <NavLink to="/">
          <img className='main-nav-logo-image' src={argentBankLogo} alt="Logo Argent-Bank" />
        </NavLink>
      </div>

 
    <NavLink to="/Signin" className="main-nav-item" activeClassName="router-link-exact-active">
      <i className="fa fa-user-circle"></i>
      Signin
    </NavLink>
 
    </nav>
   </header>
  );
}

export default Header;
