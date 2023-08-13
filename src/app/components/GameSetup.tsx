import React from "react";
import { Game } from "../page";
import { FormEvent } from "react";

type Props = {
    gameSetup: Game
    setGameSetup: React.Dispatch<React.SetStateAction<Game>>
}

function GameSetup({setGameSetup, gameSetup} : Props) {



    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(e.target.periods.value)

        setGameSetup ({
            periods: e.target.periods.value,
            length: e.target.duration.value,
            teamA: e.target.teamA.value,
            teamB: e.target.teamB.value
        })
        console.log(gameSetup)
    }

if(!gameSetup){
  return (
    <div>
      <form className='flex flex-col gap-2' action="" onSubmit={handleSubmit}>
        <div className=''>
        {/* <label htmlFor="quarters">Quarters</label>
        <input type="radio" name="periods" />
        <label htmlFor="Halves">Halves</label>
        <input type="radio" name="periods"/> */}
        <label for="periods">Intervals:</label>
        <select id="periods" name="periods">
            <option name="periods" value="2">Halves</option>
            <option name="periods" value="4">Quarters</option>
        </select>
        </div>
        <label htmlFor="duration">Minutes per period</label>
        <input type="number" name='duration'/>
        <label htmlFor="teamA">Team A:</label>
        <input type="text" name='teamA' />
        <label htmlFor="teamB">Team B:</label>
        <input type="text" name='teamB'/>
        <input type="submit" value="Submit" className='border-2 cursor-pointer'/>

      </form>
    </div>
  );
}
<div></div>
}

export default GameSetup