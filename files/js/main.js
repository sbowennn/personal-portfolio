/*--SHOW/HIDE MENU--*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*--SHOW--*/
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*--HIDE--*/
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*--REMOVE MOBILE MENU--*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*--SKILLS--*/

const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.getElementsByClassName

    for(i = 0; i < skillsContent.length; i++){
      skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
      this.parentNode.className = 'skills-content skills-open'
    }
} 

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

/*--TABS --*/

/*--SERVICES--*/


/*----*/

/*----*/


/*----*/


/*----*/


/*----*/

/*----*/

/*----*/