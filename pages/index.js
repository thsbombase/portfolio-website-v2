/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
export default function Main() {
return (
<section className="container-fluid text-white p-5 mt-5">
  <div className="row">
    <div className="col-sm-5 align-items-center">
      <Image src="/img/myPicture.svg" alt="Picture of the author" width={500} height={500} />
    </div>
    <div className="col-sm-7 p-5 align-items-center">
      <p className="fs-5 mt-5">
        Hi There!👋 I'm
      </p>
      <h1 className="mt-2">
        Tristan Harvey Bombase
      </h1>
      <p className="fs-4 mt-4">
        I'm currently pursuing a Bachelor's degree in Information Technology at New Era University and interning at
        PocketDevs as a Web Developer.
      </p>
      <div className="mt-4">
        <a href="https://www.facebook.com/TanTannnnnnnn/" className="link-light" target="blank"><i
            className="bi bi-facebook fs-3  me-4" ></i></a>
        <a href="https://www.linkedin.com/in/tristanharveybombase/" className="link-light" target="blank"><i
            className="bi bi-linkedin fs-3 me-4"></i></a>
        <a href="https://github.com/thsbombase" className="link-light" target="blank"> 
        <i className="bi bi-github fs-3 me-4"></i></a>
      </div>
    </div>
  </div>
</section>
)
}