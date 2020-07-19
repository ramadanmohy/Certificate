import React, { useContext } from "react";
import MyContext from "../context/context";

const Side = (props) => {
  const context = useContext(MyContext);

  const drag = (ev) => {
    ev.dataTransfer.setData("id", ev.target.id);
  };

  const uploadFile = (event) => {
    context.setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          {" "}
          <a draggable={true} id="text" onDragStart={drag}>
            Text
          </a>
        </li>
        <li>
          {" "}
          <a draggable={true} id="temp" onDragStart={drag}>
            Placeholder{" "}
          </a>
        </li>
        <li>
          {" "}
          <a>
            {" "}
            <input
              onChange={uploadFile}
              type="file"
              style={{ display: "none" }}
              id="uploadImage"
            />
            <label className="mb-0" htmlFor="uploadImage">
              {" "}
              Upload Template{" "}
            </label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Side;
