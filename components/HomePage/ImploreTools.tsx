import Link from 'next/link';
import { Container, Grid, Text, Title, Space, Button } from '@mantine/core';
import { ArticleCardImage } from '../dependencies/ArticleCardImage';

export function ImploreTools() {
  return (
    <Text align="center">
      <Space h="xl" />
      <Title>Check out the Tools section too!</Title>
      <Space h="xl" />
      <Link href="/Tools" passHref>
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
          GO! SERIOUSLY, IT'S COOL!
        </Button>
      </Link>
    </Text>
  );
}
