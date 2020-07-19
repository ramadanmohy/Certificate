import React, { useContext, useState } from "react";
import MyContext from "../context/context";

const Save = () => {
  const context = useContext(MyContext);

  const [html, setHtml] = useState(
    `<div style="width: 750px; height: 500px; box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2); background-image: url(${context.url}); position: relative;  background-size: cover; background-position: center; background-repeat: no-repeat no-repeat;">`
  );

  const css = (input) => {};

  const saveAsHtml = () => {
    let temp = html;
    context.items.forEach((item) => {
      temp =
        temp +
        `\n <p style="position: absolute; top: ${item.y - 70}px; left: ${
          item.x - 450
        }px;">${item.text}</p> \n`;
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
