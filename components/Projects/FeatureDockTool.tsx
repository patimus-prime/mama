// this layout based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx

import { Grid, Text, Container, Title, Button, Space } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import Smiles_Img from './pics/sherb_sleepy.jpg';
import Construction_Img from '../../public/pat_construction.gif';

export function FeatureDockTool() {
  // i see a lot of documentation of this but it don't work here wtf
  // const goTo = useNavigate();

  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid justify="space-around">
        <Grid.Col xs={6} sm={8} md={8} lg={8}>
          <div style={{ marginBottom: 20 }}>
            <Text>
              <Title order={1}>Docking Tool</Title>
              (Currently under development as of 18 Aug 2022.) Piggybacking off the server used for
              the heme binding energy study, this tool will enable one to specify, or provide, a
              ligand-containing protein and obtain its binding energy to its own cofactor or ligand.
              If a hemoprotein, the rank amongst other hemoproteins' binding energies will be
              provided.
            </Text>
          </div>

          {/* <Route path="/DockingTool" element={<DockingTool />} /> */}
          {/* <Button
            component="a"
            href="/src/pages/DockingTool.tsx" //made obsolete by the below scroll. wow so ez v. refs and stuff
            size="xl"
            radius="xl"
            variant="gradient"
            gradient={{ from: "yellow", to: "red", deg: 45 }}
            // onClick={() => {
            //   goTo("../pages/DockingTool.tsx");
            // }}
          ></Button> */}
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={4} lg={4}>
          <Image src={Construction_Img} alt={'sample2'} style={{ width: '100%', maxWidth: 300 }} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
