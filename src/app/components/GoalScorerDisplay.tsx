import React from 'react'
import { TeamScore } from './TeamScorer'

type Props = {
    teamAScoreObject: TeamScore
}

function GoalScorerDisplay({teamAScoreObject}: Props) {
    // Map over the length of the object and return an input for each 
    // If the name value exists, then return that. If not, return an input. 

        function scorerName(line: any){
            console.log(line)
        }

        teamAScoreObject.goal.map(scorerName)

  return (
    <div>
        <input type="text" />
    </div>
  )
}

export default GoalScorerDisplay