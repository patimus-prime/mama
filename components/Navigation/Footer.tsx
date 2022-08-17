import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
  Space,
  Image,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBat } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import NoThisIsPatrick from "./pics/no_this_is_patrick.gif";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSimple() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <IconBat size={28} /> */}
        <Text size={28}>
          {/* <IconBat size={28} />  */}
          patrick.finnerty42@gmail.com
        </Text>

        <Group spacing={20} className={classes.links} position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/patrick-finnerty"
            size="lg"
          >
            <IconBrandLinkedin size={32} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.github.com/patimus-prime"
            size="lg"
          >
            <IconBrandGithub size={32} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>

      <Container>
        {/* Regrettably ugly, but seems space only has a few args in Mantine: */}
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Image src={NoThisIsPatrick} />
        <Space h="xl" />
        <Space h="xl" />
      </Container>
    </div>
  );
}
