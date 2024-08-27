import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import quoteList from "../assets/quotes.jsx";
import PropTypes from "prop-types";

function Quote({ isDarkMode }) {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState({
    text: "Quote Generator",
    author: "",
  });

  useEffect(() => {
    setQuotes(quoteList);
  }, []);

  // useEffect(() => {
  //   const fetchQuotes = async () => {
  //     try {
  //       const result = await fetch("https://api.quotable.io");
  //       const data = await result.json();
  //       const cleanedData = data.map((quote) => ({
  //         text: quote.text,
  //         author: cleanAuthor(quote.author),
  //       }));
  //       setQuotes(cleanedData);
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //       return;
  //     }
  //   };
  //   fetchQuotes();
  // }, []);

  // const cleanAuthor = (author) => {
  //   if (!author || author.trim() === "" || author.trim() === "type.fit") {
  //     return "Unknown";
  //   }
  //   return author.split(",")[0].trim();
  // };

  const handleClick = () => {
    if (quotes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setNewQuote(randomQuote);
  };

  return (
    <div className="wrapper">
      <div
        id="quote-textbox"
        className={isDarkMode ? "quotesDark" : "quotesLight"}
      >
        <p id="text">{newQuote.text}</p>
        <p id="author">{newQuote.author}</p>
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
