import styled from "styled-components";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import * as pallete from "../../App.mainStyles";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    min-height: 80vh;
    padding-top: 25px;
  }
`;
export const HeaderWhite = styled.div`
  width: 100%;
  font-weight: bold;
  justify-self: center;
  text-align: center;
  padding-bottom: 10px;
`;
export const CaruselsContainer = styled.div`
  color: ${pallete.darkBlue};
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${pallete.lightBlue};
  //background-color: ${pallete.white};
`;
