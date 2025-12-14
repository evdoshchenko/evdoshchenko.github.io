import { initAdCanvas } from './ad-canvas.js';
import { initPointer } from './pointer.js';
import { initLamp } from './lamp.js';
import { getElements } from './dom.js';

function createPointerElements() {
  const pointer = document.createElement("div");
  pointer.classList.add("pointer");

  const circle = document.createElement("div");
  circle.classList.add("circle");

  document.body.appendChild(pointer);
  document.body.appendChild(circle);
}

function preloadLogoElement(logo) {
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preload";
  preloadLink.href = "./danilynx.svg";
  preloadLink.as = "image";
  document.head.appendChild(preloadLink);

  setTimeout(() => {
    logo.style.transition = "opacity 0.5s";
    logo.style.opacity = 1;
  }, 0);
}

function createDanilynxContent(width) {
  return `
        <img class="logo lamp" src="./danilynx.svg" alt="Danilynx" style="opacity:0">
        <div id="ad">
            <canvas id="myCanvas" width="${width}" height="20">
            Sorry, your browser does not support canvas.
            </canvas>
        </div>
        <div id="result"></div>
        `;
}

function init() {
  let width = window.innerWidth;
  const danilynxElement = document.getElementById("danilynx");
  if (danilynxElement) {
    danilynxElement.innerHTML = createDanilynxContent(width);
  }
  if (!document.querySelector('.pointer') || !document.querySelector('.circle')) {
    createPointerElements();
  }
  const { logo, lamp, gradient, pointer, circle, titles, links, webDevelopment, sitemap, sup, sub, canvas } = getElements();

  if (logo) {
    preloadLogoElement(logo);
  }

  initLamp(lamp, gradient, titles, links, webDevelopment, sitemap, sup, sub);
  initAdCanvas(canvas);
  initPointer(gradient, pointer, circle, logo);
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener("resize", init);