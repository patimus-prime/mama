import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Hero_Landing } from '../components/HomePage/Hero_landing';
import { AppCardsSection } from '../components/HomePage/AppCards';

// BIG AF NOTE: THIS FILE ALSO HOME PAGE, IS '/' ROUTE

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      <Hero_Landing />
      <ColorSchemeToggle />
      <AppCardsSection />
    </>
  );
}
