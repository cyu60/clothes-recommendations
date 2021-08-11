
const ColorChoice = (props) => {
  return (
    <div
    style={{backgroundColor: props.backgroundColor}}
    class="theme-dot"
    onClick={props.onClick}
  ></div>
  );
};
export default ColorChoice;
