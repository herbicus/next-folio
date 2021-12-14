import projects from '../projects';

export function getDenormalizedProjects() {
  return projects.map((project: any) => {
    return {
      ...project,
    };
  });
}
