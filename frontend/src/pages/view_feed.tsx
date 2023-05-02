import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NavBar from '@/common/components/Layout/NavBar';

export default function ViewFeedPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dog Breeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m="5%">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button onClick={() => router.push('/')}>
            <Typography variant="h5">Select Dog Breeds</Typography>
          </Button>
          <Button onClick={() => router.push('/view_feed')}>
            <Typography variant="h5">View Feed</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

ViewFeedPage.getLayout = (page: React.ReactElement) => <NavBar>{page}</NavBar>;
