import { ReactNode, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { AuthContextProvider } from '@/common/context/authContext/authContext';
import createEmotionCache from '@/common/utils/createEmoticonCache';
import store from '@/modules/redux/store';
import ThemeProvider from '@/modules/theme';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

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
}: MyAppProps & { emoticonCache: typeof clientSideEmotionCache }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emoticonCache}>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <AuthContextProvider>
            <LoginGuard>{getLayout(<Component {...pageProps} />)}</LoginGuard>
          </AuthContextProvider>
        </ThemeProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
