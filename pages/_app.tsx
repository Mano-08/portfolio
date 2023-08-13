import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mano&apos;s Portfolio</title>
        <meta
          name="keywords"
          content="ui/ux, designer, freelance, website, portfolio"
        />
        <meta name="author" content="Mano W" />
        <meta
          name="description"
          content="Portfolio of Mano. A hobbyist coder from India."
        />
        <meta
          property="og:title"
          content="Mano - Creative Design and Development"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Portfolio of Mano. A hobbyist coder from India."
        />
        {/* <meta property="og:url" content="" /> */}
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Mano-08/Mano-08/orange-theme/id.png"
        />
        <meta name="theme-color" content="#e8e8e8" />
        <meta
          name="twitter:card"
          content="Mano - Creative Design and Development"
        />
        <meta name="twitter:site" content="@mano__08" />
        <meta name="twitter:creator" content="@mano__08" />
        {/* <meta name="twitter:url" content="" /> */}
        <meta name="twitter:title" content="Portfolio of Mano" />
        <meta
          name="twitter:description"
          content="Mano is a Software Developer from India. He is a hobbyist coder and loves to build cool web apps."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Mano-08/Mano-08/orange-theme/id.png"
        />
        <meta
          name="twitter:image:alt"
          content="Mano - Creative Design and Development."
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
