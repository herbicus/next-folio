import Link from 'next/link';
import { useRouter } from 'next/router';

import { contact as content } from '../data/contact';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="Contact" description="Herb Torres | Contact" />}>
      <link
        rel="preload"
        as="image"
        href={`${router.basePath}/assets/images/contact-bg.jpg`}
      />

      <div className="contact flex flex-col items-center md:items-start justify-center h-full px-4 md:px-8 pt-10 md:pt-18 relative overflow-hidden">
        <img
          className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] object-cover z-0"
          src={`${router.basePath}/assets/images/contact-bg.jpg`}
          alt={`${content.a11y}`}
          loading="lazy"
        />

        <div className="flex md:w-full max-w-screen-lg mx-auto relative z-10">
          <div className="contact-content text-white relative">
            <div className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0 bg-black w-[250px] md:w-[300px] h-[250px] md:h-[300px] opacity-50 md:opacity-40 rotate-45 pointer-events-none"></div>
            <h1 className="font-display font-black text-3xl md:text-4xl text-center mb-3 relative z-10">
              {content.title}
            </h1>

            <Link href={`mailto:${content.email_src}`}>
              <a className="block text-base tracking-wide font-medium text-center text-white hover:text-red-500 transition mb-2 relative z-10 hover:border-0">
                {content.email_label}
              </a>
            </Link>
            <Link href={`tel:${content.phone_src}`}>
              <a className="block text-base tracking-wide font-medium text-center text-white hover:text-red-500 transition mb-2 relative z-10 hover:border-0">
                {content.phone_label}
              </a>
            </Link>
            <p className="text-base tracking-wide font-medium text-center relative z-10">
              {content.city}
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
