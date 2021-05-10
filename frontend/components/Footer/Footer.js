import { wrapper, container } from './Footer.module.css';

function Footer() {
  return (
    <footer className={wrapper}>
      <div className={container}>
        <p>footer info</p>
      </div>
    </footer>
  )
}

export default Footer;