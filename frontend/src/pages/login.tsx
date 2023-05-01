import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
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
          Sign In
        </Typography>
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
      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="Remember me"
      />
      <Box mt="20px">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
      </Box>
      <Typography textAlign="center">
        Dont have an account ?<Link href="/register">Sign Up</Link>
      </Typography>
    </Box>
  );
}
