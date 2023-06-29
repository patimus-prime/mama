import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
// import AppShellSimple from '../components/Navigation/AppShellSimple';
// import { HeaderSimple } from '../components/Navigation/HeaderSimple';
// delta for SSR according to https://mantine.dev/theming/emotion-cache/#server-side-rendering-with-custom-cache
// THIS ENTIRE APP IS USING MANTINE V6 AND NEXTJS 12
// import { rtlCache } from '../rtl-cache';
// import { HeaderSimple } from '../components/Navigation/HeaderSimple';
// TRY TO USE USER SYSTEM SETTINGS FOR COLOR INITIALLY:
// really seems to be vestigial and bad
// import {useColorScheme} from '@mantine/hooks'
// import { AppShell } from '@mantine/core';
import { HeaderSimple } from '../components/Navigation/HeaderSimple';
import { linksData } from '../components/LinksData';
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  // chat suggestion to try to use user system settings for color initially:
  // const currentColorScheme = useColorScheme() || 'dark';

  return (
    <>
      <Head>
        <title>Pat!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/baticon.svg" />
      </Head>
      <div>
        {/* Also try to use user system settings for color initially: change to {colorScheme || currentColorScheme} */}
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            // theme={{ colorScheme }}

            // see global styles etc. here: https://mantine.dev/styles/global-styles/
            // we can throw in scrollBehavior from HTML (intellisense gives some info too)
            // and this defines our scrollBehavior everywhere; therefore
            // whenever using Nextjs Link, jsut tell it scroll={false} to prevent it from
            // overridng the behavior we define here, which is to nicely scroll
            theme={{
              colorScheme,
              globalStyles: (theme) => ({
                '*, *::before, *::after': {
                  scrollBehavior: 'smooth',
                  // boxSizing: 'border-box',
                  // colorScheme: colorScheme
                }
              })
            }}

            withGlobalStyles
            withNormalizeCSS
          // emotionCache={rtlCache}
          >
            {/* next line is default; i... yeah apparently you just need to add the param lolololol */}
            {/* theme={{ colorScheme }} withGlobalStyles withNormalizeCSS> */}
            {/* <AppShellSimple> */}
            <AppShell
              header={
                <HeaderSimple links={linksData} />
              }>
              <Component {...pageProps} />
              <Notifications />
            </AppShell>
            {/* </AppShellSimple> */}
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
