import illustrationGraphic from '../assets/illustration.svg';
import avatarJpg from '../assets/avatar.jpg';
import { getElementById } from '../helpers';

export function renderHero() {
  const heroContainer = getElementById('hero');

  heroContainer.innerHTML = `
    <div class="container">
      <h1>Intuitive software needs a <span class="highlight">full stack</span></h1>
      <h2>I create maintainable, user oriented software with a high quality standard.</h2>
      <div class="avatar"></div>
      <img src=${illustrationGraphic} alt="Illustration">
    </div>
  `;

  const avatar = heroContainer.querySelector<HTMLDivElement>('.avatar');

  if (!avatar) {
    throw new Error('No avatar container found');
  }

  avatar.style.backgroundImage = `url(${avatarJpg})`;
}
