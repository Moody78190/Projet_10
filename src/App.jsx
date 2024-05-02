import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Signin from './Pages/Signin/Signin.jsx';
import User from './Pages/User/User.jsx';
import Header from './Layouts/Header/Header.jsx';
import Footer from './Layouts/Footer/Footer.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/profile' element={<User />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
