import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  background-color: white;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  top: 0;
  min-width: 0;
`;

export const MainHeader = styled.div`
  height: ${({ showHeader }) =>
    showHeader ? 'calc(100vh - (64px + 2px))' : 'auto'};
  overflow-y: auto;
  min-height: ${({ showHeader }) => (showHeader ? 'auto' : '100vh')};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ showFooter }) =>
    showFooter
      ? 'calc(100vh - (64px + 64px + 16px + 16px + 3px))'
      : 'calc(100vh - (64px + 16px + 16px + 3px))'};
  padding: ${({ showFooter }) => (showFooter ? '16px 24px' : '16px')};
  @media (max-width: 768px) {
    padding: 16px;
  }
  > div {
    flex: 1;
  }
`;

export const MainContentFooter = styled.section`
  background-color: #f2f5f7;
  min-height: calc(100vh - (64px + 64px + 16px + 16px + 3px));
  padding: 16px 24px;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Main = styled.div`
  min-height: 100vh;
  overflow-y: auto;
`;
