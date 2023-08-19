import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import bluewall from "../../assets/pictures/landingPage/bluewall.jpg";

export const CarouselsBody = styled.div`
  padding: 20px;
`;

export const Row = styled.div`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 1600px;
  max-height: 800px;
  @media (max-width: 616px) {
    max-height: 1400px;
  }
  &:nth-child(1) {
    flex-direction: row;
    @media (max-width: 616px) {
      //  flex-wrap: wrap;
      flex-direction: column-reverse;
      width: 100%;
    }
  }
  &:nth-child(2) {
    flex-direction: row-reverse;
    @media (max-width: 616px) {
      flex-direction: column-reverse;
      width: 100%;
    }
  }
  &:nth-child(3) {
    flex-direction: row;
    @media (max-width: 616px) {
      flex-direction: column-reverse;
      width: 100%;
    }
  }
`;
export const Carousels = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  aspect-ratio: 2/3;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${palette.darkBlue};
  @media (max-width: 616px) {
    //  flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Delineation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  background-image: url(${bluewall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 616px) {
    //  flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;
