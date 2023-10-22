import styled from "styled-components";
import landingPageBackground from "../../assets/pictures/landingPage/pirka.jpg";
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
export const H1 = styled.h1`
  z-index: 4;
  //  font-family: "Alfa Slab One", cursive;
color: white;
  // color: ${palette.gold};
  //text-align: center;
  padding-left: 50px;
  text-align: start;
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

export const H1home = styled.h1`
  position: absolute;
  top: 300px;
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
export const Hero = styled.div`
  height: 723px;
  width: 523px;
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
  height:723px;
  width: 523px;
  z-index: 1;
  
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
  color: ${palette.white};
  font-size: 30px;
  width: auto;
  height: 100%;
  max-width: 800px;
  padding-top: 100px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
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
