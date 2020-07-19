import React, { useContext, useState, useEffect } from "react";
import MyContext from "../context/context";

const Save = () => {
  const context = useContext(MyContext);

  const css = (input) => {
    switch (input) {
      case "fontWeight":
        return "font-weight";
      default:
        return input;
    }
  };

  const saveAsHtml = () => {
    let temp = `<div style="width: 750px; height: 500px; box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2); background-image: url(public/template.png); position: relative;  background-size: cover; background-position: center; background-repeat: no-repeat no-repeat;">`;
    context.items.forEach((item) => {
      temp =
        temp +
        `\n <p style="position: absolute; top: ${item.y - 80}px; left: ${
          item.x - 450
        }px; font-weight: ${item.style.fontWeight}; font-family: ${
          item.style.fontFamily
        }; font-size: ${item.style.fontSize};">${
          item.type != "temp" ? item.text : "[ " + item.text + " ]"
        }</p> \n`;
    });
    context.setHtml(temp + "</div>");
  };
  return (
    <div className="button-container">
      <button onClick={saveAsHtml}>Save</button>
      {context.html}
    </div>
  );
};

export default Save;
