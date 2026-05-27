import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    let mouseX = 0, mouseY = 0
    let outX = 0, outY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      outX += (mouseX - outX) * 0.12
      outY += (mouseY - outY) * 0.12
      outline.style.left = outX + 'px'
      outline.style.top = outY + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseEnterHover = () => outline.classList.add('hovering')
    const onMouseLeaveHover = () => outline.classList.remove('hovering')

    document.addEventListener('mousemove', onMouseMove)
    animate()

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterHover)
      el.addEventListener('mouseleave', onMouseLeaveHover)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterHover)
        el.addEventListener('mouseleave', onMouseLeaveHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
