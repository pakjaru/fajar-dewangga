export const scrollToSection = (section: string) => {
  const elementOffset = document.querySelector<HTMLElement>(`#${section}`)?.offsetTop
  const offset = elementOffset ? elementOffset - 100 : 0

  window.scrollTo({ top: offset, behavior: 'smooth' })
}