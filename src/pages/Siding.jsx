

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import sidingHero from "../assets/siding.jpg";
import sidingDetail from "../assets/siding1.jpg";
import "./Siding.css";

export default function Siding() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={sidingHero}
            alt="House exterior with new siding"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>Siding</h1>
            <p>
              Durable, low-maintenance siding that enhances and protects your
              home’s exterior.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Siding" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Vinyl Siding Repair and Installation</h2>
          <p>
            Protect and refresh your home with durable vinyl or aluminum siding.
            Whether you need a repair or a full replacement, our team delivers
            clean, professional results built to last.
          </p>
        </div>
      </section>

      <section className="service-detail">
        <div className="service-detail__container">
          <div className="service-detail__image-wrap">
            <img
              src={sidingDetail}
              alt="Close up of vinyl siding"
              className="service-detail__image"
            />

            <div className="service-detail__card">
              <h3>Your Local Siding Installers</h3>
              <p>
                With years of hands-on experience, we help homeowners choose the
                right siding style and materials to match their home and
                budget. Our goal is simple: strong protection, clean finishes,
                and results that last for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}