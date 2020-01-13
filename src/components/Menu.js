import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children }) => {
  const [isOpened, setToggle] = useState(false);
  const toggle = () => setToggle(!isOpened);
  // Button
  const BUTTON = styled.button`
    z-index: 30;
    top: -5px;
    left: -5px;
    position: relative;
    background: transparent;
    border: none;
    :hover:not(.touch),
    :focus {
      background: transparent;
      border: none;
      outline: none;
    }
    @media (min-width: 700px) {
        display: none;
    }
  `;
  // Menu Button
  const MENU_BUTTON = styled.div`
    width: 24px;
    height: 2px;
    background: red;
    position: absolute;
    left: 0;
    ${isOpened ? "background: transparent" : `background: red`};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
    ::before {
      content: "";
      top: -8px;
      width: 24px;
      height: 2px;
      background: red;
      position: absolute;
      left: 0;
      ${isOpened
        ? "transform: rotate(45deg); top: 0; "
        : "transform: rotate(0)"};
      transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
    }
    ::after {
      top: 8px;
      content: "";
      width: 24px;
      height: 2px;
      background: red;
      position: absolute;
      left: 0;
      ${isOpened
        ? "transform: rotate(-45deg); top: 0;"
        : "transform: rotate(0)"};
      transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
    }
  `;
  // Navigation
  const NAVIGATION = styled.nav`
  width: 100%;
            justify-content: space-between;
            align-items: center;
            z-index: 30;
    ${isOpened ? "display:none" : "display:flex"}
  `;
  // Menu item
  const MENU_ITEM = styled.li`font-size: 16px;
  line-height: 1.25;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    margin-left: 16px;
    margin-right: 16px;
  }
  `;
  // Menu Wrapper
  const MENU_WRAPPER = styled.div`
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: blue;
    
  `;
  // NAV_CONTAINER
  const NAV_CONTAINER = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    a {
      color: white;
      font-size: 22px;
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      :hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    .active {
      background: rgba(0, 0, 0, 0.2);
    }
  `;
  return (
    <BUTTON
      onClick={toggle}
      aria-label={`${isOpened ? "close menu" : "open menu"}`}
    >
      {children}
      <MENU_BUTTON></MENU_BUTTON>
      Menu
      {isOpened && (
        <MENU_WRAPPER>
          <NAV_CONTAINER><NAVIGATION>
              <MENU_ITEM><a href="#">First Menu Item</a></MENU_ITEM>
              </NAVIGATION></NAV_CONTAINER>
        </MENU_WRAPPER>
      )}
    </BUTTON>
  );
};

const Menu = () => {
    return (
        <Toggle></Toggle>
    )
}

export default Menu
