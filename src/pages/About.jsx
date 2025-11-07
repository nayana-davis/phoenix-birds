import React from "react";
import "animate.css";
import team1 from "../assets/smile3.jpg";
import team2 from "../assets/smile3.jpg";

const About = () => {
  return (
    <section className="about-page py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5 animate__animated animate__fadeInDown">
          About Phoenix Birds
        </h2>
        <p className="lead animate__animated animate__fadeInUp">
          Mind Glow Solutions presents Phoenix Birds, an initiative to bring happiness to those who feel lonely or forgotten. We celebrate birthdays, anniversaries, and special moments with empathy, love, and joy.
        </p>
        <h3 className="mt-5 mb-4 animate__animated animate__fadeInUp">Our Mission & Vision</h3>
        <p className="animate__animated animate__fadeInUp">
          Our mission is to ensure no one feels alone on their special day. We envision a world where everyone is remembered, loved, and celebrated.
        </p>
        <h3 className="mt-5 mb-4 animate__animated animate__fadeInUp">Meet Our Team</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow animate__animated animate__fadeInLeft">
              <img src={team1} className="card-img-top" alt="Team Member"/>
              <div className="card-body">
                <h5 className="fw-bold">Anita M.</h5>
                <p>Founder & CEO - Passionate about spreading happiness.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow animate__animated animate__fadeInRight">
              <img src={team2} className="card-img-top" alt="Team Member"/>
              <div className="card-body">
                <h5 className="fw-bold">Joseph K.</h5>
                <p>Co-Founder - Dedicated to bringing smiles and joy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
