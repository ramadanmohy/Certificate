import React, { useReducer, useEffect } from "react";

import MyAppContext from "./context";
import {
  Reducer,
  SET_ITEMS,
  SET_IMAGE_URL,
  SET_ACTIVE_ITEM,
  UPDATE_STYLE,
  SET_HTML,
} from "./reducers";

const GlobalState = (props) => {
  const [myState, dispatch] = useReducer(Reducer, {
    items: [],
    url: null,
    item: {},
    html: null,
  });

  const setItems = (items) => {
    dispatch({ type: SET_ITEMS, items });
  };

  const setImageUrl = (url) => {
    dispatch({ type: SET_IMAGE_URL, url });
  };

  const setActiveItem = (item) => {
    dispatch({ type: SET_ACTIVE_ITEM, item });
  };

  const updateStyle = (payload) => {
    dispatch({ type: UPDATE_STYLE, payload });
  };

  const setHtml = (html) => {
    dispatch({ type: SET_HTML, html });
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(myState.items));
    console.log(myState.items);
  }, [myState.items]);

  return (
    <MyAppContext.Provider
      value={{
        items: myState.items,
        item: myState.item,
        url: myState.url,
        html: myState.html,
        setImageUrl: setImageUrl,
        setItems: setItems,
        setActiveItem: setActiveItem,
        updateStyle: updateStyle,
        setHtml: setHtml,
      }}
    >
      {props.children}
    </MyAppContext.Provider>
  );
};

export default GlobalState;
