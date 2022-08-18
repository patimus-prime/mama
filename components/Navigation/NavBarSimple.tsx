import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
  TablerIcon,
  IconHome,
  IconBooks,
  IconPaw,
  IconBat,
  IconTools,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons';

import Link from 'next/link';

import {
  Router, // == or =/= to BrowserRouter?
  BrowserRouter,
  // Link,
  Route,
  Routes,
} from 'react-router-dom';

import { MantineLogo } from '@mantine/ds';
import HomePage from '../../pages';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  // This would be the hero etc. summary:
  { label: 'Home', icon: IconHome, link: '/' },
  { icon: IconBooks, label: 'Projects', link: '/Projects' },
  //   {
  //     label: 'Projects',
  //     icon: IconBooks,
  //     initiallyOpened: false,
  //     link: '/Projects',
  //     //   links: [
  //     //     { label: "Heme Binding Energy Distributions", link: "/" },
  //     //     { label: "Multiclassification: SMILES to L1", link: "/" },
  //     //     { label: "Master's Thesis", link: "/" },
  //     //     { label: "Web Scraping for Anagrams/Palindromes", link: "/" },
  //     //   ],
  //   },

  {
    label: 'Tools',
    icon: IconTools,
    link: '/Tools/Docking',
  },

  { label: 'Sherlock!', icon: IconPaw, link: '/aboutSherlock' },

  { label: 'Contact', icon: IconBat, link: '/aboutMe' },
];

export function NavBarSimple() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    // <NavbarLink
    //   {...link}
    //   key={link.label}
    //   active={index === active}
    //   onClick={() => setActive(index)}
    // />
    <Link href={link.link}>{link.label}</Link>
  ));

  return (
    // <BrowserRouter>
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <MantineLogo type="mark" size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>

      {/* THIS GOES SOMEWHERE INSIDE THE APPSHELL/NAVBAR IDK HOMIE */}
    </Navbar>
  );
}
