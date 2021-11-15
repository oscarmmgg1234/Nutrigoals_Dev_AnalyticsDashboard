import React, {useState} from 'react'
import '../Css/styles.css'
import logo from '../Assets/logo.jpeg'
import {Link} from 'react-router-dom'
import Dashboard from './dashboard'
import {Auth_Server} from '../HTTP/axiosConfig'

  




function Login(props) {
    const [username, setUserN] = useState("")
    const [password, setUserP] = useState("")
    const AuthServer = new Auth_Server();

    async function validate(){
        const auth_result = await AuthServer.Validate(username, password)
        if(auth_result === true){
            props.setValidation(true)
        }
        else{
            props.setValidation(false)
        }
    }

    return(
        <div id={"rootContainer"}>
            <div id={"mainView"} >
            <img src={logo} id="logo"/>
            <p id="header">Dashboard Admin Login</p>
            <div class="inputField">
            <p style={{fontSize: 25, marginRight: 20, fontWeight: 500}}>Username: </p>
            <input value={username} type="email" onChange={event=>setUserN(event.target.value)} 
            style={{width: "65%", height: '70%', borderRadius: 10, fontSize: 18, paddingLeft: 10
            ,backgroundColor: 'rgba(0,0,0,0.8)', color: 'white'}} placeholder={"Enter Email"}
            />
            </div>
            <div class="inputField">
            <p style={{fontSize: 25, marginRight: 20, fontWeight: 500}}>Password: </p>
            <input value={password} type="password" onChange={event=>setUserP(event.target.value)} 
            style={{width: "65%", height: '70%', borderRadius: 10, fontSize: 18, paddingLeft: 10
            ,backgroundColor: 'rgba(0,0,0,0.8)', color: 'white'}} placeholder={"Enter Password"}
            />
            </div>
            
            <button type="button" style={{backgroundColor: "orange", width: 300, height: 60, borderRadius: 20, marginTop: 60}}>
                <p style={{fontSize: 18, fontWeight: "bold"}} onClick={()=>validate()}>Validate</p>
            </button>
            {props.userValid === true && (
                <div style={{marginTop: 40}}>
                <Link to={"/dashboard"} style={{fontSize: 30, borderWidth: 1, borderStyle: "solid", paddingTop: 7, paddingBottom: 7, paddingRight: 3, paddingLeft: 3}}>Admin validated click to be redirected to Dashboard</Link>
                </div>
            )}
            </div>
        </div>
    )

}

export default Login;