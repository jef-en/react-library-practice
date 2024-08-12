import { useState } from "react";
import quotes from "../assets/quotes";

function Quote() {
  const [newQuotes, setNewQuotes] = useState({
    text: "",
    author: "",
  });

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];
    setNewQuotes(randomQuotes);
  };

  return (
    <div id="quote-textbox">
      <h2 id="text">{newQuotes.text}</h2>
      <p id="author">{newQuotes.author}</p>
      <div id="button-container">
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
        {/* <a href="#" id="tweet-quote">
          Twitter
        </a>
        <a href="#">Facebook</a> */}
      </div>
    </div>
  );
}
export default Quote;
