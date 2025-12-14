export function initLamp(lamp, gradient, titles, links, webDevelopment, sitemap, sup, sub) {
  if (!lamp || !titles || !sitemap || !sup || !sub) {
    return;
  }

  let theme = 'ligh';

  const toggleTheme = () => {

    setTimeout(() => {
      const isLightTheme = theme === 'light';
      if (lamp) {
        lamp.classList.toggle('dark', !isLightTheme)
      }

      if (gradient) {
        gradient.style.backgroundImage = isLightTheme
          ? `linear-gradient(180deg, var(--black), var(--dark), var(--accent-two))`
          : `linear-gradient(180deg, var(--accent-two), var(--accent-one), var(--white))`;
      }

      [...titles].forEach(title => {
        title.style.color = isLightTheme ? 'var(--accent-one)' : 'var(--dark)';
      });

      [...links].forEach(link => {
        link.style.color = isLightTheme ? 'var(--accent-one)' : 'var(--dark)';
      });

      if (webDevelopment) {
        webDevelopment.style.color = isLightTheme ? 'var(--accent-two)' : 'var(--accent-two)';
      }
      sitemap.style.color = isLightTheme ? 'var(--accent-one)' : 'var(--black)';
      sup.style.color = isLightTheme ? 'var(--accent-two)' : 'var(--dark)';
      sub.style.color = isLightTheme ? 'var(--accent-two)' : 'var(--dark)';
      theme = isLightTheme ? 'dark' : 'light';
    }, 450);
  };

  lamp.onmousedown = () => {
    console.log('1')
    toggleTheme();
  };
}