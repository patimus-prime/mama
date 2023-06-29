// 20 June 2023: Alterations to the tabler/icons e.g. Github or Linkedin are passed parameters for sizing;
// we instead use <div style> etc and wrap instead of using the Icon component. This is because the Icon component is shit

import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  ActionIcon,
  Button,
  Space,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Link from 'next/link';
import React from 'react';


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  // brought form other header type, may remove depending:
  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  // with Next.js Link implementation, this is broken. linkActive is not updated
  // perhaps in future iteration fix this up!... maybe.
  linkActive: {
    // '&, &:hover': {
    //   backgroundColor: theme.fn.variant
    //   ({
    //     variant: 'light',
    //     color: theme.primaryColor,
    //   }).background,
    //   color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    // },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  // legacyBehavior below to support <Link> and child <a> tag
  // this is mantine's setup, so, trying to keep it as is in case this fucks more up
  const items = links.map((link) => (
    <Link
      // onClick={() => {
      //   document.getElementById(link.link)?.scrollIntoView({ behavior: 'smooth' });
      // }}
      href={link.link}
      // passHref
      scroll={false}
      key={link.label}
      // href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}


    // Comment out ability to update 'Active'; link.label kept below though.

    // onClick={(event) => {
    //   event.preventDefault();
    //   setActive(href); //link.link returns string, therefore need href as string
    // }}
    >
      {link.label}
      {/* // link.label is what must be styled!
      <Link href={link.link}>
        {link.label} 
        </Link>

      //  */}
      {/* </a> */}
    </Link>
  ));

  return (
    <Header suppressHydrationWarning height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        {/* ADD OTHER PAGES/DROP DOWNS HERE: */}

        <ColorSchemeToggle />

        <Group position="left" spacing={5} className={classes.links}>
          <Space w="md" />
          {items}
          {/* <Link passHref href="#sherbID"> HHH</Link> */}
        </Group>

        <Group spacing={10} className={classes.social} position="right" noWrap>
          <ActionIcon component="a" href="https://www.linkedin.com/in/patrick-finnerty" size="lg"
            sx={(theme) => ({
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], //ttheme.colors.gray[0], // Gray-ish background on hover
              },
            })} //end sx
          >
            <div style={{ fontSize: '22px', strokeWidth: '1.5px' }}>
              <IconBrandLinkedin size={22} stroke={1.5} />
            </div>
          </ActionIcon>
          <ActionIcon component="a" href="https://www.github.com/patimus-prime" size="lg"
            sx={(theme) => ({
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], //ttheme.colors.gray[0], // Gray-ish background on hover
              },
            })} //end sx>
          >
            <div style={{ fontSize: '22px', strokeWidth: '1.5px' }}>
              <IconBrandGithub size={22} stroke={1.5} />

            </div>
          </ActionIcon>

          {/* HOPEFUL ALTTERNATIVE */}
          <ActionIcon
            component="a"
            onClick={() => (window.location.href = 'mailto:pat@patrickfinnerty.com')}
            size="xl"
            sx={(theme) => ({
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], //ttheme.colors.gray[0], // Gray-ish background on hover
              },
            })} //end sx>
          >
            <div style={{ fontSize: '22px', strokeWidth: '1.5px' }}>
              <IconMail size={22} stroke={1.5} />

            </div>

          </ActionIcon>

          {/* TREMENDOUS solution to email from here, the "Code_Elixir" answer, look at whole thread: 
          https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea */}

          {/* 
          <Button
            compact={true} //GOOD
            component="a"
            radius="sm"
            variant="subtle"
            color="gray"
            onClick={() => (window.location.href = 'mailto:patrick.finnerty42@gmail.com')}
          >
            <div style={{ fontSize: '22px', strokeWidth: '1.5px' }}>
              <IconMail size={22} stroke={1.5} />
            </div>
          </Button>
         */}
        </Group>

        {/* <Group position="center" style={{ marginLeft: '0px' }}> Add negative margin */}
        {/* <ColorSchemeToggle /> */}
        {/* </Group> */}


        {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}
      </Container>
    </Header>
  );
}  