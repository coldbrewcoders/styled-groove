import { css, keyframes } from "styled-components";


export const rotateKeyframes = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(359deg);
  }
`;

export const fadeInKeyframes = keyframes`
	0% {
		transform: scale(0);
		opacity: 0.0;
	}
	60% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

export const fadeIn = () => css`
  animation-name: ${fadeInKeyframes};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  visibility: visible;
`;

export const slideExpandUpKeyframes = keyframes`
	0% {
		transform: translateY(100%) scaleX(0.5);
	}
	30%{
		transform: translateY(-8%) scaleX(0.5);
	}
	40%{
		transform: translateY(2%) scaleX(0.5);
	}
	50%{
		transform: translateY(0%) scaleX(1.1);
	}
	60%{
		transform: translateY(0%) scaleX(0.9);
	}
	70% {
		transform: translateY(0%) scaleX(1.05);
	}
	80%{
		transform: translateY(0%) scaleX(0.95);
	}
	90% {
		transform: translateY(0%) scaleX(1.02);
	}
	100%{
		transform: translateY(0%) scaleX(1);
	}
`;

export const slideExpandUp = () => css`
	animation-name: ${slideExpandUpKeyframes};
	animation-duration: 1.6s;
	animation-timing-function: ease-out;
	visibility: visible;
`;

export const slideOpenKeyframes = keyframes`
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const slideOpen = () => css`
  animation: ${slideOpenKeyframes} .4s ease-in-out;
`;

export const fadeInNiceKeyframes = keyframes`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const fadeInNice = () => css`
  animation: ${fadeInNiceKeyframes} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;