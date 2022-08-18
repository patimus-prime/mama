import { createStyles, Container, Title, Text, List, ThemeIcon } from '@mantine/core';

import Image from 'next/image';

import { IconPaw } from '@tabler/icons';

import ProfSherlock from '../../public/sherlock_prof.jpg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function Pat() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Sherlock</Title>
            <Text color="dimmed" mt="md">
              He is the best. He has one white paw. A friend suggested naming him Michael Jackson.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {/* NOTE: ALTER HERE FOR THE ICON/BULLETS */}
                  <IconPaw size={17} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b> Rescue boi </b> – Sherlock is, according to this adoption papers, an Australian
                Kelpie/Mix.
              </List.Item>
              <List.Item>
                <b> The drama </b> – I suspect he's part chihuahua, because he can be{' '}
                <b> grouchy</b>. Also he's smaller, and cuter than the dogs that come up in
                pure-bred photos.
              </List.Item>
              <List.Item>
                <b> Mexican? </b> – He likes spicy food and he responds better in Spanish. I'm
                pretty sure he was a street dog in Tucson for a while.
              </List.Item>
              <List.Item>
                <b> Dog-shaped person </b> – He enjoys long walks, car rides, and wearing
                fashionable clothing.
              </List.Item>
            </List>
          </div>

          <Image src={ProfSherlock} />
        </div>
      </Container>
    </div>
  );
}
