import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

function Featured() {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
            </div>
        </div>
    </div>
  )
}

export default Featured