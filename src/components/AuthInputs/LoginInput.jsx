import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const fields = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'Email',
      value: email,
      onChange: setEmail,
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      value: password,
      onChange: setPassword,
    },
  ];

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="
      login-input
      flex flex-col gap-2"
    >
      {fields.map((field) => (
        <input
          key={field.id}
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          value={field.value}
          onChange={field.onChange}
          className={`
          login-input__${field.id}-input
          w-[calc(100vw-10vw)] sm:w-96
          p-3
          rounded-md
          border border-tertiaryColor dark:border-accentColor30Dark
          bg-secondaryColor bg-opacity-20 dark:bg-backgroundSecondaryDark
          placeholder:text-accentColor dark:placeholder:text-accentColor20Dark`}
        />
      ))}
      <button
        type="submit"
        className="
        login-input__submit-button
        w-[calc(100vw-10vw)] sm:w-96
        p-3 mt-2
        rounded-md
        bg-primaryColor hover:brightness-90 dark:bg-primaryColor20Dark
        font-medium text-white"
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
