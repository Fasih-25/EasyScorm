import { createStore } from "redux";

const savedState = localStorage.getItem("reduxState");
const initialState = savedState
  ? JSON.parse(savedState)
  : { sidebarShow: true, user: [], portal: [] };
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      const newState = { ...state, ...rest };
      localStorage.setItem("reduxState", JSON.stringify(newState));
      return newState;
    case "addToArray":
      const newUserState = { ...state, user: [...state.user, rest.item] };
      localStorage.setItem("reduxState", JSON.stringify(newUserState));
      return newUserState;
    case "removeFromArray":
      const updatedUserState = {
        ...state,
        user: state.user.filter((item) => item !== rest.item),
      };
      localStorage.setItem("reduxState", JSON.stringify(updatedUserState));
      return updatedUserState;
    case "addToPortal":
      const newPortalState = { ...state, portal: [...state.portal, rest.item] };
      localStorage.setItem("reduxState", JSON.stringify(newPortalState));
      return newPortalState;
    case "removeFromPortal":
      const updatedPortalState = {
        ...state,
        portal: state.portal.filter((item) => item !== rest.item),
      };
      localStorage.setItem("reduxState", JSON.stringify(updatedPortalState));
      return updatedPortalState;
    default:
      return state;
  }
};

const store = createStore(changeState, initialState);

export default store;
