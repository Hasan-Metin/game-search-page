import React, { useState } from "react";
import "./SearchBanner.style.scss";
import MagnifiyGlass from "./assets/magnify.svg";

function SearchBanner(props) {
  const { data } = props;

  const [display, setDisplay] = useState("");

  const handleChange = (text) => {
    if (!!text) {
      let list = data.filter((item) => {
        let searched = item.title.toLowerCase();
        let searching = text.toLowerCase();
        return searched.startsWith(searching);
      });
      setDisplay(list);
      props.list(list);
    } else {
      setDisplay("");
      props.list(data);
    }
  };

  return (
    <section id="banner-wrapper">
      <div className="search-banner">
        <div className="search-banner__text-box">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            With the Cloud Gaming, you can join, play, and share games online
            with anyone in the world. Play any game on any device
          </p>
        </div>
        <div className="search-banner__search-box">
          <div className="search-banner__search-box--search-bar">
            <img src={MagnifiyGlass} alt="magnify glass for search" />
            <input
              type="text"
              id="game"
              name="game"
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          {display.length > 0 && (
            <div className="search-banner__search-box--results-bar">
              {display.map((item, index) => (
                <p key={index}>{item.title}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export { SearchBanner };
