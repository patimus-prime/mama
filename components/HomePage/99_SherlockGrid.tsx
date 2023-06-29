import { Container, Grid, Text, Title, Space } from '@mantine/core';
import Image from 'next/image';

export function SherlockGrid() {
    return (
        <Container>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />

            {/* NOTE: no special export for ID below, see HeroHome for how implemented */}
            <div id="sherbID">
                <Text align="center">
                    <Title>Sherlock</Title>
                </Text>
            </div>
            {/* title option: order={1} mb="30px" */}
            <Space h="xl" />
            <Space h="xl" />

            <Grid>
                <Grid.Col md={6} lg={6}>
                    {/* REGRETTABLY NEXTJS REQUIRES ANAL DEFINITION OF PIXELS */}
                    {/* SO IMG -> PROPERTIES IN BROWSER, THEN JUST SCALE LIKE BELOW, / 2 */}
                    <Image
                        src="/sherb_paris.jpg"
                        alt={''}
                        width={650 / 2}
                        height={870 / 2}
                    />
                </Grid.Col>

                <Grid.Col md={6} lg={6}>
                    <Image
                        src="/sherb_path.jpg"
                        alt={''}
                        width={1250 / 2}
                        height={930 / 2}
                    />

                    <Space h="md" />

                    <Image
                        src="/sherb_sleepy.jpg"
                        alt={''}
                        width={1111 / 2}
                        height={830 / 2}
                    />
                </Grid.Col>
            </Grid>
        </Container>
    );
}
