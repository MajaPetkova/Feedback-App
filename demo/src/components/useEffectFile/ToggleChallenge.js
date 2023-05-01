import { useState } from "react";

export const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

//   const toggleAlert = () => {
//     if (showAlert) {
//         setShowAlert(false);
//         return 
//     }
//     setShowAlert(true)
//   };

  return (
    <div>
      <h2>Toggle Challenge</h2>
      <button className="btn" onClick={()=>setShowAlert(!showAlert)}>
        Toggle
      </button>
      
      {showAlert && <Alert/>}
    </div>
  );
};
const Alert = () => {
  return <div className="alert">Hello World</div>;
};
