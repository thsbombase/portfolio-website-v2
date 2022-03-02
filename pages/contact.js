import { motion } from "framer-motion";
export default function Contact() {

return (

<div className="wrapper rounded d-flex align-items-stretch text-black">
    <div className="bg-purple pt-5">
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}>
            <a href="mailto:thbombase@gmail.com" className="link-light" target="blank">
                <i className="bi bi-envelope-fill fs-3"></i>
            </a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}>
            <a href="https://www.facebook.com/TanTannnnnnnn/" className="link-light" target="blank">
                <i className="bi bi-facebook fs-3"></i>
            </a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}>
            <motion.a href="https://www.linkedin.com/in/tristanharveybombase/" className="link-light" target="blank"><i
                    className="bi bi-linkedin fs-3"></i></motion.a>
        </motion.div>
        <motion.div className="my-5 ms-3" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}>
            <a href="https://github.com/thsbombase" className="link-light" target="blank">
                <i className="bi bi-github fs-3"></i></a>
        </motion.div>

    </div>
    <div className="contact-form">
        <div className="h3">Message</div>
        <form action="mailto:tristan.bombase13@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm">
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name" className="text-black">Your Name</label>
                    <input type="text" name="Contact-Name" className="form-control" required /> </div>
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name" className="text-black"> Your
                        Email</label> <input type="email" name="Contact-Email" className="form-control" required />
                </div>
            </div>
            <div className="form-group pt-3"> <label htmlFor="message" className="text-black">Message</label> <textarea
                    name="Contact-Message" className="form-control" required></textarea> </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between mt-5">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</div>

)
}