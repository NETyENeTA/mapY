function getMaxDistance(buildings) {
  const offices = [];
  const houses = [];

  buildings.forEach((type, index) => {
    if (type === 2) offices.push(index);
    if (type === 1) houses.push(index);
  });

  if (offices.length === 0 || houses.length === 0) return 0;

  const distances = houses.map((houseIdx) => {
    const distsToOffices = offices.map((offIdx) => Math.abs(houseIdx - offIdx));
    return Math.min(...distsToOffices);
  });

  return Math.max(...distances);
}

let currentBuildings = [2, 0, 1, 1, 0, 1, 0, 2, 1, 2];

function render() {
  const streetEl = document.getElementById("street");
  streetEl.innerHTML = "";

  const offices = currentBuildings
    .map((t, i) => (t === 2 ? i : -1))
    .filter((i) => i !== -1);
  const maxResult = getMaxDistance(currentBuildings);

  currentBuildings.forEach((type, i) => {
    const bDiv = document.createElement("div");
    bDiv.className = `building type-${type}`;

    let icon = "🌳";
    let distLabel = "";

    if (type === 1) {
      icon = "🏠";
      const minDist = Math.min(...offices.map((oIdx) => Math.abs(i - oIdx)));
      distLabel = minDist;

      if (minDist === maxResult && maxResult > 0)
        bDiv.classList.add("highlight-max");
    } else if (type === 2) {
      icon = "🏢";
    }

    bDiv.innerHTML = `
            <span class="index">${i}</span>
            <span class="icon">${icon}</span>
            <span class="dist">${distLabel}</span>
        `;

    bDiv.onclick = () => {
      const cycle = { 1: 2, 2: 0, 0: 1 };
      currentBuildings[i] = cycle[type];
      render();
    };

    streetEl.appendChild(bDiv);
  });

  document.getElementById("max-result").innerText = maxResult;
}

const tests = {
  1: [2, 0, 1, 1, 0, 1, 0, 2, 1, 2],
  2: [1, 0, 0, 0, 2, 0, 0, 0, 0, 1],
  3: [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  4: [1, 2, 0, 1, 0, 0, 2, 1, 0, 1],
  5: [2, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  6: [0, 0, 1, 0, 2, 0, 1, 0, 0, 2],
};
function runTest(num) {
  currentBuildings = [...tests[num]];
  render();
}

render();

// old
console.log(
  getMaxDistance([2, 0, 1, 1, 0, 1, 0, 2, 1, 2]),
  getMaxDistance([1, 0, 0, 0, 2, 0, 0, 0, 0, 1]),
  getMaxDistance([2, 1, 1, 1, 1, 1, 1, 1, 1, 2]),
  getMaxDistance([1, 2, 0, 1, 0, 0, 2, 1, 0, 1]),
  getMaxDistance([2, 0, 0, 0, 1, 0, 0, 0, 0, 0]),
  getMaxDistance([0, 0, 1, 0, 2, 0, 1, 0, 0, 2]),
);

console.log(3, 5, 4, 3, 4, 2);

// Тест 1
// const buildings = [2, 0, 1, 1, 0, 1, 0, 2, 1, 2];
// Вывод: 3

// Тест 2
// const buildings = [1, 0, 0, 0, 2, 0, 0, 0, 0, 1];
// Вывод: 5

// Тест 3
// const buildings = [2, 1, 1, 1, 1, 1, 1, 1, 1, 2];
// Вывод: 4

// Тест 4
// const buildings = [1, 2, 0, 1, 0, 0, 2, 1, 0, 1];
// Вывод: 3

// Тест 5
// const buildings = [2, 0, 0, 0, 1, 0, 0, 0, 0, 0];
// Вывод: 4

// Тест 6
// const buildings = [0, 0, 1, 0, 2, 0, 1, 0, 0, 2];
// Вывод: 2
