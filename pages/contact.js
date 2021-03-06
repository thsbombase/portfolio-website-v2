import { motion } from "framer-motion";
import { GlowingLetters } from "../components/GlowingLetters";

export default function Contact() {

return (

<motion.div 
    className="wrapper rounded d-flex align-items-stretch text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.3 }}
    variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
    }}>
    <div className="bg-purple pt-5">
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.9 }}>
            <a href="mailto:thbombase@gmail.com" className="link-light" target="blank">
                <i className="bi bi-envelope-fill fs-3"></i>
            </a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}>
            <a href="https://www.facebook.com/TanTannnnnnnn/" className="link-light" target="blank">
                <i className="bi bi-facebook fs-3"></i>
            </a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}>
            <motion.a href="https://www.linkedin.com/in/tristanharveybombase/" className="link-light" target="blank"><i
                    className="bi bi-linkedin fs-3"></i></motion.a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}>
            <a href="https://github.com/thsbombase" className="link-light" target="blank">
                <i className="bi bi-github fs-3"></i></a>
        </motion.div>

    </div>
    <div className="contact-form text-white">
        <div ><GlowingLetters word="Contact Me"/></div>
        <form action="mailto:tristan.bombase13@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm">
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name" >Your Name</label>
                    <input type="text" name="Contact-Name" className="form-control" required /> </div>
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name"> Your
                        Email</label> <input type="email" name="Contact-Email" className="form-control" required />
                </div>
            </div>
            <div className="form-group pt-3"> <label htmlFor="message" >Message</label> <textarea
                    name="Contact-Message" className="form-control" required></textarea> </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between mt-5">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</motion.div>

)
}