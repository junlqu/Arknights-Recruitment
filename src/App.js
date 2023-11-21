import units from "./data/units.json";

import Main from "./components/main";

function getCount() {
  let counts = [0, 0, 0, 0, 0, 0];
  Object.keys(units).forEach(function(key){
    counts[units[key].Star - 1]++;
  })
  return counts;
}

function rows(star, count) {
  return(<p>{star} Star Count: {count}</p>)
}

const App = () => {
  let count = getCount();

  return (
    <div className="App">
      {count.map((c, i) => rows(i + 1, c))}
      <Main />
    </div>
  );
}

export default App;