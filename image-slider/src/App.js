import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slides } from "./data";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onImgHover = () => {
    setShowButtons(true);
  };
  // const removeBtn = () => {
  //   setShowButtons(false);
  // };
  const clickLeft = () => {
    const firstInx = currentIndex === 0;
    const prevInd = firstInx ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevInd);
  };
  const clickRight = () => {
    const lastIdx = currentIndex === slides.length - 1;
    const newInd = lastIdx ? 0 : currentIndex + 1;
    setCurrentIndex(newInd);
  };
  const goToSlide = (id) => {
    setCurrentIndex(id);
  };

  return (
    <>
      <div className="container">
        <div className="background" onMouseEnter={onImgHover}>
          <img src={slides[currentIndex].url} alt="img" />
        </div>

        <div className={showButtons ? "buttons" : "btn"}>
          <div onClick={clickLeft}>
            <FaArrowLeft></FaArrowLeft>
          </div>
          <div onClick={clickRight}>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </div>
      <div className="dots">
        {slides.map((x, index) => {
          return (
            <div>
              <RxDotFilled
                key={index}
                onClick={() => goToSlide(index)}
              ></RxDotFilled>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
