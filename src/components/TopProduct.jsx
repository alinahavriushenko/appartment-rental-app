import { useState } from "react";
import Next from "../assets/img/Right.png";
import Prev from "../assets/img/Left.png";

const TopProduct = (props) => {
  const itemsToShow = 5;
  const [clickCounter, setClickCounter] = useState(0);
  const topItems = props.list.filter(el => el.review_scores_rating > 90);

  const scrollItems = (direction) => {
    if (direction === "prev" && clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    } else if (direction === "next" && clickCounter < topItems.length - itemsToShow) {
      setClickCounter(clickCounter + 1);
    }
  };

  return (
    <div className="topChoice">
      <h1>Top Choice</h1>
      <div style={{ display: "flex" }}>
        {topItems.slice(clickCounter, clickCounter + itemsToShow).map((elem) => (
          <div
            key={elem.id}
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px",
              borderBottom: "2px solid black",
            }}
          >
            <div>
              <img
                src={elem.picture_url.url}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                }}
                alt="product"
              />
              <div style={{ textAlign: "center" }}>
                <p>{elem.name}</p>
                <p>
                  {elem.country}, {elem.city}
                </p>
                <p>{elem.property_type}</p>
                <p>Bedrooms: {elem.bedrooms}</p>
                <p>Bathrooms: {elem.bathrooms}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <img src={Prev} className="icon arrow" alt="prev" onClick={() => scrollItems("prev")} />
        <img src={Next} className="icon arrow" alt="next" onClick={() => scrollItems("next")} />
      </div>
    </div>
  );
};

export default TopProduct;
