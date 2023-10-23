const toggleMenuButton = document.getElementById("toggle-menu-button");
const downloadResumeButton = document.getElementById("download-resume-button");
const downloadResumeMenuButton = document.getElementById(
  "download-resume-menu-button"
);
let menuVisible = false;
const pdfFile = "sisjpawrabhsn.pdf";

toggleMenuButton.addEventListener("click", () => {
  const toggleMenuElement = document.getElementById("toggle-menu");
  if (menuVisible) {
    toggleMenuElement.style.display = "none";
    menuVisible = false;
  } else {
    toggleMenuElement.style.display = "block";
    menuVisible = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

downloadResumeButton.addEventListener("click", downloadResume);
downloadResumeMenuButton.addEventListener("click", downloadResume);

function downloadResume() {
  let link = document.createElement("a");
  link.href = pdfFile;
  link.download = "chhotu_kumar_resume.pdf";
  link.click();
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks1 = document.querySelectorAll(".nav-link-btn");
  const navLinks2 = document.querySelectorAll(".nav-link-btn-toggle");
  navLinks1.forEach((link) => {
    link.addEventListener("click", (e) => {
      smoothScroll(e);
    });
  });

  navLinks2.forEach((link) => {
    link.addEventListener("click", (e) => {
      smoothScroll(e, true);
    });
  });

  function smoothScroll(e, fromToggle = false) {
    e.preventDefault();
    const targetId = e.target.hash.substring(1);
    const targetSection = document.getElementById(targetId);
    let offsetTop = 0;
    if (fromToggle) {
      offsetTop = 64;
    }
    menuVisible = false;
    window.scrollTo({
      top: targetSection.offsetTop - offsetTop,
      behavior: "smooth",
    });
  }
});

// Update the active link on scroll
const sections = document.querySelectorAll(".section-page");
const navLinks = document.querySelectorAll(".nav-link-btn");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  for (let i = sections.length; i > 0; i--) {
    let section = sections[i - 1];
    // console.log(section.offsetTop);
    const sectionOffset = section.offsetTop - window.innerHeight * 0.2;
    if (scrollPosition >= sectionOffset) {
      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.remove("font-semibold");
        link.classList.add("text-slate-300");
      });

      const targetId = section.getAttribute("id");
      const activeLink = document.querySelector(`a[href="#${targetId}"]`);
      if (activeLink) {
        activeLink.classList.remove("text-slate-300");
        activeLink.classList.add("text-white");
        activeLink.classList.add("font-semibold");
      }
      return;
    }
  }
});
