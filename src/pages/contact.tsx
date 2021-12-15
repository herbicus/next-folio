import { useRouter } from 'next/router';

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
          alt="San Juan, Puerto Rico"
          loading="lazy"
        />

        <div className="flex md:w-full max-w-screen-lg mx-auto relative z-10">
          <div className="contact-content text-white relative">
            <div className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0 bg-black w-[250px] md:w-[300px] h-[250px] md:h-[300px] opacity-50 md:opacity-30 rotate-45 pointer-events-none"></div>
            <h1 className="font-display font-black text-3xl md:text-4xl text-center mb-3 relative z-10">
              Herb Torres
            </h1>

            <p className="text-base text-center mb-2 relative z-10">
              herbtorres960@gmail.com
            </p>
            <p className="text-base text-center mb-2 relative z-10">
              (678) 353 - 1893
            </p>
            <p className="text-base text-center relative z-10">Ann Arbor, MI</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
