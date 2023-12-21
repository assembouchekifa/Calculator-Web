const glass = document.getElementById("glass");
const button = document.querySelectorAll(".bo");
let error = ["%", "x", "/"];
button.forEach((elm) => {
  elm.addEventListener("click", () => {
    if (glass.innerText === "Assem Bouchekifa") {
      glass.innerText = "";
    }
    glass.innerText += elm.innerHTML;
  });
});
document.getElementById("AC").addEventListener("click", () => {
  glass.innerText = "";
});
document.getElementById("DEL").addEventListener("click", () => {
  if (glass.innerText === "Assem Bouchekifa") {
    glass.innerText = "";
  }
  glass.innerText = glass.innerText.toString().slice(0, -1);
});
document.getElementById("=").addEventListener("click", () => {
  calc();
});
function calc() {
  let otput;
  let g = glass.innerText;
  if (g === "121211") {
    document.body.style.backgroundColor = "white";
    document.getElementsByClassName("glass")[0].style.cssText =
      "border: 10px solid black;color: 	black;";
    document.styleSheets[0].cssRules[5].style.cssText =
      "color: 	black; display: flex; justify-content: center; align-items: center; width: 20%; margin: 2%; position: relative; text-align: center; border: 2px solid black; cursor: pointer; border-radius: 10%";
    document.styleSheets[0].cssRules[6].style.cssText =
      "  background-color: blue;";
  }
  let i = 0;
  while (g.indexOf("x") !== -1 || g.indexOf("%") !== -1) {
    g = g.replace("x", "*");
    g = g.replace("%", "/100");
  }
  try {
    otput = eval(g) || "Assem Bouchekifa";
    glass.innerText = otput;
  } catch (error) {
    glass.innerHTML = "Error !";
    setTimeout(() => {
      glass.innerText = "";
    }, 1000);
  }
}
// ASSEM BOUCHEKIFA
