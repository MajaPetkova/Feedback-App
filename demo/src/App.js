import { Starter } from "./components/useState/Starter";
import { Second } from "./components/useState/Second";
import { UseStateGotcha } from "./components/useState/UseStateGotcha";
import { UseEffectComponent } from "./components/useEffectFile/UseEffectComponent";
import { ShortComponent} from "./components/useEffectFile/ShortComponent";
import { ToggleChallenge } from "./components/useEffectFile/ToggleChallenge";
import { UserChallenge } from "./components/useEffectFile/UserChallenge";
import { List } from "./components/leverage JS/List";
import { ControlledInputs } from "./components/forms/ControlledInputs";



function App() {
  return (
    <div className="container">
      <ControlledInputs/>
      {/* <List/> */}
      <UserChallenge/>
      <ToggleChallenge/>
      <ShortComponent/>
      {/* <UseEffectComponent/> */}
      <Starter />
      <Second />
      <UseStateGotcha />
    </div>
  );
}

export default App;
