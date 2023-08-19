import React from "react";
import { useState } from "react";
import { ProjectsDatabase } from "./projectsDatabase";
import { P, H5, H4 } from "../../App.mainStyles";
import {
  Card,
  CardMedia,
  CardContent,
  TypographyHeader,
  Typography,
  CardActions,
  Button,
} from "./cardsContainerStyles";
export default function CardsContainer() {
  const [projects, setProjects] = useState(ProjectsDatabase);
  return (
    <div
      name={"projects list body"}
      className="GalleryBody"
      style={{
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        //padding: "10px",
        backgroundImage:
          "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg",
      }}
    >
      {projects.map((project) => (
        <Card key={project.id} name={"project-" + project.id}>
          <CardMedia name={"project-" + project.id + "-image-body"}>
            <img
              name={"project-" + project.id + "-image"}
              src={project.image}
              alt={"project.name"}
              width="100%"
              height="auto"
            />
          </CardMedia>
          <CardContent name={"project-" + project.id + "descriptions"}>
            <TypographyHeader>
              <H4>{project.title}</H4>
            </TypographyHeader>
            <Typography>
              <P>{project.description}</P>
              <P>{project.description1}</P>
              <P>{project.description2}</P>
              <H5>{project.technology}</H5>
            </Typography>
          </CardContent>
          <CardActions name={"project-" + project.id + "links"}>
            {project.gitHub && (
              <Button
                name={"project-" + project.id + "GitHub-link"}
                href={project.gitHub}
                target="_blank"
              >
                GitHub
              </Button>
            )}
            {project.link && (
              <Button
                name={"project-" + project.id + "link"}
                href={project.link}
                target="_blank"
              >
                Aplikace
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
