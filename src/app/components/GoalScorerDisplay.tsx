import React from 'react'
import { TeamScore } from './TeamScorer'

type Props = {
    teamAScoreObject: TeamScore
}

function GoalScorerDisplay({teamAScoreObject}: Props) {

        const goalScorer = teamAScoreObject.goal.map((line) =>  {
        if(line.scorer){
        return <li>{line.scorer}</li>
        }
        return <input></input>  
      }
      )

  return (
    <div>
        <ul>{goalScorer}</ul>
    </div>
  )
}

export default GoalScorerDisplay