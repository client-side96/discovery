import githubSvg from '../assets/github.svg';
import linkedinSvg from '../assets/linkedin.svg';
import xingSvg from '../assets/xing.svg';

interface FooterElement {
  icon: string;
  label: string;
  url: string;
}

const FOOTER_ELEMENTS: FooterElement[] = [
  { icon: githubSvg, label: 'Github', url: 'https://github.com/client-side96' },
  {
    icon: linkedinSvg,
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/dominic-frey-b09a15201/'
  },
  {
    icon: xingSvg,
    label: 'Xing',
    url: 'https://www.xing.com/profile/Dominic_Frey5/cv'
  }
];

export function renderFooter() {
  const footer = document.querySelector('footer');

  if (!footer) {
    throw new Error('No footer present.');
  }

  const getCurrentYear = () => {
    const startYear = 2023;
    const current = new Date().getFullYear();
    if (current === startYear) return `${current}`;
    return `${startYear} - ${current}`;
  };

  footer.innerHTML = `
  <div class="container">
    ${FOOTER_ELEMENTS.map(
      (fe) => `
        <a href="${fe.url}" target="_blank">
          <img src="${fe.icon}" alt="footer-el-${fe.label}"/>
          ${fe.label}
        </a>
      `
    ).join('')}
    <div class="break"></div>
    <p>Copyright © ${getCurrentYear()} Dominic Frey</p>
  </div>
`;
}
