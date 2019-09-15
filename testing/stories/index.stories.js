import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

// Styled Groove
import applyGroove from "/src";


storiesOf("Style Prop Tests", module)
  .add("Box Test", () => {

    const Box = styled.div`
      ${(props) => applyGroove(props)}
    `;

    return (
      <Box height="100px" width="100px" backgroundColor="blue" border="1px solid black" marginRight="auto" marginLeft="auto" />
    );
  });


storiesOf("Responsive Tests", module)
 .add("Responsive Color Test", () => {

    const BoxWithResponsiveColors = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props)}
    `;

    return (
      <>
        <BoxWithResponsiveColors _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }} />
      </>
    );
 });

 
storiesOf("Custom Config Test", module)
  .add("Ignore media mixins", () => {

    const Box = styled.div`
      ${(props) => applyGroove(props, { ignoreMediaMixins: true })}
    `;

    return (
      <Box _xs={{ display: "none" }} _sm={{ display: "none" }} height="100px" width="100px" backgroundColor="blue" border="1px solid black" marginRight="auto" marginLeft="auto" />
    );

  })
  .add("Responsive Strategy Default Range Equality", () => {

    const BoxWithUpMediaStrategy = styled.div`
      width: 200px;
      height: 200px;
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
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;
      margin-top: 50px;

      ${(props) => applyGroove(props, { mediaStrategy: "down" })}
    `;

    return (
      <>
        <BoxWithUpMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>UP MEDIA STRATEGY</BoxWithUpMediaStrategy>
        <BoxWithDownMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>DOWN MEDIA STRATEGY</BoxWithDownMediaStrategy>
      </>
    );
 })
  .add("Custom Media Width Test (Up Media Strategy)", () => {

    const BoxWithUpMediaStrategy = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props, { mediaSizes: { xs: 550, sm: 551 } })}
    `;

    return (
      <BoxWithUpMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>XS -> 550px</BoxWithUpMediaStrategy>
    );
  })
  .add("Custom Media Width Test (Down Media Strategy)", () => {

    const BoxWithDownMediaStrategy = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props, { mediaStrategy: "down", mediaSizes: { xl: 1000, lg: 999 } })}
    `;

    return (
      <BoxWithDownMediaStrategy _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>XL -> 1000px</BoxWithDownMediaStrategy>
    );
  })
  .add("Invalid Custom Media With Test **Should See Console Warning**)", () => {

    const BoxWithInvalidCustomMediaSizes = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props, { mediaSizes: { lg: 1000, md: 1050 } })}
    `;

    // Default mediaSizes will be applied, (see warning in console)

    return (
      <BoxWithInvalidCustomMediaSizes _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>See Console Warning</BoxWithInvalidCustomMediaSizes>
    );

  })
  .add("Invalid Custom Media With Test (Up Media Strategy, **should see warning**)", () => {

    const BoxWithInvalidCustomMediaSizes = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props, { mediaSizes: { sm: 551, xs: 549} })}
    `;

    // Default mediaSizes will be applied, (see warning in console)

    return (
      <BoxWithInvalidCustomMediaSizes _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>See Console Warning</BoxWithInvalidCustomMediaSizes>
    );

  })
  .add("Invalid Custom Media With Test (Down Media Strategy, **should see warning**)", () => {

    const BoxWithInvalidCustomMediaSizes = styled.div`
      width: 200px;
      height: 200px;
      margin: auto;
      text-align: center;
      color: white;
      padding-top: 64px;
      border: 1px solid black;

      ${(props) => applyGroove(props, { mediaStrategy: "down", mediaSizes: { xl: 1201, lg: 1999} })}
    `;

    // Default mediaSizes will be applied, (see warning in console)

    return (
      <BoxWithInvalidCustomMediaSizes _xs={{ backgroundColor: "red" }} _sm={{ backgroundColor: "orange" }} _md={{ backgroundColor: "yellow" }} _lg={{ backgroundColor: "green" }} _xl={{ backgroundColor: "blue" }}>See Console Warning</BoxWithInvalidCustomMediaSizes>
    );

  });

