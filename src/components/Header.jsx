let Header = () => {
  return (
    <>
      <div className="topSection">
        <h1>Logo Image</h1>
        <button>Login</button>
        <button>Sign Up</button>
      </div>

      <div className="navContainer">
        <nav className="nav-bar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className="searchFormContainer">
        <form
          className="searchForm"
          onSubmit={() => {
            location.href("#");
          }}
        >
          <label>search</label>
          <input type="text"></input>
          <button type="submit">submit</button>
        </form>
      </div>
      {/* <form
        onSubmit={() => {
          location.href("#");
        }}
      >
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
      </form> */}
    </>
  );
};
export default Header;
