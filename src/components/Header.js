import { Link } from "gatsby";
import React, { useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import styled from "styled-components";
import Helmet from "react-helmet";
import palette from "../lib/colors";
import {FontImport, fonts} from "../lib/fonts";

const Title = styled.h1`
color: white;
font-family: ${fonts.headings};
`
const Byline = styled.p`
`

const MainHeader = styled.header`
    background: ${palette.header};
    padding: 15px 40px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;



export const Header = ({ siteTitle, siteDescription }) => (
  <MainHeader>
    <Helmet>
      <FontImport/>
    </Helmet>
    <Link to="/">
      <Title>{siteTitle}</Title>
      <Byline>{siteDescription}</Byline>
    </Link>
    <Nav></Nav>
   <Menu></Menu>
  </MainHeader>
);
