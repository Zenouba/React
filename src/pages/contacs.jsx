import React from "react";
import  Navbar from "../components/navbar";
import Head from "../components/head";
import Email from "../components/email";
import SiteFooter from "../components/SiteFooter";
import Footer from "../components/footer";

export default function Contact(){
    return(
        <>
        <Navbar/>
        <Head/>
        <Email/>
        <SiteFooter/>
        <Footer/>
        </>
    );
}