#include "TwilightForest.h"

JavaVM* TwilightForest::Vm;
jclass TwilightForest::Integer;
jmethodID TwilightForest::callScriptMethod;
pthread_t TwilightForest::callHook;
jclass TwilightForest::ScriptManager;

std::string TwilightForest::CALLNAME;
int TwilightForest::X;
int TwilightForest::Y;
int TwilightForest::Z;

Item* TwilightForest::mMagicBook;

void* TwilightForest::_callHook(void* arg){
 if(Vm){
  JNIEnv* env;
  TwilightForest::Vm->AttachCurrentThread(&env,NULL);
  //jobjectArray ret=env->NewObjectArray(0,Integer,0);
  //if(ret!=NULL){
  //env->CallStaticVoidMethod(ScriptManager,callScriptMethod,TwilightForest::CALLNAME,ret);
  //}
  TwilightForest::Vm->DetachCurrentThread();
 }
 pthread_exit(NULL);
}

void TwilightForest::init(JavaVM* vm){
 TwilightForest::CALLNAME="";
 TwilightForest::X=0;
 TwilightForest::Y=-1;
 TwilightForest::Z=0;
 
 JNIEnv* env;
	int envStatus=vm->GetEnv((void**)&env,JNI_VERSION_1_2);
	if(envStatus==JNI_EDETACHED){
	 vm->AttachCurrentThread(&env,nullptr);
	}
	TwilightForest::Vm=vm;
	TwilightForest::Integer=env->FindClass("java/lang/Integer");
	TwilightForest::ScriptManager=env->FindClass("net/zhuoweizhang/mcpelauncher/ScriptManager");
	TwilightForest::callScriptMethod=env->GetStaticMethodID(ScriptManager,"callScriptMethod","(Ljava/lang/String;[Ljava/lang/Object)V");
	if(envStatus==JNI_EDETACHED){
	 vm->DetachCurrentThread();	
	}
}