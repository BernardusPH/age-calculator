import React, { useRef, useState } from "react";
import Header from "./components/heading/Header.jsx";
import Form from "./components/form/Form.jsx";
import Age from "./components/result/Age.jsx";
import Footer from "./components/footer/Footer.jsx";
import Birthday from "./components/modal/Modal.jsx"

import "./App.css";

function App() {
  let dayInput = useRef();
  let monthInput = useRef();
  let yearInput = useRef();
  let [age, setAge] = useState({ years: "", months: "", days: "" });
  let [birthday,setBirthday]=useState(false)

  const calculateAge = () => {
    var today = new Date(0);

    var birthday = new Date(
      yearInput.current.value,
      monthInput.current.value - 1,
      dayInput.current.value
    );

    var diff = new Date(Date.now() - birthday.getTime());
      if(Date.now()>birthday.getTime()){
    setAge({
      years: Math.abs(diff.getUTCFullYear() - today.getUTCFullYear()),
      months: Math.abs(diff.getUTCMonth() - today.getUTCMonth()),
      days: Math.abs(diff.getUTCDate() - today.getUTCDate()),
    });
  }
    if(diff.getUTCMonth() == today.getUTCMonth() && diff.getUTCDate() == today.getUTCDate()  ){
      setBirthday(true)
    }
  };
  function closeModal(){
    setBirthday(false)
  }
  return (
    <React.Fragment>
    {birthday && <Birthday onclick={closeModal} />}
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
      <Footer/>
    </React.Fragment>
  );
}

export default App;
