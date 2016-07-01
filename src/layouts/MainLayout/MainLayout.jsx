import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.content}>
        <div className={styles.side}>
          <Link to="/categories">分类列表</Link><br />
          <Link to="/questions">问题列表</Link><br />
          <Link to="/cases">案例列表</Link><br />
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
