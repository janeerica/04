canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";
background_image = "mars.jpg";
window.addEventListener("keydown", my_keydown);
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == 'a') {
        right();
        console.log("65");
    }
    if (keyPressed == 'b') {
        right();
        console.log("66");
    }
    if (keyPressed == 'c') {
        right();
        console.log("70");
    }
    if (keyPressed == 'd') {
        right();
        console.log("71");
    }
    if (keyPressed == 'e') {
        right();
        console.log("72");
    }
    if (keyPressed == '73') {
        right();
        console.log("right");
    }if (keyPressed == 'f') {
        right();
        console.log("74");
    }if (keyPressed == 'g') {
        right();
        console.log("75");
    }if (keyPressed == 'h') {
        right();
        console.log("76");
    }if (keyPressed == 'i') {
        right();
        console.log("77");
    }if (keyPressed == 'j') {
        right();
        console.log("78");
    }if (keyPressed == 'k') {
        right();
        console.log("79");
    }if (keyPressed == 'l') {
        right();
        console.log("80");
    }if (keyPressed == 'm') {
        right();
        console.log("81");
    }
    if (keyPressed == 'n') {
        right();
        console.log("82");
    }
    if (keyPressed == 'o') {
        right();
        console.log("83");
    }
    if (keyPressed == 'p') {
        right();
        console.log("84");
    }
    if (keyPressed == 'q') {
        right();
        console.log("85");
    }
    if (keyPressed == 'r') {
        right();
        console.log("86");
    }
    if (keyPressed == 's') {
        right();
        console.log("87");
    }
    if (keyPressed == 't') {
        right();
        console.log("89");
    }
    if (keyPressed == 'u') {
        right();
        console.log("90");
    }
    if (keyPressed == 'alt') {
        right();
        console.log("27");
    }
    if (keyPressed == 'ctl') {
        right();
        console.log("91");
    }
    if (keyPressed == 'esc') {
        right();
        console.log("27");
    }
    










}

function up() {

    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y < 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }

}


function left() {
    if (rover_x>0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }

}

function right() {
    if (rover_x<700) {rover_x = rover_x + 10;
     uploadBackground();
     uploadRover();}
     
 }
 function right() {
    if (rover_x<700) {rover_x = rover_x + 10;
     uploadBackground();
     uploadRover();}
     
 }