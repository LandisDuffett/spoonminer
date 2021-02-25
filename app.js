let level = 0
let currentPlayer = "Charlie"

function welcomeScreen() {
    //scoreboard.classList.add("hidden")
    //directions.classList.add("hidden")
    let welcomeTemplate = ""
    welcomeTemplate +=
        /*html*/`
        <div class="row">
            <div class="panel panel-default rounded bg-light panelmargin">
                <div class="panel-body p-3 text-center">
                    <h4>Welcome to</h4>
                    <h1 style="font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; color: teal">
                        <b>MOON MINER</b></h1>It turns out the moon IS made of cheese. Mice are the first ones there to mine
                    all the cheese they can. Your job is to direct their massive project. Enter your name and start clicking on
                    the moon to get the cheese. Upgrade equipment at the store to multiply your yield. Some of the equipment will
                    increase your cheese yield automatically. Don't get lazy, though. Keep an eye on the changing goal that you must meet every 3 minutes (which, for a mouse,
                        is like a day to us). Click the directions and pause the clock at any time. Happy cheese mining.
                    <br>
                        <button class="btn btn-primary rounded mt-4" onclick="nameScreen()">Start</button>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <img class="moon" src="moon.png" alt="">
        </div>
        `
    document.getElementById("insertion").innerHTML = welcomeTemplate;
    //document.getElementById("large").innerHTML = welcomeTemplate;
}

function nameScreen() {
    level = 1
    let nameTemplate = ""
    nameTemplate += /*html*/ `
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-8">
                <div class="panel panel-default rounded bg-light panelmargin">
                    <div class="panel-body p-3 text-center">
                        <div class="row justify-content-center m-1">
                            <form onsubmit="setPlayer(event)">
                                <div>
                                    <label for="name">
                                        <span>Player Name: </span>
                                    </label>
                                    <input type="text" id="name" name="playerName" required>
                                    <span><button class="btn btn-primary ml-1 mb-2 sub" type="submit">Ok</button></span>
                                </div>
                            </form>
                        </div>
                        <div class="row justify-content-center mt-1">
                            <span class="pr-2"></span>
                            <span id="top-score"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <img class="moon" src="moon.png" alt="">
        </div>`
    document.getElementById("insertion").innerHTML = nameTemplate;
    document.getElementById("large").innerHTML = nameTemplate;
}

function gameScreen() {
    let playerNameElem = document.getElementById("currentPlayer")
    let gameTemplate = ""
    let gameTemplateLarge = ""
    gameTemplate += /*html*/ `
    <div class="col-4">
        <div class="row justify-content-center">
            <button class="bg-transparent border-0 mt-4" onclick="mine()">
            <img class="moon" src="moon.png" alt="">
            </button>
        </div>
    </div>
    `
    playerNameElem.innerText = currentPlayer
    document.getElementById("insertion").innerHTML = gameTemplate;
}

function setPlayer(event) {
    event.preventDefault()
    let playerScoreElem = document.getElementById("top-score")
}

welcomeScreen()