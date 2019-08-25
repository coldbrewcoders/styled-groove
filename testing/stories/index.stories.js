import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

// Styled Groove
import applyGroove from "../../src/index";



storiesOf("Basic Style Prop Tests", module)
  .add("Test", () => {

    const Box = styled.div`
      ${(props) => applyGroove(props)}
    `;

    return (
      <Box height="100px" width="100px" backgroundColor="blue" border="1px solid black" marginRight="auto" marginLeft="auto" />
    );
  });

storiesOf("Responsive Tests", module)
 .add("Responsive Strategy Range Equality", () => {

    const BoxWithUpMediaStrategy = styled.div`
      width: 200px;
      height: 200px;
      maxHeight: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props)}
    `;

    const BoxWithDownMediaStrategy = styled.div`
      width: 200px;
      height: 200px;
      maxHeight: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;
      margin-top: 50px;

      ${(props) => applyGroove(props, true)}
    `;

    return (
      <>
        <BoxWithUpMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>UP MEDIA STRATEGY</BoxWithUpMediaStrategy>
        <BoxWithDownMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>DOWN MEDIA STRATEGY</BoxWithDownMediaStrategy>
      </>
    );
 });

