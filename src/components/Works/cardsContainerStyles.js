import styled from "styled-components";
import * as palette from "../../App.mainStyles";
import bluewall from "../../assets/pictures/landingPage/bluewall.jpg";
import landingPageBackgroundLight from "../../assets/pictures/landingPage/landingPageBackgroundLight.jpg";
/* export const CardsContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
 */
export const Card = styled.div`
  max-width: 600px;
  width: 24%;
  padding: 10px;
  border: 3px solid ${palette.darkBlue};
  background-color: ${palette.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-left: 0 5px;
  margin-right: 0 5px;
  @media (max-width: 1285px) {
    width: 32%;
    min-width: 300px;
  }
  @media (max-width: 916px) {
    width: 48%;
    min-width: 300px;
  }
  @media (max-width: 620px) {
    width: 100%;
    min-width: 250px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
export const CardMedia = styled.div`
  width: 100%;
`;
export const CardContent = styled.div`
  width: 100%;
  border-radius: 10px;
`;
export const TypographyHeader = styled.div`
  width: 100%;
  border-radius: 10px;
  text-align: center;
  min-height: 50px;
  padding-top: 7px;
  justify-content: center;
  background-image: url(${bluewall});
  display: flex;
  // text-shadow: 5px 5px 10px ${palette.gold};
`;

export const Typography = styled.div`
  width: 100%;
  background-color: ${palette.white};
  padding: 5px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1285px) {
    height: 170px;
  }
  @media (max-width: 1000px) {
    height: 130px;
  }
`;

export const CardActions = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  background-image: url(${bluewall});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Button = styled.a`
  color: ${palette.black};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding-top: 4px;
  background-color: ${palette.gold};
  min-width: 80px;
  height: 30px;
  border: 2px solid black;
  border-radius: 10px;
`;
