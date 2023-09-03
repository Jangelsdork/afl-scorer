import React from 'react'
import { useState } from 'react'

export type TeamScore = {
  goal: [{ scorer?: string; period?: number; time?: Date }];
  behind: number;
};

type Props = {
    gameSetup: Game
}



function TeamScorer({gameSetup}: Props) {
    const [teamAScore, setTeamAScore] = useState<number>(0)
    const [teamBScore, setTeamBScore] = useState<number>(0)

    const [teamAScoreObject, setTeamAScoreObject] = useState<TeamScore>()

    function plusGoalTeamA(){
        setTeamAScore(teamAScore + 6)
    }
    function plusGoalTeamB(){
        setTeamBScore(teamBScore + 6)
    }
    function plusBehindTeamA(){
        setTeamAScore(teamAScore + 1)
    }
    function plusBehindTeamB(){
        setTeamBScore(teamBScore + 1)
    }
  return (
    <div className='flex justify-between w-[80%]'>
          <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>{gameSetup.teamA}</div>
                <div className='flex flex-row'><div className='cursor-pointer'onClick={minusGoalTeamA}>-</div><div> GOALS </div><div className='cursor-pointer' onClick={plusGoalTeamA}>+</div></div>
                <div className='flex flex-row'><div className='cursor-pointer' onClick={minusBehindTeamA}>-</div><div> BEHINDS </div><div className='cursor-pointer' onClick={plusBehindTeamA}>+</div></div>
                <div className='text-xl font-bold'>{teamAScore}</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>{gameSetup.teamB}</div>
                <div className='flex flex-row'><div className='cursor-pointer'onClick={minusGoalTeamB}>-</div><div> GOALS </div><div className='cursor-pointer' onClick={plusGoalTeamB}>+</div></div>
                <div className='flex flex-row'><div className='cursor-pointer' onClick={minusBehindTeamB}>-</div><div> BEHINDS </div><div className='cursor-pointer' onClick={plusBehindTeamB}>+</div></div>
                <div className='text-xl font-bold'>{teamBScore}</div>
        </div>
          
    </div>
  )
}

export default TeamScorer