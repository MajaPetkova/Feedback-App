import { createContext } from "react";
export const AppContext = createContext();


const ContextProvider = (props)=>{
    const phone= "+1 23 4567890"
    const name= "Peter"

  return (
    <AppContext.Provider value={{phone, name}}>{props.children}</AppContext.Provider>
  )
}
export default ContextProvider;