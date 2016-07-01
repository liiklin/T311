import React, { Component, PropTypes } from 'react';
import Categories from './Categories/Categories';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Categories location={location} />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
