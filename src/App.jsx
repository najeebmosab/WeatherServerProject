import Client from 'predicthq';
import { useEffect, useState } from 'react';
import { SelectCountry } from "./Components/SelectCountry/SelectCountry"
import FeatchData from "./Components/FeatchData"
import { Cards } from "./Components/Cards/Cards";
function App() {
  const [nameCountry, setNameCountry] = useState("all");
  const client = new Client({ access_token: '0XDDfLKqOCeI6-lUsKJ4AhFhicKaz8JwG6wO1-CYyEn6Ss60oE4V2w' });
  const [dataServer, setDataServer] = useState([]);
  function nameCountryHandler(data) {
    setNameCountry(data);
  }

  function dataServerHandler(data) {
    // const filtring = data.results.filtr()
    
    setDataServer(data.results);
  }



  useEffect(() => {
    console.log(nameCountry);
    if (nameCountry != "" && nameCountry.toLocaleLowerCase() != "all") {
      FeatchData(`https://api.predicthq.com/v1/events/?category=severe-weather&country=${nameCountry}&limit=50`, dataServerHandler)
    } else {
      FeatchData("https://api.predicthq.com/v1/events/?category=severe-weather&sort=-country&state=active&limit=50", dataServerHandler)
    }
  }, [nameCountry])
  // console.log(dataServer);


  return (
    <>
      <SelectCountry nameCountres={nameCountryHandler}></SelectCountry>
      <Cards datasServer={dataServer} ></Cards>
    </>
  );
}
export default App

