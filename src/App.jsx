import { useState } from "react";
import "./App.css";

function App() {
  const [song, setSong] = useState("perfect");
  let [artist, setArtist] = useState("ed sheeran");
  let [result, setResult] = useState(null);

  async function btn() {
    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    let data = await response.json();
    console.log(data.lyrics);
    setResult(data.lyrics);
  }

  return (
    <>
      <h1>Kehre Pal Di Kahani, Tere Har Geet Di Zubani</h1>
      <span>
        <input
          type="text"
          placeholder="Song Name"
          onChange={(e) => {
            setSong(e.target.value);
          }}
          value={song}
        />
      </span>

      <span>
        <input
          type="text"
          placeholder="Artist Name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
          value={artist}
        />
      </span>
      <button onClick={btn}>Here We go</button>
      <h3>
        {result
          ? result
          : "lyrics is not available yet click it one more time for wonder"}
      </h3>
    </>
  );
}

export default App;
