import { useState } from "react";

import Input from "./Input.jsx";
import Button from "./Button.jsx";
import classes from "./Form.module.css";
function Form(props) {
  let [dayErrorText, setDayErrorText] = useState("");
  let [monthErrorText, setMonthErrorText] = useState("");
  let [yearErrorText, setYearErrorText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let DayErrorText = "";
    let MonthErrorText = "";
    let YearErrorText = "";

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const d = new Date();

    if (
      props.dayInput.current.value == "" ||
      props.dayInput.current.value >
        month[Number(props.monthInput.current.value) - 1] ||
      Number(props.dayInput.current.value) < 1 || 
      Number(props.dayInput.current.value) > 31 
    )
      DayErrorText = "Must be a valid Day";
    if (
      props.monthInput.current.value == "" ||
      Number(props.monthInput.current.value) > 12 ||
      props.monthInput.current.value < 1
    )
      MonthErrorText = "Must be a valid Month";
    if (props.yearInput.current.value == "" || Number(props.yearInput.current.value) < 1)
      YearErrorText = "Must be a valid Year";
    if (+props.yearInput.current.value > d.getFullYear())
      YearErrorText = "Must be in the past";

    setDayErrorText(DayErrorText);
    setMonthErrorText(MonthErrorText);
    setYearErrorText(YearErrorText);

    if (DayErrorText == "" && MonthErrorText == "" && YearErrorText == "") {
      props.calculateAge();
    }
  };
  const dayErrorClear=()=>{
    setDayErrorText("")
  }
  const monthErrorClear=()=>{
    setMonthErrorText("")
  }
  const yearErrorClear=()=>{
    setYearErrorText("")
  }

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className={classes["form-input-container"]}>
        <Input
          inputReference={props.dayInput}
          id={"day"}
          label={"DAY"}
          placeholder={"DD"}
          errorText={dayErrorText}
          errorClear={dayErrorClear}
        />
        <Input
          inputReference={props.monthInput}
          id={"month"}
          label={"Month"}
          placeholder={"MM"}
          errorText={monthErrorText}
          errorClear={monthErrorClear}
        />
        <Input
          inputReference={props.yearInput}
          id={"year"}
          label={"YEAR"}
          placeholder={"YYYY"}
          errorText={yearErrorText}
          errorClear={yearErrorClear}
        />
      </div>
      <Button />
    </form>
  );
}

export default Form;
