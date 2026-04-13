/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//state//
const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getAverageRate();

//returns//
function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}
function getAverageRate() {
  const total = freelancers.reduce(
    (total, Freelancer) => total + Freelancer.rate,
    0,
  );
  return total / freelancers.length;
}
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//components//
function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `<td>${name}</td> <td>${occupation}</td> <td>${rate}</td>`;
  return $tr;
}
function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}
function averageRate() {
  const $p = document.createElement("p");
  $p.textContent = `Average rate is ${averageRate.toFixed(2)}`;
  return $p;
}
//render//
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>occupation</th>
          <th>rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("average rate").replaceWith(averageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}
render();
