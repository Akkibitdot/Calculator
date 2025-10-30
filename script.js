let display = document.getElementById("Display");

function insert(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function turnOff() {
  display.value = "";
  alert("Calculator OFF");
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// 🧠 Keyboard Support
document.addEventListener("keydown", function(event) {
  let key = event.key;

  // Allow numbers and operators
  if ("0123456789+-*/.%".includes(key)) {
    insert(key);
  }

  // Enter or = → calculate
  else if (key === "Enter" || key === "=") {
    event.preventDefault(); // prevents accidental form submission
    calculate();
  }

  // Backspace → delete last character
  else if (key === "Backspace") {
    backspace();
  }

  // Escape key → clear all
  else if (key === "Escape") {
    clearAll();
  }
});