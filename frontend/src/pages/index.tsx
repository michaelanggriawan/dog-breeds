import { Box, Typography } from '@mui/material';
import Head from 'next/head';

import NavBar from '@/common/components/Layout/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m="5%">
        <Typography>Hello</Typography>
      </Box>
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => <NavBar>{page}</NavBar>;
