import React from 'react'
import PixelButton from '../atoms/PixelButton'
import styles from './Page.module.css'

interface PageProps {
    backgroundGif: string
    buttonLabel: string
    onButtonClick: () => void
}

const Page: React.FC<PageProps> = ({ backgroundGif, buttonLabel, onButtonClick }) => {
    return (
        <div className={styles.page} style={{ backgroundImage: `url(${backgroundGif})` }}>
            <PixelButton label={buttonLabel} onClick={onButtonClick} />
        </div>
    )
}

export default Page
