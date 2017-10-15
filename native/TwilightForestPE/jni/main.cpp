#include <jni.h>
#include <substrate.h>

#include "minecraftpe/world/level/dimension/HellDimension.h"
#include "minecraftpe/world/level/chunk/source/EmptyChunkSource.h"
#include "minecraftpe/world/level/portal/PortalForcer.h"
#include "minecraftpe/world/level/BlockSource.h"
#include "minecraftpe/world/item/ItemInstance.h"
#include "minecraftpe/world/entity/mob/player/ServerPlayer.h"
#include "minecraftpe/world/level/Level.h"
#include "minecraftpe/world/level/chunk/ChunkPos.h"

#include "mod/TwilightForest.h"
#include "mod/world/level/dimension/TwilightDimension.h"
#include "mod/world/level/chunk/source/TwilightRandomLevelSource.h"

//pthread_create(&callHook,NULL,_callHook,(void*)NULL);

bool flag=false;
BlockPos pos=BlockPos(0,0,0);
void (*_Item$registerItems)();
void Item$registerItems(){

 Item::mItems[1200]=TwilightForest::mMagicBook=new Item("magic_book",1200-0x100);
 TwilightForest::mMagicBook->setCategory(CreativeItemCategory::ITEMS);
 Item::mItemLookupMap["magic_book"]=std::unique_ptr<Item>(TwilightForest::mMagicBook);

 _Item$registerItems();
}
void (*_Item$initClientData)();
void Item$initClientData(){
 _Item$initClientData();
 
 TwilightForest::mMagicBook->setIcon("wimocraft_gold_dust",0);
}
bool (*_ItemInstance$useOn)(ItemInstance*,Entity&, int, int, int, signed char, float, float, float);
bool ItemInstance$useOn(ItemInstance* inst,Entity& ent, int x, int y, int z, signed char side, float xx, float yy, float zz){
 ServerPlayer& player=(ServerPlayer&)ent;
 //LOG("biome%d",&ent.getRegion().getBiome(BlockPos(x,y,z))==Biome::mBiomes[1]?1:0);
 if(inst->getId()==1200){
  if(ent.getRegion().getDimensionId()==DimensionId::OVERWORLD){
   flag=false;
   pos=BlockPos(ent.getPos());
   player.changeDimension(DimensionId::TWILIGHT);
  }
  else if(ent.getRegion().getDimensionId()==DimensionId::TWILIGHT){
   flag=true;
   player.changeDimension(DimensionId::OVERWORLD);
  }
 }
 else return _ItemInstance$useOn(inst,ent,x,y,z,side,xx,yy,zz);
}

std::unique_ptr<Dimension> (*_Dimension$createNew)(DimensionId,Level&);
std::unique_ptr<Dimension> Dimension$createNew(DimensionId id,Level& level){
 switch(id){
	 case DimensionId::TWILIGHT:{
   return std::unique_ptr<Dimension>(new TwilightDimension(level));
	 }
 }
 return _Dimension$createNew(id,level);
 //return std::unique_ptr<Dimension>(new TwilightDimension(level));
}

std::unique_ptr<ChunkSource> (*_Dimension$_createGenerator)(Dimension*, GeneratorType);
std::unique_ptr<ChunkSource> Dimension$_createGenerator(Dimension* self, GeneratorType type){
 if(self->getId()==DimensionId::TWILIGHT){
  return std::unique_ptr<ChunkSource>(new TwilightRandomLevelSource(self));
 }
 return std::unique_ptr<ChunkSource>(new TwilightRandomLevelSource(self));
 return _Dimension$_createGenerator(self,type);
}
bool (*_PortalForcer$findPortal)(PortalForcer*,DimensionId,BlockPos const&,int,BlockPos&);
bool PortalForcer$findPortal(PortalForcer* self,DimensionId id,const BlockPos& pos1,int i,BlockPos& pos2){
 if(id==DimensionId::TWILIGHT){
  return true;
 }
 return _PortalForcer$findPortal(self,id,pos1,i,pos2);
}

void (*_PortalForcer$force)(PortalForcer*,Entity&);
void PortalForcer$force(PortalForcer* self,Entity& ent){
 if(ent.getRegion().getDimensionId()==DimensionId::TWILIGHT){
  ChunkPos cpos=ChunkPos(ent.getPos());
  for(int i=254;i>0;i--){
   if(!ent.getRegion().isEmptyBlock(0,i,0)&&ent.getRegion().isEmptyBlock(0,i+1,0)&&ent.getRegion().isEmptyBlock(0,i+2,0)){
    ent.setPos(Vec3(BlockPos(0,i+1,0)));
   }
   else ent.setPos(Vec3(BlockPos(0,100,0)));
  }
 }
 else if(flag){
  flag=false;
  ent.setPos(Vec3(BlockPos(pos.x,pos.y,pos.z)));
 }
 else _PortalForcer$force(self,ent);
}

void (*_BiomeDecorator$decorate)(BiomeDecorator*,BlockSource *,Random &,Biome *,BlockPos const&,bool,float);
void BiomeDecorator$decorate(BiomeDecorator* self,BlockSource * source,Random & random,Biome * biome,BlockPos const& pos,bool b,float f){
_BiomeDecorator$decorate(self,(BlockSource*)biome,random,biome,pos,b,f);
}

JNIEXPORT jint JNI_OnLoad(JavaVM* vm, void* reserved) {
 TwilightForest::init(vm);
 //MSHookFunction((void*)&Item::,(void*)&ItemInstance$useOn,(void**)&_ItemInstance$useOn);
 //MSHookFunction((void*)&ItemInstance::useOn,(void*)&ItemInstance$useOn,(void**)&_ItemInstance$useOn);
 MSHookFunction((void*)&Dimension::createNew,(void*)&Dimension$createNew,(void**)&_Dimension$createNew);
 MSHookFunction((void*)&Dimension::_createGenerator,(void*)&Dimension$_createGenerator,(void**)&_Dimension$_createGenerator);
 //MSHookFunction((void*)&PortalForcer::findPortal,(void*)&PortalForcer$findPortal,(void**)&_PortalForcer$findPortal);
 //MSHookFunction((void*)&PortalForcer::force,(void*)&PortalForcer$force,(void**)&_PortalForcer$force);
 //MSHookFunction((void*)&BiomeDecorator::decorate,(void*)&BiomeDecorator$decorate,(void**)&_BiomeDecorator$decorate);
 return JNI_VERSION_1_2;
}