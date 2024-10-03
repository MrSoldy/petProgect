import React  from "react";
import classes from "./StyleContMyMessage.module.css";

export const Footer = ({handleChange, input, setInput}) => {


  return (
    <div className={classes.footerText}>
      <input
        value={input}
        name="message"
        type="text"
        placeholder="Введите сообщение"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleChange();
        }}
      >
        отправить
      </button>
    </div>
  );
};
