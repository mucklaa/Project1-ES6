"use strict";
let imgShark = new Image();
imgShark.src = "img/shark.jpg";

function Shark (canvas, y) {
  this.speed =3;
  this.direction = -1;
  this.size = 60;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width+this.size/2;
  this.y =y;
};

Shark.prototype.draw = function(){
  this.ctx.drawImage(imgShark, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

Shark.prototype.update = function(){
  this.x = this.x + this.direction*this.speed;
};