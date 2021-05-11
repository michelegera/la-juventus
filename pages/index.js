import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const CoachName = styled.span`
  font-weight: bold;
`;

const Index = () => {
  // TODO: calculate number of days from date
  const daysInCharge = "999";

  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Chi allena la Juventus?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <main>
          <p>
            <CoachName>Andrea Pirlo</CoachName> è l’allenatore della Juventus da{" "}
            {daysInCharge} giorni
          </p>
        </main>
        <footer>{/* Notice, hashtag */}</footer>
      </div>
    </>
  );
};

export default Index;
