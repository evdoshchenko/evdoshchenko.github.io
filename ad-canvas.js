export function initAdCanvas(canvas) {

  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");

  const displayMessage = (color, time, text) => {
    const minDisplayWidth = 340;
    const borders = canvas.width - minDisplayWidth;
    const gap = borders / 2;
    const displayCounts = Math.max(Math.round(canvas.width / 2 / minDisplayWidth) + 1, 1);

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `12px Roboto Mono`;
      ctx.fillStyle = color;
      for (let i = 0; i < displayCounts; i++) {
        ctx.fillText(text, (gap + 0 + (minDisplayWidth * i)), 15);
      }
    }, time);

    const clearCanvasSections = (intervals) => {
      intervals.forEach(([x, y, w, h, t]) => {
        setInterval(() => ctx.clearRect(x, y, w, h), t);
      });
    };

    for (let i = 0; i < displayCounts; i++) {
      clearCanvasSections([
        [(gap + 250 + (minDisplayWidth * i)), 0, 90, 20, 3500],
        [(gap + 150 + (minDisplayWidth * i)), 0, 190, 20, 7500],
        [(gap + 0 + (minDisplayWidth * i)), 0, 68, 35, 11500],
      ]);
    }
  };

  displayMessage("#5598FE", 500, "Front-End Development 💻 Front-End Development");
  displayMessage("#1645BD", 2000, "Front-End Development 💻 Front-End Development");

}