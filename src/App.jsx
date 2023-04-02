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
let [birthDay,setBirthDay]=useState(false)

  const calculateAge = (birthdate) => {

    let today = new Date();

    // Calculate age based on difference between birthdate and today's date
    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();
    let day = today.getDate() - birthdate.getDate();

    // Adjust month and day components if necessary
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
      month += 12;
    }
    if (day < 0) {
      month--;
      let daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      day += daysInMonth;
    }
  

    // Check if today is user's birthday
    if (
      birthdate.getDate() === today.getDate() &&
      birthdate.getMonth() === today.getMonth()
    ) {
     setBirthDay(true)
    }
    setAge({ years: age, months: month, days: day });
  };

  function closeModal() {
    setBirthDay(false)
  }
  function clearDate(){
    setAge({ years: "", months: "", days: "" });
  }
  return (
    <React.Fragment>
      {birthDay && (
        <Modal onclick={closeModal}  />
      )}
      <Header />
      <main>
        <Form
          calculateAge={calculateAge}
          dayInput={dayInput}
          monthInput={monthInput}
          yearInput={yearInput}
          clearDate={clearDate}
        />
        <Age age={age} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
