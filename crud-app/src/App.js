import { useEffect, useState } from "react";


function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() =>{
 fetch("http://localhost:3030/users")
 .then(res=> res.json())
 .then(data =>{setColumns(Object.keys(data[0]))
                setRecords(data)
  })
  // console.log(columns)
  // console.log(records)
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead className="head">
          <tr>
          {columns.map((x, i)=> (
            <th key={i}>{x}</th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          
            {records.map((x, i)=>(
              <tr key={i}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>Edit/Delete</td>
              </tr>
            ))}
        
        </tbody>
      </table>
    </div>
  );
}

export default App;
