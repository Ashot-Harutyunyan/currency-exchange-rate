import { useEffect, useState } from 'react'

export default function useElementSize(ref) {

    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (!ref.current) return

        const updateSize = () => {
            if (window.innerWidth <= 800) {
                setSize({ width: 0, height: 0 })
                return
            }

            setSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight })
        }

        updateSize()
        const observer = new ResizeObserver(updateSize)

        observer.observe(ref.current)
        window.addEventListener("resize", updateSize)

        return () => {
            observer.disconnect()
            window.removeEventListener("resize", updateSize)
        }

    },[ref])

    return size
}