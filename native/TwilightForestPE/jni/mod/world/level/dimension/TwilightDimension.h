#include "minecraftpe/world/level/dimension/NormalDimension.h"
#include "minecraftpe/world/level/biome/Biome.h"
#include "minecraftpe/world/level/Level.h"

class TwilightDimension:public NormalDimension{
public:
int testseg;

TwilightDimension(Level&);
virtual ~TwilightDimension();
	virtual void init();
	virtual bool tick();
	//virtual void translatePosAcrossDimension(Vec3 const&,DimensionId) const;
	virtual Color getFogColor(float) const;
	virtual float getFogDistanceScale() const;
	virtual float getTimeOfDay(int,float) const;
	virtual bool isFoggyAt(int,int) const;
	virtual bool isNaturalDimension() const;
	virtual bool isValidSpawn(int,int) const;
	virtual bool isDay() const;
	virtual bool hasGround() const;
	virtual bool mayRespawn() const;
	virtual bool showSky() const;
	virtual const std::string getName() const;
};