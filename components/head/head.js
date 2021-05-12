import NextHead from "next/head";

const Head = ({ description, title }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <link
      rel="preload"
      href="/fonts/Roboto/Roboto-Regular.woff2"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/JuventusFans/JuventusFans-Bold.woff2"
      as="font"
      crossOrigin=""
    />

    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </NextHead>
);

export default Head;
