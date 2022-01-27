import { createTheme } from '@mui/material/styles';
const CustomTheme = createTheme({
  direction: 'rtl',
  typography: {
    //fontSize: 14,
    fontFamily: [
      'b nazanin',
      'Arial'
    ].join(','),
  },
});

export default CustomTheme;
