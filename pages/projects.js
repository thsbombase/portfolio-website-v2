/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
export default function Projects() {
return (
    <section className="content-section mt-5" id="portfolio">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="content-section-heading text-center">
            <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row gx-0">
            <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                    <div className="caption">
                        <div className="caption-content">
                            <div className="h2">Stationary</div>
                            <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-1.jpg" alt="..." width={700} height={500} />
                </a>
            </div>
            <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                    <div className="caption">
                        <div className="caption-content">
                            <div className="h2">Ice Cream</div>
                            <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-2.jpg" alt="..." width={700} height={500}/>
                </a>
            </div>
            <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                    <div className="caption">
                        <div className="caption-content">
                            <div className="h2">Strawberries</div>
                            <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-3.jpg" alt="..." width={700} height={500} />
                </a>
            </div>
            <div className="col-lg-6">
                <a className="portfolio-item" href="#!">
                    <div className="caption">
                        <div className="caption-content">
                            <div className="h2">Workspace</div>
                            <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                        </div>
                    </div>
                    <Image className="img-fluid" src="/img/portfolio-4.jpg" alt="..." width={700} height={500} />
                </a>
            </div>
        </div>
    </div>
</section>
)
}