import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

// components
import GlobalStyles from '@/modules/theme/globalStyles';
// import componentsOverride from '@/modules/theme/overrides';
//
import palette from '@/modules/theme/pallete';
import typography from '@/modules/theme/typography';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      typography,
      shape: { borderRadius: 8 },
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  //   theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
