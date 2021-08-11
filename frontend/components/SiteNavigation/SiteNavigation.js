import React, { useState } from "react";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import classNames from 'classnames';

import { container, navigation, navigationVisible, listItem } from './SiteNavigation.module.css';

function SiteNavigation() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={container}>
      <button
        className={`text-3xl text-red-900 hover:text-red-800`}
        aria-label="meny"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? <CgClose /> : <CgMenuRight />}
      </button>

      <nav className={`absolute ${visible ? '': 'hidden'} top-16 sm:top-20 right-0 w-screen h-screen bg-white ${navigation}`}>
        <ul className={`container mx-auto py-8 px-4`}>
          <li>
            <Link href="/artikler">
              <a className={listItem}>Alle artikler</a>
            </Link>
          </li>

          <li>
            <Link href="/kategorier">
              <a className={listItem}>Alle kategorier</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className={listItem}>Om</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className={listItem}>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SiteNavigation;
