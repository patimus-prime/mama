import { Navbar, Group, Code, ScrollArea, createStyles, Text } from '@mantine/core';
import {
  IconHome,
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconArticle,
  IconBat,
  IconBooks,
  IconPaw,
  IconTools,
} from '@tabler/icons';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
// import { About } from "../../pages/About";
//import { Logo } from './logo.svg';

// export default {
// Logo,
// };

const mockdata = [
  // This would be the hero etc. summary:
  { label: 'Home', icon: IconHome },

  {
    label: 'Projects',
    icon: IconBooks,
    initiallyOpened: false,
    links: [
      { label: 'Heme Binding Energy Distributions', link: '/' },
      { label: 'Multiclassification: SMILES to L1', link: '/' },
      { label: "Master's Thesis", link: '/' },
      { label: 'Web Scraping for Anagrams/Palindromes', link: '/' },
    ],
  },

  {
    label: 'Tools',
    icon: IconTools,
    initiallyOpened: false,
    links: [{ label: 'Dock/Score your PDB', link: '/' }],
  },

  { label: 'Sherlock!', icon: IconPaw, link: '../../pages/about' },

  { label: 'Contact', icon: IconBat },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 220 }} p="md" className={classes.navbar}>
      {/* NOTE: NavBar "header" moved below and commented */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      {/* NOTE: Navbar "footer" with contact card (kinda weird) moved below and commented */}
    </Navbar>
  );
}

// <Navbar.Section className={classes.header}>
//         <Group>
//           {/* position="apart"> */}
//           {/* <Logo width={120} /> */}
//           <Text size = {16}>Built with Mantine: </Text>
//           <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
//         </Group>
//       </Navbar.Section>

/* 
      <Navbar.Section className={classes.footer}>
        <UserButton
          image= "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section> */
