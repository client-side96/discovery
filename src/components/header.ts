import logoSvg from '../assets/logo.svg';

export function renderHeader() {
  const header = document.querySelector('header');

  if (!header) {
    throw new Error('No header present');
  }

  header.innerHTML = `
    <div class="container">
      <img src="${logoSvg}" alt="Logo" />
    </div>
  `;
}
