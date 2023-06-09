import { motion } from 'framer-motion';
export const MotionWrap = (props) => {
    return<motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1, transition: { duration: 0.2 }
        }}
        exit={{
            opacity: 0,
            transition: { duration: 0.15 }
        }} {...props} />
}