export default function initAnimeScroll() {
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