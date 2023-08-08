import React from "react";

const Input = () => {
    return (
        <div className="inputCont">
            <div className="inputBox">
                <input type="text" placeholder="first" className="inputBoxOne"/>
                <input type="text" placeholder="second" className="inputBoxSecond"/>
            </div>
            <button className="inputBtn">Get a new meme image</button>
        </div>
    );
}

export default Input;