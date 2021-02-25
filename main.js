
function welcomeScreen() {
    gameScreen()
}

function gameScreen() {
    let playerNameElem = document.getElementById("currentPlayer")
    let gameTemplate = ""
    let gameTemplateLarge = ""
    gameTemplate += /*html*/ `
    <div class="col-4">
        <button class="bg-transparent border-0 mt-4" onclick="mine()">
        <img class="moon" src="moon.png" alt="">
        </button>
    </div>
    `
    playerNameElem.innerText = currentPlayer.name
    document.getElementById("insertion").innerHTML = gameTemplate;
}

welcomeScreen()