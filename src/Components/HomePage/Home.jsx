import { useContext, useEffect, useState } from 'react';
import Client from 'predicthq';
import { Cards } from "../Cards/Cards";
import { DataServerContext } from '../GlobalVirable/Global';
function Home() {
    const dataServerContext = useContext(DataServerContext)
    console.log(dataServerContext);
    return (<>
        <Cards></Cards>
    </>)
}

export { Home }