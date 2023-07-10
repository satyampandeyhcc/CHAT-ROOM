var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the "Projects" link element
//     var projectsLink = document.querySelector(".zero");

//     // Add a click event listener to the "Projects" link
//     projectsLink.addEventListener("click", function(event) {
//       event.preventDefault(); // Prevent the default link behavior

//       // Get the offsetTop of the "Projects" section
//       var projectsSection = document.getElementById("projects");
//       var projectsSectionOffset = projectsSection.offsetTop;

//       // Scroll to the "Projects" section using smooth scrolling
//       window.scrollTo({
//         top: projectsSectionOffset,
//         behavior: "smooth"
//       });
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Projects" link element
  var projectsLink = document.querySelector(".zero");

  // Add a click event listener to the "Projects" link
  projectsLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the offsetTop of the "Projects" section
    //   var projectsSection = document.getElementById("projects");
    const projectsSection = document.querySelector(".content3");

    // Scroll to the top of the Experiences section
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});

// JavaScript code to scroll to the Experience section
document.addEventListener("DOMContentLoaded", function () {
  const experiencesLink = document.querySelector(
    "#MenuItems li:nth-child(2) a"
  );

  experiencesLink.addEventListener("click", function (event) {
    event.preventDefault();
    const experiencesSection = document.querySelector(".content2");

    // Scroll to the top of the Experiences section
    experiencesSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Get the download button element
const downloadButton = document.querySelector("button");

// Add a click event listener to the button
downloadButton.addEventListener("click", () => {
  // Define the URL of the resume file
  const resumeURL =
    "https://drive.google.com/file/d/1vrxgG0-PKCSG1Da6BxaeCvFmksWVyLJw/view?usp=sharing";

  // Open the resume file in a new tab
  window.open(resumeURL, "_blank");
});
