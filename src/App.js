import units from "./data/units.json";

import Main from "./components/main";

function getCount() {
  let counts = [0, 0, 0, 0, 0, 0];
  Object.keys(units).forEach(function(key){
    counts[units[key].Star - 1]++;
  })
  return counts;
}

const App = () => {
  let count = getCount();
  return (
    <div className="App">
      {count.map((c, i) => <p key={i}>{i + 1} Star Count: {c}</p>)}
      <Main />
    </div>
  );
}

export default App;