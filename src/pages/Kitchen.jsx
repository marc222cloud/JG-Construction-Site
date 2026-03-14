import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import kitchenHero from "../assets/kitchen.jpg";
import "./Kitchen.css";

export default function Kitchen() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={kitchenHero}
            alt="Modern kitchen remodel with island and cabinetry"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>Kitchen</h1>
            <p>
              Custom kitchen upgrades designed for function, style, and everyday
              living.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Kitchen" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Kitchen Remodeling & Repairs</h2>
          <p>
            Bring your kitchen to life with smart layout upgrades, quality
            craftsmanship, and finishes that feel brand new. Whether you're
            updating cabinets and countertops or planning a full remodel, we
            deliver clean work, clear communication, and results built to last.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
