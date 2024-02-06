import React, { useState } from "react";
import rentals from "../../rentals.json";

const List = () => {
  const [list, setList] = useState(rentals.results);
  let deleteBtn = (elemid) => {
    let newList = list.filter((elem) => {
      return elem.id !== elemid;
    });
    setList(newList);
  };

  let mappedList = list.map((elem) => {
    return (
      <div key={elem.id} className="listContainer">
        <p>{elem.country}</p>
        <p>{elem.city}</p>
        {elem.neighbourhood && <p>{elem.neighbourhood}</p>}
        <p>accommodates: {elem.accommodates}</p>
        <p>{elem.price} $/day</p>
        <button
          onClick={() => {
            deleteBtn(elem.id);
          }}
        >
          delete
        </button>
        <div className="imgContainer">
          <img src={elem.picture_url.url} alt="productImg" />
        </div>
      </div>
    );
  });
  return mappedList;
};

export default List;
