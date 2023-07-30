
export default function NewGame({buttonClick, setButtonClick}){

function handleClick(){
    setButtonClick(true)
}
    return (
        <div onClick={handleClick} className="bg-yellow-300 text-xl w-[30vw] h-[30vw] flex flex-col items-center justify-center cursor-pointer" >Add new game</div>

    )
}