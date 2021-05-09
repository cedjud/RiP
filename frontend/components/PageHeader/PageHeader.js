import React from 'react';

import Logo from '../Logo/Logo';
import SiteNavigation from '../SiteNavigation/SiteNavigation';
import Search from '../Search/Search';

function PageHeader() {
  return (
    <header role="banner">
      <Logo /> 
      <SiteNavigation />
      <Search />
    </header>
  )
}

export default PageHeader;