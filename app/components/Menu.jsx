"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import logo from "../../public/assets/logo.jpeg";

import "../../styles/menu.css";

export const Menu = ({ links }) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <div>
      <nav className={`nav`}>
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          className="header__image"
        />
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {links.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.label}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
