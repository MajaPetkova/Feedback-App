import { Starter } from "./components/useState/Starter";
import { Second } from "./components/useState/Second";
import { UseStateGotcha } from "./components/useState/UseStateGotcha";
import { UseEffectComponent } from "./components/useEffectFile/UseEffectComponent";
import { ShortComponent} from "./components/useEffectFile/ShortComponent";
import { ToggleChallenge } from "./components/useEffectFile/ToggleChallenge";


function App() {
  return (
    <div className="container">
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
