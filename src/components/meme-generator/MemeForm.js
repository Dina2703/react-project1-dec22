import { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import axios from "axios";

function MemeForm() {
  const [memes, setMemes] = useState(null);
  // const [randomMemeUrl, setRandomMemeUrl] = useState("");

  const [meme, setMeme] = useState({
    topText: "TopText",
    bottomText: "BottomText",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memes);

  // console.log(memes);
  // console.log(randomMemeUrl);

  //fetch data from the Api when page loaded
  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        const memesData = response.data;
        // console.log(memesData);
        setMemes(memesData.data.memes);
      })
      .catch((err) => console.log(`Error: ${err}`));
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

  //Handle button click
  const onclick = (e) => {
    e.preventDefault();
    getRandomMeme();
  };

  return (
    <div>
      <form action="" className="meme-form">
        <div className="input-group">
          <input type="text" placeholder={meme.topText} />
          <input type="text" placeholder={meme.bottomText} />
        </div>
        <button type="submit" className="form-btn" onClick={(e) => onclick(e)}>
          <span> Get a new meme image </span>
          <BsCardImage />
        </button>
      </form>
      <div className="random-meme-img">
        {meme.randomImg && <img src={meme.randomImg} alt="" />}
      </div>
    </div>
  );
}

export default MemeForm;
