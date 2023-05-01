import { Provider as ReduxProvider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import createEmotionCache from '@/common/utils/createEmoticonCache';
import store from '@/modules/redux/store';
import theme from '@/modules/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks');
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emoticonCache = clientSideEmotionCache,
}: AppProps & { emoticonCache: typeof clientSideEmotionCache }) {
  return (
    <CacheProvider value={emoticonCache}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
