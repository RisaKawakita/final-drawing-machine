let sizewidth = 30
let sizeheight = 30
var rando;
let bit = [];
let randoMusic;
let backgroundColor = (132, 110, 92);


function setup() {
  createCanvas(sizewidth*20, sizeheight*20);
  background(backgroundColor);
}

function preload() {
  //8bit songs preloaded in file//
  ace = loadSound(`8bit/Aceattorney.mp3`);
  animal = loadSound(`8bit/Animalcrossing.mp3`);
  final = loadSound(`8bit/Finalfantasy.mp3`);
  kirby = loadSound(`8bit/Kirby.mp3`);
  layton = loadSound(`8bit/Layton.mp3`);
  layton2 = loadSound(`8bit/Layton2.mp3`);
  undertale = loadSound(`8bit/Undertale.mp3`);
  zelda = loadSound(`8bit/Zelda.mp3`);
}

function draw() {
  background(194, 167, 142);
  
  for(y = 0; y < sizeheight; y++){
    for(x = 0; x < sizewidth; x++){
      if(getItem(x + ":" + y) == null){
        storeItem(x + ":" + y, false)
       }
     if(mouseX < x*20+20 && mouseX > x*20 && mouseY < y*20+20 && mouseY > y*20){
      fill(0, 0, 0)
     }
      if(getItem(x + ":" + y) == true){
        fill(73, 53, 39)
      }
      rect(x*20, y*20, 20, 20)
      noFill();
    }
  }
}

function mouseClicked(){
   for(y = 0; y < sizeheight; y++){
    for(x = 0; x < sizewidth; x++){
     if(mouseX < x*20+20 && mouseX > x*20 && mouseY < y*20+20 && mouseY > y*20){
       storeItem(x + ":" + y, true)
     }
      rect(x*20, y*20, 20, 20)
      noFill();
    }
  }
}

function keyTyped(){
  //clear image//
  if(key == " "){
    clearStorage()
  }
  
  if(key === 's'){
    //save image//
    saveCanvas('fileName', 'png');
  } 

  if (key == 'p') {
    //plays music//
    clear();
    musicStop();
    randoMusic = int(random(1, 8));

    if (randoMusic == 1) { 
      undertale.play();
    }

    if(randoMusic == 2){
      zelda.play();
      text
    }

    if(randoMusic == 3){
      layton.play();
    }

    if(randoMusic == 4){
      layton2.play();
    }

    if(randoMusic == 5){
      kirby.play();
    }

    if(randoMusic == 6){
      ace.play();
    }

    if(randoMusic == 7){
      final.play();
    }

    if(randoMusic == 8){
      animal.play();
    }
    chipTune();
  }

  if (key == 'q') {
    clear();
    musicStop();
  }

    function chipTune() {
      rando = int(random(1, 4));
      bit.splice(randoMusic - 1);
    }

    function musicStop() {
      undertale.stop();
      zelda.stop();
      layton.stop();
      layton2.stop();
      ace.stop();
      final.stop();
      kirby.stop();
      animal.stop();
    }
  }

