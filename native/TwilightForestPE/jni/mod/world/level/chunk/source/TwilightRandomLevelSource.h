#pragma once

#include "minecraftpe/world/level/chunk/source/ChunkSource.h"
#include "minecraftpe/world/level/chunk/LevelChunk.h" 
#include "minecraftpe/world/phys/PerlinNoise.h"
#include "minecraftpe/world/phys/Vec2.h"

#include <math.h>
#include <cmath>
#include <stdlib.h>

#include <android/log.h>
#define LOG_TAG "TFGenerator"
#define LOG(...) ((void)__android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__))

class TwilightRandomLevelSource:public ChunkSource{
public: 

 PerlinNoise* noise[5];
 float densities[5000];

 TwilightRandomLevelSource(Dimension*);
 virtual ~TwilightRandomLevelSource();

 float getHight(float,float,float);
 
 virtual LevelChunk* requestChunk(ChunkPos const&,ChunkSource::LoadMode);
 virtual void loadChunk(LevelChunk &,bool);
 virtual void postProcess(ChunkViewSource&);
};