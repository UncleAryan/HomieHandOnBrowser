const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "res/big_player_animations.png";

const BIG_PLAYER_WIDTH = 128;
const BIG_PLAYER_HEIGHT = 128;
const BIG_PLAYER_SCALE = 2;
const BIG_PLAYER_WIDTH_SCALED = BIG_PLAYER_WIDTH * BIG_PLAYER_SCALE;
const BIG_PLAYER_HEIGHT_SCALED = BIG_PLAYER_HEIGHT * BIG_PLAYER_SCALE;

let bigPlayerAnimationX = 0;
let bigPlayerAnimationY = 0;

let frames = 0;
const staggerFrames = 25;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let animationTick = Math.floor(frames / staggerFrames) % 8;
    bigPlayerAnimationX = BIG_PLAYER_WIDTH * animationTick;

    ctx.drawImage(playerImage, bigPlayerAnimationX, bigPlayerAnimationY * BIG_PLAYER_HEIGHT, 
                  BIG_PLAYER_WIDTH, BIG_PLAYER_HEIGHT, 
                  CANVAS_WIDTH/2-(BIG_PLAYER_WIDTH_SCALED/2), 
                  CANVAS_HEIGHT/2-(BIG_PLAYER_HEIGHT_SCALED/2), 
                  BIG_PLAYER_WIDTH_SCALED, BIG_PLAYER_HEIGHT_SCALED);
    
    frames++;
    requestAnimationFrame(animate);
};

animate();