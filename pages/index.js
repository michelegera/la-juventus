import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import Footer from "../components/footer";
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
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

      <Container>
        <Header />
        <Main>
          <p>
            <CoachName>Andrea Pirlo</CoachName> è l’allenatore della Juventus da{" "}
            {daysInCharge} giorni
          </p>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Index;
