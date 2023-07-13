var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  var projectsLink = document.querySelector(".zero");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();

    const projectsSection = document.querySelector(".content3");

    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const experiencesLink = document.querySelector(
    "#MenuItems li:nth-child(2) a"
  );

  experiencesLink.addEventListener("click", function (event) {
    event.preventDefault();
    const experiencesSection = document.querySelector(".content2");

    experiencesSection.scrollIntoView({ behavior: "smooth" });
  });
});

const downloadButton = document.querySelector("button");

downloadButton.addEventListener("click", () => {
  const resumeURL =
    "https://drive.google.com/file/d/1vrxgG0-PKCSG1Da6BxaeCvFmksWVyLJw/view?usp=sharing";

  window.open(resumeURL, "_blank");
});
