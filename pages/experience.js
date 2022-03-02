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

}
from "@fortawesome/free-brands-svg-icons";
export default function Experience() {

return (

<div className='container mt-5 '>
    <br />
    <h1 className='mt-3 mb-5 text-center'>Experience</h1>
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
</div>
)
}