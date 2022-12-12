const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (onInputBlur));
textInput.addEventListener("focus", (onInputFocus));

function onInputBlur() {
    if (textInput.value.length === Number(textInput.getAttribute("data-length"))) {
        return textInput.classList.add("valid");
    } 
        return textInput.classList.add("invalid");
}

function onInputFocus() {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid"); 
}