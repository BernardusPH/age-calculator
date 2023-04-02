import classes from "./Age.module.css";
function Age(props) {
  return (
    <ul className={classes["user-age-container"]}>
      <li>
        <span className={classes["age-results"]}>
          {props.age.years === "" ? "--" : props.age.years}
        </span>{" "}
        <span className={classes["age-dates"]}> years</span>
      </li>
      <li>
        <span className={classes["age-results"]}>
          {props.age.months === "" ? "--" : props.age.months}
        </span>{" "}
        <span className={classes["age-dates"]}> months </span>
      </li>
      <li>
        <span className={classes["age-results"]}>
          {props.age.days === "" ? "--" : props.age.days}
        </span>{" "}
        <span className={classes["age-dates"]}> days</span>
      </li>
    </ul>
  );
}

export default Age;
