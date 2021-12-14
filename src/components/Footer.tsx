import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <footer className="border-t border-gray-300 mt-10 py-10 px-4 md:px-8 text-sm">
    <nav className="max-w-screen-xl mx-auto flex flex-wrap">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by
      <Link href="/about/">
        <a className="text-gray-700 border-none hover:text-gray-900">About</a>
      </Link>
    </nav>
  </footer>
);

export { Footer };
