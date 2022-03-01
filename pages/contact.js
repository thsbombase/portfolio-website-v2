
export default function Contact() {

return (
    <>
    <div className="wrapper rounded d-flex align-items-stretch text-black">
    <div className="bg-yellow">
        <div className="text-white"> <span className="bi bi-envelope"></span> </div>
        <div className="pt-5 cursive"></div>
        <div className="pt-sm-5 pt-5 cursive mt-sm-5"> </div>
    </div>
    <div className="contact-form">
        <div className="h3">Message Me</div>
        <form action="mailto:tristan.bombase13@gmail.com"
        method="POST"
        encType="multipart/form-data"
        name="EmailForm">
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name" className="text-black">Your Name</label> <input type="text" name="Contact-Name" className="form-control" required/> </div>
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name" className="text-black"> Your Email</label> <input type="email" name="Contact-Email" className="form-control" required/> </div>
            </div>
            <div className="form-group pt-3"> <label htmlFor="message" className="text-black">Message</label> <textarea name="Contact-Message" className="form-control" required></textarea> </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between mt-5">
                <button type="submit" className="btn btn-primary">Submit</button> 
            </div>
        </form>
    </div>
</div> 
</>
)
}