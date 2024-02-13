import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Next from "../assets/img/Right.png";
import Prev from "../assets/img/Left.png";
import Star from "../assets/img/Star.png";


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

  const navigate = useNavigate();

  return (
    <div className="topChoice">
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
              borderBottom: "2px solid #011627",
            }}
          >
            <div>
              <img
                src={elem.picture_url.url}
                onClick={() => {
                  navigate(`/details/${elem.id}`);
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                  cursor: "pointer"
                }}
                alt="product"
              />
              <div style={{ textAlign: "center", fontSize: "20px" }}>
                <p>{elem.name}</p>
                <p>
                  {elem.country}, {elem.city}
                </p>
                <img src={Star} className="icon" alt="icon" />
                <img src={Star} className="icon" alt="icon" />
                <img src={Star} className="icon" alt="icon" />
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <p>{elem.review_scores_rating} </p><p style={{ color: "rgba(19, 18, 18, 0.603)" }}>  / 100</p></div>
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
