import { Container, Grid, Space, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useQuery, gql } from '@apollo/client';
import { CheckboxCard } from '../dependencies/Checkbox';
import { DropzoneButton } from '../dependencies/Dropzone';
import { InputEmail } from '../dependencies/inputsDockingTool/InputEmail';
import { InputLigand } from '../dependencies/inputsDockingTool/InputLigand';
import { InputPDB } from '../dependencies/inputsDockingTool/InputPDB';
// import Molstar from 'molstar-react';
// so, the query here is connected directly to our mongodb cluster. one is not limited
// to one collection, we can specify any one of 'em

// do i need sample analytics?
const QUERY = gql`
  query {
    listingsAndReview {
      _id
      bathrooms
      access
      accommodates
      access
    }
  }
`;

// some extensions to consider getting given the typing stuff:
// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo
// https://www.apollographql.com/docs/devtools/editor-plugins/
// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript

// this section of interface is regrettably necessary in typescript;
// it specifies exactly the datatypes that are being used.
interface ListingData {
  _id: string;
  bathrooms: number;
  access: string;
  accommodates: number;
}

// and you'll see now that we use this 'ListingData' to tell typescript
// exactly what the fuck a listing is
// function Listing({ listing }: { listing: ListingData }) {
//   return (
//     <div>
//       {listing.bathrooms === 2 && <p style={{ color: 'red' }}>No Bathrooms</p>}
//       <p>Accommodates: {listing.accommodates}</p>
//       <p>Access: {listing.access}</p>
//     </div>
//   );
// }

// INSTRUCTIONS FOR MOLSTAR INSTALLATION:
// https://molstar.org/docs/
// https://molstar.org/docs/plugin/
// NEED TO DO: yarn add molstar
// THEN: https://stackoverflow.com/questions/40498112/typescript-2-1-async-await-es5-awaiter-and-generator-is-generated-for-every
// and yarn add tslib
// and at tsconfig add importHelpers :)))
// STILL BROKE
// https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
//
// import { Viewer } from 'molstar/lib/apps/viewer/app';
// // import { Viewer } from 'molstar/build/viewer/molstar'

// import { DefaultPluginUISpec, PluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
// // import { createPluginAsync } from 'molstar/lib/mol-plugin-ui/index';
// import { createPluginUI } from 'molstar/lib/mol-plugin-ui/index';

// import { PluginConfig } from 'molstar/lib/mol-plugin/config';

// const MySpec: PluginUISpec = {
//   ...DefaultPluginUISpec(),
//   config: [[PluginConfig.VolumeStreaming.Enabled, false]],
// };

// THIS DOES AS IT SAYS. ONLY CREATES THE PLUGIN HOMIE
// and it's fucked up at that!
// https://github.com/molstar/molstar/blob/master/CHANGELOG.md
// 2021-12-19
// async function createPlugin(parent: HTMLElement) {
//   const plugin = await createPluginUI(parent, MySpec);

//   const data = await plugin.builders.data.download({ url: '...' }, { state: { isGhost: true } });
//   const trajectory = await plugin.builders.structure.parseTrajectory(data, format);
//   await this.plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');

//   return plugin;
// }

// createPlugin(document.getElementById('app')!); // app is a <div> element

export function DockingTool() {
  const { data, loading, error } = useQuery(QUERY);
  // THIS IS WORKING. SO. IT IS AN ISSUE WITH OUR QUERY OR WITH HOW THE DATA IS BEING DISPALYED
  if (loading) {
    return <h2>FIRMLY GRASP IT...</h2>;
  }

  if (error) {
    // console.error(error); // not sure if this is necessary
    return <h2>DATA LOAD FAILURE. TELL YOUR BOSS/CRY</h2>;
  }
  // const countries = data.countries.slice(0, 4);
  // const sampleData = data.account.slice(0, 4);

  return (
    <Container>
      {/* <script
        type="text/javascript"
        src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-plugin-3.1.0.js"
      ></script>
      <script>var viewerInstance = new PDBeMolstarPlugin();</script> */}
      {/* <div>
        <Molstar pdbId="1LOL" />
      </div> */}

      <div>
        GraphQL is outputting here. THIS IS STILL INCOMPLETE/TESTING AND IS NOT WORKING
        {/* in this case each listing can be accessed by placeholder/ref var 'item' */}
        {/* {data &&
          data.listingsAndReview.map((listing: ListingData) => (
            <Listing key={listing._id} listing={listing} />
          ))} */}
        {/* if all else fails, ehre's something: {data} */}
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        {/* {data.listingsAndReview.map((item: ListingData) => (
          // <Listing key={listing._id} listing={listing} />

          <h2 key={item._id}>
            Access: {item.access}
            Bathrooms: {item.bathrooms}
            Accomodates: {item.accommodates}
          </h2>
        ))} */}
        {/* {sampleData.map(() => (
          account.id
        ))} */}
      </div>
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
