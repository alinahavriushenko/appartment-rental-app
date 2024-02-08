import { useParams } from "react-router-dom";
import UserImg from "../../assets/img/User.png";
import { newRentals } from "./Home";
let DetailsPage = () => {
  const { productId } = useParams();
  let currentProduct = newRentals.find((elem) => {
    return elem.id == productId;
  });

  return (
    <div className="detailsPageContainer">
      {currentProduct.picture_url.url && (
        <div className="detailsImageContainer">
          <img src={currentProduct.picture_url.url} alt="product-image" />
        </div>
      )}

      <div className="productInfoContainer">
        <div className="topSection">
          <section>
            <p>{currentProduct.name}</p>
            <p>{currentProduct.city}</p>
            <p>{currentProduct.country}</p>
            {currentProduct.neighbourhood && (
              <p>{currentProduct.neighbourhood}</p>
            )}
          </section>
          <section>
            {currentProduct.review_scores_rating && (
              <p>Rating: {currentProduct.review_scores_rating}</p>
            )}
          </section>
        </div>
        <section className="lowerSection">
          <section style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>property_type: {currentProduct.property_type}</p>
            <p>accommodates: {currentProduct.accommodates}</p>
            <p>bedrooms: {currentProduct.bedrooms}</p>
            <p>bathrooms: {parseInt(currentProduct.bathrooms)}</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>price: {currentProduct.price} $ / night</p>
            <p>cleaning_fee: {currentProduct.cleaning_fee}</p>
            <p>cancellation_policy: {currentProduct.cancellation_policy}</p>
          </section>
        </section>
        <hr />
      </div>
      <section className="productFullDescription">
        <p>{currentProduct.space}</p>
        <hr />
        <p>{currentProduct.description}</p>
        <hr />

        <p>{currentProduct.house_rules}</p>
      </section>
      <section className="hostCard">
        <section className="hostImgContainer">
          <img src={UserImg} />
        </section>
        <section className="hostInfo">
          <p>Host: {currentProduct.host_name}</p>
          <p>host_since{currentProduct.host_since}</p>
          <p>host_response_time {currentProduct.host_response_time}</p>
        </section>
      </section>
    </div>
  );
};
export default DetailsPage;
