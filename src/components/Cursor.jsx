import { useEffect, useState } from 'react';
import './Cursor.css';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Delayed outline for organic trailing effect
            setTimeout(() => {
                setOutlinePosition({ x: e.clientX, y: e.clientY });
            }, 80);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="cursor-dot"
                style={{ left: position.x, top: position.y }}
            />
            <div
                className="cursor-outline"
                style={{ left: outlinePosition.x, top: outlinePosition.y }}
            />
        </>
    );
}

export default Cursor;
