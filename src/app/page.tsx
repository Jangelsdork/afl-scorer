import NewGame from "../../components/NewGame"

export default function Home() {
  return (
  <div className="flex flex-col items-center">
    <h1 className="text-center text-xl m-5">AFLG Game Manager Tool</h1>
    <NewGame /> 
  </div>
  )
}
