import React, { SyntheticEvent, Dispatch } from 'react'
import { TeamScore } from './TeamScorer' 

type Props = {
    teamAScoreObject: TeamScore
    setTeamAScoreObject: Dispatch<React.SetStateAction<TeamScore>>
}


function GoalScorerDisplay({teamAScoreObject, setTeamAScoreObject}: Props) {

// Adds the name from input into the goal array under scorer 
function updateScorer(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();

    if (!e.target) return;

    const target = e.target as HTMLInputElement;
    const id = target.id;
    const name = target.name;

    const newArray = [...teamAScoreObject.goal];

    newArray[Number(id)] = {
        scorer: name, 
        period: newArray[Number(id)].period, 
        time: newArray[Number(id)].time, 
        id: newArray[Number(id)].id
    }

    setTeamAScoreObject({
        goal: newArray,
        behind: teamAScoreObject.behind
    });
}
// loops through the goal array, if a scorer name exists, it's rendered. If not, 
        const goalScorer = teamAScoreObject.goal.map((line, index) =>  {
        if(line.scorer){
        return <li key={index}>{line.scorer}</li>
        }
        return (
            <div key={index} >
                <form className='flex gap-2' id={index}  onSubmit={updateScorer} >
                 <input className='bg-green-200 p-2' id="name" type='text' />
                 <input className='bg-yellow-200 p-2' type='submit' />
                 <button className='bg-yellow-200 p-2'>Delete</button>
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