/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Particles from "react-tsparticles"
import { AnimatePresence,motion, useCycle } from "framer-motion"
import {useRouter} from 'next/router';
import { MenuToggle } from "../components/Navigation/Toggle"
import { Navigation } from "../components/Navigation/Navigation"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const currentURL = router.pathname

  const [isOpen, toggleOpen] = useCycle(false,true);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
      }
    }
  };

  return (
    <>
        {currentURL !== '/'?
        <div className="h-100">
          <Head>
            <title>Tristan Bombase</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}>
            <motion.nav 
              initial={false} 
              animate={ isOpen ? "open" : "closed" } 
              custom="100%">
              <motion.div className="navbar" variants={sidebar} />
                <div className={isOpen ? "" : "d-none" }>
                  <Navigation />
                </div>
              <MenuToggle toggle={()=> toggleOpen()} />
            </motion.nav>
          </motion.div>
          <div className="container text-white h-100">
            <Component {...pageProps} />
          </div>
        </div>
        :
        <>
        <Component {...pageProps} />
        </>
      }
        <Particles url="/particles.json" />
    </>
    )
}

export default MyApp