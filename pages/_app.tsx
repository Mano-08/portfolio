import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mano</title>
        <meta name="title" property="og:title" content="Mano" />
        <meta
          name="description"
          content="Mano's portfolio website. Built with NextJS and TailwindCSS. I love designing and building stuff on the web. If you like cats, maybe we should be friends!"
        />
        <meta
          name="description"
          property="og:description"
          content="My portfolio website"
        />
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
