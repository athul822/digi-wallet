import { byName,byDay } from "../Filters/filters";

const contextReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      console.log("reduced");
      return { ...state, userData: action.payload };
    case "DAILY":
      console.log(action.payload);
      return { ...state, userData: action.payload.sort(byName) };
    case "WEEKLY":
      console.log("weekly");
      return { ...state, userData: action.payload.sort(byDay) };

    case "MONTHLY":
      console.log("monthly");
      return { ...state, userData: action.payload };
  }
};

export default contextReducer;
