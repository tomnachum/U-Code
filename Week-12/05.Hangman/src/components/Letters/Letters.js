import Letter from "./Letter/Letter";
import "./Letters.css";

function Letters(props) {
  return (
    <div className="letters">
      <h4>Available Letters:</h4>
      {Object.keys(props.letterStatus).map((l, i) => (
        <Letter
          letter={l}
          key={i}
          className={
            props.letterStatus[l] ? "chosen-letter" : "non-chosen-letter"
          }
          selectLetter={props.selectLetter}
        />
      ))}
    </div>
  );
}

export default Letters;
