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

/*--QUALIF--*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent =>{
        tabContent.classList.remove('qualif-active')
      })
      target.classList.add('qualif-active') 

      tab.forEach(tab =>{ /** here tab is tabs? */
        tab.classList.remove('qualif-active')
      })
      tab.classList.add('qualif-active')
    })
})

/*--SERVICES--*/


/*--PORTFOLIO--*/

/*--SCROLL SECTIONS LINK--*/

/*--BACKGROUND HEADER--*/


/*----*/


/*----*/


/*----*/

/*----*/

/*----*/