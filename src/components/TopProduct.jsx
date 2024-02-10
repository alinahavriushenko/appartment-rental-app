import { useState } from "react";

const TopProduct = (props) => {
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.list.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedProducts = props.list.slice(startIdx, endIdx);

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {displayedProducts.map((elem) => (
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
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TopProduct;
