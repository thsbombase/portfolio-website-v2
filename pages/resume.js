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
export default function Experience() {

return (

<div className='container mt-5 '>
    <br />
    <div className='mt-3 mb-5 text-center'><GlowingLetters word="Experience"/></div>
    <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date="January 2022 - present"
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

    <div className="container mt-5 text-center">
    <div className="text-center my-5"><GlowingLetters word="Technology Stack"/></div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                    <p className="card-text"><Image src="/img/php.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/python.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/javascript.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/laravel.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/django.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/react.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/nextjs.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/html.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card text-white mb-3" style={{backgroundColor: "#172c52"}}>
                <div className="card-body">
                <p className="card-text"><Image src="/img/css.svg" alt="..." width={100} height={100} priority={true}/></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)
}