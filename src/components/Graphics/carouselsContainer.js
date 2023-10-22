import React from "react";
import { CarouselsDatabase } from "./graphicsDatabase";
import { CarouselComponent } from "../../assets/carousel/carouselComponent";
import { Pleft,H2,H2Container} from "../../App.mainStyles";
import {
  Row,
  Delineation,
  Carousels,
  CarouselsBody,
} from "../../assets/carousel/carouselsContainerStyles";

export function CarouselsContainer() {
  return (
    
    <div
      name={"carousels list"}
      className="CarouselsList"
      style={{
        width: "100%",
        color: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        //   flexWrap: "wrap",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "white",
      }}
    >
   <H2Container>
    <H2>Grafika</H2>
  </H2Container>
      <CarouselsBody>
        {CarouselsDatabase.map((carousel, index) => {
          return (
            <Row key={index}>
              <Carousels>
                <CarouselComponent
                  carousel={carousel.pictures}
                  name={"carousels list"}
                  className="CarouselsList"
                />
              </Carousels>
              <Delineation>
                {carousel.descriptions.map((subitem) => {
                  return <Pleft>{subitem}</Pleft>;
                })}
              </Delineation>
            </Row>
          );
        })}
      </CarouselsBody>
    </div>
  );
}
