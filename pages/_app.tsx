import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <title>Mano - Creative Development & Design</title>
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
        <meta name="author" content="Mano" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mano - Creative Development & Design</title>
        <meta
          name="keywords"
          content="ui/ux, designer, freelance, website, portfolio"
        />
        <meta name="author" content="Abhishek Jha" />
        <meta
          name="description"
          content="Portfolio of Abhishek Jha. A UI/UX &amp; Visual designer from New Delhi."
        />
        <meta property="og:title" content="Abhishek Jha — Visual Designer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Portfolio of Abhishek Jha. A UI/UX &amp; Visual designer who designs interactive websites &amp; apps."
        />
        <meta property="og:url" content="https://abhishekjha.me/" />
        <meta
          property="og:image"
          content="https://abhishekjha.me/Twitter.png"
        />
        <meta name="theme-color" content="#14CF93" />
        <meta
          name="twitter:card"
          content="Abhishek Jha - UI/UX &amp; Visual Designer"
        />
        <meta name="twitter:site" content="@designflavorist" />
        <meta name="twitter:creator" content="@designflavorist" />
        <meta name="twitter:url" content="https://abhishekjha.me" />
        <meta name="twitter:title" content="2021 Portfolio of Abhishek Jha" />
        <meta
          name="twitter:description"
          content="Abhishek Jha is a visual designer based in New Delhi. He makes high-end user interfaces."
        />
        <meta
          name="twitter:image"
          content="https://abhishekjha.me/Twitter.png"
        />
        <meta
          name="twitter:image:alt"
          content="Abhishek Jha Visual Designer."
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
