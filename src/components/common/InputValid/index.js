import "./style.css"

export default function Input(props) {

    const border = props.valid ? "" : "invalid"
    const label = props.valid ? "" : "invalidlabel"
    const placeholder = props.valid ? "" : "invalidtext"

    return (
        <>
            <fieldset className={border}>
                <legend className={label}>{props.label}</legend>

                <input onInput={props.onInput} className={`allInputs ${placeholder}`} type={props.type} placeholder={props.placeholder} value={props.value} />
            </fieldset>
        </>
    );
}