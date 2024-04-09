import { useState } from "react";
import { BackgroudLayout, MiniCard, WeatherCard } from "./components";

import { UseStateContext } from "./context";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, setPlace } = UseStateContext();

  // console.log(weather)

  const submitCity =() => {
    setPlace(input)

    setInput('')
  }

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex items-center justify-between">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>

        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img
            src="/search.svg"
            alt="search"
            className="w-[1.5rem] h-[1.5rem]"
          />
          <input
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg"
            placeholder="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // code to submit the form
                submitCity()
              }
            }}
          />
        </div>
      </nav>

      <BackgroudLayout />

      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">

        <WeatherCard
          place={thisLocation}
          windSpeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatindex={weather.heatindex}
          iconString={weather.conditions}
          consditions={weather.conditions}
        />

        <div className="grid justify-center gap-8 grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[60%]">
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>

      </main>
    </div>
  );
}

export default App;
