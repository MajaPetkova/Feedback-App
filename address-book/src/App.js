import "./App.css";
import data from "./mock-data.json";


function App() {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Jenny Chan</th>
            <th>3 waterfoot road</th>
            <th>0777-555-222</th>
            <th>jenny.chan@email.com</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
