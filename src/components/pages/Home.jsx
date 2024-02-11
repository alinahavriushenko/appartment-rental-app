import SideBar from "../SideBar";
import List from "../List";
import { useState } from "react";
import rentals from "../../../rentals.json";
import dummyImg from "../../assets/img/dummyImg.jpeg";
import TopProduct from "../TopProduct";
export let newRentals = rentals.results;

let Home = () => {
  const [list, setList] = useState(rentals.results);
  const [host_name, setHostName] = useState("");
  const [host_since, setHostSince] = useState("");
  const [host_response_time, setHostResponseTime] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [house_rules, setHouseRules] = useState("");
  const [cleaning_fee, setCleaningFee] = useState(0);
  const [url, setUrl] = useState(dummyImg);

  let handleSubmit = (e) => {
    e.preventDefault();
    let mappedList = list.map((elem) => {
      return elem.id;
    });
    let result = Math.max(...mappedList);
    let newApartment = {
      id: result + 1,
      host_name: host_name,
      host_since: host_since,
      host_response_time: host_response_time,
      country: country,
      city: city,
      neighbourhood: neighbourhood,
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
    setHostName(" ");
    setCountry(" ");
    setCity(" ");
    setNeighbourhood("");
    setPropertyType(" ");
    setAccommodates(0);
    setBathrooms(0);
    setBedrooms(0);
    setPrice(0);
    setDescription(" ");
    setHouseRules(" ");
    setCleaningFee(0);
    newRentals = [newApartment, ...list];
  };
  return (
    <>
      <SideBar
        setHostName={setHostName}
        setHostSince={setHostSince}
        setHostResponseTime={setHostResponseTime}
        host_response_time={host_response_time}
        setCountry={setCountry}
        setCity={setCity}
        setNeighbourhood={setNeighbourhood}
        setPropertyType={setPropertyType}
        setAccommodates={setAccommodates}
        setBathrooms={setBathrooms}
        setBedrooms={setBedrooms}
        setPrice={setPrice}
        setDescription={setDescription}
        setHouseRules={setHouseRules}
        setCleaningFee={setCleaningFee}
        handleSubmit={handleSubmit}
        setUrl={setUrl}
      />
      <TopProduct list={list} />
      <div className="listWrapper">
        <List list={list} setList={setList} />
      </div>
    </>
  );
};
export default Home;
