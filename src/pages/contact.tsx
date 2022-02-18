import Link from 'next/link';
import { useRouter } from 'next/router';

import { contact as content } from '../data/contact';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={`${content.meta_title} - ${new Date().getFullYear()}`}
          description={content.meta_description}
          canonical={content.canonical}
        />
      }
    >
      <link
        rel="preload"
        as="image"
        href={`${router.basePath}/assets/images/${content.image.src}`}
      />

      <div className="flex overflow-hidden relative flex-col justify-center items-center px-4 pt-10 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 md:items-start md:px-8 contact md:pt-18">
        <img
          className="object-cover absolute top-2/4 left-1/2 z-0 w-[100%] h-[100%] translate-x-[-50%] translate-y-[-50%]"
          src={`${router.basePath}/assets/images/${content.image.src}`}
          alt={`${content.a11y}`}
          loading="eager"
        />

        <div className="flex relative z-10 mx-auto max-w-screen-xl md:pl-[3.9rem] md:w-full">
          <div className="relative text-white contact-content">
            <div className="z-0 w-[250px] h-[250px] bg-black opacity-50 rotate-45 pointer-events-none md:w-[300px] md:h-[300px] md:opacity-40"></div>

            <div className="flex absolute top-2/4 left-1/2 flex-col justify-center w-full h-full align-middle translate-x-[-50%] translate-y-[-50%]">
              <h1 className="relative z-10 mb-3 font-display text-3xl font-black text-center md:text-4xl">
                {content.title}
              </h1>

              <Link href={`mailto:${content.email_src}`}>
                <a className="block relative z-10 mb-2 text-base font-medium tracking-wide text-center text-white hover:text-red-500 hover:border-0 transition">
                  {content.email_label}
                </a>
              </Link>
              <Link href={`tel:${content.phone_src}`}>
                <a className="block relative z-10 mb-2 text-base font-medium tracking-wide text-center text-white hover:text-red-500 hover:border-0 transition">
                  {content.phone_label}
                </a>
              </Link>
              <p className="relative z-10 text-base font-medium tracking-wide text-center">
                {content.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
