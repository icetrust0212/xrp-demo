import {Alert, Box, Button, FormControl, InputLabel, Link, TextField} from "@mui/material";
import React from 'react';
import {Client} from "xrpl";


class BuyForm extends React.Component {

    state = {
        message: "",
        address: "",
        amount: 1,
        xrp: 2000
    }


    onXummPayment = async () => {
        const {amount} = this.state;
        window.location = `http://52.58.217.222:8082/api/pay?amount=${amount}`;
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value,
            xrp: e.target.value * 2000
        })
    }

    handleXRPChange = (e) => {
        this.setState({
            xrp: e.target.value
        })
    }


    render() {
        const {airdropAmount, error} = this.state;

        return (
            <Box
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                component="form"
                sx={{
                    backgroundColor: '#ff6450',
                    width: '500px',
                    margin: '0 auto',
                    paddingTop: '10px',
                    marginTop: '30px'
                }}
                noValidate
                autoComplete="off"
                action={'#'}
            >

                <div style={{width: "90%", margin: '0 auto'}}>
                    <h2 style={{color: 'white'}}>1xLoveMonster =
                        2000XRP</h2>

                    <FormControl fullWidth sx={{m: 1}}>
                        <InputLabel shrink htmlFor="bootstrap-input"
                                    style={{color: 'white', fontSize: '18px', fontWeight: '600'}}>
                            xLoveMonster
                        </InputLabel>
                        <TextField
                            color={"warning"}
                            required
                            id="outlined-required"
                            type={"text"}
                            style={{marginTop: "10px", marginBottom: '10px'}}
                            value={this.state.amount}
                            onChange={this.handleChange}
                            sx={{backgroundColor: 'white'}}
                            placeholder="1"
                        />

                    </FormControl>
                    <FormControl fullWidth sx={{m: 1}}>
                        <InputLabel shrink htmlFor="xrp"
                                    style={{color: 'white', fontSize: '18px', fontWeight: '600'}}>
                            XRP
                        </InputLabel>
                        <TextField
                            color={"warning"}
                            required
                            id="xrp"
                            disabled={true}
                            type={"text"}
                            style={{marginTop: "10px", marginBottom: '10px'}}
                            value={this.state.xrp}
                            onChange={this.handleXRPChange}
                            sx={{backgroundColor: 'white'}}
                            placeholder="1"
                        />

                        <Button fullWidth variant={"contained"} style={{backgroundColor: '#2c0f09'}}
                                onClick={() => this.onXummPayment()}
                                type={'button'}>
                            Pay with XUMM
                        </Button>

                        <br/>


                        <Alert severity={"info"}>

                            <ul style={{textAlign: 'left'}}>
                                <li>
                                    <b>The account you pay with must have a trustline for xLoveMonster. <br/>
                                        To set the trustline <Link target={'_blank'}
                                                                   href={'https://xumm.community/?issuer=rsQRCHYZzsSjMpAs63TtPFkittdJzY3gET&currency=784C6F76654D6F6E737465720000000000000000&limit=33332.99905374161'}>
                                            CLICK HERE
                                        </Link>
                                    </b>
                                </li>
                                <li>The tokens will be sent to the account from where you pay</li>
                                <li>After sending the XRP you should get the tokens within 15 minutes</li>
                            </ul>

                        </Alert>
                        <br/>

                    </FormControl>


                    {airdropAmount &&
                    <Alert variant="filled" severity="info" style={{margin: '10px'}}>
                        You will receive <b>{airdropAmount} xLoveMonster</b> Token(s) in the Airdrop.
                    </Alert>
                    }

                    {error &&
                    <Alert variant="filled" severity="error" style={{margin: '10px'}}>
                        {error}
                    </Alert>
                    }


                </div>


            </Box>
        )
            ;
    }

}

export default BuyForm;