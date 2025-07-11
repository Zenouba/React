import React  from "react";
import MiniNav from "../components/MiniNav";
import Mhead from "../components/mHead";
import Paragraphe from "../components/Paragraphe";
import Menu from "../components/menu";
import Serv from "../components/serv";
import Gallery from "../components/gallery";
import Mworking from "../components/mWorking";
import SocialTable from "../components/SocialTable";
export default function Site (){
    const data = JSON.parse(localStorage.getItem("userData")) || {};
    return(
        <>
        <MiniNav/>
        <Mhead companyName={data.companyName} /> 
        <Paragraphe/>
        <Menu/>
        <Serv/>
        <Gallery/>
        <Mworking workingHours={data.workingHours }/>
        <SocialTable/>
        </>
    );
}