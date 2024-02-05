let Header = () => {
  return (
    <>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <h1>Logo Image</h1>
      <form
        onSubmit={() => {
          location.href("#");
        }}
      >
        <label>search</label>
        <input type="text"></input>
      </form>
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
