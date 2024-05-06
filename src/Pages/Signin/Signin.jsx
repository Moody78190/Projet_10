import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Reducers/apiSlice";
import { setToken } from "../../Reducers/authSlice";


const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    login(username, password)
      .then(data => {

        if (!data.body) {
          throw data
        }

        dispatch(setToken(data.body.token))
        navigate('/profile')
      })
      .catch(err => {
        setError(err.message || err)
      })
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
        <div>{error ? error : ''}</div>
      </section>
    </main>
  );
}

export default Signin;
