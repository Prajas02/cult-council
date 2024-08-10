import { AnimatePresence, motion, useTransform} from 'framer-motion'
import './Clubs.css'

function ClubElem({ scrollYProgress,index, backImg,}) {

    const scaleA = useTransform(scrollYProgress , [index,index + 0.5] , [1,0.8])
    const rotateA = useTransform(scrollYProgress , [index, index + 0.5] , [0 , -5])

    const scaleB = useTransform(scrollYProgress , [index, index+0.5] , [0.8,1])
    const rotateB = useTransform(scrollYProgress , [index, index+0.5] , [-5 , 0])

    // the scrolly will give a value between 0 and 1

    return (
        <motion.div 
            className='all-container'
            style={
                {scale: scrollYProgress < index ? scaleB : scaleA, 
                rotate: scrollYProgress < index ? rotateB : rotateA
            }}>
            <div className="container"
            style={{ backgroundImage: `url(${backImg})`}} 
            initial={{opacity: 1}}
            animate={{opacity: 0.2}}></div>

            <div className="focus">
                <AnimatePresence>
                    <motion.div
                        className="card-container"
                    >
                        <motion.div className="pCards card-1"></motion.div>
                        <motion.div className="pCards card-2"></motion.div>
                        <motion.div className="pCards card-3"></motion.div>
                        <motion.div className="pCards card-4"></motion.div>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    <motion.div
                        className="club-text">
                        <div className="cTitle">16 Pixels</div>
                        <div className="cTagline">“Click a button, capture the world around in your digital world.”</div>
                        <div className="cDesc">“16 Pixels”, the photography club at IITGN, captures every precious moment and shares it with the IITGN community. IITGN folks are also allowed to pursue their interest in photography. Numerous events, workshops and competitions are conducted to encourage students to learn and build professional photography skills.</div>
                        <div className="cSecy"><strong><i>Club Seceratry:-</i></strong> Chandrabhan Patel</div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default ClubElem