import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import bluewall from "../../assets/pictures/landingPage/bluewall.jpg";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-image: url(${bluewall});
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  padding-bottom: 30px;
`;
export const DescriptionContainer = styled.div`
  position: relative;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const HobbiesContainer = styled(DescriptionContainer)`
  background-image: url(${bluewall});
`;
export const Body = styled.div`
  position: relative;
  flex-direction: column;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  max-width: 1500px;
`;
export const BodyLi = styled.div`
  padding-bottom: 30px;
  width: 100%;
  column-count: 3;
  column-width: auto;
  @media (max-width: 1100px) {
    column-count: 2;
  }
  @media (max-width: 600px) {
    column-count: 1;
  }
`;

export const Ul = styled.ul`
  padding-bottom: 15px;
  font-size: 22px;
  color: ${palette.white};
`;
export const LiJob = styled.li`
  padding-bottom: 15px;
  color: ${palette.white};
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1218px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 880px) {
    font-size: 14px;
  }
`;
