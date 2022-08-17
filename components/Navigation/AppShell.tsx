import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  AppShellProps,
} from '@mantine/core';
import { NavbarNested } from '../dependencies/NavBarNested';
import { HeaderMiddle } from '../dependencies/Header';
import { NavBarSimple } from './NavBarSimple';
// import { Hero_Landing } from './Hero_landing';

export default function AppShellNested() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      // THIS IS SUS BUT SHOULD KEEP IT THE SAME SHIT EVERY PAGE:
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        // <NavbarNested />
        <NavBarSimple />
        // <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        //   <Text>Application navbar</Text>
        // </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }

      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }

      header={
        // <Header height={70} p="md">
        //   <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        //     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        //       <Burger
        //         opened={opened}
        //         onClick={() => setOpened((o) => !o)}
        //         size="sm"
        //         color={theme.colors.gray[6]}
        //         mr="xl"
        //       />
        //     </MediaQuery>

        //     <Text>Application header</Text>

        //   </div>
        // </Header>
        <HeaderMiddle links={[{ label: 'Home', link: '/' }]} />
        // links: [
        //   { label: 'Heme Binding Energy Distributions', link: '/' },
        //   { label: 'Multiclassification: SMILES to L1', link: '/' },
        //   { label: 'Master\'s Thesis', link: '/'},
        //   { label: 'Web Scraping for Anagrams/Palindromes', link: '/'},
        // ]
      }
    >
      {/* <Hero_Landing/> */}
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
    </AppShell>
  );
}
