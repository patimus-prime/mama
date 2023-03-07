import { HeroLanding } from '../components/HomePage/Hero_landing';
import { AppCardsSection } from '../components/HomePage/AppCards';
import { SherlockGrid } from '../components/HomePage/SherlockGrid';
import { ImploreTools } from '../components/HomePage/ImploreTools';
// BIG AF NOTE: THIS FILE ALSO HOME PAGE, IS '/' ROUTE

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      <HeroLanding />
      {/* NOTE: ALTER ColorSchemeToggle COMPONENT FOR SPACING/Group props IF RE-IMPLEMENTING */}
      {/* <ColorSchemeToggle /> */}
      <ImploreTools />
      <AppCardsSection />
      <SherlockGrid />
    </>
  );
}
