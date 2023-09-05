import React from 'react'
import { TeamScore } from './TeamScorer'

type Props = {
    teamAScoreObject: TeamScore
}

function GoalScorerDisplay({teamAScoreObject}: Props) {

        const goalScorer = teamAScoreObject.goal.map((line) => <li>{line.scorer}</li> )

  return (
    <div>
        <ul>{goalScorer}</ul>
    </div>
  )
}

export default GoalScorerDisplay