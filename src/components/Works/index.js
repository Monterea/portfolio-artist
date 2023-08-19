import React from "react";
import { CarouselsContainer } from "./carouselsContainer";
import { PageContainer, HeaderWhite } from "./worksStyles";
import CardsContainer from "./cardsContainer";
import { H2white } from "../../App.mainStyles";

export default function Works() {
  return (
    <>
      <PageContainer name="works page">
        <HeaderWhite>
          <H2white>Projekty</H2white>
        </HeaderWhite>
        <CardsContainer />
        <CarouselsContainer />
      </PageContainer>
    </>
  );
}
