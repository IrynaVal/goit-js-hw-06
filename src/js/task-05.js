const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
console.log(output.textContent)
console.log(textInput.textContent)
textInput.addEventListener("input", () => {
    if (!textInput.value) {
        output.textContent = "Anonymous";
        return
    }
    return output.textContent = textInput.value;
})
