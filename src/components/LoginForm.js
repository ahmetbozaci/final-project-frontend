import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../Redux/logIn/logInActions';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log('hi');

  const reduxState = useSelector((state) => state.logInReducer);
  // console.log('redux state', reduxState);

  useEffect(() => {
    if (reduxState.loggedIn === true) {
      navigate('/doctor');
    }
  }, [reduxState]);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exUser = {
      email,
      password,
    };
    dispatch(logInUser(exUser));
  };

  return (
    <div>
      <h1>Logo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <div>
        <p>Or</p>
        <button type="submit" onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
