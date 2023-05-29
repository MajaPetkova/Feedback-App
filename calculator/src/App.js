function App() {
  const createDigits = () =>{
    const arr=[];
    for(let i=1; i<10; i++){
      arr.push(<button key={i}>{i}</button>)
    }
    return arr;
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>32</span>
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>DEL</button>
        </div>
        <div className="digits">
         {createDigits()}
        <button>0</button>
        <button>.</button>
        <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
