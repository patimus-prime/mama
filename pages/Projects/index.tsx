// BIG NOTE: BC THIS IS INDEX.TSX IN PROJECTS FOLDER, WILL RENDER AT /projects/

import { FeatureDockTool } from '../../components/Projects/FeatureDockTool';
import { FeatureHeme } from '../../components/Projects/FeatureHeme';
import { FeatureSmiles } from '../../components/Projects/FeatureSmiles';
import { Space } from '@mantine/core';
export default function AllProjects() {
  return (
    <>
      <FeatureHeme />
      <FeatureSmiles />
      <Space h="xl" />
      <FeatureDockTool />
    </>
    // <div>
    //   <h1>
    //     Sherlock is, according to this adoption papers, an Australian Kelpie/Mix. I suspect he's
    //     part chihuahua, because he can be grouchy and also he's smaller, and cuter than the dogs
    //     that come up in pure-bred photos. He likes long walks, car rides, and spicy food. He enjoys
    //     wearing fashionable clothing and believes himself a dog-shaped person; for all intents and
    //     purposes he is.
    //   </h1>
    // </div>
  );
}
