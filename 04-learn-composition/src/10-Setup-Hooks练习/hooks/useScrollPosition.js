import { reactive, ref } from "vue";

export function useScrollPosition() {
  const scrollPosition = reactive({
    x: 0,
    y: 0
  })

  document.addEventListener('scroll', () => {
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
  })

  return { scrollPosition }
}