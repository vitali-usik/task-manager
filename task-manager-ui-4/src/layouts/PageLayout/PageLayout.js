import React from 'react'
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Navigation from '../../components/navigation';

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <header/>
    <Navigation />
    {/*<h1>React Redux Starter Kit</h1>*/}
    {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>*/}
    {/*{' · '}*/}
    {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>*/}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
