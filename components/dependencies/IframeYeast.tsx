// Layout for smiles/docking tool based on:
// https://github.com/Giuseppetm/mantine-template/blob/main/src/Components/SectionThree.tsx
import Link from 'next/link';
import { Grid, Text, Container, Title, Button, Space, useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
// import { Router, Routes, Route } from 'react-router-dom';
import Smiles_Img from './pics/sherb_sleepy.jpg';
// import Construction_Img from '../../public/pat_construction.gif';
import { IconWindowMaximize } from '@tabler/icons-react';
// don't be cute with iframeYeast name, must be capitals or else HORROR
export function IframeYeast() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Container
      // some stuff if you wanna spruce up the sections etc.
      sx={(theme) => ({
        // backgroundColor:
        //   theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.gray[0],
        //   `rgba(0, 0, 0, 0)`, // Transparent background
        // color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        // outline: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]}`,
        // transition: 'background-color 0.3s ease',
        // '&:hover': {
        //   backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], //ttheme.colors.gray[0], // Gray-ish background on hover
        // },
      })}
    >
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid>
        {/* <Grid.Col xs={6} sm={8} md={8} lg={8}> */}
        <Grid.Col xs={6} sm={4} md={4} lg={4}
        // sx possible here too
        >

          <div style={{ marginBottom: 20 }}>
            <Text>
              <Title order={1}
                sx={(theme) =>
                ({
                  // color: theme.colors.blue[5]
                  color: 'darkorange'

                })
                }
              >
                🔬🍞Stats, Streamlit🔥</Title>
              Statistical analysis to identify prime candidates in a screening study.
              Spectrophotometry absorbance/time-series data were detrended, denoised,
              and statistically significant samples were identified. From thousands of samples
              of high-throughput data, approx. 100 candidates to move to next stage.


            </Text>
            <Space h="xl" />
            {/* <Link href="/Tools" passHref> */}
            <Button
              component={Link}
              href="https://huggingface.co/spaces/patimus-prime/strain_selection"
              size="md"
              radius="sm"
              variant="gradient"
              gradient={{ from: 'blue', to: 'orange', deg: 45 }}
            >
              <IconWindowMaximize />  Fullscreen
            </Button>
            {/* </Link> */}
          </div>
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={4} lg={4}
        >
          {/* <Image src={'/pinhead.gif'} alt={'sample2'} height={100} width={100} /> */}
          <iframe
            src="https://patimus-prime-strain-selection.hf.space/?embed=true
            &embed_options=show_toolbar
            &embed_options=show_footer
            &embed_options=show_colored_line
            &embed_options=show_padding
            "
            // &embed_options=show_toolbar\
            // &embed_options=show_padding\
            // &embed_options=disable_scrolling
            frameBorder={0}
            width="600"
            height="450"
            loading="eager"
          ></iframe>

        </Grid.Col>
      </Grid>
    </Container>
  );
}
