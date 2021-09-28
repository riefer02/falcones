import React, { useRef, useState, useEffect } from 'react'

const DraggableComponent = ({ color, player }) => {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const ref = useRef()

    const dynamicStyles = {
        background: color,
    }

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position])

    // Update the current position if mouse is down
    const onMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    const onTouchMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    return (
        <div
            ref={ref}
            style={dynamicStyles}
            className="player"
            onTouchMove={onTouchMove}
            onMouseMove={onMouseMove}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}>
            <p>{pressed ? "Dragging..." : player}</p>
        </div>
    )
}

export default DraggableComponent