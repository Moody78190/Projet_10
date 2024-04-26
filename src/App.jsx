import {Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home/Home.jsx';
import Signin from './Pages/Signin/Signin.jsx';
import User from './Pages/User/User.jsx';
import Header from './Layouts/Header/Header.jsx';
import Footer from './Layouts/Footer/Footer.jsx';


function App() {
  return (
    <div> 
      <Header/>
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/SignIn' element={<Signin />} />
        <Route path='/User' element={<User />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
