import React from "react";
import Timer from "./components/exemplo1";
import ReactDOM from "react-dom/client";
import "./index.css"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Timer start={0} ms={1000}></Timer>
    </>
)