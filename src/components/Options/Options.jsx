import React from "react";
import s from "./Options.module.css";

export default function Options({ matches, search, handleClick }) {
  const rule = matches.length > 0 && search !== "";

  return (
    <div className={s.optionsContainer}>
      {rule &&
        matches.map((i) => {
          let sub, rest;

          if (i.toLowerCase().substring(0, search.length) === search) {
            sub = i.slice(0, search.length);
            rest = i.slice(search.length);
          }

          return (
            <div
              id="option"
              key={i}
              onClick={handleClick}
              className={s.subInput}
            >
              <b>{sub}</b>
              {rest}
            </div>
          );
        })}
    </div>
  );
}
