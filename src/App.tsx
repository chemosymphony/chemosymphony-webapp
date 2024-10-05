// App.tsx
import React from 'react'
import Page from './components/organisms/Page'

export default function App() {
    const handleClick = () => {
        alert('Pixel Button Clicked!')
    }

    return (
        <Page
            backgroundGif="/first_page.gif"
            buttonLabel="Next"
            onButtonClick={handleClick}
        />
    )
}
