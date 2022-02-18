/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Particles from "react-tsparticles"
import Image from 'next/image'
import logo from '../public/logo.svg'
import Soundbar from '../components/Soundbar'

export default function Home() {
return (
  <div className='position-relative vw-100 vh-100 text-white'>
    <Head>
      <title>Tristan Bombase</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='position-absolute top-0 start-0 m-5'>
      <Soundbar/>
    </div>
    <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-lg-25 w-xs-50">
        <Image
          alt="Mountains"
          src={logo}
          layout="responsive"
        />
      <a href="#" className='btn btn-outline-light fs-1 px-4 my-5 letter-space ff-1 fw-bold' >Start</a>
      
    </div>

    <Particles url="/particles.json" />
  </div>

  )
}