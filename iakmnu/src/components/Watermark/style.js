import styled from 'styled-components';

export const SiteLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 9999;
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

export const SiteLayerCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
