import styled from "styled-components";
import landingPageBackground from "./assets/pictures/landingPage/landingPageBackground.jpg";
import retro from "../src/assets/pictures/landingPage/retro.png";

//COLOR SCHEME
export const almostBlack = "rgba(10,10,10,1)";
export const almostBlackOp01 = "rgba(10,10,10,0.1)";
export const almostBlackOp03 = "rgba(10,10,10,0.3)";
export const almostBlackOp = "rgba(10,10,10,0.5)";
export const darkGrey = "#4C0D7D";
export const lightGrey = "#5ED3DC";
export const darkTurquoise = "#D731A7";
export const lightTurquoise = "#F08FEF";
export const whiteFull = "rgb(255,255,255)";
export const whiteOp01 = "rgba(255,255,255,0.1)";
export const whiteOp03 = "rgba(255,255,255,0.3)";
export const whiteOp = "rgba(255,255,255,0.5)";

export const darkBlue = "#15104a";
export const lightBlue = "#b1e0f0";
export const greyShadow = "rgba(0, 0, 0, 0.2)";
export const white = "rgb(255,255,255)";
export const gold = "#f5a100";
export const black = "rgb(0,0,0)";
export const blueShadow = "rgba(27, 27, 94, 0.7)";
export const darkBlueShadow = "rgba(8, 8, 29, 0.7)";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-image: url(${landingPageBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-position: top;
    background-repeat: repeat-y;
    background-size: contain;
  }
`;
export const H2Container = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
  background-image: url(${retro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 8/0, 3;
`;
export const H2 = styled.h2`
  color: ${black};
  font-size: 5em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  text-shadow: 5px 5px 10px ${gold};
  @media (max-width: 1400px) {
    font-size: 4em;
  }
  @media (max-width: 1000px) {
    padding-bottom: 5px;
  }
  @media (max-width: 1000px) {
    font-size: 3em;
    padding-bottom: 5px;
  }
  @media (max-width: 700px) {
    font-size: 2em;
  } ;
`;
export const H2white = styled(H2)`
  color: ${white};
`;
export const H3 = styled.h3`
  color: ${black};
  font-size: 35px;
  font-weight: bolder;
  padding-bottom: 20px;
  text-shadow: 5px 5px 10px ${gold};
  @media (max-width: 1400px) {
    font-size: 33px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

export const H4 = styled.h4`
  text-align: center;
  font-size: 28px;
  color: ${black};
  font-weight: bolder;
  padding-bottom: 10px;
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;
export const H4white = styled(H4)`
  color: ${white};
`;
export const P = styled.p`
  font-size: 22px;
  padding-bottom: 6px;
  text-align: center;
  color: ${black};
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1218px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
export const Pwhite = styled(P)`
  color: ${white};
`;
export const Pleft = styled(P)`
  text-align: left;
`;
export const H5 = styled.h5`
  font-size: 23px;
  padding: 5px;
  font-weight: bolder;
  color: ${black};
  border-top: 2px solid ${darkBlue};
  @media (max-width: 1400px) {
    font-size: 21px;
  }
  @media (max-width: 1218px) {
    font-size: 19px;
  }
  @media (max-width: 1000px) {
    font-size: 17px;
  }
  @media (max-width: 880px) {
    font-size: 15px;
  }
`;
export const H5white = styled(H5)`
  color: ${white};
`;
