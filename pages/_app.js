import PlausibleProvider from "next-plausible";

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="chiallena.lajuvent.us">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
