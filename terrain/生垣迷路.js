var leave=18;
var leavedata=12;
var wood=17;
var wooddata=0;
var width=23;
var roomsize=6;
var start=0;
var tick=0;
var xp=[];
var zp=[];

function useItem(x, y, z, itemId, blockId, side){
start=1;
xa=x;
ya=y;
za=z;
}
function modTick(){
if(start==1){
if(tick==0){
outerFrame(xa,ya,za);
}
else if(tick==1){
pillar(xa,ya,za);
}
else if(tick==2){
passage(xa,ya,za);
}
else if(tick==3){
makeRoom(ya);
}
else if(tick==4){
checkRoom(xa,ya,za);
}
tick++;
}
}
function outerFrame(x,y,z){
for(xc=-width-1;xc<=width;xc++){
for(zc=-width-1;zc<=width;zc++){
setTile(x+xc,y,z+zc,2,0);
if(xc==width-1||xc==-width||zc==width-1||zc==-width){
if((xc==width-1||xc==-width)&&(zc==width-1||zc==-width)){
setTile(x+xc,y+1,z+zc,wood,wooddata);
setTile(x+xc,y+2,z+zc,wood,wooddata);
setTile(x+xc,y+3,z+zc,wood,wooddata);
}
else if(((xc==-2||xc==1)&&(zc==-width||zc==width-1))||((zc==-2||zc==1)&&(xc==-width||xc==width-1))){
setTile(x+xc,y+1,z+zc,wood,wooddata);
setTile(x+xc,y+2,z+zc,wood,wooddata);
setTile(x+xc,y+3,z+zc,wood,wooddata);
}
else if(((xc==-1||xc==0)&&(zc==-width||zc==width-1))||((zc==-1||zc==0)&&(xc==-width||xc==width-1))){
setTile(x+xc,y+1,z+zc,0,0);
setTile(x+xc,y+2,z+zc,0,0);
setTile(x+xc,y+3,z+zc,0,0);
}
else{
setTile(x+xc,y+1,z+zc,leave,leavedata);
setTile(x+xc,y+2,z+zc,leave,leavedata);
setTile(x+xc,y+3,z+zc,leave,leavedata);
}
}
if(xc==width||xc==-width-1||zc==width||zc==-width-1){
if(((xc==-3||xc==2)&&(zc==-width-1||zc==width))||((zc==-3||zc==2)&&(xc==-width-1||xc==width))){
if((xc==-3||xc==2)&&zc==-width-1){
setTile(x+xc,y+1,z+zc,91,2);
}
else if((xc==-3||xc==2)&&zc==width){
setTile(x+xc,y+1,z+zc,91,0);
}
else if((zc==-3||zc==2)&&xc==-width-1){
setTile(x+xc,y+1,z+zc,91,1);
}
else if((zc==-3||zc==2)&&xc==width){
setTile(x+xc,y+1,z+zc,91,3);
}
}
else{
setTile(x+xc,y+1,z+zc,0,0);
setTile(x+xc,y+2,z+zc,0,0);
setTile(x+xc,y+3,z+zc,0,0);
}
}
}
}
}
function pillar(x,y,z){
for(xu=-width+3;xu<=width-4;xu+=3){
for(zu=-width+3;zu<=width-4;zu+=3){
setTile(x+xu,y+1,z+zu,leave,leavedata);
setTile(x+xu,y+2,z+zu,leave,leavedata);
setTile(x+xu,y+3,z+zu,leave,leavedata);
}
}
}
function passage(x,y,z){
for(xu=-width;xu<=width-4;xu+=3){
for(zu=-width+3;zu<=width-4;zu+=3){
do{
line=Math.floor(Math.random()*10);
}while(line>=3);
for(wall=1;wall<=2;wall++){
if(xu==-width&&(zu==-2||zu==1)){
if(line==0){
setTile(x+xu+wall,y+1,z+zu,leave,leavedata);
setTile(x+xu+wall,y+2,z+zu,leave,leavedata);
setTile(x+xu+wall,y+3,z+zu,leave,leavedata);
}
}
else{
if(line==0){
setTile(x+xu+wall,y+1,z+zu,leave,leavedata);
setTile(x+xu+wall,y+2,z+zu,leave,leavedata);
setTile(x+xu+wall,y+3,z+zu,leave,leavedata);
roomA=Math.floor(Math.random()*10);
roomB=Math.floor(Math.random()*10);
}
else if(line==1){
setTile(x+xu,y+1,z+zu+wall,leave,leavedata);
setTile(x+xu,y+2,z+zu+wall,leave,leavedata);
setTile(x+xu,y+3,z+zu+wall,leave,leavedata);
roomA=Math.floor(Math.random()*10);
roomB=Math.floor(Math.random()*10);
}
else if(line==2){
setTile(x+xu,y+1,z+zu-wall,leave,leavedata);
setTile(x+xu,y+2,z+zu-wall,leave,leavedata);
setTile(x+xu,y+3,z+zu-wall,leave,leavedata);
roomA=Math.floor(Math.random()*10);
roomB=Math.floor(Math.random()*10);
}
}
}
if(xu==-width+15||xu==width-16||zu==-width+15||zu==width-16){
if(roomA==0&&roomB<=3){
xp.push(x+xu);
zp.push(z+zu);
}
}
}
}
}
function makeRoom(y){
print('w');
if(xp.length>=1&&zp.length>=1){
for(co=0;co<xp.length;co++){
x=xp[co];
z=zp[co];
for(xr=-roomsize;xr<=roomsize;xr++){
for(zr=-roomsize;zr<=roomsize;zr++){
if(((xr==-2||xr==-1)&&(zr==-roomsize||zr==roomsize))||((zr==-2||zr==-1)&&(xr==-roomsize||xr==roomsize))){
setTile(x+xr,y+1,z+zr,0,0);
setTile(x+xr,y+2,z+zr,0,0);
setTile(x+xr,y+3,z+zr,0,0);
}
else if(xr==-roomsize||xr==roomsize||zr==-roomsize||zr==roomsize){
setTile(x+xr,y+1,z+zr,leave,leavedata);
setTile(x+xr,y+2,z+zr,leave,leavedata);
setTile(x+xr,y+3,z+zr,leave,leavedata);
}
else{
setTile(x+xr,y+1,z+zr,0,0);
setTile(x+xr,y+2,z+zr,0,0);
setTile(x+xr,y+3,z+zr,0,0);
}
if(xr==0&&zr==0){
setTile(x+xr,y+2,z+zr,52,0);
setTile(x+xr,y+1,z+zr,54,0);
}
if(xr==roomsize-1&&zr==roomsize-1){
setTile(x+xr,y+1,z+zr,54,0);
}
}
}
}
}
}
function checkRoom(x,y,z){
for(xc=-width-1;xc<=width;xc++){
for(zc=-width-1;zc<=width;zc++){
if(getTile(x+xc,y+1,z+zc)==54){
return true;
}
}
}
xp.push(x+1);
zp.push(z+1);
makeRoom(ya);
}