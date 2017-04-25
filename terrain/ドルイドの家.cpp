#include <jni.h>
#include <substrate.h>
#include <random>
#include <pthread.h>

#include "minecraftpe/world/level/dimension/Dimension.h"
#include "minecraftpe/world/level/dimension/NormalDimension.h"
#include "minecraftpe/world/level/dimension/HellDimension.h"
#include "minecraftpe/world/level/chunk/source/EmptyChunkSource.h"
#include "minecraftpe/world/level/Level.h"
#include "minecraftpe/world/level/portal/PortalForcer.h"
#include "minecraftpe/world/level/block/Block.h"
#include "minecraftpe/world/level/BlockSource.h"
#include "minecraftpe/world/item/ItemInstance.h"
#include "minecraftpe/world/entity/player/LocalPlayer.h"

#include <android/log.h>
#define LOG_TAG "twilight"
#define LOG(...) ((void)__android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__))

std::random_device rnd;
std::mt19937 mt(rnd());
std::uniform_int_distribution<> rand2(0,1);

int cobbel[]={4,48};

bool (*_ItemInstance$useOn)(ItemInstance*,Entity&, int, int, int, signed char, float, float, float);
bool ItemInstance$useOn(ItemInstance* inst,Entity& ent, int x, int y, int z, signed char side, float xx, float yy, float zz){
 if(inst->getId()==280){
 BlockSource& source=ent.getRegion();
 for(int i=0;i<7;i++){
  for(int l=-1;l<7;l++){
   for(int j=1;j<9;j++){
    source.setBlock({x+l,y+j,z+i},0,2);
   }
  }
 }
 for(int i=0;i<5;i++){
  for(int l=0;l<6;l++)
  source.setBlock({x+i,y,z+l},2,2);
 }
 for(int l=1;l<6;l++){
  source.setBlock({x+l,y+1,z},cobbel[rand2(mt)],2);
  source.setBlock({x+l,y+1,z+4},cobbel[rand2(mt)],2);
  for(int i=2;i<5;i++){
   source.setBlock({x+l,y+i,z},cobbel[rand2(mt)],2);
   source.setBlock({x+l,y+i,z+4},cobbel[rand2(mt)],2);
  } 
 }
 source.setBlock({x+4,y+1,z},0,2);
 source.setBlock({x+4,y+2,z},0,2);
 source.setBlock({x+4,y+1,z+4},0,2);
 source.setBlock({x+4,y+2,z+4},0,2);
 source.setBlock({x+2,y+2,z},0,2);
 source.setBlock({x+2,y+2,z+4},0,2);
 for(int i=1;i<4;i++){
  source.setBlock({x+5,y+1,z+i},48,2);
  for(int l=2;l<4;l++)
   source.setBlock({x+5,y+l,z+i},cobbel[rand2(mt)],2);
 }
 source.setBlock({x+5,y+2,z+2},0,2);
 for(int i=-1;i<6;i++){
  source.setBlock({x,y+3,z+i},5,2);
  source.setBlock({x+6,y+3,z+i},5,2);
  source.setBlock({x+1,y+4,z+i},5,2);
  source.setBlock({x+5,y+4,z+i},5,2);
  source.setBlock({x+2,y+5,z+i},5,2);
  source.setBlock({x+4,y+5,z+i},5,2);
  source.setBlock({x+3,y+6,z+i},5,2);
 }
 for(int i=2;i>-1;i--){
  for(int l=0;l<i+1;l++){
   source.setBlock({x+5-i,y+5+i,z-1+l},158,2);
   source.setBlock({x+5-i,y+5+i,z-l+5},158,2);
   source.setBlock({x+1+i,y+5+i,z+l-1},158,2);
   source.setBlock({x+1+i,y+5+i,z+5-l},158,2);
  }
 }
 source.setBlock({x+3,y+5,z},cobbel[rand2(mt)],2);
 source.setBlock({x+3,y+5,z+4},cobbel[rand2(mt)],2);
  for(int l=0;l<2;l++){
   source.setBlock({x+3,y+7,z+5-l},5,2);
   source.setBlock({x+3,y+7,z-1+l},5,2);
  }
  source.setBlock({x+3,y+8,z-1},158,2);
  source.setBlock({x+3,y+8,z+5},158,2);
  for(int i=1;i<4;i++){
   source.setBlock({x+1,y+i,z+3},45,2);
   source.setBlock({x+1,y+i,z+1},45,2);
  }
  for(int i=1;i<5;i++){
   source.setBlock({x,y+i,z+3},45,2);
   source.setBlock({x,y+i,z+1},45,2);
   source.setBlock({x+1,y+i,z+2},0,2);
  }
  for(int i=1;i<8;i++){
   source.setBlock({x,y+i,z+2},45,2);
  }
  source.setBlock({x+1,y,z+2},87,2);
  source.setBlock({x+1,y+1,z+2},51,2);
  source.setBlock({x+3,y+2,z+2},52,2);
  return true;
 }
 return _ItemInstance$useOn(inst,ent,x,y,z,side,xx,yy,zz);
}

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved){
 MSHookFunction((void*)&ItemInstance::useOn,(void*)&ItemInstance$useOn,(void**)&_ItemInstance$useOn);
	return JNI_VERSION_1_6;
}