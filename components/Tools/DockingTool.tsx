import { useState } from 'react';
import { Container, Grid, Space, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useQuery, useMutation, gql } from '@apollo/client';
import { CheckboxCard } from '../dependencies/Checkbox';
import { DropzoneButton } from '../dependencies/Dropzone';
import { PDBDropZone } from '../dependencies/PDBDropZone';
import { LigandDropZone } from '../dependencies/LigandDropZone';
import { InputEmail } from '../dependencies/inputsDockingTool/InputEmail';
import { InputLigand } from '../dependencies/inputsDockingTool/InputLigand';
import { InputPDB } from '../dependencies/inputsDockingTool/InputPDB';
// import Molstar from 'molstar-react';
// so, the query here is connected directly to our mongodb cluster. one is not limited
// to one collection, we can specify any one of 'em

// do i need sample analytics? no, it's just to name the specific query
// eg query queryName { blah blah blah }
const QUERY = gql`
  query airBnBsampleQuery {
    listingsAndReview {
      _id
      bathrooms
      access
      accommodates
      access
    }
  }
`;

// this test query achieved from graphql playground
// note that the arrays are not listed, there's no data
const testQUERY = gql`
  query {
    test {
      _id
      boolConformations
      boolMarcocycle
      email
      ligandCode
      pdbCode
      pdbFiles {
        fileContents
        fileName
        type
      }
      moleculeFiles {
        fileContents
        fileName
        type
      }
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

interface PdbOrMolecule {
  fileName: string;
  type: string;
  fileContents: string;
}

// AND ALSO DECLARE FOR GRAPHQL THE SAME THING. data types are important:
interface FormInputTypes {
  pdbCode?: string;
  ligandCode?: string;
  email?: string;
  boolConformations?: boolean;
  boolMacrocycle?: boolean;
  pdbFiles?: Array<PdbOrMolecule>;
  moleculeFiles: Array<PdbOrMolecule>;
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

function SuccessMessage() {
  return (
    <div>
      <p>Your form has been submitted successfully!</p>
    </div>
  );
}

export function DockingTool() {
  // handle queries
  // const { data, loading, error } = useQuery(QUERY);
  // handle fields update; these all get uploaded as one object via graphQL
  // note right side is default value, updated upon change
  const [pdbCode, setPdbCode] = useState('');
  const [ligandCode, setLigandCode] = useState('');
  const [email, setEmail] = useState('');
  const [boolConformations, setBoolConformations] = useState(false);
  const [boolMacrocycle, setBoolMacrocycle] = useState(false);
  // for the potential pdbs/mols etc. uploaded
  const [pdbFiles, setPdbFiles] = useState<string[]>([]);
  const [moleculeFiles, setMoleculeFiles] = useState<string[]>([]);
  // for to render some nice logic
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [serverUploadMessage, setServerUploadMessage] = useState('');

  // AND DECLARE THE FORM TO USE ALL THESE FIELDS I'VE JUST DEFINED ABOVE:
  // advise to have some sample/placerholder for the arrays...
  const [formData, setFormData] = useState({
    pdbCode: '',
    ligandCode: '',
    email: '',
    boolConformations: false,
    boolMacrocycle: false,
    pdbFiles: [],
    moleculeFiles: [],
  });

  // define the mutation to use based on the formData to insert into the db
  const SUBMIT_MUTATION = gql`
    mutation submitFormMutation($input: FormInputTypes!) {
      submitForm(input: $input) {
        serverResponse
      }
    }
  `;

  // handle submission of our whole freaking form
  // add async to the function declaration, so we can wait for the mutation to finish

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // for debugging purposes
    // console.log('Submission successful!');
    event.preventDefault();

    // FIXME: ADD COMPONENT TO DISPLAY THE DATA/SHOW THE USER THAT IT WORKED

    // declare submitForm function that employs our useMutation
    const [submitForm] = useMutation(SUBMIT_MUTATION);
    // this omits the state object(s) from useMutation fn, verbose form w useless variables is:
    // const [submitForm, { data, loading, error }] = useMutation(SUBMIT_MUTATION);

    // Call the mutation with the form data
    // our form data should of been updated with all our components calling
    // their onChange functions to update the formData state
    try {
      //  'data' is actually the server response from the mutation
      // is named data cuz look above to hidden state variables
      const { data } = await submitForm({ variables: { input: formData } });
      console.log(data);
      // setServerUploadMessage(data);
      // data will inform if this was a success or not, if it was...
      setFormSubmitted(true); //update formSubmitted state to true, use to render success component
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     // call the mutation function with the form data as an argument
  //     await submitFormMutation({
  //       variables: {
  //         input: formData,
  //       },
  //     });

  //     // update state variables to show success message
  //     setFormSubmitted(true);
  //     setServerUploadMessage('Form submitted successfully!');
  //   } catch (error) {
  //     console.error(error);
  //     setServerUploadMessage('Something went wrong while submitting the form.');
  //   }
  // };

  // use the mutation hook to call the mutation
  const [submitFormMutation] = useMutation(SUBMIT_MUTATION);

  return (
    <Container>
      <Space h="xl" />
      <div>
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col md={6} lg={6}>
              <div>
                {/* style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}> */}
                <h4>Specify PDB/options for docking</h4>
                <InputPDB
                  onChange={(value) => {
                    setPdbCode(value); // this updates pdbCode (but does not inform formData of the change.)
                    // leaving setPdbCode in here in case we use it elsewhere, like confirming what was submitted etc.
                    setFormData({ ...formData, pdbCode: value });
                  }}
                />

                <Space h="sm" />
                <InputLigand
                  onChange={(value) => {
                    setLigandCode(value);
                    setFormData({ ...formData, ligandCode: value });
                  }}
                />

                <Space h="sm" />
                <InputEmail
                  onChange={(value) => {
                    setEmail(value);
                    setFormData({ ...formData, email: value });
                  }}
                />
                <Space h="md" />
                <CheckboxCard
                  onChange={(value) => {
                    setBoolConformations(value);
                    setFormData({ ...formData, boolConformations: value });
                  }}
                  title={'Conformational sampling?'}
                  description={'FIXME: make this smaller and also add slider for # of conforms'}
                />
                <Space h="md" />
                <CheckboxCard
                  onChange={(value) => {
                    setBoolMacrocycle(value);
                    setFormData({ ...formData, boolMacrocycle: value });
                  }}
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
                  // type submit should inform <form> that it's time to handleSubmit
                  type="submit" // this is the button type, set to submit the whole shebang
                  // onClick={handleSubmit}
                >
                  Submit!
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
              <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
                <Space h={40} />
                <PDBDropZone onPdbContentsChange={setPdbFiles} />
                <LigandDropZone onLigandContentsChange={setMoleculeFiles} />
                {/* <DropzoneButton /> */}
              </div>
            </Grid.Col>
          </Grid>
        </form>
      </div>
      {/* RENDER SUCCESS MESSAGE, submission compelte! null if formSubmitted is False */}
      {formSubmitted && <SuccessMessage />}

      {serverUploadMessage && <div>{serverUploadMessage}</div>}
      {/* <pre>{serverUploadMessage}</pre>
      {formSubmitted && <SuccessMessage />}
      {formSubmitted ? <p>submission complete!</p> : null} */}

      {/* TO DATA SECTION */}
      <Space h="xl" />
      <Button
        component="a"
        href="/Tools/dockingData"
        size="xl"
        radius="xl"
        variant="gradient"
        gradient={{ from: 'yellow', to: 'red', deg: 45 }}
        leftIcon={<IconChevronRight size={20} />}
        // type submit should inform <form> that it's time to handleSubmit
        // type="submit" // this is the button type, set to submit the whole shebang
        // onClick={handleSubmit}
      >
        GO TO DATA VISUALIZATION
      </Button>
    </Container>
  );
}
