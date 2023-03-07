import Image from 'next/image';
import { Text, Space, Container, Title } from '@mantine/core';
import patConstruction from '../../public/pat_construction.gif';
import { DockingTool } from '../../components/Tools/DockingTool';
import ClientOnlyWrapper from '../../components/ClientOnlyWrapper';

// can insert name if you want after function and before () to make it easier to debug
export default function dockingTool() {
  return (
    <div>
      <Image src={patConstruction} alt={''} />
      <h1>Docking tool below is currently under development.</h1>
      <Text>
        Intended use: specify PDBs and ligand code if just want data from RCSB. Otherwise, provide
        PDBs and molecule files (mol2 is supported and binary converted). These will be run
        combinatorially, i.e. ligand screening. An important note: You can drop in PDBs to both the
        PDB and molecule file areas. These PDBs will be run combinatorially for protein-protein
        screening. Specify email to be informed when results ready, maybe a job id provided; likely
        then offered as zipped package from AWS S3, in addition to the data visualized on the site.
      </Text>
      <ClientOnlyWrapper>
        <DockingTool />
      </ClientOnlyWrapper>
    </div>
  );
}
