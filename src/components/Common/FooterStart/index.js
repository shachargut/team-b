import "./style.css";
import startButton from "./startButton.png" 

// Focus : Shira from Team G - Shmuel 


function FooterStart(props) {
  return (
     <div className="bottomStart">
    
    <div className="startBtn"><img src= {startButton} /></div>
    <div className="box">
        <div className="startTitle">{props.children}MY TITLE</div>
        <div className="explanation"><p>{props.children}my explanation... blablablablablablablablabla</p></div>
        {/* //   TODO-> add an img to the div below  */}
        <div className="myEmoji"><img></img></div>      
      </div>
    
     </div>
  );
}

export default FooterStart;
