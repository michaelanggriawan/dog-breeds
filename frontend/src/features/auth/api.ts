import api from '@/common/services/local';

export const nameApi = api.injectEndpoints({
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
  }),
});

export const { useSignInMutation, useSignUpMutation } = nameApi;
