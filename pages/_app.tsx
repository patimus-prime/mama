import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import AppShellNested from '../components/Navigation/AppShell';
import { HeaderSimple } from '../components/Navigation/HeaderSimple';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  // This is the button! The initial props are given at the bottom of this .tsx
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    // const nextColorScheme = value || [colorScheme[] = useState('dark'))
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Pat!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/baticon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <AppShell
            padding="md"
            // navbar={<NavBarSimple />}
            // header={<Header height={60} p="xs">{/* Header content */}</Header>}
            header={
              <HeaderSimple
                links={[
                  { label: 'Home', link: '/' },
                  { label: 'Projects', link: '/Projects' },
                  { label: 'Tools', link: '/Tools' },
                  { label: 'About', link: '/About' },
                  { label: 'Contact', link: '/Contact' },
                ]}
              />
            }
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            })}
          >
            <NotificationsProvider>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
            </NotificationsProvider>
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

// sets initial props to be dark, then they can click on it for light if they really want
App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark',
});
