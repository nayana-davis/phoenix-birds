import React from "react";
import "./home.css";
import "animate.css";
import { FaBirthdayCake, FaHeart, FaStar } from "react-icons/fa";
import smile1 from "../assets/smile3.jpg";
import smile2 from "../assets/smile3.jpg";
import smile3 from "../assets/smile3.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="content animate__animated animate__fadeInUp">
          <h1 className="animate__animated animate__fadeInDown display-3 fw-bold text-warning">
  Welcome to <span className="text-white">Phoenix Birds</span>
</h1>
<p className="lead text-light mt-3 animate__animated animate__fadeInUp">
  <i>No one should feel forgotten on their special day.</i>
</p>
<button className="btn btn-warning btn-lg mt-4 animate__animated animate__pulse animate__infinite">
  Celebrate with Us
</button>
        </div>
      </section>

      {/* Quotes / Emotional Images Section */}
      <section className="quotes-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5 animate__animated animate__fadeInDown">
            Spreading Smiles & Warmth 💛
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0 animate__animated animate__fadeInLeft">
                <img src={smile1} className="card-img-top" alt="Smile" />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>“The best way to find yourself is to lose yourself in the service of others.”</p>
                    <footer className="blockquote-footer mt-2">Mahatma Gandhi</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 animate__animated animate__fadeInUp">
                <img src={smile2} className="card-img-top" alt="Joy" />
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>“Happiness is not something ready made. It comes from your own actions.”</p>
                    <footer className="blockquote-footer mt-2">Dalai Lama</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 animate__animated animate__fadeInRight">
                <img src={smile3} className="card-img-top" alt="Hope" />
                <div className="card-body">
                  <blockquote className="blockquote mb-0 fs-5 fw-semibold ">
                    <p>“A simple act of kindness can change someone’s whole day.”</p>
                    <footer className="blockquote-footer mt-2 text-warning">Unknown</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Services Section */}
      <section className="services-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-5 animate__animated animate__fadeInDown">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0 p-4 animate__animated animate__fadeInLeft">
                <FaBirthdayCake size={50} className="text-warning mb-3" />
                <h5 className="card-title">Birthday Celebrations</h5>
                <p>We organize joyful birthdays for those living alone.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4 animate__animated animate__fadeInUp">
                <FaHeart size={50} className="text-danger mb-3" />
                <h5 className="card-title">Anniversary Events</h5>
                <p>Celebrate love and togetherness with elegant arrangements.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4 animate__animated animate__fadeInRight">
                <FaStar size={50} className="text-warning mb-3" />
                <h5 className="card-title">Special Day Celebrations</h5>
                <p>Surprise and delight with personalized special day events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings / Testimonials Section */}
      <section className="ratings-section py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-5 animate__animated animate__fadeInDown">Our Happy Clients</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow p-4 animate__animated animate__fadeInLeft">
                <img src={smile1} alt="Happy client" className="rounded mb-3" />
                <p className="mb-2">"The celebration made me feel loved and remembered. Amazing service!"</p>
                <div className="text-warning">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <footer className="blockquote-footer mt-2">Anita M.</footer>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow p-4 animate__animated animate__fadeInUp">
                <img src={smile2} alt="Happy client" className="rounded mb-3" />
                <p className="mb-2">"Even though my children are abroad, Phoenix Birds brought happiness to my day."</p>
                <div className="text-warning">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <footer className="blockquote-footer mt-2">Joseph K.</footer>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow p-4 animate__animated animate__fadeInRight">
                <img src={smile3} alt="Happy client" className="rounded mb-3" />
                <p className="mb-2">"Amazing initiative! Every special day feels magical now."</p>
                <div className="text-warning">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <footer className="blockquote-footer mt-2">Leena S.</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center">
        <h2 className="fw-bold mb-4 animate__animated animate__fadeIn">Join Phoenix Birds Today!</h2>
        <a href="/contact" className="btn btn-warning btn-lg animate__animated animate__pulse animate__infinite">Contact Us</a>
      </section>
    </>
  );
};

export default Home;
