function useItem(x,y,z,ii){
if(ii==280){
hidora(x,y,z);
}}

function hidora(x,y,z){
var r=35;//半径
var temp;//一時的に中心からの距離を入れる
var ax=Math.floor(Math.random()*10)+20;
var az=Math.floor(Math.random()*10)+20;
var r2=Math.sqrt(ax*ax+az*az)-2;

setTile(x,y+r,z,2);setTile(x,y+r-1,z,3);setTile(x,y+r-2,z,3);setTile(x,y+r-3,z,3);setTile(x,y+r-4,z,3);
setTile(x,y+r-5,z,1);

for(var yi=r;yi>=0;yi--){

for(var xi=-r;xi<r;xi++){
for(var zi=-r;zi<r;zi++){

temp=xi*xi+yi*yi+zi*zi;
if(temp<r*r){

if((ax-xi)(ax-xi)+(az-zi)(az-zi)>=r2*r2){

if(yi==0){
setTile(x+xi,y,z+zi,1);}

if(temp>(r-1)*(r-1)){

if(getTile(x+xi,y+yi,z+zi)==0){

var s=0;
var tf=true;

while(tf){
if(yi-s>=1){
if(s==0){setTile(x+xi,y+yi-s,z+zi,2);}
//土の深さ
if(s>=1&&s<=4){setTile(x+xi,y+yi-s,z+zi,3);}
if(s>=5){
var rn=Math.floor(Math.random()*10);
//垂れてくるのが無くなる確率
if(rn<=2){tf=false;}
//鉱石を生成する確率(要調整)
else if(rn<=4&&getTile(x+xi,y+yi-s+1,z+zi)==1){
var rn=Math.floor(Math.random()*5);
if(rn==0){setTile(x+xi,y+yi-s,z+zi,14);}
if(rn==1){setTile(x+xi,y+yi-s,z+zi,15);}
if(rn==2){setTile(x+xi,y+yi-s,z+zi,16);}
if(rn==3){setTile(x+xi,y+yi-s,z+zi,73);}
if(rn==4){setTile(x+xi,y+yi-s,z+zi,89);}}
else{
if(getTile(x+xi,y+yi-s+1,z+zi)!==3){
setTile(x+xi,y+yi-s,z+zi,getTile(x+xi,y+yi-s+1,z+zi));}
else{setTile(x+xi,y+yi-s,z+zi,1);}}}}

s++;
if(yi-s<=1){
tf=false;}
}

}

}

}
else{
if(yi==0){
setTile(x+xi,y,z+zi,2);}}

}

}//for
}//for

}//for
}
﻿
