import React from "react";
import { CarouselsDatabase } from "../Graphics/graphicsDatabase";
import { CarouselComponent } from "./carouselComponent";
import { Pleft} from "../../App.mainStyles";
import {
  Row,
  Delineation,
  Carousels,
  CarouselsBody,
} from "./carouselsContainerStyles";

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
