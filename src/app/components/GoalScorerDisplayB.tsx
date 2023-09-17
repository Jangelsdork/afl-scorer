import React, { SyntheticEvent, Dispatch, useState } from "react";
import { TeamScore } from "./TeamScorer";

type Props = {
  teamBScoreObject: TeamScore;
  setTeamBScoreObject: Dispatch<React.SetStateAction<TeamScore>>;
};

function GoalScorerDisplay({
  teamBScoreObject,
  setTeamBScoreObject,
}: Props) {
  const inputRef = React.createRef<HTMLInputElement>();

  // Adds the name from input into the goal array under scorer
  function updateScorer(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    // The ref refers to the input element but the id is set on the form element
    const id = Number(inputRef.current?.parentElement?.id);
    // The name is on the input element
    const name = inputRef.current?.value;

    // This is the array that will be added to the score object once the user has input the scorer name. Only triggers if the object exists (enables the component to be reused for each team)

      const newArrayA = teamBScoreObject.goal;
      newArrayA[id] = {
        scorer: name,
        period: newArrayA[id].period,
        time: newArrayA[id].time,
        id: newArrayA[id].id,
      };

      setTeamBScoreObject({
        goal: newArrayA,
        behind: teamBScoreObject.behind,
      });

  }
  // loops through the goal array, if a scorer name exists, it's rendered. If not,
  // not sure why this works for team b... even though it's mapping over team A scores... 
  const goalScorer = teamBScoreObject.goal.map((line, index) => {
    if (line.scorer) {
      return (
        <div className="flex gap-2 m-2" key={index}>
          <li className="gap-2">
            Goal Scorer {index + 1}: {line.scorer}, Time:{" "}
            {Math.trunc(line.time / 60)}:{line.time % 60} remaining, Period:{" "}
            {line.period}
          </li>
        </div>
      );
    }
    return (
      <div key={index}>
        <form className="flex gap-2" id={index} onSubmit={updateScorer}>
          <input
            ref={inputRef} // Ref is attached to the input element
            className="bg-indigo-500 p-2"
            id="name"
            type="text"
            placeholder="Goal scorer name..."
          />
          <input className="bg-indigo-600 p-2 rounded-3xl" type="submit" />
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
