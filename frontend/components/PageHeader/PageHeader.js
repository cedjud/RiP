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
      className="container mx-auto px-4 h-16 sm:h-20 flex-none flex items-center justify-between border-b"
      role="banner"
    >
      {/* <div className="flex items-center justify-between"> */}
        <Logo /> 
        {/* <Search /> */}
        <SiteNavigation />
      {/* </div> */}
    </header>
  )
}

export default PageHeader;