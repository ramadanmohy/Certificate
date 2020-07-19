export const SET_ITEMS = "SET_ITEMS";
export const SET_IMAGE_URL = "SET_IMAGE_URL";
export const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
export const UPDATE_STYLE = "UPDATE_STYLE";
export const SET_HTML = "SET_HTML";

const setItems = (items, state) => {
  return { ...state, items };
};

const setImageUrl = (url, state) => {
  return { ...state, url };
};

const setActiveItem = (item, state) => {
  return { ...state, item };
};

const updateStyle = (payload, state) => {
  const items = state.items.map((item, index) => {
    if (index == payload.index) {
      item.style = {
        ...item.style,
        [payload.key]: payload.value,
      };
      return item;
    } else return item;
  });
  return { ...state, items };
};

const setHtml = (html, state) => {
  return { ...state, html };
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return setItems(action.items, state);
    case SET_IMAGE_URL:
      return setImageUrl(action.url, state);
    case SET_ACTIVE_ITEM:
      return setActiveItem(action.item, state);
    case UPDATE_STYLE:
      return updateStyle(action.payload, state);
    case SET_HTML:
      return setHtml(action.html, state);
    default:
      return state;
  }
};
