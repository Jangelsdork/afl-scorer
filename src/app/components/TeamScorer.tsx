import { useState } from "react";
import GoalScorerDisplay from "./GoalScorerDisplay";
import { Game } from "../page";

export interface TeamScore {
  goal: { scorer?: string; period: number; time: number; id?: number }[];
  behind: number;
}

type Props = {
  gameSetup: Game;
  secondsLeft: number;
  currentInterval: number;
};

const initialState = { goal: [], behind: 0 };

function TeamScorer({ gameSetup, secondsLeft, currentInterval }: Props) {
  // Object which holds the left column team's score info
  const [teamAScoreObject, setTeamAScoreObject] =
    useState<TeamScore>(initialState);
  // Object which holds the right column team's score info
  const [teamBScoreObject, setTeamBScoreObject] =
    useState<TeamScore>(initialState);

  // adds together the goals and behinds to give the total score of each team
  const totalScoreA: number =
    teamAScoreObject.behind + teamAScoreObject.goal.length * 6;
  const totalScoreB: number =
    teamBScoreObject.behind + teamBScoreObject.goal.length * 6;

  // Updates the goal array with a new "Goal" object (blank scorer)
  function plusGoalTeamA() {
    const nextArray: any = teamAScoreObject.goal.concat([
      {
        scorer: "",
        period: currentInterval,
        time: secondsLeft,
        id: teamAScoreObject.goal.length,
      },
    ]);
    setTeamAScoreObject({ goal: nextArray, behind: teamAScoreObject.behind });
  }
  function plusGoalTeamB() {
    const nextArray: any = teamBScoreObject.goal.concat([
      {
        scorer: "",
        period: currentInterval,
        time: secondsLeft,
        id: teamBScoreObject.goal.length,
      },
    ]);
    setTeamBScoreObject({ goal: nextArray, behind: teamBScoreObject.behind });
  }

  // Adds a point to the "behind" score
  function plusBehindTeamA() {
    setTeamAScoreObject({
      goal: teamAScoreObject.goal,
      behind: teamAScoreObject.behind + 1,
    });
  }
  function plusBehindTeamB() {
    setTeamBScoreObject({
      goal: teamBScoreObject.goal,
      behind: teamBScoreObject.behind + 1,
    });
  }
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="flex flex-col items-center">
        <div className="text-[30px] font-bold">{gameSetup.teamA}</div>
        <div className="flex flex-row">
          <button
            className="cursor-pointer bg-indigo-600 p-3 m-2 rounded-3xl"
            onClick={plusGoalTeamA}
          >
            ADD GOAL
          </button>
          <button
            className="cursor-pointer  bg-indigo-600 p-3 m-2  rounded-3xl"
            onClick={plusBehindTeamA}
          >
            ADD BEHIND
          </button>
        </div>
        <div className="text-xl">
          {teamAScoreObject.goal.length}.{teamAScoreObject.behind}
        </div>
        <div className="text-[80px]">{totalScoreA}</div>
        <div className="text-xl font-bold">Goals:</div>
        <GoalScorerDisplay
          teamScoreObject={teamAScoreObject}
          setTeamScoreObject={setTeamAScoreObject}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[30px] font-bold">{gameSetup.teamB}</div>
        <div className="flex flex-row">
          <button
            className="cursor-pointer bg-indigo-600 p-3 m-2 rounded-3xl"
            onClick={plusGoalTeamB}
          >
            ADD GOAL
          </button>
          <button
            className="cursor-pointer  bg-indigo-600 p-3 m-2  rounded-3xl"
            onClick={plusBehindTeamB}
          >
            ADD BEHIND
          </button>
        </div>
        <div className="text-xl">
          {teamBScoreObject.goal.length}.{teamBScoreObject.behind}
        </div>
        <h1 className="text-[80px]">{totalScoreB}</h1>
        <div className="text-xl font-bold">Goals:</div>
        <GoalScorerDisplay
          teamScoreObject={teamBScoreObject}
          setTeamScoreObject={setTeamBScoreObject}
        />
      </div>
    </div>
  );
}

export default TeamScorer;
