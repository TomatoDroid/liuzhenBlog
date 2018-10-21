// 多元化对象
// 多维变量类，运动单元
function Speed(x,y){
    this.x = x;
    this.y = y;
}
Speed.prototype.run = function(){
    console.log('运动起来');
}
function Color(cl){
    this.color = cl;
}
Color.prototype.draw = function(){
    console.log('绘制彩色');
}
function Shape(sp){
    this.shape = sp;
}
Shape.prototype.change = function(){
    console.log('改变形状');
}
function Speek(wd){
    this.word = wd;
}
Speek.prototype.sat = function(){
    console.log('书写字体');
}

// 一个球类
function Ball(x,y,c){
    this.speed = new Speed(x,y);
    this.color = new Color(c);
}
Ball.prototype.init = function(){
    this.speed.run();
    this.color.draw();
}
var ball = new Ball(12,10,'red');
ball.init();

