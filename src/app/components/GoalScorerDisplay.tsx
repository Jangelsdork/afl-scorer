import React from 'react'
import { TeamScore } from './TeamScorer'

type Props = {
    teamAScoreObject: TeamScore
}

function GoalScorerDisplay({teamAScoreObject}: Props) {
    // Map over the length of the object and return an input for each 
    
  return (
    <div>
        <input type="text" />
    </div>
  )
}

export default GoalScorerDisplay