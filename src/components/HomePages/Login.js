import React, {useRef, useState} from "react";
import Navbar from "./Navbar";
import Ecoun from "../.././assest/detail/ecounpoint.png";
import Lazglobal from "../.././assest/detail/lazgloball.png";
import Lazmall from "../.././assest/detail/lazmall.png";
import Vourche from "../.././assest/detail/vourche.png";
import {DownOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";

export default function Login() {
   const [isShowPass, setIsShowPass] = useState(false)
   const [pass, setPass] = useState('')
   const [userPhone, setUserPhone] = useState('')
   const myPass = useRef()
   const myUserPhone = useRef()


//hader showpassword if isShow = false -> show password, else dont show password
   const handershowPass = () => {
         
         if(!isShowPass){
            myPass.current.type="text"
            setIsShowPass(!isShowPass)
         }
         else {
            myPass.current.type="password"
            setIsShowPass(!isShowPass)
         }
   }
// hander type pass
function handertypePass(e) {
    setPass(e.target.value)
}

// hander type phone 
function handerType(e){
    setUserPhone(e.target.value)
}

//hander login
const handerLogin = () => {
    console.log(myPass.current.value)
    console.log(myUserPhone.current.value)

}

    return(
        <div className="login">
            
            {/* navbar */}
            <div className="product__navbar">
                <Navbar />
                <div className="product__navbar__bottom">
                    <ul className="flex product__navbar__bottom__listicon mt-7">
                        <li>Categories <i><DownOutlined /></i></li>
                        <li className="flex pl-32 product__navbar__bottom__listicon--item"> <img className="h-6" src={Ecoun}></img> Ecoun </li>
                        <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6" src={Lazglobal}></img> Lazada globall </li>
                        <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6" src={Lazmall}></img> Lazada mall </li>
                        <li className="flex pl-8 product__navbar__bottom__listicon--item"> <img className="h-6" src={Vourche}></img> Vourche </li>
                    </ul>
                </div>
            </div>
            {/* form login */}
            <div className="login__form">
                <div className="form__title">
                    <h1>Welcome to Lazada! Please login.</h1>
                    <p>New member? <Link className="form__register">Register</Link> here</p>
                </div>
                {/* userPhone */}
                <div className="form__input">
                    <div className="input__user">
                        <form className="input__user__phone">
                            <p className="phone__title">Phone Number or Email*</p>
                            <input className="input__phone" 
                                placeholder="Please input yourphone number"
                                onChange={(e)=>handerType(e)}
                                value={userPhone}
                                ref={myUserPhone}></input>
                        </form>
                        {/* password */}
                        <div className="input__user--password">
                            <p className="password--title">Password*</p>
                            <input ref={myPass} type='password'
                             className="input__password" 
                             placeholder="Please input your password"
                             onChange = {(e)=>handertypePass(e)}
                             value={pass}></input>
                        </div>
                        <button onClick={handershowPass}>{isShowPass?'Hide pass':'Show pass'}</button>
                        <div className="input__user--link">
                            <Link>Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="input__social">
                        <button onClick={handerLogin} className="input__social--login">LOGIN</button>
                        <p className="form__register">or login with</p>
                        <button className="input__social--facebook">Facebook</button>
                        <button className="input__social--google">Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}   