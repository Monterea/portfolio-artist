import {
  MobMenuList,
  MobMenuItem,
  MobMenuLink,
  MobNavi,
  Hamburger,
} from "./navbarStyles";

import React, { useState } from "react";

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
      path: "/arts",
      text: "Malby",
      name: "mobile nav info",
    },
    {
      id:3,
      path: "/graphics",
      text: "Grafika",
      name: "mobile nav info",
    },
  ];
  const [isNavActive, setIsNavActive] = useState(false);
  const [navbarColor, setNavbarColor] = useState(true);

 
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
