import React from "react";
import Meme from "./Meme";

const Input = () => {

    let url;
    function getMemeImage() {
        let memesArray = Meme.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        console.log(url);
    } 
    
    return (
        <div className="inputCont">
            <div className="inputBox">
                <input type="text" placeholder="first" className="inputBoxOne"/>
                <input type="text" placeholder="second" className="inputBoxSecond"/>
            </div>
            <button className="inputBtn" onClick={getMemeImage}>Get a new meme image</button>
        </div>
    );
}

export default Input;