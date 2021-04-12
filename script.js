function initTabNav() {
  const activeClass = 'active'

  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab=content] section')
  tabContent[0].classList.add(activeClass)

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove(activeClass)
    })
    const direction = tabContent[index].dataset.anime
    tabContent[index].classList.add(activeClass, direction)
  }
  
  tabMenu.forEach((img, index) => {
    img.addEventListener('click', () => activeTab(index))
  })

}
initTabNav()


function initAccordion() {
  const activeClass = 'active'

  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  accordionList[0].classList.add(activeClass)
  accordionList[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion)
  })

}
initAccordion()

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      block: 'start',
     behavior: 'smooth'
    })
  }

  internalLinks.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}
initSmoothScroll()

function initAnimeScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const halfWindow = window.innerHeight * 0.6

  function animeScroll() {
   sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - halfWindow < 0)
    
      if(isSectionVisible) 
        section.classList.add('active')
   })
  }
  animeScroll()

  window.addEventListener('scroll', animeScroll)
}

initAnimeScroll()

/*  */

