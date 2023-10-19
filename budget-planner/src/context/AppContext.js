import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_EXPENSE": 
    return{
       ...state,
       expenses: [...state.expenses, action.payload]
    }
    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 500 },
    { id: 14, name: "car service", cost: 150 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
