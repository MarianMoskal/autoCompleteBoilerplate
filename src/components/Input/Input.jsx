import React from "react";
import s from "./Input.module.css";

export default function Input({ search, handleChange }) {
  return (
    <input
      type="text"
      id="input"
      required={true}
      value={search}
      autoComplete="off"
      placeholder="Enter user name"
      onChange={handleChange}
      className={s.input}
    />
  );
}
