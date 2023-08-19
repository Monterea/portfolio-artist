import React from "react";
import { useState } from "react";
import { Popup } from "./popup";
import myCvPdf from "../../assets/files/Stuchlikova_CV.pdf";
import myCvEngPdf from "../../assets/files/Stuchlikova_EN_CV.pdf";
import {
  City,
  Email,
  FullName,
  Phone,
  PSC,
  Street,
} from "../../assets/text/infoText";
import {
  FooterBody,
  FooterContainer,
  FooterItem,
  H1,
  P,
  B,
  NewTabLink,
  PopupButton,
  Button,
  ButtonsContainer,
  H4,
} from "./footerStyles";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [cvEngDownloaded, setCvEngDownloaded] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FooterContainer name="footer container">
      <FooterBody name="footer body">
        <FooterItem name="footer adress">
          <H1 className="contact" name="name">
            {FullName}
          </H1>
          <P className="contact" name="adress street">
            {Street}
          </P>
          <P className="contact" name="adress city">
            {City}
          </P>
          <P className="contact" name="adress psc">
            {PSC}
          </P>
        </FooterItem>
        <FooterItem name="footer contact">
          <H1 name="contact">Kontakty</H1>
          <B name="contact email label">email:</B>
          <P className="contact" name="contact email">
            {Email}
          </P>
          <B name="contact telefon">telefon:</B>
          <P className="contact" name="contact number">
            {Phone}
          </P>
        </FooterItem>
        <FooterItem name="footer socials">
          <NewTabLink
            href="https://github.com/Monterea"
            target="_blank"
            name="github"
          >
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="#FFFFFF"
              height="50px"
              viewBox="0 0 50 50"
              enable-background="new 0 0 50 50"
            >
              <title>Git icon</title>
              <g>
                <path
                  d="M25,0.6c-13.8,0-25,11.2-25,25C0,36.7,7.2,46,17.1,49.3c1.3,0.2,1.7-0.5,1.7-1.2c0-0.6,0-2.2,0-4.2
		c-7,1.5-8.4-3.4-8.4-3.4c-1.1-2.9-2.8-3.7-2.8-3.7c-2.3-1.5,0.2-1.5,0.2-1.5c2.5,0.2,3.8,2.6,3.8,2.6c2.2,3.8,5.9,2.7,7.3,2.1
		c0.2-1.6,0.9-2.7,1.6-3.3C14.9,36,9,33.9,9,24.3c0-2.7,1-5,2.6-6.7c-0.3-0.6-1.1-3.2,0.2-6.6c0,0,2.1-0.7,6.9,2.6
		c2-0.6,4.1-0.8,6.3-0.8c2.1,0,4.2,0.3,6.3,0.8c4.8-3.2,6.8-2.6,6.8-2.6c1.3,3.4,0.5,6,0.3,6.6c1.6,1.8,2.6,4,2.6,6.7
		c0,9.6-5.8,11.7-11.4,12.3c0.9,0.7,1.7,2.3,1.7,4.6c0,3.3,0,6,0,6.9c0,0.7,0.4,1.4,1.7,1.2C42.8,46,50,36.7,50,25.6
		C50,11.8,38.8,0.6,25,0.6L25,0.6z"
                />
              </g>
            </svg>
          </NewTabLink>
          <NewTabLink
            href="https://linkedin.com/in/michaela-stuchlikova999"
            target="_blank"
            name="linkedin"
          >
            <svg
              height="50px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#FFFFFF"
              fill="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>linkedin</title>{" "}
                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />{" "}
              </g>
            </svg>
          </NewTabLink>
          <PopupButton type="button" onClick={togglePopup}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              height="50px"
              fill="#FFFFFF"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M2,13h10c0.6,0,1-0.4,1-1V2h33v5h2V1c0-0.6-0.4-1-1-1H12l0,0c-0.1,0-0.2,0-0.3,0.1h-0.1c-0.1,0.1-0.2,0.1-0.3,0.2l0,0 l-11,11l0,0c-0.1,0.1-0.1,0.2-0.2,0.3v0.1C0.1,11.8,0,11.9,0,12l0,0v47c0,0.6,0.4,1,1,1h29v-2H2L2,13L2,13z M3.4,11l3.8-3.8 L11,3.4V11H3.4z" />{" "}
                    <path d="M53,39H43c-3.9,0-7,3.1-7,7v14h2V46c0-2.8,2.2-5,5-5h1.3l2.8,7.4c0.1,0.3,0.5,0.6,0.9,0.6s0.8-0.3,1.1-0.6l2.8-7.4H53 c2.8,0,5,2.2,5,5v14h2V46C60,42.1,56.9,39,53,39z M48.1,45.2L46.5,41h3.2L48.1,45.2z" />{" "}
                    <rect x="47" y="51" width="2" height="2" />{" "}
                    <rect x="47" y="55" width="2" height="2" />{" "}
                    <path d="M47,38h2c2.8,0,5-2.2,5-5v-3c0-2.8-2.2-5-5-5h-2c-2.8,0-5,2.2-5,5v3C42,35.8,44.2,38,47,38z M44,30c0-1.7,1.3-3,3-3h2 c1.7,0,3,1.3,3,3v3c0,1.7-1.3,3-3,3h-2c-1.7,0-3-1.3-3-3V30z" />{" "}
                    <rect x="41" y="49" width="2" height="11" />{" "}
                    <rect x="53" y="49" width="2" height="11" />{" "}
                    <path d="M59,14h-3v-3c0-0.6-0.4-1-1-1H34v2h20v2h-3H23c-0.2,0-0.4,0.1-0.5,0.1l-7.9,3C14.3,17.2,14,17.6,14,18s0.3,0.8,0.6,0.9 l7.9,3c0.1,0,0.2,0.1,0.3,0.1s0.2,0,0.2,0h28h8c0.6,0,1-0.4,1-1v-6C60,14.4,59.6,14,59,14z M22,16.5v3.1L17.8,18L22,16.5z M24,16 h26v4H24V16z M58,20h-6v-4h6V20z" />{" "}
                    <rect x="6" y="28" width="10" height="2" />{" "}
                    <rect x="6" y="32" width="10" height="2" />{" "}
                    <rect x="6" y="36" width="10" height="2" />{" "}
                    <rect x="6" y="40" width="10" height="2" />{" "}
                    <rect x="20" y="28" width="10" height="2" />{" "}
                    <rect x="20" y="32" width="10" height="2" />{" "}
                    <rect x="34" y="28" width="5" height="2" />{" "}
                    <rect x="34" y="32" width="5" height="2" />{" "}
                    <rect x="20" y="36" width="10" height="2" />{" "}
                    <rect x="20" y="40" width="10" height="2" />{" "}
                    <rect x="6" y="45" width="2" height="2" />{" "}
                    <rect x="10" y="45" width="2" height="2" />{" "}
                    <rect x="14" y="45" width="2" height="2" />{" "}
                    <rect x="20" y="45" width="2" height="2" />{" "}
                    <rect x="24" y="45" width="2" height="2" />{" "}
                    <rect x="28" y="45" width="2" height="2" />{" "}
                    <rect x="6" y="49" width="2" height="2" />{" "}
                    <rect x="10" y="49" width="2" height="2" />{" "}
                    <rect x="14" y="49" width="2" height="2" />{" "}
                    <rect x="20" y="49" width="2" height="2" />{" "}
                    <rect x="24" y="49" width="2" height="2" />{" "}
                    <rect x="28" y="49" width="2" height="2" />{" "}
                    <rect x="6" y="53" width="2" height="2" />{" "}
                    <rect x="10" y="53" width="2" height="2" />{" "}
                    <rect x="14" y="53" width="2" height="2" />{" "}
                    <rect x="20" y="53" width="2" height="2" />{" "}
                    <rect x="24" y="53" width="2" height="2" />{" "}
                    <rect x="28" y="53" width="2" height="2" />{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </PopupButton>
        </FooterItem>
      </FooterBody>
      {isOpen && (
        <Popup
          content={
            <>
              <H4>Stáhnout portfólio:</H4>
              <ButtonsContainer>
                <Button
                  name="download czech cv button"
                  href={myCvPdf}
                  onClick={() => {
                    setCvDownloaded(true);
                  }}
                  download="Stuchlikova_CV.pdf"
                >
                  {cvDownloaded ? "CV staženo!" : "České"}
                </Button>
                <Button
                  name="download english cv button"
                  href={myCvEngPdf}
                  onClick={() => {
                    setCvEngDownloaded(true);
                  }}
                  download="Stuchlikova_EN_CV.pdf"
                >
                  {cvEngDownloaded ? "CV download!" : "English"}
                </Button>
              </ButtonsContainer>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </FooterContainer>
  );
}
