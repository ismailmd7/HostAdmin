import React, { usestate,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props){
    let { Component } = props
const navigate=useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem("LogIn")
        if(!login){
            navigate('/')

        }
    })
    return(
        <Component></Component>
        
    )
}
export default Protected;