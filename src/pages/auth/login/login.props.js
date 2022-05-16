import { useRef } from 'react';
import { useAuth } from '@hooks/';

export const useLoginProps = () => {
  const [, setToken] = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setToken(data))
      .catch((err) => console.log(err));
  };

  return {
    handleSubmit,
    emailRef,
    passwordRef,
  };
};
