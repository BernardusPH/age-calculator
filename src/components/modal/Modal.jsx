import ReactDOM from "react-dom";
import "./Modal.css";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}
function Modal(props) {
    return(
  <div className="modal">
    <h2>Happy BirthDay</h2>
   <p>Today is a special day for you because it's your birthday. I hope that you will have (or had) a wonderful day</p>
   <p>Here is a present from me: <a target="_blank" href="https://www.youtube.com/watch?v=w4sld2U7lxk&t=1s&ab_channel=eldolendotv"> Happy birthDay</a></p>
    <footer>
      <button onClick={props.onClose}>Close</button>
    </footer>
  </div>);
}
function PopUp(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal onClose={props.onclick}  />,
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
