export const scrollToSection = (section: string) => {
  const offsetConstant = window.innerWidth < 575 ? 50 : 100 
  const elementOffset = document.querySelector<HTMLElement>(`#${section}`)?.offsetTop
  const offset = elementOffset ? elementOffset - offsetConstant : 0

  window.scrollTo({ top: offset, behavior: 'smooth' })
}