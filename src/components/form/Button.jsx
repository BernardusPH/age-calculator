import Buttonimg from "/images/icon-arrow.svg"
import classes from "./Button.module.css"
function Button() {
    return (  
        <div className={classes["form-submit-container"]}>
            <hr />
            <button className={classes["form-submit-button"]} type="submit"><img src={Buttonimg} alt="submit-img" /></button>
        </div>
    );
}

export default Button;