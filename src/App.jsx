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
    let birthdate = new Date(yearInput.current.value, monthInput.current.value - 1, dayInput.current.value);
  
    // Check if input date is valid

  
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
      let daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      day += daysInMonth;
    }
    if (today.getFullYear() == birthdate.getFullYear()&& (today.getMonth()<birthdate.getMonth()||today.getDate()<birthdate.getDate()) ) {
      setPopUp({
        title: "Calculation error",
        text: "Invalid birthdate. Please enter a valid date.",
      });
      return;
    }

   
    
  
    // Check if today is user's birthday
    if (birthdate.getDate() === today.getDate() && birthdate.getMonth() === today.getMonth()) {
      setPopUp({
        title: "Happy Birthday!",
        text: "Today is your birthday! Have a great day!",
      });
    }
    setAge({ years: age, months: month, days: day });
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
