// Layout for smiles/docking tool based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx
import Link from 'next/link';
import { Grid, Text, Container, Title, Button, Space } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Smiles_Img from './pics/sherb_sleepy.jpg';
import Construction_Img from '../../public/pat_construction.gif';

export function FeatureDockTool() {
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
            <Space h="xl" />
            <Link href="/Tools" passHref>
              <Button
                component="a"
                size="md"
                radius="sm"
                variant="gradient"
                gradient={{ from: 'red', to: 'orange', deg: 45 }}
              >
                To Docking Tool
              </Button>
            </Link>
          </div>
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={4} lg={4}>
          <Image src={Construction_Img} alt={'sample2'} style={{ width: '100%', maxWidth: 300 }} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
