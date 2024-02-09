import { Link } from "react-router-dom";

let Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <section>Icons here</section>
    </footer>
  );
};
export default Footer;
