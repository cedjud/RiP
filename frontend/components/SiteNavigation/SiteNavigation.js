import React, { useState } from "react";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import classNames from 'classnames';

import { container, navigation, navigationVisible } from './SiteNavigation.module.css';

function SiteNavigation() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={container}>
      <button
        aria-label="meny"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? <CgClose /> : <CgMenuRight />}
      </button>

      <nav className={`${navigation} ${visible ? navigationVisible : ''}`}>
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

          <li>
            <Link href="/">
              <a>Om</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SiteNavigation;
