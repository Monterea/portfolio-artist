import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import arrow from "../../assets/pictures/carousel/arrow.svg";

export const CarouselBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  object-fit: contain;
  align-self: center;
  align-items: center;
  //justify-content: space-between;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  padding: 10px;
  @media (max-width: 550px) {
    margin-bottom: 65px;
    justify-content: flex-start;
  }
`;
export const ImageContainer = styled.div`
  display: flexbox;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  z-index: 2;

  @media (max-width: 1130px) {
    height: 80%;
    align-self: flex-start;
    justify-content: flex-start;
  }
  @media (max-width: 360px) {
    height: auto;
  }
`;
export const Image = styled.img`
  display: flex;
  max-width: 95%;
  min-height: 300px;
  aspect-ratio: 16 / 9;
  object-fit: contain;
`;
export const OthersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  z-index: 2;
  @media (max-width: 1130px) {
    width: 80%;
    height: 20%;
  }
  @media (max-width: 616px) {
    height: 20%;
  }
  @media (max-width: 360px) {
    height: auto;
  }
`;
export const CarouselTexts = styled.div`
  width: 100%;
  padding-top: 3px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
export const CarouselButton = styled.button`
  position: absolute;
  // display: flex;
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  background-color: ${palette.white};
  background-image: url(${arrow});
  border-radius: 50%;
  border: none;
  z-index: 5;
  cursor: pointer;
  ${(props) => {
    if (props.galleryLength <= 1) {
      return `
			display: none;
			`;
    }
  }}
  :hover {
    background-color: ${palette.gold};
  }
  :nth-child(1) {
    right: calc(100% - 40px);
    top: calc(100% - 40px);
    //   transform: rotate(180deg);
  }
  :nth-child(3) {
    left: calc(100% - 40px);
    top: calc(100% - 40px);
    transform: rotate(180deg);
  }
`;
