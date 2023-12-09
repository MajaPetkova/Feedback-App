import { FormInput } from "./components/FormInput";


function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder= "Username"/>
         <FormInput placeholder="email"/>
         <FormInput placeholder = "full name"/>
         <FormInput placeholder="something else"/>
      </form>
    </div>
  );
}

export default App;
