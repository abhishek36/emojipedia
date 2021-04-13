import react , {useState} from 'react';
import './App.css';


function App() {
  const emojiCollection = {
    "😊": "Smiling Emoji",
    "😂": "Laughining Emoji",
    "😍": "Loving Emoji",
    "😎": "Cool Emoji",
    "😔": "Sad Emoji",
    "😭": "Crying Emoji",
    "😮": "Shocked Emoji"
  }
  const emojis = Object.keys(emojiCollection);

  const [emoji , setEmoji] = useState("")
  const [meaning , setMeaning] = useState("Result")

  function emojiClickHandler(e) {
    setMeaning(emojiCollection[e]);
  }

  
  // function handleChange(e) {
  //   let inputEmoji = e.target.value;
  //   setEmoji(inputEmoji);

  //   if (emojiCollection[inputEmoji]) {
  //     setMeaning(emojiCollection[inputEmoji]);
  //   } else {
  //     setMeaning("Oops..! Emoji is Not present in Database");
  //   }
  // }
  return (
    <div className="App">
      {/* <input
        value={emoji}
        onChange={handleChange}
        placeholder="Insert an Emoji to Know Its Meaning"
        style={{
          fontSize: "20px",
          height: "30px",
          width: "80vw",
          textAlign: "center",
          marginTop:"1em",
        }}
      /> */}
       <h1>{meaning}</h1>
       {emojis.map((e) => (
        <span
          key={e}
          onClick={() => emojiClickHandler(e)}
          style={{ fontSize: "30px", margin: "5px", cursor: "pointer" }}
        >
          {e}
        </span>
          ))}
    </div>
  );
}

export default App;
