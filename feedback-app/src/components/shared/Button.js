export const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} isDisabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
    version: "primary",
    type:"button",
    isDisabled: false
}