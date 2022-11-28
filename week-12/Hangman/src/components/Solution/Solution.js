import Letter from "../Letters/Letter/Letter";
import "./Solution.css";

function Solution(props) {
  return (
    <div className="solution">
      <div className="guess">
        {props.solution.word.split("").map((l, i) => (
          <Letter key={i} letter={props.letterStatus[l] ? l : "_"} />
        ))}
      </div>
      <div className="hint">{props.solution.hint}</div>
    </div>
  );
}

export default Solution;
