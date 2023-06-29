import Link from 'next/link';
import { Container, Grid, Text, Title, Space, Button } from '@mantine/core';
import { BadgeCard } from '../dependencies/BadgeCard';

export function AppCardsSection() {
  return (
    <div id="Portfolio">
      <Space h="xl" />
      <Space h="xl" />

      <Text align="center">
        <Title>Portfolio</Title>
      </Text>
      <Container>

        <Space h="xl" />
        <Space h="xl" />

        <Grid>


          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image="/AppCardsPics/react.png"
              title={'This Website'}
              date="August 2022 - June 2023"
              description={
                "The page you're viewing and everything besides the Streamlit iframes above \
                are implemented using Javascript/Typescript, React, with Nextjs and a heavily \
                edited Mantine component library. "
              }
              projectDetails={'/#Home'}
              projectRepo={'https://github.com/patimus-prime/excelsior'}
              badges={[
                { emoji: '⚛️', label: 'React' },
                { emoji: 'TS/JS:', label: 'TypeScript/JavaScript' },
                { emoji: '▲', label: 'Node.js/Next.js, Vercel' },
                { emoji: '🔥', label: 'Streamlit' },
              ]}
            ></BadgeCard>
          </Grid.Col>


          <Grid.Col md={6} lg={3}>
            {/* <BadgeCard
                            image=""
                            title=''
                            date=""
                            description=""
                            projectDetails=""
                            projectRepo=""
                            badges={[]}
                        /> */}
            <BadgeCard
              image={"/AppCardsPics/abstracts.jpg"}
              title={'Abstract Summarization and Recommendation'}
              date={"March 2023"}
              description={
                'Recommend abstracts with highest cosine similairty, and summarize \
              at the technical and lay level using Chat-GPT. Pulls works and authors from \
              OpenAlex, populates SQL database with abstracts, ML/Chat to ID match based on user input.'
              }
              projectDetails={'/Tools/chatAbstracts'}
              projectRepo={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/sci_pub_db_builder.ipynb'
              }
              badges={[
                { emoji: '🐍', label: 'Python' },
                { emoji: '🤖', label: 'Chat-GPT, PyTorch, NLP' },
                { emoji: '📚', label: 'OpenAlex' },
                { emoji: '☁️', label: 'SQL' },
                { emoji: '🪐', label: 'Google Colab/Jupyter' },
              ]}
            ></BadgeCard>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image="/AppCardsPics/highthroughput.jpg"
              title={'Statistical Analysis/Candidate Selection'}
              date=""
              description={
                'Identifying prime yeast strain candidates from a pool of \
                approx 6000 strains. Involved time-series analysis/detrending via linear regression, \
                ANOVA to justify pooling samples across instruments, and p-value thresholding.'
              }
              projectDetails={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/high-throughput-analysis.ipynb'
              }
              projectRepo={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/high-throughput-analysis.ipynb'
              }
              badges={[
                { emoji: '🐍', label: 'Python' },
                { emoji: '📈', label: 'statmodels/scipy/matplotlib/seaborn' },
                { emoji: '🐼', label: 'Pandas' },
                { emoji: '🪐', label: 'Google Colab/Jupyter' },
              ]}
            ></BadgeCard>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image="/AppCardsPics/csid.jpg"
              title={'Preliminary work on rare genetic disease'}
              date="February 2023"
              description={
                'Looking through the gnomAD genetic database, it is suggested \
              the population prevalence for CSID may be greater than expected, \
              at least for heterozygote deleterious mutations which may carry symptoms. \
              Homozygote count is 0 and may be an artifact of the gnomAD guidelines.'
              }
              projectDetails={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/CSID_prelim.ipynb'
              }
              projectRepo={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/CSID_prelim.ipynb'
              }
              badges={[
                { emoji: '🐍', label: 'Python' },
                { emoji: '🐼', label: 'Pandas' },
                { emoji: '🪐', label: 'Google Colab/Jupyter' },
              ]}
            ></BadgeCard>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image=""
              title={'SMILES Code to Target Class'}
              date="July 2022; Updated Feb 2023"
              description={
                "Predicting a ligand's target protein class. \
            Machine learning models train on QSAR data generated from RDKit/Mordred."
              }
              projectDetails={'/Projects/#featureSmiles'}
              projectRepo={
                'https://github.com/patimus-prime/ML_notebooks/blob/master/SMILES_2_0.ipynb'
              }
              badges={[
                { emoji: '🐍', label: 'Python' },
                { emoji: '🤖', label: 'ML: Sci-kit, XGBoost, PyTorch' },
                { emoji: '🙂', label: 'RDKit/Mordred' },
                { emoji: '🐼', label: 'Pandas' },
                { emoji: '🪐', label: 'Google Colab/Jupyter' },
                { emoji: '☁️', label: 'AWS EC2' },
              ]}
            ></BadgeCard>
          </Grid.Col>
          {/* 
          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image="/AppCardsPics/1w0e.jpeg" // {`url(${ReactIcon})`}
              title={'Modeling Hemoprotein Binding Energies'}
              date="May 2022 – Present"
              description={
                "(UPDATE: This will also be used for the CSID work.) \
               \
              Identifying hemoproteins with optimally bound \
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
          </Grid.Col> */}

          <Grid.Col md={6} lg={3}>
            <BadgeCard
              image="/AppCardsPics/rnaseq.PNG"
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
              image="/AppCardsPics/1B2V.png"
              title={"Master's Thesis"}
              date="April – September 2021"
              description={
                'Analyzing structural features of hemoprotein \
            binding pockets to identify relevant features for heme cofactor binding.'
              }
              projectDetails={'https://patimus-prime.github.io/heme-binding/'}
              projectRepo={'https://github.com/patimus-prime/heme-binding'}
              badges={[
                { emoji: '🐍', label: 'Python' },
                { emoji: '🏴‍☠️', label: 'R' },
                { emoji: '🙀', label: 'Github' },
                { emoji: '', label: 'UCSF Chimera' },
              ]}
            ></BadgeCard>
          </Grid.Col>
          {/* 
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
          </Grid.Col> */}
        </Grid>

        <Space h="xl" />
        <Space h="xl" />

        <Space h="xl" />
        {/* 
            <Text align="center">
                <Link href="/Projects" passHref>
                    <Button
                        // component="a"
                        size="xl"
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'yellow', deg: 45 }}
                    >
                        More Project Info
                    </Button>
                </Link>
            </Text> */}
      </Container>
    </div>
  );
}
