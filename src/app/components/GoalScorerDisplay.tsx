import React, { SyntheticEvent, Dispatch, useState } from "react";
import { TeamScore } from "./TeamScorer";

type Props = {
  teamAScoreObject: TeamScore;
  setTeamAScoreObject: Dispatch<React.SetStateAction<TeamScore>>;
};

function GoalScorerDisplay({
  teamAScoreObject,
  setTeamAScoreObject,
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

      const newArrayA = teamAScoreObject.goal;
      newArrayA[id] = {
        scorer: name,
        period: newArrayA[id].period,
        time: newArrayA[id].time,
        id: newArrayA[id].id,
      };

      setTeamAScoreObject({
        goal: newArrayA,
        behind: teamAScoreObject.behind,
      });

  }
  // loops through the goal array, if a scorer name exists, it's rendered. If not, an input is returned to add player 
  const goalScorer = teamAScoreObject.goal.map((line, index) => {
    if (line.scorer) {
        return (
            <div className="flex gap-2 m-2" key={index}>
              <li className="gap-2">Scored by {line.scorer}, with {" "}
                {Math.trunc(line.time / 60)}:{line.time % 60} remaining in Q{line.period}
              </li>
            </div>
          );
    }
    return (
        <div className="mt-1" key={index}>
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
  