#include <pthread.h>
#include <jni.h>
#include <string>

#include "minecraftpe/world/item/Item.h"

class TwilightForest{
public:

static JavaVM* Vm;
static jclass Integer;
static jclass ScriptManager;
static jmethodID callScriptMethod;
static pthread_t callHook;

static std::string CALLNAME;
static int X,Y,Z;

static Item* mMagicBook;

static void init(JavaVM*);
static void* _callHook(void*);
};