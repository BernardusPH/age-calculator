import ReactDOM from "react-dom";
import "./Modal.css";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}
function Modal(props) {
    return(
  <div className="modal">
    <h2>Happy BirthDay</h2>
    <p>Today is a special day for you because to day is your birthday</p>
    <p>
      Lets celebrate:{" "}
      <a target="_blank" href="https://www.youtube.com/watch?v=w4sld2U7lxk&ab_channel=eldolendotv">
        Happy Birthday
      </a>
    </p>
    <footer>
      <button onClick={props.onClose}>Close</button>
    </footer>
  </div>);
}
function Birthday(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal onClose={props.onclick} />,
        document.getElementById("modal-overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onclick} />,
        document.getElementById("backdrop")
      )}
    </>
  );
}

export default Birthday;
