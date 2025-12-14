export function getElements() {
  const logo = document.querySelector(".logo");
  const lamp = document.querySelector(".lamp");
  const gradient = document.getElementById("gradient");
  const pointer = document.querySelector(".pointer");
  const circle = document.querySelector(".circle");
  const titles = document.getElementsByTagName("h1");
  const links = document.getElementsByTagName("a");
  const webDevelopment = document.getElementsByTagName("h6")[0];
  const sitemap = document.getElementById("sitemap");
  const sup = document.getElementsByTagName("sup")[0];
  const sub = document.getElementsByTagName("sub")[0];
  const canvas = document.getElementById("myCanvas");

  return {
    logo,
    lamp,
    gradient,
    pointer,
    circle,
    titles,
    links,
    webDevelopment,
    sitemap,
    sup,
    sub,
    canvas
  }
}