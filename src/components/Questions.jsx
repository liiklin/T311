import React, { Component, PropTypes } from 'react';
import Questions from './Questions/Questions';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Questions location={location} />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
