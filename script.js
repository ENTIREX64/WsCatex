const terminal = document.getElementById("terminal");
const inputElement = createInputElement();
terminal.appendChild(inputElement);
inputElement.focus();

function createInputElement() {
  const input = document.createElement("input");
  input.type = "text";
  input.addEventListener("keydown", handleInput);
  return input;
}


function handleInput(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = event.target.value.trim();
    event.target.value = "";
    handleCommand(command);
  }
}

function handleCommand(command) {
  const output = document.createElement("p");
  output.textContent = "Generated a " + command + " characecter string";
  terminal.appendChild(output);
  
   if (command === "reset") {
   clearTerminal()
   terminal.appendChild(result);
  } 

  if (command === "3") {
    const randomString = generateRandomString(3);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "4") {
    const randomString = generateRandomString(4);
    output.innerHTML += `<p>String: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "5") {
    const randomString = generateRandomString(5);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "6") {
    const randomString = generateRandomString(6);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "7") {
    const randomString = generateRandomString(7);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "8") {
    const randomString = generateRandomString(8);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "9") {
    const randomString = generateRandomString(9);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "10") {
    const randomString = generateRandomString(10);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "11") {
    const randomString = generateRandomString(11);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "12") {
    const randomString = generateRandomString(12);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "13") {
    const randomString = generateRandomString(13);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "14") {
    const randomString = generateRandomString(14);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "15") {
    const randomString = generateRandomString(15);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "16") {
    const randomString = generateRandomString(16);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "17") {
    const randomString = generateRandomString(17);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "18") {
    const randomString = generateRandomString(18);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  if (command === "19") {
    const randomString = generateRandomString(19);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }
  if (command === "20") {
    const randomString = generateRandomString(20);
    output.innerHTML += `<p>Random string: ${randomString}</p>`;
    terminal.appendChild(result);
  }

  else {
    const error = document.createElement("p");
    error.textContent = "Please type in a proper value";
    error.style.color = "red";
    terminal.appendChild(error);
  }

  function clearTerminal() {
    terminal.innerHTML = "";
    const inputElement = createInputElement();
    terminal.appendChild(inputElement);
    inputElement.focus();
  }

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    
    return randomString;
  }

}
