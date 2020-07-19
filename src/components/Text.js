import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  useContext,
} from "react";
import MyContext from "../context/context";

const Text = forwardRef(
  (
    { isDisplay, text, customChange, index, item, type, changeMode, x, y },
    ref
  ) => {
    const [updatedText, setText] = useState("");
    const context = useContext(MyContext);

    useEffect(() => {
      dragElement(document.getElementById(`item${index}`));
      setText(text);
    }, []);

    const changeText = (e) => {
      setText(e.target.value);
    };

    const onDobleClickInput = (index) => {
      customChange("text", updatedText.trim(), index);
      clickHandler(index);
      setTimeout(() => {
        dragElement(document.getElementById(`item${index}`));
      }, 500);
    };

    const dragElement = (elmnt) => {
      elmnt.style.top = y - 70 + "px";
      elmnt.style.left = x - 450 + "px";
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        customChange("x", elmnt.offsetLeft - pos1 + 450, index);
        customChange("y", elmnt.offsetTop - pos2 + 70, index);
        console.log(`Ax ${x}  Ay ${y}`);
        console.log(
          `x  ${elmnt.offsetLeft - pos1}  y ${elmnt.offsetTop - pos2}`
        );
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    };

    useImperativeHandle(ref, () => ({
      dragElement(elmnt) {
        elmnt.style.top = y - 70 + "px";
        elmnt.style.left = x - 450 + "px";
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        elmnt.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      },
    }));

    const clickHandler = (index) => {
      changeMode(index);
    };

    const setActive = () => {
      context.setActiveItem({ ...item });
    };

    let content = (
      <p
        onClick={setActive}
        onDoubleClick={() => clickHandler(index)}
        style={context.items[index].style}
        id={"item" + index}
      >
        {type != "temp" ? text : "[ " + text + " ]"}
      </p>
    );
    if (!isDisplay)
      content = (
        <input
          onDoubleClick={() => onDobleClickInput(index)}
          type="text"
          value={updatedText}
          onChange={changeText}
          id={"item" + index}
        />
      );
    return content;
  }
);

export default Text;
