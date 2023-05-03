import { useState, useRef, useEffect } from "react";

export const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);
  //  console.log(refContainer)

  useEffect(() => {
    // console.log(isMounted);
    if(isMounted.current == false){
      isMounted.current = true;
      return
    }
    console.log("re-render")
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    // console.log(name);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            className="form-name"
            ref={refContainer}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Value: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
};
