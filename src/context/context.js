import React from "react";

export default React.createContext({
  items: [],
  url: null,
  item: {},
  html: null,
  setImageUrl: (url) => {},
  setItems: (items) => {},
  setActiveItem: () => {},
  updateStyle: () => {},
  setHtml: () => {},
});
