import './App.css';
import { useEffect, useState } from 'react'


const App = () => {
  const [match, setMatch] = useState(null);
 
  useEffect(() => {
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {  
      method: 'GET',
	    headers: {
		    'X-RapidAPI-Host': 'v3.football.api-sports.io',
		    'X-RapidAPI-Key': '0c9adb2545860e218a64c7b1d58946fb'
	}
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setMatch(data.response);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //team1.team.id
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">WORLD LIVE FOOTBAL TODAY</h1>
          <h2 className="App-title">TU WEB DE RESULTADOS FUTBOLISTICOS MUNDIALES IN REAL-TIME</h2>
        {/* {match
          ? match.map((match1) => (
            <div className="container-home" key={match1.fixture.id}>
              <div className="team-home">
                <h1>{match1.teams.home.name}</h1>
                <img
                  src={match1.teams.home.logo}
                  className="img-team"
                  alt="Equipo Local"
                />
                <h2 className="score"> {match.goals.home} </h2>
              </div>
              <div className="div-vs">
                <h1>VS</h1>
                <p> {match1.fixture.status.elapsed} ´ </p>
              </div>
              <div className="team-away">
                <h1>{match1.teams.away.name}</h1>
                <img
                  src={match1.teams.away.logo}
                  className="img-team"
                  alt="Equipo Visitante"
                />
              </div>
            </div>
          ))
          :null} */}

      <div id="wg-api-football-livescore"
          data-host="v3.football.api-sports.io"
          data-refresh="60"
          data-key="0c9adb2545860e218a64c7b1d58946fb"
          data-theme="dark"
          data-show-errors="false"
          class="api_football_loader">
      </div>
      <div id="wg-api-football-fixtures"
    data-host="v3.football.api-sports.io"
    data-refresh="60"
    data-date="2021-05-15"
    data-league=""
    data-team=""
    data-season=""
    data-last=""
    data-next=""
    data-key="0c9adb2545860e218a64c7b1d58946fb"
    data-theme=""
    data-show-errors="false"
    class="api_football_loader">
</div>
      </header>
    </div>
  );
}

export default App;
