import React from "react";
import { useState } from "react";
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
  H4,
} from "./footerStyles";


export default function Footer() {
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
          
        </FooterItem>
      </FooterBody>
      
    </FooterContainer>
  );

}