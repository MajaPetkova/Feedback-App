import { UseToggle } from "./UseToggle"

export const ToggleCustomHook =() =>{
  const {show, toggle} = UseToggle(true)
    return (
        <div>
            <h4>Toggle Custom Hook</h4>
            <button className="btn" onClick={toggle}>Toggle</button>
             {show && <h4>Some stuff</h4>}
            </div>
    )
}