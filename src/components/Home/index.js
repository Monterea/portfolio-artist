import React from "react";
import {
  H1home,
  H1,
  Introduction,
  PageContainer,
  Bubble,
  Hero,
  HeroBorder,
  LightsBorderHero,
  RelativeContainer,
} from "./homeStyles";
import { FullName, ShortInfo } from "../../assets/text/infoText";
import bubble from "../../assets/pictures/landingPage/bubble.png";
import hero from "../../assets/pictures/landingPage/landingPageHero.png";

export default function Home() {
  return (
    <>
      <PageContainer name="home page">
        <RelativeContainer>
          <Introduction name="introduction">{ShortInfo}</Introduction>
          <LightsBorderHero name="lights for image">
            <HeroBorder name="border for hero">
              <Hero name="banner">
                <img
                  src={hero}
                  alt="Michaela Stuchlíková"
                  name="image Michaela Stuchlíková"
                  height="100%"
                />
              </Hero>
            </HeroBorder>
          </LightsBorderHero>
        </RelativeContainer>
        <Bubble name="bubble of skills">
          <img
            src={bubble}
            alt="bubble of skills"
            name="image bubble of skills"
            width="100%"
          />
        </Bubble>
        <H1home name="name">
          <H1>{FullName}</H1>
        </H1home>
      </PageContainer>
    </>
  );
}
