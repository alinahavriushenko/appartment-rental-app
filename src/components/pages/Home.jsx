import SideBar from "../SideBar";
import List from "../List";
import { useState } from "react";
import rentals from "../../../rentals.json";

let Home = () => {
  const [list, setList] = useState(rentals.results);
  const [host_name, setHostName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [house_rules, setHouseRules] = useState("");
  const [cleaning_fee, setCleaningFee] = useState(0);
  const [url, setUrl] = useState(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e"
  );
  let handleSubmit = (e) => {
    e.preventDefault();
    let mappedList = list.map((elem) => {
      return elem.id;
    });
    let result = Math.max(...mappedList);
    let newApartment = {
      id: result + 1,
      host_name: host_name,
      country: country,
      city: city,
      property_type: property_type,
      accommodates: accommodates,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      price: price,
      description: description,
      house_rules: house_rules,
      cleaning_fee: cleaning_fee,
      picture_url: {
        url: url,
      },
    };
    setList([newApartment, ...list]);
    setHostName("");
    setCountry("");
    setCity("");
    setPropertyType("");
    setAccommodates(0);
    setBathrooms(0);
    setBedrooms(0);
    setPrice(0);
    setDescription("");
    setHouseRules("");
    setCleaningFee(0);
  };
  return (
    <>
      <SideBar
        setHostName={setHostName}
        setCountry={setCountry}
        setCity={setCity}
        setPropertyType={setPropertyType}
        setAccommodates={setAccommodates}
        setBathrooms={setBathrooms}
        setBedrooms={setBedrooms}
        setPrice={setPrice}
        setDescription={setDescription}
        setHouseRules={setHouseRules}
        setCleaningFee={setCleaningFee}
        handleSubmit={handleSubmit}
      />
      <div className="listWrapper">
        <List list={list} setList={setList} />
      </div>
    </>
  );
};
export default Home;
