import React, {useState} from "react";
import {CloseOutlined} from "@ant-design/icons";


export default function Banner() {
    const [display, setDisplay] = useState('block')
    const closebanner = () => {
        setDisplay('none')
        }
        
    return (
        <div className="header__banner" style={{display}}>
                <img alt="error" className="banner__image" src={require("../.././assest/background/backgroundHeader.png")}></img>
                <div className="background__close">
                    <button onClick={closebanner}>
                          <CloseOutlined title="Click to close banner" className="background__close--icon" />
                    </button>
                </div>
        </div>
        )
}