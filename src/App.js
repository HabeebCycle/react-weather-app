import { useState } from "react";
import Location from "./components/Location";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

import { api } from "./util/keys";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className={`app ${weather.main && weather.main.temp > 19 && "warm"}`}>
      <main>
        <SearchBar query={query} setQuery={setQuery} search={search} />
        {weather.main && (
          <>
            <Location weather={weather} />
            <Weather weather={weather} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
