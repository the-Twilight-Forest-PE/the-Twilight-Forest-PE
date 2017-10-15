#include "TwilightDimension.h"

#include "minecraftpe/world/level/dimension/HellDimension.h"

TwilightDimension::TwilightDimension(Level& level):NormalDimension(level){
 //this->id=DimensionId::HELL;//TWILIGHT;
 //this->high=256;
 //brightness=0.5;
};
TwilightDimension::~TwilightDimension(){

};
void TwilightDimension::init(){
	Dimension::init();
	setCeiling(true);
	setUltraWarm(false);
}
/*void TwilightDimension::translatePosAcrossDimension(Vec3 const&,DimensionId) const{
 
};*/
bool TwilightDimension::tick(){
 return true;
};
Color TwilightDimension::getFogColor(float) const{
 return Color::CYAN;
};
float TwilightDimension::getFogDistanceScale() const{
 return (float)160;
};
float TwilightDimension::getTimeOfDay(int i,float f) const{
 return 0.3f;
};
bool TwilightDimension::isFoggyAt(int,int) const{
 return true;
};
bool TwilightDimension::isNaturalDimension() const{
 return true;
};
bool TwilightDimension::isValidSpawn(int,int) const{
 return true;
};
bool TwilightDimension::isDay() const{
 return false;
};
bool TwilightDimension::mayRespawn() const{
 return true;
};
bool TwilightDimension::showSky() const{
 return true;
};
bool TwilightDimension::hasGround() const{
 return true;
};
const std::string TwilightDimension::getName() const{
	return "TwilightForest";
}
