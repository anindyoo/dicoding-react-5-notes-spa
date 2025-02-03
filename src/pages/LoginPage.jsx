import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/AuthInputs/LoginInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
import { LocaleContext } from '../App';

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);

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
    w-screen px-5
    mx-auto
    text-primaryColor"
    >
      <h1 className="
      login-page__title
      text-2xl font-medium text-center
      dark:text-white"
      >
        {locale === 'en' ? 'Login to Notes Single Page App' : 'Masuk ke Notes Single Page App'}
      </h1>
      <LoginInput login={onLoginHandler} />
      <p className="
      login-page__to-register
      text-lg"
      >
        <Link
          to="/register"
          className="hover:underline dark:text-secondaryColorDark"
        >
          {locale === 'en' ? 'Create new account here instead.' : 'Buat akun baru di sini.'}
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
