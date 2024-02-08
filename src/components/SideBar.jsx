let SideBar = (props) => {
  /*
   let variable = { name="host_name"
    name="country"
    name="city"
    name="property_type"
    name="accommodates"
    name="bathrooms"
    name="bedrooms"
    name="price"
    name="description"
    name="house_rules"
    name="cleaning_fee"}
  */

  return (
    <>
      <form className="addProduct" onSubmit={props.handleSubmit}>
        <label>
          Host Name
          <input
            type="text"
            placeholder="Enter Name"
            name="host_name"
            required
            onChange={(e) => {
              props.setHostName(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Country
          <input
            type="text"
            placeholder="Enter Country"
            name="country"
            onChange={(e) => {
              props.setCountry(e.target.value);
            }}
          ></input>
        </label>
        <label>
          City
          <input
            type="text"
            placeholder="Enter City"
            name="city"
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Enter Property Type
          <input
            type="text"
            placeholder="Enter Property Type"
            name="property_type"
            onChange={(e) => {
              props.setPropertyType(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Accommodates
          <input
            type="number"
            min={0}
            max={10}
            placeholder="3"
            name="accommodates"
            onChange={(e) => {
              props.setAccommodates(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Bathrooms
          <input
            type="number"
            min={0}
            max={10}
            placeholder="2"
            name="bathrooms"
            onChange={(e) => {
              props.setBathrooms(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Bedrooms
          <input
            type="number"
            min={0}
            max={10}
            placeholder="5"
            name="bedrooms"
            onChange={(e) => {
              props.setBedrooms(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Price per Night
          <input
            type="number"
            min={0}
            max={1000}
            placeholder="50"
            name="price"
            onChange={(e) => {
              props.setPrice(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            placeholder="Enter a Description"
            name="description"
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
          ></input>
        </label>
        <label>
          House Rules!
          <input
            type="text"
            placeholder="No Smoking"
            name="house_rules"
            onChange={(e) => {
              props.setHouseRules(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Cleaning Fee!
          <input
            type="number"
            min={0}
            max={100}
            placeholder="20"
            name="cleaning_fee"
            onChange={(e) => {
              props.setCleaningFee(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Advertise House</button>
      </form>
    </>
  );
};
export default SideBar;
