const toggleMenuButton = document.getElementById('toggle-menu-button');
const downloadResumeButton = document.getElementById('download-resume-button');
const downloadResumeMenuButton = document.getElementById('download-resume-menu-button');
let menuVisible = false;
const pdfFile = "sisjpawrabhsn.pdf";

toggleMenuButton.addEventListener('click', () => {
    const toggleMenuElement = document.getElementById('toggle-menu');
    if(menuVisible){
        toggleMenuElement.style.display = 'none';
        menuVisible = false;
    }else{
        toggleMenuElement.style.display = 'block';
        menuVisible = true;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
});

downloadResumeButton.addEventListener('click', downloadResume);
downloadResumeMenuButton.addEventListener('click', downloadResume);

function downloadResume(){
    let link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'chhotu_kumar_resume.pdf';
    link.click();
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks1 = document.querySelectorAll(".nav-link-btn");
    const navLinks2 = document.querySelectorAll(".nav-link-btn-toggle");
    navLinks1.forEach(link => {
        link.addEventListener("click", (e) => {smoothScroll(e)});
    });

    navLinks2.forEach(link => {
        link.addEventListener("click", (e) => {smoothScroll(e, true)});
    });

    function smoothScroll(e, fromToggle=false) {
        e.preventDefault();
        const targetId = e.target.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        let offsetTop = 0;
        if(fromToggle){
            offsetTop = 64
        }
        menuVisible = false;
        window.scrollTo({
            top: targetSection.offsetTop - offsetTop,
            behavior: "smooth"
        });
    }
});