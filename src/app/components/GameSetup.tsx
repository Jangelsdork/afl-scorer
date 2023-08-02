import React from 'react'

// type Props = {}

function GameSetup({setGameSetup}) {

    function handleClick(e:React.MouseEvent){
        e.preventDefault()
        console.log(e.target)

    }

  return (
    <div>
      <form className='flex flex-col gap-2' action="">
        <div className=''>
        <label htmlFor="quarters">Quarters</label>
        <input type="radio" name="periods" />
        <label htmlFor="Halves">Halves</label>
        <input type="radio" name="periods"/>
        </div>
        <label htmlFor="duration">Minutes per period</label>
        <input type="number" />
        <label htmlFor="teamA">Team A:</label>
        <input type="text" />
        <label htmlFor="teamB">Team B:</label>
        <input type="text" />
        <input type="submit" value="Submit" onClick={handleClick} className='border-2 cursor-pointer'/>

      </form>
    </div>
  );
}

export default GameSetup