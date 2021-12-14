import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="Contact" description="Herb Torres | Contact" />}>
      <div className="contact px-4 md:px-8 pt-14 md:pt-24 relative">
        <img
          className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] object-cover z-0"
          src={`${router.basePath}/assets/images/contact-bg.jpg`}
          alt="San Juan, Puerto Rico"
        />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
            <div className="col-span-12">
              <h1 className="font-display font-black text-3xl md:text-4xl text-center mb-3">
                Herb Torres
              </h1>

              <p className="text-base text-center mb-2">
                herbtorres960@gmail.com
              </p>
              <p className="text-base text-center mb-2">(678) 353 - 1893</p>
              <p className="text-base text-center">Ann Arbor, MI</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
