import { alpha } from '@mui/material/styles';

const WHITE = {
  900: '#FFFFFF',
};

const GREY = {
  900: '#171717',
  800: '#262626',
  700: '#404040',
  600: '#525252',
  500: '#737373',
  400: '#A3A3A3',
  300: '#D4D4D4',
  200: '#E5E5E5',
  100: '#F5F5F5',
  50: '#FAFAFA',
};

const PRIMARY = {
  900: '#9B660A',
  800: '#E3960F',
  700: '#F1AC34',
  600: '#F3B64C',
  500: '#F6C878',
  400: '#F7CE87',
  300: '#F9DDAB',
  200: '#FBE7C3',
  100: '#FDF0DB',
  50: '#FEFAF3',
};

const GREEN = {
  900: '#63685A',
  800: '#858877',
  700: '#A6AD95',
  600: '#C7D0B3',
  500: '#DDE7C7',
  400: '#E6EDD5',
  300: '#ECF2E0',
  200: '#F1F5E9',
  100: '#F7F9F1',
  50: '#FCFDF9',
};

const BLUE = {
  900: '#626667',
  800: '#838889',
  700: '#A4AAAC',
  600: '#C4CCCE',
  500: '#DAE3E5',
  400: '#E3EAEC',
  300: '#EBF0F1',
  200: '#F0F4F5',
  100: '#F6F8F9',
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  blue: BLUE,
  green: GREEN,
  gray: GREY,
  white: WHITE,
  error: ERROR,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default {
  ...COMMON,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    ...COMMON.action,
    active: GREY[600],
  },
};
