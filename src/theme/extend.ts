import { extendTheme } from '@chakra-ui/react';
import { Colors } from './colors';

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: Colors.BACKGROUND,
        color: Colors.TEXT,
        fontSize: ['14px', '16px', '18px'],
      },
    },
  },
});
