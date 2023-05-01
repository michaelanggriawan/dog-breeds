import { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

import { UserAuth } from '@/common/context/authContext/authContext';

export default function RegisterPage() {
  const theme = useTheme();
  const btnstyle = { margin: '8px 0' };
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoadingSignUp, errorSignUpMessage } = UserAuth();
  return (
    <Box mt="5%" paddingLeft="20px" paddingRight="20px">
      <Box justifyContent="center" alignItems="center" display="flex">
        <Avatar style={{ backgroundColor: theme.palette.primary.main }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography paddingLeft="10px" variant="h5">
          Sign Up
        </Typography>
      </Box>
      <Box mt="20px">
        <TextField
          error={Boolean(errorSignUpMessage)}
          label="username"
          placeholder="Enter password"
          type="text"
          variant="outlined"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box mt="20px">
        <TextField
          error={Boolean(errorSignUpMessage)}
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box mt="20px">
        <TextField
          error={Boolean(errorSignUpMessage)}
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      {errorSignUpMessage && (
        <Typography color="error">{errorSignUpMessage}</Typography>
      )}
      <Box mt="20px">
        <LoadingButton
          loading={isLoadingSignUp}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => register({ email, password, username })}
        >
          Sign up
        </LoadingButton>
      </Box>
      <Typography textAlign="center">
        Do you have an account ?<Link href="/login">Sign In</Link>
      </Typography>
    </Box>
  );
}
