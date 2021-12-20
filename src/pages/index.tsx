import Link from 'next/link';
import { useRouter } from 'next/router';

import { config } from '../data/config';
import { projects } from '../data/projects';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={`${config.title} - ${new Date().getFullYear()}`}
          description={config.title_long}
          canonical={config.root_url}
        />
      }
    >
      <div className="px-4 md:px-8 pt-10 md:pt-18 mb-12 md:mb-16">
        <div className="max-w-screen-lg mx-auto min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 justify-items-center">
            {projects.map((project: any) => (
              <Link href={`/projects/${project.Slug}`} key={project.Id}>
                <a
                  className="project hover:border-0"
                  title={`${project.Title}`}
                >
                  <figure className="relative flex flex-col justify-start items-center md-auto w-full text-center">
                    <img
                      className="relative object-contain
                      w-full"
                      src={`${router.basePath}/assets/images/thumbnails/${project.Thumbnail}`}
                      alt={`${project.Title}`}
                      loading="eager"
                    />
                    <figcaption className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] text-gray-900">
                      <p className="font-display font-black text-lg mb-1">
                        {project.Title}
                      </p>
                      <p className="text-sm font-medium">
                        {project.Thumbnail_caption}
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </Link>
            ))}
          </div>
        </div>
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
