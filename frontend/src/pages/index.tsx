import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Head from 'next/head';

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
  const { data } = useGetBreedsListQuery();
  const { data: breeds } = data || {};
  const [selectBreed] = useSelectBreedMutation();
  const { data: { data: selectedBreeds } = {} } = useGetSelectedBreedQuery();
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

  return (
    <>
      <Head>
        <title>Dog Breeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m="5%">
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
        <Box mt="3%" display="flex" justifyContent="space-between">
          {selectedBreeds?.selectedBreeds &&
            selectedBreeds.selectedBreeds.map((item) => {
              return (
                <SelectedBreedCard image={item.image} breed={item.breed} />
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
