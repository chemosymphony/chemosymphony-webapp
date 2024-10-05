import React, { useRef } from 'react'
import { Parallax, IParallax } from '@react-spring/parallax'
import Page from './components/Page'
import styles from './styles.module.css'

export default function App() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
      <div style={{ background: '#dfdfdf' }}>
        <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
      </div>
  )
}