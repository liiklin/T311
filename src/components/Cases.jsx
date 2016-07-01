import React, { Component, PropTypes } from 'react';
import Cases from './Cases/Cases';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Cases location={location} />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
