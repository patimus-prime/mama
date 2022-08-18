// BIG NOTE: BC THIS IS INDEX.TSX IN PROJECTS FOLDER, WILL RENDER AT /projects/

import { FeatureDockTool } from '../../components/Projects/FeatureDockTool';
import { FeatureHeme } from '../../components/Projects/FeatureHeme';
import { FeatureSmiles } from '../../components/Projects/FeatureSmiles';
import { Space, Text, Button } from '@mantine/core';
import Link from 'next/link';

export default function AllProjects() {
  return (
    <>
      <FeatureHeme />
      <FeatureSmiles />
      <Space h="xl" />
      <FeatureDockTool />

      <Space h="xl" />
      <Space h="xl" />
      <Text align="center">
        <Link href="/#appCardsSection" passHref>
          <Button
            component="a"
            size="xl"
            radius="sm"
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple', deg: 45 }}
          >
            Back to Recent Projects
          </Button>
        </Link>
      </Text>
    </>
  );
}
