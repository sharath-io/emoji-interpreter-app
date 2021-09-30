import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Happy",
  "🤔": "Thinking",
  "😭": "Crying",
  "🤣": "ROFL",
  "😠": "Angry",
  "❤️": "Heart",
  "🤩": "Star-Struck",
  "😜": "wink",
  "😴": "sleep",
  "😷": "mask"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not found in database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    return setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Translator</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
