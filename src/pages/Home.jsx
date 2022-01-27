import { useEffect, useState } from "react"
import BuyForm from "../components/BuyForm";
import '../styles/Home.css';


const Home = (props) => {
    return (
        <div className="home-wrapper">
            <div className="img-wrapper">
                <img src="https://mylovemonster.com/presale/airdrop_logo.png" alt="logo" />
            </div>
            <BuyForm />
        </div>
    )
}

export default Home;