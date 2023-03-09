import "./Form.css";

function From() {
    return (<>
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
    </>)
}

export { From }