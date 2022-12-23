/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build sections auto

// build the nav


// 

// - select all sections elements in an array.
const sections = document.querySelectorAll('section');

// - select the ul element.
const navbarList = document.querySelector('#navbar__list');

// - select the fragment element for performance issues.
const docfrag = document.createDocumentFragment();

// build in the navbar creator fuction  
function navCreator(){

    //loop over the sections
    for (const section of sections){
    
        //create (li) and (a) elements
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
    
        //extract datanav using gatAttribute
        //add text to <a>
        linkItem.innerHTML = section.getAttribute('data-nav');
    
        // add 'menu__link' class to the a tag
        linkItem.classList.add('menu__link')

        //append <a> to <li>
        listItem.appendChild(linkItem);
    
        // add the event listner and the behavior
        linkItem.addEventListener('click',()=>{
    
            section.scrollIntoView({behavior:'smooth'});
            // I 've added another 'smooth' code to html (doing the same thing)
    
        });
    
        //append <li> to fragment
        docfrag.appendChild(listItem);
    
    }
    
    //append fragment to ul
    navbarList.appendChild(docfrag);
    // navbarList.insertAdjacentHTML("beforeend", docfrag)
    
}
// call the function
navCreator();


// Add class 'your-active-class'and'active-section' to sections and navbar's link when near top of viewport

window.addEventListener('scroll',()=>{

    const options ={

        root:null,

        threshold: 0.7,

        rootMargin: '30px',

    };

    const observer = new IntersectionObserver(callback, options);

    //add 'your-active-class' to the section when it is intersected with the viewport

    function callback (entries) { 
        entries.forEach(entry =>{
            if (entry.isIntersecting) {
            entry.target.classList.add('your-active-class');
            }else{
                entry.target.classList.remove('your-active-class');
            }
        });
    }

    //observe the target
    sections.forEach(section=>{
        observer.observe(section);
    })

    //toggle the link based on activity status

function activeLink () {

    // select all links 
    const links = document.querySelectorAll('a');

    //loop through the sections to get the active section
    for (const section of sections){
        if(section.classList.contains('your-active-class')) {
            const active_section = section;

            // loop throw links to get the active link (matching)
            for(const link of links) {
                //extract data-nav and compare it to the link's data-nav 
                if(link.innerHTML==active_section.getAttribute('data-nav')){
                    link.classList.add('active-section');
                }else{
                    link.classList.remove('active-section');
                }
            }
        }
    }
}
// call the function
activeLink();
});




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


