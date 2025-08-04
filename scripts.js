

function generateNumber() {

    const first = Math.ceil(document.querySelector(".first-input").value)
    const second = Math.floor(document.querySelector(".second-input").value)

    const result = Math.floor(Math.random() * (first - second + 1)) + second;

    alert(result)
}