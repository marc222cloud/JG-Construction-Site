

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import generalHero from "../assets/general.png";
import "./General.css";

export default function General() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={generalHero}
            alt="General contracting interior renovation project"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>General Contracting</h1>
            <p>
              Full-service construction backed by over 20 years of hands-on
              experience.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="General Contracting" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Best Local Contractors</h2>
          <p>
            Whether you’re planning a home addition, renovation, or new
            construction project, J&amp;G Construction provides dependable
            general contracting services backed by over 20 years of experience.
            We manage every phase of your project with clear communication,
            skilled craftsmanship, and attention to detail.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}