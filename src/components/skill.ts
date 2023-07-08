import devopsSvg from '../assets/devops.svg';
import frontendSvg from '../assets/frontend.svg';
import backendSvg from '../assets/backend.svg';

import { getElementById } from '../helpers';

interface Technology {
  name: string;
  // TODO
  icon?: any;
  percentage?: number;
}

interface Skill {
  icon: string;
  title: string;
  description: string;
  technologies: Technology[];
}

const SKILLS: Skill[] = [
  {
    icon: frontendSvg,
    title: 'Frontend',
    description:
      'I love to design and implement user interfaces with a high UX.',
    technologies: [
      { name: 'Typescript | Javascript' },
      { name: 'React.js' },
      { name: 'Angular' },
      { name: 'Webpack' },
      { name: 'Storybook' },
      { name: 'Jest | Karma | RTL' },
      { name: 'Playwright & Cucumber.js' }
    ]
  },
  {
    icon: backendSvg,
    title: 'Backend',
    description:
      'I value a secure and efficient architecture independent of the technology.',
    technologies: [
      { name: 'Haskell' },
      { name: 'Node.js' },
      { name: 'C#' },
      { name: '.NET Core' },
      { name: 'Express.js | Nest.js' },
      { name: 'Golang' },
      { name: 'Postgres | MySQL' }
    ]
  },
  {
    icon: devopsSvg,
    title: 'DevOps',
    description:
      'I focus on a seamless workflow from development to deployment.',
    technologies: [
      { name: 'Git' },
      { name: 'Jenkins' },
      { name: 'Artifactory' },
      { name: 'Embedded Linux (Emlix)' },
      { name: 'Bitbucket | Stash' },
      { name: 'Drone CI' },
      { name: 'Github Actions' }
    ]
  }
];

export function renderSkills() {
  const skillsContainer = getElementById('skills');

  skillsContainer.innerHTML = `
  <div class="container">
    ${SKILLS.map(
      (skill) => `
          <aside class="skill">
            <div class="icon"></div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
            <p><span>Technologies I worked with:</span>
            </p>
            <ul>
            ${skill.technologies
              .map((tech) => `<li>${tech.name}</li>`)
              .join('')}
            </ul>
          </aside>
    `
    ).join('')}
  </div>`;

  const icons = skillsContainer.querySelectorAll<HTMLDivElement>('.icon');
  if (icons.length === 0) {
    throw new Error('No skills');
  }
  for (const [index, icon] of icons.entries()) {
    icon.style.backgroundImage = `url(${SKILLS[index].icon})`;
  }
}
