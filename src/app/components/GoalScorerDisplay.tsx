import React, { SyntheticEvent, Dispatch, useState } from "react";
import { TeamScore } from "./TeamScorer";

type Props = {
  teamScoreObject: TeamScore;
  setTeamScoreObject: Dispatch<React.SetStateAction<TeamScore>>;
};

function GoalScorerDisplay({ teamScoreObject, setTeamScoreObject }: Props) {
  const inputRef = React.createRef<HTMLInputElement>();

  // Adds the name from input into the goal array under scorer
  function updateScorer(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    // The ref refers to the input element but the id is set on the form element
    const id = Number(inputRef.current?.parentElement?.id);
    // The name is on the input element
    const name = inputRef.current?.value;

    // This is the array that will be added to the score object once the user has input the scorer name. Only triggers if the object exists (enables the component to be reused for each team)

    const newArrayA = teamScoreObject.goal;
    newArrayA[id] = {
      scorer: name,
      period: newArrayA[id].period,
      time: newArrayA[id].time,
      id: newArrayA[id].id,
    };

    setTeamScoreObject({
      goal: newArrayA,
      behind: teamScoreObject.behind,
    });
  }
  // loops through the goal array, if a scorer name exists, it's rendered. If not, an input is returned to add player
  const goalScorer = teamScoreObject.goal.map((line, index) => {
    if (line.scorer) {
      return (
        <div className="flex gap-2 m-2" key={index}>
          <li className="gap-2 text-center">
            Scored by {line.scorer}, with {Math.trunc(line.time / 60)}:
            {line.time % 60} remaining in Q{line.period}
          </li>
        </div>
      );
    }
    return (
      <div className="mt-1 max-w-[40vw]" key={index}>
        <form
          className="flex flex-col sm:flex-row gap-2"
          id={index.toString()}
          onSubmit={updateScorer}
        >
          <input
            ref={inputRef} // Ref is attached to the input element
            className="bg-indigo-500 p-2 "
            id="name"
            type="text"
            placeholder="Goal scorer name..."
          />
          <input className="bg-indigo-600 p-2 rounded-3xl " type="submit" />
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
