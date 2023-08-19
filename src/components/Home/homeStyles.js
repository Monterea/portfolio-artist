import styled from "styled-components";
import landingPageBackground from "../../assets/pictures/landingPage/landingPageBackground.jpg";
import * as palette from "../../App.mainStyles";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  height: 800px;
  width: 100%;
  background-image: url(${landingPageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    height: 750px;
  }
  @media (max-width: 920px) {
    height: 700px;
  }
  @media (max-width: 770px) {
    min-height: 80vh;
    padding-top: 20px;
    height: 600px;
  }
`;

export const H1home = styled.h1`
  position: absolute;
  top: 470px;
  width: 100%;
  z-index: 4;
  @media (max-width: 1200px) {
    top: 450px;
  }
  @media (max-width: 920px) {
    top: 420px;
  }
  @media (max-width: 770px) {
    top: 350px;
  }
  @media (max-width: 500px) {
    top: 310px;
  }
`;
export const H1 = styled.h1`
  z-index: 4;
  //  font-family: "Alfa Slab One", cursive;
  color: white;
  text-align: center;
  font-size: 6rem;
  text-shadow: 5px 5px 10px ${palette.gold};
  @media (max-width: 1240px) {
    font-size: 5rem;
  }
  @media (max-width: 920px) {
    font-size: 60px;
  }
  @media (max-width: 770px) {
    font-size: 50px;
    padding: 20px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;
export const Bubble = styled.div`
  z-index: 4;
  width: 300px;
  position: absolute;
  top: 30px;
  right: 330px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    width: 250px;
    top: 20px;
    right: 280px;
  }
  @media (max-width: 768px) {
    width: 200px;
    top: 20px;
    right: 280px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export const Hero = styled.div`
  height: 573px;
  width: 296px;
  padding: 0px;
  z-index: 3;
  @media (max-width: 920px) {
    height: 481px;
    width: 249px;
  }
  @media (max-width: 770px) {
    height: 404px;
    width: 209px;
  }
`;
export const HeroBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 580px;
  width: 340px;
  z-index: 1;
  border: solid;
  border-color: white;
  border-width: 5px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.529), 0 0 5px ${palette.white},
    0 0 5px rgba(255, 255, 255, 0.768);
  border-width: 5px;
  margin: auto;
  border-radius: 50%;
  /* background-color: transparent; */
  background-image: linear-gradient(
    to bottom right,
    transparent,
    ${palette.darkBlue}
  );
  @media (max-width: 920px) {
    height: 487px;
    width: 286px;
  }
  @media (max-width: 770px) {
    height: 409px;
    width: 240px;
  }
`;
export const LightsBorderHero = styled.div`
  height: 580px;
  width: 330px;
  @media (max-width: 920px) {
    height: 487px;
    width: 286px;
  }
  @media (max-width: 770px) {
    height: 409px;
    width: 240px;
  }
`;
export const RelativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  height: 700px;
  @media (max-width: 1200px) {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 40px;
    height: 600px;
  }
  @media (max-width: 920px) {
    padding-top: 110px;
    height: 500px;
  }
  @media (max-width: 770px) {
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
  }
`;
export const Introduction = styled.div`
  color: ${palette.gold};
  // color: ${palette.darkBlue};
  font-size: 30px;
  width: auto;
  height: 100%;
  max-width: 800px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 10px #15104a, 0 0 10px #15104a, 0 0 5px #15104a;
  //text-shadow: 2px 2px 10px ${palette.white}, 0 0 10px ${palette.white},  0 0 5px ${palette.white};

  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    padding-right: 20px;
    font-size: 20px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;
