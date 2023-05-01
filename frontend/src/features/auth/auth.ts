import api from '@/common/services/local';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<
      ApiResponse<User>,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: 'auth/signin',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    signUp: builder.mutation<
      ApiResponse<User>,
      { email: string; username: string; password: string }
    >({
      query: ({ email, username, password }) => ({
        url: 'auth/signup',
        method: 'POST',
        body: {
          email,
          username,
          password,
        },
      }),
    }),
    getUser: builder.mutation<
      ApiResponse<{ userId: string; username: string; email: string }>,
      void
    >({
      query: () => ({
        url: 'auth/user',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetUserMutation } =
  authApi;
