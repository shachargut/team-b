import styles from './style.module.css'


export default function Input(props) {
  return (
   <>
       <fieldset>
        <legend >{props.txt}</legend>
      
      <input type="text" placeholder={props.txt} />
      </fieldset>
      </>
  );
}
