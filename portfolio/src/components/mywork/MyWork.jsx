import "./mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <>
              <div className="mywork-project" key={index}>
                <img src={work.w_img} alt=""  />
                <p className="desc">{work.w_name}</p>
                <a href={work.w_link} target="_blank">See project</a>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
