import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AnimatedText = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Engineer', 'Vlogger'],
    loop: 3000,
  })

  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor cursorColor="#BB86FC" />
    </div>
  )
}

export default AnimatedText;
