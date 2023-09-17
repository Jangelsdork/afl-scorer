import React from "react";
import { Game } from "../page";
import { FormEvent } from "react";

type Props = {
  gameSetup: Game;
  setGameSetup: React.Dispatch<React.SetStateAction<Game>>;
};

function GameSetup({ setGameSetup, gameSetup }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
// sets state that carries the game information (teams, duration, etc) 
    setGameSetup({
      periods: e.target.periods.value,
      length: e.target.duration.value,
      teamA: e.target.teamA.value,
      teamB: e.target.teamB.value,
    });
    console.log(gameSetup);
  }
// renders form that asks user for the game information (teams, duration etc)
  if (!gameSetup) {
    return (
      <div className="w-[60%] h-screen" >
        <form className="flex flex-col gap-4 "   onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="periods">Intervals:</label>
            <select className="bg-indigo-500 ml-2" id="periods" name="periods">
              <option name="periods" value="2">
                Halves
              </option>
              <option name="periods" value="4">
                Quarters
              </option>
            </select>
          </div>
          <label htmlFor="duration">Minutes per period:</label>
          <input className="bg-indigo-500 " type="number" name="duration" />
          <label htmlFor="teamA">Team A:</label>
          <input className="bg-indigo-500" type="text" name="teamA" />
          <label htmlFor="teamB">Team B:</label>
          <input className="bg-indigo-500" type="text" name="teamB" />
          <input
            type="submit"
            value="Submit"
            className="bg-indigo-600 p-2 rounded-3xl cursor-pointer mt-10"
  
          />
        </form>
      </div>
    );
  }
  <div></div>;
}

export default GameSetup;
