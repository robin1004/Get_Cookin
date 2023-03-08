import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState(
    {
      email: '',
      username: '',
      password: ''
    }
  );

  const textHandler = (e) => {
    const input = e.target.value;
    const field = e.target.name
    setSignUpCredentials({...signUpCredentials, [field]: input})
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/signup-user', signUpCredentials)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form>
      <section>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            required
            onChange={textHandler}
            value={signUpCredentials.email}
          />
        </section>
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            onChange={textHandler}
            value={signUpCredentials.username}
          />
        </section>
        <section>
          <label htmlFor="new-password">Password</label>
          <input
            id="new-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            onChange={textHandler}
            value={signUpCredentials.password}
          />
        </section>
      <Link to="/search">
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
      </Link>
      </form>
    </div>
  );
};

export default SignUp;
