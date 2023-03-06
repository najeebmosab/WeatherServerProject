import "./Cards.css";
import { country } from "../Data";
import { useEffect, useMemo, useRef, useState } from 'react';

function Cards(props) {
    const filterStartInput = useRef(null);
    const filterEndInput = useRef(null);
    const [arr, setArr] = useState([]);
    useEffect(()=>{setArr([...props.datasServer])},[props.datasServer])
    console.log("props", props.datasServer);
    
    console.log("props a", [...props.datasServer]);
    function filterHandler(event) {
        event.preventDefault();

        const newArr = props.datasServer.filter(data => {
            const start = new Date(data.start);

            const end = new Date(data.end);

            return new Date(filterStartInput.current.value) >= start && new Date(filterEndInput.current.value) <= end 
        }
        );
        console.log("newArr",newArr);
        setArr([...newArr]);
    }


    return (<>
        <div >
            <div className="formSearsh">
                <h4>Please Enter Date</h4>
                <form action="" onSubmit={filterHandler}>
                    <input placeholder="starting Sort from" ref={filterStartInput} type="date" name="" id="" />
                    <input placeholder="Ending Sort to" ref={filterEndInput} type="date" name="" id="" />
                    <button>Searsh</button>
                </form>
            </div>
            <div className="cardContainer">
                {
                  
                   arr.length>0&& arr?.map((data) => {
                        console.log("data loop", data);
                        return (<>

                            <div className="card" key={data.id}>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    </>)
}

export { Cards }