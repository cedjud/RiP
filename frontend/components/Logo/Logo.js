import Link from "next/link";

import {container, textB} from "./Logo.module.css";

function Logo() {
  return (
    <Link href="/">
      <a className={container}>
        <span className={textB}>Rettigherter</span>
        <br />
        <span>i Psykiatrien</span>
      </a>
    </Link>
  );
}

export default Logo;
