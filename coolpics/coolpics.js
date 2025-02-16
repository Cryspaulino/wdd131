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
  let clickedElement = event.target; // Get the clicked element

  if (clickedElement.tagName !== "IMG") return; // Ensure it's an image

  let srcParts = clickedElement.src.split("-"); // Split filename
  let fullImageSrc = srcParts[0] + "-full.jpeg"; // Create full image filename

  // Remove existing viewer if it already exists
  let existingViewer = document.querySelector(".viewer");
  if (existingViewer) existingViewer.remove();

  // Viewer template
  let viewerTemplate = `
      <div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${fullImageSrc}" alt="sizedpic">
      </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", viewerTemplate); // Insert viewer

  // ✅ Wait for the viewer to be added, then select the close button
  setTimeout(() => {
      let closeButton = document.querySelector(".close-viewer");
      if (closeButton) {
          closeButton.addEventListener("click", closeViewer);
      }
  }, 0); // Small delay ensures the element exists
}

function closeViewer() {
  let viewer = document.querySelector(".viewer");
  if (viewer) viewer.remove(); // Remove viewer from DOM
}




// function viewHandler(event) {
//   // create a variable to hold the element that was clicked on from event.target

//   let menuButton = event.target;

//   // get the src attribute from that element and 'split' it on the "-"
//   let srcParts = viewer.src.split("-");

//   // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
//   let fullImageSrc = scrParts[0] + "-full.jpeg";

//   // insert the viewerTemplate into the top of the body element
//   // (element.insertAdjacentHTML("afterbegin", htmltoinsert))

//   let viewerTemplate = `
//     <div class="viewer">
//         <button class="close-btn">X</button>
//         <img src="${fullImageSrc}" alt="Full Image">
//     </div>
// `;
//   document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

//   // add a listener to the close button (X) that calls a function called closeViewer when clicked
//   document.querySelector(".close-btn").addEventListener("click", closeViewer);

//   function closeViewer() {
//     document.querySelector(".viewer").remove();
//   }

