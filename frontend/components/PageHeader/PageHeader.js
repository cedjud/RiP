import React from 'react';

import Logo from '../Logo/Logo';
import SiteNavigation from '../SiteNavigation/SiteNavigation';
import Search from '../Search/Search';

import { 
  wrapper,
  container
} from './PageHeader.module.css';

function PageHeader() {
  return (
    <header 
      className={wrapper}
      role="banner"
    >
      <div className={container}>
        <Logo /> 
        {/* <Search /> */}
        <SiteNavigation />
      </div>
    </header>
  )
}

export default PageHeader;