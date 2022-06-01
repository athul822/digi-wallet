import { byName,byDay } from "../Filters/filters";

const contextReducer = (state, action) => {
  let data;
  switch (action.type) {
    case "SET_USER_DATA":
      console.log("reduced");
      return { ...state, userData: action.payload ,userDataPermenent:action.payload};
    case "DAILY":
      data = state.userDataPermenent.filter((item)=>{
      return  (new Date() - new Date(item.date))/(1000*60*60*24) < 1 // "<" filter to todays date
      })
      //console.log(data)
      return { ...state, userData: data.sort(byName) };
    case "WEEKLY":
      data = state.userDataPermenent.filter((item)=>{
        let day = (new Date('2019-01-17') - new Date(item.date))/(1000*60*60*24)
        console.log(day);
        return day < 8 && day > -1// "<" filter to todays date
        })

      console.log("weekly"+data);
      return { ...state, userData:data.sort(byDay) };

    case "MONTHLY":
      console.log("monthly");
      return { ...state, userData: state.userDataPermenent.sort(byDay) };
  }
};

export default contextReducer;
