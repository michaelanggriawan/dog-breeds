import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { useSignInMutation, useSignUpMutation } from '@/features/auth/api';

export interface AuthContextType {
  logIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logOut: () => void;
  register: ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => Promise<void>;
  errorMessage: string;
  isLoadingSignIn: boolean;
  isLoadingSignUp: boolean;
  errorSignUpMessage: string;
}

const AuthContext = createContext<AuthContextType>({
  logIn: async ({ email, password }: { email: string; password: string }) => {},
  register: async ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {},
  logOut: () => {},
  errorMessage: '',
  isLoadingSignIn: false,
  isLoadingSignUp: false,
  errorSignUpMessage: '',
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [signIn, { isLoading: isLoadingSignIn }] = useSignInMutation();
  const [signUp, { isLoading: isLoadingSignUp }] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const [errorSignUpMessage, setErrorSignUpMessage] = useState('');
  const router = useRouter();
  const logIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        setErrorMessage('');
        const response = await signIn({
          email,
          password,
        }).unwrap();

        const { token, expToken, userId } = response.data;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expToken', expToken.toString());
        router.push('/');
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setErrorMessage(err?.data?.errors?.[0].message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signIn],
  );

  const register = useCallback(
    async ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => {
      try {
        setErrorSignUpMessage('');
        const response = await signUp({ username, email, password }).unwrap();
        const { token, expToken, userId } = response.data;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expToken', expToken.toString());
        router.push('/');
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setErrorSignUpMessage(err?.data?.errors?.[0].message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signUp],
  );

  const logOut = () => localStorage.clear();

  const authContextProviderValue = useMemo(
    () => ({
      logIn,
      logOut,
      errorMessage,
      isLoadingSignIn,
      register,
      isLoadingSignUp,
      errorSignUpMessage,
    }),
    [
      errorMessage,
      errorSignUpMessage,
      isLoadingSignIn,
      isLoadingSignUp,
      logIn,
      register,
    ],
  );

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
