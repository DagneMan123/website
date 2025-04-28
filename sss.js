// Select all navigation items, the cube container, and tab elements
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// Add click event listeners to navigation items
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        // Remove active class from the currently active navigation item
        document.querySelector('.nav-list li.active').classList.remove('active');
        // Add active class to the clicked navigation item
        nav.classList.add('active');

        // Rotate the cube based on the clicked navigation item's index
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Remove active class from the currently active section
        document.querySelector('.section.active').classList.remove('active');
        // Add active class to the corresponding section
        sections[idx].classList.add('active');

        // Check if middle sections (1, 2, 3) are active to add contact action class
        const arrSecs = Array.from(sections).slice(1, 4); // Get sections 1, 2, 3 (indices 1-3)
        if (arrSecs.some(section => section.classList.contains('active'))) {
            sections[4].classList.add('action-contact');
        } else {
            sections[4].classList.remove('action-contact');
        }
    });
});

// Add click event listeners to resume tabs
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove active class from the currently active resume tab
        document.querySelector('.resume-list.active').classList.remove('active');
        // Add active class to the clicked resume tab
        list.classList.add('active');

        // Remove active class from the currently active resume box
        document.querySelector('.resume-box.active').classList.remove('active');
        // Add active class to the corresponding resume box
        resumeBoxes[idx].classList.add('active');
    });
});

// Add click event listeners to portfolio tabs
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove active class from the currently active portfolio tab
        document.querySelector('.portfolio-list.active').classList.remove('active');
        // Add active class to the clicked portfolio tab
        list.classList.add('active');

        // Remove active class from the currently active portfolio box
        document.querySelector('.portfolio-box.active').classList.remove('active');
        // Add active class to the corresponding portfolio box
        portfolioBoxes[idx].classList.add('active');
    });
});

setTimeout(() => {
    sections[4].classList.remove('active');   
}, 1500);

// Typed.js initialization - corrected
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});