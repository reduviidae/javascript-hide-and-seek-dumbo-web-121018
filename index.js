function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function deepestChild() {
  const main = document.querySelector("#grand-node");
  const count = main.querySelectorAll("div").length;
  return main.querySelectorAll("div")[count -1]

}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll(".ranked-list");
  for (const element of ranked) {
    const item = element.querySelectorAll("li");
    Array.prototype.forEach.call(item, num => num.innerHTML = parseInt(num.innerHTML) + n);
  }
}
