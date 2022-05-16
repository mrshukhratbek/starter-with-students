// @mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// @util
import { hoc } from 'src/utils/hoc';

// @hook
import { useLoginProps } from './login.props';

// @components
import { Form } from './login.style';

export const Login = hoc(useLoginProps, ({ handleSubmit, emailRef, passwordRef }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          inputRef={emailRef}
          id="email"
          label="Email"
          variant="outlined"
          defaultValue="eve.holt@reqres.in"
          type="email"
        />
        <TextField
          inputRef={passwordRef}
          id="password"
          defaultValue="cityslicka"
          type="password"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
});
