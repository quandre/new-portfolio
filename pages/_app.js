import Head from "next/head";
import { Fragment, useEffect } from "react";
// import { hotjar } from 'react-hotjar';
// import Drift from "react-driftjs";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  {
    /* Hotjar Tracking Code for https://quandremyers.com/ */
  }
  // useEffect(() => {
  //   hotjar.initialize(2927136, 6);
  // }, []);
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7JXQH2S71W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7JXQH2S71W', { page_path: window.location.pathname });
            `,
          }}
        />
        {/* Start of Async Drift Code */}
        {/* <Drift appId="rakhxr6y2v24" />; */}
        {/* End of Async Drift Code */}
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;