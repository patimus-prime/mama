import { createStyles, Paper, Text, Title, Button } from '@mantine/core';
// also imported rem from mantine core at the url below, 'rem'
// https://ui.mantine.dev/category/article-cards
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: 300,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  lastUpdate: string;
  projectLink: string;
}

export function ArticleCardImage({ image, title, lastUpdate, projectLink }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {/* not sure sure .category does, but i like the position */}
          {lastUpdate}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link href={projectLink} passHref>
        <Button
          component="a"
          radius="md"
          // leftIcon={<IconInfoSquare size={20} />}
          style={{ flex: 1 }}
          //   variant="white"
          //   color="dark"
          variant="gradient"
          size="lg"
          gradient={{ from: 'pink', to: 'blue', deg: 45 }}
        >
          Go to tool
        </Button>
      </Link>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}
