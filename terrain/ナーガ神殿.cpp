#include <jni.h>
#include <substrate.h>
#include <random>

#include "minecraftpe/world/level/dimension/Dimension.h"
#include "minecraftpe/world/level/dimension/NormalDimension.h"
#include "minecraftpe/world/level/dimension/HellDimension.h"
#include "minecraftpe/world/level/chunk/source/EmptyChunkSource.h"
#include "minecraftpe/world/level/Level.h"
#include "minecraftpe/world/level/portal/PortalForcer.h"
#include "minecraftpe/world/level/BlockSource.h"
#include "minecraftpe/world/item/ItemInstance.h"
#include "minecraftpe/world/entity/player/LocalPlayer.h"

#include <android/log.h>
#define LOG_TAG "Wimocraft"
#define LOG(...) ((void)__android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__))

std::random_device rnd;
std::mt19937 mt(rnd());
std::uniform_int_distribution<> rand90(1,90);
std::uniform_int_distribution<> rand10(0,9);
std::uniform_int_distribution<> rand4(0,3);

bool (*_ItemInstance$useOn)(ItemInstance*,Entity&, int, int, int, signed char, float, float, float);
bool ItemInstance$useOn(ItemInstance* inst,Entity& ent, int x, int y, int z, signed char side, float xx, float yy, float zz){
 LOG("%d",inst->getId());
 if(inst->getId()==280){
 BlockSource& source=ent.getRegion();
 int ix=x;
 int iz=z;
 int i;
  for(i=-1;i<256-y;i++){
   for(int l=0;l<93;l++){
    for(int m=0;m<93;m++){
     source.setBlock(x+m,y+i,z+l,0,2);
    }
   }
  }
  for(i=0;i<93;i++){
   for(int l=0;l<93;l++){
    if(rand4(mt)==0){
     source.setBlock(x+i,y-1,z+l,43,2);
     if(rand10(mt)==0){
      source.setBlock(x+i,y,z+l,44,2);
     }
    }
    else{
     source.setBlock(x+i,y-1,z+l,2,2);
    }
   }
  }
  for(i=0;i<20;i++){
   int rx=rand90(mt);
   int rz=rand90(mt);
   for(int l=-1;l<2;l++){
    for(int m=-1;m<2;m++){
     source.setBlock(x+rx+m,y,z+rz+l,44,2);
    }
   }
   for(int l=-1;l<2;l++){
    for(int m=-1;m<2;m++){
     source.setBlock(x+rx+m,y+8,z+rz+l,44,2);
    }
   }
   for(int l=0;l<8;l++){
    source.setBlock(x+rx,y+l,z+rz,98,2);
   }
   source.setBlock(x+rx,y+8,z+rz,44,2);
  }
  for(i=0;i<92;i++){
   source.setBlock(ix+i,y-1,iz,98,2);
   source.setBlock(ix+i,y,iz,98,2);
   source.setBlock(ix+i,y+1,iz,98,2);
   source.setBlock(ix+i,y+2,iz,98,2);
   source.setBlock(ix+i,y+3,iz,44,2);
  }
  ix=i+ix;
  for(i=0;i<92;i++){
   source.setBlock(ix,y-1,iz+i,98,2);
   source.setBlock(ix,y,iz+i,98,2);
   source.setBlock(ix,y+1,iz+i,98,2);
   source.setBlock(ix,y+2,iz+i,98,2);
   source.setBlock(ix,y+3,iz+i,44,2);
  }
  iz=i+iz;
  for(i=0;i<92;i++){
   source.setBlock(ix-i,y-1,iz,98,2);
   source.setBlock(ix-i,y,iz,98,2);
   source.setBlock(ix-i,y+1,iz,98,2);
   source.setBlock(ix-i,y+2,iz,98,2);
   source.setBlock(ix-i,y+3,iz,44,2);
  }
  ix=ix-i;
  for(i=0;i<92;i++){
   source.setBlock(ix,y-1,iz-i,98,2);
   source.setBlock(ix,y,iz-i,98,2);
   source.setBlock(ix,y+1,iz-i,98,2);
   source.setBlock(ix,y+2,iz-i,98,2);
   source.setBlock(ix,y+3,iz-i,44,2);
  }
  return true;
 }
 return _ItemInstance$useOn(inst,ent,x,y,z,side,xx,yy,zz);
}

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved) {
 MSHookFunction((void*)&ItemInstance::useOn,(void*)&ItemInstance$useOn,(void**)&_ItemInstance$useOn);
	return JNI_VERSION_1_2;
}