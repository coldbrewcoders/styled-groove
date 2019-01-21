import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

// Themes
import colors from "./colors";
import text from "./text";
import mixinMapper, { findColor } from "./mixin";
import * as animations from "./animations";

// custom application theme
const theme = {
  findColor,
  colors,
  text,
  animations,
  mixin: (props) => mixinMapper(props)
};

class Theme extends Component {

  render(){
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }

}

export default Theme;