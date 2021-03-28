function initTabNav() {
  const activeClass = 'active'

  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add(activeClass)

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove(activeClass)
    })
    tabContent[index].classList.add(activeClass)
  }
  
  tabMenu.forEach((img, index) => {
    img.addEventListener('click', () => activeTab(index))
  })

}
initTabNav()


function initAccordion() {
  const activeClass = 'active'

  const accordionList = document.querySelectorAll('.js-accordion dt')
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