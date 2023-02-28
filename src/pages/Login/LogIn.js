import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo.png";
// import logo from '../Images/cryptowalletlogo2.png'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.removeItem("LogIn");
    };
  });

  const submitLogin = async () => {
    const response = await fetch("https://crypto-wallet-jet.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
      navigate("/home");
      localStorage.setItem("LogIn", true);
    }
  };

  return (
    <div className="loginpage">
      <div className="login">
        <div className="imgdivlogo mt-2">
          <img src={logo} alt="img" className="logoimg" />
          {/* <h4 className='mt-2 mx-2'>Crypto Wallet</h4> */}
        </div>
        <div>
          <input
            placeholder="Email"
            className="inputlogin mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="inputlogin"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginbtn" onClick={submitLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
