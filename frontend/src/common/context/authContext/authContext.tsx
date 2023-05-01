import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { useSignInMutation } from '@/features/auth/api';

export interface AuthContextType {
  logIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logOut: () => void;
  errorMessage: string;
}

const AuthContext = createContext<AuthContextType>({
  logIn: async ({ email, password }: { email: string; password: string }) => {},
  logOut: () => {},
  errorMessage: '',
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [signIn, { error }] = useSignInMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const logIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
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
        setErrorMessage(error?.data?.errors?.[0].message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signIn],
  );

  const logOut = () => localStorage.clear();

  const authContextProviderValue = useMemo(
    () => ({ logIn, logOut, errorMessage }),
    [errorMessage, logIn],
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
