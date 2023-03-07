import Image from 'next/image';
import { Text, Space, Container, Title, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

export default function chatAbstracts() {
  return (
    <Container>
      <Title>Hey hey! This ones' gonna be a doozy.</Title>
      <Text>
        Intention here is to offer a tool that will allow you to specify interests and then have a
        chatbot read abstracts and summarize them for you, from whatever locations or fields.
        Therefore useful if familiarizing with a field, or if you're interested in identifying
        collaborators, or for my friends and SHPE members, or other students, who are interested in
        research etc. but don't know where to start. Also it's freaking bonkers that this is
        possible now via ChatGPT, and I'm excited to try out its API in service of an app. For now,
        just a notebook while I get everything set up, probably Flask/Dash will be at this URL,
        since the rest will be built with Python.
      </Text>

      <Space h="xl" />
      <Button
        component="a"
        href="https://github.com/patimus-prime/ML_notebooks/blob/master/sci_pub_db_builder.ipynb"
        size="xl"
        radius="xl"
        variant="gradient"
        gradient={{ from: 'yellow', to: 'red', deg: 45 }}
        leftIcon={<IconChevronRight size={20} />}
        // type submit should inform <form> that it's time to handleSubmit
        // type="submit" // this is the button type, set to submit the whole shebang
        // onClick={handleSubmit}
      >
        Go to marvelous notebook
      </Button>
    </Container>
  );
}
