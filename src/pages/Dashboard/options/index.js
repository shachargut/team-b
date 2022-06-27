import FunctionBtn from "../FunctionBtn";

export default function Options() {
  return (
    <>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Train Reading" />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Train Focus" />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Weekly Assessment" />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Freestyle" />
        </div>
      </div>
    </>
  );
}
