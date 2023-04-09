import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mano - Creative Development & Design</title>
        <meta name="title" property="og:title" content="Mano" />
        <meta
          name="description"
          content="Mano`s portfolio website. Built with NextJS and TailwindCSS. I love designing and building stuff on the web, and if you like cats, maybe we should be friends!"
        />
        <meta
          name="description"
          property="og:description"
          content="Mano`s portfolio website. Built with NextJS and TailwindCSS. I love designing and building stuff on the web, and if you like cats, maybe we should be friends!"
        />
        <meta property="og:type" content="Portfolio Website" />
        <meta name="author" content="Mano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
