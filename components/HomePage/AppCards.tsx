import { Badge, Container, Grid, Text, Title, Space, Button } from '@mantine/core';
// import { Card } from "@mantine/core";
// import heme from "./app_descrips/heme.json";
import { BadgeCard } from '../dependencies/BadgeCard';
import { IconBat, IconChevronRight } from '@tabler/icons';
import ReactIcon from '../../public/react.svg';
import Link from 'next/link';
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
      <div id="appCardsSection">
        <Text align="center">
          <Title>Recent Projects</Title>
        </Text>
      </div>
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
              { emoji: '⚛️', label: 'React' },
              { emoji: 'TS/JS:', label: 'TypeScript/JavaScript' },
              { emoji: '▲', label: 'Node.js/Next.js' },
              { emoji: '☁️', label: 'AWS EC2' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://cdn.rcsb.org/images/structures/w0/1w0e/1w0e_assembly-1.jpeg" // {`url(${ReactIcon})`}
            title={'Modeling Hemoprotein Binding Energies'}
            date="May 2022 – Present"
            description={
              "Identifying hemoproteins with optimally bound \
            heme cofactor, in an effort to find ideal candidates for \
            protein engineering. Builds off work in my Master's thesis."
            }
            projectDetails={'/Projects/#featureHeme'}
            projectRepo={'https://github.com/patimus-prime/heme_docking'}
            badges={[
              { emoji: '🐍', label: 'Python' },
              { emoji: '🐧', label: 'Bash/Shell' },
              { emoji: '⛵', label: 'Autodock Vina' },
              { emoji: '☁️', label: 'AWS EC2/S3' },
              { emoji: '💾', label: 'SQL/MongoDB' },
            ]}
          ></BadgeCard>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.24ab0afb82bad67a4c6660cc3ab0806c?rik=6lwn3W9veY96Zg&riu=http%3a%2f%2fwww.psychologytoday.com%2ffiles%2fu522%2fhappy+sad+faces.jpg&ehk=YNuSpHXNlYRDo16uEToC5Vf1X%2fOzh8lftvX5JSidvrs%3d&risl=&pid=ImgRaw&r=0"
            title={'SMILES Code to Target Class'}
            date="July – August 2022"
            description={
              "Predicting a ligand's target protein class. \
            Machine learning models consume data generated from RDKit."
            }
            projectDetails={'/Projects/#featureSmiles'}
            projectRepo={'https://github.com/patimus-prime/proteinL1Prediction'}
            badges={[
              { emoji: '🐍', label: 'Python' },
              { emoji: '🤖', label: 'ML: Sci-kit, XGBoost, PyTorch' },
              { emoji: '🙂', label: 'RDKit' },
              { emoji: '🐼', label: 'Pandas' },
              { emoji: '🪐', label: 'Jupyter' },
              { emoji: '☁️', label: 'AWS EC2' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.5c1728724f1cdfe0ef9f855fd6392381?rik=kUXRM%2fWNY36ZYg&riu=http%3a%2f%2fhumanbiology.pressbooks.tru.ca%2fwp-content%2fuploads%2fsites%2f6%2f2019%2f06%2fRNA.gif&ehk=OBKoAklia2vevIxOCcrbCmNx9HwfnJfYAdsnLsItObE%3d&risl=&pid=ImgRaw&r=0"
            title={'RNA-Seq Analysis and Model'}
            date="May 2022"
            description={
              'Predicting if a patient has breast cancer based off \
            their RNA expression levels and clinical data.'
            }
            projectDetails={'https://patimus-prime.github.io/rnaseq_her2/tempus.html'}
            projectRepo={'https://github.com/patimus-prime/rnaseq_her2'}
            badges={[
              { emoji: '🏴‍☠️🧬', label: 'R, edgeR' },
              { emoji: '🤖', label: 'ML: Sci-kit' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://patimus-prime.github.io/heme-binding/figures/1B2V.good.png"
            title={"Master's Thesis"}
            date="April – September 2021"
            description={
              'Analyzing structural features of hemoprotein \
            binding pockets to identify relevant features for heme cofactor binding.'
            }
            projectDetails={'/hello_world'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🐍', label: 'Python' },
              { emoji: '🏴‍☠️', label: 'R' },
              { emoji: '', label: 'UCSF Chimera' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        <Grid.Col md={6} lg={3}>
          <BadgeCard
            image="https://th.bing.com/th/id/R.1b68c3d502c8ee541708e3553f8946ee?rik=j5RyO86UfAs8%2bg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-hlnsyuIe7FA%2fTbmUjW4xc8I%2fAAAAAAAAADc%2f45z4sb-pJRA%2fs1600%2fPlease-Stand-By_Test-Pattern_1600x1200.jpg&ehk=W1697QCidA7cwJIO1mw%2brVBpqua0dWpQMrvVGmY8ITA%3d&risl=&pid=ImgRaw&r=0"
            title={'Docking Tool'}
            date="August 2022 – Present"
            description={
              'Interfacing a server running AutoDock Vina with a front-end website, \
               creating a tool to submit jobs for molecular simulation.'
            }
            projectDetails={'/Tools'}
            projectRepo={'https://github.com'}
            badges={[
              { emoji: '🐍', label: 'Python' },
              { emoji: '⚛️', label: 'React' },
              { emoji: '☁️', label: 'AWS EC2/Lambda/S3' },
              { emoji: '🐧', label: 'Bash/Shell' },
              { emoji: '⛵', label: 'Autodock Vina' },
            ]}
          ></BadgeCard>
        </Grid.Col>

        {/* <Grid.Col md={6} lg={3}>
              4
            </Grid.Col> */}
      </Grid>

      <Space h="xl" />
      <Space h="xl" />

      <Space h="xl" />

      <Text align="center">
        <Link href="/Projects" passHref>
          <Button
            component="a"
            size="xl"
            radius="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'yellow', deg: 45 }}
          >
            More Project Info
          </Button>
        </Link>
      </Text>
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
