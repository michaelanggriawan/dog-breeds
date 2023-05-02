import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Head from 'next/head';
import { useRouter } from 'next/router';

import SelectedBreedCard from '@/common/components/Breeds/SelectedBreedCard';
import NavBar from '@/common/components/Layout/NavBar';
import {
  useGetBreedsListQuery,
  useGetSelectedBreedQuery,
  useSelectBreedMutation,
} from '@/features/breeds/breeds';

import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [breed, setBreed] = useState('');
  const { data, isFetching } = useGetBreedsListQuery();
  const { data: breeds } = data || {};
  const [selectBreed] = useSelectBreedMutation();
  const { data: { data: selectedBreeds } = {} } = useGetSelectedBreedQuery();
  const router = useRouter();
  const handleChange = async (e: SelectChangeEvent) => {
    try {
      setBreed(e.target.value);
      await selectBreed({
        selectedBreeds: [e.target.value],
      }).unwrap();
      toast.success(`${e.target.value} is added`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toast.error(err?.data?.errors?.[0].message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

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
        <Typography textAlign="center" variant="h5" mb="2%" mt="1%">
          Select dog breeds (Up to 3 breeds)
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Breeds</InputLabel>
          <Select
            onChange={handleChange}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Breeds"
            value={breed}
          >
            {breeds &&
              breeds.map((item) => {
                return (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Box
          mt="3%"
          display="flex"
          justifyContent={{ md: 'space-between', sm: 'center', xs: 'center' }}
          alignItems="center"
          flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
        >
          {selectedBreeds?.selectedBreeds &&
            selectedBreeds.selectedBreeds.map((item) => {
              return (
                <Box mt={{ md: '0%', sm: '5%', xs: '5%' }} key={item.breed}>
                  <SelectedBreedCard image={item.image} breed={item.breed} />
                </Box>
              );
            })}
        </Box>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Box>
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => <NavBar>{page}</NavBar>;
