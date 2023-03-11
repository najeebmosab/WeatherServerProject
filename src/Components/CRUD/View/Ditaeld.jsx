import "./Ditaeld.css"
import {Link} from 'react-router-dom';

function Ditaeld() {
    return (<>
        <div className="mockApiContainer">
            <div className="addDitaeld">
                <Link to={"/AddWeatherServer"}>Add Weather Server</Link>
            </div>
            <div className="cardCockApi">

            </div>
        </div>
    </>);
}
export { Ditaeld }