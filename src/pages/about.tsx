import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="About" description="Herb Torres | About" />}>
      <div className="px-4 md:px-8 pt-10 md:pt-18">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
            <div className="col-span-1 md:col-span-8 pr-0 md:pr-12">
              <img
                src={`${router.basePath}/assets/images/about-img.jpg`}
                alt="Nextjs starter banner"
              />
            </div>

            <div className="col-span-1 md:col-span-4">
              <h1 className="font-display font-black text-4xl md:text-5xl">
                Headline 2 black
              </h1>

              <p className="font-sans text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione fuga recusandae quidem. Quaerat molestiae blanditiis
                doloremque possimus labore voluptatibus distinctio recusandae
                autem esse explicabo molestias officia placeat, accusamus aut
                saepe.
              </p>
              <p className="font-sans text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione fuga recusandae quidem. Quaerat molestiae blanditiis
                doloremque possimus labore voluptatibus distinctio recusandae
                autem esse explicabo molestias officia placeat, accusamus aut
                saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;
