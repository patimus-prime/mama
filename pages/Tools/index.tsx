import Image from 'next/image';
import { Text, Space, Container, Title, Grid } from '@mantine/core';
import patConstruction from '../../public/pat_construction.gif';
import { DockingTool } from '../../components/Tools/DockingTool';
import ClientOnlyWrapper from '../../components/ClientOnlyWrapper';
import { ArticleCardImage } from '../../components/dependencies/ArticleCardImage';

export default function AllTools() {
  return (
    <div>
      <Container>
        <div id="toolsListSection">
          <Text align="center">
            <Title>Available Tools</Title>
          </Text>
        </div>
        <Space h="xl" />
        <Space h="xl" />
        <Grid>
          <Grid.Col md={6} lg={6}>
            <ArticleCardImage
              image="https://th.bing.com/th/id/OIP.TM9vqDUtGBNyrbzihwoDZQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              title="Submit AutoDock Vina Jobs"
              lastUpdate="March 2023"
              projectLink="/Tools/dockingTool"
            />
            <Space h="xl" />
            <ArticleCardImage
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1200px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
              title="Docking Data Visualization"
              lastUpdate="March 2023"
              projectLink="/Tools/dockingData"
            />
          </Grid.Col>
          {/* <Space w={80} /> */}
          <Grid.Col md={6} lg={6}>
            <ArticleCardImage
              image="https://th.bing.com/th/id/OIP.D9gV4a2gyZ_zTucWxDMdjAHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              title="ChatGPT + Reading Abstracts"
              lastUpdate="March 2023"
              projectLink="/Tools/chatAbstracts"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
