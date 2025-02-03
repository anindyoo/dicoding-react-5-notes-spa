import React, { useContext } from 'react';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { LocaleContext } from '../../App';

const RegisterInput = ({ register }) => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useInput('');
  const { locale } = useContext(LocaleContext);

  const fields = [
    {
      id: 'name',
      type: 'text',
      placeholder: 'Name',
      placeholderID: 'Nama',
      value: name,
      onChange: setName,
    },
    {
      id: 'email',
      type: 'email',
      placeholder: 'Email',
      placeholderID: 'Email',
      value: email,
      onChange: setEmail,
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      placeholderID: 'Kata sandi',
      value: password,
      onChange: setPassword,
    },
    {
      id: 'password-confirm',
      type: 'password',
      placeholder: 'Confirm password',
      placeholderID: 'Konfirmasi kata sandi',
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
      flex flex-col gap-2
      px-5"
    >
      {fields.map((field) => (
        <input
          key={field.id}
          id={field.id}
          type={field.type}
          placeholder={locale === 'en' ? field.placeholder : field.placeholderID}
          value={field.value}
          onChange={field.onChange}
          className={`
          register-input__${field.id}-input
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
        register-input__submit-button
        w-[calc(100vw-10vw)] sm:w-96
        p-3 mt-2
        rounded-md
        bg-primaryColor hover:brightness-90 dark:bg-primaryColor20Dark
        font-medium text-white"
      >
        {locale === 'en' ? 'Register' : 'Daftar'}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
