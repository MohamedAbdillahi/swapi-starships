import { useState, useEffect } from "react";
import { Starships } from "./Starships";

const getStarships = async () => {
    let visit = "https://swapi.dev/api/starships/?page=1&format=json";
    let starships = [];
    while (true) {
    const result = await fetch(visit).then((res) => res.json());
    console.log(result)
    visit = result.next;
    starships = [...starships, ...result.results];
    if (!visit) break;
  }
    return starships

}
function App() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStarships().then((starships) => {
      setStarships(() =>
        starships
          .filter((starship) => parseInt(starship.crew) <= 10)
          .sort((a, b) => parseInt(a.crew) - parseInt(b.crew))
          .map((starship) => ({
            name: starship.name,
            model: starship.model,
            numberOfFilms: starship.films.length,
          }))
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1
          style={{
            textAlign: "center",
            color: "#fbbf24",
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className="apps">
          <header>
            <h1>Starwars</h1>
            <h3>Starships</h3>
          </header>

          <div className="starships">
            {starships.map((starship, idx) => (

              <Starships
                name={starship.name}
                model={starship.model}
                numberOfFilms={starship.numberOfFilms}
                key={idx}
              />
            ))}
          </div>
        </div>
      )}
      </>
  );
}

export default App;
