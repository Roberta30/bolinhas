var ball;
var cpf, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    cpf = firebase.database();
    var ballP = cpf.ref("ball/position");
    ballP.on("value", ler, errooou)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    cpf.ref("ball/position").set({
        "x": position.x + x,
        "y": position.y + y
    })

}

function errooou(){
    console.log("deu um erro aqui");
}

function ler(d){
    position = d.val();
    ball.x = position.x;
    ball.y = position.y;
}