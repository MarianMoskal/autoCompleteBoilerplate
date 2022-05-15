import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Options from "../Options/Options";
import s from "./Form.module.css";

export default function Form({ userNames }) {
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const names = userNames.filter(
        (n) => n.toLowerCase().substring(0, search.length) === search
      );

      setMatches(names);
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const handleClick = (e) => {
    setSearch(e.currentTarget.textContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`You entered ${search.toUpperCase()} name`);
    e.target.input.value = "";
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.container}>
        <Input search={search} handleChange={handleChange} />
        <Options search={search} matches={matches} handleClick={handleClick} />
      </div>
      <button className={s.button} type="submit">
        Submit
      </button>
    </form>
  );
}
