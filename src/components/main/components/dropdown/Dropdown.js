import React, { useState } from "react";
import Arrow from "../../assets/arrowIconDown.svg";
import "./Dropdown.style.scss";

function Dropdown(props) {
  const [isOpened, setOpened] = useState(false);
  const [selection, setSelection] = useState([]);
  const { title, items } = props;

  const handleSelection = (item) => {
    let list = selection;
    if (selection.includes(item)) {
      list = selection.filter((value) => value !== item);
      setSelection(list);
    } else {
      list.push(item);
      setSelection(list);
    }
    if (title === "State") {
      props.state(list);
    } else {
      props.genre(list);
    }
  };

  return (
    <div className="filter-dropdown">
      <div className="filter-dropdown__select-label">
        <label>{title}</label>
        <img
          src={Arrow}
          alt="dropdown arrow"
          onClick={() => {
            setOpened(!isOpened);
          }}
        />
      </div>
      {isOpened && (
        <div>
          {items.map((item, index) => {
            return (
              <div
                className="filter-dropdown__selection"
                key={() => index.toString()}
              >
                <input
                  onClick={(e) => {
                    handleSelection(e.target.name);
                  }}
                  type="checkbox"
                  id={item}
                  name={item}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { Dropdown };
