import React from "react";
import { Logo } from "../../assets/svgs";
import { NAVBAR_LINKS } from "./data";

function Navbar() {
  return (
    <div className="flex justify-between">
      {/* Logo */}
      <div className="">
        <img src={Logo} alt="" />
      </div>
      {/* List */}
      <div>
        <ul className="flex gap-5">
          {NAVBAR_LINKS.map((element) => (
            <li key={element.id}>{element.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
