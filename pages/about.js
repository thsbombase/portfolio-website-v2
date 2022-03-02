/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { motion } from "framer-motion"
import { WavingHand } from "../components/WavingHand";

export default function Main() {
  const name = "Tristan Harvey Bombase";
  const nameArr = name.split("");

  const transition = {
    ease: [1.5, 0.5, 0.5, 2.9]
  }

  const animateName = {
    animate: i => ({
      transition: {
        staggerChildren: 0.1,
      }
    })
  }

  const animateLetter = {
    initial: { opacity: 0, y: "120%" },
    animate: { 
        opacity: 1, y: 0,
        transition: {
          ...transition 
      }
    }
}
return (
<section className="container-fluid text-white p-5 mt-5">
  <div className="row">
    <motion.div 
      className="col-sm-5 align-items-center" 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          >
      <Image src="/img/myPicture.svg" alt="Picture of the author" width={500} height={500} priority={true}/>
    </motion.div>
    <div className="col-sm-7 p-5 align-items-center" >
      <motion.div 
      className="fs-5 mt-5"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3 }}
      >
        Hi There!<WavingHand/> I'm
      </motion.div>
      <motion.h1 
        variants={animateName}
        whileHover={{
          scale: 1,
          textShadow: "0 0 10px #FFFFFF"
        }}
        initial="initial"
        animate="animate"
        className="mt-5"
      >
            {nameArr.map((letter, index) => (
            <motion.span
              key={index}
              variants={animateLetter}
            >
              {letter}
            </motion.span>
            ))}
      </motion.h1>
      <motion.p 
      className="fs-4 mt-5"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.4 }}
      >
        I'm currently pursuing a Bachelor's degree in Information Technology at New Era University and interning at
        PocketDevs as a Web Developer.
      </motion.p>
      <div className="mt-4">
        <motion.div 
        className="row" 
        style={{width: "12rem"}}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5 }} 
        >
          <motion.div 
            className="col"
            whileHover={{ scale: 1.3}} 
            whileTap={{ scale: 0.95 }}
            >
              <a href="https://www.facebook.com/TanTannnnnnnn/" className="link-light" target="blank">
                <i className="bi bi-facebook fs-3"></i>
              </a>
          </motion.div>
          <motion.div 
            className="col"
            whileHover={{ scale: 1.3 }} 
            whileTap={{ scale: 0.95 }}
            >
              <a href="https://www.linkedin.com/in/tristanharveybombase/" className="link-light" target="blank"><i
                  className="bi bi-linkedin fs-3"></i></a>
          </motion.div>
          <motion.div 
            className="col"
            whileHover={{ scale: 1.3 }} 
            whileTap={{ scale: 0.95 }}
          >
              <a href="https://github.com/thsbombase" className="link-light" target="blank">
                <i className="bi bi-github fs-3"></i></a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
)
}