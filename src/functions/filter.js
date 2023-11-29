import units from "../data/units.json"

// Returns the lists of operators
function Filter(tags) {
  let res = {};
  let perms = getPerms(tags);
  perms.map((t, i) => res[t] = getOps(t));
  res = removeEmptyArray(res);
  
  return res;
}

// Removes empty arrays in a 2d
function removeEmptyArray(arr) {
  let res = {}
  Object.keys(arr).forEach((tags) => {
    if (arr[tags] != null) res[tags] = arr[tags];
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

// Returns keys of all 1-5 star units if no Top Operator tag is added, or key of all 6 stars if Top Operator tag is added
function isTopOp(tags) {
  let ops = Object.keys(units);
  let res = [];
  let count = 0;
  if (tags.includes("Top Operator")) {
    ops.forEach((k) => {
      if (units[k].Star === 6) {
        res[count] = k;
        count++;
      }
    })
  }
  else {
    ops.forEach((k) => {
      if (units[k].Star !== 6) {
        res[count] = k;
        count++;
      }
    })
  }
  return res;
}

// Returns the operators with all tags in the list
function getOps(tags) {
  let res = isTopOp(tags);
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