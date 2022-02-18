import Link from 'next/link';
import { useRouter } from 'next/router';

import { projects } from '../../data/projects';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

export default function Project({ project }: any) {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={`Herb Torres | Portfolio - ${new Date().getFullYear()}`}
          description={`Herb Torres | Portfolio project - ${project.Title}`}
          canonical={`http://www.herbtorres.com/projects/${project.Slug}`}
        />
      }
    >
      <div className="px-4 pt-10 mb-12 md:px-8 md:mb-16 md:pt-18">
        <div className="relative mx-auto max-w-screen-lg min-h-[80vh]">
          <div className="absolute top-0 right-0 md:right-[-24px]">
            <Link href="/">
              <a className="text-gray-150 hover:text-primary-500 border-0 hover:border-0 transition">
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
              <h1 className="mb-5 font-sans text-3xl font-medium md:text-4xl">
                {project.Title}
              </h1>
              <h2 className="mb-5 font-display text-sm font-black uppercase">
                {project.Thumbnail_caption}
              </h2>
              <div className="mb-8">
                {project.Text.map((block: any) => (
                  <p key={project.Id} className="mb-5 last:mb-0 text-base">
                    {block}
                  </p>
                ))}
              </div>

              {project.Link !== null ? (
                <Link href={`${project.Link}`}>
                  <a
                    className="text-sm font-semibold text-primary-500 hover:text-red-500 uppercase border-none transition"
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
              ) : (
                <Link href="/">
                  <a className="font-semibold text-primary-500 hover:text-red-500 uppercase hover:border-0 transition">
                    <svg
                      id="chevron"
                      className="inline-block mr-1 text-inherit rotate-[-90deg] translate-y-[-1px]"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                    >
                      <path
                        fill="currentColor"
                        d="M10.6,8L6,3.4L1.4,8L0,6.6l6-6l6,6L10.6,8z"
                      ></path>
                    </svg>
                    Back
                  </a>
                </Link>
              )}
            </div>

            <div className="col-span-1 pl-0 mt-12 md:col-span-8 md:pl-12 md:mt-0">
              {project.Images.map((image: any) => (
                <div key={project.Id} className="mb-5 last:mb-0">
                  <img
                    className="object-contain"
                    src={`${router.basePath}/assets/images/preview/${image.src}`}
                    alt={`${project.A11y}`}
                    width={image.width}
                    height={image.height}
                    loading="eager"
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
