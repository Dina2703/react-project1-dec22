import { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import axios from "axios";

function MemeForm() {
  const [memes, setMemes] = useState([]);
  // const [randomMemeUrl, setRandomMemeUrl] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  console.log(meme);

  //fetch data from the Api when page loaded with 'axios'
  // useEffect(() => {
  //   axios
  //     .get("https://api.imgflip.com/get_memes")
  //     .then((response) => {
  //       const memesData = response.data;
  //       // console.log(memesData);
  //       setMemes(memesData.data.memes);
  //     })
  //     .catch((err) => console.log(`Error: ${err}`));
  // }, []);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemes(data.data.memes);
    }
    getMemes();
  }, []);

  //get random meme from the array of memes
  function getRandomMeme() {
    const randomMemeId = Math.floor(Math.random() * memes.length);
    const url = memes[randomMemeId].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImg: url,
      };
    });
  }

  function handleChange(e) {
    setMeme((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <main className="meme-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Top Text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button className="form-btn" onClick={getRandomMeme}>
          <span> Get a new meme image </span>
          <BsCardImage />
        </button>
        <div className="meme--text">
          {meme.randomImg && (
            <img src={meme.randomImg} alt="" className="random-meme-img" />
          )}
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </div>
  );
}

export default MemeForm;
