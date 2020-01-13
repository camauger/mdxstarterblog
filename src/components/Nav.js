import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import palette from "../lib/colors";
import {FontImport, fonts} from "../lib/fonts";

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: ${fonts.text};
`;

export default () => {
  return (
    <React.Fragment>
      <MenuItem to="/" activeClassName="active" aria-label="View blog page">
        First Menu Item
      </MenuItem>
      <MenuItem to="/" activeClassName="active" aria-label="View blog page">
        Second Menu Item
      </MenuItem>
      <MenuItem to="/" activeClassName="active" aria-label="View blog page">
        Third Menu Item
      </MenuItem>
      <MenuItem to="/" activeClassName="active" aria-label="View blog page">
        Fourth Menu Item
      </MenuItem>
      <MenuItem to="/" activeClassName="active" aria-label="View blog page">
        Fifth Menu Item
      </MenuItem>
    </React.Fragment>
  );
};
