let imgs = [];
let clicks = 0;

function preload() {
    for (let i = 0; i < 13; i++) {
        imgs[i] = loadImage("assets/office_" + i + ".jpg");
    }
}

function setup() {
    let myDiv = createCanvas(900, 900);
    myDiv.parent('sketch-holder');
}

function draw() {
    //if the number of clicks exceeds the length of the array, reset to 0
    if (clicks >= imgs.length - 1) {
        clicks = 0;
    }

    //when the mouse is pressed, cycle through the images in the array
    //blend two images together, and display them
    if (mouseIsPressed) {
        //display a random image in the array
        let firstImg = random(imgs);
        image(firstImg, 0, 0)

        let layer1 = imgs[clicks];
        let layer2 = imgs[clicks + 1];
        // image(layer1, 0, 0);
        blend(layer1, 0, 0, displayWidth, displayHeight, 0, 0, displayWidth, displayHeight, DIFFERENCE);
        // image(layer2, 0, 0);
        blend(layer2, 0, 0, displayWidth, displayHeight, 0, 0, displayWidth, displayHeight, DIFFERENCE);
        clicks++;
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}