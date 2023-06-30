import { BackgroundImage, Container, Space, Text, Title } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroHome } from '../components/HomePage/0_HeroHome';
import { SherlockGrid } from '../components/HomePage/99_SherlockGrid';
import { AppCardsSection } from '../components/HomePage/2_AppCards';
// import { FeatureDockTool } from '../components/dependencies/iFrameFeature';
import { IframeYeast } from '../components/dependencies/IframeYeast';
import { IframeThesis } from '../components/dependencies/IframeThesis';
import { IframeRDKit } from '../components/dependencies/IframeRDKit';
import { IframeMolview } from '../components/dependencies/IframeMolview';
import AboutPage from './About';
import React from 'react'
import ReactPlayer from 'react-player'
import SoundCloudPlayer from 'react-player/soundcloud';
import { SoundCloudIFrame } from '../components/dependencies/EmbedSoundCloud';
// import { ContactSection } from '../components/Contact/Contact';
// BIG NOTE ON HYDRATION ISSUES; APPEARS BECAUSE OF BUTTON/LINK LEGACY BEHAVIOR IN MANY INSTANCES.
// https://github.com/mantinedev/mantine/issues/2851
// import { Text } from '@mantine/core';



export default function HomePage() {
  return (
    <>
      <HeroHome />
      <SoundCloudIFrame />
      {/* <a href="https://www.buymeacoffee.com/patrickfinnerty" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a> */}
      <div id="Iframes">
        <Text align="center">
          <Title>Top-notch apps!</Title>
        </Text>
        {/* <IframeRDKit /> */}
        <IframeYeast />
        <IframeMolview />
        <IframeThesis />
      </div>
      <AppCardsSection />
      <AboutPage />
      <SherlockGrid />
    </>
  );
}
