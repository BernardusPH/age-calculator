import ReactDOM from "react-dom";
import "./Modal.css";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}
function Modal(props) {
    return(
  <div className="modal">
    <h2>{props.title}</h2>
   {props.text}
    <footer>
      <button onClick={props.onClose}>Close</button>
    </footer>
  </div>);
}
function PopUp(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal onClose={props.onclick} title={props.title} text={props.text} />,
        document.getElementById("modal-overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onclick} />,
        document.getElementById("backdrop")
      )}
    </>
  );
}

export default PopUp;
