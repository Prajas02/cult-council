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
      <ClubElem index={0} scrollYProgress={scrollYProgress} backImg={"https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg"}/>
      <ClubElem index={0.1} scrollYProgress={scrollYProgress} backImg={"https://www.bing.com/th?id=OIP.wg4R0mAD1_DQAII9hCM-8AHaDk&w=214&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"}/>
      <ClubElem index={0.5} scrollYProgress={scrollYProgress} backImg={"https://www.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=157&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"}/>
    </div>
  )
}

export default Clubs