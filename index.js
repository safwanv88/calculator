let screen = document.getElementById("result");

// Function to append value to the screen
function append(value) {
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = "";
}

// Function to delete the last character
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}