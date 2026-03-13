"use client"

import { useEffect, useRef } from "react"

/**
 * Bidirectional appear hook.
 * Adds "in-view" when element enters viewport, removes it when it leaves
 * — so scrolling back up re-animates elements on the way down again.
 */
export function useAppear<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        } else {
          entry.target.classList.remove("in-view")
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
