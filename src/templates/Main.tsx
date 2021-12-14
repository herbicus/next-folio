import { ReactNode } from 'react';

// import Link from 'next/link';
// import { Navigation } from './Navigation';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased leading-tight w-full text-primary-500">
    {props.meta}

    <Navigation />

    <main className="content">{props.children}</main>

    <Footer />
  </div>
);

export { Main };
