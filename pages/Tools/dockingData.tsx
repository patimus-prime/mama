import Image from 'next/image';
import { useState } from 'react';
import { Text, Space, Container, Title } from '@mantine/core';
import { useQuery, useMutation, gql } from '@apollo/client';
import ClientOnlyWrapper from '../../components/ClientOnlyWrapper';
// import { ObjectId } from 'mongodb';

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

interface PdbOrMolecule {
  fileName: string;
  type: string;
  fileContents: string;
}

// AND ALSO DECLARE FOR GRAPHQL THE SAME THING. data types are important:
interface dbTypes {
  _id: string; // or ObjectId? not sure how it'll mess up typing below.
  // so far it's ok if we're just returning and running the query, maybe
  // messes up if we want to use it for mutations/other stuff
  pdbCode?: string;
  ligandCode?: string;
  email?: string;
  boolConformations?: boolean;
  boolMacrocycle?: boolean;
  pdbFiles?: Array<PdbOrMolecule>;
  moleculeFiles: Array<PdbOrMolecule>;
}

function showNiceOutput({ data }: { data: dbTypes }) {
  return (
    <div>
      <p>id: hi</p>
      <p>pdbCode: {data.pdbCode}</p>
      {/* {listing.bathrooms === 2 && <p style={{ color: 'red' }}>No Bathrooms</p>} */}
    </div>
  );
}

export default function dockingData(): JSX.Element {
  const { data, loading, error } = useQuery(testQUERY);
  if (loading) {
    return <h2>FIRMLY GRASP IT... getting sample data... </h2>;
  }

  if (error) {
    // console.error(error); // not sure if this is necessary
    return <h2>DATA LOAD FAILURE. TELL YOUR BOSS/CRY</h2>;
  }

  return (
    <Container>
      <Title>Retrieve data and visualize it here...</Title>
      <Text>
        Or at least, retrieve. I'm more familiar with Python for data manipulation etc. so maybe
        Flask/Dash for visualization and stuff.
      </Text>
      {/* <pre>{showNiceOutput({ data: data.test[0] })}</pre> */}
      <div>
        {/* <Text>Neatly outputting a sample from DB:</Text> */}
        {/* {data && data.test.map((item: dbTypes) => <h2 key={item._id}>PDBCode: {item.pdbCode}</h2>)} */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Container>
  );
}
