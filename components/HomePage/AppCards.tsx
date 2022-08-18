import { Badge, Container, Grid, Text, Title, Space } from '@mantine/core';
// import { Card } from "@mantine/core";
// import heme from "./app_descrips/heme.json";
import { BadgeCard } from '../dependencies/BadgeCard';
import { IconBat } from '@tabler/icons';
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
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            title={'This Website'}
            date="August 2022"
            description={
              "The ability of a resume to communicate \
            one's abilities and experience is limited; so here we are!"
            }
            projectDetails={'/'}
            projectRepo={'https://github.com/patimus-prime/excelsior'}
            badges={[
              { emoji: '⚛️', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://cdn.rcsb.org/images/structures/w0/1w0e/1w0e_assembly-1.jpeg" // {`url(${ReactIcon})`}
            title={'Heme Docking'}
            date="May 2022"
            description={
              "Identifying hemoproteins with optimally bound \
            heme cofactor, in an effort to find ideal candidates for \
            protein engineering. Builds off work in my Master's thesis."
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.24ab0afb82bad67a4c6660cc3ab0806c?rik=6lwn3W9veY96Zg&riu=http%3a%2f%2fwww.psychologytoday.com%2ffiles%2fu522%2fhappy+sad+faces.jpg&ehk=YNuSpHXNlYRDo16uEToC5Vf1X%2fOzh8lftvX5JSidvrs%3d&risl=&pid=ImgRaw&r=0"
            title={'SMILES -> L1'}
            date="May 2022"
            description={
              "Predicting a ligand's target protein class. \
            Machine learning models consume data generated from RDKit."
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.24ab0afb82bad67a4c6660cc3ab0806c?rik=6lwn3W9veY96Zg&riu=http%3a%2f%2fwww.psychologytoday.com%2ffiles%2fu522%2fhappy+sad+faces.jpg&ehk=YNuSpHXNlYRDo16uEToC5Vf1X%2fOzh8lftvX5JSidvrs%3d&risl=&pid=ImgRaw&r=0"
            title={'RNA'}
            date="May 2022"
            description={
              'Predicting if a patient has breast cancer based off \
            their RNA expression levels and clinical data.'
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.24ab0afb82bad67a4c6660cc3ab0806c?rik=6lwn3W9veY96Zg&riu=http%3a%2f%2fwww.psychologytoday.com%2ffiles%2fu522%2fhappy+sad+faces.jpg&ehk=YNuSpHXNlYRDo16uEToC5Vf1X%2fOzh8lftvX5JSidvrs%3d&risl=&pid=ImgRaw&r=0"
            title={"Master's Thesis"}
            date="May 2022"
            description={
              'Analyzing structural features of hemoprotein \
            binding pockets to identify relevant features for heme cofactor binding.'
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🌲', label: '1' },
              { emoji: '🌲', label: '2' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.24ab0afb82bad67a4c6660cc3ab0806c?rik=6lwn3W9veY96Zg&riu=http%3a%2f%2fwww.psychologytoday.com%2ffiles%2fu522%2fhappy+sad+faces.jpg&ehk=YNuSpHXNlYRDo16uEToC5Vf1X%2fOzh8lftvX5JSidvrs%3d&risl=&pid=ImgRaw&r=0"
            title={'Docking Toolio'}
            date="May 2022"
            description={
              'Interacing a server running AutoDock Vina with a front-end website, \
               creating a tool to submit jobs for molecular simulation.'
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
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
