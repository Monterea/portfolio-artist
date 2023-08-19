import styled from "styled-components";
import * as palette from "../../App.mainStyles";

export const TechnologiesBody = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 879px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const TechnologiesUnit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: flex-start;
  //flex-wrap: wrap;
  align-items: center;
  @media (max-width: 879px) {
    padding-left: 20px;
    height: auto;
    align-items: flex-start;
    padding-top: 10px;
    padding-bottom: 0px;
  }
`;
export const TechUnits = styled.div`
  flex-wrap: wrap;
  padding-top: 5px;
  @media (max-width: 879px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 20px;
  }
`;
export const TechUnit = styled.span`
  width: 105px;
  height: 105px;
  background-color: ${palette.white};
  border: 4px double ${palette.darkBlue};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  box-shadow: 5px 5px 10px ${palette.darkBlue};
  @media (max-width: 1000px) {
    width: 95px;
    height: 95px;
  }
  @media (max-width: 879px) {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
`;
export const Li = styled.li`
  list-style-type: none;
  padding-bottom: 10px;
  align-items: center;
`;
export const Ul = styled.ul`
  padding-bottom: 20px;
  text-align: center;
  height: 80px;
  font-size: 28px;
  color: ${palette.black};
  font-weight: bolder;
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (max-width: 879px) {
    height: auto;
  }
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;
