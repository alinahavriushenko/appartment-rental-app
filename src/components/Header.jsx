import { Link } from "react-router-dom";
import { newRentals } from "./pages/Home";
import { useState } from "react";
let Header = () => {
  const [srchName, setSrchName] = useState(" ");
  let handleSearchSubmit = (e) => {
    e.preventDefault();
    newRentals.find((elem) => {
      return elem.city == srchName;
    });
  };

  return (
    <>
      <div className="topSection">
        <h1>Logo Image</h1>
        <button>Login</button>
        <button>Sign Up</button>
      </div>

      <div className="navContainer">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div className="searchFormContainer">
        <form className="searchForm" onSubmit={handleSearchSubmit}>
          <label>search</label>
          <input
            type="text"
            name="srchName"
            onChange={(e) => {
              setSrchName(e.target.value);
            }}
          ></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};
export default Header;
