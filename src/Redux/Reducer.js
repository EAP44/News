const initstate = {
  country:"us",
};
function Reducer(state = initstate, action) {
  switch (action.type) {
    case "SwitchCountry":
      return {...state,country:action.paylod}
    default:
        return state
  }
}
export default Reducer;
