import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";

function New() {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput" >
                <label htmlFor="file">Image <DriveFolderUploadOutlinedIcon className="icon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="john@yahoo.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+1 999 555 727" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"  />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Main street 123 New York" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
