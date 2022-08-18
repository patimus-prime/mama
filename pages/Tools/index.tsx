import Image from 'next/image';
import { Container, Text, Space } from '@mantine/core';
import patConstruction from '../../public/pat_construction.gif';
import { DockingTool } from '../../components/Tools/DockingTool';

export default function AllTools() {
  return (
    <div>
      <Image src={patConstruction} />
      <h1>Docking tool below is currently under development.</h1>
      <Text>
        Very soon, this tool will take your inputs and input them to an AWS EC2 server that's
        running AutoDock Vina. I intend to use AWS Lambda, S3, Gateway to route everything and keep
        track of files. May end up also integrating with databases used for heme binding affinity
        project.
        <Space h="md" />
        ... Head over to Home or Projects to see some other projects that are complete!
      </Text>
      <DockingTool />
    </div>
  );
}
