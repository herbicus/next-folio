import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '../../layout/Meta';
import projects from '../../projects';
import { Main } from '../../templates/Main';

export default function Project({ project }: any) {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Herb Torres | Project"
          description="Herb Torres | Project"
        />
      }
    >
      <div className="px-4 md:px-8 pt-10 md:pt-18">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 sm:col-span-6 md:col-span-4">
              <h1 className="font-display font-black text-3xl md:text-4xl mb-5 md:mb-6">
                {project.Title}
              </h1>
              <div className="mb-5">
                {project.Text.map((block: any) => (
                  <p key={project.Id} className="text-base mb-3 last:mb-0">
                    {block}
                  </p>
                ))}
              </div>

              <Link href={`${project.Link}`}>
                <a
                  className="text-gray-700 border-none font-medium text-base uppercase hover:text-gray-900"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Visit site
                </a>
              </Link>
            </div>

            <div className="col-span-1 md:col-span-8 pl-0 md:pl-12">
              {project.Images.map((image: any) => (
                <div key={project.Id}>
                  <img
                    className="mb-4"
                    src={`${router.basePath}/assets/images/preview/${image}`}
                    alt={`${project.A11y}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project: any) => ({
    params: { slug: project.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params as any;
  const project = projects.find((p: any) => p.Slug === slug);

  return {
    props: { project },
  };
}
