import React from "react";
import {
  H1home,
  H1,
  Introduction,
  PageContainer,
  Hero,
  RelativeContainer,
} from "./homeStyles";
import { FullName, ShortInfo } from "../../assets/text/infoText";
import hero from "../../assets/pictures/landingPage/landingPageHero.png";

export default function Home() {
  return (
    <>
      <PageContainer name="home page">
        <RelativeContainer>
          <Introduction name="introduction">{ShortInfo}</Introduction>
              <Hero name="banner">
                <img
                  src={hero}
                  alt="Michaela Stuchlíková"
                  name="image Michaela Stuchlíková"
                  height="100%"
                />
              </Hero>
        </RelativeContainer>       
        <H1home name="name">
          <H1>{FullName}</H1>
        </H1home>
      </PageContainer>
    </>
  );
}
