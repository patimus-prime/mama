import {
    createStyles,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    Space,
    Grid,
} from '@mantine/core';

import Image from 'next/image';

import { IconBat, IconBrandLinkedin, IconMail, IconPhone, IconChevronRight } from '@tabler/icons-react';

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

export default function Sonia() {
    const { classes } = useStyles();
    return (
        <><div>
            <Container>
                <Grid gutter={80}>
                    <Grid.Col span={6}>
                        <div className={classes.inner}>
                            <div className={classes.content}>
                                <Title className={classes.title}>About</Title>
                                {/* <Text color="dimmed" mt="md">
        I am a buffoon masquerading as a functional adult; and I like to think I do a pretty
        good impression. In addition to that, my skills include:
    </Text> */}

                                {/* 1st List; separate to have different icons */}
                                <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={<ThemeIcon size={20} radius="xl">
                                        <IconChevronRight size={17} stroke={1.5} />
                                    </ThemeIcon>}
                                >
                                    <List.Item>
                                        <b>16 Years of Excellence</b> in the Real Estate Industry:
                                        Bringing extensive experience in helping clients buy and sell homes and land in Mohave County, AZ, ensuring their real estate needs are met with expertise and professionalism.
                                    </List.Item>
                                    <List.Item>
                                        <b>Specialized in Residential and Land Sales: </b>
                                        Focusing on residential properties and land sales, I am dedicated to finding the perfect properties for buyers and helping sellers make successful transactions in the local real estate market.
                                    </List.Item>
                                    <List.Item>
                                        <b>Fluent in Spanish (Hablo Español): </b>
                                        Providing bilingual services to better assist a diverse range of clients, making the real estate process more accessible and comfortable.
                                    </List.Item>


                                </List>

                                {/* 2nd LIST */}



                                <Group mt={30}>
                                    <Button
                                        // next 3 lines hopefully obsolete option:
                                        // compact={false} //GOOD
                                        // component="a"
                                        // onClick={() => (window.location.href = 'mailto:soniafinnerty14@gmail.com')}
                                        // this should be superior:
                                        component={Link}
                                        href="mailto:soniafinnerty14@gmail.com"
                                        size="xl"
                                        radius="xl"
                                        variant="gradient"
                                        gradient={{ from: 'red', to: 'gray', deg: 45 }}
                                        opacity={.8}
                                        className={classes.control}
                                        leftIcon={<IconMail size={20} />}
                                    >
                                        Email me
                                    </Button>

                                    <Button
                                        component={Link}
                                        href="tel:951-852-2804"
                                        size="xl"
                                        radius="xl"
                                        variant="gradient"
                                        gradient={{ from: 'gray', to: 'green', deg: 45 }}
                                        opacity={.8}
                                        className={classes.control}
                                        leftIcon={<IconPhone size={20} />}

                                    >
                                        Call me
                                    </Button>


                                </Group>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {/* 500x375; see image in public, pixels in botom right */}
                        <Space h="xl" />
                        {/* Adjust the... geometry below based on px etc. */}

                        {/* Produce a circle: */}
                        {/* <div style={{ borderRadius: '50%', overflow: 'hidden', width: '260px', height: '260px', border: '1px solid #ccc' }}>
                            <Image src="/mamarealtorcom.jpg" width={260} height={260} alt={''} />
                        </div> */}

                        {/* Simply round the edges */}
                        <div style={{ borderRadius: '10px', overflow: 'hidden', width: '260px', height: '260px', border: '1px solid #ccc' }}>
                            <Image src="/mama.jpg" width={260} height={260} alt={''} />
                        </div>


                        {/* <Image src="/mamarealtorcom.jpg" width={260} height={260} alt={''} /> */}
                    </Grid.Col>
                </Grid>
            </Container>
            {/* <a href='/Resumes/pat.pdf' download>Click to download</a> */}
        </div><Space h="xl" />
            <Space h="xl" /></>

    );
}
