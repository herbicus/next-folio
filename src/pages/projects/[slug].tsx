import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { AppConfig } from '../../utils/AppConfig';

const projects = AppConfig.projects as any;

export default function Project({ project }: any) {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={`Herb Torres | ${project.Title}`}
          description={`Herb Torres | ${project.Title}`}
        />
      }
    >
      <div className="px-4 md:px-8 pt-10 md:pt-18 mb-12 md:mb-16">
        <div className="max-w-screen-lg mx-auto relative">
          <div className="absolute top-0 right-0 md:right-[-24px]">
            <Link href="/">
              <a className="border-0 hover:border-0 text-gray-150 hover:text-primary-500">
                <svg id="close" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 sm:col-span-6 md:col-span-4">
              <h1 className="font-display font-black text-3xl md:text-4xl mb-5">
                {project.Title}
              </h1>
              <h2 className="font-sans font-semibold text-lg md:text-xl mb-5">
                {project.Thumbnail_caption}
              </h2>
              <div className="mb-8">
                {project.Text.map((block: any) => (
                  <p key={project.Id} className="text-base mb-5 last:mb-0">
                    {block}
                  </p>
                ))}
              </div>

              <Link href={`${project.Link}`}>
                <a
                  className="text-primary-500 border-none font-semibold text-sm uppercase hover:text-red-500 transition"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Visit site
                  <svg
                    id="arrow-forward"
                    className="inline-block ml-1 w-[16px] translate-y-[-2px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>

            <div className="col-span-1 md:col-span-8 pl-0 md:pl-12 mt-12 md:mt-0">
              {project.Images.map((image: any) => (
                <div key={project.Id} className="mb-5 last:mb-0">
                  <img
                    className="object-contain"
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
