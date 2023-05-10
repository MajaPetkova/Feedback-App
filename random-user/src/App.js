import {FaUserAlt,FaRegCalendarTimes,FaMap, FaPhone, FaLock, FaEnvelopeOpen}  from "react-icons/fa";

const url = "https://randomuser.me/api/";

function App() {
  return (
    <main>
      <div className="bgg"></div>
      <div className="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh9Y7tcmwEr_od64uK2G5DokOr_yxia1xVw&usqp=CAU" alt="name" />
        <p>My name is</p>
        <h2>Anna</h2>
        <div className="icons">
          <FaUserAlt/>
          <FaEnvelopeOpen/>
          <FaRegCalendarTimes/>
          <FaMap/>
          <FaPhone/>
          <FaLock/>
        </div>
        <button className="btn">Random User</button>
      </div>
    </main>
  );
}

export default App;
