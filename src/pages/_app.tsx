import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage  } from '@mantine/hooks';

import PageLoader from '../components/PageLoader/PageLoader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        { !loading ?
          (<PageLoader />) :
          (<Component {...pageProps} />)
        }
        
      </MantineProvider>
    </ColorSchemeProvider>
  );
  
}

export default MyApp
