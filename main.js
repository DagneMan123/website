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




        // Remove active class from the currently active resume box
        document.querySelector('.section.active').classList.remove('active');
        // Add active class to the corresponding resume box
        sections[idx].classList.add('active');

        const array = array.from(sections);
        const arrSecs = array.slice(1, -1);//only requires indexes 1, 2, 3 or does not require start and end indexes
         arrSecs.forEach(arrSec => {
          if(arrSec.classList.contains('active')) {
            sections[4].classList.add('action-contact');
          } 
         });
         if(sections[0].classList.contains('active')){
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