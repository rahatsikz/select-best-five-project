function getInputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);

  return inputValue;
}
function setValueInElement(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerCost = getInputFieldValue("per-player-cost");
  const totalPlayerCost = perPlayerCost * 5;
  if (isNaN(perPlayerCost)) {
    alert("Please enter per player cost");
    return;
  }
  setValueInElement("expense", totalPlayerCost);
});

document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const totalPlayerElement = document.getElementById("expense");
    const totalPlayerCost = parseFloat(totalPlayerElement.innerText);
    const managerCost = getInputFieldValue("manager-cost");
    const coachCost = getInputFieldValue("coach-cost");
    if (isNaN(managerCost)) {
      alert("Please enter manager cost");
      return;
    }
    if (isNaN(coachCost)) {
      alert("Please enter coach cost");
      return;
    }
    if (isNaN(totalPlayerCost)) {
      alert("Please enter per player cost");
      return;
    }

    const total = totalPlayerCost + managerCost + coachCost;
    setValueInElement("total-expense", total);
  });
