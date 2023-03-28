import PropTypes from "prop-types";

export const Header =({text, bgColor, textColor}) =>{
    const headerStyles={
        backgroundColor: bgColor,
        color: textColor,
    }
    return(
      <header style={headerStyles}>
       <div className="container">
        {/* Feedback UI */}
        {text}
       </div>

      </header>
    )
}
Header.defaultProps ={
    text: "FeedbackUI",
     bgColor: "rgba(0,0,0,0.4)",
     textColor: "#ff6a95"
}
Header.propTypes={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}