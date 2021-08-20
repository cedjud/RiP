import Link from "next/link";

import {container, textB} from "./Logo.module.css";

function Logo() {
  return (
    <Link href="/">
      <a className={`group flex items-center`}>
        <svg viewBox="0 0 64 64" className={`w-10 h-10`} xmlns="http://www.w3.org/2000/svg">
          <circle className={`fill-red-900 hover:fill-red-800`} cx="32" cy="32" r="32"/>
        </svg>
        <span className={`ml-3`}>
          <span className={``}>Rettigheter</span>
          <br />
          <span className={`italic`}>i Psykiatrien</span>
        </span>
      </a>

    </Link>
  );
}

export default Logo;
