import { Box } from '@mui/material';
import RouteLink from '@/common/components/Atoms/RouteLink/RouteLink';

export default function NewPage() {
  return (
    <Box>
      Back to <RouteLink href="/">Home</RouteLink>
    </Box>
  );
}
