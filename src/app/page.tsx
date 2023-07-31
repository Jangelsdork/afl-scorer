'use client'

import { useState } from "react"
import NewGame from "./components/NewGame"

type Game = {
  periods: number;
  length: number;
  teamA: string;
  teamB: string;
}

export default function Home() {

const [buttonClick, setButtonClick] = useState<boolean>(false)
const [gameSetup, setGameSetup] = useState<Game>()


  return (
  <div className="flex flex-col items-center bg-green-300 h-screen">
    <h1 className="text-center text-3xl m-5">AFLG Game Manager Tool</h1>
    <NewGame buttonClick={buttonClick} setButtonClick={setButtonClick} />
  </div>
  )
}
