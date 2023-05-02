import { Box, Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ViewFeedCard from '@/common/components/Breeds/ViewFeedCard';
import NavBar from '@/common/components/Layout/NavBar';
import { useGetRandomImageQuery } from '@/features/breeds/breeds';

export default function ViewFeedPage() {
  const router = useRouter();
  const { data: { data: breeds } = {}, isFetching } = useGetRandomImageQuery();

  if (isFetching)
    return (
      <Box mt="5%" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );

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
        <Box>
          {breeds &&
            breeds.map((item) => (
              <Box mt="2%">
                <Typography variant="h3" mb="2%">
                  {item.breed}
                </Typography>
                <Box
                  display="flex"
                  justifyContent={{
                    md: 'space-between',
                    sm: 'center',
                    xs: 'center',
                  }}
                  alignItems="center"
                  flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
                >
                  {item.images.map((image) => (
                    <ViewFeedCard breed={item.breed} image={image} />
                  ))}
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
}

ViewFeedPage.getLayout = (page: React.ReactElement) => <NavBar>{page}</NavBar>;
