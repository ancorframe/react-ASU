
import { motion } from 'framer-motion';
export const MotionWrap = (props) => {
    return<motion.div 
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.1 } }} {...props} />
}