import pandaNotFound from "../../assets/img/panda-404.png";
let NotFound = () => {
  return (
    <>
      <div
        className="notFoundContainer"
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "20px",
        }}
      >
        <div
          className="notFoundImgContainer"
          style={{
            height: "90%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img src={pandaNotFound} style={{ borderRadius: "40px" }}></img>
        </div>
      </div>
    </>
  );
};
export default NotFound;
