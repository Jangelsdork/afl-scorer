import React from 'react'
import { useState } from 'react'
import { Game } from '../page';
import GoalScorerDisplay from './GoalScorerDisplay';


export interface TeamScore {
  goal: { scorer?: string; period?: number; time?: Date }[];
  behind: number;
};

type Props = {
    gameSetup: Game
}

const initialState = {goal:[], behind: 0}


function TeamScorer({gameSetup}: Props) {
    
    const [teamAScoreObject, setTeamAScoreObject] = useState<TeamScore>(initialState)
    const [teamBScoreObject, setTeamBScoreObject] = useState<TeamScore>(initialState)
    const totalScoreA:number = teamAScoreObject.behind + (teamAScoreObject.goal.length * 6) 
    const totalScoreB:number = teamBScoreObject.behind + (teamBScoreObject.goal.length * 6) 

    function plusGoalTeamA(){
        const nextArray: any = teamAScoreObject.goal.concat([{scorer: "Jack", period: 2}])
        setTeamAScoreObject({goal: nextArray, behind:teamAScoreObject.behind})
    }
    function plusGoalTeamB(){
        const nextArray: any = teamBScoreObject.goal.concat([{scorer: "Jill", period: 1}])
        setTeamBScoreObject({goal: nextArray, behind:teamBScoreObject.behind})
    }
    function plusBehindTeamA(){
        setTeamAScoreObject({goal: teamAScoreObject.goal, behind:teamAScoreObject.behind + 1})
    }
    function plusBehindTeamB(){
        setTeamBScoreObject({goal: teamBScoreObject.goal, behind:teamBScoreObject.behind + 1})
    }
  return (
    <div className='flex justify-between'>
          <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>{gameSetup.teamA}</div>
                <div className='flex flex-row'><div> GOALS </div><div className='cursor-pointer' onClick={plusGoalTeamA}>+</div></div>
                <div className='flex flex-row'><div> BEHINDS </div><div className='cursor-pointer' onClick={plusBehindTeamA}>+</div></div>
                <div className='text-xl font-bold'>{totalScoreA}</div>
                <GoalScorerDisplay teamAScoreObject={teamAScoreObject}/>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>{gameSetup.teamB}</div>
                <div className='flex flex-row'><div> GOALS </div><div className='cursor-pointer' onClick={plusGoalTeamB}>+</div></div>
                <div className='flex flex-row'><div> BEHINDS </div><div className='cursor-pointer' onClick={plusBehindTeamB}>+</div></div>
                <div className='text-xl font-bold'>{totalScoreB}</div>
        </div>
          
    </div>
  )
}

export default TeamScorer