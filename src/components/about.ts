import { getElementById } from '../helpers';

const getAge = () => {
  const birthday = new Date('1996-06-15');
  const diff = new Date().getTime() - birthday.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

export function renderAbout() {
  const aboutContainer = getElementById('about');
  const currentAge = getAge();

  aboutContainer.innerHTML = `
  <div class="container">
    <h3>Hi, my name is Dominic</h3>
    <p>I am a ${currentAge} years old espresso lover who always tries to improve
    his development tooling and is constantly on the search for a better looking
    Visual Studio Code colorscheme.<br/><br/>
    During development I follow the prime directive that a high UX and code quality
    is the main key for a successful product.</p>
  </div>
  `;
}
