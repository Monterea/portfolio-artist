import { useState } from "react";
import { FullName } from "../../assets/text/infoText";
//import { NavLink } from "react-router-dom";
import {
  Navi,
  MenuList,
  MenuItem,
  MenuLink,
  BrandName,
  BrandNameH2,
} from "./navbarStyles";

export default function DesktopNav() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Domů",
      name: "desktop nav home",
    },
    {
      id: 2,
      path: "/skills",
      text: "O\u00a0mě",
      name: "desktop nav info",
    },
    {
      id: 3,
      path: "/works",
      text: "Projekty",
      name: "desktop nav projects",
    },
  ];
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <Navi name="desktop navbar">
        <div
          name="desktop navbar body"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            maxWidth: "1700px",
          }}
        >
          <BrandName name="desktop navbar brand">
            <BrandNameH2 className="cursive">{FullName}</BrandNameH2>
          </BrandName>
          <MenuList>
            {links.map((link) => {
              return (
                <MenuItem key={link.id}>
                  <MenuLink
                    to={link.path}
                    name={link.name}
                    className={
                      activePage === link.id ? "selected-page" : link.id
                    }
                    onClick={() => setActivePage(link.id)}
                  >
                    {link.text}
                  </MenuLink>
                </MenuItem>
              );
            })}
          </MenuList>
        </div>
      </Navi>
    </>
  );
}
