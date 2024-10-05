import React from 'react'
import styles from './PixelButton.module.css'

interface PixelButtonProps {
    onClick: () => void
    label: string
}

const PixelButton: React.FC<PixelButtonProps> = ({ onClick, label }) => {
    return (
        <button className={styles.pixelButton} onClick={onClick}>
            {label}
        </button>
    )
}

export default PixelButton
