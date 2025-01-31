import React from 'react';
import RegisterInput from '../components/AuthInputs/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);

    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className="
    register-page
    flex flex-col items-center gap-7
    w-screen px-5
    mx-auto
    text-primaryColor
    dark:text-white"
    >
      <h1 className="
      register-page__title
      text-2xl font-medium text-center"
      >
        Register to Notes Single Page App
      </h1>
      <RegisterInput register={onRegisterHandler} />
      <p className="
      register-page__to-login
      text-lg"
      >
        <Link
          to="/"
          className="hover:underline dark:text-secondaryColorDark"
        >
          Login here instead.
        </Link>
      </p>
    </section>
  );
};

export default RegisterPage;
