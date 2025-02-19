const menuButton = document.querySelector(".menu-button")

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt) {
  return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
  let clickedElement = event.target;

  if (clickedElement.tagName !== "IMG") return;

  let srcParts = clickedElement.src.split("-");

  let fullImageSrc = srcParts[0] + "-full.jpeg";

  let existingViewer = document.querySelector(".viewer");
  if (existingViewer) existingViewer.remove();

  let viewerTemplate = `
      <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${fullImageSrc}" alt="sizedpic">
      </div>
      `;
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

  let closing = document.querySelector(".close-viewer")
  closing.addEventListener("click", closeViewer);
}

let gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function closeViewer() {
  let viewer = document.querySelector(".viewer");
  viewer.remove();
}