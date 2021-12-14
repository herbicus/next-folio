import Link from 'next/link';
import { useRouter } from 'next/router';

import projects from '../../projects';
import { getDenormalizedProjects } from '../../utils/utils';

export default function Project({ project }: any) {
  const router = useRouter();

  return (
    <>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
      </header>
      <main>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
            <div className="col-span-1 md:col-span-4">
              <h1 className="font-display font-black text-4xl md:text-5xl">
                {project.Title}
              </h1>
              <p className="font-sans text-base">{project.Text}</p>
            </div>

            <div className="col-span-1 md:col-span-8 pl-0 md:pl-12">
              <img
                src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
                alt="Nextjs starter banner"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const PROJECTS = projects;
  const paths = PROJECTS.map((project: any) => ({
    params: { slug: project.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params as any;
  const PROJECTS = getDenormalizedProjects();
  const project = PROJECTS.find((p: any) => p.Slug === slug);

  return {
    props: { project },
  };
}
