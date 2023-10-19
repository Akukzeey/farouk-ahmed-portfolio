import {useEffect} from "react";
import Head from "next/head";
import Header from "../components/Header";
import '../styles/global.scss'
import "../styles/media-queries.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            duration: 1300,
        });
    }, [])

    return (
        <>
            <Head>
                <title>Farouk Ahmed</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="A frontend developer proficient in React js and Next js"/>
                <meta name="keywords" content="farouk, ahmed, frontend developer, javascript, software developer, react"/>
                <meta name="author" content="Farouk Ahmed"/>
            </Head>
            <ToastContainer/>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
