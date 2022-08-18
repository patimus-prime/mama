import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Container,
  Space,
} from '@mantine/core';
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconSailboat,
  IconRobot,
  IconCloudComputing,
  IconDatabase,
  IconFilter,
} from '@tabler/icons';

import { GithubIcon } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconSailboat,
    title: 'AutoDock Vina',
    description:
      'This is the only open-source molecular docking software \
    that has integrated capability to account for macrocycle conformations',
  },
  {
    icon: IconCloudComputing,
    title: 'Cloud-based',
    description:
      'Project based in AWS EC2, enabling further development \
    of front-end tools (see below, or Tools)',
  },
  {
    icon: IconFilter,
    title: 'Find optimal proteins',
    description:
      'As of 18 August 2022, much of the reported efforts to engineer better \
      hemoproteins have not confirmed that the studied protein(s) have a good binding \
      affinity to their cofactor, as compared to other hemoproteins. This is often \
      outside the scope of those studies, but is of interest for optimizing the protein',
  },
  {
    icon: IconDatabase,
    title: 'Databases stored in S3',
    description: 'AWS S3 easily connects to AWS Lambda and Gateway ',
  },
];

export function FeatureHeme() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container>
      {/* <Space h="sm" /> */}

      <div className={classes.wrapper} id="featureHeme">
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Hemoproteins' Binding Energy Distribution
            </Title>
            <Text color="dimmed">
              Hemoproteins such as cytochrome P-450s have great potential in industrial catalysis,
              environmental remediation, and pharmaceutical production. Efforts to engineer more
              efficient hemoproteins have not yet considered variability of individual hemoproteins'
              binding affinity to the heme cofactor, which may affect enzymatic turnover/reaction
              efficiency. Here I am determining if this is a valid concern and if ideal heme pocket
              configurations exist.
            </Text>
            <Space h="xl" />
            <Button
              component="a"
              href="https://github.com/patimus-prime/"
              size="lg"
              radius="md"
              variant="default"
              // className={classes.control}
              leftIcon={<GithubIcon size={20} />}
            >
              Git Repo
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </Container>
  );
}
