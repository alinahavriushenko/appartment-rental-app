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
      <div className="navContainer">
        <Link to="/">
          <h1>Rent.</h1>
        </Link>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      {/* <div className="searchFormContainer">
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
      </div> */}
    </>
  );
};
export default Header;
