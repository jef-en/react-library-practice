import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import quotes from "../assets/quotes";
import PropTypes from "prop-types";

function Quote({ isDarkMode }) {
  const [newQuotes, setNewQuotes] = useState({
    text: "Random Quotes Generator",
    author: "",
  });

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];
    setNewQuotes(randomQuotes);
  };

  return (
    <div className="wrapper">
      <div
        id="quote-textbox"
        className={isDarkMode ? "quotesDark" : "quotesLight"}
      >
        <p id="text">{newQuotes.text}</p>
        <p id="author">{newQuotes.author}</p>
        <div id="button-container">
          <div id="socials">
            <a
              href="https://x.com/"
              target="_blank"
              id="tweet-quote"
              className={`${isDarkMode ? "buttonDark" : "buttonWhite"} button`}
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://fb.com/"
              target="_blank"
              id="fb-quote"
              className={`${isDarkMode ? "buttonDark" : "buttonWhite"} button`}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

          <button
            id="new-quote"
            className={`${isDarkMode ? "buttonDark" : "buttonWhite"} button`}
            onClick={handleClick}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

Quote.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
export default Quote;
