import React from 'react'
import { TeamScore } from './TeamScorer'

type Props = {
    teamAScoreObject: TeamScore
}

function GoalScorerDisplay({teamAScoreObject}: Props) {
    // Map over the length of the object and return an input for each 
    // If the name value exists, then return that. If not, return an input. 

        function ScorerName(line: any){
            teamAScoreObject.goal.map((line) => {
            if(line.scorer){
                return <div>{line.scorer}</div>
            }
            return <input></input>
        }) 
        }


  return (
    <div>
        <ScorerName />
    </div>
  )
}

export default GoalScorerDisplay