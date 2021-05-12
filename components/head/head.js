import NextHead from "next/head";

const Head = ({ description, image, title, url }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />

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
