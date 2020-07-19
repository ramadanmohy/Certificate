import React, { useRef, useContext } from "react";
import Text from "./Text";
import MyContext from "../context/context";

const CK = () => {
  const context = useContext(MyContext);
  const textRef = useRef();

  const items = context.items;
  const changeMode = (no) => {
    const newItems = items.map((item, index) => {
      if (index == no) {
        item.isDisplay = !item.isDisplay;
        return item;
      } else return item;
    });
    context.setItems(newItems);
    setTimeout(() => {
      const temp = document.getElementById(`item${no}`);
      temp.style.top = items[no].y - 70 + "px";
      temp.style.left = items[no].x - 450 + "px";
    }, 0);
    console.log(textRef, document.getElementById(`item${no}`));
  };

  const customChange = (key, value, index) => {
    const newItems = items.map((item, i) => {
      if (index == i) {
        item[key] = value;
        return item;
      } else return item;
    });
  };

  const renderItems = () => {
    return items.map((item, index) => {
      if (item.type == "text")
        return (
          <Text
            ref={textRef}
            customChange={customChange}
            changeMode={changeMode}
            key={index}
            item={item}
            {...item}
            index={index}
          />
        );
      else
        return (
          <p key={index} id={"item" + index}>
            {item.text}
          </p>
        );
    });
  };
  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = async (ev) => {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("id");
    const newItem = {
      text: id == "text" ? "Text Here" : "[ Template Name ]",
      type: id,
      x: ev.clientX,
      y: ev.clientY,
      isDisplay: true,
      id: `item${items.length}`,
      style: {
        fontWeight: "unset",
        fontSize: "16px",
        fontStyle: "unset",
        color: "black",
        fontFamily: "arial",
      },
      index: context.items.length,
    };
    const tempItems = [...items, newItem];
    await context.setItems(tempItems);
  };

  const url = context.url;
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      onDrop={(x) => drop(x)}
      onDragOver={(x) => allowDrop(x)}
      className="CK"
    >
      {renderItems()}
    </div>
  );
};

export default CK;
