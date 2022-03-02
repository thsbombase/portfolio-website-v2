/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faNodeJs,
    faLaravel,
    faBootstrap
} 
from "@fortawesome/free-brands-svg-icons";
import { GlowingLetters } from "../components/GlowingLetters";
import { motion } from "framer-motion";
export default function Works() {
return (
    <section className="container content-section" style={{marginTop:"6.5rem"}} id="portfolio">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="content-section-heading text-center">
            <motion.div 
                className="mb-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <GlowingLetters word="Works"/>
            </motion.div>
        </div>
        <div className="row gx-0">
            <motion.div 
                className="col-lg-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <a className="portfolio-item" href="https://clientneunite-jmdej.ondigitalocean.app/">
                    <div className="caption">
                        <div className="caption-content ">
                            <div className="h2">NEUnite (Capstone Project)</div>
                            <p className="mb-0">An Exlusive Online Communication Platform for New Era</p>
                            <span className="badge rounded-pill bg-primary">
                                <FontAwesomeIcon
                                icon={faReact}
                                /> React.js
                            </span>
                            <span className="badge rounded-pill bg-success mx-1 ">
                                <FontAwesomeIcon
                                icon={faNodeJs}
                                /> Node.js
                            </span>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-1.svg" alt="..." width={700} height={500} />
                </a>
            </motion.div>
            <motion.div 
                className="col-lg-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <a className="portfolio-item" href="https://hub.pocketdevs.ph/">
                    <div className="caption">
                        <div className="caption-content">
                            <div className="h2">PocketHub</div>
                            <p className="mb-0"></p>
                            <span className="badge rounded-pill bg-danger">
                                <FontAwesomeIcon
                                icon={faLaravel}
                                /> Laravel
                            </span>
                        
                        <span className="badge rounded-pill mx-1" style={{backgroundColor:"#6b2fcc"}}>
                            <FontAwesomeIcon
                            icon={faBootstrap}
                            /> Bootstrap 5
                        </span>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-2.svg" alt="..." width={700} height={500}/>
                </a>
            </motion.div>
        </div>
    </div>
</section>
)
}