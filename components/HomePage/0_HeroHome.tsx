import { Title, Text, Container, Button, Overlay, createStyles, Space, Grid, Group, ActionIcon } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub, IconPhone, IconHomeDollar, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
// import './99_SherlockGrid';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        // paddingTop: 100,
        // paddingBottom: 250,
        height: '100vh',
        // current syntax for Nextjs; second one for create-react-app or others, Nextjs Image is better
        backgroundImage: 'url(/home_1.jpg)', // `url(${sherb_sleepy})`, // foreign syntax to me tbh. from : https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // '@media (max-width: 520px)': {
        //     paddingTop: 80,
        //     paddingBottom: 50,
        // },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',

        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },

    controls: {
        marginTop: theme.spacing.xl,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        height: 42,
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 10,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },
}));

export function HeroHome() {
    const { classes, cx } = useStyles();
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({});

    return (
        <div className={classes.wrapper} id='Home'>
            {/* next line makes the background/pic above more gray, lower opacity value for brighter */}
            <Overlay color="#000" opacity={0.50} zIndex={1} />
            {/* <Grid> */}
            {/* <Grid.Col md={8}> */}
            <div className={classes.inner}>
                <Title className={classes.title}>
                    {/* Welcome */}
                    {/* My dog deserves the{' '} */}
                    <Text component="span" >
                        {/* Welcome! ¡Bienvenidos! */}
                        Mohave County Real Estate
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        {/* <Space h="xl" /> */}
                        {/* <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" /> */}

                        I'm a realtor serving Mohave County based in Kingman, AZ. Hablo Español.
                    </Text>
                </Container>


                <div className={classes.controls}>


                    <Button
                        component={Link}
                        href="https://www.realtor.com/realestateagents/644202b3a2c3381792312849"
                        size="xl"
                        radius="xl"
                        variant="gradient"
                        opacity={.8}
                        className={classes.control}
                        leftIcon={<IconHomeDollar size={20} />}

                    >
                        Current Listings
                    </Button>

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


                    {/* <Button
                        component={Link}
                        scroll={false}
                        href="/#Iframes"
                        size="xl"
                        radius="xl"
                        variant="gradient"
                        className={classes.control}
                    // leftIcon={<IconBrandLinkedin size={20} />}
                    >
                        📊Cool apps!
                    </Button>
                    <Button
                        component={Link}
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
                        component={Link}
                        href="https://github.com/patimus-prime/"
                        size="xl"
                        radius="xl"
                        variant="default"
                        className={classes.control}
                        leftIcon={<IconBrandGithub size={20} />}
                    >
                        GitHub
                    </Button>

                    <Button
                        component={Link}
                        // with button element type as Link, can use Link scroll = {false}
                        // see HeaderSimple for explanation
                        scroll={false}
                        href="/#sherbID"
                        size="xl"
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: 'purple', to: 'yellow', deg: 45 }}
                        className={classes.control}
                    >
                        😍 DOG!
                    </Button>

                    <Button
                        component={Link}
                        // with button element type as Link, can use Link scroll = {false}
                        // see HeaderSimple for explanation
                        scroll={false}
                        href="/Resumes/pat.pdf"
                        size="xl"
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: 'gray', to: 'green', deg: 45 }}
                        className={classes.control}
                        download={true}
                    >
                        CV/Resume
                    </Button> */}
                    {/* Link component accomodates for Next.js routing;
          Using href within button worked, but relatively slow navigation.
          From: https://mantine.dev/core/button/#usage-with-nextjs */}

                    {/* NEVER DO THIS, THE a COMPONENT IS EVIL */}
                    {/* <Link href="/hello_world" passHref>
            <Button
              component="a"
              // href="/hello_world"
              size="xl"
              radius="xl"
              variant="gradient"
              gradient={{ from: 'red', to: 'purple', deg: 45 }}
              className={classes.control}
              leftIcon={<IconBat size={20} />}
            >
              Elsewhere
            </Button>
          </Link> */}
                    {/* alternative:  component = "a" href ="wherever"*/}
                </div>

            </div>
            {/* </Grid.Col> */}
            {/* </Grid> */}
        </div>
    );
}
