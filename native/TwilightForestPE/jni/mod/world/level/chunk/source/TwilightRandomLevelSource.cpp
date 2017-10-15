#include "TwilightRandomLevelSource.h"
#include "minecraftpe/world/level/BlockSource.h"
#include "minecraftpe/world/level/chunk/ChunkViewSource.h"
#include "minecraftpe/world/level/biome/Biome.h"
#include "minecraftpe/world/level/Level.h"

#include <random>
#include <fstream>

static int noised[512];
static bool flag=false;

std::random_device rd; 	std::mt19937 mt(rd());

#define Fade(t)((float)(6.0f*powf(t,5.0f)-15.0f*powf(t,4.0f)+10.0f*powf(t,3.0f)))
#define Lerp(a,b,t)(a+(b-a)*t)
//#define Grad(t,x,y,z)(t%0xf==0x0?x+y:t%0xf==0x1?-(x-y):t%0xf==0x2?x-y:t%0xf==0x3?-(x+y):t%0xf==0x4?x+z:t%0xf==0x5?-(x-z):t%0xf==0x6?x-z:t%0xf==0x7?y+z:t%0xf==0x8?y+z:t%0xf==0x9?-(y+z):t%0xf==0xa?y-z:t%0xf==0xb?-(y+z):t%0xf==0xc?y+x:t%0xf==0xd?-(y-z):t%0xf==0xe?y-x:t%0xf==0xf?-(y+z):0)
#define Grad(t,x,y,z)(t%0x4==0x0?x:t%0x4==0x1?-x:t%0x4==0x2?-z:t%0x4==0x3?z:0)
#define MakeRand(a,b)(abs(a-(a/103)*b)%256)
//#define MakeRand(a,b)(noised[b])

TwilightRandomLevelSource::TwilightRandomLevelSource(Dimension* dimension):ChunkSource(dimension,16){
if(flag){
for(int i=0;i<512;i++)noised[i]=mt()%256;//MakeRand(40,i);
}
};
TwilightRandomLevelSource::~TwilightRandomLevelSource(){
};
LevelChunk* TwilightRandomLevelSource::requestChunk(const ChunkPos& pos, ChunkSource::LoadMode mode){
	if(mode==ChunkSource::LoadMode::NONE) return NULL;
	return new LevelChunk(*this->getDimension(), pos, false);
};

float TwilightRandomLevelSource::getHight(float x,float y,float z){
 int seed=this->getLevel()->getSeed();
 
 int xi=(int)x;
 int yi=(int)y;
 int zi=(int)z;
 
 float xf=x-(int)x;
 float yf=y-(int)y;
 float zf=z-(int)z;
 /*float a000=Grad(abs(MakeRand(seed,xi+MakeRand(seed,yi+MakeRand(seed,zi)))),xf,yf,zf);
 float a100=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,yi+MakeRand(seed,zi)))),(xf-1.0f),yf,zf);
 float a010=Grad(abs(MakeRand(seed,xi+MakeRand(seed,(yi+1)%64+MakeRand(seed,zi)))),xf,(yf-1.0f),zf);
 float a001=Grad(abs(MakeRand(seed,xi+MakeRand(seed,yi+MakeRand(seed,zi)))),xf,yf,(zf-1.0f));
 float a110=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,(yi+1)%64+MakeRand(seed,zi)))),(xf-1.0f),(yf-1.0f),zf);
 float a011=Grad(abs(MakeRand(seed,xi+MakeRand(seed,(yi+1)%64+MakeRand(seed,(zi+1)%64)))),xf,(yf-1.0f),(zf-1.0f));
 float a101=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,yi+MakeRand(seed,(zi+1)%64)))),(xf-1.0f),yf,(zf-1.0f));
 float a111=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,(yi+1)%64+MakeRand(seed,(zi+1)%64)))),(xf-1.0f),(yf-1.0f),(zf-1.0f));*/
 float a000=Grad(abs(MakeRand(seed,xi+MakeRand(seed,zi))),xf,0,zf);
 float a100=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,zi))),(xf-1.0f),0,zf);
 float a001=Grad(abs(MakeRand(seed,xi+MakeRand(seed,(zi+1)%64))),xf,0,(zf-1.0f));
 float a101=Grad(abs(MakeRand(seed,(xi+1)%64+MakeRand(seed,(zi+1)%64))),(xf-1.0f),0,(zf-1.0f));
 /*float a000=Grad(abs(noised[abs(xi+noised[abs(zi)])]),xf,0,zf);
 float a100=Grad(abs(noised[abs((xi+1)%64+noised[abs(zi)])]),(xf-1.0f),0,zf);
 float a101=Grad(abs(noised[abs((xi+1)%64+noised[abs((zi+1)%64)])]),(xf-1.0f),0,(zf-1.0f));
 float a001=Grad(abs(noised[abs(xi+noised[abs((zi+1)%64)])]),xf,0,(zf-1.0f));*/
 //LOG("%d",abs(MakeRand(seed,xi+MakeRand(seed,zi))));
 xf=Fade(xf);
 yf=Fade(yf);
 zf=Fade(zf);
 return (Lerp(Lerp(a000,a100,xf),Lerp(a001,a101,xf),zf)+1.0f)/2.0f;
 //return (Lerp(Lerp(Lerp(a000,a100,xf),Lerp(a010,a110,xf),yf),Lerp(Lerp(a000,a100,xf),Lerp(a010,a110,xf),yf),zf)+1.0f)/2.0f;
}

void TwilightRandomLevelSource::loadChunk(LevelChunk& chunk,bool b){
 BlockID terrain[65536];
 ChunkPos cpos=chunk.getPosition();
 
 for(size_t zz=0;zz<16;zz++){
  for(size_t xx=0;xx<16;xx++){
   chunk.setBiome(*Biome::mBiomes[1],ChunkBlockPos(BlockPos(cpos.x*16+xx,0,cpos.z*16+zz)));
    float high=10.0f*getHight((float)(abs(cpos.x*16+xx))/64.0F,23.82f,(float)(abs(cpos.z*16+zz)/64.0F));
    //100*getHight((float)(cpos.x*16+xx)/26,(float)(cpos.z*16+zz)/26);
    for(size_t yy=0;yy<(int)(high/2.0f);yy++){
     terrain[128*16*xx+128*zz+yy]=7;
    }
    for(size_t yy=(int)(high/1.5f);yy<(int)(high+18.0f);yy++)
    terrain[128*16*xx+128*zz+yy]=1;
    for(size_t yy=(int)(high+18.0f);yy<(int)(high+22.0f);yy++)
     terrain[128*16*xx+128*zz+yy]=3;
    terrain[128*16*xx+128*zz+(int)(high+22.0f)]=2;
    terrain[128*16*xx+128*zz+(int)(high*10)]=2;
    if((int)(high+22.0f)<26)
     for(size_t yy=(int)(high+22.0f);yy<26;yy++)
      terrain[128*16*xx+128*zz+yy]=9;//9;
   }
 }
 buffer_span<BlockID> buf=buffer_span<BlockID>(terrain);
 chunk.setAllBlockIDs(buf,128);
 chunk.recomputeHeightMap(false);
 chunk._setGenerator(this);
 chunk.setUnsaved();
 chunk.changeState(ChunkState::STATE_1, ChunkState::STATE_2);
};
void TwilightRandomLevelSource::postProcess(ChunkViewSource& view){
 ChunkViewSource::Area area=view.getArea();
 ChunkPos cpos=ChunkPos(area.posx, area.posz);
 //LevelChunk* lchunk=view->getExistingChunk(cpos);
 //BlockSource* source=new BlockSource(*this->getLevel(),*this->getDimension(),*this, false, true);
 //source->setBlock(BlockPos(cpos,250),17,2);
 //lchunk->getBiome(ChunkBlockPos(BlockPos(cpos,0))).
 //Biome::mBiomes[1]->decorate(source, *getLevel()->getRandom(),BlockPos(cpos,0),true, 0.0F);
};