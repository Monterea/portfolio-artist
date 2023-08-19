import styled from "styled-components";
import * as palette from "../../App.mainStyles";

export const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${palette.darkBlue};
`;
export const FooterBody = styled.div`
  display: grid;
  gap: 20px;
  width: 95%;
  max-width: 1700px;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "a b c";
  @media (max-width: 650px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c c";
  }
  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.almostBlack};
  text-align: left;
  justify-content: center;
  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
  &:nth-child(1) {
    text-align: left;
    grid-area: a;
    @media (max-width: 500px) {
      text-align: center;
      border-bottom: 1px solid ${palette.white};
    }
  }
  &:nth-child(2) {
    text-align: center;
    grid-area: b;
    @media (max-width: 650px) {
      text-align: right;
    }
    @media (max-width: 500px) {
      text-align: center;
      border-bottom: 1px solid ${palette.whiteFull};
    }
  }
  &:nth-child(3) {
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    justify-items: flex-end;
    grid-area: c;
    @media (max-width: 650px) {
      justify-content: center;
      justify-items: center;
    }
    @media (max-width: 500px) {
      text-align: center;
    }
  }
`;
export const H1 = styled.h1`
  color: ${palette.whiteFull};
  font-size: 20px;
`;
export const B = styled.b`
  color: ${palette.whiteFull};
  font-size: 16px;
`;
export const P = styled.p`
  color: ${palette.whiteFull};
  font-size: 16px;
`;
export const NewTabLink = styled.a`
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  height: 50px;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(2);
  }
`;
export const H4 = styled.h4`
  color: ${palette.darkBlue};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 550px) {
    height: 150px;
    flex-direction: column;
    align-items: center;
  }
`;
export const PopupButton = styled.button`
  background-color: ${palette.darkBlue};
  border: none;
  color: ${palette.whiteFull};
  cursor: pointer;
  height: 50px;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(2);
  }
`;

export const Button = styled.a`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  height: 50px;
  width: 150px;
  border: 2px ${palette.darkBlue} solid;
  border-radius: 10px;
  background-color: ${palette.gold};
  padding: 15px;
  justify-items: center;
  text-align: center;
  cursor: pointer;
  color: ${palette.black};
`;
