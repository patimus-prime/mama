import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  ActionIcon,
  Text,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { GithubIcon } from "@mantine/ds";

import { IconBat, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  // brought form other header type, may remove depending:
  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
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
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        <IconBat size={28} />
        <Text size={28}>{/* <IconBat size = {28}/> Pat! */}</Text>

        {/* ADD OTHER PAGES/DROP DOWNS HERE: */}
        {/* <Group spacing={5} className={classes.links}>
          {items}
        </Group> */}

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/patrick-finnerty"
            size="lg"
          >
            <IconBrandLinkedin size={22} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.github.com/patimus-prime"
            size="lg"
          >
            <IconBrandGithub size={22} stroke={1.5} />
          </ActionIcon>
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
