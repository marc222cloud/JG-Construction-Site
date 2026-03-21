import "./Footer.css";
import logo from "../assets/J&GLogo.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span>J &amp; G</span> Construction
      </div>

      <div className="footer__cols">
        <div>
          <h4>Navigation</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a
            href="https://www.google.com/maps?q=18+6th+St,+Yorkville,+NY+13495"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 6th St, Yorkville, NY 13495
          </a>
          <a href="mailto:Garciajuan4012@gmail.com">Garciajuan4012@gmail.com</a>
          <a href="tel:3159823057">(315) 982-3057</a>
        </div>
      </div>

      {/* Logo on right */}
      <div className="footer__logo">
        <a href="/">
          <img src={logo} alt="J & G Construction logo" />
        </a>
      </div>
    </footer>
  );
}