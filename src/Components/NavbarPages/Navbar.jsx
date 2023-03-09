import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useRef, useState,useContext } from 'react';
import { DataServerContext,AllGolbal } from '../GlobalVirable/Global';

function Navbar() {
    const navBar = useRef(null)
    const dataServerContext = useContext(DataServerContext)
    console.log(dataServerContext);
useEffect(()=>{
    console.log(dataServerContext);

},[dataServerContext])
    useEffect(() => {
        function handleScroll() {
            // Code to handle scroll event
            console.log(typeof Number(window.scrollY.toFixed(0)));
            navBar.current.style.zIndex = "3";
            if (Number(window.scrollY.toFixed(0)) < 40) {
                return navBar.current.classList.remove("scrollNavbar");
            }
            else {
                return navBar.current.classList.add("scrollNavbar");

            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
    <AllGolbal></AllGolbal>
        <nav className="navBar" ref={navBar}>
            <section>
                <Link className="navBarHover" to={"/"} >Severe Weather</Link>
                <Link className="navBarHover" to={"/chosePage"} >Country</Link>
            </section>
            <section>
                <button className="navBarHover" onClick={() => {


                }}><FontAwesomeIcon icon={faBars} /></button>
            </section>
        </nav>

        <Outlet></Outlet>


    </>)
}
export { Navbar }

