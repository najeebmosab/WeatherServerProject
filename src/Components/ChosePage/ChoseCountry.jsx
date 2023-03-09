import { useContext, useEffect, useState } from 'react';
import FeatchData from "../FeatchData";
import { country } from "../Data";
import Client from 'predicthq';
import { SelectCountry } from "../SelectCountry/SelectCountry";
import { Cards } from "../Cards/Cards";
import { From } from "../FormPage/Form";
import "./ChoseCountry.css"
function ChoseCountry() {
  return (<>
    <SelectCountry ></SelectCountry>
    <Cards></Cards>
    <From></From>
  </>);
}

export { ChoseCountry }