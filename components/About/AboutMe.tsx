import {
    createStyles,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core';

import Image from 'next/image';

import { IconBat, IconBrandLinkedin, IconMail, IconPepper } from '@tabler/icons-react';

import Pinhead from '../../public/pinhead.gif';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: "xl", // * 4, theme.spacing.xl
        paddingBottom: "xl",
    },

    content: {
        maxWidth: 480,
        marginRight: "xl",

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
        }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

export default function Pat() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>Pat</Title>
                        <Text color="dimmed" mt="md">
                            I am a buffoon masquerading as a functional adult; and I like to think I do a pretty
                            good impression. In addition to that, my skills include:
                        </Text>

                        {/* 1st List; separate to have different icons */}
                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    {/* NOTE: ALTER HERE FOR THE ICON/BULLETS */}
                                    <IconBat size={17} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>Pharma R&D, Wetlab</b> – Before my Master's, I worked for 2 years in antibody formulation
                                development. Having the science background has been invaluable in translating
                                chemistry between empirical papers and the computational methods
                            </List.Item>
                            <List.Item>
                                <b>Data Visualization</b> – Most recently Streamlit, easily the most awesome
                                visualization tool. And mulitple libraries in Python and R, PowerBI, Excel
                            </List.Item>
                            <List.Item>
                                <b>Machine Learning</b> – Scikit, XGBoost, PyTorch, the models in DeepChem and
                                HuggingFace, and my best friend at work, ChatGPT
                            </List.Item>
                            <List.Item>
                                <b>Molecular Modeling</b> – I've worked with a few different molecular vizulation or
                                simulation tools, e.g. Chimera, RDKit, DeepChem, Vina, AlphaFold, DiffDock
                            </List.Item>

                            <List.Item>
                                <b>Bringing it all together</b> – I have enjoyed having several projects where one
                                had to consider and integrate the science, the coding/modeling, and the
                                significance, the translation of the results to real-world applications.
                            </List.Item>
                        </List>

                        {/* 2nd LIST */}
                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    {/* NOTE: ALTER HERE FOR THE ICON/BULLETS */}
                                    <IconPepper size={17} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                I too enjoy spicy food... like a delicious, purifying sauna: all the sweat and tears
                                leaving my body as I nourish it.
                            </List.Item>
                        </List>


                        <Group mt={30}>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/patrick-finnerty"
                                size="xl"
                                radius="xl"
                                variant="gradient"
                                className={classes.control}
                                leftIcon={<IconBrandLinkedin size={20} />}
                            >
                                LinkedIn
                            </Button>
                            <Button
                                compact={false} //GOOD
                                component="a"
                                size="xl"
                                radius="xl"
                                variant="gradient"
                                gradient={{ from: 'red', to: 'gray', deg: 45 }}
                                color="gray"
                                leftIcon={<IconMail size={22} stroke={1.5} />}
                                onClick={() => (window.location.href = 'mailto:patrick.finnerty42@gmail.com')}
                            >
                                Email me
                            </Button>

                        </Group>
                    </div>
                    {/* 500x375; see image in public, pixels in botom right */}
                    <Image src="/pinhead.gif" width={500 / 1.7} height={375} alt={''} />
                </div>
            </Container>
            {/* <a href='/Resumes/pat.pdf' download>Click to download</a> */}
        </div>

    );
}
