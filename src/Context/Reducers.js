const contextReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER_DATA":
        return { ...state, userData: action.payload };
    }
  };
  
  export default contextReducer;