import React from "react";
import "animate.css";

const Contact = () => {
  return (
    <section className="contact-page py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5 animate__animated animate__fadeInDown">
          Contact Us
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="animate__animated animate__fadeInUp">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-warning btn-lg w-100">Submit</button>
            </form>
            <p className="mt-4 text-center">
             
             <a href="mailto:antojoy516@gmail.com" style={{ textDecoration: 'none', color: 'orange' }}> Call: 9747956187 | Email: antojoy516@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
