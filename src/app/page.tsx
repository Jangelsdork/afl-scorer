'use client'

import { useState } from "react"
import NewGame from "./components/NewGame"
import GameSetup from "./components/GameSetup";
import GameRun from "./components/GameRun";

export type Game = {
  periods: number;
  length: number;
  teamA: string;
  teamB: string;
}

export default function Home() {

// const [buttonClick, setButtonClick] = useState<boolean>(false)
const [gameSetup, setGameSetup] = useState<Game>()
const [currentInterval, setCurrentInterval] = useState<number>(1)


  return (
  <div className="flex flex-col items-center bg-indigo-900 h-screen w-screen">
    <h1 className="text-center text-3xl m-5 ">AFLG Game Manager Tool</h1>
    <GameSetup setGameSetup={setGameSetup} gameSetup={gameSetup}/>
    <GameRun gameSetup={gameSetup} setCurrentInterval={setCurrentInterval} currentInterval={currentInterval}/>
  </div>
  )
}
