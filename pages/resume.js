import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faPy } from '@fortawesome/free-solid-svg-icons';
import {
        faReact,
        faPython,
        faLaravel,
        faBootstrap,
        faGitAlt
    }from "@fortawesome/free-brands-svg-icons";
import { GlowingLetters } from "../components/GlowingLetters";
import Image from "next/image"
import { motion } from 'framer-motion';

export default function Experience() {

return (

<div className='container mt-5 '>
    <br />
    <motion.div
        className='mt-3 mb-5 text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
        }}>
        <GlowingLetters word="Experience"/>
    </motion.div>
    <VerticalTimeline>
    <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="June 2022 - Present"
    icon={<FontAwesomeIcon icon={faBriefcase} />}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Quickway Holdings Inc.</h4>
    <p>
        <span className="badge rounded-pill bg-danger">
                <FontAwesomeIcon icon={faLaravel} /> Laravel
            </span> 
            <span className="badge rounded-pill mx-1 bg-primary">
                <FontAwesomeIcon icon={faGitAlt} /> ReactJS
            </span>
            <span className="badge rounded-pill mx-1" style={{backgroundColor:"#6b2fcc"}}>
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
            </span> 
            <span className="badge rounded-pill mx-1 bg-dark">
                <FontAwesomeIcon icon={faGitAlt} /> Git
            </span>
    </p>
    </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="May 2022 - March 2023"
        icon={<FontAwesomeIcon icon={faBriefcase} />}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
        <h3 className="vertical-timeline-element-title">Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">PocketDevs</h4>
        <p>
            <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                </span> 
                <span className="badge rounded-pill mx-1" style={{backgroundColor:"#6b2fcc"}}>
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                </span> 
                <span className="badge rounded-pill mx-1 bg-dark">
                    <FontAwesomeIcon icon={faGitAlt} /> Git
                </span>
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="January 2022 - May 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PocketDevs</h4>
            <p>
                <span className="badge rounded-pill bg-danger">
                        <FontAwesomeIcon icon={faLaravel} /> Laravel
                    </span> 
                    <span className="badge rounded-pill mx-1" style={{backgroundColor:"#6b2fcc"}}>
                        <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                    </span> 
                    <span className="badge rounded-pill mx-1 bg-dark">
                        <FontAwesomeIcon icon={faGitAlt} /> Git
                    </span>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="September 2020 - January 2021"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">RightValley</h4>
        <p>
            <span className="badge rounded-pill bg-success">
                <FontAwesomeIcon icon={faPython} /> Django
            </span> 
            <span className="badge rounded-pill bg-primary mx-1">
                <FontAwesomeIcon
                    icon={faReact}
                    /> React.js
            </span>
            <span className="badge rounded-pill mx-1" style={{backgroundColor:"#0c2237"}}>
                    Tailwind CSS
            </span> 
            <span className="badge rounded-pill mx-1 bg-dark">
                <FontAwesomeIcon icon={faGitAlt} /> Git
            </span>
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>

    <div className="container mt-5 text-center mb-5">
        <br />
        <motion.div 
            className="text-center my-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}>
            <GlowingLetters word="Technology Stack"/>
        </motion.div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                        <p className="card-text"><Image src="/img/php.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/javascript.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/laravel.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/react.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/nextjs.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/html.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                    <div className="card-body">
                    <p className="card-text"><Image src="/img/css.svg" alt="..." width={100} height={100} priority={true}/></p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</div>
)
}