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
export default function Works() {
return (
    <section className="container content-section" style={{marginTop:"6.5rem"}} id="portfolio">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="content-section-heading text-center">
            <div className="mb-5"><GlowingLetters word="Works"/></div>
        </div>
        <div className="row gx-0">
            <div className="col-lg-6">
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
            </div>
            <div className="col-lg-6">
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
            </div>
        </div>
    </div>
</section>
)
}