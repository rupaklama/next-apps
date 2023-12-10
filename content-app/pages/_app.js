import "bulma/css/bulma.min.css";

import "../styles/globals.css";

// note: Parent entry point Component into our app to render the Current Child Components with pass in Props
function MyApp({ Component, pageProps }) {
  // console.log(`Component:  ${Component} \n\n pageProps:  ${pageProps}`);
  return <Component {...pageProps} />;
}

export default MyApp;
