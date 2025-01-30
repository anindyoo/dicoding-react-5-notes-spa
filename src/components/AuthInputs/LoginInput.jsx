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
          w-96
          p-3
          rounded-md
          border border-tertiaryColor
          bg-secondaryColor bg-opacity-20
          placeholder:text-accentColor`}
        />
      ))}
      <button
        type="submit"
        className="
        login-input__submit-button
        w-96
        p-3 mt-2
        rounded-md
        bg-primaryColor hover:brightness-90
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
