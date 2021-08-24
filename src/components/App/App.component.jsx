import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import LayoutWithHeader from '../LayoutWithHeader';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <LayoutWithHeader>
              <HomePage />
            </LayoutWithHeader>
          </Route>
          <Route exact path="/login">
            <Layout>
              <LoginPage />
            </Layout>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
