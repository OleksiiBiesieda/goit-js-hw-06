const ref = {
    textEl: document.querySelector('#name-output'),
    inputEl: document.querySelector('#name-input')
}

ref.inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    ref.textEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value !== "") {
        ref.textEl.textContent = event.currentTarget.value;
    }
    else { ref.textEl.textContent = "Anonymous" };
}