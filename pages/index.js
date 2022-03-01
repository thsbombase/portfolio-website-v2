/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/img/logo.svg'
export default function Home() {
return (
    <Link href="/about">
    <a >
    <div className='position-relative vw-100 vh-100 text-white'>
    <Head>
      <title>Tristan Bombase</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='position-absolute top-0 start-0 m-5'>

    </div>
    <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-lg-25 w-xs-50">
        <Image
          alt="Mountains"
          src={logo}
          layout="responsive"
        />
      <p  className='fs-5 px-4 my-5' >Tap to Continue</p>
    </div>
  </div>
  </a>
</Link>
)
}