import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import projects from '../projects';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="px-4 md:px-8 pt-12 md:pt-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
            {projects.map((project: any) => (
              <div key={project.Id}>
                <Link href={`/projects/${project.Slug}`}>
                  <a className="project" title={`${project.Title}`}>
                    <figure className="relative text-center">
                      <img
                        className="object-contain"
                        src={`${router.basePath}/assets/images/thumbnails/${project.Thumbnail}`}
                        alt={`${project.Title}`}
                      />
                      <figcaption className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] text-gray-900">
                        <p className="font-display font-black text-lg mb-2">
                          {project.Title}
                        </p>
                        <p className="text-sm font-medium">
                          {project.Thumbnail_caption}
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <h1 className="font-display font-extrabold text-5xl md:text-6xl">
          Headline 1 extrabold
        </h1>
        <h1 className="font-display font-black text-5xl md:text-6xl">
          Headline 1 black
        </h1>
        <h2 className="font-display font-bold text-4xl md:text-5xl">
          Headline 2
        </h2>
        <h3 className="font-sans font-semibold text-3xl md:text-4xl">
          Headline 3
        </h3>
        <h4 className="font-sans font-semibold text-2xl md:text-3xl">
          Headline 4
        </h4>
        <h5 className="font-sans text-2xl">Headline 5</h5>
        <h6 className="font-sans text-xl">Headline 6</h6>
        <p className="font-sans text-base">Paragraph</p>
        <p className="font-sans text-sm">Paragraph small</p>
        <p className="font-sans text-xs">Paragraph extrasmall</p>
      </div>
    </Main>
  );
};

export async function getStaticProps() {
  const posts = projects;

  return {
    props: { posts },
  };
}

export default Index;
