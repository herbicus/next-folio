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
      <div className="px-4 pt-10 mb-12 md:px-8 md:mb-16 md:pt-18">
        <div className="mx-auto max-w-screen-lg min-h-[80vh]">
          <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-3">
            {projects.map((project: any) => (
              <Link href={`/projects/${project.Slug}`} key={project.Id}>
                <a
                  className="hover:border-0 project"
                  title={`${project.Title}`}
                >
                  <figure className="flex relative flex-col justify-start items-center w-full text-center md-auto">
                    <img
                      className="object-contain relative w-full"
                      src={`${router.basePath}/assets/images/thumbnails/${project.Thumbnail}`}
                      alt={`${project.Title}`}
                      loading="eager"
                    />
                    <figcaption className="absolute top-2/4 left-1/2 w-[100%] text-gray-900 translate-x-[-50%] translate-y-[-50%]">
                      <p className="mb-1 font-display text-lg font-black">
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
