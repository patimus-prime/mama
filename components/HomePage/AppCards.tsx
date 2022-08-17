import { Badge, Container, Grid, Text, Title, Space } from '@mantine/core';
// import { Card } from "@mantine/core";
// import heme from "./app_descrips/heme.json";
import { BadgeCard } from '../dependencies/BadgeCard';
import ReactIcon from '../../public/react.svg';
// ****************
// NOT WORTH FIGURING OUT MAPPING ETC. W/ JSON AT THIS TIME LOL
// **************

// type appDescrip = {
//   image: string;
//   title: string;
//   country: string;
//   description: string;
//   badges: {
//     emoji: string;
//     label: string;
//   }[];
// };

// const hemeStuff: appDescrip = JSON.parse(heme);

// export function appCardsSection(): JSX.Element {
export function AppCardsSection() {
  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />

      <Text align="center">
        <Title>Recent Projects</Title>
      </Text>
      {/* title option: order={1} mb="30px" */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image={ReactIcon}
            title={'Hello there'}
            date="May 2022"
            description={'Turbo description'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image={`url(${ReactIcon})`}
            title={'Hello there'}
            date="May 2022"
            description={'Turbo description'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
            title={'Hello there'}
            date="May 2022"
            description={'Turbo description'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        {/* <Grid.Col md={6} lg={3}>
              4
            </Grid.Col> */}
      </Grid>
    </Container>
  );
}

// console.log(heme.image);

// interface BadgeCardProps {
//   image: string;
//   title: string;
//   country: string;
//   description: string;
//   badges: {
//     emoji: string;
//     label: string;
//   }[];
// }
