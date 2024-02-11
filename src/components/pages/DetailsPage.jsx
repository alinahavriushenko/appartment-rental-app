import { useParams } from "react-router-dom";
import { newRentals } from "./Home";

import UserImg from "../../assets/img/Host-1.png";
import Apartment from "../../assets/img/Apartment.png";
import People from "../../assets/img/People.svg";
import Bedrooms from "../../assets/img/bed-double.svg";
import Bathrooms from "../../assets/img/bathtub.svg";
import Neighbourhood from "../../assets/img/Location.png";
import Star from "../../assets/img/Star.png";

let DetailsPage = () => {
  const { productId } = useParams();

  let currentProduct = newRentals.find((elem) => {
    return elem.id == productId;
  });

  return (
    <div className="detailsPageContainer">
      <div className="topSection">
        {currentProduct.picture_url.url && (
          <div className="detailsImageContainer">
            <img src={currentProduct.picture_url.url} alt="product-image" />
          </div>
        )}
        <section className="topSectionInformation">
          <section className="rowContainer title">
            <h1>{currentProduct.name}</h1>

            {currentProduct.review_scores_rating && (
              <div className="rowContainer">
                <img src={Star} className="icon star" alt="icon" /> <p>{currentProduct.review_scores_rating}</p>
              </div>
            )}
          </section>
          <section>
            <div className="rowContainer">
              <img src={Neighbourhood} className="icon" alt="icon" />
              {currentProduct.neighbourhood && <p>{currentProduct.neighbourhood},</p>}
              <p>{currentProduct.city},</p>
              <p>{currentProduct.country}</p>
            </div>
          </section>
          <div className="productInfoContainer">
            <section className="lowerSection">
              <section>
                <img src={Apartment} className="icon" alt="icon"></img>
                <p>{currentProduct.property_type}</p>
                <img src={People} className="icon" alt="icon"></img>
                <p>{currentProduct.accommodates} people</p>
                <img src={Bedrooms} className="icon" alt="icon"></img>
                <p>{currentProduct.bedrooms} bedrooms</p>
                <img src={Bathrooms} className="icon" alt="icon"></img>
                <p>{parseInt(currentProduct.bathrooms)} bathrooms</p>
              </section>
              <section className="priceSection">
                <h2 className="price">{currentProduct.price} $ / night</h2>
                <p> + cleaning fee: ${currentProduct.cleaning_fee}</p>
                <p> cancellation policy: {currentProduct.cancellation_policy}</p>
              </section>
              <div className="hostCard">
                <section className="hostImgContainer">
                  <img src={UserImg} />
                </section>
                <section className="hostInfo">
                  <p>Host: {currentProduct.host_name}</p>
                  <p>Host since: {currentProduct.host_since}</p>
                  <p>Host response time: {currentProduct.host_response_time}</p>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>

      <section className="productFullDescription">
        <div>
          <h2>Description:</h2>
          <p>{currentProduct.description}</p>
        </div>
        <div>
          <h2>House Rules:</h2>
          <p>{currentProduct.house_rules}</p>
        </div>
      </section>
    </div>
  );
};
export default DetailsPage;
