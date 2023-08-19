import React from "react";
import { TechnologiesContainer } from "./technologiesContainer";
import { TitleHobbies, TextHobbies } from "../../assets/text/hobbiesText";
import {
  TextDescriptionNew,
  /*   TitleJobs,
  Jobs,
  Addendum, */
  TitleDescription,
} from "../../assets/text/skillsDescription.js";
import {
  H2,
  H2white,
  P,
  Pwhite,
  /*   H4white, */
  H2Container,
} from "../../App.mainStyles";
import {
  PageContainer,
  DescriptionContainer,
  HobbiesContainer,
  Body,
  /*   BodyLi,
  LiJob,
  Ul, */
} from "./skillsStyles";

export default function Skills() {
  // const hobbiesTexts = { HobbiesDescription };
  return (
    <>
      <PageContainer name="skills page">
        <TechnologiesContainer />
        <DescriptionContainer>
          <H2white>{TitleDescription}</H2white>
          <Body>
            {TextDescriptionNew.map((paragraph) => (
              <Pwhite>{paragraph}</Pwhite>
            ))}
          </Body>
          {/* <Body>
            <Ul>
              <H4white>{TitleJobs}</H4white>
            </Ul>
            <BodyLi>
              {Jobs.map((job) => (
                <LiJob>{job}</LiJob>
              ))}
            </BodyLi>
            {Addendum.map((paragraph) => (
              <Pwhite>{paragraph}</Pwhite>
            ))}
          </Body> */}
        </DescriptionContainer>
        <HobbiesContainer>
          <H2Container>
            <H2 className="cursive">{TitleHobbies}</H2>
          </H2Container>
          <Body>
            {TextHobbies.map((paragraph) => (
              <P className="cursive">{paragraph}</P>
            ))}
          </Body>
        </HobbiesContainer>
      </PageContainer>
    </>
  );
}
