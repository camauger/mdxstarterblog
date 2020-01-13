import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import "../../node_modules/normalize.css/normalize.css"
const Main = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />

      <Main>{children}</Main>
    </>
  );
};
