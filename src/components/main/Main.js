import React, { useState, useEffect } from "react";
import "./Main.style.scss";
import { Dropdown, LetterList } from "./components";

function Main(props) {
  const [mainData, setMainData] = useState(props.data);
  const [status, setStatus] = useState([]);
  const [genre, setGenre] = useState([]);
  const receievedData = props.data;

  useEffect(() => setMainData(receievedData), [receievedData.length]);

  // Working on this filtering function. It is not working proporly so that by passsed it.
  useEffect(() => {
    let firstLevel;
    let secondLevel;
    let data = mainData;

    if (false) {
      firstLevel = data.filter((item) =>
        genre.includes(item.genre.toLowerCase())
      );
      console.log({ firstLevel });
      if (status.length > 0) {
        secondLevel = firstLevel.filter((item) =>
          status.includes(item.state.toLowerCase())
        );
        setMainData(secondLevel);
      } else {
        setMainData(firstLevel);
      }
    } else {
      if (false) {
        secondLevel = data.filter((item) =>
          status.includes(item.state.toLowerCase())
        );
        setMainData(secondLevel);
      } else {
        setMainData(data);
      }
    }
  }, [genre.length, status.length]);

  return (
    <div id="main-wrapper">
      <div id="filter">
        <div className="side-filter">
          <div className="side-filter__title-box">
            <h3>Browse Games</h3>
          </div>
          <Dropdown
            title="State"
            items={["Available", "Patching", "Maintenance"]}
            state={(items) => {
              setStatus(items);
            }}
          />
          <Dropdown
            title="Genre Filters"
            items={[
              "Shooters",
              "Action",
              "RPG",
              "Racing",
              "MOBA",
              "Simulation",
              "Strategy",
              "Sports",
              "Family",
              "Casual",
              "Demo",
              "Horror",
              "Platformer",
              "Battle Royale",
              "Adventure",
              "Open World",
            ]}
            genre={(items) => {
              setGenre(items);
            }}
          />
        </div>
        <div className="title-filter">
          <LetterList data={mainData} />
        </div>
      </div>
    </div>
  );
}

export { Main };
