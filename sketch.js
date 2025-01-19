let video; 
const density = "Ñ@#W$9876543210?!abc;:+=-,.- "; 
let asciiDiv; 
function setup() {
 // put setup code here
 //createCanvas(400,400);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(200,88);
  asciiDiv = createDiv('');
  //}

 //function draw() {
  // put drawing code here
}

function draw() {
  //image(image1, 0, 0, width, height);
  video.loadPixels();
  let asciiImage = "";
  for(let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i+j*video.width)*4; 
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2 ];
      const average = (r+g+b)/3;

      // noStroke();
      // fill(0); 

      //fill(r, g, b); 
      //square(i * w, j*h, w);

      const len = density.length; 
      const charIndex = int(map(average, 0, 255, 0, len-1));
      // textSize(w);
      // text(density.charAt(charIndex) , i*w + w *0.5, j*h+j*0.5);
      let c = density.charAt(charIndex);
      if (c === ' ') {
        asciiImage += '&nbsp;';
      }
      // if (c === 'Ñ') {
      //   asciiImage += '<strong>Ñ</strong>';
      // }
      else asciiImage += c; 
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}