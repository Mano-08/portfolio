import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mano</title>
        <meta name="title" property="og:title" content="Mano" />
        <meta name="description" content="My portfolio website" />
        <meta
          name="description"
          property="og:description"
          content="My portfolio website"
        />
        {/* <meta
      name="image"
      property="og:image"
      content="https://live.staticflickr.com/65535/51338203260_9933f12f47_k.jpg"
    /> */}
        <meta property="og:type" content="Website" />
        <meta name="author" content="Mano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
