import React, { MouseEvent } from 'react'
import { TeamScore } from './TeamScorer' 

type Props = {
    teamAScoreObject: TeamScore
}

function updateScorer(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault()

}

function GoalScorerDisplay({teamAScoreObject}: Props) {

        const goalScorer = teamAScoreObject.goal.map((line) =>  {
        if(line.scorer){
        return <li>{line.scorer}</li>
        }
        return <div><input></input><button onClick={updateScorer}>Add</button></div>
      }
      )

  return (
    <div>
        <ul>{goalScorer}</ul>
    </div>
  )
}

export default GoalScorerDisplay