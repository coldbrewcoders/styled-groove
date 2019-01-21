import { css } from "styled-components";

export default mediaDown = {
  xs: (...args) => css`
    @media (max-width: 575px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,  
}

export default mediaUp = {
  xs: (...args) => css`
    @media (max-width: 575px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,    
}