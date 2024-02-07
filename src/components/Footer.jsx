import { Link } from "react-router-dom";

let Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <section>Icons here</section>
      {/* <a href="#">Home</a>
      <br></br>
      <a href="#">About</a>
      <br></br>
      <a href="#">Contact</a>
      <br></br>
      <a href="#">Social Media</a>
      <br></br>
      <a href="#">FAQ</a> */}
    </footer>
  );
};
export default Footer;
