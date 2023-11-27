import { useState } from "react";

import tags from "../data/tags";

import Filter from "./filter";

const Recruit = () => {
  const [selected, setSelected] = useState([]);
  
  // Adds or removes a tag from the selected list
  function changeSelected(tag) {
    let index = selected.indexOf(tag);
    let temp = [];
    if (index === -1) {
      temp = [...selected];
      temp = temp.concat([tag]);
      if (selected.length === 3) {
        temp.shift();
      }
    }
    else {
      temp = [...selected];
      temp.splice(index, 1);
    }
    setSelected(temp);
  }
  
  // Gets the set of tags as [Range], [Rarity], [Class], [Feature]
  let cat_names = ["Range", "Rarity", "Class", "Feature"];
  let categories = [[], [], [], []];
  for (let i = 0; i < tags.length; i++) {
    let slot = 0;
    if (i >= 2) slot = 1;
    if (i >= 6) slot = 2;
    if (i >= 14) slot = 3;
    categories[slot] = categories[slot].concat(tags[i]);
  }
  
  return (
  <>
    <h1>
      Recruitment Tags
    </h1>
    <div id="recruitment">
      {cat_names.map((name, index) =>
        <div className="sections" key={name} >
          <div className="categories">
            <h2>{name}</h2>
          </div>
          <div className="contents">
            {categories[index].map((tag) =>
              selected.includes(tag) ?
              <button className="unselect" key={tag} onClick={() => changeSelected(tag)}>{tag}</button>
              :
              <button className="select" key={tag} onClick={() => changeSelected(tag)}>{tag}</button>
            )}
          </div>
        </div>
      )}
      <button className="reset" onClick={() => setSelected([])}>Reset Tags</button>
    </div>
  </>
  )
}

export default Recruit;