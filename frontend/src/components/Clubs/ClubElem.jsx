import { motion } from 'framer-motion'
import './Clubs.css'

const rotateVariants = {
    rotate: {
        rotate: 360
    }
}

function ClubElem({ clubImgSrc }) {
    return (
        <>
            <div className="container"></div>

            <div className="focus">
                <div className="card-container">
                    <motion.div className="cards card-1" variants={rotateVariants} animate='rotate' transition={{duration: 4 , repeat: Infinity , repeatDelay: 1.5}}></motion.div>
                    <motion.div className="cards card-2" variants={rotateVariants} animate='rotate' transition={{duration: 4 , delay: 1 , repeat: Infinity , repeatDelay: 2.5}}></motion.div>
                    <motion.div className="cards card-3" variants={rotateVariants} animate='rotate' transition={{duration: 4 , delay: 0.5 ,repeat: Infinity , repeatDelay: 2}}></motion.div>
                    <motion.div className="cards card-4" variants={rotateVariants} animate='rotate' transition={{duration: 4 , delay: 1.5 , repeat: Infinity , repeatDelay: 3}}></motion.div>
                </div>
                
                <div className="club-text">
                    <div className="cTitle">XYZ</div>
                    <div className="cDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil ipsam facilis suscipit tempora deserunt magni molestias, eos eum obcaecati sequi ullam fugit, adipisci libero repellat? Sequi dignissimos ea reprehenderit.</div>
                    <div className="cSecy">Hello World</div>
                </div>
            </div>
        </>
    )
}

export default ClubElem