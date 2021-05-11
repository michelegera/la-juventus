import Head from "next/head";

const Index = () => {
  // TODO: calculate number of days from date
  const daysInCharge = "999";

  return (
    <>
      <Head>
        <title>Chi allena la Juventus?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header>{/* Logo */}</header>
        <main>
          <p>
            <span>Andrea Pirlo</span> è l’allenatore della Juventus da{" "}
            {daysInCharge} giorni
          </p>
        </main>
        <footer>{/* Notice, hashtag */}</footer>
      </div>
    </>
  );
};

export default Index;
