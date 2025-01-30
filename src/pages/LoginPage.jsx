import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/AuthInputs/LoginInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async (user) => {
    const { error, data } = await login(user);

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="
    login-page
    flex flex-col items-center gap-7
    text-primaryColor"
    >
      <h1 className="
      login-page__title
      text-2xl font-medium"
      >
        Login to Notes Single Page App
      </h1>
      <LoginInput login={onLoginHandler} />
      <p className="
      login-page__to-register
      text-lg"
      >
        <Link
          to="/register"
          className="hover:underline"
        >
          Create new account here instead.
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
