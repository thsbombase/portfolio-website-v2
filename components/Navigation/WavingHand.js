import { motion } from "framer-motion";

export const WavingHand  = () => (
    <motion.div
        style={{
            marginBottom: '-20px',
            marginRight: '-45px',
            paddingBottom: '20px',
            paddingRight: '45px',
            display: 'inline-block',
            }}
        animate={{ rotate: 20 }}
        transition={{
            yoyo: Infinity,
            from: 0,
            duration: 0.2,
            ease: 'easeInOut',
            type: 'tween',
        }}
    >
    👋
    </motion.div>
);

