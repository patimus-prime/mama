// this layout based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx

import { Grid, Text, Container, Title, Button, Space, createStyles } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
// import { GithubIcon } from '@mantine/ds';
import Smiles_Img from '../../public/sid_440144312.png';
import { IconBrandGithub } from '@tabler/icons-react';
// this function I think ultimately unnecessary; not included in DockTool
const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
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

export function FeatureSmiles() {
  const { classes } = useStyles(); // potentially unnecessary line, see above

  return (
    <Container>
      <Space h="xl" />

      <Grid justify="space-around">
        <Grid.Col xs={6} sm={4} md={4} lg={4}>
          <Image src={Smiles_Img} alt={'sample2'} style={{ width: '100%', maxWidth: 360 }} />
        </Grid.Col>
        <Grid.Col xs={6} sm={8} md={8} lg={8}>
          <Space h="xl" />
          <Space h="md" />

          <div id="featureSmiles">
            <Text align="right">
              <Title>Smiles to L1</Title>
              Given only a ligand SMILES code (produces a featureless structure as seen to the
              left), predict that ligand's target protein L1 classification. The L1 classification
              is extremely broad, e.g. 'Enzyme', 'Membrane Protein'. RDKit was used to generate
              features about the molecule weight, polarity, etc. that were fed into machine learning
              classification algorithms.
              {/* </Text> */}
              {/* </div> */}
              <Space h="xl" />
              <Link
                href="https://github.com/patimus-prime/ML_notebooks/blob/master/SMILES_2_0.ipynb"
                passHref
              >
                <Button
                  component="a"
                  size="md"
                  radius="sm"
                  variant="gradient"
                  gradient={{ from: 'red', to: 'orange', deg: 45 }}
                  leftIcon={<IconBrandGithub size={20} />}
                >
                  To Notebook
                </Button>
              </Link>
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
