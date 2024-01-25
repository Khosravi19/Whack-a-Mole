window.addEventListener("load", function(){
    setGame();
})

function setGame(){
    for (let i = 1 ; i < 10 ; i++) {
        let frame = document.createElement("div");
        frame.id = i.toString();

        document.querySelector("#board").appendChild(frame);
        frame.addEventListener("click",selectFrame)
    }
    setInterval(setMole , 750 );
    setInterval(setPlant , 1000);
}

function getRandomFrame(){
    let num = Math.floor(Math.random()* 10);
    return num.toString();
}


/*  Set Emoticons  */
let currenMoleFrame;

function setMole(){
    if(gameover){
        return
    }
    if(currenMoleFrame){
        currenMoleFrame.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "image/Mole-Hd.png";

    let num = getRandomFrame();
    if(currenPlantFrame && currenPlantFrame.id == num){
        return;
    }
    currenMoleFrame = document.getElementById(num);
    currenMoleFrame.appendChild(mole);
}

let currenPlantFrame;

function setPlant(){
    if(gameover){
        return
    }
    if(currenPlantFrame){
        currenPlantFrame.innerHTML= "";
    }
    
    let plant = document.createElement("img")
    plant.src = "image/piranha-plant.png"

    let num = getRandomFrame();

    if(currenMoleFrame && currenMoleFrame.id == num){
        return;
    }
    currenPlantFrame = document.getElementById(num);
    currenPlantFrame.appendChild(plant);
}


/*  Score Update */
let score = 0 ;
let gameover = false;

function selectFrame(){
    if(gameover){
        return;
    }
    if(this == currenMoleFrame){
        score += 10
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currenPlantFrame){
        document.getElementById("score").innerText = "GAME OVER" ;
        score = 0 ;
        gameover = true;
    }
}