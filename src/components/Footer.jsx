import { Link } from "react-router-dom";
import Meta from "../assets/img/meta.png";
import Youtube from "../assets/img/youtube.png";
import Instagram from "../assets/img/instagram.png";

let Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <section className="socials">
        <Link to="/">
          <img src={Meta} alt="meta" className="social" />
        </Link>
        <Link to="/">
          <img src={Youtube} alt="youtube" className="social" />
        </Link>
        <Link to="/">
          <img src={Instagram} alt="instagram" className="social" />
        </Link>
      </section>
    </footer>
  );
};
export default Footer;
