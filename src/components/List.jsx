import { useNavigate } from "react-router-dom";
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
