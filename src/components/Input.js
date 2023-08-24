import React, {useState , useEffect} from "react";
// import Meme from "./Meme";

const Input = () => {
    const [meme , setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: ""
    });

    const [allMemes , setAllMemes] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(data => setAllMemes(data.data.memes));
    } ,[]);

    console.log(allMemes);

    let url;
    function getMemeImage() {
        let memesArray = allMemes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
            return (
                {
                    ...prevMeme,
                    memeImage: url
                }
            )
        });
    } 

    function handleChange(event) {
        const {name,value} = event.target;
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                [name] : value
            })
        })
    }
    
    return (
        <div className="inputCont">
            <div className="inputBox">
                <input type="text" placeholder="first" className="inputBoxOne" onChange={handleChange} name="topText" value={meme.topText}/>
                <input type="text" placeholder="second" className="inputBoxSecond" onChange={handleChange} name="bottomText" value={meme.bottomText}/>
            </div>
           
            <button className="inputBtn" onClick={getMemeImage}>Get a new meme image</button>
            
            <div className="meme">
                <img src={meme.memeImage} className="memeImage" alt="meme"/>
                <h2 className="memeText memeText-top">{meme.topText}</h2>
                <h2  className="memeText memeText-bottom">{meme.bottomText}</h2>
            </div>

        </div>
    );
}

export default Input;