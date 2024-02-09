import { Link } from "react-router-dom";
let About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "90vw",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        <h1>Welcome to Rent.</h1>
        <p>Project Magicians</p>
        <p>
          <span className="aboutInnerP">Pouria & Alina</span>
        </p>
        <p>Description</p>
        <p>
          <span className="aboutInnerP">
            Admin dashboard for the apartment rental platform where the admin
            can see and manage the apartments shown on the platform.
          </span>
        </p>
        <div>
          <span className="aboutInnerP">
            <p>Linkdin</p>
            <Link to="https://www.linkedin.com/in/pouria-pourgoshtasbi-744565246/">
              Pouria Pourgoshtasbi
            </Link>
          </span>
          <span className="aboutInnerP">
            <p>GitHub</p>
            <Link to="https://www.linkedin.com/in/pouria-pourgoshtasbi-744565246/">
              Pouria Pourgoshtasbi
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
