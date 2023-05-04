import { useState } from "react";
import { data } from "../../data";

export const Starter = () => {
  const [people, setPeople] = useState(data);

  const removeHandler = () => {
    if(people.length == 0){
      setPeople(data);
      return
    }
    setPeople([]);
  };
  const removeOneHandler = (id) => {
    const newArr = people.filter((x) => x.id !== id);
 
    setPeople(newArr);
  };
  return (
    <div>
      <h2>UseState Array Example</h2>
      {people.map((x) => {
        return (
          <div key={x.id}>
            <p>{x.name}</p>
            <button className="btn-one" onClick={() => removeOneHandler(x.id)}>
              Remove item
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={removeHandler}
        style={{ marginTop: "30px" }}
      >
        {people.length >0 ? "Clear All" : "Reset"}
      </button>
    </div>
  );
};
