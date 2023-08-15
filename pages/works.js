/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faLaravel,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { GlowingLetters } from "../components/GlowingLetters";
import { motion } from "framer-motion";
export default function Works() {
  return (
    <section
      className="container content-section"
      style={{ marginTop: "6.5rem" }}
      id="portfolio"
    >
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
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <GlowingLetters word="Works" />
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
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="https://pimanpu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Piman Pu</div>
                  <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                  </span>
                  <span
                    className="badge rounded-pill bg- mx-1 "
                    style={{ backgroundColor: "#6b2fcc" }}
                  >
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/pimanpu.png"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="https://studiomoodism.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">Studiomoodism</div>
                  <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                  </span>
                  <span
                    className="badge rounded-pill bg- mx-1 "
                    style={{ backgroundColor: "#6b2fcc" }}
                  >
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/studiomoodism.png"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="https://spaceliftmnl.com/residential/architecture"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">
                    Space Lift MNL (Residential Architecture)
                  </div>
                  <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                  </span>
                  <span
                    className="badge rounded-pill bg- mx-1 "
                    style={{ backgroundColor: "#6b2fcc" }}
                  >
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/spacelift.png"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="https://uapganational.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">UAPGA National</div>
                  <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                  </span>
                  <span
                    className="badge rounded-pill bg- mx-1 "
                    style={{ backgroundColor: "#6b2fcc" }}
                  >
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/uapga.png"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="http://www.likealokal.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content">
                  <div className="h2">LIKEALOKAL</div>
                  <span className="badge rounded-pill bg-danger">
                    <FontAwesomeIcon icon={faLaravel} /> Laravel
                  </span>
                  <span
                    className="badge rounded-pill bg- mx-1 "
                    style={{ backgroundColor: "#6b2fcc" }}
                  >
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap 5
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/likealokal.png"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <a
              className="portfolio-item"
              href="https://neumeet-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="caption">
                <div className="caption-content ">
                  <div className="h2">NEUnite (Capstone Project)</div>
                  <span className="badge rounded-pill bg-primary">
                    <FontAwesomeIcon icon={faReact} /> React.js
                  </span>
                  <span className="badge rounded-pill bg-success mx-1 ">
                    <FontAwesomeIcon icon={faNodeJs} /> Node.js
                  </span>
                </div>
              </div>
              <Image
                className="img-fluid"
                src="/img/portfolio-1.svg"
                alt="..."
                width={700}
                height={500}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
