import "./Cards.css";
import { country } from "../Data";
import { useEffect, useMemo, useRef, useState } from 'react';
import Animation from "../AnimationWeather/AnimatinWeather";
// import { CardAnimation } from "../CardAnimation/CardAnimation"

function Cards(props) {
    const filterStartInput = useRef(null);
    const filterEndInput = useRef(null);
    const [labels, setLabels] = useState([]);

    const [arr, setArr] = useState([]);
    useEffect(() => {
        filterByWeather()
    }, [props.datasServer]);

    function filterByWeather() {
        const arrWeatherKey = Object.keys(weather);
        console.log(arrWeatherKey);

        const newArr = props.datasServer.filter(data => {

            if (arrWeatherKey.includes(data.labels[0]) && !labels.includes(data.labels[0])) {
                labels.push(data.labels[0]);
            }

            return arrWeatherKey.includes(data.labels[0]);
        })
        setArr([...newArr])
    }


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
    }

    function filterHandler(event) {
        event.preventDefault();
        if (filterEndInput.current.value == "" && filterStartInput.current.value == "") return;
        const newArr = props.datasServer.filter(data => {
            const start = new Date(data.start);
            const end = new Date(data.end);
            const inputStart = new Date(filterStartInput.current.value);
            const inputEnd = new Date(filterEndInput.current.value);
            return (Date.parse(start) >= Date.parse(inputStart)) && (Date.parse(end) <= Date.parse(inputEnd))
        }
        );

        // const newArr = props.datasServer.reduce((curr, acurrV) => {
        //     const start = new Date(acurrV.start);
        //     const end = new Date(acurrV.end);
        //     const inputStart = new Date(filterStartInput.current.value);
        //     const inputEnd = new Date(filterEndInput.current.value);
        //     if (inputStart.getFullYear() >= start.getFullYear() && inputEnd.getFullYear() <= end.getFullYear()) {
        //         curr.push(acurrV);
        //     }
        //     return acurrV;
        // }, [])

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
            setArr([...props.datasServer]);
        }
        const newArr = props.datasServer.filter(data => {
            return data.labels[0] === event.target.value;
        })
        setArr([...newArr]);
    }

    return (<>
        <div >
            <div className="formSearsh">
                <h4>Please Enter Date</h4>
                <form action="" onSubmit={filterHandler}>
                    <input placeholder="starting Sort from" ref={filterStartInput} type="date" name="" id="" />
                    <input placeholder="Ending Sort to" ref={filterEndInput} type="date" name="" id="" />
                    <button >Searsh</button>
                    <button onClick={clearHandler}>clear</button>
                    <div>
                        <h2>sort by labels</h2>
                        <select name="" id="" onChange={filterBySevereWeather}>

                            {
                                labels.map((el, idx) => {
                                    return (<option value={el}>{el}</option>)
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
            <div className="cardContainer">
                {

                    arr.length > 0 && arr?.map((data) => {
                        return (<>

                            <div className="card transforms" key={data.id}>
                                <div className={`card card-${weather[data.labels[0]]}`}>
                                    <div className={` ${weather[data.labels[0]]}`}></div>
                                </div>
                                <div className="status">
                                    {/* <p>71 &#8457;</p> */}
                                    <p>{data.title}</p>
                                </div>
                                <div className="time">
                                    <p>{data.start.slice(0, 10)}</p>
                                    <p>{data.end.slice(0, 10)}</p>
                                </div>
                            </div>

                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

export { Cards }