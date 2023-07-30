'use client'
import NewGame from "./NewGame"
import { useState } from "react"

export default function Home() {

const [buttonClick, setButtonClick] = useState<boolean>(false)



  return (
  <div className="flex flex-col items-center bg-green-300 h-screen">
    <h1 className="text-center text-3xl m-5">AFLG Game Manager Tool</h1>
    <NewGame buttonClick={buttonClick} setButtonClick={setButtonClick} />
  </div>
  )
}
