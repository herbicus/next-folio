import Link from 'next/link';

// import { AppConfig } from '../utils/AppConfig';

// type IMainProps = {
//   meta: ReactNode;
//   children: ReactNode;
// };

const Navigation = () => (
  <div className="max-w-screen-xl mx-auto">
    <ul className="flex flex-wrap text-xl">
      <li className="mr-6">
        <Link href="/">
          <a className="text-gray-700 border-none hover:text-gray-900">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about/">
          <a className="text-gray-700 border-none hover:text-gray-900">About</a>
        </Link>
      </li>
      <li className="mr-6">
        <a
          className="text-gray-700 border-none hover:text-gray-900"
          href="https://github.com/ixartz/Next-js-Boilerplate"
        >
          GitHub
        </a>
      </li>
    </ul>
  </div>
);

export { Navigation };
