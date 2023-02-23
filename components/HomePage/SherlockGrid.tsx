import { Container, Grid, Text, Title, Space } from '@mantine/core';
// per the Mantine developer, we need to use Image from next if using nextjs
// https://github.com/mantinedev/mantine/discussions/719

import Image from 'next/image';
// BETWEEN AUG 2022 AND FEB 2023, SOME UPDATE...?
// ANYWAY, WE CAN EASILY REFERENCE PUBLIC FOLDER FILES VIA /FILE. DONE.
// import SherbParis from '../../public/sherb_paris.jpg';
// or not? just use file path in the ref?
// import SherbParis from '/sherb_paris.jpg';
// import SherbSleepy from '/sherb_sleepy.jpg';
// import SherbPath from '/sherb_path.jpg';

export function SherlockGrid() {
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
          {/* REGRETTABLY NEXTJS REQUIRES ANAL DEFINITION OF PIXELS */}
          {/* SO IMG -> PROPERTIES IN BROWSER, THEN JUST SCALE LIKE BELOW, / 2 */}
          <Image
            src="/sherb_paris.jpg"
            alt={''}
            width={650 / 2}
            height={870 / 2}

            // fill
            // width=fill
            // height="auto"
            // marginLeft="auto"
            // marginRight="auto"
            // style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <Image
            src="/sherb_path.jpg"
            alt={''}
            width={1250 / 2}
            height={930 / 2}
            // fill
            // style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}
          />

          <Space h="md" />

          <Image
            src="/sherb_sleepy.jpg"
            alt={''}
            width={1111 / 2}
            height={830 / 2}
            // style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
