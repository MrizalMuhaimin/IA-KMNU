import { createGlobalStyle } from 'styled-components';

import PoppinsFontThin from '../assets/fonts/Poppins/Poppins-Thin.ttf';
import PoppinsFontThinItalic from '../assets/fonts/Poppins/Poppins-ThinItalic.ttf';

import PoppinsFontExtraLight from '../assets/fonts/Poppins/Poppins-ExtraLight.ttf';
import PoppinsFontExtraLightItalic from '../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf';

import PoppinsFontLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import PoppinsFontLightItalic from '../assets/fonts/Poppins/Poppins-LightItalic.ttf';

import PoppinsFontReguler from '../assets/fonts/Poppins/Poppins-Regular.ttf';

import PoppinsFontMedium from '../assets/fonts/Poppins/Poppins-Medium.ttf';
import PoppinsFontMediumItalic from '../assets/fonts/Poppins/Poppins-MediumItalic.ttf';

import PoppinsFontSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsFontSemiBoldItalic from '../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf';

import PoppinsFontBold from '../assets/fonts/Poppins/Poppins-Bold.ttf';
import PoppinsFontBoldItalic from '../assets/fonts/Poppins/Poppins-BoldItalic.ttf';

import PoppinsFontExtraBold from '../assets/fonts/Poppins/Poppins-ExtraBold.ttf';
import PoppinsFontExtraBoldItalic from '../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf';

import PoppinsFontBlack from '../assets/fonts/Poppins/Poppins-Black.ttf';
import PoppinstFontBlackItalic from '../assets/fonts/Poppins/Poppins-BlackItalic.ttf';

const Body = createGlobalStyle`
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontThin}) format('truetype');
		font-style: normal;
		font-weight: 100;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontThinItalic}) format('truetype');
		font-style: italic;
		font-weight: 100;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontExtraLight}) format('truetype');
		font-style: normal;
		font-weight: 200;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontExtraLightItalic}) format('truetype');
		font-style: italic;
		font-weight: 200;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontLight}) format('truetype');
		font-style: normal;
		font-weight: 300;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontLightItalic}) format('truetype');
		font-style: italic;
		font-weight: 300;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontReguler}) format('truetype');
		font-style: normal;
		font-weight: 400;
	}
	
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontMedium}) format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontMediumItalic}) format('truetype');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontSemiBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontSemiBoldItalic}) format('truetype');
		font-weight: 600;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontBold}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontBoldItalic}) format('truetype');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontExtraBold}) format('truetype');
		font-weight: 800;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontExtraBoldItalic}) format('truetype');
		font-weight: 800;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinsFontBlack}) format('truetype');
		font-weight: 900;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins'), url(${PoppinstFontBlackItalic}) format('truetype');
		font-weight: 900;
		font-style: italic;
	}

	html {
		font-size: ${({ size }) => size || '10px'};
		position: relative;
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
	}
	
	
`;

export default Body;
