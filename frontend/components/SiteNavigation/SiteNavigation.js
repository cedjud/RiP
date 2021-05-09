import React from 'react';
import Link from 'next/link';

function SiteNavigation() {
  return (
    <div>
      <span>meny</span>
      <nav>
        <ul>
          <li>
            <Link href="/kategorier">
              <a>kategorier</a>
            </Link>
          </li>

          <li>
            <Link href="/artikler">
              <a>artikler</a>
            </Link>
          </li>
        </ul> 
      </nav>
    </div>
  )
}

export default SiteNavigation;