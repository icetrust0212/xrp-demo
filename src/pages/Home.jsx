import { useEffect, useState } from "react"
import '../styles/Home.css';
import { XummSdkJwt } from "xumm-sdk";


const Home = (props) => {
    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [ott, setOtt] = useState();
    const Sdk = new XummSdkJwt('815820f0-ada2-4889-a5ba-d28d21208d09', '7a2a8c96-63db-4526-980c-dbed5d0b64de');
    console.log('sdk: ', Sdk)

    useEffect(() => {
        (async function() {
            let _ott = await Sdk.getOttData();
            setOtt(_ott);
            console.log('ott', _ott);
            // Sdk.ping();
        }());
    }, [Sdk])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit: ', amount, address, message);
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="amount" className="control-label">Amount:</label>
                <input type="number" className="input amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="address" className="control-label">Address:</label>
                <input type="text" className="input address" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="message" className="control-label">Message:</label>
                <input type="text" className="input message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button className="btn" type="submit">Transfer</button>
        </form>
    )
}

export default Home;