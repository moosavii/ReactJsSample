import { createTheme } from '@mui/material/styles';
const CustomTheme = createTheme({
  direction: 'rtl',
  typography: {
    //fontSize: 14,
    fontFamily: [
      'tahoma'
    ].join(',')
  },
});

export default CustomTheme;
