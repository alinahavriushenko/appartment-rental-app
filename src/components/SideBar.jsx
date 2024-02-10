/* eslint-disable react/prop-types */
import { useState } from "react";
import addAppartmentImg from "../assets/img/add-location.png";

let SideBar = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={toggleShowForm} className="iconAddAppartment">
        <img src={addAppartmentImg} />
        {showForm ? "tell us more about the appartment you want to list!" : "click here to list a new appartment"}
      </button>

      <div className={showForm ? "formContainer show" : "formContainer"}>
        <form className="addProduct" onSubmit={props.handleSubmit}>
          <fieldset className="formHostInfo">
            <legend>Host information</legend>
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
              Host since
              <input
                type="text"
                min={1900}
                max={2024}
                placeholder="2024"
                onChange={(e) => {
                  props.setHostSince(e.target.value);
                }}
              ></input>
            </label>
            <legend>Select your response time:</legend>
            <label>
              within a few hours
              <input
                type="radio"
                value="within a few hours"
                checked={props.host_response_time === "within a few hours"}
                onChange={(e) => {
                  props.setHostResponseTime(e.target.value);
                }}
              ></input>
            </label>
            <label>
              within an hour
              <input
                type="radio"
                value="within an hour"
                checked={props.host_response_time === "within an hour"}
                onChange={(e) => {
                  props.setHostResponseTime(e.target.value);
                }}
              ></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Location</legend>
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
              Neighbourhood
              <input
                type="text"
                placeholder="Enter neighbourhood"
                name="city"
                onChange={(e) => {
                  props.setNeighbourhood(e.target.value);
                }}
              ></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Main information</legend>

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
              Cleaning Fee
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
          </fieldset>
          <fieldset>
            <legend>Additional information</legend>
            <label>
              Description
              <textarea
                rows="5"
                cols="50"
                type="text"
                placeholder="Enter a Description"
                name="description"
                onChange={(e) => {
                  props.setDescription(e.target.value);
                }}
              ></textarea>
            </label>
            <label>
              House Rules
              <textarea
                rows="5"
                cols="50"
                type="text"
                placeholder="No Smoking"
                name="house_rules"
                onChange={(e) => {
                  props.setHouseRules(e.target.value);
                }}
              ></textarea>
            </label>

            <label>
              Add Image
              <input
                type="text"
                placeholder="Image url"
                onChange={(e) => {
                  props.setUrl(e.target.value);
                }}
              ></input>
            </label>
          </fieldset>
          <button type="submit">Advertise House</button>
        </form>
      </div>
    </>
  );
};
export default SideBar;
