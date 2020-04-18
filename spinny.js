let col;
let sat = 87;
let lig = 60;
let size = 600;
let pad = 10;
let center = 0;
let bar1 = {};
let bar2 = {};
let bar3 = {};
let bar4 = {};
let px, py, nx, ny;
let slb1length, slb2length, slb3length, slb4length;
let slb1vel, slb2vel, slb3vel, slb4vel;
let sltracecolor;
let btclear;
let running = true;

function setup() {
	const theCanvas = createCanvas(windowWidth, windowHeight);
	const x = (windowWidth - width) / 2;
	const y = (windowHeight - height) / 2;
	theCanvas.position(x, y);
	frameRate(60);
	colorMode(HSL);
	ellipseMode(RADIUS);
	angleMode(DEGREES);
	textAlign(CENTER, CENTER);
	textFont("sans-serif");
	textSize(18);

	background(0);

	clearbox();

	slb1length = createSlider(0, 70, 35, 1);
	slb2length = createSlider(0, 70, 35, 1);
	slb3length = createSlider(0, 70, 35, 1);
	slb4length = createSlider(0, 70, 35, 1);
	slb1vel = createSlider(-180, 180, 1, 1);
	slb2vel = createSlider(-180, 180, 1, 1);
	slb3vel = createSlider(-180, 180, 1, 1);
	slb4vel = createSlider(-180, 180, 1, 1);
	sltracecolor = createSlider(0, 360, 180, 1);

	btclear = createButton("limpar");
	
	fill(100); stroke(100); strokeWeight(1);
	sltracecolor	.position(	pad+size+100, pad+size-18*size/18);
	text("cor", 				pad+size+100, pad+size-17*size/18, 100, size/18);
	slb1length		.position(	pad+size+100, pad+size-16*size/18);
	text("l1", 					pad+size+100, pad+size-15*size/18, 100, size/18);
	slb1vel			.position(	pad+size+100, pad+size-14*size/18);
	text("v1", 					pad+size+100, pad+size-13*size/18, 100, size/18);
	slb2length		.position(	pad+size+100, pad+size-12*size/18);
	text("l2", 					pad+size+100, pad+size-11*size/18, 100, size/18);
	slb2vel			.position(	pad+size+100, pad+size-10*size/18);
	text("v2", 					pad+size+100, pad+size-9*size/18, 100, size/18);
	slb3length		.position(	pad+size+100, pad+size-8*size/18);
	text("l3", 					pad+size+100, pad+size-7*size/18, 100, size/18);
	slb3vel			.position(	pad+size+100, pad+size-6*size/18);
	text("v3", 					pad+size+100, pad+size-5*size/18, 100, size/18);
	slb4length		.position(	pad+size+100, pad+size-4*size/18);
	text("l4", 					pad+size+100, pad+size-3*size/18, 100, size/18);
	slb4vel			.position(	pad+size+100, pad+size-2*size/18);
	text("v4", 					pad+size+100, pad+size-1*size/18, 100, size/18);

	sltracecolor	.size(100, size/18);
	slb1length		.size(100, size/18);
	slb2length		.size(100, size/18);
	slb3length		.size(100, size/18);
	slb4length		.size(100, size/18);
	slb1vel			.size(100, size/18);
	slb2vel			.size(100, size/18);
	slb3vel			.size(100, size/18);
	slb4vel			.size(100, size/18);

	btclear			.position(pad+size+250, pad+size-size/2);
	btclear			.size(100, size/18);
	btclear			.mousePressed(clearbox);
	
	col = color(10, sat, lig);
	go();
}

function draw() {
	// draw_bars();
	px = bar4.x;
	py = bar4.y;
	rotate_bars();
	nx = bar4.x;
	ny = bar4.y;
	noFill(); stroke(sltracecolor.value(), sat, lig); strokeWeight(2);
	line(t(px), t(py), t(nx), t(ny));


	bar1.length = slb1length.value();
	bar1.vel = slb1vel.value();
	
	bar2.length = slb2length.value();
	bar2.vel = slb2vel.value();
	
	bar3.length = slb3length.value();
	bar3.vel = slb3vel.value();
	
	bar4.length = slb4length.value();
	bar4.vel = slb4vel.value();
}

function go() {
	bar1.length = slb1length.value();
	bar1.vel = slb1vel.value();
	
	bar2.length = slb2length.value();
	bar2.vel = slb2vel.value();
	
	bar3.length = slb3length.value();
	bar3.vel = slb3vel.value();
	
	bar4.length = slb4length.value();
	bar4.vel = slb4vel.value();
	
	bar1.angle = 90;
	bar1.x = bar1.length*cos(360 - bar1.angle);
	bar1.y = bar1.length*sin(360 - bar1.angle);
	bar2.angle = 90;
	bar2.x = bar1.x + bar2.length*cos(360 - bar2.angle);
	bar2.y = bar1.y + bar2.length*sin(360 - bar2.angle);
	bar3.angle = 90;
	bar3.x = bar2.x + bar3.length*cos(360 - bar3.angle);
	bar3.y = bar2.y + bar3.length*sin(360 - bar3.angle);
	bar4.angle = 90;
	bar4.x = bar3.x + bar4.length*cos(360 - bar4.angle);
	bar4.y = bar3.y + bar4.length*sin(360 - bar4.angle);
}

function draw_bars() {
	// fill(0); stroke(100); strokeWeight(1);
	// rect(0, 0, size, size);
	fill(270, sat, lig); stroke(270, sat, lig); strokeWeight(1);
	line(t(bar3.x), t(bar3.y), t(bar4.x), t(bar4.y));
	circle(t(bar4.x), t(bar4.y), 3);

	fill(180, sat, lig); stroke(180, sat, lig); strokeWeight(1);
	line(t(bar2.x), t(bar2.y), t(bar3.x), t(bar3.y));
	circle(t(bar3.x), t(bar3.y), 3);
	
	fill(90, sat, lig); stroke(90, sat, lig); strokeWeight(1);
	line(t(bar1.x), t(bar1.y), t(bar2.x), t(bar2.y));
	circle(t(bar2.x), t(bar2.y), 3);
	
	fill(0, sat, lig); stroke(0, sat, lig); strokeWeight(1);
	line(t(center), t(center), t(bar1.x), t(bar1.y));
	circle(t(bar1.x), t(bar1.y), 3);
	
	fill(100); stroke(100); strokeWeight(1);
	circle(t(center), t(center), 3);
}

function rotate_bars() {	
	bar1.angle = (bar1.angle + bar1.vel)%360;
	bar1.x = bar1.length*cos(360 - bar1.angle);
	bar1.y = bar1.length*sin(360 - bar1.angle);

	bar2.angle = (bar2.angle + bar2.vel)%360;
	bar2.x = bar1.x + bar2.length*cos(360 - bar2.angle);
	bar2.y = bar1.y + bar2.length*sin(360 - bar2.angle);

	bar3.angle = (bar3.angle + bar3.vel)%360;
	bar3.x = bar2.x + bar3.length*cos(360 - bar3.angle);
	bar3.y = bar2.y + bar3.length*sin(360 - bar3.angle);

	bar4.angle = (bar4.angle + bar4.vel)%360;
	bar4.x = bar3.x + bar4.length*cos(360 - bar4.angle);
	bar4.y = bar3.y + bar4.length*sin(360 - bar4.angle);
}

function t(c) {
	return c+size/2+pad*1.5;
}

function clearbox() {
	fill(0); stroke(100); strokeWeight(1);
	rect(pad, pad, size + pad, size + pad);
}

function keyPressed() {
	if(keyCode === 32){
		if(running){
			running = false;
			noLoop();
		} else {
			running = true;
			loop();
		}
	}
}