import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import { useState } from "react";

function New({title, inputs}) {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput" >
                <label htmlFor="file">Image <DriveFolderUploadOutlinedIcon className="icon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              {inputs.map((x) =>
              <div className="formInput" key={inputs.id}>
                <label>{x.label}</label>
                <input type={x.type} placeholder={x.placeholder} />
              </div>
              )}
               <div className="formInput">
              <button>Send</button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
