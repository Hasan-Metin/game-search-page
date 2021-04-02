import React, { useState, useEffect, useMemo } from "react";
import "./LetterList.style.scss";
import polygon from "../../assets/polygon.svg";

function LetterList(props) {
  const [filter, setFilter] = useState("");
  const [displayList, setDisplayList] = useState([]);
  let { data } = props;

  const sortList = useMemo(() => {
    let sorted;
    if (filter === "up") {
      sorted = data.sort((a, b) =>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
      );
    } else {
      sorted = data.sort((a, b) =>
        b.title.toUpperCase() < a.title.toUpperCase() ? -1 : 1
      );
    }

    let endData = sorted.reduce((r, e) => {
      let alphabet = e.title[0];
      if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
      else r[alphabet].record.push(e);
      return r;
    }, {});

    let result = Object.values(endData);
    setDisplayList(result);
  }, [filter, data.length]);

  useEffect(() => {
    setFilter("up");
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-letter">
      <select
        value={filter}
        onChange={(event) => {
          handleChange(event);
        }}
        className="filter-letter__select-box"
      >
        <option value="up">Title A to Z</option>
        <option value="down">Title Z to A</option>
      </select>
      {displayList.map((list) => {
        return (
          <div className="filter-letter__result-box">
            <div className="filter-letter__result-box--letter-title">
              <img src={polygon} alt="polygon icon" />
              <p>{list.alphabet}</p>
            </div>
            <div className="filter-letter__result-box--letter-items">
              {list.record.map((item, index) => (
                <p>{item.title}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { LetterList };
