import React, { useState } from "react";
import { Game } from "../page";

type Props = {
  gameSetup: Game | undefined;
  setGameSetup: React.Dispatch<React.SetStateAction<Game | undefined>>;
};

function GameSetup({ setGameSetup }: Props) {
  const [formData, setFormData] = useState({
    periods: 2,
    duration: 10,
    teamA: "",
    teamB: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGameSetup(formData);
    console.log(formData);
  }

  return (
    <div className="w-[60%] h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="periods">Intervals:</label>
          <select
            className="bg-indigo-500 ml-2"
            id="periods"
            name="periods"
            value={formData.periods}
            onChange={handleChange}
          >
            <option value="2">Halves</option>
            <option value="4">Quarters</option>
          </select>
        </div>
        <label htmlFor="duration">Minutes per period:</label>
        <input
          className="bg-indigo-500"
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <label htmlFor="teamA">Team A:</label>
        <input
          className="bg-indigo-500"
          type="text"
          name="teamA"
          value={formData.teamA}
          onChange={handleChange}
        />
        <label htmlFor="teamB">Team B:</label>
        <input
          className="bg-indigo-500"
          type="text"
          name="teamB"
          value={formData.teamB}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-indigo-600 p-2 rounded-3xl cursor-pointer mt-10"
        />
      </form>
    </div>
  );
}

export default GameSetup;
