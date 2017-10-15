/*
  TODO
   naga
   maze
   aurorabrick
*/

const blockId={
"aurora_pillar":2923,
"aurora_slab_side":2924,
"aurorabrick":2925,
"brown_thorns":2926,
"burnt_thorns":2927,
"canopy":2928,
"castleblock_brick":2929,
"castleblock_cracked":2930,
"castleblock_faded":2931,
"castleblock_masic":2932,
"castleblock_mossy":2933,
"castleblock_roof":2934,
"cloverpatch":2935,
"darkwood_leaves2":2936,
"darkwood_leaves":2937,
"darkwood":2938,
"deadrock_cracked":2939,
"deadrock_solid":2940,
"deadrock_surface":2941,
"fiddlehead":2942,
"fireflyjar":2943,
"firejet_top":2944,
"fluffy_cloud":2945,
"forcefield_blue":2946,
"forcefield_green":2947,
"forcefield_orange":2948,
"forcefield_pink":2949,
"forcefield_purple":2950,
"green_thorns":2951,
"hedge":2952,
"huge_gloom_stem":2953,
"huge_lilypad":2954,
"huge_stalk":2955,
"huge_waterlily":2956,
"knightbrick":2957,
"knightbrick_cracked":2958,
"knightbrick_floor":2959,
"knightbrick_mossy":2960,
"knightmetal_block":2961,
"mangrove_top":2962,
"mayapples_flower":2963,
"mosspatch":2964,
"mine_gem":2965,
"mine_gem_off":2966,
"mine":2967,
"mushgloom":2968,
"oak":2969,
"oreroots":2970,
"pedestal_top":2971,
"ripe_torch_cluster":2972,
"rootblock":2973,
"rootstrand":2974,
"sapling_canopy":2975,
"sapling_darkwood":2976,
"sapling_hollow_oak":2977,
"sapling_mangrove":2978,
"sapling_mining":2979,
"sapling_oak":2980,
"sapling_rainboak":2981,
"sapling_sorting":2982,
"sapling_time":2983,
"sapling_transformation":2984,
"shield":2985,
"slider_h":2986,
"sort_eye":2987,
"sort_eye_off":2988,
"sort_leaves":2989,
"sort":2990,
"TFCicada":2991,
"TFFirefly":2992,
"TFMoonworm":2993,
"thornRose":2994,
"time_clock":2995,
"time_clock_off":2996,
"time_leaves":2997,
"time":2998,
"torchberry":2999,

"TowerWoodAlt":3000,
"TowerWoodCracked":3001,
"TowerWoodInfested":3002,
"TowerWoodMossy":3003,
"TowerWoodPlanks":3004,
"TowerWoodEncased":3005,
"TowerDevReappearingOff":3006,
"TowerDevReappearingOn":3007,
"TowerDevReappearingTraceOff":3008,
"TowerDevReappearingTraceOn":3009,
"TowerDevVanishOff":3010,
"TowerDevVanishOn":3011,
"TowerDevAntiBuilder":3012,
"TowerDevAntiBuilt":3013,
"TowerDevBuilderOff":3014,
"TowerDevBuilderOn":3015,
"TowerDevBuilderTimeout":3016,
"TowerDevBuiltOff":3017,
"TowerDevBuiltOn":3018,
"TowerDevFirejetOff":3019,
"TowerDevFirejetOn":3020,

"trans_heart":3021,
"trans_leaves":3022,
"trans_side":3023,
"troll_root":3024,
"trollsteinn":3025,
"trollsteinn_light":3026,
"uberous_soil":3027,
"uncrafting":3028,
"unripe_torch_cluster":3029,
"wispy_cloud":3030,
};
const blockTexture={
"aurora_pillar":[["aurora_pillar_side",0]],
"aurora_slab_side":[["aurora_slab_side",0]],
"aurorabrick":[["aurorabrick",0]],
"brown_thorns":[["brown_thorns_side",0]],
"burnt_thorns":[["burnt_thorns_side",0]],
"canopy":[["canopy_side",0]],
"castleblock_brick":[["castleblock_brick",0]],
"castleblock_cracked":[["castleblock_cracked",0]],
"castleblock_faded":[["castleblock_faded",0]],
"castleblock_masic":[["castleblock_magic",0]],
"castleblock_mossy":[["castleblock_mossy",0]],
"castleblock_roof":[["castleblock_roof",0]],
"cloverpatch":[["cloverpatch",0]],
"darkwood_leaves2":[["darkwood_leaves2",0]],
"darkwood_leaves":[["darkwood_leaves",0]],
"darkwood":[["darkwood_side",0]],
"deadrock_cracked":[["deadrock_cracked",0]],
"deadrock_solid":[["deadrock_solid",0]],
"deadrock_surface":[["deadrock_surface",0]],
"fiddlehead":[["fiddlehead",0]],
"fireflyjar":[["fireflyjar_cork",0]],
"firejet_top":[["firejet_top",0]],
"fluffy_cloud":[["fluffy_cloud",0]],
"forcefield_blue":[["forcefield_blue",0]],
"forcefield_green":[["forcefield_green",0]],
"forcefield_orange":[["forcefield_orange",0]],
"forcefield_pink":[["forcefield_pink",0]],
"forcefield_purple":[["forcefield_purple",0]],
"green_thorns":[["green_thorns_side",0]],
"hedge":[["hedge",0]],
"huge_gloom_stem":[["huge_gloom_stem",0]],
"huge_lilypad":[["huge_lilypad",0]],
"huge_stalk":[["huge_stalk",0]],
"huge_waterlily":[["huge_waterlily",0]],
"knightbrick":[["knightbrick",0]],
"knightbrick_cracked":[["knightbrick_cracked",0]],
"knightbrick_floor":[["knightbrick_floor",0]],
"knightbrick_mossy":[["knightbrick_mossy",0]],
"knightmetal_block":[["knightmetal_block",0]],
"mangrove_top":[["mangrove_top",0]],
"mayapples_flower":[["mayapples_flower",0]],
"mosspatch":[["mosspatch",0]],
"mine_gem":[["mine_gem",0]],
"mine_gem_off":[["mine_gem_off",0]],
"mine":[["mine_side",0]],
"mushgloom":[["mushgloom",0]],
"oak":[["oak_side",0]],
"oreroots":[["oreroots",0]],
"pedestal_top":[["pedestal_top",0]],
"ripe_torch_cluster":[["ripe_torch_cluster",0]],
"rootblock":[["rootblock",0]],
"rootstrand":[["rootstrand",0]],
"sapling_canopy":[["sapling_canopy",0]],
"sapling_darkwood":[["sapling_darkwood",0]],
"sapling_hollow_oak":[["sapling_hollow_oak",0]],
"sapling_mangrove":[["sapling_mangrove",0]],
"sapling_mining":[["sapling_mining",0]],
"sapling_oak":[["sapling_oak",0]],
"sapling_rainboak":[["sapling_rainboak",0]],
"sapling_sorting":[["sapling_sorting",0]],
"sapling_time":[["sapling_time",0]],
"sapling_transformation":[["sapling_transformation",0]],
"shield":[["shield_inside",0]],
"slider_h":[["slider_h",0]],
"sort_eye":[["sort_eye",0]],
"sort_eye_off":[["sort_eye_off",0]],
"sort_leaves":[["sort_leaves",0]],
"sort":[["sort_side",0]],
"TFCicada":[["TFCicada",0]],
"TFFirefly":[["TFFirefly",0]],
"TFMoonworm":[["TFMoonworm",0]],
"thornRose":[["thornRose",0]],
"time_clock":[["time_clock",0]],
"time_clock_off":[["time_clock_off",0]],
"time_leaves":[["time_leaves",0]],
"time":[["time_side",0]],
"torchberry":[["torchberry",0]],
"TowerWoodAlt":[["towerwood_alt",0]],
"TowerWoodCracked":[["towerwood_cracked",0]],
"TowerWoodInfested":[["towerwood_infested",0]],
"TowerWoodMossy":[["towerwood_mossy",0]],
"TowerWoodPlanks":[["towerwood_planks",0]],
"TowerWoodEncased":[["towerwood_encased",0]],
"TowerDevReappearingOff":[["towerdev_reappearing_off",0]],
"TowerDevReappearingOn":[["towerdev_reappearing_on",0]],
"TowerDevReappearingTraceOff":[["towerdev_reappearing_trace_off",0]],
"TowerDevReappearingTraceOn":[["towerdev_reappearing_trace_on",0]],
"TowerDevVanishOff":[["towerdev_vanish_off",0]],
"TowerDevVanishOn":[["towerdev_vanish_on",0]],
"TowerDevAntiBuilder":[["towerdev_antibuilder",0]],
"TowerDevAntiBuilt":[["towerdev_antibuilt",0]],
"TowerDevBuilderOff":[["towerdev_builder_off",0]],
"TowerDevBuilderOn":[["towerdev_builder_on",0]],
"TowerDevBuilderTimeout":[["towerdev_builder_timeout",0]],
"TowerDevBuiltOff":[["towerdev_built_off",0]],
"TowerDevBuiltOn":[["towerdev_built_on",0]],
"TowerDevFirejetOff":[["towerdev_firejet_off",0]],
"TowerDevFirejetOn":[["towerdev_firejet_on",0]],
"TowerDevGhastTrapOff":[["towerdev_ghasttrap_off",0]],
"TowerDevGhastTrapOn":[["towerdev_ghasttrap_on",0]],
"TowerDevGhastTraplidOff":[["towerdev_ghasttraplid_off",0]],
"TowerDevGhastTraplidOn":[["towerdev_ghasttraplid_on",0]],
"TowerDevLockOff":[["towerdev_lock_off",0]],
"TowerDevLockOn":[["towerdev_lock_on",0]],
"TowerDevReactorOff":[["towerdev_reactor_off",0]],
"TowerDevReactorOn":[["towerdev_reactor_on",0]],
"TowerDevSmokerOff":[["towerdev_smoker_off",0]],
"TowerDevSmokerOn":[["towerdev_smoker_on",0]],
"trans_heart":[["trans_heart",0]],
"trans_leaves":[["trans_leaves",0]],
"trans_side":[["trans_side",0]],
"troll_root":[["troll_root",0]],
"trollsteinn":[["trollsteinn",0]],
"trollsteinn_light":[["trollsteinn_light",0]],
"uberous_soil":[["uberous_soil",0]],
"uncrafting":[["uncrafting_side",0]],
"unripe_torch_cluster":[["unripe_torch_cluster",0]],
"wispy_cloud":[["wispy_cloud",0]],
};
const Blocks=[
{"id":blockId.aurora_pillar,"name":"aurora_pillar","texture":blockTexture.aurora_pillar,"material":5,"solid":false},
{"id":blockId.aurora_slab_side,"name":"aurora_slab_side","texture":blockTexture.aurora_slab_side,"material":5,"solid":false},
//{"id":blockId.aurorabrick,"name":"aurorabrick","texture":blockTexture.aurorabrick,"material":5,"solid":false},
{"id":blockId.brown_thorns,"name":"brown_thorns","texture":blockTexture.brown_thorns,"material":5,"solid":false},
{"id":blockId.burnt_thorns,"name":"burnt_thorns","texture":blockTexture.burnt_thorns,"material":5,"solid":false},
{"id":blockId.canopy,"name":"canopy","texture":blockTexture.canopy,"material":5,"solid":false},
{"id":blockId.castleblock_brick,"name":"castleblock_brick","texture":blockTexture.castleblock_brick,"material":5,"solid":false},
{"id":blockId.castleblock_cracked,"name":"castleblock_cracked","texture":blockTexture.castleblock_cracked,"material":5,"solid":false},
{"id":blockId.castleblock_faded,"name":"castleblock_faded","texture":blockTexture.castleblock_faded,"material":5,"solid":false},
{"id":blockId.castleblock_masic,"name":"castleblock_masic","texture":blockTexture.castleblock_masic,"material":5,"solid":false},
{"id":blockId.castleblock_mossy,"name":"castleblock_mossy","texture":blockTexture.castleblock_mossy,"material":5,"solid":false},
{"id":blockId.castleblock_roof,"name":"castleblock_roof","texture":blockTexture.castleblock_roof,"material":5,"solid":false},
{"id":blockId.cloverpatch,"name":"cloverpatch","texture":blockTexture.cloverpatch,"material":5,"solid":false},
{"id":blockId.darkwood_leaves2,"name":"darkwood_leaves2","texture":blockTexture.darkwood_leaves2,"material":5,"solid":false},
{"id":blockId.darkwood_leaves,"name":"darkwood_leaves","texture":blockTexture.darkwood_leaves,"material":5,"solid":false},
{"id":blockId.darkwood,"name":"darkwood","texture":blockTexture.darkwood,"material":5,"solid":false},
{"id":blockId.deadrock_cracked,"name":"deadrock_cracked","texture":blockTexture.deadrock_cracked,"material":5,"solid":false},
{"id":blockId.deadrock_solid,"name":"deadrock_solid","texture":blockTexture.deadrock_solid,"material":5,"solid":false},
{"id":blockId.deadrock_surface,"name":"deadrock_surface","texture":blockTexture.deadrock_surface,"material":5,"solid":false},
{"id":blockId.fiddlehead,"name":"fiddlehead","texture":blockTexture.fiddlehead,"material":5,"solid":false},
{"id":blockId.fireflyjar,"name":"fireflyjar","texture":blockTexture.fireflyjar,"material":5,"solid":false},
{"id":blockId.firejet_top,"name":"firejet_top","texture":blockTexture.firejet_top,"material":5,"solid":false},
{"id":blockId.fluffy_cloud,"name":"fluffy_cloud","texture":blockTexture.fluffy_cloud,"material":5,"solid":false},
{"id":blockId.forcefield_blue,"name":"forcefield_blue","texture":blockTexture.forcefield_blue,"material":5,"solid":false},
{"id":blockId.forcefield_green,"name":"forcefield_green","texture":blockTexture.forcefield_green,"material":5,"solid":false},
{"id":blockId.forcefield_orange,"name":"forcefield_orange","texture":blockTexture.forcefield_orange,"material":5,"solid":false},
{"id":blockId.forcefield_pink,"name":"forcefield_pink","texture":blockTexture.forcefield_pink,"material":5,"solid":false},
{"id":blockId.forcefield_purple,"name":"forcefield_purple","texture":blockTexture.forcefield_purple,"material":5,"solid":false},
{"id":blockId.green_thorns,"name":"green_thorns","texture":blockTexture.green_thorns,"material":5,"solid":false},
{"id":blockId.hedge,"name":"hedge","texture":blockTexture.hedge,"material":5,"solid":false},
{"id":blockId.huge_gloom_stem,"name":"huge_gloom_stem","texture":blockTexture.huge_gloom_stem,"material":5,"solid":false},
{"id":blockId.huge_lilypad,"name":"huge_lilypad","texture":blockTexture.huge_lilypad,"material":5,"solid":false},
{"id":blockId.huge_stalk,"name":"huge_stalk","texture":blockTexture.huge_stalk,"material":5,"solid":false},
{"id":blockId.huge_waterlily,"name":"huge_waterlily","texture":blockTexture.huge_waterlily,"material":5,"solid":false},
{"id":blockId.knightbrick,"name":"knightbrick","texture":blockTexture.knightbrick,"material":5,"solid":false},
{"id":blockId.knightbrick_cracked,"name":"knightbrick_cracked","texture":blockTexture.knightbrick_cracked,"material":5,"solid":false},
{"id":blockId.knightbrick_floor,"name":"knightbrick_floor","texture":blockTexture.knightbrick_floor,"material":5,"solid":false},
{"id":blockId.knightbrick_mossy,"name":"knightbrick_mossy","texture":blockTexture.knightbrick_mossy,"material":5,"solid":false},
{"id":blockId.knightmetal_block,"name":"knightmetal_block","texture":blockTexture.knightmetal_block,"material":5,"solid":false},
{"id":blockId.mangrove_top,"name":"mangrove_top","texture":blockTexture.mangrove_top,"material":5,"solid":false},
{"id":blockId.mayapples_flower,"name":"mayapples_flower","texture":blockTexture.mayapples_flower,"material":5,"solid":false},
{"id":blockId.mosspatch,"name":"mosspatch","texture":blockTexture.mosspatch,"material":5,"solid":false},
{"id":blockId.mine_gem,"name":"mine_gem","texture":blockTexture.mine_gem,"material":5,"solid":false},
{"id":blockId.mine_gem_off,"name":"mine_gem_off","texture":blockTexture.mine_gem_off,"material":5,"solid":false},
{"id":blockId.mine,"name":"mine","texture":blockTexture.mine,"material":5,"solid":false},
{"id":blockId.mushgloom,"name":"mushgloom","texture":blockTexture.mushgloom,"material":5,"solid":false},
{"id":blockId.oak,"name":"oak","texture":blockTexture.oak,"material":5,"solid":false},
{"id":blockId.oreroots,"name":"oreroots","texture":blockTexture.oreroots,"material":5,"solid":false},
{"id":blockId.pedestal_top,"name":"pedestal_top","texture":blockTexture.pedestal_top,"material":5,"solid":false},
{"id":blockId.ripe_torch_cluster,"name":"ripe_torch_cluster","texture":blockTexture.ripe_torch_cluster,"material":5,"solid":false},
{"id":blockId.rootblock,"name":"rootblock","texture":blockTexture.rootblock,"material":5,"solid":false},
{"id":blockId.rootstrand,"name":"rootstrand","texture":blockTexture.rootstrand,"material":5,"solid":false},
{"id":blockId.sapling_canopy,"name":"sapling_canopy","texture":blockTexture.sapling_canopy,"material":5,"solid":false},
{"id":blockId.sapling_darkwood,"name":"sapling_darkwood","texture":blockTexture.sapling_darkwood,"material":5,"solid":false},
{"id":blockId.sapling_hollow_oak,"name":"sapling_hollow_oak","texture":blockTexture.sapling_hollow_oak,"material":5,"solid":false},
{"id":blockId.sapling_mangrove,"name":"sapling_mangrove","texture":blockTexture.sapling_mangrove,"material":5,"solid":false},
{"id":blockId.sapling_mining,"name":"sapling_mining","texture":blockTexture.sapling_mining,"material":5,"solid":false},
{"id":blockId.sapling_oak,"name":"sapling_oak","texture":blockTexture.sapling_oak,"material":5,"solid":false},
{"id":blockId.sapling_rainboak,"name":"sapling_rainboak","texture":blockTexture.sapling_rainboak,"material":5,"solid":false},
{"id":blockId.sapling_sorting,"name":"sapling_sorting","texture":blockTexture.sapling_sorting,"material":5,"solid":false},
{"id":blockId.sapling_time,"name":"sapling_time","texture":blockTexture.sapling_time,"material":5,"solid":false},
{"id":blockId.sapling_transformation,"name":"sapling_transformation","texture":blockTexture.sapling_transformation,"material":5,"solid":false},
{"id":blockId.shield,"name":"shield","texture":blockTexture.shield,"material":5,"solid":false},
{"id":blockId.slider_h,"name":"slider_h","texture":blockTexture.slider_h,"material":5,"solid":false},
{"id":blockId.sort_eye,"name":"sort_eye","texture":blockTexture.sort_eye,"material":5,"solid":false},
{"id":blockId.sort_eye_off,"name":"sort_eye_off","texture":blockTexture.sort_eye_off,"material":5,"solid":false},
{"id":blockId.sort_leaves,"name":"sort_leaves","texture":blockTexture.sort_leaves,"material":5,"solid":false},
{"id":blockId.sort,"name":"sort","texture":blockTexture.sort,"material":5,"solid":false},
{"id":blockId.TFCicada,"name":"TFCicada","texture":blockTexture.TFCicada,"material":5,"solid":false},
{"id":blockId.TFFirefly,"name":"TFFirefly","texture":blockTexture.TFFirefly,"material":5,"solid":false},
{"id":blockId.TFMoonworm,"name":"TFMoonworm","texture":blockTexture.TFMoonworm,"material":5,"solid":false},
{"id":blockId.thornRose,"name":"thornRose","texture":blockTexture.thornRose,"material":5,"solid":false},
{"id":blockId.time_clock,"name":"time_clock","texture":blockTexture.time_clock,"material":5,"solid":false},
{"id":blockId.time_clock_off,"name":"time_clock_off","texture":blockTexture.time_clock_off,"material":5,"solid":false},
{"id":blockId.time_leaves,"name":"time_leaves","texture":blockTexture.time_leaves,"material":5,"solid":false},
{"id":blockId.time,"name":"time","texture":blockTexture.time,"material":5,"solid":false},
{"id":blockId.torchberry,"name":"torchberry","texture":blockTexture.torchberry,"material":5,"solid":false},
{"id":blockId.TowerWoodAlt,"name":"TowerWoodAlt","texture":blockTexture.TowerWoodAlt,"material":5,"solid":false},
{"id":blockId.TowerWoodCracked,"name":"TowerWoodCracked","texture":blockTexture.TowerWoodCracked,"material":5,"solid":false},
{"id":blockId.TowerWoodInfested,"name":"TowerWoodInfested","texture":blockTexture.TowerWoodInfested,"material":5,"solid":false},
{"id":blockId.TowerWoodMossy,"name":"TowerWoodMossy","texture":blockTexture.TowerWoodMossy,"material":5,"solid":false},
{"id":blockId.TowerWoodPlanks,"name":"TowerWoodPlanks","texture":blockTexture.TowerWoodPlanks,"material":5,"solid":false},
{"id":blockId.TowerWoodEncased,"name":"TowerWoodEncased","texture":blockTexture.TowerWoodEncased,"material":5,"solid":false},
{"id":blockId.TowerDevReappearingOff,"name":"TowerDevReappearingOff","texture":blockTexture.TowerDevReappearingOff,"material":5,"solid":false},
{"id":blockId.TowerDevReappearingOn,"name":"TowerDevReappearingOn","texture":blockTexture.TowerDevReappearingOn,"material":5,"solid":false},
{"id":blockId.TowerDevReappearingTraceOff,"name":"TowerDevReappearingTraceOff","texture":blockTexture.TowerDevReappearingTraceOff,"material":5,"solid":false},
{"id":blockId.TowerDevReappearingTraceOn,"name":"TowerDevReappearingTraceOn","texture":blockTexture.TowerDevReappearingTraceOn,"material":5,"solid":false},
{"id":blockId.TowerDevVanishOff,"name":"TowerDevVanishOff","texture":blockTexture.TowerDevVanishOff,"material":5,"solid":false},
{"id":blockId.TowerDevVanishOn,"name":"TowerDevVanishOn","texture":blockTexture.TowerDevVanishOn,"material":5,"solid":false},
{"id":blockId.TowerDevAntiBuilder,"name":"TowerDevAntiBuilder","texture":blockTexture.TowerDevAntiBuilder,"material":5,"solid":false},
{"id":blockId.TowerDevAntiBuilt,"name":"TowerDevAntiBuilt","texture":blockTexture.TowerDevAntiBuilt,"material":5,"solid":false},
{"id":blockId.TowerDevBuilderOff,"name":"TowerDevBuilderOff","texture":blockTexture.TowerDevBuilderOff,"material":5,"solid":false},
{"id":blockId.TowerDevBuilderOn,"name":"TowerDevBuilderOn","texture":blockTexture.TowerDevBuilderOn,"material":5,"solid":false},
{"id":blockId.TowerDevBuilderTimeout,"name":"TowerDevBuilderTimeout","texture":blockTexture.TowerDevBuilderTimeout,"material":5,"solid":false},
{"id":blockId.TowerDevBuiltOff,"name":"TowerDevBuiltOff","texture":blockTexture.TowerDevBuiltOff,"material":5,"solid":false},
{"id":blockId.TowerDevBuiltOn,"name":"TowerDevBuiltOn","texture":blockTexture.TowerDevBuiltOn,"material":5,"solid":false},
{"id":blockId.TowerDevFirejetOff,"name":"TowerDevFirejetOff","texture":blockTexture.TowerDevFirejetOff,"material":5,"solid":false},
{"id":blockId.TowerDevFirejetOn,"name":"TowerDevFirejetOn","texture":blockTexture.TowerDevFirejetOn,"material":5,"solid":false},
{"id":blockId.trans_heart,"name":"trans_heart","texture":blockTexture.trans_heart,"material":5,"solid":false},
{"id":blockId.trans_leaves,"name":"trans_leaves","texture":blockTexture.trans_leaves,"material":5,"solid":false},
{"id":blockId.trans_side,"name":"trans_side","texture":blockTexture.trans_side,"material":5,"solid":false},
{"id":blockId.troll_root,"name":"troll_root","texture":blockTexture.troll_root,"material":5,"solid":false},
{"id":blockId.trollsteinn,"name":"trollsteinn","texture":blockTexture.trollsteinn,"material":5,"solid":false},
{"id":blockId.trollsteinn_light,"name":"trollsteinn_light","texture":blockTexture.trollsteinn_light,"material":5,"solid":false},
{"id":blockId.uberous_soil,"name":"uberous_soil","texture":blockTexture.uberous_soil,"material":5,"solid":false},
{"id":blockId.uncrafting,"name":"uncrafting","texture":blockTexture.uncrafting,"material":5,"solid":false},
{"id":blockId.unripe_torch_cluster,"name":"unripe_torch_cluster","texture":blockTexture.unripe_torch_cluster,"material":5,"solid":false},
{"id":blockId.wispy_cloud,"name":"wispy_cloud","texture":blockTexture.wispy_cloud,"material":5,"solid":false},
];

for(i=0;i<Blocks.length;i++){
Block.defineBlock(Blocks[i].id,Blocks[i].name,Blocks[i].texture,Blocks[i].material,Blocks[i].solid);
Player.addItemCreativeInv(Blocks[i].id,64,0);
};