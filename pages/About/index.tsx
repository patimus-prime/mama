import Pat from '../../components/About/AboutMe';
import Sherlock from '../../components/About/AboutSherlock';
import { Title, Text } from '@mantine/core';
export default function AboutPage() {
    return (
        <>
            <div id='About'>
                <Text align='center'>
                    <Title>
                        About my dog and me
                    </Title>
                </Text >
            </div>
            <Sherlock />
            <Pat />
        </>
    );
}
