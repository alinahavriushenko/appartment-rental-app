import React, { useState } from "react";
import rentals from "../../rentals.json";
import { useNavigate } from "react-router-dom";
const List = () => {
  const [list, setList] = useState(rentals.results);
  const navigate = useNavigate();
  let deleteBtn = (elemid) => {
    let newList = list.filter((elem) => {
      return elem.id !== elemid;
    });
    setList(newList);
  };

  let mappedList = list.map((elem) => {
    return (
      <div key={elem.id} className="listContainer">
        <div className="imgContainer">
          <img
            src={elem.picture_url.url}
            alt="productImg"
            onClick={() => {
              navigate(`/details/${elem.id}`);
            }}
          />
        </div>
        <div className="cardText">
          <h3>{elem.name.toUpperCase()}</h3>
          <div className="rowContainer">
            <img src="src/assets/img/Location.png" className="icon" />
            <p>
              {elem.country}, {elem.city}
            </p>
          </div>
          <p>accommodates: {elem.accommodates}</p>
          <p>{elem.price} $ / night</p>

          <img
            onClick={() => {
              deleteBtn(elem.id);
            }}
            src="src/assets/img/Delete.png"
            className="icon delete"
          />
          {/* 🗑️ */}
        </div>
      </div>
    );
  });
  return mappedList;
};

export default List;
