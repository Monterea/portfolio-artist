import {
  MobMenuList,
  MobMenuItem,
  MobMenuLink,
  MobNavi,
  Hamburger,
  BrandName,
  BrandNameH2,
} from "./navbarStyles";

import React, { useState } from "react";
import { FullName } from "../../assets/text/infoText";

export default function MobileNav() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Domů",
      name: "mobile nav home",
    },
    {
      id: 2,
      path: "/skills",
      text: "O\u00a0mě",
      name: "mobile nav info",
    },
    {
      id: 3,
      path: "/works",
      text: "Projekty",
      name: "mobile nav projects",
    },
  ];
  const [isNavActive, setIsNavActive] = useState(false);
  const [navbarColor, setNavbarColor] = useState(true);

  /* const changeNavbarColor = () => {
    if (window.scrollY <= 70 && isNavActive === false) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
 */
  const activeNavbarColor = (isNavActive) => {
    if (isNavActive === true) {
      let thisNavbarColor = true;
      setNavbarColor(thisNavbarColor);
    } else if (isNavActive === false) {
      let thisNavbarColor = false;
      setNavbarColor(thisNavbarColor);
    }
  };
  const handleClick = () => {
    hangleNavbarChange();
    handleScroll();
  };
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  const hangleNavbarChange = () => {
    setIsNavActive(!isNavActive);
    activeNavbarColor(isNavActive);
  };

  return (
    <>
      <MobNavi name="mobile navbar" backgroundStyle={navbarColor}>
        <BrandName name="mobile navbar brand">
          <BrandNameH2>{FullName}</BrandNameH2>
        </BrandName>
        {isNavActive && (
          <MobMenuList>
            {links.map((link) => {
              return (
                <MobMenuItem key={link.id}>
                  <MobMenuLink
                    name={link.name}
                    to={link.path}
                    onClick={handleClick}
                  >
                    {link.text}
                  </MobMenuLink>
                </MobMenuItem>
              );
            })}
          </MobMenuList>
        )}
        <Hamburger onClick={hangleNavbarChange} />
      </MobNavi>
    </>
  );
}
