import { AnimatePresence, motion, useTransform} from 'framer-motion'
import './Clubs.css'

const cardVar = {
    initial: { x: "-50vw" },
    visible: { x: 0 },
    exit: { x: "-50vw" }
}

const textVar = {
    initial: { x: "100vw" },
    visible: { x: 0 },
    exit: { x: "100vw" }
}

function ClubElem({ scrollYProgress,index }) {

    console.log(scrollYProgress)
    const scaleA = useTransform(scrollYProgress , [index,index + 0.5] , [1,0.8])
    const rotateA = useTransform(scrollYProgress , [index, index + 0.5] , [0 , -5])

    const scaleB = useTransform(scrollYProgress , [index, index+0.5] , [0.8,1])
    const rotateB = useTransform(scrollYProgress , [index, index+0.5] , [-5 , 0])

    return (
        <motion.div 
            className='all-container'
            style={
                {scale: scrollYProgress < index ? scaleB : scaleA, 
                rotate: scrollYProgress < index ? rotateA : rotateA
            }}>
            <div className="container"></div>

            <div className="focus">
                <AnimatePresence>
                    <motion.div
                        className="card-container"
                    >
                        <motion.div className="cards card-1"></motion.div>
                        <motion.div className="cards card-2"></motion.div>
                        <motion.div className="cards card-3"></motion.div>
                        <motion.div className="cards card-4"></motion.div>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    <motion.div
                        className="club-text">
                        <div className="cTitle">XYZ</div>
                        <div className="cDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil ipsam facilis suscipit tempora deserunt magni molestias, eos eum obcaecati sequi ullam fugit, adipisci libero repellat? Sequi dignissimos ea reprehenderit.</div>
                        <div className="cSecy">Hello World</div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default ClubElem