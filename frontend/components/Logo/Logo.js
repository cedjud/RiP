import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <a>
        <h1>Rettigherter i Psykiatrien</h1>
      </a>
    </Link>
  );
}

export default Logo;