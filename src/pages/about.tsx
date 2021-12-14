// import router from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
          <div className="col-span-1 md:col-span-8 pr-0 md:pr-12">
            image goes here
            {/* <img
              src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
              alt="Nextjs starter banner"
            /> */}
          </div>

          <div className="col-span-1 md:col-span-4">
            <h1 className="font-display font-black text-4xl md:text-5xl">
              Headline 2 black
            </h1>

            <p className="font-sans text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              fuga recusandae quidem. Quaerat molestiae blanditiis doloremque
              possimus labore voluptatibus distinctio recusandae autem esse
              explicabo molestias officia placeat, accusamus aut saepe.
            </p>
            <p className="font-sans text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              fuga recusandae quidem. Quaerat molestiae blanditiis doloremque
              possimus labore voluptatibus distinctio recusandae autem esse
              explicabo molestias officia placeat, accusamus aut saepe.
            </p>
          </div>
        </div>
      </div>
    </main>
  </Main>
);

export default About;
