import styled, { createGlobalStyle } from "styled-components";
import path from "path";
import { readFile } from "fs/promises";

import CurrentCoach from "../components/current-coach";
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

const Index = ({ currentCoach }) => {
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
          <CurrentCoach coach={currentCoach} />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  let data;

  if (process.env.NODE_ENV === "production") {
    const res = await fetch(
      `https://${process.env.API_HOST}/coachs?team=${process.env.TEAM_ID}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": process.env.API_HOST,
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );

    data = await res.json();
  } else {
    const filePath = path.join(process.cwd(), "data", "coachs.json");
    const fileContent = await readFile(filePath, "utf8");

    data = JSON.parse(fileContent);
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  const currentCoach = data.response.find((coach) =>
    // if his job doesn’t have a end date, he’s in charge!
    coach.career.find((job) => !job.end)
  );

  return {
    props: {
      currentCoach,
    },
    // Re-fetch data at most every 15 minutes (= 96 times/day), therefore
    // ensuring to stay under the 100 requests/day limit of the free tier.
    revalidate: 15 * 60,
  };
}

export default Index;
