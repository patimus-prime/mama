import { Badge, Container, Grid, Text, Title, Space, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { CheckboxCard } from '../dependencies/Checkbox';
import { DropzoneButton } from '../dependencies/Dropzone';
import { FloatingLabelInput } from '../dependencies/FloatingLabel';
import { InputEmail } from '../dependencies/inputsDockingTool/InputEmail';
import { InputLigand } from '../dependencies/inputsDockingTool/InputLigand';
import { InputPDB } from '../dependencies/inputsDockingTool/InputPDB';

export function DockingTool() {
  // the fn might return more than just targetRef, just hoping to import this elsewhere
  return (
    <Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Grid>
        <Grid.Col md={6} lg={6}>
          <div>
            {/* style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}> */}
            <h4>Specify PDB/options for docking</h4>
            <InputPDB />

            <Space h="sm" />
            <InputLigand />

            <Space h="sm" />
            <InputEmail />
            <Space h="md" />
            <CheckboxCard
              title={'Conformational sampling?'}
              description={'FIXME: make this smaller and also add slider for # of conforms'}
            />
            <Space h="md" />
            <CheckboxCard
              title={'Macrocycle ligand?'}
              description={'Employ Meeko package to generate macrocycle conforms'}
            />

            <Space h="lg" />
            <Button
              component="a"
              // href="#sherbID" //made obsolete by the below scroll. wow so ez v. refs and stuff
              size="xl"
              radius="xl"
              variant="gradient"
              gradient={{ from: 'green', to: 'yellow', deg: 45 }}
              leftIcon={<IconChevronRight size={20} />}
            >
              Submit (Does nothing atm)
            </Button>
          </div>
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <Space h={40} />
            <DropzoneButton />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
