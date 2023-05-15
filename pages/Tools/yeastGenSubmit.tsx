import { Text, Space, Container, Title, Button } from '@mantine/core';

export default function yeastGenSubmit() {
  return (
    <Container>
      <Title>Submit files for (as of 28Feb) NF pipeline</Title>
      <Text>
        Simply drag and drop potentially multiple files to the box below. These get submitted to GCP
        Cloud Storage and pulled by a pipeline to... in app1, smiles qsar generation, app2, variant
        call on FASTA/FASTQ files. Latter will initially target only yeast genome; more to follow...
        plus Dash buttons...
      </Text>

      <Space h="xl" />
      <iframe src="http://127.0.0.1:5000" width="100%" height="300px" style={{ border: 0 }} />
    </Container>
  );
}
