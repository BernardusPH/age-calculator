import React, { useRef, useState } from "react";
import Header from "./components/heading/Header.jsx";
import Form from "./components/form/Form.jsx";
import Age from "./components/result/Age.jsx";
import Footer from "./components/footer/Footer.jsx";
import Modal from "./components/modal/Modal.jsx";

import "./App.css";

function App() {
  let dayInput = useRef();
  let monthInput = useRef();
  let yearInput = useRef();
  let [age, setAge] = useState({ years: "", months: "", days: "" });
  let [popUp, setPopUp] = useState({ title: "", text: "" });

  const calculateAge = () => {
    var today = new Date(0);

    var birthday = new Date(
      yearInput.current.value,
      monthInput.current.value - 1,
      dayInput.current.value
    );

    var diff = new Date(Date.now() - birthday.getTime());
   
    if (
      diff.getUTCMonth() == today.getUTCMonth() &&
      diff.getUTCDate() == today.getUTCDate()
    ) {
      setPopUp({
        title: "Happy BirthDay",
        text: " Today is a special day for you because today is your birthday. You better have a good time today.",
      });
    }
    if (Date.now() < birthday.getTime()) {
      setPopUp({
        title: "Calculation error",
        text: "It seems there has been an error.  Please check your input before calculating,  as it seems you might have overshot the months or days",
      });
    } else {
      setAge({
        years: Math.abs(diff.getUTCFullYear() - today.getUTCFullYear()),
        months: Math.abs(diff.getUTCMonth() - today.getUTCMonth()),
        days: Math.abs(diff.getUTCDate() - today.getUTCDate()),
      });
    }
  };
  function closeModal() {
    setPopUp({ title: "", text: "" });
  }
  return (
    <React.Fragment>
      {popUp.title !== "" && popUp.text !== "" && (
        <Modal onclick={closeModal} title={popUp.title} text={popUp.text} />
      )}
      <Header />
      <main>
        <Form
          calculateAge={calculateAge}
          dayInput={dayInput}
          monthInput={monthInput}
          yearInput={yearInput}
        />
        <Age age={age} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
