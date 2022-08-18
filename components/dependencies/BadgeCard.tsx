import {
  IconHeart,
  IconListDetails,
  IconInfoCircle,
  IconInfoSquare,
  IconBrandGithub,
} from '@tabler/icons';
import { Card, Text, Group, Badge, Button, ActionIcon, createStyles, Image } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Link from 'next/link';
// DO NOT DO THIS!!
// import Image from 'next/image'; // not sure this changed anything, v. using mantine Image

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    //OPTION: COMMENT NEXT 3 LINES OUT IF NO SECTION BORDERS DESIRED
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  projectRepo: string; // added by THE PAT
  projectDetails: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function BadgeCard({
  image,
  title,
  description,
  date,
  badges,
  projectRepo,
  projectDetails,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      {/* Remove 'withBorder' or 'radius' options to get rid of those */}
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{date}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Technologies Used:
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      {/* NOTE: ALTER HERE FOR DIFFERENT BUTTONS */}
      <Group mt="md">
        {/* <Button radius="md" style={{ flex: 1 }}>
          Details
        </Button> */}
        <Link href={projectDetails} passHref>
          <Button
            component="a"
            // href={projectRepo}
            // size="xl"
            radius="md"
            // variant="default"
            // className={classes.control}
            leftIcon={<IconInfoSquare size={20} />}
            style={{ flex: 1 }}
          >
            Details
          </Button>
        </Link>

        <Link href={projectRepo} passHref>
          <Button
            component="a"
            // href={projectRepo}
            // size="xl"
            radius="md"
            variant="default"
            // className={classes.control}
            leftIcon={<IconBrandGithub size={20} />}
          >
            Git Repo
          </Button>
        </Link>

        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconBrandGithub size={18} className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}
