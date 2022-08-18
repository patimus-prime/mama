// this layout based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx

import { Grid, Text, Container, Title, Button, Space, createStyles } from '@mantine/core';
import Image from 'next/image';
import Smiles_Img from '../../public/sid_440144312.png';
// this function I think ultimately unnecessary; not included in DockTool
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
          <div style={{ marginBottom: 20 }}>
            <Text>
              <Title order={1}>Put something here too</Title>
              Dennis Farina is unique among thespians in that he was one of the few to achieve
              success as a "late-bloomer." He did not start acting until he was 37 years old, after
              stints in the military and 18 years on the Chicago Police Department.
            </Text>
          </div>
          <Button color="yellow">Tell me more</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
