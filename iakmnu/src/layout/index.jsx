import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper, MainHeader, MainContent } from './style';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Watermark from '../components/Watermark';
import Body from './body';

const isShowWatermark = () => {
  if (!navigator.userAgentData) {
    // this expected Mozilla
    return true;
  }
  const brands = navigator.userAgentData?.brands || [];
  const commonBrands = ['Chromium', 'Not?A_Brand']; // expected exist in Chrome, Edge, Prisma
  const filteredUserAgent = brands.filter(
    (v) => !commonBrands.includes(v.brand)
  );

  return Boolean(filteredUserAgent.length);
};

const Layout = (props) => {
  const { showSidebar, showHeader, showFooter, userId, children } = props;

  return (
    <>
      <Body />
      <Container>
        <Watermark isShow={isShowWatermark()} agentName={userId} />
        {showSidebar && <Sidebar id="sideBar" />}
        <Wrapper>
          {showHeader && <Header />}
          <MainHeader showHeader={showHeader}>
            <MainContent showFooter={showFooter}>{children}</MainContent>
            {showFooter && <Footer />}
          </MainHeader>
        </Wrapper>
      </Container></>
  );
};

Layout.defaultProps = {
  showSidebar: true,
  showHeader: true,
  showFooter: true,
  userId: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.bool,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  userId: PropTypes.string,
};

export default Layout;
