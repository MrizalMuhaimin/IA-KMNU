import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './utils';

// Pages
import LandingPage from './pages/LandingPage';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ProgramList from './pages/ProgramList';
import ProgramDetail from './pages/ProgramDetail';
import AboutUs from './pages/AboutUs';

import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={routes.landingPage}
          element={<Layout>
            <LandingPage />
          </Layout>}
        />
        
        <Route
          exact
          path={routes.articleList}
          element={<ArticleList />}
        />
        <Route
          exact
          path={routes.articleDetail}
          element={<ArticleDetail />}
        />
        <Route
          exact
          path={routes.programList}
          element={<ProgramList />}
        />
        <Route
          exact
          path={routes.programDetail}
          element={<ProgramDetail />}
        />
        <Route
          exact
          path={routes.aboutUs}
          element={<AboutUs />}
        />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
