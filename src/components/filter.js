import units from "../data/units.json"

// Returns the lists of operators
function Filter(tags) {
  let res = [];
  let perms = getPerms(tags);
  perms.map((t, i) => res[i] = getOps(t));
  res = removeEmptyArray(res);
  
  return res;
}

// Removes empty arrays in a 2d
function removeEmptyArray(arr) {
  let res = []
  arr.forEach((op) => {
    if (op != null) res = res.concat([op]);
  })

  return res;
}

// Returns all 1, 2, 3 permutations of given tags
function getPerms(tags) {
  let res = [];
  let count = 0;
  tags.forEach((k, i) => {
    res[count] = [tags[i]];
    count++;
  })
  res = res.concat(getXPerm(tags, 2, res));
  res = res.concat(getXPerm(tags, 3, res));

  return res;
}

// Returns the x permutation of given tags
function getXPerm(tags, x, res) {
  if (x <= 1) return res;

  let next_res = [];
  for (let i = x - 2; i < res.length; i++) {
    for (let j = i; j < tags.length; j++) {
      if (res[i].includes(tags[j])) continue;
      let temp = res[i].concat([tags[j]]);
      next_res.push(temp);
    }
  }

  return getXPerm(tags, x - 1, next_res);
}

// Returns the operators with all tags in the list
function getOps(tags) {
  let res = Object.keys(units);
  tags.forEach((tag) => {
    let new_res = [];
    let count = 0;
    res.forEach((k) => {
      if (units[k].Tags.includes(tag)) {
        new_res[count] = k;
        count++;
      }
    })
    res = new_res;
  })

  return res.length === 0 ? null : res;
}

export default Filter;