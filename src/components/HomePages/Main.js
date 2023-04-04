import React from "react";
import Listproduct from "../Products/Listproduct";
import Background from "./Background";
export default function Main() {

    // close banner

    return (
        <div>
            {/* background */}
            <Background />
            {/* list product */}
            <Listproduct />
        </div>
    )
}
