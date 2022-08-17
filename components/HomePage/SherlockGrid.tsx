import { Badge, Container, Grid, Text, Title, Space } from '@mantine/core';
// per the Mantine developer, we need to use Image from next if using nextjs
// https://github.com/mantinedev/mantine/discussions/719

import Image from 'next/image';

import { useScrollIntoView } from '@mantine/hooks';

// import ReactIcon from "../../public/react.svg";
import SherbParis from '../../public/sherb_paris.jpg';
import SherbSleepy from '../../public/sherb_sleepy.jpg';
import SherbPath from '../../public/sherb_path.jpg';
import SherbProf from '../../public/sherlock_prof.jpg';

import { useRef } from 'react';

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
export function SherlockGrid() {
  // the fn might return more than just targetRef, just hoping to import this elsewhere
  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />

      {/* NOTE: no special export for ID below, see Hero_landing for how implemented */}
      <div id="sherbID">
        <Text align="center">
          <Title>Sherlock</Title>
        </Text>
      </div>
      {/* title option: order={1} mb="30px" */}
      <Space h="xl" />
      <Space h="xl" />

      <Grid>
        <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={SherbParis} />
          </div>
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={SherbPath} />
          </div>
          {/* caption="Sherlock on the Path 🐺" */}
          {/* </Grid.Col> */}

          {/* <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src={SherbProf}
              caption="Sherlock stretching after lecturing at the UN"
            />
          </div>
        </Grid.Col> */}
          <Space h="md" />
          {/* <Grid.Col md={6} lg={6}> */}
          <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <Image src={SherbSleepy} />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
