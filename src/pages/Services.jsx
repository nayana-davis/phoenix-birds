import React from "react";
import { FaBirthdayCake, FaHeart, FaGift, FaStar } from "react-icons/fa";
import "animate.css";

const Services = () => {
  return (
    <section className="services-page py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-5 animate__animated animate__fadeInDown">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInLeft">
              <FaBirthdayCake size={50} className="text-warning mb-3"/>
              <h5 className="fw-bold">Birthday Celebrations</h5>
              <p>Organizing joyful birthdays for individuals living alone or families separated by distance.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInUp">
              <FaHeart size={50} className="text-danger mb-3"/>
              <h5 className="fw-bold">Anniversary Events</h5>
              <p>Celebrate love and togetherness with beautiful arrangements.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInRight">
              <FaGift size={50} className="text-info mb-3"/>
              <h5 className="fw-bold">Gifts & Surprises</h5>
              <p>Delivering thoughtful gifts and surprises to create smiles.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInLeft">
              <FaStar size={50} className="text-warning mb-3"/>
              <h5 className="fw-bold">Special Day Celebrations</h5>
              <p>Personalized special day celebrations to make moments memorable.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInUp">
              <FaStar size={50} className="text-warning mb-3"/>
              <h5 className="fw-bold">Virtual Celebrations</h5>
              <p>Connect online and celebrate together no matter the distance.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-4 text-center animate__animated animate__fadeInRight">
              <FaStar size={50} className="text-warning mb-3"/>
              <h5 className="fw-bold">Custom Plans</h5>
              <p>Create fully customized celebrations tailored to individual needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
