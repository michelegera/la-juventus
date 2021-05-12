import styled, { createGlobalStyle } from "styled-components";
import { differenceInCalendarDays } from "date-fns";

import Footer from "../components/footer";
import Head from "../components/head";
import Header from "../components/header";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Roboto";
      src: url("/fonts/Roboto/Roboto-Regular.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: "JuventusFans";
    src: url("/fonts/JuventusFans/JuventusFans-Bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font: 16px/1.4 "Roboto", sans-serif;
  }

  html,
  body,
  #__next {
    height: -webkit-fill-available;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h5 {
    font-family: "JuventusFans", sans-serif
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* Mobile Safari viewport fix */
  min-height: -webkit-fill-available;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.p`
  text-align: center;
`;

const CoachName = styled.span`
  font-weight: bold;
  font-family: "JuventusFans", sans-serif;
  text-transform: uppercase;
  font-size: 4.209rem;
  display: block;
`;

const Index = () => {
  const daysInCharge = differenceInCalendarDays(
    new Date(),
    new Date(2020, 7, 8, 0, 0) // 08/08/2020
  );

  return (
    <>
      <GlobalStyle />

      <Head
        description="Per essere sempre aggiornato sul nome dell’attuale allenatore dei Bianconeri"
        image="/opengraph.png"
        title="Chi allena la Juventus?"
        url={process.env.NEXT_PUBLIC_URL}
      />

      <Container>
        <Header />
        <Main>
          <Content>
            <CoachName>Andrea Pirlo</CoachName> è l’allenatore della Juventus da{" "}
            {daysInCharge} giorni
          </Content>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Index;
