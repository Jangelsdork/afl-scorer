import React, { SyntheticEvent, Dispatch } from 'react'
import { TeamScore } from './TeamScorer' 

type Props = {
    teamAScoreObject: TeamScore
    setTeamAScoreObject: Dispatch<React.SetStateAction<TeamScore>>
}


function GoalScorerDisplay({teamAScoreObject, setTeamAScoreObject}: Props) {


    function updateScorer(e: SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target)

        // set a variable as the new model for team a score, set team a score object as the new object 
    
    
    }
        const goalScorer = teamAScoreObject.goal.map((line) =>  {
        if(line.scorer){
        return <li key={teamAScoreObject.id}>{line.scorer}</li>
        }
        return (
            <div key={teamAScoreObject.id}>
                <form id={teamAScoreObject.id} onSubmit={updateScorer} >
                 <input id="name" type='text' />
                 <input type='submit' />
                </form>
            </div>
                
        )
      }
      )

  return (
    <div>
        <ul>{goalScorer}</ul>
    </div>
  )
}

export default GoalScorerDisplay