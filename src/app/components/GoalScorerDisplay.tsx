import React, { SyntheticEvent, Dispatch } from "react";
import { TeamScore } from "./TeamScorer";

type Props = {
  teamAScoreObject: TeamScore;
  setTeamAScoreObject: Dispatch<React.SetStateAction<TeamScore>>;
};

function GoalScorerDisplay({ teamAScoreObject, setTeamAScoreObject }: Props) {
  let inputRef = React.createRef<HTMLInputElement>();
  // Adds the name from input into the goal array under scorer
  function updateScorer(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    // The ref refers to the input element but the id is set on the form element
    const id = Number(inputRef.current?.parentElement?.id);
    // The name is on the input element
    const name = inputRef.current?.value;

    console.log(id, name);

    const newArray = teamAScoreObject.goal;
    newArray[id] = {
      scorer: name,
      period: newArray.period,
      time: newArray.time,
      id: newArray.id,
    };
    setTeamAScoreObject({
      goal: newArray,
      behind: teamAScoreObject.behind,
    });
  }

  // make a function that removes the target index from the goal array 
  function handleClick(e:SyntheticEvent<HTMLFormElement>){
    // const targetIndex = e.target.id
    // const newArray = teamAScoreObject.goal.spice(targetIndex, targetIndex)
  }

  // loops through the goal array, if a scorer name exists, it's rendered. If not,
  const goalScorer = teamAScoreObject.goal.map((line, index) => {
    if (line.scorer) {
      return <div className="flex gap-2 m-2"key={index}><li>{line.scorer}</li><button id={index} onClick={handleClick} className="bg-yellow-200 p-2">Delete</button>
      </div>
    }
    return (
      <div key={index}>
        <form className="flex gap-2" id={index} onSubmit={updateScorer}>
          <input
            ref={inputRef} // Ref is attached to the input element
            className="bg-green-200 p-2"
            id="name"
            type="text"
          />
          <input className="bg-yellow-200 p-2" type="submit" />
        </form>
      </div>
    );
  });

  return (
    <div>
      <ul>{goalScorer}</ul>
    </div>
  );
}

export default GoalScorerDisplay;
