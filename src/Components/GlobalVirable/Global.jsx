import { useEffect, useMemo, useRef, useState, createContext } from 'react';
import Client from 'predicthq';
import { Navbar } from '../NavbarPages/Navbar';

export const FilterStartInputContext = createContext(null);
export const FilterEndInputContext = createContext(null);
export const ArrCardsDataContextContext = createContext(null);
export const LabelsContext = createContext(null);
export const NameCountryContext = createContext(null);

export const DataServerContext = createContext([1]);

export const ClientContext = createContext(null);
export const WeatherContext = createContext(null);

export function AllGolbal() {

    const filterStartInput = useRef(null);
    const filterEndInput = useRef(null);
    const [arr, setArr] = useState([]);
    const [location, setLocation] = useState(null);
    const [labels, setLabels] = useState([]);
    const [nameCountry, setNameCountry] = useState("all");
    const [dataServer, setDataServer] = useState([]);
    const client = new Client({ access_token: '0XDDfLKqOCeI6-lUsKJ4AhFhicKaz8JwG6wO1-CYyEn6Ss60oE4V2w' });
    const weather = {
        "hail": "snow",
        "winter": "rain",
        "storm": "storm",
        "flood": "rain",
        "fog": "fog",
        "wind": "WIND",
        "heat-wave": "sunny",
        // "cyclone":"cyclone",
        "cold-wave": "snow"
    };

    function filterByWeather() {
        debugger
        const arrWeatherKey = Object.keys(weather);
        const newArr = dataServer.filter(data => {

            if (arrWeatherKey.includes(data.labels[0]) && !labels.includes(data.labels[0])) {
                labels.push(data.labels[0]);
            }

            return arrWeatherKey.includes(data.labels[0])
        })
        console.log(newArr);
        setArr([...newArr])
    }

    function filterHandler(event) {
        event.preventDefault();
        if (filterEndInput.current.value == "" && filterStartInput.current.value == "") return;
        const newArr = dataServer.filter(data => {
            const start = new Date(data.start);
            const end = new Date(data.end);
            const inputStart = new Date(filterStartInput.current.value);
            const inputEnd = new Date(filterEndInput.current.value);
            return (Date.parse(start) >= Date.parse(inputStart)) && (Date.parse(end) <= Date.parse(inputEnd))
        }
        );
        filterByWeather()
    }

    function clearHandler(event) {
        event.preventDefault();
        filterStartInput.current.value = "";
        filterEndInput.current.value = "";
        filterByWeather()
    }

    function filterBySevereWeather(event) {
        event.preventDefault();
        console.log(event.target.value);
        if (event.target.value.toLowerCase() === "all") {
            setArr([...dataServer]);
        }
        const newArr = dataServer.filter(data => {
            return data.labels[0] === event.target.value;
        })
        setArr([...newArr]);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    function distance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);  // deg2rad below
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d.toFixed(2) + " KM";
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }




    function nameCountryHandler(data) {
        setNameCountry(data);
    }

    function dataServerHandler(data) {
        // const filtring = data.results.filtr()

        setDataServer(data.results);
    }

    useEffect(() => {
        debugger
        console.log(nameCountry);
        if (nameCountry != "" && nameCountry.toLocaleLowerCase() != "all") {
            FeatchData(`https://api.predicthq.com/v1/events/?category=severe-weather&country=${nameCountry}&limit=50`, dataServerHandler)
        } else {
            FeatchData("https://api.predicthq.com/v1/events/?category=severe-weather&sort=-country&state=active&limit=50", dataServerHandler)
        }
    }, [nameCountry]);



    <DataServerContext.Provider value={dataServer}>
        <ArrCardsDataContextContext.Provider>
            <Navbar></Navbar>
        </ArrCardsDataContextContext.Provider>
    </DataServerContext.Provider>

}