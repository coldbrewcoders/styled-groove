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
import applyGroove from "styled-groove";

// Define what props.theme will look like
const theme = {
  applyGroove: (props) => applyGroove(props)
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


## Flexbox

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
