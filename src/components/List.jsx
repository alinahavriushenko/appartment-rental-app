import { useNavigate } from "react-router-dom";

import Apartment from "../assets/img/apartment.png";
import People from "../assets/img/People.svg";
import Bedrooms from "../assets/img/bed-double.svg";
import Bathrooms from "../assets/img/bathtub.svg";

const List = (props) => {
  const navigate = useNavigate();
  let deleteBtn = (elemid) => {
    let newList = props.list.filter((elem) => {
      return elem.id !== elemid;
    });
    props.setList(newList);
  };

  let mappedList = props.list.map((elem) => {
    return (
      <div key={elem.id} className="listContainer">
        {elem.picture_url.url && (
          <div className="imgContainer">
            <img
              src={elem.picture_url.url}
              alt="productImg"
              onClick={() => {
                navigate(`/details/${elem.id}`);
              }}
            />
          </div>
        )}
        <div className="cardText">
          <h3>{elem.name}</h3>
          <div className="rowContainer">
            <img src="src/assets/img/Location.png" className="icon" />
            <p>
              {elem.country}, {elem.city}
            </p>
          </div>
          <div className="rowContainer">
            <img src={Apartment} className="icon" alt="icon"></img>
            <p>{elem.property_type}</p>
            <img src={People} className="icon" alt="icon"></img>
            <p>{elem.accommodates}</p>
            <img src={Bedrooms} className="icon" alt="icon"></img>
            <p>{elem.bedrooms}</p>
            <img src={Bathrooms} className="icon" alt="icon"></img>
            <p>{parseInt(elem.bathrooms)}</p>
          </div>
          <p className="listPrice">{elem.price} $ / night</p>
          <img
            onClick={() => {
              deleteBtn(elem.id);
            }}
            src="src/assets/img/Delete.png"
            className="icon delete"
          />
        </div>
      </div>
    );
  });
  return mappedList;
};

export default List;
