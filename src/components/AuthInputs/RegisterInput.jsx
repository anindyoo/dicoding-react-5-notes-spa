import React from 'react';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';

const RegisterInput = ({ register }) => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useInput('');

  const fields = [
    {
      id: 'name',
      type: 'text',
      placeholder: 'Name',
      value: name,
      onChange: setName,
    },
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
    {
      id: 'password-confirm',
      type: 'password',
      placeholder: 'Confirm password',
      value: passwordConfirm,
      onChange: setPasswordConfirm,
    },
  ];

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      return alert('Password validation does not match!');
    }

    register({ name, email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="
      register-input
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
          register-input__${field.id}-input
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
        register-input__submit-button
        w-96
        p-3 mt-2
        rounded-md
        bg-primaryColor hover:brightness-90
        font-medium text-white"
      >
        Register
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
