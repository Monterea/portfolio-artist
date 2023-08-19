import React from "react";
import {
  TechnologiesBody,
  TechnologiesUnit,
  TechUnit,
  Ul,
  Li,
  TechUnits,
} from "./technologiesContainerStyles";
import { H2Container, H2 } from "../../App.mainStyles";
import { SkillsDatabase } from "../Skills/skillsDatabase";

export /* default */ function TechnologiesContainer() {
  return (
    <div
      name={"projects list body"}
      className="TechnologiesContainer"
      style={{
        paddingBottom: "50px",
        width: "100%",
        backgroundImage: "../../assets/pictures/landingPage/wall1.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <H2Container>
        <H2>Technologie</H2>
      </H2Container>
      <TechnologiesBody>
        {SkillsDatabase.map((item, index) => {
          return (
            <TechnologiesUnit key={index}>
              <Ul>{item.title}</Ul>
              <TechUnits>
                {item.technologies.map((subitem, i) => {
                  return (
                    <Li>
                      <TechUnit className="hovertext" data-hover={subitem.name}>
                        <img
                          name={"project-" + subitem.name + "-image"}
                          src={subitem.image}
                          alt={subitem.name}
                          width="80%"
                          // max-height="100%"
                        />
                      </TechUnit>
                    </Li>
                  );
                })}
              </TechUnits>
            </TechnologiesUnit>
          );
        })}
      </TechnologiesBody>
    </div>
  );
}
