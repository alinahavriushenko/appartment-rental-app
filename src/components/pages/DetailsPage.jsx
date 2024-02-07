import { useParams } from "react-router-dom";
import rentals from "../../../rentals.json";
let DetailsPage = () => {
  const { productId } = useParams();
  let currentProduct = rentals.results.find((elem) => {
    return elem.id == productId;
  });

  return (
    <div className="detailsPageContainer">
      <h1>{currentProduct.country}</h1>
      <h2>{currentProduct.city}</h2>
      <div>
        <img src={currentProduct.picture_url.url} alt="product-image" />
      </div>
    </div>
  );
};
export default DetailsPage;
