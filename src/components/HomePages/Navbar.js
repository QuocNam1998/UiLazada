import React from "react";
import lazada from "../.././assest/lazada.png"
import zalopay from "../.././assest/zalopay.png"
import { ShoppingCartOutlined, SearchOutlined} from "@ant-design/icons"
import { Link, } from "react-router-dom";

// navbar
export default function Navbar(props) {
    // get listCart from localStorage 
    // const listCart = JSON.parse(localStorage.getItem('listCart'));
    const subLength = JSON.parse(localStorage.getItem('listCart')) 
    
    return(
        <div className="header__navbar">
                <div className="navbar__top">
                    <div className="navbar__top__list">
                        <div className="navbar__top__list--item"><a>SAVE MORE ON APP</a></div>
                        <div className="navbar__top__list--item"><a>SELL ON LAZADA</a></div>
                        <div className="navbar__top__list--item color__9e9e9e"><a>CUSTOMER CARE</a></div>
                        <div className="navbar__top__list--item color__9e9e9e"><a>TRACK MY ORDER</a></div>
                        <div className="navbar__top__list--item color__9e9e9e">
                            <Link to='/login'>LOGIN</Link></div>
                        <div className="navbar__top__list--item color__9e9e9e"><a>SIGNUP</a></div>
                        <div className="navbar__top__list--item color__9e9e9e"><a>THAY ĐỔI NGÔN NGỮ</a></div>
                    </div>
                </div>
                <div className="navbar__bottom">
                    {/* go back home page */}
                    <Link className="navbar__bottom__lazada" to='/'>
                        <div><img className="navbar__bottom__lazada--icon" src={lazada}></img></div> 
                    </Link>
                    <div className="navbar__bottom__input">
                        <input className="navbar__bottom__input--form" placeholder="Search in lazada"></input>
                        <div className="navbar__bottom__input__search"><SearchOutlined className="navbar__bottom__input__search--icon" /></div>
                    </div>
                    {/* go to cart */}
                    <div className="navbar__bottom__cart">
                        <Link className="flex flex-col pr-2"  to='/cart' >
                            <span className="navbar__bottom__cart--number"> {((props.data&&props.data.length)?props.data.length:(subLength?.length))}</span> 
                            <ShoppingCartOutlined className="navbar__bottom__cart--icon" />
                        </Link> 
                    </div>
                    <div className="navbar__bottom__zalopay"><img className="navbar__bottom__zalopay--icon" src={zalopay}></img></div>
                </div>
            </div>
    )
}