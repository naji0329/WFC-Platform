import type { AppProps } from "next/app";
import { Header, Footer, Layout } from "components";

import "styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div id='modal' />
    </>
  );
}
export default MyApp;
