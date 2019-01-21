# styled-groove 💃🕺

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/coldbrewcoders)
[![NPM version](https://img.shields.io/npm/v/styled-groovy.svg?style=flat-square)](https://npmjs.org/package/styled-groovy)
[![Build Status](https://img.shields.io/travis/diegohaz/styled-theme/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/styled-theme) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/styled-theme/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/styled-theme/branch/master)

A library that provides dynamic, component-level, styling via React props. The intent is to build atop styled-components 💅🏻 and make styling a component easier and more robust.

## Install
It only takes a single command to install styled-groove and get you grooving.

    $ npm install --save styled-groove
    or
    $ yarn add styled-groove

## Implementation without Theme

```js
import styled from "styled-components";
import applyGroove from "styled-groove";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;

  ${(props) => applyGroove(props)}
`;
```

## Implementation with Theme
https://www.styled-components.com/docs/advanced#theming
```jsx
import { ThemeProvider } from "styled-components";
import applyGroove from "styled-groove";

// Define what props.theme will look like
const theme = {
  applyGroove
};

...

render(
  <div>
    <ThemeProvider theme={theme}>
      <Title>Themed</Title>
    </ThemeProvider>
  </div>
);
```

```js
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;

  ${(props) => props.theme.applyGroove(props)}
`;
```


## How It Works
`styled-groove` in its simplest form is an object that contains CSS properties for use in components.

The applyGroove() function loops through the Component props and maps them to the applicable styles so you don't have to.

The intent is to remove the repitition of adding styles to component declarations and make applying styles dynamic based on the UI/UX needs.

# Examples 
## Before & After
By allowing styles to be applied in-line to the Components, there becomes less of a need to define new components 
### Before
```jsx
const PrimaryButton1 = styled(PrimaryButton)`
  margin-right: 4px;
  ...
`;
const PrimaryButton2 = styled(PrimaryButton)`
  margin-left: 4px;
  ...
`;
<PrimaryButton1>Button 1</PrimaryButton1>
<PrimaryButton2>Button 2</PrimaryButton2>
```
### After
```jsx
<PrimaryButton1 marginRight="4px">Button 1</PrimaryButton1>
<PrimaryButton2 marginLeft="4px">Button 2</PrimaryButton2>
```



### Display

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| display       | (value) => css``display: ${value};``         |
| position      | (value) => css``position: ${value};``        |
| float         | (value) => css``float: ${value};``           |
| overflow      | (value) => css``overflow: ${value};``        |
| overflowX     | (value) => css``overflow-x: ${value};``      |
| overflowY     | (value) => css``overflow-y: ${value};``      |

### Sizing

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| width         | (value) => css`width: ${value};`             |
| minHeight     | (value) => css`min-height: ${value};`        | 
| height        | (value) => css`height: ${value};`            |
| minWidth      | (value) => css`min-width: ${value};`         |
| maxHeight     | (value) => css`max-height: ${value};`        |
| maxWidth      | (value) => css`max-width: ${value};`         |

### Margin/Padding

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| margin        | (value) => css`margin: ${value};`            |
| marginTop     | (value) => css`margin-top: ${value};`        |
| marginBottom  | (value) => css`margin-bottom: ${value};`     | 
| marginLeft    | (value) => css`margin-left: ${value};`       |
| marginRight   | (value) => css`margin-right: ${value};`      |
| padding       | (value) => css`padding: ${value};`           |
| paddingTop    | (value) => css`padding-top: ${value};`       |
| paddingBottom | (value) => css`padding-bottom: ${value};`    |  
| paddingLeft   | (value) => css`padding-left: ${value};`      | 

### Positioning

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| top           | (value) => css`top: ${value};`               |
| bottom        | (value) => css`bottom: ${value};`            |
| left          | (value) => css`left: ${value};`              |
| right         | (value) => css`right: ${value};`             |

### Typography

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| color         | (value) => css`color: ${value};`             |
| fontSize      | (value) => css`font-size: ${value};`         |
| fontWeight    | (value) => css`font-weight: ${value};`       |
| textAlign     | (value) => css`text-align: ${value};`        |
| textDecoration| (value) => css`text-decoration: ${value};`   |
| hoverColor    | (value) => css`&&{&:hover{color: ${value};}}`|
| lineHeight    | (value) => css`line-height: ${value};`       |
| letterSpacing | (value) => css`letter-spacing: ${value};`    |

#### Typography extra

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| light         | () => css`font-weight: 300;`                 |
| bold          | () => css`font-weight: bold;`                |
| underline     | () => css`text-decoration: underline;`       |
| normal        | () => css`font-weight: normal;`              |
| ellipsis      | () => css`text-overflow: ellipsis;`          |

### Border

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| border        | (value) => css`border: ${value};`            |
| borderTop     | (value) => css`border-top: ${value};`        |
| borderBottom  | (value) => css`border-bottom: ${value};`     |
| borderRight   | (value) => css`border-right: ${value};`      |
| borderLeft    | (value) => css`border-left: ${value};`       |
| borderColor   | (value) => css`border-color: ${value};`      |
| borderRadius  | (value) => css`border-radius: ${value};`     |

### Background

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| background         | (value) => css`background: ${value};`           |
| backgroundPosition | (value) => css`background-position: ${value};`  |
| backgroundSize     | (value) => css`background-size: ${value};`      |
| backgroundImage    | (value) => css`background-image: url(${value});`|
| backgroundColor    | (value) => css`background-color: ${value};`     |
| backgroundCover    | () => css`background-size: cover;`              |


### Misc and custom Props

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| cursor        | (value) => css`cursor: ${value};`            |
| hide          | () => css`display: none !important;`         |
| whiteSpace    | (value) => css`white-space: ${value};`       |
| zIndex        | (value) => css`z-index: ${value};`           |
| isTall        | () => css`height: 100%;`                     |
| isWide        | () => css`width: 100%;`                      |
| marginX       | (value) => css`                              |
|               | margin-left: ${value};                       |
|               | margin-right: ${value};                      |
| marginY       | (value) => css`                              |
|               | margin-top: ${value};                        |
|               | margin-bottom: ${value}; `                   |
| paddingX         | (value) => css`                           |
|                  | padding-left: ${value};                   |
|                  | padding-right: ${value}; `                |
| paddingY         | (value) => css`                           |
|                  | padding-top: ${value};                    |
|                  | padding-bottom: ${value}; `               |
| fill             | () => css` position: absolute;            |
|                  | top: 0; bottom: 0; left: 0; right: 0;`    |  
| noWrap           | () => css`                                |
|                  | white-space: nowrap;                      |
|                  | overflow: hidden;                         |
|                  | text-overflow: ellipsis;`                 |

## Flexbox Props

| Prop (key)    | Template Literal CSS Fn (value)              |
| --------------|:---------------------------------------------:
| isFlex        | () => css`                                   |
|               | display: flex;                               |
|               | flex-wrap: wrap;`                            |
| direction     | (value) => css`flex-direction: ${value};`    |
| wrap          | (value) => css`flex-wrap: ${value};`         |
| justifyContent| (value) => css`justify-content: ${value};`   |
| spaced        | () => css`justify-content: space-between;`   |
| around        | () => css`justify-content: space-around;`    |
| alignItems    | (value) => css`align-items: ${value};`       |
| alignContent  | (value) => css`align-content: ${value};`     |
| order         | (value) => css`order: ${value};`             |
| grow          | (value) => css`flex-grow: ${value};`         |
| shrink        | (value) => css`flex-shrink: ${value};`       |
| basis         | (value) => css`flex-basis: ${value};`        |
| alignSelf     | (value) => css`align-self: ${value};`        |
| centered      | () => css`                                   |
|               | align-content: center;                       |
|               | align-items: center;                         |
|               | justify-content: center; `                   |
| hCentered     | () => css`justify-content: center;`          |
| vCentered     | () => css`align-items: center;`              |

## Responsive Props



## Responsive Groove
## Common Uses

Example 1:

```jsx
import styled from "styled-components";
import applyGroove from "styled-groove";


const color1 = "#DA78F4";
const color2 = "#252025";

const Text = styled.p`
  font-size: 20px;
  margin: 0;
  font-family: 'Arial, sans-serif';
  ${props => applyGroove(props)}
`;

const Div = styled.div`
  ${props => applyGroove(props)}
`;

...

<Div width="300px">
  <Div backgroundColor={color2}>
    <Text color={color1}>Start</Text>
  </Div>
  <Div textAlign="center" backgroundColor={color1}>
    <Text color={color2}>Groovin'</Text>
  </Div>
  <Div textAlign="right" backgroundColor={color2}>
    <Text color={color1}>Now!</Text>
  </Div>
</Div>
```

![Example 1](./assets/common-example-1.png)



Example 2: 

```jsx
import styled from "styled-components";
import applyGroove from "styled-groove";

const Container = styled.div`
  background-color: #DA78F4;
  width: 500px;
`;

const PyramidBlock = styled.div`
  background-color: #252025;
  height: 50px;
  margin: auto;
  ${props => applyGroove(props)}
`;

...

<Container width="300px">
  <PyramidBlock width="25%" />
  <PyramidBlock width="40%" />
  <PyramidBlock width="55%" />
  <PyramidBlock width="70%" />
  <PyramidBlock width="85%" />
  <PyramidBlock width="100%" />
</Container>
```
![Example 2](./assets/common-example-2.png)


## Flexbox
### Basic Flexbox
A basic `display: flex` Flexbox in a container.

![](assets/BasicFlexbox.png)
#### How its achieved: 

```jsx
import applyGroove from "styled-groove";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eee;
  padding: 30px;
  color: #fff;
  font-size: 30px;
`;

const Flexbox = styled.div`
  background-color: #c95eeb;
  width: 200px;
  height: 200px;
`;

function App() {
  return (
    <Container backgroundColor="#eee">
      <Flexbox isFlex>Groovy</Flexbox>
    </Container>
  );
}
```

### Horizontally Centered Flexbox
Adding horizontal alignment is as simple as passing one `hCentered` prop. It will take care of `justify-content` being "center".

![](assets/HorizontalCenterFlexbox.png)

#### How its achieved: 

```jsx
return (
  <Container fontSize="30px" backgroundColor="#eee">
    <Flexbox isFlex hCentered>
      Groovy
    </Flexbox>
  </Container>
);
```

### Vertically Centered Flexbox
Adding horizontal alignment is as simple as passing one `hCentered` prop. It will take care of `align-items` being "center".

![](assets/VerticalCenterFlexbox.png

#### How its achieved: 

```jsx
return (
  <Container fontSize="30px" backgroundColor="#eee">
    <Flexbox isFlex vCentered>
      Groovy
    </Flexbox>
  </Container>
);
```

### Centered Flexbox
Adding horizontal alignment is as simple as passing one `hCentered` prop. It will take care of justify-content and `align-items` being "center".

![](assets/CenteredFlexbox.png)
#### How its achieved: 

```jsx
return (
  <Container fontSize="30px" backgroundColor="#eee">
    <Flexbox isFlex centered>
      Groovy
    </Flexbox>
  </Container>
);
```

## Common

## Responsive Groove












## Available styles to apply via props
### Display

| Prop (key)    | Template Literal CSS Fn (value)     |
| --------------|:------------------------------------:
| display       | (value) => css`display: ${value};`  |
|               | right-aligned                       |
| col 2 is      | centered                            |
| zebra stripes | are neat                            |
