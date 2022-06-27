import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Questions(){
    
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
     navigate("intructions");
    console.log(formData);
  };

  const isFormValid = () => {
    const { questionOne, questionTwo, questionThree, questionFour} = formData;
    
    return questionOne && questionTwo && questionThree && questionFour;
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: value,
      };
    });
  };

    return(
    <div>
    <form noValidate onSubmit={onSubmit}>
      <h2> React Form</h2>
      <label>
        <span>Who is the main character?</span>
        <input
          name="questionOne"
          value={formData.questionOne || ''}
          onChange={onChange}
        />
      </label>
      <div>
      </div>
      <label>
        <span>What can you say about the theme of the story?</span>
        <input
          name="questionTwo"
          value={formData.questionTwo || ''}
          onChange={onChange}
        />
      </label>
      <label>
        <span>Why do you think the author wrote this book?</span>
        <input
          name="questionThree"
          value={formData.questionThree || ''}
          onChange={onChange}
        />
      </label>
      <label>
        <span>What do you think is going to happen?</span>
        <input
          name="questionFour"
          value={formData.questionFour || ''}
          onChange={onChange}
        />
      </label>
      <span>
        <button  disabled={!isFormValid()}>Submit</button>
      </span>
      {/* {JSON.stringify(formData)} */}
    </form>
    </div>
        )
    }
