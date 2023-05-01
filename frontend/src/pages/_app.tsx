import { ReactNode, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { AuthContextProvider } from '@/common/context/authContext/authContext';
import createEmotionCache from '@/common/utils/createEmoticonCache';
import store from '@/modules/redux/store';
import ThemeProvider from '@/modules/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

const clientSideEmotionCache = createEmotionCache();

function LoginGuard({ children }: { children: ReactNode }) {
  const router = useRouter();

  const isAuthenticated =
    typeof window !== 'undefined' &&
    Boolean(localStorage.getItem('accessToken'));

  useEffect(() => {
    if (!isAuthenticated) {
      if (router.pathname !== '/register' && router.pathname !== '/login') {
        router.push('/login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <Box>{children}</Box>;
}

export default function App({
  Component,
  pageProps,
  emoticonCache = clientSideEmotionCache,
}: AppProps & { emoticonCache: typeof clientSideEmotionCache }) {
  return (
    <CacheProvider value={emoticonCache}>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <AuthContextProvider>
            <LoginGuard>
              <Component {...pageProps} />
            </LoginGuard>
          </AuthContextProvider>
        </ThemeProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
