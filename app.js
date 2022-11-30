let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    } catch (err) {
        alert("Invalid")
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         } else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         } else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         } else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }