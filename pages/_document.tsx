import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
