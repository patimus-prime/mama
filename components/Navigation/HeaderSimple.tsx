import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  ActionIcon,
  Text,
  Button,
  Space,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { GithubIcon } from '@mantine/ds';

import { IconBat, IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons';

// strongly suspect we need to make a change to link behavior :)))))
import Link from 'next/link';
import React from 'react';
import { useHref } from 'react-router-dom';
import { resolveHref } from 'next/dist/shared/lib/router/router';

import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';

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

  const items = links.map((link) => (
    <Link href={link.link} passHref>
      <a
        key={link.label}
        // href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}

        // LMFAO IT'S SO EASY JUST COMMENT OUT THE ONCLICK SHIT AND KEEP THE LABEL OMG FUCK

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
      </a>
    </Link>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        {/* <IconBat size={28} /> */}

        {/* <Group spacing={5}>
          <Text size={20}>patrick.finnerty42@gmail.com</Text>
        </Group> */}
        {/* ADD OTHER PAGES/DROP DOWNS HERE: */}

        <Group spacing={5} className={classes.links}>
          <ColorSchemeToggle />
          <Space w="md" />
          {items}
        </Group>

        <Group spacing={10} className={classes.social} position="right" noWrap>
          <ActionIcon component="a" href="https://www.linkedin.com/in/patrick-finnerty" size="lg">
            <IconBrandLinkedin size={22} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component="a" href="https://www.github.com/patimus-prime" size="lg">
            <IconBrandGithub size={22} stroke={1.5} />
          </ActionIcon>

          {/* TREMENDOUS solution to email from here, the "Code_Elixir" answer, look at whole thread: 
          https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea */}

          <Button
            compact={true} //GOOD
            component="a"
            // href="https://www.linkedin.com/in/patrick-finnerty"
            // size="xl"
            radius="sm"
            variant="subtle"
            color="gray"
            // leftIcon={<IconMail size={22} stroke={1.5} />}
            // className={classes.control}

            onClick={() => (window.location.href = 'mailto:patrick.finnerty42@gmail.com')}
          >
            <IconMail size={22} stroke={1.5} />
          </Button>

          {/* <ActionIcon
            component="a"
            onClick={() => (window.location.href = 'patrick.finnerty42@gmail.com')}
          >
            <IconMail size={22} stroke={1.5} />
          </ActionIcon> */}

          {/* <button 
          onClick={() => (window.location.href = 'mailto:yourmail@domain.com')}>
            Contact Me
          </button> */}
          {/* <Text size={22}>patrick.finnerty42@gmail.com</Text> */}

          {/* <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon> */}
        </Group>
        {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}
      </Container>
    </Header>
  );
}
