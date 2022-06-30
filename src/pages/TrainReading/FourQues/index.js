import { useState } from "react";
import Input from "../../../components/common/InputValid";
import SubmitBtn from "../../../components/common/SubmitBtn";
import Text from "../../../components/common/Text";
import styles from './style.module.css'
import Underline from '../../../components/common/Underline'
import { useNavigate,useLocation } from "react-router-dom";
export default function FourQues(){
    const location = useLocation();
    const nevigateObject = location.state.nevigateObject;
    const navigate = useNavigate();
    const [vq1,setVq1]=useState(true);
    const [q1,setQ1]=useState("");

    const [vq2,setVq2]=useState(true);
    const [q2,setQ2]=useState("");

    const [vq3,setVq3]=useState(true);
    const [q3,setQ3]=useState("");

    const [vq4,setVq4]=useState(true);
    const [q4,setQ4]=useState("");

    function validForm(){
        if(q1.trim().length==0){ setVq1(false)}
        else if(q2.trim().length==0){ setVq2(false)}
        else if(q3.trim().length==0){ setVq3(false)}
        else if(q4.trim().length==0){ setVq4(false)}
        else {
            if(nevigateObject.roundCounter<=7){navigate("/train-reading/instructions",{state:{nevigateObject}})}
            else{navigate("/train_reading_level/exercise",{state:{nevigateObject}})}
    }
}


    return(
        <>
        {/* <Text title = "Instructions"/>
        <Text text="Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque. " /> */}
        {/* <div></div> */}
        <div className={styles.nTitle}>Instructions</div>
        <div className={styles.nUnderLine}><Underline/></div>
        <div className={styles.newText}>Consectetur fames feugiat interdum morbi placerat in. Leo commodo maecenas donec cursus aenean scelerisque eu. Ridiculus amet habitant gravida lobortis suscipit enim, consectetur quisque.</div>
        <div className={styles.fourQues}>
        <Input label={"Who is the main character?"} type="text" placeholder="Describe Here" valid={vq1} onInput={(e)=>{setVq1(true); setQ1(e.target.value)}}/>
        <Input label={"What can you say about the theme of the story?"} type="text" placeholder="Describe Here" valid={vq2} onInput={(e)=>{setVq2(true); setQ2(e.target.value)}}/>
        <Input label={"Why do you think the author wrote this book?"} type="text" placeholder="Describe Here" valid={vq3} onInput={(e)=>{setVq3(true); setQ3(e.target.value)}}/>
        <Input label={"What do you think is going to happen?"} type="text" placeholder="Describe Here" valid={vq4} onInput={(e)=>{setVq4(true); setQ4(e.target.value)}}/>
        </div>
        <SubmitBtn type="button" name="Done" click={validForm}/>
        </>
    )
}