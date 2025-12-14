export function initPointer(gradient, pointer, circle, logo) {
  if (!gradient || !pointer || !circle || !logo) return;

  const movementRange = 100;
  const calmZone = 3;
  let currentLogoX = 0;
  let targetLogoX = 0;

  function handleMouseMove(event) {
    let x = event.clientX, y = event.clientY;
    setPointer(x, y);

    const logoRect = logo.getBoundingClientRect();
    const logoCenterX = logoRect.left + logoRect.width / 2;
    let distance = x - logoCenterX;

    targetLogoX = Math.abs(distance) < calmZone ? 0 : Math.sign(distance) * movementRange * (Math.min(Math.abs(distance) / movementRange, 1) * 0.5);
  }

  function moveLogo() {
    currentLogoX += (targetLogoX - currentLogoX) * 0.07;
    logo.style.transform = `translateX(${currentLogoX}px)`;
    requestAnimationFrame(moveLogo);
  }

  function setPointer(x, y) {
    setTimeout(() => {
      pointer.style.top = `${y - pointer.offsetWidth / 2}px`;
      pointer.style.left = `${x - pointer.offsetHeight / 2}px`;
      circle.style.top = `${y - circle.offsetWidth / 2}px`;
      circle.style.left = `${x - circle.offsetHeight / 2}px`;
    }, 150);
  }

  gradient.onmousemove = handleMouseMove;
  gradient.ontouchmove = (event) => setPointer(event.touches[0].clientX, event.touches[0].clientY);
  gradient.ontouchend = () => setPointer(-30, -30);

  moveLogo();
}
