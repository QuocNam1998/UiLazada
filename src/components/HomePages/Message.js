import React, {useState} from "react";
import {MessageOutlined} from "@ant-design/icons"

export default function Message() {
    const [value, setValue] = useState('')

    function handerclick()  {
        const messagebtn = document.getElementById("message")
        const showmessage1 = document.getElementById("show__message")
        messagebtn.style.display = "none"
        showmessage1.style.display = "block"
       
    }

    // hander show message
    function handershowmessage() {
        const messagebtn = document.getElementById("message")
        const showmessage1 = document.getElementById("show__message")
        messagebtn.style.display = "block "
        showmessage1.style.display = "none"
    }
    // hiển thị khung chat nằm dính dưới phải màn hình
    return (
        <div>
             <div id="message" className="message"> 
                <button  onClick={()=>handerclick()} className ="message__button" type="button"> <MessageOutlined className="message__button--icon"/> Message</button>
            </div>
            <div id="show__message" className="show__message">
                <div className="show__message--close"><button onClick={()=>handershowmessage()} className="show__message--close--item">X</button></div>
                <textarea 
                onChange={(e)=>setValue(e.target.value)}
                value={value} className="show__message--textarea" rows='4' cols='50'></textarea>
            </div>
        </div>
       
    )
}