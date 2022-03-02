import { motion } from "framer-motion";

export const GlowingLetters = ({ word }) => {
    const wordArr = word.split("");

    const transition = {
        ease: [1.5, 0.5, 0.5, 2.9]
    }

    const animateWord = {
        animate: i => ({
            transition: {
                staggerChildren: 0.1,
            }
        })
    }

    const animateLetter = {
    initial: { y: "120%" },
    animate: {
        textShadow: "0 0 8px #FFFFFF",
        transition: {
            ...transition,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
        }
    }
}
return (
<motion.h1 variants={animateWord} initial="initial" animate="animate" className="mt-5">
    {wordArr.map((letter, index) => (
    <motion.span key={index} variants={animateLetter}>
        {letter}
    </motion.span>
    ))}
</motion.h1>
);
};