"use strict";





function Fish (canvas, y, img){
  this.speed = 5;
  this.speedY = 0.5;
  this.direction = -1;
  this.directionY = 1;
  this.size = 60;
  this.canvas = canvas;
  this.image = img;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width+this.size/2;
  this.y = y;
  }

Fish.prototype.draw1 = function(){
  
let fish1 = new Image();
fish1.src = this.image;
  this.ctx.drawImage(fish1, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};


Fish.prototype.update = function(){
  this.x = this.x + this.direction*this.speed;
  this.y = this.y + this.directionY*this.speedY;
};

/*if (this.newY >= this.y){
    this.y = this.y + this.directionY*this.speed;
    }
  if (this.newY === (this.y+5)){
      this.y = this.y + this.directionY2*this.speed;
    }*/