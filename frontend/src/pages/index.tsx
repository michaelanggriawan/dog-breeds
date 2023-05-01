import {
  Box,
  Container,
  Grid,
  Link,
  Skeleton,
  Typography,
} from '@mui/material';
import Head from 'next/head';

import Image from 'next/image';
import RouteLink from '@/common/components/Atoms/RouteLink/RouteLink';
import { useGetNameQuery } from '@/features/name/api';
import vercelLogo from '@/public/vercel.svg';

export default function Home() {
  const { data, isSuccess, fulfilledTimeStamp } = useGetNameQuery();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box py="8" flexDirection="column" alignItems="center" flex={1}>
          <Typography variant="h1">
            Welcome to <Link href="https://nextjs.org">Next.js!</Link>
          </Typography>
          <Typography fontWeight="semibold" fontSize="lg">
            Go to <RouteLink href="/new-page">New Page</RouteLink>
          </Typography>
          {isSuccess ? (
            data &&
            fulfilledTimeStamp && (
              <Typography variant="body1">
                Local API /hello processed {data.data.name} within
                {fulfilledTimeStamp - data.data.timestamp} ms
              </Typography>
            )
          ) : (
            <Skeleton />
          )}

          <Typography mt="8">
            Get started by editing src/pages/index.tsx
          </Typography>

          <Grid container spacing={4} columns={[1, 2]} mt={[4, 12, 16]}>
            <Grid item>
              <Link href="https://nextjs.org/docs">
                <Typography variant="h3">Documentation &rarr;</Typography>
                <Typography variant="body1">
                  Find in-depth information about Next.js features and API.
                </Typography>
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://nextjs.org/learn">
                <Typography variant="h3">Learn &rarr;</Typography>
                <Typography>
                  Learn about Next.js in an interactive course with quizzes!
                </Typography>
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://github.com/vercel/next.js/tree/master/examples">
                <Typography variant="h3">Examples &rarr;</Typography>
                <Typography>
                  Discover and deploy boilerplate example Next.js projects.
                </Typography>
              </Link>
            </Grid>

            <Grid item>
              <Link href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                <Typography variant="h3">Deploy &rarr;</Typography>
                <Typography>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box justifyContent="center" alignItems="center" py="2">
          <Link
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            Powered by
            <Image src={vercelLogo} alt="Vercel Logo" width={64} height={64} />
          </Link>
        </Box>
      </Container>
    </>
  );
}
