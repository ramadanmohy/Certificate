import React, { useContext } from "react";
import MyContext from "../context/context";

const Editor = ({}) => {
  const context = useContext(MyContext);

  const updateBoldOrItalic = (key, value) => {
    const payload = {
      index: context.item.index,
      key: key,
      value:
        context.items[context.item.index].style[key] == "unset"
          ? value
          : "unset",
    };
    context.updateStyle(payload);
  };

  const update = (key, value) => {
    const payload = {
      index: context.item.index,
      key,
      value,
    };
    context.updateStyle(payload);
  };

  if (context.item && context.item.id)
    return (
      <div className="editor">
        <span
          onClick={() => updateBoldOrItalic("fontStyle", "italic")}
          className="italic"
        >
          I
        </span>
        <span
          onClick={() => updateBoldOrItalic("fontWeight", "bold")}
          className="bolder"
        >
          B
        </span>
        <span className="font-size">
          Font Size
          <div className="size-list">
            {[8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32].map(
              (item, index) => (
                <div
                  onClick={() => update("fontSize", `${item}px`)}
                  key={index}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </span>
        <span className="font-family">
          Font Family
          <div className="font-list">
            {["serif", "sans-serif", "monospace", "Arial"].map(
              (item, index) => (
                <div onClick={() => update("fontFamily", item)} key={index}>
                  {item}
                </div>
              )
            )}
          </div>
        </span>
        <span className="color">Color</span>
      </div>
    );
  else return null;
};

export default Editor;
