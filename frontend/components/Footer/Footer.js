import { wrapper, container } from './Footer.module.css';

function Footer() {
  return (
    <footer className={`bg-red-900 mt-8`}>
      <div className={`container mx-auto px-4 h-16 sm:h-20 flex-none flex items-center justify-end text-white`}>
        <p>footer info</p>
      </div>
    </footer>
  )
}

export default Footer;