import React from 'react';
import './LayoutWithHeader.styles.css';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
