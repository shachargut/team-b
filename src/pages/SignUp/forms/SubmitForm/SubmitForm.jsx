import React from "react";

function SubmitForm(props) {
  return (
    <form
      className={props.className}
      id={props.id}
      action={props.action}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}

export default SubmitForm;
