import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AnimatedText = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Developer', 'Vlogger', ''],
    loop: 300,
  })

  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor cursorColor="#BB86FC" />
    </div>
  )
}

export default AnimatedText;
