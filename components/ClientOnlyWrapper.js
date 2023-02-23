// components/ClientOnly.js
// this shit comes from: https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
// and is intended to allow all components to use apolloclient with client-side rendering, user-rendering
// apparently informed by paranoia about rehyrdration

// BIG ASS NOTE. THIS IS A WRAPPER. WE WRITE OUR COMPONENTS TO USE THE DATA.
// WHEN WE CONSTRUCT OUR PAGES, WE WRAP THE COMPONENTS WE CALL WITH THIS DOPE WRAPPER
// GL

import { useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}