import api from '@/common/services/local';

export const breedsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBreedsList: builder.query<ApiResponse<Array<string>>, void>({
      query: () => ({
        url: 'breeds',
        method: 'GET',
      }),
    }),
    selectBreed: builder.mutation<
      ApiResponse<{ selectedBreeds: Array<{ breed: string; image: string }> }>,
      { selectedBreeds: Array<string> }
    >({
      query: ({ selectedBreeds }) => ({
        url: 'breeds/save',
        method: 'POST',
        body: { selectedBreeds },
      }),
      invalidatesTags: ['GetSelectedBreeds'],
    }),
    getSelectedBreed: builder.query<
      ApiResponse<{ selectedBreeds: Array<{ breed: string; image: string }> }>,
      void
    >({
      query: () => ({
        url: 'breeds/save',
        method: 'GET',
      }),
      providesTags: ['GetSelectedBreeds'],
    }),
  }),
});

export const {
  useGetBreedsListQuery,
  useSelectBreedMutation,
  useGetSelectedBreedQuery,
} = breedsApi;
