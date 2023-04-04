import React from "react";
import {ArrowUpOutlined, FireOutlined, MailOutlined, AppstoreOutlined, UserOutlined} from "@ant-design/icons";

export default function Menu() {
    // hiển thị thanh menu nằm bên  dính bên trái màn hình
    return (
        <div className="menu">
            <div className="menu__home">
                <ArrowUpOutlined />
                <div></div>
            </div>
            <div className="menu__fire">
                <FireOutlined/>
                <div></div>
            </div>
            <div className="menu__gmail">
                <MailOutlined />
                <div></div>
            </div>
            <div className="menu__section">
                <AppstoreOutlined />
                <div></div>
            </div>
            <div className="menu__user">
                <UserOutlined />
                <div></div>
            </div>
    </div>
    )
}