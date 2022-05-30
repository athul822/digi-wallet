import { byName,byDay } from "../Filters/filters";

const contextReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      console.log("reduced");
      return { ...state, userData: action.payload ,userDataPermenent:action.payload};
    case "DAILY":
      let data = state.userDataPermenent.filter((item)=>{
      return (new Date() - new Date(item.date))/(1000*60*60*24) < 1 // "<" filter to todays date
      })
      //console.log(data)
      return { ...state, userData: data.sort(byName) };
    case "WEEKLY":
      console.log("weekly");
      return { ...state, userData:state.userDataPermenent.sort(byDay) };

    case "MONTHLY":
      console.log("monthly");
      return { ...state, userData: state.userDataPermenent.sort(byName) };
  }
};

export default contextReducer;
