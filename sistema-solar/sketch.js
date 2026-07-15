let alfa; // posição angular da Terra
let xc_terra; // posição X centro da Terra
let yc_terra; // Posição Y centro da Terra

let dx;
let dy;
let distancia;

let xsol;
let ysol;

let rotacao = 0;

function setup() {
  createCanvas(500,300);
  alfa = 0;
  angleMode(DEGREES);
  xsol = 150;
  ysol = 150;
}

function draw() {
  background(0);
  stroke("white");
  strokeWeight(0.4);
  line(20,150,400,150);
  line(200,20,200,270)
  strokeWeight(1);
  xc_terra = 200 + 150*cos(alfa);
  yc_terra = 150 + 100*sin(alfa);
  dx = abs(xc_terra - xsol);
  dy = abs(yc_terra - ysol);
  distancia = sqrt(dx*dx + dy*dy);
  alfa = alfa  + 150/distancia;
  fill("yellow");
  strokeWeight(0);
  circle(xsol,ysol,40); // Sol
  push();
  translate(xc_terra,yc_terra);
  rotate(rotacao);
  textSize(18);
  textAlign(CENTER,CENTER);
  text('🌍',0,0) // Terra
  pop();
  rotacao += 5;
  textAlign(LEFT,TOP);
  fill("white");
  textSize(13);
  text('angle = '+nf(alfa,1,0)+'º',400,20);
  text('dx = '+nf(dx,1,1),400,40);
  text('dy = '+nf(dy,1,1),400,60);
  text('|D| = '+nf(distancia,1,1),400,80);
  stroke("white");
  strokeWeight(1);
  line(xsol,ysol,xc_terra,yc_terra);
  line(xsol,ysol,xc_terra,150);
  line(xc_terra,150,xc_terra,yc_terra);
  if(alfa > 359){
    alfa = 0;
  }
}










