import "./About.css";
import teamworking from "../assets/teamworking.jpeg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            GFX Construction is a family‑run contractor serving the local
            community with over 20 years of experience in home improvement and
            general contracting. Our goal is simple: deliver reliable work,
            honest communication, and results homeowners can trust.
          </p>
          <p>
            From roofing and siding to kitchens, bathrooms, and storm repairs,
            we take pride in helping homeowners protect and improve their
            property. Every project is handled with attention to detail and a
            commitment to quality craftsmanship.
          </p>
        </div>

        <div className="about-image">
          <img
            src={teamworking}
            alt="GFX Construction team working on a home"
          />
        </div>
      </div>
    </section>
  );
}
