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
std::uniform_int_distribution<> rand90(1,90);

bool (*_ItemInstance$useOn)(ItemInstance*,Entity&, int, int, int, signed char, float, float, float);
bool ItemInstance$useOn(ItemInstance* inst,Entity& ent, int x, int y, int z, signed char side, float xx, float yy, float zz){
 if(inst->getId()==280){
 BlockSource& source=ent.getRegion();
 for(int i=1;i<4;i++){
  source.setBlock({x+3,y+i,z},48,2);
  source.setBlock({x,y+i,z+3},48,2);
  source.setBlock({x-3,y+i,z},48,2);
  source.setBlock({x,y+i,z-3},48,2);
  source.setBlock({x+2,y+i,z+2},48,2);
  source.setBlock({x+2,y+i,z-2},48,2);
  source.setBlock({x-2,y+i,z+2},48,2);
  source.setBlock({x-2,y+i,z-2},48,2);
 }
  return true;
 }
 return _ItemInstance$useOn(inst,ent,x,y,z,side,xx,yy,zz);
}

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved){
 MSHookFunction((void*)&ItemInstance::useOn,(void*)&ItemInstance$useOn,(void**)&_ItemInstance$useOn);
	return JNI_VERSION_1_6;
}