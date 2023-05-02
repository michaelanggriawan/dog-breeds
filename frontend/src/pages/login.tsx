import { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Link from 'next/link';

import { UserAuth } from '@/common/context/authContext/authContext';

export default function LoginPage() {
  const theme = useTheme();
  const btnstyle = { margin: '8px 0' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, errorMessage, isLoadingSignIn } = UserAuth();
  return (
    <>
      <Head>
        <title>Dog Breeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mt="5%" paddingLeft="20px" paddingRight="20px">
        <Box justifyContent="center" alignItems="center" display="flex">
          <Avatar style={{ backgroundColor: theme.palette.primary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography paddingLeft="10px" variant="h5">
            Sign In
          </Typography>
        </Box>
        <Box mt="20px">
          <TextField
            error={Boolean(errorMessage)}
            label="Email"
            placeholder="Enter email"
            variant="outlined"
            fullWidth
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Box>
        <Box mt="20px">
          <TextField
            error={Boolean(errorMessage)}
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <Box mt="20px">
          <LoadingButton
            loading={isLoadingSignIn}
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={() => logIn({ email, password })}
          >
            Sign in
          </LoadingButton>
        </Box>
        <Typography textAlign="center">
          Dont have an account ?<Link href="/register">Sign Up</Link>
        </Typography>
      </Box>
    </>
  );
}
