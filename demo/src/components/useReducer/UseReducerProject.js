import { useState, useReducer } from "react";
import { data } from "../../data";
import { CLEAR_ITEM, CLEAR_LIST, RESET_LIST } from "./actions";

// const [people, setPeople] = useState(data);

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
if(action.type === CLEAR_LIST){
  return { ...state, people: []}
}
if(action.type === RESET_LIST){
  return { ...state, people: data}
}
if(action.type === CLEAR_ITEM){
  let newPeople = state.people.filter((x) => x.id !== action.payload.id)
  return { ...state, people: newPeople}

// return state;
};
}

export const UseReducerProject = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const removeHandler = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const addHandler = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  const removeOneHandler = (id) => {
    dispatch({ type: "CLEAR_ITEM", payload:{id} });
    // const newArr = people.filter((x) => x.id !== id);
    // setPeople(newArr);

  };
  return (
    <div>
      <h2>UseReducer Array Example</h2>
      {state.people.map((x) => {
        return (
          <div key={x.id}>
            <p>{x.name}</p>
            <button className="btn-one" onClick={() => removeOneHandler(x.id)}>
              Remove item
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          onClick={addHandler}
          style={{ marginTop: "30px" }}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          onClick={removeHandler}
          style={{ marginTop: "30px" }}
        >
          Clear all
        </button>
      )}
    </div>
  );
};
