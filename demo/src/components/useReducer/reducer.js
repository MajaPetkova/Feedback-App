import { CLEAR_ITEM, CLEAR_LIST, RESET_LIST } from "./actions";
import { data } from "../../data";

const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [] };
    }
    if (action.type === RESET_LIST) {
      return { ...state, people: data };
    }
    if (action.type === CLEAR_ITEM) {
      let newPeople = state.people.filter((x) => x.id !== action.payload.id);
      return { ...state, people: newPeople };
  
      // return state;
    }
  };
  export default reducer;
