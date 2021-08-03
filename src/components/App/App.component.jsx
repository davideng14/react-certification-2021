import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import LayoutWithHeader from '../LayoutWithHeader';
import { random } from '../../utils/fns';
import 'antd/dist/antd.css';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

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
          <Private exact path="/secret">
            <LayoutWithHeader>
              <SecretPage />
            </LayoutWithHeader>
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Fortune />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
