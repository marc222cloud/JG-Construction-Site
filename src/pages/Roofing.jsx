

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import roofingHero from "../assets/roofing.jpg";
import roofingDetail from "../assets/roof2.jpg";
import "./Roofing.css";

export default function Roofing() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={roofingHero}
            alt="Residential asphalt shingle roof"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>Roofing</h1>
            <p>
              Reliable roofing solutions built to protect your home year after
              year.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Roofing" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Roofing Repair and Installation</h2>
          <p>
            From small repairs to full roof replacements, we provide durable,
            high-quality roofing services designed to protect your home through
            every season. Our team focuses on dependable workmanship, clean
            installation, and results built to last.
          </p>
        </div>
      </section>

      <section className="service-detail">
        <div className="service-detail__container">
          <div className="service-detail__image-wrap">
            <img
              src={roofingDetail}
              alt="Residential asphalt shingle roof"
              className="service-detail__image"
            />

            <div className="service-detail__card">
              <h3>Your Local Go-To Roofers</h3>
              <p>
                Backed by over 20 years of industry experience, our team understands
                what it takes to build and maintain a dependable roofing system. We
                assess your roof thoroughly, provide honest recommendations, and
                complete every job with clean, professional results that stand the
                test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}