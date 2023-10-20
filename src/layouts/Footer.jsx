import './footer.css';

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='container footer'>
      <a href='https://www.facebook.com/davide.grassitelli1/' target='_blank'>
        <FaFacebookSquare />
      </a>
      <a href='https://www.instagram.com/da_grass/' target='_blank'>
        <FaInstagramSquare />
      </a>
      <a href='https://github.com/d4gr4ss'>
        <FaGithubSquare />
      </a>
    </footer>
  );
}
