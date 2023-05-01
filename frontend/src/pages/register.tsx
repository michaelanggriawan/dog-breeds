import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

export default function LoginPage() {
  const theme = useTheme();
  const btnstyle = { margin: '8px 0' };
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
          label="username"
          placeholder="Enter password"
          type="text"
          variant="outlined"
          fullWidth
          required
        />
      </Box>
      <Box mt="20px">
        <TextField
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          type="email"
        />
      </Box>
      <Box mt="20px">
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
      </Box>
      <Box mt="20px">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign up
        </Button>
      </Box>
      <Typography textAlign="center">
        Do you have an account ?<Link href="/login">Sign In</Link>
      </Typography>
    </Box>
  );
}
