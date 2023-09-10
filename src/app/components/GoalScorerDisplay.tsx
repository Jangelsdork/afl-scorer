import React, { SyntheticEvent, Dispatch } from 'react'
import { TeamScore } from './TeamScorer' 

type Props = {
    teamAScoreObject: TeamScore
    setTeamAScoreObject: Dispatch<React.SetStateAction<TeamScore>>
}


function GoalScorerDisplay({teamAScoreObject, setTeamAScoreObject}: Props) {


    function updateScorer(e: SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        const newArray : Array = teamAScoreObject.goal
        newArray[e.target.id] =  {
            scorer: e.target.name.value, 
            period: newArray.period, 
            time: newArray.time, 
            id: newArray.id
        }
        setTeamAScoreObject({
            goal: {newArray},
            behind: teamAScoreObject.behind

        })

        // set a variable as the new model for team a score, set team a score object as the new object 
        // const newObject: object = teamAScoreObject
        // newObject.goal[e.target.id] e.target.name.value
        // console.log(newObject)
        // you've thought about this wrong... ID should be linked to goal, not to the scorer object 
    }
        const goalScorer = teamAScoreObject.goal.map((line, index) =>  {
        if(line.scorer){
        return <li key={index}>{line.scorer}</li>
        }
        return (
            <div key={index} >
                <form id={index}  onSubmit={updateScorer} >
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