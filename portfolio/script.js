// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('show');
        });
    });

    // Typed.js initialization for animated text
    new Typed('.text', {
        strings: ["Graphic Designer", "Brand Designer"],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
    });
});

// Open and close modal functions
function openBranding() {
    document.getElementById('brandingModal').style.display = 'flex';
}
function closeBranding() {
    document.getElementById('brandingModal').style.display = 'none';
}
function openSocialMedia(){
    document.getElementById('socialMediaModal').style.display = 'flex';
}
function closeSocialMedia() {
    document.getElementById('socialMediaModal').style.display = 'none';
}
function openPrintDesign() {
    document.getElementById('printDesignModal').style.display = 'flex';
}
function closePrintDesign() {
    document.getElementById('printDesignModal').style.display = 'none';
}

// Close modal when clicking outside modal-content (handles all modals)
window.onclick = function(event) {
    const brandingModal = document.getElementById('brandingModal');
    const socialMediaModal = document.getElementById('socialMediaModal');
    const printDesignModal = document.getElementById('printDesignModal');

    if (event.target === brandingModal) {
        brandingModal.style.display = "none";
    } else if (event.target === socialMediaModal) {
        socialMediaModal.style.display = "none";
    } else if (event.target === printDesignModal) {
        printDesignModal.style.display = "none";
    }
};

// Open external link function
function openCV() {
    window.open('https://drive.google.com/file/d/1YpYKRCqEkHB2haP0GYoWVH91Zbzo_c58/view');
}

// Auto slider for project cards
let currentProject = 0;
const projectCards = document.querySelectorAll('.project-card');

function showProject(index) {
    projectCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
}

function nextProject() {
    currentProject = (currentProject + 1) % projectCards.length;
    showProject(currentProject);
}

function prevProject() {
    currentProject = (currentProject - 1 + projectCards.length) % projectCards.length;
    showProject(currentProject);
}






