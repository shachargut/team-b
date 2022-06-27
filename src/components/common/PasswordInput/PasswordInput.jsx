import "./style.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";

// Creator : Team D - Dov
const PasswordInput = (props) => {
  return (
    <>
      <fieldset>
        <legend>password</legend>
        <input className="password-input" type="password" placeholder="" />
        <AiOutlineEyeInvisible className="hide-icon" />
      </fieldset>
    </>
  );
};

export default PasswordInput;
