import Image from 'next/image';
import { Container } from '@mantine/core';
import patConstruction from '../../public/pat_construction.gif';

export default function AllTools() {
  return (
    <div>
      <Image src={patConstruction} />
      <h1>Docking tool below is currently under development.</h1>
    </div>
  );
}
