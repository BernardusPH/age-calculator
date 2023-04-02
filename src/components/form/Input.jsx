import classes from "./input.module.css";

function Input(props) {
    
  return (
    <div className={classes["input-wrapper"]}>
      <label className={`${classes["input-label"]} ${props.errorText==""?classes["input-label-normal"]:classes["input-label-error"]}`} htmlFor={props.id}>{props.label}</label>
      <input className={`${classes["user-input"]} ${props.errorText==""?classes["user-input-normal"]:classes["user-input-error"]}`} onChange={ props.errorClear} ref={props.inputReference} type="number" id={props.id} placeholder={props.placeholder} />
      <span className={classes["error-text"]}>{props.errorText}</span>
    </div>
  );
}

export default Input;
