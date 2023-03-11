import { useRef } from "react";
import "./NewWeather.css";
function NewWeather() {
    const title = useRef(null);
    const labels = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);
    const uploadImage = useRef(null);

    function AddNewWeatherServer(event) {
        event.preventDefault();
    }

    return (<>
        <form action="" className="addWeatherForm" onSubmit={AddNewWeatherServer}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" ref={title} name="title" id="title" />
            </div>
            <div>
                <label htmlFor="Labels">Labels</label>
                <input type="text" ref={labels} name="Labels" id="Labels" />
            </div>
            <div>
                <label htmlFor="dateStart">Start Date</label>
                <input type="date" ref={startDate} name="dateStart" id="dateStart"/>
            </div>
            <div>
                <label htmlFor="dateEnd">End Date</label>
                <input type="date" ref={endDate} name="dateEnd" id="dateEnd"/>
            </div>
            <div>
                <label htmlFor="image">Upload image</label>
                <input type="file" ref={uploadImage} name="image" id="image"/>
            </div>
            <div className="divSubmit">
                <button className="btnSubmit">Add</button>
            </div>
        </form>
    </>);

}
export {NewWeather}
