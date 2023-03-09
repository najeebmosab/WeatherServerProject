import "./Cards.css";
import { country } from "../Data";


function Cards(props) {
    return (<>
        <div >
            <div className="cardContainer">
                {

                    arr?.length > 0 && arr?.map((data) => {
                        return (<>

                            <div className="card transforms" key={data.id}>
                                <div className="locationFarFromMe">
                                    {
                                        distance(location.latitude, location.longitude, data.location[0], data.location[1])
                                    }
                                </div>
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