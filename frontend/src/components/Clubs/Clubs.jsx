import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ClubElem from './ClubElem'
import './Clubs.css'

const Clubs = () => {

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <div ref={container} style={{backgroundColor: 'black'}}>
      <ClubElem index={0} scrollYProgress={scrollYProgress} />
      <ClubElem index={1} scrollYProgress={scrollYProgress}/>
    </div>
  )
}

export default Clubs
