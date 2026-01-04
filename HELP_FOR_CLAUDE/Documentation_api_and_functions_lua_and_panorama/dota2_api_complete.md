# Dota 2 Scripting API - Полная документация
Источник: https://customgames.ru/forum/pages/scripting/
**Всего категорий:** 109
**Всего элементов:** 2399

---

## Содержание

1. [Глобальные функции](#глобальные-функции) - 184 элементов
2. [CBaseEntity](#cbaseentity) - 73 элементов
3. [CEntities](#centities) - 20 элементов
4. [CEntityInstance](#centityinstance) - 19 элементов
5. [CDOTABaseAbility](#cdotabaseability) - 113 элементов
6. [CDOTA_Ability_Animation_Attack](#cdota-ability-animation-attack) - 1 элементов
7. [CDOTA_Ability_Animation_TailSpin](#cdota-ability-animation-tailspin) - 1 элементов
8. [CDOTA_Ability_Nian_Leap](#cdota-ability-nian-leap) - 1 элементов
9. [CDOTA_Ability_Nian_Dive](#cdota-ability-nian-dive) - 1 элементов
10. [CDOTA_Ability_Nian_Roar](#cdota-ability-nian-roar) - 1 элементов
11. [CDOTA_Item](#cdota-item) - 30 элементов
12. [CDOTA_Item_Physical](#cdota-item-physical) - 3 элементов
13. [CDOTA_Item_DataDriven](#cdota-item-datadriven) - 2 элементов
14. [CDOTA_Unit_Nian](#cdota-unit-nian) - 4 элементов
15. [CBasePlayer](#cbaseplayer) - 6 элементов
16. [CDOTAPlayer](#cdotaplayer) - 6 элементов
17. [CDOTA_PlayerResource](#cdota-playerresource) - 134 элементов
18. [CDOTA_BaseNPC](#cdota-basenpc) - 282 элементов
19. [CDOTA_BaseNPC_Hero](#cdota-basenpc-hero) - 96 элементов
20. [CDOTA_BaseNPC_Creature](#cdota-basenpc-creature) - 16 элементов
21. [CDOTA_BaseNPC_Building](#cdota-basenpc-building) - 2 элементов
22. [CDOTABaseGameMode](#cdotabasegamemode) - 78 элементов
23. [CDotaQuest](#cdotaquest) - 7 элементов
24. [CDotaSubquestBase](#cdotasubquestbase) - 3 элементов
25. [CPhysicsComponent](#cphysicscomponent) - 1 элементов
26. [CPointTemplate](#cpointtemplate) - 4 элементов
27. [CBodyComponent](#cbodycomponent) - 12 элементов
28. [CBaseAnimating](#cbaseanimating) - 10 элементов
29. [CBaseCombatCharacter](#cbasecombatcharacter) - 3 элементов
30. [ProjectileManager](#projectilemanager) - 6 элементов
31. [CBaseTrigger](#cbasetrigger) - 3 элементов
32. [CEnvEntityMaker](#cenventitymaker) - 4 элементов
33. [CDOTAVoteSystem](#cdotavotesystem) - 1 элементов
34. [CMarkupVolumeTagged](#cmarkupvolumetagged) - 1 элементов
35. [CScriptPrecacheContext](#cscriptprecachecontext) - 2 элементов
36. [CScriptKeyValues](#cscriptkeyvalues) - 1 элементов
37. [CScriptParticleManager](#cscriptparticlemanager) - 11 элементов
38. [CScriptHeroList](#cscriptherolist) - 3 элементов
39. [CNativeOutputs](#cnativeoutputs) - 2 элементов
40. [CEnvProjectedTexture](#cenvprojectedtexture) - 5 элементов
41. [CInfoData](#cinfodata) - 6 элементов
42. [CPhysicsProp](#cphysicsprop) - 2 элементов
43. [CDOTAGamerules](#cdotagamerules) - 71 элементов
44. [CToneMapControllerComponent](#ctonemapcontrollercomponent) - 6 элементов
45. [CDebugOverlayScriptHelper](#cdebugoverlayscripthelper) - 34 элементов
46. [CBaseFlex](#cbaseflex) - 2 элементов
47. [CSceneEntity](#csceneentity) - 10 элементов
48. [GridNav](#gridnav) - 12 элементов
49. [Convars](#convars) - 12 элементов
50. [Vector](#vector) - 13 элементов
51. [CDOTA_MapTree](#cdota-maptree) - 4 элементов
52. [CDOTA_SimpleObstruction](#cdota-simpleobstruction) - 2 элементов
53. [CDOTA_Unit_Courier](#cdota-unit-courier) - 1 элементов
54. [CDOTA_Ability_DataDriven](#cdota-ability-datadriven) - 2 элементов
55. [CBaseModelEntity](#cbasemodelentity) - 5 элементов
56. [CCustomGameEventManager](#ccustomgameeventmanager) - 5 элементов
57. [CCustomNetTableManager](#ccustomnettablemanager) - 2 элементов
58. [CDOTATutorial](#cdotatutorial) - 25 элементов
59. [CDOTA_Ability_Lua](#cdota-ability-lua) - 46 элементов
60. [CDOTA_CustomUIManager](#cdota-customuimanager) - 4 элементов
61. [CPropHMDAvatar](#cprophmdavatar) - 1 элементов
62. [CPropVRHand](#cpropvrhand) - 2 элементов
63. [CDOTA_Buff](#cdota-buff) - 19 элементов
64. [CDOTA_Modifier_Lua](#cdota-modifier-lua) - 32 элементов
65. [CDOTA_Modifier_Lua_Horizontal_Motion](#cdota-modifier-lua-horizontal-motion) - 5 элементов
66. [CDOTA_Modifier_Lua_Motion_Both](#cdota-modifier-lua-motion-both) - 8 элементов
67. [CDOTA_Modifier_Lua_Vertical_Motion](#cdota-modifier-lua-vertical-motion) - 5 элементов
68. [CDOTA_Item_Lua](#cdota-item-lua) - 42 элементов
70. [AbilityLearnResult_t](#abilitylearnresult-t) - 5 элементов
71. [Attributes](#attributes) - 5 элементов
72. [DAMAGE_TYPES](#damage-types) - 6 элементов
73. [DOTAAbilitySpeakTrigger_t](#dotaabilityspeaktrigger-t) - 2 элементов
74. [DOTADamageFlag_t](#dotadamageflag-t) - 11 элементов
75. [DOTAHUDVisibility_t](#dotahudvisibility-t) - 14 элементов
76. [DOTAInventoryFlags_t](#dotainventoryflags-t) - 7 элементов
77. [DOTAMinimapEvent_t](#dotaminimapevent-t) - 11 элементов
78. [DOTAModifierAttribute_t](#dotamodifierattribute-t) - 4 элементов
79. [DOTAMusicStatus_t](#dotamusicstatus-t) - 6 элементов
80. [DOTASlotType_t](#dotaslottype-t) - 48 элементов
81. [DOTASpeechType_t](#dotaspeechtype-t) - 10 элементов
82. [DOTATeam_t](#dotateam-t) - 17 элементов
83. [DOTAUnitAttackCapability_t](#dotaunitattackcapability-t) - 3 элементов
84. [DOTAUnitMoveCapability_t](#dotaunitmovecapability-t) - 3 элементов
85. [DOTA_UNIT_ORDERS](#dota-unit-orders) - 27 элементов
86. [DOTA_ABILITY_BEHAVIOR](#dota-ability-behavior) - 32 элементов
87. [DOTA_HeroPickState](#dota-heropickstate) - 56 элементов
88. [DOTA_MOTION_CONTROLLER_PRIORITY](#dota-motion-controller-priority) - 5 элементов
89. [DOTA_RUNES](#dota-runes) - 14 элементов
90. [DOTA_UNIT_TARGET_FLAGS](#dota-unit-target-flags) - 20 элементов
91. [DOTA_UNIT_TARGET_TEAM](#dota-unit-target-team) - 5 элементов
92. [DOTA_UNIT_TARGET_TYPE](#dota-unit-target-type) - 11 элементов
93. [EDOTA_ModifyGold_Reason](#edota-modifygold-reason) - 17 элементов
94. [EDOTA_ModifyXP_Reason](#edota-modifyxp-reason) - 4 элементов
95. [EShareAbility](#eshareability) - 3 элементов
96. [LuaModifierType](#luamodifiertype) - 5 элементов
97. [ModifierPriority](#modifierpriority) - 5 элементов
98. [ParticleAttachment_t](#particleattachment-t) - 15 элементов
99. [UnitFilterResult](#unitfilterresult) - 29 элементов
100. [modifierstate](#modifierstate) - 35 элементов
101. [quest_text_replace_values_t](#quest-text-replace-values-t) - 5 элементов
102. [Find Types](#find-types) - 4 элементов
103. [subquest_text_replace_values_t](#subquest-text-replace-values-t) - 3 элементов
104. [DOTAScriptInventorySlot_t](#dotascriptinventoryslot-t) - 12 элементов
105. [DOTA_GameState](#dota-gamestate) - 10 элементов
106. [DOTALimits_t](#dotalimits-t) - 7 элементов
107. [GameActivity_t](#gameactivity-t) - 209 элементов
108. [modifierfunction](#modifierfunction) - 177 элементов
109. [DOTA_CONNECTION_STATE](#dota-connection-state) - 7 элементов

---

## Глобальные функции

*Элементов в категории: 184*

### AddFOWViewer

```lua
void AddFOWViewer(int int_1, Vector Vector_2, float float_3, float float_4, bool bool_5)
```

Add temporary vision for a given team ( nTeamID, vLocation, flRadius, flDuration, bObstructedVision)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.AddFOWViewer)

---

### AngleDiff

```lua
float AngleDiff(float ang1, float ang2)
```

Returns the number of degrees difference between two yaw angles

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.AngleDiff)

---

### AppendToLogFile

```lua
void AppendToLogFile(string string_1, string string_2)
```

Appends astringto a log file on the server

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.AppendToLogFile)

---

### ApplyDamage

```lua
float ApplyDamage(handle DamageTable)
```

Applies damage to a unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ApplyDamage)

---

### AxisAngleToQuaternion

```lua
Quaternion AxisAngleToQuaternion(Vector Vector_1, float float_2)
```

(vector,float) constructs a quaternion representing a rotation by angle around the specifiedvectoraxis

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.AxisAngleToQuaternion)

---

### CalcClosestPointOnEntityOBB

```lua
Vector CalcClosestPointOnEntityOBB(handle handle_1, Vector Vector_2)
```

Compute the closest point on the OBB of an entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CalcClosestPointOnEntityOBB)

---

### CalcDistanceBetweenEntityOBB

```lua
float CalcDistanceBetweenEntityOBB(handle handle_1, handle handle_2)
```

Compute the distance between two entity OBB. A negative return value indicates an input error. A return value of zero indicates that the OBBs are overlapping.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CalcDistanceBetweenEntityOBB)

---

### CalcDistanceToLineSegment2D

```lua
float CalcDistanceToLineSegment2D(Vector vector_1, Vector vector_2, Vector vector_3)
```

Compute the distance from a point to a line segment.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/Global.CalcDistanceToLineSegment2D&action=edit&redlink=1)

---

### CancelEntityIOEvents

```lua
void CancelEntityIOEvents(ehandle ehandle_1)
```

Create all I/O events for a particular entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CancelEntityIOEvents)

---

### ClearTeamCustomHealthbarColor

```lua
void ClearTeamCustomHealthbarColor(int int_1)
```

( teamNumber )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ClearTeamCustomHealthbarColor)

---

### CreateEffect

```lua
bool CreateEffect(handle handle_1)
```

Passtable- Inputs: entity, effect

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateEffect)

---

### CreateHeroForPlayer

```lua
handle CreateHeroForPlayer(string unitName, handle player)
```

Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given player's controlled hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateHeroForPlayer)

---

### CreateHTTPRequestScriptVM

```lua
handle CreateHTTPRequestScriptVM(string string_1, string string_2)
```

Create an HTTP request. Recently renamed from CreateHTTPRequest.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateHTTPRequest)

---

### CreateItem

```lua
handle CreateItem(string item_name, handle owner, handle owner)
```

Creates an item with classnameitem_namethatownercan use.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateItem)

---

### CreateItemOnPositionForLaunch

```lua
handle CreateItemOnPositionForLaunch(Vector Vector_1, handle handle_2)
```

Create a physical item at a given location, can start in air (but doesn't clear a space)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateItemOnPositionForLaunch)

---

### CreateItemOnPositionSync

```lua
handle CreateItemOnPositionSync(Vector Vector_1, handle handle_2)
```

Create a physical item at a given location

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateItemOnPositionSync)

---

### CreateModifierThinker

```lua
handle CreateModifierThinker(handle handle_1, handle handle_2, string string_3, handle handle_4, Vector Vector_5, int int_6, bool bool_7)
```

Create a modifier not associated with an NPC. ( hCaster, hAbility, modifierName, paramTable, vOrigin, nTeamNumber, bPhantomBlocker )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateModifierThinker)

---

### CreateTempTree

```lua
void CreateTempTree(Vector Vector_1, float float_2)
```

Create a temporary tree. (vLocation, flDuration).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateTempTree)

---

### CreateTrigger

```lua
handle CreateTrigger(Vector Vector_1, Vector Vector_2, Vector Vector_3)
```

CreateTrigger( vecMin, vecMax ) : Creates and returns an AABB trigger

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateTrigger)

---

### CreateTriggerRadiusApproximate

```lua
handle CreateTriggerRadiusApproximate(Vector Vector_1, float float_2)
```

CreateTriggerRadiusApproximate( vecOrigin, flRadius ) : Creates and returns an AABB trigger thats bigger than the radius provided

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateTriggerRadiusApproximate)

---

### CreateUnitByName

```lua
handle CreateUnitByName(string string_1, Vector Vector_2, bool bool_3, handle handle_4, handle handle_5, int int_6)
```

Creates a DOTA unit by its dota_npc_units.txt name ( szUnitName, vLocation, bFindClearSpace, hNPCOwner, hUnitOwner, iTeamNumber )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateUnitByName)

---

### CreateUnitByNameAsync

```lua
int CreateUnitByNameAsync(string string_1, Vector Vector_2, bool bool_3, handle handle_4, handle handle_5, int int_6, handle handle_7)
```

Creates a DOTA unit by its dota_npc_units.txt name ( szUnitName, vLocation, bFindClearSpace, hNPCOwner, hUnitOwner, iTeamNumber, hCallback )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateUnitByNameAsync)

---

### CreateUnitFromTable

```lua
handle CreateUnitFromTable(handle handle_1, Vector Vector_2)
```

Creates a new data-driven entity with the given table

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.CreateUnitFromTable)

---

### cvar_getf

```lua
float cvar_getf(string string_1)
```

Gets the value of the given cvar, as afloat.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.cvar_getf)

---

### cvar_setf

```lua
bool cvar_setf(string string_1, float float_2)
```

Sets the value of the given cvar, as afloat.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.cvar_setf)

---

### DebugBreak

```lua
void DebugBreak()
```

Breaks in the debugger

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugBreak)

---

### DebugDrawBox

```lua
void DebugDrawBox(Vector origin, Vector min, Vector max, int r, int g, int b, int a, float duration)
```

Draw a debug overlay box

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawBox)

---

### DebugDrawBoxDirection

```lua
void DebugDrawBoxDirection(Vector Vector_1, Vector Vector_2, Vector Vector_3, Vector Vector_4, Vector Vector_5, float float_6, float float_7)
```

Draw a debug forward box (cent, min, max, forward, vRgb, a, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawBoxDirection)

---

### DebugDrawCircle

```lua
void DebugDrawCircle(Vector Vector_1, Vector Vector_2, float float_3, float float_4, bool bool_5, float float_6)
```

Draw a debug circle (center, vRgb, a, rad, ztest, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawCircle)

---

### DebugDrawClear

```lua
void DebugDrawClear()
```

Try to clear all the debug overlay info

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawClear)

---

### DebugDrawLine

```lua
void DebugDrawLine(Vector Vector_1, Vector Vector_2, int int_3, int int_4, int int_5, bool bool_6, float float_7)
```

Draw a debug overlay line (origin, target, r, g, b, ztest, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawLine)

---

### DebugDrawLine_vCol

```lua
void DebugDrawLine_vCol(Vector Vector_1, Vector Vector_2, Vector Vector_3, bool bool_4, float float_5)
```

Draw a debug line using color vec (start, end, vRgb, a, ztest, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawLine_vCol)

---

### DebugDrawScreenTextLine

```lua
void DebugDrawScreenTextLine(float float_1, float float_2, int int_3, string string_4, int int_5, int int_6, int int_7, int int_8, float float_9)
```

Draw text with a line offset (x, y, lineOffset, text, r, g, b, a, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawScreenTextLine)

---

### DebugDrawSphere

```lua
void DebugDrawSphere(Vector Vector_1, Vector Vector_2, float float_3, float float_4, bool bool_5, float float_6)
```

Draw a debug sphere (center, vRgb, a, rad, ztest, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawSphere)

---

### DebugDrawText

```lua
void DebugDrawText(Vector Vector_1, string string_2, bool bool_3, float float_4)
```

Draw text in 3d (origin, text, bViewCheck, duration)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugDrawText)

---

### DebugScreenTextPretty

```lua
void DebugScreenTextPretty(float float_1, float float_2, int int_3, string string_4, int int_5, int int_6, int int_7, int int_8, float float_9, string string_10, int int_11, bool bool_12)
```

Draw pretty debug text (x, y, lineOffset, text, r, g, b, a, duration, font, size, bBold)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DebugScreenTextPretty)

---

### DoCleaveAttack

```lua
int DoCleaveAttack(handle handle_1, handle handle_2, handle handle_3, float float_4, float float_5, string string_6)
```

(hAttacker, hTarget, hAbility, fDamage, fStartRadius, fEndRadius, fDistance, effectName)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoCleaveAttack)

---

### DoEntFire

```lua
void DoEntFire(string string_1, string string_2, string string_3, float float_4, handle handle_5, handle handle_6)
```

EntFire: Generate an entity i/o event ( szTarget, szAction, szValue, flDelay, hActivator, hCaller )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoEntFire)

---

### DoEntFireByInstanceHandle

```lua
void DoEntFireByInstanceHandle(handle handle_1, string string_2, string string_3, float float_4, handle handle_5, handle handle_6)
```

EntFireByHandle:Generate and entity i/o event

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoEntFireByInstanceHandle)

---

### DoIncludeScript

```lua
bool DoIncludeScript(string string_1, handle handle_2)
```

Execute a script (internal)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoIncludeScript)

---

### DoScriptAssert

```lua
void DoScriptAssert(bool bool_1, string string_2)
```

ScriptAssert:Asserts the passed in value. Prints out a message and brings up the assert dialog.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoScriptAssert)

---

### DoUniqueString

```lua
string DoUniqueString(string string_1)
```

UniqueString:Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to table's when not sure what keys are already in use in that table.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.DoUniqueString)

---

### EmitAnnouncerSound

```lua
void EmitAnnouncerSound(string string_1)
```

Emit an announcer sound for all players.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitAnnouncerSound)

---

### EmitAnnouncerSoundForPlayer

```lua
void EmitAnnouncerSoundForPlayer(string string_1, int int_2)
```

Emit an announcer sound for a player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitAnnouncerSoundForPlayer)

---

### EmitAnnouncerSoundForTeam

```lua
void EmitAnnouncerSoundForTeam(string string_1, int int_2)
```

Emit an announcer sound for a team.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitAnnouncerSoundForTeam)

---

### EmitAnnouncerSoundForTeamOnLocation

```lua
void EmitAnnouncerSoundForTeamOnLocation(string string_1, int int_2, Vector Vector_3)
```

Emit an announcer sound for a team at a specific location.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitAnnouncerSoundForTeamOnLocation)

---

### EmitGlobalSound

```lua
void EmitGlobalSound(string string_1)
```

Play named sound for all players

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitGlobalSound)

---

### EmitSoundOn

```lua
void EmitSoundOn(string string_1, handle handle_2)
```

Play named sound on Entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitSoundOn)

---

### EmitSoundOnClient

```lua
void EmitSoundOnClient(string string_1, handle handle_2)
```

Play named sound only on the client for the passed in player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitSoundOnClient)

---

### EmitSoundOnLocationForAllies

```lua
void EmitSoundOnLocationForAllies(Vector Vector_1, string string_2, handle handle_3)
```

Emit a sound on a location from a unit, only for players allied with that unit (vLocation, soundName, hCaster

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitSoundOnLocationForAllies)

---

### EmitSoundOnLocationWithCaster

```lua
void EmitSoundOnLocationWithCaster(Vector Vector_1, string string_2, handle handle_3)
```

Emit a sound on a location from a unit. (vLocation, soundName, hCaster).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EmitSoundOnLocationWithCaster)

---

### EntIndexToHScript

```lua
handle EntIndexToHScript(int int_1)
```

Turn an entity index integer to an HScript representing that entity's script instance.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.EntIndexToHScript)

---

### ExecuteOrderFromTable

```lua
void ExecuteOrderFromTable(handle handle_1)
```

Issue an order from a script table

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ExecuteOrderFromTable)

---

### ExponentialDecay

```lua
float ExponentialDecay(float float_1, float float_2, float float_3)
```

Smooth curve decreasing slower as it approaches zero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ExponentialDecay)

---

### FileToString

```lua
string FileToString(string a)
```

Reads a string from a file to send to script

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FileToString)

---

### FindClearSpaceForUnit

```lua
bool FindClearSpaceForUnit(handle handle_1, Vector Vector_2, bool bool_3)
```

Place a unit somewhere not already occupied.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FindClearSpaceForUnit)

---

### FindUnitsInRadius

```lua
table FindUnitsInRadius(int teamNumber, Vector position, handle cacheUnit, float radius, int teamFilter, int typeFilter, int flagFilter, int order, bool canGrowCache)
```

Finds the units in a given radius with the given flags. ( iTeamNumber, vPosition, hCacheUnit, flRadius, iTeamFilter, iTypeFilter, iFlagFilter, iOrder, bCanGrowCache )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FindUnitsInRadius)

---

### FindUnitsInLine

```lua
table FindUnitsInLine(int teamNumber, Vector vStartPos, Vector vEndPos, handle cacheUnit, float width, int teamFilter, int typeFilter, int flagFilter)
```

Finds the units in a given line with the given flags. ( iTeamNumber, vStartPos, vEndPos, hCacheUnit, flWidth, iTeamFilter, iTypeFilter, iFlagFilter)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FindUnitsInLine)

---

### FireEntityIOInputNameOnly

```lua
void FireEntityIOInputNameOnly(ehandle ehandle_1, string string_2)
```

Fire Entity's Action Input w/no data

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FireEntityIOInputNameOnly)

---

### FireEntityIOInputString

```lua
void FireEntityIOInputString(ehandle ehandle_1, string string_2, string string_3)
```

Fire Entity's Action Input with passed String - you own the memory

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FireEntityIOInputString)

---

### FireEntityIOInputVec

```lua
void FireEntityIOInputVec(ehandle ehandle_1, string string_2, Vector Vector_3)
```

Fire Entity's Action Input with passedVector( hEntity, szActionName, vector )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FireEntityIOInputVec)

---

### FireGameEvent

```lua
void FireGameEvent(string eventName, handle parameterTable)
```

Fire a pre-defined event, which can be found either in custom_events.txt or in dota's resource/*.res

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FireGameEvent)

---

### FireGameEventLocal

```lua
void FireGameEventLocal(string string_1, handle handle_2)
```

Fire a game event without broadcasting to the client.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FireGameEventLocal)

---

### FrameTime

```lua
float FrameTime()
```

Get the time spent on the server in the last frame

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.FrameTime)

---

### GetEntityIndexForTreeId

```lua
<unknown> GetEntityIndexForTreeId(unsigned unsigned_1)
```

Get the enity index for a tree id specified as the entindex_target of a DOTA_UNIT_ORDER_CAST_TARGET_TREE.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetEntityIndexForTreeId)

---

### GetFrameCount

```lua
int GetFrameCount()
```

Returns the engines current frame count

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetFrameCount)

---

### GetFrostyBoostAmount

```lua
float GetFrostyBoostAmount(int int_1, int int_2)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetFrostyBoostAmount)

---

### GetFrostyPointsForRound

```lua
int GetFrostyPointsForRound(int int_1, int int_2, int int_3)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetFrostyPointsForRound)

---

### GetGoldFrostyBoostAmount

```lua
float GetGoldFrostyBoostAmount(int int_1, int int_2)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetGoldFrostyBoostAmount)

---

### GetGoldFrostyPointsForRound

```lua
int GetGoldFrostyPointsForRound(int int_1, int int_2, int int_3)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetGoldFrostyPointsForRound)

---

### GetGroundHeight

```lua
float GetGroundHeight(Vector Vector_1, handle handle_2)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetGroundHeight)

---

### GetGroundPosition

```lua
Vector GetGroundPosition(Vector Vector_1, handle handle_2)
```

Returns the supplied position moved to the ground. Second parameter is an NPC for measuring movement collision hull offset.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetGroundPosition)

---

### GetItemCost

```lua
int GetItemCost(string string_1)
```

Get the cost of an item by name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetItemCost)

---

### GetListenServerHost

```lua
handle GetListenServerHost()
```

Get the local player on a listen server.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetListenServerHost)

---

### GetMapName

```lua
string GetMapName()
```

Get the name of the map.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetMapName)

---

### GetMaxOutputDelay

```lua
float GetMaxOutputDelay(ehandle ehandle_1, string string_2)
```

Get the longest delay for all events attached to an output

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetMaxOutputDelay)

---

### GetPhysAngularVelocity

```lua
Vector GetPhysAngularVelocity(handle handle_1)
```

Get Angular Velocity for VPHYS or normal object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetPhysAngularVelocity)

---

### GetPhysVelocity

```lua
Vector GetPhysVelocity(handle handle_1)
```

Get Velocity for VPHYS or normal object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetPhysVelocity)

---

### GetSystemDate

```lua
string GetSystemDate()
```

Get the current real world date

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetSystemDate)

---

### GetSystemTime

```lua
string GetSystemTime()
```

Get the current real world time

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetSystemTime)

---

### GetTeamHeroKills

```lua
int GetTeamHeroKills(int int_1)
```

( int teamID )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetTeamHeroKills)

---

### GetTeamName

```lua
string GetTeamName(int teamNumber)
```

Returns the team name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetTeamName)

---

### GetTreeIdForEntityIndex

```lua
int GetTreeIdForEntityIndex(int int_1)
```

Given and entity index of a tree, get the tree id for use for use with with unit orders.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetTreeIdForEntityIndex)

---

### GetWorldMaxX

```lua
float GetWorldMaxX()
```

Gets the world's maximum X position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetWorldMaxX)

---

### GetWorldMaxY

```lua
float GetWorldMaxY()
```

Gets the world's maximum Y position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetWorldMaxY)

---

### GetWorldMinX

```lua
float GetWorldMinX()
```

Gets the world's minimum X position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetWorldMinX)

---

### GetWorldMinY

```lua
float GetWorldMinY()
```

Gets the world's minimum Y position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.GetWorldMinY)

---

### InitLogFile

```lua
void InitLogFile(string string_1, string string_2)
```

If the given file doesn't exist, creates it with the given contents; does nothing if it exists

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.InitLogFile)

---

### IsClient

```lua
bool IsClient()
```

Returns true if this is lua running from the client.dll.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsClient)

---

### IsDedicatedServer

```lua
bool IsDedicatedServer()
```

Returns true if this server is a dedicated server.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsDedicatedServer)

---

### IsMarkedForDeletion

```lua
bool IsMarkedForDeletion(handle handle_1)
```

Returns true if the entity is valid and marked for deletion.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsMarkedForDeletion)

---

### IsServer

```lua
bool IsServer()
```

Returns true if this is lua running from the server.dll.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsServer)

---

### IsValidEntity

```lua
bool IsValidEntity(handle handle_1)
```

Checks to see if the given hScript is a valid entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsValidEntity)

---

### IsInToolsMode

```lua
bool IsInToolsMode()
```

Returns true if this is lua running from the dota2 workshop tools.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.IsInToolsMode)

---

### LimitPathingSearchDepth

```lua
void LimitPathingSearchDepth(float float_1)
```

Set the limit on the pathfinding search space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.LimitPathingSearchDepth)

---

### LinkLuaModifier

```lua
void LinkLuaModifier(string modifier_name, string file_path, int motion_controller_type)
```

Link a lua-defined modifier with the associated class. If the modifier is located within the root vscript folder, then the second argument (file_path) may be omitted

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.LinkLuaModifier)

---

### ListenToGameEvent

```lua
int ListenToGameEvent(string EventName, handle functionNameToCall, handle context)
```

Register as a listener for a game event from script.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ListenToGameEvent)

---

### LoadKeyValues

```lua
table LoadKeyValues(string string_1)
```

Creates atablefrom the specified keyvalues text file

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.LoadKeyValues)

---

### LoadKeyValuesFromString

```lua
table LoadKeyValuesFromString(string string_1)
```

Creates atablefrom the specified keyvaluesstring

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.LoadKeyValuesFromString)

---

### MakeStringToken

```lua
int MakeStringToken(string string_1)
```

Checks to see if the given hScript is a valid entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.MakeStringToken)

---

### MinimapEvent

```lua
void MinimapEvent(int int_1, handle handle_2, int int_3, int int_4, int int_5, int int_6)
```

Start a minimap event. (nTeamID, hEntity, nXCoord, nYCoord, nEventType, nEventDuration).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.MinimapEvent)

---

### Msg

```lua
void Msg(string string_1)
```

Print a message

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.Msg)

---

### PauseGame

```lua
void PauseGame(bool bool_1)
```

Pause or unpause the game.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PauseGame)

---

### PlayerInstanceFromIndex

```lua
handle PlayerInstanceFromIndex(int int_1)
```

Get a script instance of a player by index.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PlayerInstanceFromIndex)

---

### PrecacheEntityFromTable

```lua
void PrecacheEntityFromTable(string string_1, handle handle_2, handle handle_3)
```

Precache an entity from KeyValues intable

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheEntityFromTable)

---

### PrecacheEntityListFromTable

```lua
void PrecacheEntityListFromTable(handle handle_1, handle handle_2)
```

Precache a list of entity KeyValues table's

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheEntityListFromTable)

---

### PrecacheItemByNameAsync

```lua
void PrecacheItemByNameAsync(string string_1, handle handle_2)
```

Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a callback when it's finished.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheItemByNameAsync)

---

### PrecacheItemByNameSync

```lua
void PrecacheItemByNameSync(string string_1, handle handle_2)
```

Precaches a DOTA item by its dota_npc_items.txt name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheItemByNameSync)

---

### PrecacheModel

```lua
void PrecacheModel(string string_1, handle handle_2)
```

( modelName, context ) - Manually precache a single model

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheModel)

---

### PrecacheResource

```lua
void PrecacheResource(string precacheMode, string resource, handle context)
```

Manually precache a single resource

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheResource)

---

### PrecacheUnitByNameAsync

```lua
void PrecacheUnitByNameAsync(string string_1, handle handle_2, int int_3)
```

Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a callback when it's finished.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheUnitByNameAsync)

---

### PrecacheUnitByNameSync

```lua
void PrecacheUnitByNameSync(string string_1, handle handle_2, int int_3)
```

Precaches a DOTA unit by its dota_npc_units.txt name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrecacheUnitByNameSync)

---

### PrintLinkedConsoleMessage

```lua
void PrintLinkedConsoleMessage(string string_1, string string_2)
```

Print a console message with a linked console command

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.PrintLinkedConsoleMessage)

---

### RandomFloat

```lua
float RandomFloat(float float_1, float float_2)
```

Get a randomfloatwithin a range

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RandomFloat)

---

### RandomInt

```lua
int RandomInt(int int_1, int int_2)
```

Get a randomintwithin a range

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RandomInt)

---

### RandomVector

```lua
Vector RandomVector(float maxLength)
```

Get a random 2D vector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RandomVector)

---

### RegisterSpawnGroupFilterProxy

```lua
void RegisterSpawnGroupFilterProxy(string string_1)
```

Create a C proxy for a script-based spawn group filter

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RegisterSpawnGroupFilterProxy)

---

### ReloadMOTD

```lua
void ReloadMOTD()
```

Reloads the MotD file

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ReloadMOTD)

---

### RemoveSpawnGroupFilterProxy

```lua
void RemoveSpawnGroupFilterProxy(string string_1)
```

Remove the C proxy for a script-based spawn group filter

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RemoveSpawnGroupFilterProxy)

---

### ResolveNPCPositions

```lua
void ResolveNPCPositions(Vector Vector_1, float float_2)
```

Check and fix units that have been assigned a position inside collision radius of other NPCs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ResolveNPCPositions)

---

### RollPercentage

```lua
bool RollPercentage(int int_1)
```

Rolls a number from 1 to 100 and returns true if the roll is less than or equal to the number specified

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RollPercentage)

---

### RotateOrientation

```lua
QAngle RotateOrientation(QAngle QAngle_1, QAngle QAngle_2)
```

Rotate aQAngleby anotherQAngle.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RotateOrientation)

---

### RotatePosition

```lua
Vector RotatePosition(Vector Vector_1, QAngle QAngle_2, Vector Vector_3)
```

Rotate aVectoraround a point.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RotatePosition)

---

### RotateQuaternionByAxisAngle

```lua
Quaternion RotateQuaternionByAxisAngle(Quaternion Quaternion_1, Vector Vector_2, float float_3)
```

Rotates a quaternion by the specified angle around the specifiedvectoraxis

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RotateQuaternionByAxisAngle)

---

### RotationDelta

```lua
QAngle RotationDelta(QAngle QAngle_1, QAngle QAngle_2)
```

Find the delta between twoQAngles.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.RotationDelta)

---

### RotationDeltaAsAngularVelocity

```lua
Vector RotationDeltaAsAngularVelocity(QAngle QAngle_1, QAngle QAngle_2)
```

Converts delta QAngle to an angular velocity Vector.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/Global.RotationDeltaAsAngularVelocity&action=edit&redlink=1)

---

### rr_AddDecisionRule

```lua
bool rr_AddDecisionRule(handle handle_1)
```

Add a rule to the decision database.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.rr_AddDecisionRule)

---

### rr_CommitAIResponse

```lua
bool rr_CommitAIResponse(handle handle_1, handle handle_2)
```

Commit the result of QueryBestResponse back to the given entity to play. Call with params (entity, airesponse)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.rr_CommitAIResponse)

---

### rr_GetResponseTargets

```lua
handle rr_GetResponseTargets()
```

Retrieve atableof all available expresser targets, in the form { name :handle, name:handle}.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.rr_GetResponseTargets)

---

### rr_QueryBestResponse

```lua
bool rr_QueryBestResponse(handle handle_1, handle handle_2, handle handle_3)
```

Params: ( hEnt, hQuery, hResult ) // Static : tests 'query' against entity's response system and returns the best response found (ornilif none found).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.rr_QueryBestResponse)

---

### Say

```lua
void Say(handle entity, string message, bool teamOnly)
```

Have Entity saystring, and teamOnly or not

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.Say)

---

### ScreenShake

```lua
void ScreenShake(Vector Vector_1, float float_2, float float_3, float float_4, float float_5, int int_6, bool bool_7)
```

Start a screenshake with the following parameters. vecCenter, flAmplitude, flFrequency, flDuration, flRadius, eCommand( SHAKE_START = 0, SHAKE_STOP = 1 ), bAirShake

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ScreenShake)

---

### SendFrostivusTimeElapsedToGC

```lua
void SendFrostivusTimeElapsedToGC()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SendFrostivusTimeElapsedToGC)

---

### SendFrostyPointsMessageToGC

```lua
void SendFrostyPointsMessageToGC(handle handle_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SendFrostyPointsMessageToGC)

---

### SendOverheadEventMessage

```lua
void SendOverheadEventMessage(handle handle_1, int int_2, handle handle_3, int int_4, handle handle_5)
```

( DOTAPlayer sendToPlayer, int iMessageType, Entity targetEntity, int iValue, DOTAPlayer sourcePlayer ) - sendToPlayer and sourcePlayer can be nil - iMessageType is one of OVERHEAD_ALERT_*

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SendOverheadEventMessage)

---

### SendToConsole

```lua
void SendToConsole(string string_1)
```

Send astringto the console as a client command

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SendToConsole)

---

### SendToServerConsole

```lua
void SendToServerConsole(string string_1)
```

Send astringto the console as a server command

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SendToServerConsole)

---

### SetOpvarFloatAll

```lua
void SetOpvarFloatAll(string string_1, string string_2, string string_3, float float_4)
```

Sets an opvar value for all players

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetOpvarFloatAll)

---

### SetOpvarFloatPlayer

```lua
void SetOpvarFloatPlayer(string string_1, string string_2, string string_3, float float_4, handle handle_5)
```

Sets an opvar value for a single player ( szStackName, szOperatorName, szOpvarName, flOpvarValue, hEnt )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetOpvarFloatPlayer)

---

### SetPhysAngularVelocity

```lua
void SetPhysAngularVelocity(handle handle_1, Vector axis)
```

Set angular velocity for VPHYS or normal object, from a vector of the axis of rotation multiplied by the degrees of rotation per second.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/Global.SetPhysAngularVelocity&action=edit&redlink=1)

---

### SetQuestName

```lua
void SetQuestName(string string_1)
```

Set the current quest name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetQuestName)

---

### SetQuestPhase

```lua
void SetQuestPhase(int int_1)
```

Set the current quest phase.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetQuestPhase)

---

### SetRenderingEnabled

```lua
void SetRenderingEnabled(ehandle ehandle_1, bool bool_2)
```

Set rendering on/off for anehandle

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetRenderingEnabled)

---

### SetTeamCustomHealthbarColor

```lua
void SetTeamCustomHealthbarColor(int int_1, int int_2, int int_3, int int_4)
```

( teamNumber, r, g, b )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SetTeamCustomHealthbarColor)

---

### ShowCustomHeaderMessage

```lua
void ShowCustomHeaderMessage(string message, int player, int value, float time)
```

Displays a header message from player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ShowCustomHeaderMessage)

---

### ShowGenericPopup

```lua
void ShowGenericPopup(string title, string content, string unknown, string unknown, int containerType)
```

Shows a generic popup to all users

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ShowGenericPopup)

---

### ShowGenericPopupToPlayer

```lua
void ShowGenericPopupToPlayer(handle handle_1, string string_2, string string_3, string string_4, string string_5, int int_6)
```

Show a generic popup dialog to a specific player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ShowGenericPopupToPlayer)

---

### ShowMessage

```lua
void ShowMessage(string string_1)
```

Print a hud message on all clients

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ShowMessage)

---

### SpawnEntityFromTableSynchronous

```lua
handle SpawnEntityFromTableSynchronous(string string_1, handle handle_2)
```

Synchronously spawns a single entity from atable

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SpawnEntityFromTableSynchronous)

---

### SpawnEntityGroupFromTable

```lua
bool SpawnEntityGroupFromTable(handle groupSpawnTables, bool bAsync, handle hCallback)
```

Hierarchically spawn an entity group from a set of spawn tables.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SpawnEntityGroupFromTable)

---

### SpawnEntityListFromTableAsynchronous

```lua
int SpawnEntityListFromTableAsynchronous(handle handle_1, handle handle_2)
```

Asynchronously spawn an entity group from a list of spawn table's. A callback will be triggered when the spawning is complete

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SpawnEntityListFromTableAsynchronous)

---

### SpawnEntityListFromTableSynchronous

```lua
handle SpawnEntityListFromTableSynchronous(handle handle_1)
```

Synchronously spawn an entity group from a list of spawn table's.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SpawnEntityListFromTableSynchronous)

---

### SplineQuaternions

```lua
Quaternion SplineQuaternions(Quaternion Quaternion_1, Quaternion Quaternion_2, float float_3)
```

(quaternion,quaternion,float) very basic interpolation of v0 to v1 over t on [0,1]

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SplineQuaternions)

---

### SplineVectors

```lua
Vector SplineVectors(Vector Vector_1, Vector Vector_2, float float_3)
```

(vector,vector,float) very basic interpolation of v0 to v1 over t on [0,1]

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.SplineVectors)

---

### StartSoundEvent

```lua
void StartSoundEvent(string string_1, handle handle_2)
```

Start a sound event

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEvent)

---

### StartSoundEventFromPosition

```lua
void StartSoundEventFromPosition(string string_1, Vector Vector_2)
```

Start a sound event from position

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEventFromPosition)

---

### StartSoundEventFromPositionReliable

```lua
void StartSoundEventFromPositionReliable(string string_1, Vector Vector_2)
```

Start a sound event from position with reliable delivery

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEventFromPositionReliable)

---

### StartSoundEventFromPositionUnreliable

```lua
void StartSoundEventFromPositionUnreliable(string string_1, Vector Vector_2)
```

Start a sound event from position with optional delivery

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEventFromPositionUnreliable)

---

### StartSoundEventReliable

```lua
void StartSoundEventReliable(string string_1, handle handle_2)
```

Start a sound event with reliable delivery

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEventReliable)

---

### StartSoundEventUnreliable

```lua
void StartSoundEventUnreliable(string string_1, handle handle_2)
```

Start a sound event with optional delivery

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StartSoundEventUnreliable)

---

### StopEffect

```lua
void StopEffect(handle handle_1, string string_2)
```

(hEntity, szEffectName)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StopEffect)

---

### StopListeningToAllGameEvents

```lua
void StopListeningToAllGameEvents(handle handle_1)
```

Stop listening to all game events within a specific context.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StopListeningToAllGameEvents)

---

### StopListeningToGameEvent

```lua
bool StopListeningToGameEvent(int int_1)
```

Stop listening to a particular game event.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StopListeningToGameEvent)

---

### StopSoundEvent

```lua
void StopSoundEvent(string string_1, handle handle_2)
```

Stops a sound event

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StopSoundEvent)

---

### StopSoundOn

```lua
void StopSoundOn(string soundName, handle playingEntity)
```

Stop named sound on Entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StopSoundOn)

---

### StringToFile

```lua
bool StringToFile(string a, string b)
```

* Directory traversal doesn't seem to work. The characters '.', '/' and '\\' are ignored.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.StringToFile)

---

### Time

```lua
float Time()
```

Get the current server time

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.Time)

---

### TraceCollideable

```lua
bool TraceCollideable(table parameters)
```

Does a raytrace against a single entity. Input and output parameters are stored in the specified table.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.TraceCollideable)

---

### TraceHull

```lua
bool TraceHull(table parameters)
```

Traces a bounding box along a line. Input and output parameters are stored in the specified table.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.TraceHull)

---

### TraceLine

```lua
bool TraceLine(table parameters)
```

Does a raytrace along a line. Input and output parameters are stored in the specified table.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.TraceLine)

---

### UnitFilter

```lua
int UnitFilter(handle handle_1, int int_2, int int_3, int int_4, int int_5)
```

Check if a unit passes a set of filters. (hNPC, nTargetTeam, nTargetType, nTargetFlags, nTeam

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UnitFilter)

---

### UnloadSpawnGroup

```lua
void UnloadSpawnGroup(string string_1)
```

Unload a spawn group by name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UnloadSpawnGroup)

---

### UnloadSpawnGroupByHandle

```lua
void UnloadSpawnGroupByHandle(int int_1)
```

Unload a spawn group byhandle

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UnloadSpawnGroupByHandle)

---

### UpdateEventPoints

```lua
void UpdateEventPoints(handle handle_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UpdateEventPoints)

---

### UTIL_MessageText

```lua
void UTIL_MessageText(int playerId, string message, int r, int g, int b, int a)
```

Displays a message for a specific player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_MessageText)

---

### UTIL_MessageText_WithContext

```lua
void UTIL_MessageText_WithContext(int playerId, string message, int r, int g, int b, int a, table context)
```

Sends a message to a specific player in the message box with a context table

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_MessageText_WithContext)

---

### UTIL_MessageTextAll

```lua
void UTIL_MessageTextAll(string message, int r, int g, int b, int a)
```

Sends a message to everyone in the message box

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_MessageTextAll)

---

### UTIL_MessageTextAll_WithContext

```lua
void UTIL_MessageTextAll_WithContext(string message, int r, int g, int b, int a, table context)
```

Sends a message to everyone in the message box with a context table

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_MessageTextAll_WithContext)

---

### UTIL_Remove

```lua
void UTIL_Remove(handle handle_1)
```

Removes the specified entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_Remove)

---

### UTIL_RemoveImmediate

```lua
void UTIL_RemoveImmediate(handle handle_1)
```

Do Not use this Функция. Use UTIL_Remove() instead. This will crash your game.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_RemoveImmediate)

---

### UTIL_ResetMessageText

```lua
void UTIL_ResetMessageText(int playerId)
```

Resets the message text for the player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_ResetMessageText)

---

### UTIL_ResetMessageTextAll

```lua
void UTIL_ResetMessageTextAll()
```

Resets the message text for all players

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.UTIL_ResetMessageTextAll)

---

### VectorToAngles

```lua
QAngle VectorToAngles(Vector Vector_1)
```

Get Qangles (with no roll) for aVector.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.VectorToAngles)

---

### Warning

```lua
void Warning(string string_1)
```

Print a warning

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.Warning)

---


## CBaseEntity

*Элементов в категории: 73*

### AddEffects

```lua
void AddEffects(int nFlags)
```

AddEffects( int ): Adds the render effect flag.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.AddEffects)

---

### ApplyAbsVelocityImpulse

```lua
void ApplyAbsVelocityImpulse(Vector vecImpulse)
```

Apply a Velocity Impulse

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.ApplyAbsVelocityImpulse)

---

### ApplyLocalAngularVelocityImpulse

```lua
void ApplyLocalAngularVelocityImpulse(Vector angImpulse)
```

Apply an Ang Velocity Impulse

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.ApplyLocalAngularVelocityImpulse)

---

### Attribute_GetFloatValue

```lua
float Attribute_GetFloatValue(string pName, float flDefault)
```

Get float value for an entity attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Attribute_GetFloatValue)

---

### Attribute_GetIntValue

```lua
float Attribute_GetIntValue(string pName, int nDefault)
```

Get int value for an entity attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Attribute_GetIntValue)

---

### Attribute_SetFloatValue

```lua
void Attribute_SetFloatValue(string pName, float flValue)
```

Set float value for an entity attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Attribute_SetFloatValue)

---

### Attribute_SetIntValue

```lua
void Attribute_SetIntValue(string pName, int nValue)
```

Set int value for an entity attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Attribute_SetIntValue)

---

### DeleteAttribute

```lua
void DeleteAttribute(string pName)
```

Delete an entity attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.DeleteAttribute)

---

### EmitSound

```lua
void EmitSound(string soundName)
```

Plays a sound centered on the passed entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.EmitSound)

---

### EmitSoundParams

```lua
void EmitSoundParams(string soundName, int pitch, float volume, float soundTime)
```

Plays/modifies a sound from this entity. changes sound if Pitch and/or Volume or SoundTime is > 0.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.EmitSoundParams)

---

### EyeAngles

```lua
QAngle EyeAngles()
```

Get the qangles that this entity is looking at.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.EyeAngles)

---

### EyePosition

```lua
Vector EyePosition()
```

Getvectorto eye position - absolute coords

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.EyePosition)

---

### FirstMoveChild

```lua
handle FirstMoveChild()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.FirstMoveChild)

---

### GatherCriteria

```lua
void GatherCriteria(handle hResult)
```

Returns atablecontaining the criteria that would be used for response queries on this entity. This is the same as thetablethat is passed to response rule script Функция callbacks.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GatherCriteria)

---

### GetAbsOrigin

```lua
Vector GetAbsOrigin()
```

Get the current location of the entity as a Vector.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetAbsOrigin)

---

### GetAngles

```lua
QAngle GetAngles()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetAngles)

---

### GetAnglesAsVector

```lua
Vector GetAnglesAsVector()
```

Get entity pitch, yaw, roll as avector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetAnglesAsVector)

---

### GetAngularVelocity

```lua
Vector GetAngularVelocity()
```

Get the local angular velocity - returns avectorof pitch,yaw,roll

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetAngularVelocity)

---

### GetBaseVelocity

```lua
Vector GetBaseVelocity()
```

Get Base velocity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetBaseVelocity)

---

### GetBoundingMaxs

```lua
Vector GetBoundingMaxs()
```

Get avectorcontaining max bounds, centered on object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetBoundingMaxs)

---

### GetBoundingMins

```lua
Vector GetBoundingMins()
```

Get avectorcontaining min bounds, centered on object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetBoundingMins)

---

### GetBounds

```lua
table GetBounds()
```

Get atablecontaining the 'Mins' & 'Maxs'vectorbounds, centered on object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetBounds)

---

### GetCenter

```lua
Vector GetCenter()
```

Getvectorto center of object - absolute coords

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetCenter)

---

### GetChildren

```lua
handle GetChildren()
```

Get the entities parented to this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetChildren)

---

### GetContext

```lua
table GetContext(string name)
```

GetContext( name ): looks up a context and returns it if available. May returnstring,float, ornil(if the context isn't found)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetContext)

---

### GetForwardVector

```lua
Vector GetForwardVector()
```

Get the forwardvectorof the entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetForwardVector)

---

### GetHealth

```lua
int GetHealth()
```

Get the entity's current health.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetHealth)

---

### GetLocalAngularVelocity

```lua
QAngle GetLocalAngularVelocity()
```

Maybe local angvel

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetLocalAngularVelocity)

---

### GetLocalVelocity

```lua
Vector GetLocalVelocity()
```

Get Entity relative velocity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetLocalVelocity)

---

### GetMaxHealth

```lua
int GetMaxHealth()
```

Get the entity's maximum health.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetMaxHealth)

---

### GetModelName

```lua
string GetModelName()
```

Returns the name of the model

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetModelName)

---

### GetMoveParent

```lua
handle GetMoveParent()
```

If in hierarchy, retrieves the entity's parent

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetMoveParent)

---

### GetOrigin

```lua
Vector GetOrigin()
```

Gets the location of the entity (x/y/z).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetOrigin)

---

### GetOwner

```lua
handle GetOwner()
```

Gets this entity's owner

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetOwner)

---

### GetOwnerEntity

```lua
handle GetOwnerEntity()
```

Get the owner entity, if there is one

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetOwnerEntity)

---

### GetRightVector

```lua
Vector GetRightVector()
```

Get the rightvectorof the entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetRightVector)

---

### GetRootMoveParent

```lua
handle GetRootMoveParent()
```

If in hierarchy, walks up the hierarchy to find the root parent

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetRootMoveParent)

---

### GetSoundDuration

```lua
float GetSoundDuration(string soundName, string actormodelname)
```

Returnsfloatduration of the sound. Takes soundname and optional actormodelname.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetSoundDuration)

---

### GetTeam

```lua
int GetTeam()
```

Get the team number of this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetTeam)

---

### GetTeamNumber

```lua
int GetTeamNumber()
```

Get the team number of this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetTeamNumber)

---

### GetUpVector

```lua
Vector GetUpVector()
```

Get the upvectorof the entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetUpVector)

---

### GetVelocity

```lua
Vector GetVelocity()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.GetVelocity)

---

### HasAttribute

```lua
bool HasAttribute(string pName)
```

See if an entity has a particular attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.HasAttribute)

---

### IsAlive

```lua
bool IsAlive()
```

Is the entity alive?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.IsAlive)

---

### IsPlayer

```lua
bool IsPlayer()
```

Is this a player entity?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.IsPlayer)

---

### IsNull

```lua
bool IsNull()
```

Detect if the entity has been deleted from C++.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.IsNull)

---

### Kill

```lua
void Kill()
```

Immediately kills the chosen entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Kill)

---

### NextMovePeer

```lua
handle NextMovePeer()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.NextMovePeer)

---

### OverrideFriction

```lua
void OverrideFriction(float duration, float friction)
```

Takes duration, value for a temporary override

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.OverrideFriction)

---

### PrecacheScriptSound

```lua
void PrecacheScriptSound(string soundname)
```

Precache a sound for later playing.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.PrecacheScriptSound)

---

### RemoveEffects

```lua
void RemoveEffects(int nFlags)
```

RemoveEffects( int ): Removes the render effect flag.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.RemoveEffects)

---

### SetAbsOrigin

```lua
void SetAbsOrigin(Vector origin)
```

Sets the entity's location on the passed vector.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetAbsOrigin)

---

### SetAngles

```lua
void SetAngles(float pitch, float yaw, float roll)
```

Set entity pitch, yaw, roll

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetAngles)

---

### SetAngularVelocity

```lua
void SetAngularVelocity(float pitch, float yaw, float roll)
```

Set the local angular velocity - takesfloatpitch,yaw,roll velocities

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetAngularVelocity)

---

### SetConstraint

```lua
void SetConstraint(Vector vPos)
```

Set the position of the constraint.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetConstraint)

---

### SetContext

```lua
void SetContext(string pName, string pValue, float duration)
```

SetContext( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be astring. Will last for duration (set 0 to mean 'forever').

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetContext)

---

### SetContextNum

```lua
void SetContextNum(string pName, float fValue, float duration)
```

SetContext( name , value, duration ): store any key/value pair in this entity's dialog contexts. Value must be a number (intorfloat). Will last for duration (set 0 to mean 'forever').

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetContextNum)

---

### SetContextThink

```lua
void SetContextThink(string pszContextName, handle hThinkFunc, float flInterval)
```

Set a think Функция on this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetContextThink)

---

### SetForwardVector

```lua
void SetForwardVector(Vector forwardVec)
```

Set the orientation of the entity to have this forwardforwardVec

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetForwardVector)

---

### SetFriction

```lua
void SetFriction(float flFriction)
```

Set PLAYER friction, ignored for objects

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetFriction)

---

### SetGravity

```lua
void SetGravity(float flGravity)
```

Set PLAYER gravity, ignored for objects

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetGravity)

---

### SetHealth

```lua
void SetHealth(int hp)
```

Set the current health of the entity. Setting health above maximum health will set the current HP to the maximum.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetHealth)

---

### SetMaxHealth

```lua
void SetMaxHealth(int maxHP)
```

Set the maximum health of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetMaxHealth)

---

### SetModel

```lua
void SetModel(string modelName)
```

Set the entity's model as the passed model name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetModel)

---

### SetOrigin

```lua
void SetOrigin(Vector origin)
```

Set the location of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetOrigin)

---

### SetOwner

```lua
void SetOwner(handle owningEntity)
```

Sets this entity's owner

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetOwner)

---

### SetParent

```lua
void SetParent(handle hParent, string pAttachmentname)
```

Set the parent for this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetParent)

---

### SetRenderColor

```lua
void SetRenderColor(int a, int b, int c)
```

SetRenderColor( r, g, b ): Sets the render color of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetRenderColor)

---

### SetSize

```lua
void SetSize(Vector a, Vector b)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetSize)

---

### SetTeam

```lua
void SetTeam(int team)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetTeam)

---

### SetVelocity

```lua
void SetVelocity(Vector vecVelocity)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.SetVelocity)

---

### StopSound

```lua
void StopSound(string soundName)
```

Stops a named sound playing from this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.StopSound)

---

### Trigger

```lua
void Trigger()
```

Fires off this entity's OnTrigger responses

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseEntity.Trigger)

---


## CEntities

*Элементов в категории: 20*

### CreateByClassname

```lua
handle CreateByClassname(string className)
```

Creates an entity by classname

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.CreateByClassname)

---

### FindAllByClassname

```lua
table FindAllByClassname(string string_1)
```

Finds all entities by class name. Returns an array containing all the found entities.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByClassname)

---

### FindAllByClassnameWithin

```lua
table FindAllByClassnameWithin(string string_1, Vector Vector_2, float float_3)
```

Find entities by class name within a radius.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByClassnameWithin)

---

### FindAllByModel

```lua
table FindAllByModel(string modelName)
```

Find entities by model name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByModel)

---

### FindAllByName

```lua
table FindAllByName(string name)
```

Find all entities by name. Returns an array containing all the found entities in it.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByName)

---

### FindAllByNameWithin

```lua
table FindAllByNameWithin(string name, Vector origin, float maxRadius)
```

Find entities by name within a radius.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByNameWithin)

---

### FindAllByTarget

```lua
table FindAllByTarget(string targetName)
```

Find entities by targetname.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllByTarget)

---

### FindAllInSphere

```lua
table FindAllInSphere(Vector origin, float maxRadius)
```

Find entities within a radius.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindAllInSphere)

---

### FindByClassname

```lua
handle FindByClassname(handle startFrom, string className)
```

Find entities by class name. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByClassname)

---

### FindByClassnameNearest

```lua
handle FindByClassnameNearest(string className, Vector origin, float maxRadius)
```

Find entities by class name nearest to a point.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByClassnameNearest)

---

### FindByClassnameWithin

```lua
handle FindByClassnameWithin(handle startFrom, string className, Vector origin, float maxRadius)
```

Find entities by class name within a radius. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByClassnameWithin)

---

### FindByModel

```lua
handle FindByModel(handle startFrom, string modelName)
```

Find entities by model name. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByModel)

---

### FindByModelWithin

```lua
handle FindByModelWithin(handle startFrom, string modelName, Vector origin, float maxRadius)
```

Find entities by model name within a radius. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByModelWithin)

---

### FindByName

```lua
handle FindByName(handle lastEnt, string searchString)
```

Find entities by name. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByName)

---

### FindByNameNearest

```lua
handle FindByNameNearest(string name, Vector origin, float maxRadius)
```

Find entities by name nearest to a point.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByNameNearest)

---

### FindByNameWithin

```lua
handle FindByNameWithin(handle startFrom, string name, Vector origin, float maxRadius)
```

Find entities by name within a radius. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByNameWithin)

---

### FindByTarget

```lua
handle FindByTarget(handle startFrom, string targetName)
```

Find entities by targetname. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindByTarget)

---

### FindInSphere

```lua
handle FindInSphere(handle startFrom, Vector origin, float maxRadius)
```

Find entities within a radius. Passnilto start an iteration, or reference to a previously found entity to continue a search

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.FindInSphere)

---

### First

```lua
handle First()
```

Begin an iteration over the list of entities

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.First)

---

### Next

```lua
handle Next(handle startFrom)
```

Continue an iteration over the list of entities, providing reference to a previously found entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntities.Next)

---


## CEntityInstance

*Элементов в категории: 19*

### ConnectOutput

```lua
void ConnectOutput(string string_1, string string_2)
```

Adds an I/O connection that will call the named Функция on this entity when the specified output fires.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.ConnectOutput)

---

### Destroy

```lua
void Destroy()
```

Delete entity from C++.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.Destroy)

---

### DisconnectOutput

```lua
void DisconnectOutput(string string_1, string string_2)
```

Removes a connected script Функция from an I/O event on this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.DisconnectOutput)

---

### DisconnectRedirectedOutput

```lua
void DisconnectRedirectedOutput(string string_1, string string_2, handle handle_3)
```

Removes a connected script Функция from an I/O event on the passed entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.DisconnectRedirectedOutput)

---

### entindex

```lua
int entindex()
```

Get the entindex of this entity instance.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.entindex)

---

### FireOutput

```lua
void FireOutput(string outputName, handle activator, handle caller, table args, float delay)
```

Fire an entity output

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.FireOutput)

---

### GetClassname

```lua
string GetClassname()
```

Get the class name of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetClassname)

---

### GetDebugName

```lua
string GetDebugName()
```

Get the entity name w/help if not defined (i.e. classname/etc)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetDebugName)

---

### GetEntityHandle

```lua
ehandle GetEntityHandle()
```

Get the entity as an EHANDLE

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetEntityHandle)

---

### GetEntityIndex

```lua
int GetEntityIndex()
```

Get the index of this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetEntityIndex)

---

### GetIntAttr

```lua
int GetIntAttr(string string_1)
```

Get Integer Attribute

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetIntAttr)

---

### GetName

```lua
string GetName()
```

Get the name of this entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetName)

---

### GetOrCreatePrivateScriptScope

```lua
handle GetOrCreatePrivateScriptScope()
```

Retrieve, creating if necessary, the private per-instance script-side data associated with an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetOrCreatePrivateScriptScope)

---

### GetOrCreatePublicScriptScope

```lua
handle GetOrCreatePublicScriptScope()
```

Retrieve, creating if necessary, the public script-side data associated with an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetOrCreatePublicScriptScope)

---

### GetPrivateScriptScope

```lua
handle GetPrivateScriptScope()
```

Retrieve the private per-instance script-side data associated with an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetPrivateScriptScope)

---

### GetPublicScriptScope

```lua
handle GetPublicScriptScope()
```

Retrieve the public script-side data associated with an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.GetPublicScriptScope)

---

### RedirectOutput

```lua
void RedirectOutput(string string_1, string string_2, handle handle_3)
```

Adds an I/O connection that will call the named Функция on the passed entity when the specified output fires.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.RedirectOutput)

---

### RemoveSelf

```lua
void RemoveSelf()
```

Delete this entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.RemoveSelf)

---

### SetIntAttr

```lua
void SetIntAttr(string string_1, int int_2)
```

Set Integer Attribute

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEntityInstance.SetIntAttr)

---


## CDOTABaseAbility

*Элементов в категории: 113*

### CanAbilityBeUpgraded

```lua
<unknown> CanAbilityBeUpgraded()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.CanAbilityBeUpgraded)

---

### CastAbility

```lua
void CastAbility()
```

Casts the ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.CastAbility)

---

### ContinueCasting

```lua
bool ContinueCasting()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ContinueCasting)

---

### CreateVisibilityNode

```lua
void CreateVisibilityNode(Vector vLocation, float fRadius, float fDuration)
```

Applies vision on a specific location that reveals a certain radius for a duration.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.CreateVisibilityNode)

---

### DecrementModifierRefCount

```lua
void DecrementModifierRefCount()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.DecrementModifierRefCount)

---

### EndChannel

```lua
void EndChannel(bool bInterrupted)
```

Param:boolbInterrupted

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.EndChannel)

---

### EndCooldown

```lua
void EndCooldown()
```

Clear the cooldown remaining on this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.EndCooldown)

---

### GetAbilityDamage

```lua
int GetAbilityDamage()
```

Get the damage defined in the "AbilityDamage" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityDamage)

---

### GetAbilityDamageType

```lua
int GetAbilityDamageType()
```

Get the damage type defined in the "AbilityUnitDamageType" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityDamageType)

---

### GetAbilityIndex

```lua
int GetAbilityIndex()
```

Get the index of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityIndex)

---

### GetAbilityName

```lua
string GetAbilityName()
```

Get the name of the ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityName)

---

### GetAbilityKeyValues

```lua
table GetAbilityKeyValues()
```

Returns a table of this ability KVs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityKeyValues)

---

### GetAbilityTargetFlags

```lua
int GetAbilityTargetFlags()
```

Get the ability's target flag(s) defined in the "AbilityUnitTargetFlags" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityTargetFlags)

---

### GetAbilityTargetTeam

```lua
int GetAbilityTargetTeam()
```

Get the ability's target team(s) defined in the "AbilityUnitTargetTeam" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityTargetTeam)

---

### GetAbilityTargetType

```lua
int GetAbilityTargetType()
```

Get the ability's target type(s) defined in the "AbilityUnitTargetType" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityTargetType)

---

### GetAbilityType

```lua
int GetAbilityType()
```

Get the ability type of this ability, set through "AbilityType" in KV at the npc_ability_custom.txt file.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAbilityType)

---

### GetAnimationIgnoresModelScale

```lua
bool GetAnimationIgnoresModelScale()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAnimationIgnoresModelScale)

---

### GetAssociatedPrimaryAbilities

```lua
string GetAssociatedPrimaryAbilities()
```

Set which ability should be stolen with this ability, and set as the first ability in the order of the stolen abilities (Rubick).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAssociatedPrimaryAbilities)

---

### GetAssociatedSecondaryAbilities

```lua
string GetAssociatedSecondaryAbilities()
```

Set which ability should be stolen with this ability, and set as the second in the order of the stolen abilities (Rubick).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAssociatedSecondaryAbilities)

---

### GetAutoCastState

```lua
bool GetAutoCastState()
```

Returns true if the ability is set to auto cast, returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetAutoCastState)

---

### GetBackswingTime

```lua
float GetBackswingTime()
```

Returns the backswing time of the ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetBackswingTime)

---

### GetBehavior

```lua
int GetBehavior()
```

Get the ability behavior(s) defined in the "AbilityBehavior" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetBehavior)

---

### GetCaster

```lua
handle GetCaster()
```

Get the ability's caster.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCaster)

---

### GetCastPoint

```lua
float GetCastPoint()
```

Get the ability's cast point.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCastPoint)

---

### GetCastRange

```lua
int GetCastRange()
```

Get the ability's cast range.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCastRange)

---

### GetChannelledManaCostPerSecond

```lua
int GetChannelledManaCostPerSecond(int iLevel)
```

Get the ability's channeled mana cost per second, defined in the "AbilityChannelledManaCostPerSecond" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetChannelledManaCostPerSecond)

---

### GetChannelStartTime

```lua
float GetChannelStartTime()
```

Get the game time where the channeling of this ability started.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetChannelStartTime)

---

### GetChannelTime

```lua
float GetChannelTime()
```

Get how long (in seconds) this ability can be channeled.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetChannelTime)

---

### GetCloneSource

```lua
handle GetCloneSource()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCloneSource)

---

### GetConceptRecipientType

```lua
int GetConceptRecipientType()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetConceptRecipientType)

---

### GetCooldown

```lua
float GetCooldown(int iLevel)
```

Get the cooldown duration for this ability at a given level, not the amount of cooldown actually left.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCooldown)

---

### GetCooldownTime

```lua
float GetCooldownTime()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCooldownTime)

---

### GetCooldownTimeRemaining

```lua
float GetCooldownTimeRemaining()
```

Get the remaining time until this ability is ready to be cast again.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCooldownTimeRemaining)

---

### GetCursorPosition

```lua
Vector GetCursorPosition()
```

Get the vector of the current position of the mouse cursor.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCursorPosition)

---

### GetCursorTarget

```lua
handle GetCursorTarget()
```

Get the target that the cursor is currently pointing on.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCursorTarget)

---

### GetCursorTargetingNothing

```lua
bool GetCursorTargetingNothing()
```

Is the cursor currently targeting anything?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetCursorTargetingNothing)

---

### GetDuration

```lua
float GetDuration()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetDuration)

---

### GetGoldCost

```lua
int GetGoldCost(int iLevel)
```

Get the cost in gold for abilities defined to cost gold, defined through "AbilityGoldCost" at the ability's KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetGoldCost)

---

### GetGoldCostForUpgrade

```lua
int GetGoldCostForUpgrade(int iLevel)
```

Get the cost in gold for upgrading this ability, defined through "AbilityUpgradeGoldCost" at the ability's KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetGoldCostForUpgrade)

---

### GetHeroLevelRequiredToUpgrade

```lua
int GetHeroLevelRequiredToUpgrade()
```

Get the level the hero needs to be in order to upgrade this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetHeroLevelRequiredToUpgrade)

---

### GetIntrinsicModifierName

```lua
string GetIntrinsicModifierName()
```

Get the name of the modifier attached to this ability, which passively attached to its caster when the ability is first leveled.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetIntrinsicModifierName)

---

### GetLevel

```lua
int GetLevel()
```

Get the current level of the ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetLevel)

---

### GetLevelSpecialValueFor

```lua
table GetLevelSpecialValueFor(string szName, int nLevel)
```

Get the value of an "AbilitySpecial" block for a certain level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetLevelSpecialValueFor)

---

### GetManaCost

```lua
int GetManaCost(int iLevel)
```

Get the ability mana cost defined in the "AbilityManaCost" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetManaCost)

---

### GetMaxLevel

```lua
int GetMaxLevel()
```

Get the maximum level of the ability defined in the "MaxLevel" KV.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetMaxLevel)

---

### GetModifierValue

```lua
float GetModifierValue()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetModifierValue)

---

### GetModifierValueBonus

```lua
float GetModifierValueBonus()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetModifierValueBonus)

---

### GetPlaybackRateOverride

```lua
float GetPlaybackRateOverride()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetPlaybackRateOverride)

---

### GetSharedCooldownName

```lua
string GetSharedCooldownName()
```

Get the name of the shared cooldown group defined in the ability's "AbilitySharedCooldown" KV. This causes all abilities in the same cooldown name to go into cooldown when one of them is cast.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetSharedCooldownName)

---

### GetSpecialValueFor

```lua
table GetSpecialValueFor(string szName)
```

Get the value of an "AbilitySpecial" block for the current ability level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetSpecialValueFor)

---

### GetStolenActivityModifier

```lua
string GetStolenActivityModifier()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetStolenActivityModifier)

---

### GetToggleState

```lua
bool GetToggleState()
```

Returns true if the ability is currently toggled. Returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.GetToggleState)

---

### HeroXPChange

```lua
bool HeroXPChange(float flXP)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.HeroXPChange)

---

### IncrementModifierRefCount

```lua
void IncrementModifierRefCount()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IncrementModifierRefCount)

---

### IsActivated

```lua
bool IsActivated()
```

Return whether or not this ability is activated, e.g. can be used. Disabled abilities are colored black.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsActivated)

---

### IsAttributeBonus

```lua
bool IsAttributeBonus()
```

Return whether or not the ability is defined as an attribute bonus through "AbilityType" being set to "DOTA_ABILITY_TYPE_ATTRIBUTES".

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsAttributeBonus)

---

### IsChanneling

```lua
bool IsChanneling()
```

Returns whether the ability is currently channeling.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsChanneling)

---

### IsCooldownReady

```lua
bool IsCooldownReady()
```

Returns true if the ability currently has no cooldown and is ready to be used. Returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsCooldownReady)

---

### IsCosmetic

```lua
bool IsCosmetic(handle hEntity)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsCosmetic)

---

### IsFullyCastable

```lua
bool IsFullyCastable()
```

Returns whether the ability can be cast.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsFullyCastable)

---

### IsHidden

```lua
bool IsHidden()
```

Returns true if the ability behavior is set to hidden. Returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsHidden)

---

### IsHiddenWhenStolen

```lua
bool IsHiddenWhenStolen()
```

Returns true if the ability is set to be hidden when stolen (by Rubick). Returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsHiddenWhenStolen)

---

### IsInAbilityPhase

```lua
bool IsInAbilityPhase()
```

Returns whether the ability is currently casting.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsInAbilityPhase)

---

### IsItem

```lua
bool IsItem()
```

Returns whether this ability resides within an item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsItem)

---

### IsOwnersGoldEnough

```lua
bool IsOwnersGoldEnough(int nIssuerPlayerID)
```

Returns whether the owner of the ability has enough gold to cast it (used for abilities that cost gold instead of mana).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsOwnersGoldEnough)

---

### IsOwnersGoldEnoughForUpgrade

```lua
bool IsOwnersGoldEnoughForUpgrade()
```

Returns whether the owner of the ability has enough gold to upgrade it (used for abilities that cost gold instead of ability points).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsOwnersGoldEnoughForUpgrade)

---

### IsOwnersManaEnough

```lua
bool IsOwnersManaEnough()
```

Returns true if the caster has enough mana to cast the ability. Returns false otherwise.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsOwnersManaEnough)

---

### IsPassive

```lua
bool IsPassive()
```

Returns true if the ability is a passive ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsPassive)

---

### IsSharedWithTeammates

```lua
bool IsSharedWithTeammates()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsSharedWithTeammates)

---

### IsStealable

```lua
bool IsStealable()
```

Returns whether this ability can be stolen (by Rubick).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsStealable)

---

### IsStolen

```lua
bool IsStolen()
```

Returns whether the ability is a stolen one.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsStolen)

---

### IsToggle

```lua
bool IsToggle()
```

Returns whether the ability is toggle-able.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsToggle)

---

### IsTrained

```lua
bool IsTrained()
```

Returns whether the ability has at least one level in it.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.IsTrained)

---

### MarkAbilityButtonDirty

```lua
void MarkAbilityButtonDirty()
```

Mark the ability button for this ability as needing a refresh.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.MarkAbilityButtonDirty)

---

### NumModifiersUsingAbility

```lua
int NumModifiersUsingAbility()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.NumModifiersUsingAbility)

---

### OnAbilityPhaseInterrupted

```lua
void OnAbilityPhaseInterrupted()
```

Launches when the caster tried to initiate the ability, but was interrupted/cancelled.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnAbilityPhaseInterrupted)

---

### OnAbilityPhaseStart

```lua
bool OnAbilityPhaseStart()
```

Launches when the ability is being cast (before cast point has been reached, which means it was not yet activated)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnAbilityPhaseStart)

---

### OnAbilityPinged

```lua
void OnAbilityPinged(int nPlayerID)
```

Fires when the ability is being pinged (through alt clicking it).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnAbilityPinged)

---

### OnChannelFinish

```lua
void OnChannelFinish(bool bInterrupted)
```

Launches when the channeled ability finished channeling successfully.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnChannelFinish)

---

### OnChannelThink

```lua
void OnChannelThink(float flInterval)
```

Launches on every interval of this ability's channel.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnChannelThink)

---

### OnHeroCalculateStatBonus

```lua
void OnHeroCalculateStatBonus()
```

Launches when calculating the hero's stats bonuses when leveling up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnHeroCalculateStatBonus)

---

### OnHeroLevelUp

```lua
void OnHeroLevelUp()
```

Launches when the hero levels up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnHeroLevelUp)

---

### OnInventoryContentsChanged

```lua
void OnInventoryContentsChanged()
```

Launches when the inventory of the ability's owner changes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnInventoryContentsChanged)

---

### OnOwnerDied

```lua
void OnOwnerDied()
```

Launches when the owner of this ability dies.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnOwnerDied)

---

### OnOwnerSpawned

```lua
void OnOwnerSpawned()
```

Launches when the owner of this ability spawns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnOwnerSpawned)

---

### OnSpellStart

```lua
void OnSpellStart()
```

Launches when the ability finished casting, mana was spent, and the ability goes on cooldown.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnSpellStart)

---

### OnToggle

```lua
void OnToggle()
```

Launches when toggling the ability on and off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnToggle)

---

### OnUpgrade

```lua
void OnUpgrade()
```

Launches when upgrading the ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.OnUpgrade)

---

### PayGoldCost

```lua
void PayGoldCost()
```

Pay the cost for casting this ability in gold.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.PayGoldCost)

---

### PayGoldCostForUpgrade

```lua
void PayGoldCostForUpgrade()
```

Pay the cost for upgrading this ability in gold.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.PayGoldCostForUpgrade)

---

### PayManaCost

```lua
void PayManaCost()
```

Spends the caster's mana equivalent to the mana cost required to cast this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.PayManaCost)

---

### PlaysDefaultAnimWhenStolen

```lua
bool PlaysDefaultAnimWhenStolen()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.PlaysDefaultAnimWhenStolen)

---

### ProcsMagicStick

```lua
bool ProcsMagicStick()
```

Returns whether this ability grants a charge on Magic Stick/Magic Wand.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ProcsMagicStick)

---

### RefCountsModifiers

```lua
bool RefCountsModifiers()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.RefCountsModifiers)

---

### RefundManaCost

```lua
void RefundManaCost()
```

Return the caster's mana spent for casting this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.RefundManaCost)

---

### ResetToggleOnRespawn

```lua
bool ResetToggleOnRespawn()
```

Reset the toggle to off when respawning.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ResetToggleOnRespawn)

---

### SetAbilityIndex

```lua
void SetAbilityIndex(int iIndex)
```

Set the index of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetAbilityIndex)

---

### SetActivated

```lua
void SetActivated(bool bActivated)
```

Set this ability as activated (true) or disabled (false). Disabled abilities are colored dark and cannot be used.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetActivated)

---

### SetChanneling

```lua
void SetChanneling(bool bChanneling)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetChanneling)

---

### SetHidden

```lua
void SetHidden(bool bHidden)
```

Set this ability as hidden (true) or visible (false).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetHidden)

---

### SetInAbilityPhase

```lua
void SetInAbilityPhase(bool bInAbilityPhase)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetInAbilityPhase)

---

### SetLevel

```lua
void SetLevel(int iLevel)
```

Sets the level of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetLevel)

---

### SetOverrideCastPoint

```lua
void SetOverrideCastPoint(float flCastPoint)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetOverrideCastPoint)

---

### SetRefCountsModifiers

```lua
void SetRefCountsModifiers(bool bRefCounts)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetRefCountsModifiers)

---

### SetStolen

```lua
void SetStolen(bool bStolen)
```

Set whether or not this ability is considered stolen (by Rubick's Spellsteal).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SetStolen)

---

### ShouldUseResources

```lua
bool ShouldUseResources()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ShouldUseResources)

---

### SpeakAbilityConcept

```lua
void SpeakAbilityConcept(int iConcept)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SpeakAbilityConcept)

---

### SpeakTrigger

```lua
<unknown> SpeakTrigger()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.SpeakTrigger)

---

### StartCooldown

```lua
void StartCooldown(float flCooldown)
```

Start a cooldown, starting to count from the passed float parameter.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.StartCooldown)

---

### ToggleAbility

```lua
void ToggleAbility()
```

Toggle this ability on or off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ToggleAbility)

---

### ToggleAutoCast

```lua
void ToggleAutoCast()
```

Toggle this ability's auto cast on or off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.ToggleAutoCast)

---

### UpgradeAbility

```lua
void UpgradeAbility(bool bSupressSpeech)
```

Increase the ability's level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.UpgradeAbility)

---

### UseResources

```lua
void UseResources(bool bMana, bool bGold, bool bCooldown)
```

Use the ability's resources. Return true for each resource to determine which resource should be used - mana, gold, and cooldown.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseAbility.UseResources)

---


## CDOTA_Ability_Animation_Attack

*Элементов в категории: 1*

### SetPlaybackRate

```lua
void SetPlaybackRate(float flRate)
```

Override playbackrate

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Animation_Attack.SetPlaybackRate)

---


## CDOTA_Ability_Animation_TailSpin

*Элементов в категории: 1*

### SetPlaybackRate

```lua
void SetPlaybackRate(float flRate)
```

Override playbackrate

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Animation_TailSpin.SetPlaybackRate)

---


## CDOTA_Ability_Nian_Leap

*Элементов в категории: 1*

### SetPlaybackRate

```lua
void SetPlaybackRate(float flRate)
```

Override playbackrate

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Nian_Leap.SetPlaybackRate)

---


## CDOTA_Ability_Nian_Dive

*Элементов в категории: 1*

### SetPlaybackRate

```lua
void SetPlaybackRate(float flRate)
```

Override playbackrate

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Nian_Dive.SetPlaybackRate)

---


## CDOTA_Ability_Nian_Roar

*Элементов в категории: 1*

### GetCastCount

```lua
int GetCastCount()
```

Number of times Nian has used the roar

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Nian_Roar.GetCastCount)

---


## CDOTA_Item

*Элементов в категории: 30*

### GetContainer

```lua
handle GetContainer()
```

Get the container for this item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetContainer)

---

### GetCost

```lua
int GetCost()
```

Get the item's purchase cost.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetCost)

---

### GetCurrentCharges

```lua
int GetCurrentCharges()
```

Get the number of charges this item currently has.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetCurrentCharges)

---

### GetInitialCharges

```lua
int GetInitialCharges()
```

Get the initial number of charges this item has.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetInitialCharges)

---

### GetPurchaser

```lua
handle GetPurchaser()
```

Get the purchaser for this item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetPurchaser)

---

### GetPurchaseTime

```lua
float GetPurchaseTime()
```

Get the purchase time of this item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetPurchaseTime)

---

### GetShareability

```lua
int GetShareability()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.GetShareability)

---

### IsAlertableItem

```lua
bool IsAlertableItem()
```

Returns whether this item is alert-able (right click to ping "Gather for ``item_name`` here")

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsAlertableItem)

---

### IsCastOnPickup

```lua
bool IsCastOnPickup()
```

Returns whether this item casts its ability when picked up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsCastOnPickup)

---

### IsCombinable

```lua
bool IsCombinable()
```

Returns whether this item can be combined.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsCombinable)

---

### IsDisassemblable

```lua
bool IsDisassemblable()
```

Returns whether this item can be disassembled.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsDisassemblable)

---

### IsDroppable

```lua
bool IsDroppable()
```

Returns whether this item can be dropped.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsDroppable)

---

### IsItem

```lua
bool IsItem()
```

Returns whether the handle is an item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsItem)

---

### IsKillable

```lua
bool IsKillable()
```

Returns whether this item can be destroyed on ground.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsKillable)

---

### IsMuted

```lua
bool IsMuted()
```

Returns whether this item is muted.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsMuted)

---

### IsPermanent

```lua
bool IsPermanent()
```

Is this a permanent item?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsPermanent)

---

### IsPurchasable

```lua
bool IsPurchasable()
```

Returns whether this item can be purchased.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsPurchasable)

---

### IsRecipe

```lua
bool IsRecipe()
```

Returns whether this item is a recipe.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsRecipe)

---

### IsRecipeGenerated

```lua
bool IsRecipeGenerated()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsRecipeGenerated)

---

### IsSellable

```lua
bool IsSellable()
```

Returns whether this item can be sold.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsSellable)

---

### IsStackable

```lua
bool IsStackable()
```

Returns whether this item can be stacked.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.IsStackable)

---

### LaunchLoot

```lua
void LaunchLoot(bool useOnContact, float height, float flDuration, Vector destination)
```

For items lying on the ground. Fires the item up into the air so that it lands at the specified position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.LaunchLoot)

---

### LaunchLootInitialHeight

```lua
void LaunchLootInitialHeight(bool bAutoUse, float flInitialHeight, float flLaunchHeight, float flDuration, Vector vEndPoint)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.LaunchLootInitialHeight)

---

### RequiresCharges

```lua
bool RequiresCharges()
```

Returns whether this item requires charges to be cast.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.RequiresCharges)

---

### SetCurrentCharges

```lua
void SetCurrentCharges(int iCharges)
```

Set the number of charges on this item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.SetCurrentCharges)

---

### SetPurchaser

```lua
void SetPurchaser(handle hPurchaser)
```

Set the purchaser of record for this item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.SetPurchaser)

---

### SetPurchaseTime

```lua
void SetPurchaseTime(float flTime)
```

Set the purchase time of this item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.SetPurchaseTime)

---

### SetStacksWithOtherOwners

```lua
void SetStacksWithOtherOwners(bool bStacksWithOtherOwners)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.SetStacksWithOtherOwners)

---

### StacksWithOtherOwners

```lua
bool StacksWithOtherOwners()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.StacksWithOtherOwners)

---

### Think

```lua
void Think()
```

Think this item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item.Think)

---


## CDOTA_Item_Physical

*Элементов в категории: 3*

### GetContainedItem

```lua
handle GetContainedItem()
```

Returned the contained item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Physical.GetContainedItem)

---

### GetCreationTime

```lua
float GetCreationTime()
```

Returns the game time when this item was created in the world

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Physical.GetCreationTime)

---

### SetContainedItem

```lua
void SetContainedItem(handle hItem)
```

Set the contained item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Physical.SetContainedItem)

---


## CDOTA_Item_DataDriven

*Элементов в категории: 2*

### ApplyDataDrivenModifier

```lua
void ApplyDataDrivenModifier(handle source, handle target, string modifier_name, handle modifierArgs)
```

Applies a data driven modifier to the target

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_DataDriven.ApplyDataDrivenModifier)

---

### ApplyDataDrivenThinker

```lua
handle ApplyDataDrivenThinker(handle hCaster, Vector vLocation, string pszModifierName, handle hModifierTable)
```

Applies a data driven thinker at the location

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_DataDriven.ApplyDataDrivenThinker)

---


## CDOTA_Unit_Nian

*Элементов в категории: 4*

### GetHorn

```lua
handle GetHorn()
```

Is the Nian horn?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Unit_Nian.GetHorn)

---

### GetTail

```lua
handle GetTail()
```

Is the Nian's tail broken?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Unit_Nian.GetTail)

---

### IsHornAlive

```lua
bool IsHornAlive()
```

Is the Nian's horn broken?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Unit_Nian.IsHornAlive)

---

### IsTailAlive

```lua
bool IsTailAlive()
```

Is the Nian's tail broken?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Unit_Nian.IsTailAlive)

---


## CBasePlayer

*Элементов в категории: 6*

### GetHMDAvatar

```lua
handle GetHMDAvatar()
```

Returns the HMD Avatar entity for this player if it exists.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.GetHMDAvatar)

---

### IsNoclipping

```lua
bool IsNoclipping()
```

Returns true if the player is in noclip mode.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.IsNoclipping)

---

### IsSteamControllerButtonPressed

```lua
bool IsSteamControllerButtonPressed(int nControllerNumber, int nButton)
```

Returns true if the controller button is pressed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.IsSteamControllerButtonPressed)

---

### IsUsePressed

```lua
bool IsUsePressed()
```

Returns true if the use key is pressed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.IsUsePressed)

---

### IsVRControllerButtonPressed

```lua
bool IsVRControllerButtonPressed(int nButton)
```

Returns true if the controller button is pressed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.IsVRControllerButtonPressed)

---

### Quit

```lua
void Quit()
```

Quit the game from script.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBasePlayer.Quit)

---


## CDOTAPlayer

*Элементов в категории: 6*

### GetAssignedHero

```lua
handle GetAssignedHero()
```

Get the player's hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.GetAssignedHero)

---

### GetControlledRPGUnit

```lua
handle GetControlledRPGUnit()
```

Get the RPG unit this player controls.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.GetControlledRPGUnit)

---

### GetPlayerID

```lua
int GetPlayerID()
```

Get the player's official PlayerID; notably is -1 when the player isn't yet on a team.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.GetPlayerID)

---

### MakeRandomHeroSelection

```lua
void MakeRandomHeroSelection()
```

Randoms this player's hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.MakeRandomHeroSelection)

---

### SetKillCamUnit

```lua
void SetKillCamUnit(handle hEntity)
```

Set the kill cam unit for this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.SetKillCamUnit)

---

### SetMusicStatus

```lua
void SetMusicStatus(int nMusicStatus, float flIntensity)
```

Set the music status for this player, note this will only really apply if dota_music_battle_enable is off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAPlayer.SetMusicStatus)

---


## CDOTA_PlayerResource

*Элементов в категории: 134*

### AddAegisPickup

```lua
void AddAegisPickup(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.AddAegisPickup)

---

### AddClaimedFarm

```lua
void AddClaimedFarm(int iPlayerID, float flFarmValue, bool bEarnedValue)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.AddClaimedFarm)

---

### AddGoldSpentOnSupport

```lua
void AddGoldSpentOnSupport(int iPlayerID, int iCost)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.AddGoldSpentOnSupport)

---

### AddRunePickup

```lua
void AddRunePickup(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.AddRunePickup)

---

### AreUnitsSharedWithPlayerID

```lua
bool AreUnitsSharedWithPlayerID(int nUnitOwnerPlayerID, int nOtherPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.AreUnitsSharedWithPlayerID)

---

### ClearKillsMatrix

```lua
void ClearKillsMatrix(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ClearKillsMatrix)

---

### ClearLastHitMultikill

```lua
void ClearLastHitMultikill(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ClearLastHitMultikill)

---

### ClearLastHitStreak

```lua
void ClearLastHitStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ClearLastHitStreak)

---

### ClearRawPlayerDamageMatrix

```lua
void ClearRawPlayerDamageMatrix(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ClearRawPlayerDamageMatrix)

---

### ClearStreak

```lua
void ClearStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ClearStreak)

---

### GetAegisPickups

```lua
int GetAegisPickups(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetAegisPickups)

---

### GetAssists

```lua
int GetAssists(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetAssists)

---

### GetBroadcasterChannel

```lua
unsigned GetBroadcasterChannel(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetBroadcasterChannel)

---

### GetBroadcasterChannelSlot

```lua
unsigned GetBroadcasterChannelSlot(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetBroadcasterChannelSlot)

---

### GetClaimedDenies

```lua
int GetClaimedDenies(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetClaimedDenies)

---

### GetClaimedFarm

```lua
float GetClaimedFarm(int iPlayerID, bool bOnlyEarned)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetClaimedFarm)

---

### GetClaimedMisses

```lua
int GetClaimedMisses(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetClaimedMisses)

---

### GetConnectionState

```lua
int GetConnectionState(int iPlayerID)
```

Returns a status code indication the connection state of the player. 0 - no connection. 1 - bot connected. 2 - player connected. 3 bot/player disconnected.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetConnectionState)

---

### GetCreepDamageTaken

```lua
int GetCreepDamageTaken(int iPlayerID, bool bTotal)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetCreepDamageTaken)

---

### GetCustomBuybackCooldown

```lua
float GetCustomBuybackCooldown(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetCustomBuybackCooldown)

---

### GetCustomBuybackCost

```lua
int GetCustomBuybackCost(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetCustomBuybackCost)

---

### GetCustomTeamAssignment

```lua
int GetCustomTeamAssignment(int playerIndex)
```

Returns the team number that the player should join

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetCustomTeamAssignment)

---

### GetDamageDoneToHero

```lua
int GetDamageDoneToHero(int iPlayerID, int iVictimID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetDamageDoneToHero)

---

### GetDeaths

```lua
int GetDeaths(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetDeaths)

---

### GetDenies

```lua
int GetDenies(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetDenies)

---

### GetEventPointsForPlayerID

```lua
int GetEventPointsForPlayerID(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetEventPointsForPlayerID)

---

### GetEventPremiumPointsGranted

```lua
int GetEventPremiumPointsGranted(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetEventPremiumPointsGranted)

---

### GetEventRankGranted

```lua
int GetEventRankGranted(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetEventRankGranted)

---

### GetGold

```lua
int GetGold(int playerID)
```

Returns how much gold the specified player currently has

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGold)

---

### GetGoldBagsCollected

```lua
int GetGoldBagsCollected(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldBagsCollected)

---

### GetGoldLostToDeath

```lua
int GetGoldLostToDeath(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldLostToDeath)

---

### GetGoldPerMin

```lua
float GetGoldPerMin(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldPerMin)

---

### GetGoldSpentOnBuybacks

```lua
int GetGoldSpentOnBuybacks(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldSpentOnBuybacks)

---

### GetGoldSpentOnConsumables

```lua
int GetGoldSpentOnConsumables(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldSpentOnConsumables)

---

### GetGoldSpentOnItems

```lua
int GetGoldSpentOnItems(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldSpentOnItems)

---

### GetGoldSpentOnSupport

```lua
int GetGoldSpentOnSupport(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetGoldSpentOnSupport)

---

### GetHealing

```lua
float GetHealing(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetHealing)

---

### GetHeroDamageTaken

```lua
int GetHeroDamageTaken(int iPlayerID, bool bTotal)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetHeroDamageTaken)

---

### GetKills

```lua
int GetKills(int playerID)
```

Return how many kills the specified player currently gets

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetKills)

---

### GetKillsDoneToHero

```lua
int GetKillsDoneToHero(int attackerPlayerID, int victimPlayerID)
```

Returns the number of times the attacker (first argument) has killed the victim (second argument)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetKillsDoneToHero)

---

### GetLastHitMultikill

```lua
int GetLastHitMultikill(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetLastHitMultikill)

---

### GetLastHits

```lua
int GetLastHits(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetLastHits)

---

### GetLastHitStreak

```lua
int GetLastHitStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetLastHitStreak)

---

### GetLevel

```lua
int GetLevel(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetLevel)

---

### GetMisses

```lua
int GetMisses(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetMisses)

---

### GetNearbyCreepDeaths

```lua
int GetNearbyCreepDeaths(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNearbyCreepDeaths)

---

### GetNthCourierForTeam

```lua
handle GetNthCourierForTeam(int nCourierIndex, int nTeamNumber)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNthCourierForTeam)

---

### GetNthPlayerIDOnTeam

```lua
int GetNthPlayerIDOnTeam(int iTeamNumber, int iNthPlayer)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNthPlayerIDOnTeam)

---

### GetNumConsumablesPurchased

```lua
int GetNumConsumablesPurchased(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNumConsumablesPurchased)

---

### GetNumCouriersForTeam

```lua
int GetNumCouriersForTeam(int nTeamNumber)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNumCouriersForTeam)

---

### GetNumItemsPurchased

```lua
int GetNumItemsPurchased(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetNumItemsPurchased)

---

### GetOriginalLobbyTeam

```lua
int GetOriginalLobbyTeam(int iPlayerID)
```

The team this player was originally assigned in the lobby. DOTA_TEAM_NOTEAM if no lobby info.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetOriginalLobbyTeam)

---

### GetPlayer

```lua
handle GetPlayer(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayer)

---

### GetPlayerCount

```lua
int GetPlayerCount()
```

Includes spectators and players not assigned to a team

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayerCount)

---

### GetPlayerCountForTeam

```lua
int GetPlayerCountForTeam(int iTeam)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayerCountForTeam)

---

### GetPlayerLoadedCompletely

```lua
bool GetPlayerLoadedCompletely(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayerLoadedCompletely)

---

### GetPlayerName

```lua
string GetPlayerName(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayerName)

---

### GetPlayerReservedState

```lua
bool GetPlayerReservedState(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetPlayerReservedState)

---

### GetRawPlayerDamage

```lua
int GetRawPlayerDamage(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetRawPlayerDamage)

---

### GetReliableGold

```lua
int GetReliableGold(int playerID)
```

Returns how much reliable gold the specified player currently has

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetReliableGold)

---

### GetRespawnSeconds

```lua
int GetRespawnSeconds(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetRespawnSeconds)

---

### GetRoshanKills

```lua
int GetRoshanKills(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetRoshanKills)

---

### GetRunePickups

```lua
int GetRunePickups(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetRunePickups)

---

### GetSelectedHeroEntity

```lua
handle GetSelectedHeroEntity(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetSelectedHeroEntity)

---

### GetSelectedHeroID

```lua
int GetSelectedHeroID(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetSelectedHeroID)

---

### GetSelectedHeroName

```lua
string GetSelectedHeroName(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetSelectedHeroName)

---

### GetSteamAccountID

```lua
unsigned GetSteamAccountID(int iPlayerID)
```

Return player steamID32

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetSteamAccountID)

---

### GetSteamID

```lua
unsigned GetSteamID(int iPlayerID)
```

Return player steamID64

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetSteamID)

---

### GetStreak

```lua
int GetStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetStreak)

---

### GetStuns

```lua
float GetStuns(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetStuns)

---

### GetTeam

```lua
int GetTeam(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTeam)

---

### GetTeamKills

```lua
int GetTeamKills(int iTeam)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTeamKills)

---

### GetTeamPlayerCount

```lua
int GetTeamPlayerCount()
```

Players on a valid team (radiant, dire, or custom*) who haven't abandoned the game

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTeamPlayerCount)

---

### GetTimeOfLastConsumablePurchase

```lua
float GetTimeOfLastConsumablePurchase(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTimeOfLastConsumablePurchase)

---

### GetTimeOfLastDeath

```lua
float GetTimeOfLastDeath(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTimeOfLastDeath)

---

### GetTimeOfLastItemPurchase

```lua
float GetTimeOfLastItemPurchase(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTimeOfLastItemPurchase)

---

### GetTotalEarnedGold

```lua
int GetTotalEarnedGold(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTotalEarnedGold)

---

### GetTotalEarnedXP

```lua
int GetTotalEarnedXP(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTotalEarnedXP)

---

### GetTotalGoldSpent

```lua
int GetTotalGoldSpent(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTotalGoldSpent)

---

### GetTowerDamageTaken

```lua
int GetTowerDamageTaken(int iPlayerID, bool bTotal)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTowerDamageTaken)

---

### GetTowerKills

```lua
int GetTowerKills(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetTowerKills)

---

### GetUnitShareMaskForPlayer

```lua
int GetUnitShareMaskForPlayer(int nPlayerID, int nOtherPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetUnitShareMaskForPlayer)

---

### GetUnreliableGold

```lua
int GetUnreliableGold(int playerID)
```

Returns how much unreliable gold the specified player currently has

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetUnreliableGold)

---

### GetXPPerMin

```lua
float GetXPPerMin(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.GetXPPerMin)

---

### HasCustomGameTicketForPlayerID

```lua
bool HasCustomGameTicketForPlayerID(int iPlayerID)
```

Return true if player has pass

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HasCustomGameTicketForPlayerID)

---

### HasRandomed

```lua
bool HasRandomed(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HasRandomed)

---

### HasRepicked

```lua
bool HasRepicked(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HasRepicked)

---

### HasSelectedHero

```lua
bool HasSelectedHero(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HasSelectedHero)

---

### HaveAllPlayersJoined

```lua
bool HaveAllPlayersJoined()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HaveAllPlayersJoined)

---

### HeroLevelUp

```lua
void HeroLevelUp(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.HeroLevelUp)

---

### IncrementAssists

```lua
void IncrementAssists(int playerID, int iVictimID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementAssists)

---

### IncrementClaimedDenies

```lua
void IncrementClaimedDenies(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementClaimedDenies)

---

### IncrementClaimedMisses

```lua
void IncrementClaimedMisses(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementClaimedMisses)

---

### IncrementDeaths

```lua
void IncrementDeaths(int playerID, int iKillerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementDeaths)

---

### IncrementDenies

```lua
void IncrementDenies(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementDenies)

---

### IncrementGoldBagsCollected

```lua
void IncrementGoldBagsCollected(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementGoldBagsCollected)

---

### IncrementKills

```lua
void IncrementKills(int playerID, int kills)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementKills)

---

### IncrementLastHitMultikill

```lua
void IncrementLastHitMultikill(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementLastHitMultikill)

---

### IncrementLastHits

```lua
void IncrementLastHits(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementLastHits)

---

### IncrementLastHitStreak

```lua
void IncrementLastHitStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementLastHitStreak)

---

### IncrementMisses

```lua
void IncrementMisses(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementMisses)

---

### IncrementNearbyCreepDeaths

```lua
void IncrementNearbyCreepDeaths(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementNearbyCreepDeaths)

---

### IncrementStreak

```lua
void IncrementStreak(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementStreak)

---

### IncrementTotalEarnedXP

```lua
void IncrementTotalEarnedXP(int iPlayerID, int iXP, int nReason)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IncrementTotalEarnedXP)

---

### IsBroadcaster

```lua
bool IsBroadcaster(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsBroadcaster)

---

### IsDisableHelpSetForPlayerID

```lua
bool IsDisableHelpSetForPlayerID(int nPlayerID, int nOtherPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsDisableHelpSetForPlayerID)

---

### IsFakeClient

```lua
bool IsFakeClient(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsFakeClient)

---

### IsHeroSelected

```lua
bool IsHeroSelected(string pHeroname)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsHeroSelected)

---

### IsHeroSharedWithPlayerID

```lua
bool IsHeroSharedWithPlayerID(int nUnitOwnerPlayerID, int nOtherPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsHeroSharedWithPlayerID)

---

### IsValidPlayer

```lua
bool IsValidPlayer(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsValidPlayer)

---

### IsValidPlayerID

```lua
bool IsValidPlayerID(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsValidPlayerID)

---

### IsValidTeamPlayer

```lua
bool IsValidTeamPlayer(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsValidTeamPlayer)

---

### IsValidTeamPlayerID

```lua
bool IsValidTeamPlayerID(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.IsValidTeamPlayerID)

---

### ModifyGold

```lua
int ModifyGold(int playerID, int goldAmmt, bool reliable, int nReason)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ModifyGold)

---

### ReplaceHeroWith

```lua
handle ReplaceHeroWith(int iPlayerID, string pszHeroClass, int nGold, int nXP)
```

(playerID, heroClassName, gold, XP) - replaces the player's hero with a new one of the specified class, gold and XP

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ReplaceHeroWith)

---

### ResetBuybackCostTime

```lua
void ResetBuybackCostTime(int nPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ResetBuybackCostTime)

---

### ResetTotalEarnedGold

```lua
void ResetTotalEarnedGold(int iPlayerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.ResetTotalEarnedGold)

---

### SetBuybackCooldownTime

```lua
void SetBuybackCooldownTime(int nPlayerID, float flBuybackCooldown)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetBuybackCooldownTime)

---

### SetBuybackGoldLimitTime

```lua
void SetBuybackGoldLimitTime(int nPlayerID, float flBuybackCooldown)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetBuybackGoldLimitTime)

---

### SetCameraTarget

```lua
void SetCameraTarget(int nPlayerID, handle hTarget)
```

(playerID, entity) - force the given player's camera to follow the given entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetCameraTarget)

---

### SetCustomBuybackCooldown

```lua
void SetCustomBuybackCooldown(int iPlayerID, float flCooldownTime)
```

Set the buyback cooldown for this player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetCustomBuybackCooldown)

---

### SetCustomBuybackCost

```lua
void SetCustomBuybackCost(int iPlayerID, int iGoldCost)
```

Set the buyback cost for this player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetCustomBuybackCost)

---

### SetCustomPlayerColor

```lua
void SetCustomPlayerColor(int iPlayerID, int r, int g, int b)
```

Set custom color for player (minimap, scoreboard, etc)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetCustomPlayerColor)

---

### SetCustomTeamAssignment

```lua
void SetCustomTeamAssignment(int playerIndex, int teamToJoin)
```

Sets the team that the player should join

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetCustomTeamAssignment)

---

### SetGold

```lua
void SetGold(int playerID, int amount, bool reliableGold)
```

Sets the reliable/unreliable gold of the specified player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetGold)

---

### SetHasRandomed

```lua
void SetHasRandomed(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetHasRandomed)

---

### SetHasRepicked

```lua
void SetHasRepicked(int playerID)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetHasRepicked)

---

### SetLastBuybackTime

```lua
void SetLastBuybackTime(int iPlayerID, int iLastBuybackTime)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetLastBuybackTime)

---

### SetOverrideSelectionEntity

```lua
void SetOverrideSelectionEntity(int nPlayerID, handle hEntity)
```

Set the forced selection entity for a player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetOverrideSelectionEntity)

---

### SetPlayerReservedState

```lua
void SetPlayerReservedState(int iPlayerID, bool bReserved)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetPlayerReservedState)

---

### SetUnitShareMaskForPlayer

```lua
void SetUnitShareMaskForPlayer(int nPlayerID, int nOtherPlayerID, int nFlag, bool bState)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SetUnitShareMaskForPlayer)

---

### SpendGold

```lua
void SpendGold(int playerID, int amount, int reason)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.SpendGold)

---

### UpdateTeamSlot

```lua
void UpdateTeamSlot(int iPlayerID, int iTeamNumber, bool bFromLobby)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.UpdateTeamSlot)

---

### WhoSelectedHero

```lua
int WhoSelectedHero(string pHeroFilename)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_PlayerResource.WhoSelectedHero)

---


## CDOTA_BaseNPC

*Элементов в категории: 282*

### AddAbility

```lua
handle AddAbility(string pszAbilityName)
```

Add an ability to this unit by name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddAbility)

---

### AddItem

```lua
handle AddItem(handle hItem)
```

Add the passed item handler to this unit's inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddItem)

---

### AddItemByName

```lua
handle AddItemByName(string pszItemName)
```

Add an item with this name to this unit's inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddItemByName)

---

### AddNewModifier

```lua
handle AddNewModifier(handle caster, handle optionalSourceAbility, string modifierName, handle modifierData)
```

Add a new modifier to this unit. If the modifier is non-multiple (MODIFIER_ATTRIBUTE_MULTIPLE) and the target already has it, it refreshes the ability instead.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddNewModifier)

---

### AddNoDraw

```lua
void AddNoDraw()
```

Adds the no draw flag, effectively removing the model of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddNoDraw)

---

### AddSpeechBubble

```lua
void AddSpeechBubble(int iBubble, string pszSpeech, float flDuration, unsigned unOffsetX, unsigned unOffsetY)
```

Add a speech bubble(1-4 live at a time) to this NPC.WARNING: This Функция is deprecated since 7.00 and will NOT work

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AddSpeechBubble)

---

### AlertNearbyUnits

```lua
void AlertNearbyUnits(handle hAttacker, handle hAbility)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AlertNearbyUnits)

---

### AngerNearbyUnits

```lua
void AngerNearbyUnits()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AngerNearbyUnits)

---

### AttackNoEarlierThan

```lua
void AttackNoEarlierThan(float flTime)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AttackNoEarlierThan)

---

### AttackReady

```lua
bool AttackReady()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.AttackReady)

---

### BoundingRadius2D

```lua
float BoundingRadius2D()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.BoundingRadius2D)

---

### CanEntityBeSeenByMyTeam

```lua
bool CanEntityBeSeenByMyTeam(handle hEntity)
```

Check FoW to see if an entity is visible.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CanEntityBeSeenByMyTeam)

---

### CanSellItems

```lua
bool CanSellItems()
```

Query if this unit can sell items.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CanSellItems)

---

### CastAbilityImmediately

```lua
void CastAbilityImmediately(handle ability, int playerIndex)
```

Cast an immediate ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CastAbilityImmediately)

---

### CastAbilityNoTarget

```lua
void CastAbilityNoTarget(handle ability, int playerIndex)
```

Cast a no target ability. ( hAbility, iPlayerIndex )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CastAbilityNoTarget)

---

### CastAbilityOnPosition

```lua
void CastAbilityOnPosition(Vector vPosition, handle hAbility, int iPlayerIndex)
```

Cast a point target ability on the specified position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CastAbilityOnPosition)

---

### CastAbilityOnTarget

```lua
void CastAbilityOnTarget(handle target, handle ability, int playerIndex)
```

Cast a unit target ability at the specified target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CastAbilityOnTarget)

---

### CastAbilityToggle

```lua
void CastAbilityToggle(handle hAbility, int iPlayerIndex)
```

Toggle an ability. ( hAbility, iPlayerIndex )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.CastAbilityToggle)

---

### DestroyAllSpeechBubbles

```lua
void DestroyAllSpeechBubbles()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.DestroyAllSpeechBubbles)

---

### DisassembleItem

```lua
void DisassembleItem(handle hItem)
```

Disassemble the passed item in this unit's inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.DisassembleItem)

---

### DropItemAtPosition

```lua
void DropItemAtPosition(Vector vDest, handle hItem)
```

Drop an item at a given point.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.DropItemAtPosition)

---

### DropItemAtPositionImmediate

```lua
void DropItemAtPositionImmediate(handle hItem, Vector vPosition)
```

Immediately drop a carried item at a given position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.DropItemAtPositionImmediate)

---

### EjectItemFromStash

```lua
void EjectItemFromStash(handle hItem)
```

Drops the selected item out of this unit's stash.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.EjectItemFromStash)

---

### FindAbilityByName

```lua
handle FindAbilityByName(string pAbilityName)
```

Retrieve an ability by name from the unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.FindAbilityByName)

---

### FindAllModifiers

```lua
table FindAllModifiers()
```

Returns a table of all of the modifiers on the NPC.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.FindAllModifiers)

---

### FindAllModifiersByName

```lua
table FindAllModifiersByName(string pszScriptName)
```

Returns a table of all of the modifiers on the NPC with the passed name (modifierName)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.FindAllModifiersByName)

---

### FindModifierByName

```lua
handle FindModifierByName(string pszScriptName)
```

Return a handle to the modifier of the given name if found (string Name). If there are multiple modifiers with the same name, it only returns the first one found.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.FindModifierByName)

---

### FindModifierByNameAndCaster

```lua
handle FindModifierByNameAndCaster(string pszScriptName, handle hCaster)
```

Return a handle to the modifier of the given name from the passed caster if found. (string Name, hCaster). If there are multiple modifier with the same name and caster, it only returns the first one found.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.FindModifierByNameAndCaster)

---

### ForceKill

```lua
void ForceKill(bool bReincarnate)
```

Kill this unit immediately.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ForceKill)

---

### GetAbilityByIndex

```lua
handle GetAbilityByIndex(int iIndex)
```

Retrieve an ability by index from the unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAbilityByIndex)

---

### GetAbilityCount

```lua
int GetAbilityCount()
```

Get how many ability slots this unit has (usually 24). (NOT how much ability slots are occupied!)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAbilityCount)

---

### GetAcquisitionRange

```lua
float GetAcquisitionRange()
```

Gets the range at which this unit will auto-acquire.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAcquisitionRange)

---

### GetAdditionalBattleMusicWeight

```lua
float GetAdditionalBattleMusicWeight()
```

Combat involving this creature will have this weight added to the music calcuations.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAdditionalBattleMusicWeight)

---

### GetAggroTarget

```lua
handle GetAggroTarget()
```

Returns this unit's aggro target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAggroTarget)

---

### GetAttackAnimationPoint

```lua
float GetAttackAnimationPoint()
```

Get the animation point of the NPC's attack animation.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackAnimationPoint)

---

### GetAttackCapability

```lua
int GetAttackCapability()
```

Gets the Attack Capability of the unit. (none = 0, melee = 1, ranged = 2).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackCapability)

---

### GetAttackDamage

```lua
int GetAttackDamage()
```

Returns a random integer between the minimum and maximum base damage of the unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackDamage)

---

### GetAttackRange

```lua
float GetAttackRange()
```

Gets this unit's attack range after all modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackRange)

---

### GetAttackRangeBuffer

```lua
float GetAttackRangeBuffer()
```

Gets the attack range buffer (how far can the target move away from the unit before the attack is cancelled).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackRangeBuffer)

---

### GetAttackSpeed

```lua
float GetAttackSpeed()
```

Get the attack speed of the unit. This returns attack speed in seconds.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackSpeed)

---

### GetAttacksPerSecond

```lua
float GetAttacksPerSecond()
```

Get how many times this unit can attack in a second.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttacksPerSecond)

---

### GetAttackTarget

```lua
handle GetAttackTarget()
```

Get which target this unit is currently attacking.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAttackTarget)

---

### GetAverageTrueAttackDamage

```lua
int GetAverageTrueAttackDamage()
```

Returns the average value of the minimum and maximum damage values.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetAverageTrueAttackDamage)

---

### GetBaseAttackRange

```lua
int GetBaseAttackRange()
```

Gets this unit's attack range before modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseAttackRange)

---

### GetBaseAttackTime

```lua
float GetBaseAttackTime()
```

Get the base attack time (BAT) of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseAttackTime)

---

### GetBaseDamageMax

```lua
int GetBaseDamageMax()
```

Gets the minimum base damage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseDamageMax)

---

### GetBaseDamageMin

```lua
int GetBaseDamageMin()
```

Gets the minimum base damage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseDamageMin)

---

### GetBaseDayTimeVisionRange

```lua
int GetBaseDayTimeVisionRange()
```

Returns the vision range before modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseDayTimeVisionRange)

---

### GetBaseHealthRegen

```lua
float GetBaseHealthRegen()
```

Get the base health regen of this unit (before attribute and modifier bonuses).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseHealthRegen)

---

### GetBaseMagicalResistanceValue

```lua
float GetBaseMagicalResistanceValue()
```

Returns base magical armor value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseMagicalResistanceValue)

---

### GetBaseMaxHealth

```lua
float GetBaseMaxHealth()
```

Gets the base max health value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseMaxHealth)

---

### GetBaseMoveSpeed

```lua
float GetBaseMoveSpeed()
```

Get the base move speed of this unit (before modifier bonuses).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseMoveSpeed)

---

### GetBaseNightTimeVisionRange

```lua
int GetBaseNightTimeVisionRange()
```

Returns the vision range before modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetBaseNightTimeVisionRange)

---

### GetCastPoint

```lua
float GetCastPoint(bool bAttack)
```

Parameter: bAttack

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCastPoint)

---

### GetCloneSource

```lua
handle GetCloneSource()
```

Get clone source (Meepo Prime, if this is a Meepo)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCloneSource)

---

### GetCollisionPadding

```lua
float GetCollisionPadding()
```

Returns the size of the collision padding around the hull.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCollisionPadding)

---

### GetConstantBasedManaRegen

```lua
float GetConstantBasedManaRegen()
```

This Mana regen is derived from constant bonuses like Basilius.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetConstantBasedManaRegen)

---

### GetCreationTime

```lua
float GetCreationTime()
```

Get the game time this NPC was created.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCreationTime)

---

### GetCurrentActiveAbility

```lua
handle GetCurrentActiveAbility()
```

Get the ability this unit is currently casting.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCurrentActiveAbility)

---

### GetCurrentVisionRange

```lua
int GetCurrentVisionRange()
```

Gets the current vision range.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCurrentVisionRange)

---

### GetCursorCastTarget

```lua
handle GetCursorCastTarget()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCursorCastTarget)

---

### GetCursorPosition

```lua
Vector GetCursorPosition()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCursorPosition)

---

### GetCursorTargetingNothing

```lua
bool GetCursorTargetingNothing()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetCursorTargetingNothing)

---

### GetDayTimeVisionRange

```lua
int GetDayTimeVisionRange()
```

Returns the vision range after modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetDayTimeVisionRange)

---

### GetDeathXP

```lua
int GetDeathXP()
```

Get the XP bounty on this unit

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetDeathXP)

---

### GetForceAttackTarget

```lua
handle GetForceAttackTarget()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetForceAttackTarget)

---

### GetGoldBounty

```lua
int GetGoldBounty()
```

Get the gold bounty on this unit

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetGoldBounty)

---

### GetHasteFactor

```lua
float GetHasteFactor()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHasteFactor)

---

### GetHealth

```lua
int GetHealth()
```

Get the health of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHealth)

---

### GetHealthDeficit

```lua
int GetHealthDeficit()
```

Returns integer amount of health missing from max.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHealthDeficit)

---

### GetHealthPercent

```lua
int GetHealthPercent()
```

Get the current health percent of the unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHealthPercent)

---

### GetHealthRegen

```lua
float GetHealthRegen()
```

Get the current total health regeneration of this unit (including base and bonuses).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHealthRegen)

---

### GetHullRadius

```lua
float GetHullRadius()
```

Get the collision hull radius of this NPC

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetHullRadius)

---

### GetIdealSpeed

```lua
float GetIdealSpeed()
```

Returns speed after all modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetIdealSpeed)

---

### GetIncreasedAttackSpeed

```lua
float GetIncreasedAttackSpeed()
```

Get the attack speed above the unit's base (that is gained through modifiers, but not attributes).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetIncreasedAttackSpeed)

---

### GetInitialGoalEntity

```lua
handle GetInitialGoalEntity()
```

Returns the initial waypoint goal for this NPC

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetInitialGoalEntity)

---

### GetItemInSlot

```lua
handle GetItemInSlot(int i)
```

Returns nth item in inventory slot (index is zero based)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetItemInSlot)

---

### GetLastAttackTime

```lua
float GetLastAttackTime()
```

Returns the last Game Time this unit attacked any target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetLastAttackTime)

---

### GetLastIdleChangeTime

```lua
float GetLastIdleChangeTime()
```

Get the last game time that this unit switched to/from idle state.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetLastIdleChangeTime)

---

### GetLevel

```lua
int GetLevel()
```

Returns the level of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetLevel)

---

### GetMagicalArmorValue

```lua
float GetMagicalArmorValue()
```

Returns current magical armor value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMagicalArmorValue)

---

### GetMainControllingPlayer

```lua
int GetMainControllingPlayer()
```

Returns the player ID of the controlling player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMainControllingPlayer)

---

### GetMana

```lua
float GetMana()
```

Get how much mana this unit currently has.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMana)

---

### GetManaPercent

```lua
int GetManaPercent()
```

Get the percent of mana remaining.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetManaPercent)

---

### GetManaRegen

```lua
float GetManaRegen()
```

Get the total current mana regeneration of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetManaRegen)

---

### GetMaxHealth

```lua
int GetMaxHealth()
```

Get the maximum health of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMaxHealth)

---

### GetMaximumGoldBounty

```lua
int GetMaximumGoldBounty()
```

Get the maximum gold bounty for this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMaximumGoldBounty)

---

### GetMaxMana

```lua
float GetMaxMana()
```

Get the maximum mana of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMaxMana)

---

### GetMinimumGoldBounty

```lua
int GetMinimumGoldBounty()
```

Get the minimum gold bounty for this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMinimumGoldBounty)

---

### GetModelRadius

```lua
float GetModelRadius()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetModelRadius)

---

### GetModifierCount

```lua
int GetModifierCount()
```

How many modifiers does this unit have?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetModifierCount)

---

### GetModifierNameByIndex

```lua
string GetModifierNameByIndex(int nIndex)
```

Get a modifier name by index.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetModifierNameByIndex)

---

### GetModifierStackCount

```lua
int GetModifierStackCount(string modifierName, handle hCaster)
```

Gets the stack count of a given modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetModifierStackCount)

---

### GetMoveSpeedModifier

```lua
float GetMoveSpeedModifier(float flBaseSpeed)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMoveSpeedModifier)

---

### GetMustReachEachGoalEntity

```lua
bool GetMustReachEachGoalEntity()
```

Get whether this NPC is required to reach each goal entity, rather than being allowed to 'unkink' their path

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetMustReachEachGoalEntity)

---

### GetNeverMoveToClearSpace

```lua
bool GetNeverMoveToClearSpace()
```

If set to true, we will never attempt to move this unit to clear space, even when it unphases.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetNeverMoveToClearSpace)

---

### GetNightTimeVisionRange

```lua
int GetNightTimeVisionRange()
```

Returns the vision range after modifiers.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetNightTimeVisionRange)

---

### GetOpposingTeamNumber

```lua
int GetOpposingTeamNumber()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetOpposingTeamNumber)

---

### GetPaddedCollisionRadius

```lua
float GetPaddedCollisionRadius()
```

Get the collision hull radius (including padding) of this NPC

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPaddedCollisionRadius)

---

### GetPercentageBasedManaRegen

```lua
float GetPercentageBasedManaRegen()
```

This Mana regen is derived from % bonuses (from items like Void Stone).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPercentageBasedManaRegen)

---

### GetPhysicalArmorBaseValue

```lua
float GetPhysicalArmorBaseValue()
```

Returns base physical armor value from npc_heroes.txt ("ArmorPhysical").

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPhysicalArmorBaseValue)

---

### GetPhysicalArmorValue

```lua
float GetPhysicalArmorValue()
```

Returns current physical armor value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPhysicalArmorValue)

---

### GetPlayerOwner

```lua
handle GetPlayerOwner()
```

Returns the player that owns this unit

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPlayerOwner)

---

### GetPlayerOwnerID

```lua
int GetPlayerOwnerID()
```

Get the owner player ID for this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetPlayerOwnerID)

---

### GetProjectileSpeed

```lua
int GetProjectileSpeed()
```

Get the projectile speed of this unit's attacks.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetProjectileSpeed)

---

### GetRangedProjectileName

```lua
string GetRangedProjectileName()
```

Returns the name of this unit's projectile.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetRangedProjectileName&action=edit&redlink=1)

---

### GetRangeToUnit

```lua
float GetRangeToUnit(handle hNPC)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetRangeToUnit)

---

### GetSecondsPerAttack

```lua
float GetSecondsPerAttack()
```

Get how many seconds each attack take.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetSecondsPerAttack)

---

### GetStatsBasedManaRegen

```lua
float GetStatsBasedManaRegen()
```

Returns mana regen rate per intelligence.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetStatsBasedManaRegen)

---

### GetTeamNumber

```lua
int GetTeamNumber()
```

Get the team number of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetTeamNumber)

---

### GetTotalPurchasedUpgradeGoldCost

```lua
int GetTotalPurchasedUpgradeGoldCost()
```

Get how much gold has been spent on ability upgrades.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetTotalPurchasedUpgradeGoldCost)

---

### GetUnitLabel

```lua
string GetUnitLabel()
```

Get the label of this unit set through "UnitLabel" KV of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetUnitLabel)

---

### GetUnitName

```lua
string GetUnitName()
```

Get the name of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GetUnitName)

---

### GiveMana

```lua
void GiveMana(float flMana)
```

Give mana to this unit, this can be used for mana gained by abilities or item usage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.GiveMana)

---

### HasAbility

```lua
bool HasAbility(string pszAbilityName)
```

See whether this unit has an ability by name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasAbility)

---

### HasAnyActiveAbilities

```lua
bool HasAnyActiveAbilities()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasAnyActiveAbilities)

---

### HasAttackCapability

```lua
bool HasAttackCapability()
```

Returns whether this unit is capable of attacking.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasAttackCapability)

---

### HasFlyingVision

```lua
bool HasFlyingVision()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasFlyingVision)

---

### HasFlyMovementCapability

```lua
bool HasFlyMovementCapability()
```

Returns whether this unit can move through terrain freely.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasFlyMovementCapability)

---

### HasGroundMovementCapability

```lua
bool HasGroundMovementCapability()
```

Returns whether this unit can only move on the ground.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasGroundMovementCapability)

---

### HasInventory

```lua
bool HasInventory()
```

Returns whether this unit has "HasInventory" KV set to "1".

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasInventory)

---

### HasItemInInventory

```lua
bool HasItemInInventory(string pItemName)
```

See whether this unit has an item by name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasItemInInventory)

---

### HasModifier

```lua
bool HasModifier(string pszScriptName)
```

Sees if this unit has a given modifier

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasModifier)

---

### HasMovementCapability

```lua
bool HasMovementCapability()
```

Returns whether this unit is capable of moving.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasMovementCapability)

---

### HasScepter

```lua
bool HasScepter()
```

Returns whether this unit is holding a scepter. (or has a modifier that grants scepter effects).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.HasScepter)

---

### Heal

```lua
void Heal(float amount, handle source)
```

Heal this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Heal)

---

### Hold

```lua
void Hold()
```

Hold position.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Hold)

---

### Interrupt

```lua
void Interrupt()
```

Interrupts any orders this unit is currently executing.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Interrupt)

---

### InterruptChannel

```lua
void InterruptChannel()
```

Interrupt the channel of this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.InterruptChannel)

---

### InterruptMotionControllers

```lua
void InterruptMotionControllers(bool bFindClearSpace)
```

Parameter boolean determines finding clear space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.InterruptMotionControllers)

---

### IsAlive

```lua
bool IsAlive()
```

Is this unit alive?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsAlive)

---

### IsAncient

```lua
bool IsAncient()
```

Is this creature an Ancient?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsAncient)

---

### IsAttackImmune

```lua
bool IsAttackImmune()
```

Is this unit immune to attacks? (e.g. Ethereal effect)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsAttackImmune)

---

### IsAttacking

```lua
bool IsAttacking()
```

Is this unit is currently attacking?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsAttacking)

---

### IsAttackingEntity

```lua
bool IsAttackingEntity(handle hEntity)
```

Is this unit is currently attacking this entity?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsAttackingEntity)

---

### IsBarracks

```lua
bool IsBarracks()
```

Is this unit a Barracks?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsBarracks)

---

### IsBlind

```lua
bool IsBlind()
```

Is this unit blinded?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsBlind)

---

### IsBlockDisabled

```lua
bool IsBlockDisabled()
```

Is this unit's block disabled?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsBlockDisabled)

---

### IsBoss

```lua
bool IsBoss()
```

Is this a real hero?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsBoss)

---

### IsBuilding

```lua
bool IsBuilding()
```

Is this unit a building?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsBuilding)

---

### IsChanneling

```lua
bool IsChanneling()
```

Is this unit currently channeling a spell?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsChanneling)

---

### IsClone

```lua
bool IsClone()
```

Is this unit a clone? (Meepo)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsClone)

---

### IsCommandRestricted

```lua
bool IsCommandRestricted()
```

Is this unit's command restricted?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsCommandRestricted)

---

### IsConsideredHero

```lua
bool IsConsideredHero()
```

Is this unit a considered a hero for targeting purposes?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsConsideredHero)

---

### IsControllableByAnyPlayer

```lua
bool IsControllableByAnyPlayer()
```

Is this unit controlled by any non-bot player?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsControllableByAnyPlayer)

---

### IsCourier

```lua
bool IsCourier()
```

Is this unit a courier?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsCourier)

---

### IsCreature

```lua
bool IsCreature()
```

Is this a Creature type NPC?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsCreature)

---

### IsCreep

```lua
bool IsCreep()
```

Is this unit a creep?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsCreep)

---

### IsDeniable

```lua
bool IsDeniable()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsDeniable)

---

### IsDisarmed

```lua
bool IsDisarmed()
```

Is this unit disarmed?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsDisarmed)

---

### IsDominated

```lua
bool IsDominated()
```

Is this unit dominated?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsDominated)

---

### IsEvadeDisabled

```lua
bool IsEvadeDisabled()
```

Is this unit's evasion disabled?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsEvadeDisabled)

---

### IsFort

```lua
bool IsFort()
```

Is this unit an Ancient?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsFort)

---

### IsFrozen

```lua
bool IsFrozen()
```

Is this unit frozen? (Chronosphere/Timelock freeze)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsFrozen)

---

### IsHardDisarmed

```lua
bool IsHardDisarmed()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsHardDisarmed)

---

### IsHero

```lua
bool IsHero()
```

Is this a hero or hero illusion?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsHero)

---

### IsHexed

```lua
bool IsHexed()
```

Is this unit hexed?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsHexed)

---

### IsIdle

```lua
bool IsIdle()
```

Is this creature currently idle?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsIdle)

---

### IsIllusion

```lua
bool IsIllusion()
```

Is this unit an illusion?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsIllusion)

---

### IsInvisible

```lua
bool IsInvisible()
```

Is this unit invisible?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsInvisible)

---

### IsInvulnerable

```lua
bool IsInvulnerable()
```

Is this unit invulnerable?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsInvulnerable)

---

### IsLowAttackPriority

```lua
bool IsLowAttackPriority()
```

Is this unit's attack priority set to low? (being attacked last when attack moving)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsLowAttackPriority)

---

### IsMagicImmune

```lua
bool IsMagicImmune()
```

Is this unit magic immune?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsMagicImmune)

---

### IsMechanical

```lua
bool IsMechanical()
```

Is the unit mechanical?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsMechanical)

---

### IsMovementImpaired

```lua
bool IsMovementImpaired()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsMovementImpaired)

---

### IsMuted

```lua
bool IsMuted()
```

Is this unit muted?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsMuted)

---

### IsNeutralUnitType

```lua
bool IsNeutralUnitType()
```

Is this a neutral?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsNeutralUnitType)

---

### IsNightmared

```lua
bool IsNightmared()
```

Is this unit nightmared?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsNightmared)

---

### IsOpposingTeam

```lua
bool IsOpposingTeam(int nTeam)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsOpposingTeam)

---

### IsOther

```lua
bool IsOther()
```

Is this unit a ward-type unit?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsOther)

---

### IsOutOfGame

```lua
bool IsOutOfGame()
```

Is this unit out of the game? (Astral Imprisonment)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsOutOfGame)

---

### IsOwnedByAnyPlayer

```lua
bool IsOwnedByAnyPlayer()
```

Is this unit owned by any non-bot player?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsOwnedByAnyPlayer)

---

### IsPhantom

```lua
bool IsPhantom()
```

Is this a phantom unit?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsPhantom)

---

### IsPhantomBlocker

```lua
bool IsPhantomBlocker()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsPhantomBlocker)

---

### IsPhased

```lua
bool IsPhased()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsPhased)

---

### IsPositionInRange

```lua
bool IsPositionInRange(Vector vPosition, float flRange)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsPositionInRange)

---

### IsRangedAttacker

```lua
bool IsRangedAttacker()
```

Is this unit a ranged attacker?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsRangedAttacker)

---

### IsRealHero

```lua
bool IsRealHero()
```

Returns true if the hero is a true Hero, not a creep or an Illusion of a hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsRealHero)

---

### IsRooted

```lua
bool IsRooted()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsRooted)

---

### IsShrine

```lua
bool IsShrine()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsShrine&action=edit&redlink=1)

---

### IsSilenced

```lua
bool IsSilenced()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsSilenced)

---

### IsSoftDisarmed

```lua
bool IsSoftDisarmed()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsSoftDisarmed)

---

### IsSpeciallyDeniable

```lua
bool IsSpeciallyDeniable()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsSpeciallyDeniable)

---

### IsStunned

```lua
bool IsStunned()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsStunned)

---

### IsSummoned

```lua
bool IsSummoned()
```

Is this unit summoned?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsSummoned)

---

### IsTempestDouble

```lua
bool IsTempestDouble()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsTempestDouble&action=edit&redlink=1)

---

### IsTower

```lua
bool IsTower()
```

Is this a tower?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsTower)

---

### IsUnableToMiss

```lua
bool IsUnableToMiss()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsUnableToMiss)

---

### IsUnselectable

```lua
bool IsUnselectable()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.IsUnselectable)

---

### Kill

```lua
void Kill(handle hAbility, handle hAttacker)
```

Kills this NPC, with the params Ability and Attacker

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Kill)

---

### MakeIllusion

```lua
void MakeIllusion()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MakeIllusion)

---

### MakePhantomBlocker

```lua
void MakePhantomBlocker()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MakePhantomBlocker)

---

### MakeVisibleDueToAttack

```lua
void MakeVisibleDueToAttack(int iTeam)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MakeVisibleDueToAttack)

---

### MakeVisibleToTeam

```lua
void MakeVisibleToTeam(int iTeam, float flDuration)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MakeVisibleToTeam)

---

### ManageModelChanges

```lua
void ManageModelChanges()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ManageModelChanges)

---

### ModifyHealth

```lua
void ModifyHealth(int iDesiredHealthValue, handle hAbility, bool bLethal, int iAdditionalFlags)
```

Sets the health to a specific value, with optional flags or inflictors.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ModifyHealth)

---

### MoveToNPC

```lua
void MoveToNPC(handle hNPC)
```

Move to follow a unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MoveToNPC)

---

### MoveToNPCToGiveItem

```lua
void MoveToNPCToGiveItem(handle npc, handle item)
```

Give an item to another unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MoveToNPCToGiveItem)

---

### MoveToPosition

```lua
void MoveToPosition(Vector vDest)
```

Issue a Move-To command

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MoveToPosition)

---

### MoveToPositionAggressive

```lua
void MoveToPositionAggressive(Vector vDest)
```

Issue an Attack-Move-To command

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MoveToPositionAggressive)

---

### MoveToTargetToAttack

```lua
void MoveToTargetToAttack(handle hTarget)
```

Move to a target to attack.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.MoveToTargetToAttack)

---

### NoHealthBar

```lua
bool NoHealthBar()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NoHealthBar)

---

### NoTeamMoveTo

```lua
bool NoTeamMoveTo()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NoTeamMoveTo)

---

### NoTeamSelect

```lua
bool NoTeamSelect()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NoTeamSelect)

---

### NotifyWearablesOfModelChange

```lua
void NotifyWearablesOfModelChange(bool bOriginalModel)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NotifyWearablesOfModelChange)

---

### NotOnMinimap

```lua
bool NotOnMinimap()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NotOnMinimap)

---

### NotOnMinimapForEnemies

```lua
bool NotOnMinimapForEnemies()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NotOnMinimapForEnemies)

---

### NoUnitCollision

```lua
bool NoUnitCollision()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.NoUnitCollision)

---

### PassivesDisabled

```lua
bool PassivesDisabled()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.PassivesDisabled)

---

### PerformAttack

```lua
void PerformAttack(handle hTarget, bool bUseCastAttackOrb, bool bProcessProcs, bool bSkipCooldown, bool bIgnoreInvis, bool bUseProjectile, bool bFakeAttack, bool bNeverMiss)
```

Performs an attack on a target. Params: Target, bUseCastAttackOrb, bProcessProcs, bSkipCooldown, bIgnoreInvis, bUseProjectile, bFakeAttack, bNeverMiss

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.PerformAttack)

---

### PickupDroppedItem

```lua
void PickupDroppedItem(handle hItem)
```

Pick up a dropped item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.PickupDroppedItem)

---

### PickupRune

```lua
void PickupRune(handle hItem)
```

Pick up a rune.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.PickupRune)

---

### ProvidesVision

```lua
bool ProvidesVision()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ProvidesVision)

---

### Purge

```lua
void Purge(bool bRemovePositiveBuffs, bool bRemoveDebuffs, bool bFrameOnly, bool bRemoveStuns, bool bRemoveExceptions)
```

(bool RemovePositiveBuffs, bool RemoveDebuffs, bool BuffsCreatedThisFrameOnly, bool RemoveStuns, bool RemoveExceptions

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Purge)

---

### ReduceMana

```lua
void ReduceMana(float flAmount)
```

Remove mana from this unit, this can be used for involuntary mana loss, not for mana that is spent.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ReduceMana)

---

### RemoveAbility

```lua
void RemoveAbility(string pszAbilityName)
```

Remove an ability from this unit by name.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveAbility)

---

### RemoveGesture

```lua
void RemoveGesture(int nActivity)
```

Remove the given gesture activity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveGesture)

---

### RemoveHorizontalMotionController

```lua
void RemoveHorizontalMotionController(handle hBuff)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveHorizontalMotionController)

---

### RemoveItem

```lua
void RemoveItem(handle hItem)
```

Removes the passed item from this unit's inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveItem)

---

### RemoveModifierByName

```lua
void RemoveModifierByName(string pszScriptName)
```

Removes a modifier

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveModifierByName)

---

### RemoveModifierByNameAndCaster

```lua
void RemoveModifierByNameAndCaster(string pszScriptName, handle hCaster)
```

Removes a modifier that was cast by the given caster

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveModifierByNameAndCaster)

---

### RemoveNoDraw

```lua
void RemoveNoDraw()
```

Remove the no draw flag.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveNoDraw)

---

### RemoveVerticalMotionController

```lua
void RemoveVerticalMotionController(handle hBuff)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RemoveVerticalMotionController)

---

### RespawnUnit

```lua
void RespawnUnit()
```

Respawns the target unit if it can be respawned.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.RespawnUnit)

---

### TakeItem

```lua
void TakeItem(handle hItem)
```

Hidden item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.TakeItem)

---

### SellItem

```lua
void SellItem(handle hItem)
```

Sells the passed item in this unit's inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SellItem)

---

### SetAbilityByIndex

```lua
void SetAbilityByIndex(handle hAbility, int iIndex)
```

change ability index

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAbilityByIndex)

---

### SetAcquisitionRange

```lua
void SetAcquisitionRange(float nRange)
```

Sets acquisition range

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAcquisitionRange)

---

### SetAdditionalBattleMusicWeight

```lua
void SetAdditionalBattleMusicWeight(float flWeight)
```

Combat involving this creature will have this weight added to the music calcuations

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAdditionalBattleMusicWeight)

---

### SetAggroTarget

```lua
void SetAggroTarget(handle hAggroTarget)
```

Set this unit's aggro target to a specified unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAggroTarget)

---

### SetAttackCapability

```lua
void SetAttackCapability(int iAttackCapabilities)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAttackCapability)

---

### SetAttacking

```lua
void SetAttacking(handle hAttackTarget)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetAttacking)

---

### SetBaseAttackTime

```lua
void SetBaseAttackTime(float flBaseAttackTime)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseAttackTime)

---

### SetBaseDamageMax

```lua
void SetBaseDamageMax(int nMax)
```

Sets the minimum base damage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseDamageMax)

---

### SetBaseDamageMin

```lua
void SetBaseDamageMin(int nMin)
```

Sets the minimum base damage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseDamageMin)

---

### SetBaseHealthRegen

```lua
void SetBaseHealthRegen(float flHealthRegen)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseHealthRegen)

---

### SetBaseMagicalResistanceValue

```lua
void SetBaseMagicalResistanceValue(float flMagicalResistanceValue)
```

Sets base magical armor value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseMagicalResistanceValue)

---

### SetBaseManaRegen

```lua
void SetBaseManaRegen(float flManaRegen)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseManaRegen)

---

### SetBaseMaxHealth

```lua
void SetBaseMaxHealth(float flBaseMaxHealth)
```

Set a new base max health value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseMaxHealth)

---

### SetBaseMoveSpeed

```lua
void SetBaseMoveSpeed(int iMoveSpeed)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetBaseMoveSpeed)

---

### SetCanSellItems

```lua
void SetCanSellItems(bool bCanSell)
```

Set whether or not this unit is allowed to sell items (bCanSellItems)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetCanSellItems)

---

### SetControllableByPlayer

```lua
void SetControllableByPlayer(int iIndex, bool bSkipAdjustingPosition)
```

Set this unit controllable by the player with the passed ID.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetControllableByPlayer)

---

### SetCursorCastTarget

```lua
void SetCursorCastTarget(handle hEntity)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetCursorCastTarget)

---

### SetCursorPosition

```lua
void SetCursorPosition(Vector vLocation)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetCursorPosition)

---

### SetCursorTargetingNothing

```lua
void SetCursorTargetingNothing(bool bTargetingNothing)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetCursorTargetingNothing)

---

### SetCustomHealthLabel

```lua
void SetCustomHealthLabel(string pLabel, int r, int g, int b)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetCustomHealthLabel)

---

### SetDayTimeVisionRange

```lua
void SetDayTimeVisionRange(int iRange)
```

Set the base vision range.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetDayTimeVisionRange)

---

### SetDeathXP

```lua
void SetDeathXP(int iXPBounty)
```

Set the XP bounty on this unit

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetDeathXP)

---

### SetForceAttackTarget

```lua
void SetForceAttackTarget(handle hNPC)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetForceAttackTarget)

---

### SetForceAttackTargetAlly

```lua
void SetForceAttackTargetAlly(handle hNPC)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetForceAttackTargetAlly&action=edit&redlink=1)

---

### SetHasInventory

```lua
void SetHasInventory(bool bHasInventory)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetHasInventory)

---

### SetHullRadius

```lua
void SetHullRadius(float flHullRadius)
```

Set the collision hull radius of this NPC

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetHullRadius)

---

### SetIdleAcquire

```lua
void SetIdleAcquire(bool bIdleAcquire)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetIdleAcquire)

---

### SetInitialGoalEntity

```lua
void SetInitialGoalEntity(handle hGoal)
```

Sets the initial waypoint goal for this NPC

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetInitialGoalEntity)

---

### SetMana

```lua
void SetMana(float flMana)
```

Set the mana on this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetMana)

---

### SetMaximumGoldBounty

```lua
void SetMaximumGoldBounty(int iGoldBountyMax)
```

Set the maximum gold bounty for this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetMaximumGoldBounty)

---

### SetMinimumGoldBounty

```lua
void SetMinimumGoldBounty(int iGoldBountyMin)
```

Set the minimum gold bounty for this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetMinimumGoldBounty)

---

### SetModifierStackCount

```lua
void SetModifierStackCount(string modifierName, handle hCaster, int modifierCount)
```

Sets the stack count of a given modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetModifierStackCount)

---

### SetMoveCapability

```lua
void SetMoveCapability(int iMoveCapabilities)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetMoveCapability)

---

### SetMustReachEachGoalEntity

```lua
void SetMustReachEachGoalEntity(bool must)
```

Set whether this NPC is required to reach each goal entity, rather than being allowed to 'unkink' their path

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetMustReachEachGoalEntity)

---

### SetNeverMoveToClearSpace

```lua
void SetNeverMoveToClearSpace(bool neverMoveToClearSpace)
```

If set to true, we will never attempt to move this unit to clear space, even when it unphases.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetNeverMoveToClearSpace)

---

### SetNightTimeVisionRange

```lua
void SetNightTimeVisionRange(int iRange)
```

Set the base vision range.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetNightTimeVisionRange)

---

### SetOrigin

```lua
void SetOrigin(Vector vLocation)
```

Set the unit's origin.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetOrigin)

---

### SetOriginalModel

```lua
void SetOriginalModel(string originalModel)
```

Sets the original model of this entity, which it will tend to fall back to anytime its state changes

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetOriginalModel)

---

### SetPhysicalArmorBaseValue

```lua
void SetPhysicalArmorBaseValue(float flPhysicalArmorValue)
```

Sets base physical armor value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetPhysicalArmorBaseValue)

---

### SetRangedProjectileName

```lua
void SetRangedProjectileName(string pProjectileName)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetRangedProjectileName)

---

### SetRenderAlpha

```lua
void SetRenderAlpha( int alpha )
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetRenderAlpha)

---

### SetStolenScepter

```lua
void SetStolenScepter(bool bStolenScepter)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetStolenScepter)

---

### SetUnitCanRespawn

```lua
void SetUnitCanRespawn(bool bCanRespawn)
```

Set whether or not this unit can respawn.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetUnitCanRespawn&action=edit&redlink=1)

---

### SetUnitName

```lua
void SetUnitName(string pName)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SetUnitName)

---

### ShouldIdleAcquire

```lua
bool ShouldIdleAcquire()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.ShouldIdleAcquire)

---

### SpendMana

```lua
void SpendMana(float flManaSpent, handle hAbility)
```

Spend mana from this unit, this can be used for spending mana from abilities or item usage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SpendMana)

---

### StartGesture

```lua
void StartGesture(int nActivity)
```

Add the given gesture activity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.StartGesture)

---

### StartGestureWithPlaybackRate

```lua
void StartGestureWithPlaybackRate( nActivity, flRate )
```

Add the given gesture activity with custom playback rate.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.StartGestureWithPlaybackRate)

---

### Stop

```lua
void Stop()
```

Stop the current order.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.Stop)

---

### SwapAbilities

```lua
void SwapAbilities(string pAbilityName1, string pAbilityName2, bool bEnable1, bool bEnable2)
```

Swaps the slots of the two passed abilities and sets them enabled/disabled: const char* AbilityName1, const char* AbilityName2,boolbEnable1,boolbEnable2. The boolean controls which ability is active. The ability order is never swapped when swapping abilities, only the boolean statements are flipped.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SwapAbilities)

---

### SwapItems

```lua
void SwapItems(int nSlot1, int nSlot2)
```

Swap the contents of two item slots (slot1, slot2)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.SwapItems)

---

### TimeUntilNextAttack

```lua
float TimeUntilNextAttack()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.TimeUntilNextAttack)

---

### TriggerModifierDodge

```lua
bool TriggerModifierDodge()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.TriggerModifierDodge)

---

### TriggerSpellAbsorb

```lua
bool TriggerSpellAbsorb(handle hAbility)
```

Query whether the passed ability will trigger spell absorb on this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.TriggerSpellAbsorb)

---

### TriggerSpellReflect

```lua
void TriggerSpellReflect(handle hAbility)
```

Trigger the Lotus Orb-like effect.(hAbility)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.TriggerSpellReflect)

---

### UnitCanRespawn

```lua
bool UnitCanRespawn()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC.UnitCanRespawn)

---


## CDOTA_BaseNPC_Hero

*Элементов в категории: 96*

### AddExperience

```lua
bool AddExperience(float amount, int nReason, bool bApplyBotDifficultyScaling, bool bIncrementTotal)
```

Adds experience to this unit.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.AddExperience)

---

### Buyback

```lua
void Buyback()
```

Spend the gold and buyback with this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.Buyback)

---

### CalculateStatBonus

```lua
void CalculateStatBonus()
```

Recalculate all stats after the hero gains stats.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.CalculateStatBonus)

---

### CanEarnGold

```lua
bool CanEarnGold()
```

Returns boolean value result of buyback gold limit time less than game time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.CanEarnGold)

---

### ClearLastHitMultikill

```lua
void ClearLastHitMultikill()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ClearLastHitMultikill)

---

### ClearLastHitStreak

```lua
void ClearLastHitStreak()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ClearLastHitStreak)

---

### ClearStreak

```lua
void ClearStreak()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ClearStreak)

---

### GetAbilityPoints

```lua
int GetAbilityPoints()
```

Gets the current unspent ability point's.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAbilityPoints)

---

### GetAdditionalOwnedUnits

```lua
table GetAdditionalOwnedUnits()
```

Returns a table of all units summoned by this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAdditionalOwnedUnits)

---

### GetAgility

```lua
float GetAgility()
```

Get the current agility stat of the hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAgility)

---

### GetAgilityGain

```lua
float GetAgilityGain()
```

Get the agility gain of the hero when leveling up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAgilityGain)

---

### GetAssists

```lua
int GetAssists()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAssists)

---

### GetAttacker

```lua
int GetAttacker(int nIndex)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetAttacker)

---

### GetBaseAgility

```lua
float GetBaseAgility()
```

Get the base agility of a hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBaseAgility)

---

### GetBaseDamageMax

```lua
int GetBaseDamageMax()
```

Hero damage is also affected by attributes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBaseDamageMax)

---

### GetBaseDamageMin

```lua
int GetBaseDamageMin()
```

Hero damage is also affected by attributes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBaseDamageMin)

---

### GetBaseIntellect

```lua
float GetBaseIntellect()
```

Get the base intelligence of the hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBaseIntellect)

---

### GetBaseStrength

```lua
float GetBaseStrength()
```

Get the base strength of the hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBaseStrength)

---

### GetBonusDamageFromPrimaryStat

```lua
int GetBonusDamageFromPrimaryStat()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBonusDamageFromPrimaryStat)

---

### GetBuybackCooldownTime

```lua
float GetBuybackCooldownTime()
```

Returnfloatvalue for the amount of time left on cooldown for this hero's buyback.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBuybackCooldownTime)

---

### GetBuybackCost

```lua
int GetBuybackCost()
```

Return integer value for the gold cost of a buyback.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBuybackCost)

---

### GetBuybackGoldLimitTime

```lua
float GetBuybackGoldLimitTime()
```

Returns the amount of time gold gain is limited after buying back.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetBuybackGoldLimitTime)

---

### GetCurrentXP

```lua
int GetCurrentXP()
```

Returns the amount of XP

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetCurrentXP)

---

### GetDeathGoldCost

```lua
int GetDeathGoldCost()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetDeathGoldCost)

---

### GetDeaths

```lua
int GetDeaths()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetDeaths)

---

### GetDenies

```lua
int GetDenies()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetDenies)

---

### GetGold

```lua
int GetGold()
```

Returns gold amount for the player owning this hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetGold)

---

### GetGoldBounty

```lua
int GetGoldBounty()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetGoldBounty)

---

### GetHealthRegen

```lua
float GetHealthRegen()
```

Hero health regen is affected by attributes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetHealthRegen)

---

### GetIncreasedAttackSpeed

```lua
float GetIncreasedAttackSpeed()
```

Hero attack speed is also affected by agility.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetIncreasedAttackSpeed)

---

### GetIntellect

```lua
float GetIntellect()
```

Get the current intelligence of the hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetIntellect)

---

### GetIntellectGain

```lua
float GetIntellectGain()
```

Get the intelligence gain of the hero when leveling up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetIntellectGain)

---

### GetKills

```lua
int GetKills()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetKills)

---

### GetLastHits

```lua
int GetLastHits()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetLastHits)

---

### GetManaRegen

```lua
float GetManaRegen()
```

Hero mana regen is affected by attributes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetManaRegen)

---

### GetMostRecentDamageTime

```lua
float GetMostRecentDamageTime()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetMostRecentDamageTime)

---

### GetMultipleKillCount

```lua
int GetMultipleKillCount()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetMultipleKillCount)

---

### GetNumAttackers

```lua
int GetNumAttackers()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetNumAttackers)

---

### GetNumItemsInInventory

```lua
int GetNumItemsInInventory()
```

Gets how many items does the hero holds.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetNumItemsInInventory)

---

### GetNumItemsInStash

```lua
int GetNumItemsInStash()
```

Gets how many items does the hero has in stash.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetNumItemsInStash)

---

### GetPhysicalArmorValue

```lua
float GetPhysicalArmorValue()
```

Hero armor is affected by attributes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetPhysicalArmorValue)

---

### GetPlayerID

```lua
int GetPlayerID()
```

Returns player ID of the player owning this hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetPlayerID)

---

### GetPrimaryAttribute

```lua
int GetPrimaryAttribute()
```

Get the main attribute of the hero. 0 = strength, 1 = agility, 2 = intelligence.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetPrimaryAttribute)

---

### GetPrimaryStatValue

```lua
float GetPrimaryStatValue()
```

Returns the amount of stats points in the hero's main attribute.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetPrimaryStatValue)

---

### GetRespawnsDisabled

```lua
bool GetRespawnsDisabled()
```

Is this hero prevented from respawning?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetRespawnsDisabled)

---

### GetRespawnTime

```lua
float GetRespawnTime()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetRespawnTime)

---

### GetStatsBasedManaRegen

```lua
float GetStatsBasedManaRegen()
```

Returns only the regen based on Intelligence.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetStatsBasedManaRegen)

---

### GetStreak

```lua
int GetStreak()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetStreak)

---

### GetStrength

```lua
float GetStrength()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetStrength)

---

### GetStrengthGain

```lua
float GetStrengthGain()
```

Get the strength gain of the hero when leveling up.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetStrengthGain)

---

### GetTimeUntilRespawn

```lua
float GetTimeUntilRespawn()
```

Get how long until the hero respawns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetTimeUntilRespawn)

---

### GetTogglableWearable

```lua
handle GetTogglableWearable(int nSlotType)
```

Get wearable entity in slot (slot)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.GetTogglableWearable)

---

### HasAnyAvailableInventorySpace

```lua
bool HasAnyAvailableInventorySpace()
```

Returns true if the hero has at least one clear inventory space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.HasAnyAvailableInventorySpace)

---

### HasFlyingVision

```lua
bool HasFlyingVision()
```

Returns true if the hero has flying vision.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.HasFlyingVision)

---

### HasOwnerAbandoned

```lua
bool HasOwnerAbandoned()
```

Returns true if the player owning the hero has abandoned.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.HasOwnerAbandoned)

---

### HasRoomForItem

```lua
int HasRoomForItem(string pItemName, bool bIncludeStashCombines, bool bAllowSelling)
```

Args: const char* pItemName,boolbIncludeStashCombines,boolbAllowSelling

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.HasRoomForItem)

---

### HeroLevelUp

```lua
void HeroLevelUp(bool bPlayEffects)
```

Levels up the hero, true or false to play effects.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.HeroLevelUp)

---

### IncrementAssists

```lua
void IncrementAssists(int iKillerID)
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementAssists)

---

### IncrementDeaths

```lua
void IncrementDeaths(int iKillerID)
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementDeaths)

---

### IncrementDenies

```lua
void IncrementDenies()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementDenies)

---

### IncrementKills

```lua
void IncrementKills(int kills)
```

Passed ID is for the victim, killer ID is ID of the current hero. Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementKills)

---

### IncrementLastHitMultikill

```lua
void IncrementLastHitMultikill()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementLastHitMultikill)

---

### IncrementLastHits

```lua
void IncrementLastHits()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementLastHits)

---

### IncrementLastHitStreak

```lua
void IncrementLastHitStreak()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementLastHitStreak)

---

### IncrementNearbyCreepDeaths

```lua
void IncrementNearbyCreepDeaths()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementNearbyCreepDeaths)

---

### IncrementStreak

```lua
void IncrementStreak()
```

Value is stored in PlayerResource.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IncrementStreak)

---

### IsBuybackDisabledByReapersScythe

```lua
bool IsBuybackDisabledByReapersScythe()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IsBuybackDisabledByReapersScythe)

---

### IsReincarnating

```lua
bool IsReincarnating()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.IsReincarnating)

---

### KilledHero

```lua
void KilledHero(handle hHero, handle hInflictor)
```

Args: Hero, Inflictor

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.KilledHero)

---

### ModifyAgility

```lua
void ModifyAgility(float flNewAgility)
```

Adds passed value to base attribute value, then calls CalculateStatBonus.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ModifyAgility)

---

### ModifyGold

```lua
int ModifyGold(int goldAmmt, bool reliable, int reason)
```

Gives this hero some gold. Args:intnGoldChange,boolbReliable,intreason

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ModifyGold)

---

### ModifyIntellect

```lua
void ModifyIntellect(float flNewIntellect)
```

Adds passed value to base attribute value, then calls CalculateStatBonus.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ModifyIntellect)

---

### ModifyStrength

```lua
void ModifyStrength(float flNewStrength)
```

Adds passed value to base attribute value, then calls CalculateStatBonus.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ModifyStrength)

---

### PerformTaunt

```lua
void PerformTaunt()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.PerformTaunt)

---

### RecordLastHit

```lua
void RecordLastHit()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.RecordLastHit)

---

### RespawnHero

```lua
void RespawnHero(bool buyback, bool IsActuallyBeingSpawnedForTheFirstTime, bool RespawnPenalty)
```

Respawn this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.RespawnHero)

---

### SetAbilityPoints

```lua
void SetAbilityPoints(int iPoints)
```

Sets the current unspent ability point's.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetAbilityPoints)

---

### SetBaseAgility

```lua
void SetBaseAgility(float flAgility)
```

Sets the base agility points for this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBaseAgility)

---

### SetBaseIntellect

```lua
void SetBaseIntellect(float flIntellect)
```

Sets the base intelligence points for this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBaseIntellect)

---

### SetBaseStrength

```lua
void SetBaseStrength(float flStrength)
```

Sets the base strength points for this hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBaseStrength)

---

### SetBotDifficulty

```lua
void SetBotDifficulty(int nDifficulty)
```

Sets the bot's difficulty level (0 = passive, 1 = easy, 2 = medium, 3 = hard, 4 = unfair)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBotDifficulty)

---

### SetBuybackCooldownTime

```lua
void SetBuybackCooldownTime(float flTime)
```

Sets the buyback cooldown time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBuybackCooldownTime)

---

### SetBuyBackDisabledByReapersScythe

```lua
void SetBuyBackDisabledByReapersScythe(bool bBuybackDisabled)
```

Set whether this hero can buyback.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBuyBackDisabledByReapersScythe)

---

### SetBuybackGoldLimitTime

```lua
void SetBuybackGoldLimitTime(float flTime)
```

Set the amount of time gold gain is limited after buying back.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetBuybackGoldLimitTime)

---

### SetCustomDeathXP

```lua
void SetCustomDeathXP(int iValue)
```

Sets a custom experience value for this hero.Tip:GameRules boolean must be set for this to work!

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetCustomDeathXP)

---

### SetGold

```lua
void SetGold(int amount, bool reliableGold)
```

Sets the gold amount for the player owning this hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetGold)

---

### SetPlayerID

```lua
void SetPlayerID(int iPlayerID)
```

Set the player's ID.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetPlayerID)

---

### SetPrimaryAttribute

```lua
void SetPrimaryAttribute(int nPrimaryAttribute)
```

Set this hero's primary attribute value.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetPrimaryAttribute)

---

### SetRespawnPosition

```lua
void SetRespawnPosition(Vector vOrigin)
```

Set the location where the hero will respawn.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetRespawnPosition)

---

### SetRespawnsDisabled

```lua
void SetRespawnsDisabled(bool bDisableRespawns)
```

Prevent this hero from respawning.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetRespawnsDisabled)

---

### SetTimeUntilRespawn

```lua
void SetTimeUntilRespawn(float time)
```

Set the time remaining until the hero respawns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SetTimeUntilRespawn)

---

### ShouldDoFlyHeightVisual

```lua
bool ShouldDoFlyHeightVisual()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.ShouldDoFlyHeightVisual)

---

### SpendGold

```lua
void SpendGold(int amount, int reason)
```

Args:intnGold,intnReason

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.SpendGold)

---

### UnitCanRespawn

```lua
bool UnitCanRespawn()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.UnitCanRespawn)

---

### UpgradeAbility

```lua
void UpgradeAbility(handle hAbility)
```

This upgrades the passed ability if it exists and the hero has enough ability point's.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.UpgradeAbility)

---

### WillReincarnate

```lua
bool WillReincarnate()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Hero.WillReincarnate)

---


## CDOTA_BaseNPC_Creature

*Элементов в категории: 16*

### AddItemDrop

```lua
void AddItemDrop(handle hDropData)
```

Add the specified item drop to this creature

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.AddItemDrop)

---

### CreatureLevelUp

```lua
void CreatureLevelUp(int iLevels)
```

Level the creature up by the specified number of levels

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.CreatureLevelUp)

---

### IsChampion

```lua
bool IsChampion()
```

Is this unit a champion?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.IsChampion)

---

### SetArmorGain

```lua
void SetArmorGain(float flArmorGain)
```

Set the armor gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetArmorGain)

---

### SetAttackTimeGain

```lua
void SetAttackTimeGain(float flAttackTimeGain)
```

Set the attack time gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetAttackTimeGain)

---

### SetBountyGain

```lua
void SetBountyGain(int nBountyGain)
```

Set the bounty gold gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetBountyGain)

---

### SetChampion

```lua
void SetChampion(bool bIsChampion)
```

Flag this unit as a champion creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetChampion)

---

### SetDamageGain

```lua
void SetDamageGain(int nDamageGain)
```

Set the damage gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetDamageGain)

---

### SetDisableResistanceGain

```lua
void SetDisableResistanceGain(float flDisableResistanceGain)
```

Set the disable resistance gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetDisableResistanceGain)

---

### SetHPGain

```lua
void SetHPGain(int nHPGain)
```

Set the hit point's gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetHPGain)

---

### SetHPRegenGain

```lua
void SetHPRegenGain(float flHPRegenGain)
```

Set the hit point's regen gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetHPRegenGain)

---

### SetMagicResistanceGain

```lua
void SetMagicResistanceGain(float flMagicResistanceGain)
```

Set the magic resistance gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetMagicResistanceGain)

---

### SetManaGain

```lua
void SetManaGain(int nManaGain)
```

Set the mana point's gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetManaGain)

---

### SetManaRegenGain

```lua
void SetManaRegenGain(float flManaRegenGain)
```

Set the mana point's regen gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetManaRegenGain)

---

### SetMoveSpeedGain

```lua
void SetMoveSpeedGain(int nMoveSpeedGain)
```

Set the move speed gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetMoveSpeedGain)

---

### SetXPGain

```lua
void SetXPGain(int nXPGain)
```

Set the xp reward gained per level on this creature.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Creature.SetXPGain)

---


## CDOTA_BaseNPC_Building

*Элементов в категории: 2*

### GetInvulnCount

```lua
int GetInvulnCount()
```

Get the invulnerability count for a building.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Building.GetInvulnCount)

---

### SetInvulnCount

```lua
void SetInvulnCount(int nInvulnCount)
```

Set the invulnerability counter of this building.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_BaseNPC_Building.SetInvulnCount)

---


## CDOTABaseGameMode

*Элементов в категории: 78*

### ClearAbilityTuningValueFilter

```lua
void ClearAbilityTuningValueFilter()
```

Clear the script filter that controls the tuning values abilities use.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearAbilityTuningValueFilter)

---

### ClearBountyRunePickupFilter

```lua
void ClearBountyRunePickupFilter()
```

Clear the script filter that controls bounty rune pickup behavior.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearBountyRunePickupFilter)

---

### ClearDamageFilter

```lua
void ClearDamageFilter()
```

Clear the script filter that controls how a unit takes damage.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearDamageFilter)

---

### ClearExecuteOrderFilter

```lua
void ClearExecuteOrderFilter()
```

Clear the script filter that controls when a unit picks up an item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearExecuteOrderFilter)

---

### ClearItemAddedToInventoryFilter

```lua
void ClearItemAddedToInventoryFilter()
```

Clear the script filter that controls when a unit add an item to inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearItemAddedToInventoryFilter)

---

### ClearModifierGainedFilter

```lua
void ClearModifierGainedFilter()
```

Clear the script filter that controls the modifier filter.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearModifierGainedFilter)

---

### ClearModifyExperienceFilter

```lua
void ClearModifyExperienceFilter()
```

Clear the script filter that controls how hero experience is modified.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearModifyExperienceFilter)

---

### ClearModifyGoldFilter

```lua
void ClearModifyGoldFilter()
```

Clear the script filter that controls how hero gold is modified.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearModifyGoldFilter)

---

### ClearRuneSpawnFilter

```lua
void ClearRuneSpawnFilter()
```

Clear the script filter that controls what rune spawns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearRuneSpawnFilter)

---

### ClearTrackingProjectileFilter

```lua
void ClearTrackingProjectileFilter()
```

Clear the script filter that controls when tracking projectiles are launched.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClearTrackingProjectileFilter)

---

### ClientLoadGridNav

```lua
void ClientLoadGridNav()
```

Tell clients that they need to load gridnav information. Used for things like allowing clients to identify valid locations to place buildings.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.ClientLoadGridNav)

---

### GetAlwaysShowPlayerNames

```lua
bool GetAlwaysShowPlayerNames()
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetAlwaysShowPlayerNames)

---

### GetAlwaysShowPlayerInventory

```lua
bool GetAlwaysShowPlayerInventory()
```

Show the player hero's inventory in the HUD, regardless of what unit is selected.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetAlwaysShowPlayerInventory)

---

### GetAnnouncerDisabled

```lua
bool GetAnnouncerDisabled()
```

Are in-game announcers disabled?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetAnnouncerDisabled)

---

### GetCameraDistanceOverride

```lua
float GetCameraDistanceOverride()
```

Set a different camera distance; dota default is 1134.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetCameraDistanceOverride)

---

### GetCustomBuybackCooldownEnabled

```lua
bool GetCustomBuybackCooldownEnabled()
```

Turns on capability to define custom buyback cooldowns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetCustomBuybackCooldownEnabled)

---

### GetCustomBuybackCostEnabled

```lua
bool GetCustomBuybackCostEnabled()
```

Turns on capability to define custom buyback costs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetCustomBuybackCostEnabled)

---

### GetCustomHeroMaxLevel

```lua
int GetCustomHeroMaxLevel()
```

Allows definition of the max level heroes can achieve (default is 25).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetCustomHeroMaxLevel)

---

### GetFixedRespawnTime

```lua
float GetFixedRespawnTime()
```

Gets the fixed respawn time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetFixedRespawnTime)

---

### GetFogOfWarDisabled

```lua
bool GetFogOfWarDisabled()
```

Turn the fog of war on or off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetFogOfWarDisabled)

---

### GetGoldSoundDisabled

```lua
bool GetGoldSoundDisabled()
```

Turn the sound when gold is acquired off/on.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetGoldSoundDisabled)

---

### GetMaximumAttackSpeed

```lua
int GetMaximumAttackSpeed()
```

Get the maximum attack speed for units.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetMaximumAttackSpeed)

---

### GetMinimumAttackSpeed

```lua
int GetMinimumAttackSpeed()
```

Get the minimum attack speed for units.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetMinimumAttackSpeed)

---

### GetRecommendedItemsDisabled

```lua
bool GetRecommendedItemsDisabled()
```

Turn the panel for showing recommended items at the shop off/on.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetRecommendedItemsDisabled)

---

### GetStashPurchasingDisabled

```lua
bool GetStashPurchasingDisabled()
```

Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetStashPurchasingDisabled)

---

### GetStickyItemDisabled

```lua
bool GetStickyItemDisabled()
```

Hide the sticky item in the quickbuy.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetStickyItemDisabled)

---

### GetTopBarTeamValuesOverride

```lua
bool GetTopBarTeamValuesOverride()
```

Override the values of the team values on the top game bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetTopBarTeamValuesOverride)

---

### GetTopBarTeamValuesVisible

```lua
bool GetTopBarTeamValuesVisible()
```

Turning on/off the team values on the top game bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetTopBarTeamValuesVisible)

---

### GetTowerBackdoorProtectionEnabled

```lua
bool GetTowerBackdoorProtectionEnabled()
```

Enables/Disables tower backdoor protection.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetTowerBackdoorProtectionEnabled)

---

### GetUseCustomHeroLevels

```lua
bool GetUseCustomHeroLevels()
```

Are custom-defined XP values for hero level ups in use?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.GetUseCustomHeroLevels)

---

### IsBuybackEnabled

```lua
bool IsBuybackEnabled()
```

Enables or disables buyback completely.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.IsBuybackEnabled)

---

### SetAbilityTuningValueFilter

```lua
void SetAbilityTuningValueFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the tuning values that abilities use. (Modify the table and Return true to use new values, return false to use the old values)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetAbilityTuningValueFilter)

---

### SetAlwaysShowPlayerNames

```lua
void SetAlwaysShowPlayerNames(bool bShow)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetAlwaysShowPlayerNames)

---

### SetAlwaysShowPlayerInventory

```lua
void SetAlwaysShowPlayerInventory(bool bAlwaysShow)
```

Show the player hero's inventory in the HUD, regardless of what unit is selected.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetAlwaysShowPlayerInventory)

---

### SetAnnouncerDisabled

```lua
void SetAnnouncerDisabled(bool enabled)
```

Disables the dota announcer

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetAnnouncerDisabled)

---

### SetBotsAlwaysPushWithHuman

```lua
void SetBotsAlwaysPushWithHuman(bool bAlwaysPush)
```

Set if the bots should try their best to push with a human player.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBotsAlwaysPushWithHuman)

---

### SetBotsInLateGame

```lua
void SetBotsInLateGame(bool bLateGame)
```

Set if bots should enable their late game behavior.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBotsInLateGame)

---

### SetBotsMaxPushTier

```lua
void SetBotsMaxPushTier(int nMaxTier)
```

Set the max tier of tower that bots want to push. (-1 to disable)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBotsMaxPushTier)

---

### SetBotThinkingEnabled

```lua
void SetBotThinkingEnabled(bool bEnabled)
```

Enables/Disables bot thinking. Requires a very Dota PvP-like map with 3 lanes, a shop, etc.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBotThinkingEnabled)

---

### SetBountyRunePickupFilter

```lua
void SetBountyRunePickupFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the behavior when a bounty rune is picked up. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBountyRunePickupFilter)

---

### SetBuybackEnabled

```lua
void SetBuybackEnabled(bool bEnabled)
```

Enables or disables buyback completely

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetBuybackEnabled)

---

### SetCameraDistanceOverride

```lua
void SetCameraDistanceOverride(float flCameraDistanceOverride)
```

Set a different camera distance; dota default is 1134.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCameraDistanceOverride)

---

### SetCustomBuybackCooldownEnabled

```lua
void SetCustomBuybackCooldownEnabled(bool bEnabled)
```

Turns on capability to define custom buyback cooldowns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCustomBuybackCooldownEnabled)

---

### SetCustomBuybackCostEnabled

```lua
void SetCustomBuybackCostEnabled(bool bEnabled)
```

Turns on capability to define custom buyback costs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCustomBuybackCostEnabled)

---

### SetCustomGameForceHero

```lua
void SetCustomGameForceHero(string pHeroName)
```

Force single-player hero selection.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCustomGameForceHero)

---

### SetCustomHeroMaxLevel

```lua
void SetCustomHeroMaxLevel(int maxLevel)
```

[Deprecated] Allows definition of the max level heroes can achieve (default is 25).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCustomHeroMaxLevel)

---

### SetCustomXPRequiredToReachNextLevel

```lua
void SetCustomXPRequiredToReachNextLevel(handle hTable)
```

Allows definition of atableof hero XP values.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetCustomXPRequiredToReachNextLevel)

---

### SetDamageFilter

```lua
void SetDamageFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the behavior when a unit takes damage. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetDamageFilter)

---

### SetExecuteOrderFilter

```lua
void SetExecuteOrderFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the behavior when a unit picks up an item. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetExecuteOrderFilter)

---

### SetFixedRespawnTime

```lua
void SetFixedRespawnTime(float time)
```

Sets the dota respawn time. -1 for default behavior

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetFixedRespawnTime)

---

### SetFogOfWarDisabled

```lua
void SetFogOfWarDisabled(bool bDisabled)
```

Turn the fog of war on or off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetFogOfWarDisabled)

---

### SetFountainConstantManaRegen

```lua
void SetFountainConstantManaRegen(float flConstantManaRegen)
```

Set the constant rate that the fountain will regen mana. (-1 for default)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetFountainConstantManaRegen)

---

### SetFountainPercentageHealthRegen

```lua
void SetFountainPercentageHealthRegen(float flPercentageHealthRegen)
```

Set the percentage rate that the fountain will regen health. (-1 for default)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetFountainPercentageHealthRegen)

---

### SetFountainPercentageManaRegen

```lua
void SetFountainPercentageManaRegen(float flPercentageManaRegen)
```

Set the percentage rate that the fountain will regen mana. (-1 for default)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetFountainPercentageManaRegen)

---

### SetGoldSoundDisabled

```lua
void SetGoldSoundDisabled(bool bDisabled)
```

Turn the sound when gold is acquired off/on. Takes abool.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetGoldSoundDisabled)

---

### SetHUDVisible

```lua
void SetHUDVisible(int iHUDElement, bool bVisible)
```

Set the HUD element visibility.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetHUDVisible)

---

### SetItemAddedToInventoryFilter

```lua
void SetItemAddedToInventoryFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control when a unit add an item to inventory.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetItemAddedToInventoryFilter)

---

### SetLoseGoldOnDeath

```lua
void SetLoseGoldOnDeath(bool bEnabled)
```

Use to disable gold loss on death.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetLoseGoldOnDeath)

---

### SetMaximumAttackSpeed

```lua
void SetMaximumAttackSpeed(int nMaxSpeed)
```

Set the maximum attack speed for units.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetMaximumAttackSpeed)

---

### SetMinimumAttackSpeed

```lua
void SetMinimumAttackSpeed(int nMinSpeed)
```

Set the minimum attack speed for units.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetMinimumAttackSpeed)

---

### SetModifierGainedFilter

```lua
void SetModifierGainedFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control modifiers that are gained, return false to destroy modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetModifierGainedFilter)

---

### SetModifyExperienceFilter

```lua
void SetModifyExperienceFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the behavior when a hero's experience is modified. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetModifyExperienceFilter)

---

### SetModifyGoldFilter

```lua
void SetModifyGoldFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control the behavior when a hero's gold is modified. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetModifyGoldFilter)

---

### SetOverrideSelectionEntity

```lua
void SetOverrideSelectionEntity(handle unit)
```

Set an override for the default selection entity, instead of each player's hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetOverrideSelectionEntity)

---

### SetPauseEnabled

```lua
void SetPauseEnabled(bool bPause)
```

Allow/Disallow players to pause the game.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetPauseEnabled)

---

### SetRecommendedItemsDisabled

```lua
void SetRecommendedItemsDisabled(bool bDisabled)
```

Turn the panel for showing recommended items at the shop off/on. Takes abool.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetRecommendedItemsDisabled)

---

### SetRemoveIllusionsOnDeath

```lua
void SetRemoveIllusionsOnDeath(bool bRemove)
```

Make it so illusions are immediately removed upon death, rather than sticking around for a few seconds.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetRemoveIllusionsOnDeath)

---

### SetRuneEnabled

```lua
void SetRuneEnabled(int nRune, bool bEnabled)
```

Set if a given type of rune is enabled.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetRuneEnabled)

---

### SetRuneSpawnFilter

```lua
void SetRuneSpawnFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control what rune spawns. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetRuneSpawnFilter)

---

### SetStashPurchasingDisabled

```lua
void SetStashPurchasingDisabled(bool bDisabled)
```

Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetStashPurchasingDisabled)

---

### SetStickyItemDisabled

```lua
void SetStickyItemDisabled(bool bDisabled)
```

Hide the sticky item in the quickbuy.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetStickyItemDisabled)

---

### SetTopBarTeamValue

```lua
void SetTopBarTeamValue(int iTeam, int nValue)
```

Set the team values on the top game bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetTopBarTeamValue)

---

### SetTopBarTeamValuesOverride

```lua
void SetTopBarTeamValuesOverride(bool bOverride)
```

Override the values of the team values on the top game bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetTopBarTeamValuesOverride)

---

### SetTopBarTeamValuesVisible

```lua
void SetTopBarTeamValuesVisible(bool bVisible)
```

Turning on/off the team values on the top game bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetTopBarTeamValuesVisible)

---

### SetTowerBackdoorProtectionEnabled

```lua
void SetTowerBackdoorProtectionEnabled(bool bEnabled)
```

Enables/Disables tower backdoor protection

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetTowerBackdoorProtectionEnabled)

---

### SetTrackingProjectileFilter

```lua
void SetTrackingProjectileFilter(handle hFunction, handle hContext)
```

Set a filter Функция to control when tracking projectiles are launched. (Modify the table and Return true to use new values, return false to cancel the event)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetTrackingProjectileFilter)

---

### SetUnseenFogOfWarEnabled

```lua
void SetUnseenFogOfWarEnabled(bool bEnabled)
```

Enable or disable unseen fog of war. When enabled parts of the map the player has never seen will be completely hidden by fog of war.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetUnseenFogOfWarEnabled)

---

### SetUseCustomHeroLevels

```lua
void SetUseCustomHeroLevels(bool bEnabled)
```

Turn on custom-defined XP values for hero level ups. Thetableshould be defined before switching this on.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTABaseGameMode.SetUseCustomHeroLevels)

---


## CDotaQuest

*Элементов в категории: 7*

### AddSubquest

```lua
void AddSubquest(handle hSubquest)
```

Add a subquest to this quest

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.AddSubquest)

---

### CompleteQuest

```lua
void CompleteQuest()
```

Mark this quest complete

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.CompleteQuest)

---

### GetSubquest

```lua
handle GetSubquest(int nIndex)
```

Finds a subquest from this quest by index

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.GetSubquest)

---

### GetSubquestByName

```lua
handle GetSubquestByName(string pszName)
```

Finds a subquest from this quest by name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.GetSubquestByName)

---

### RemoveSubquest

```lua
void RemoveSubquest(handle hSubquest)
```

Remove a subquest from this quest

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.RemoveSubquest)

---

### SetTextReplaceString

```lua
void SetTextReplaceString(string pszString)
```

Set the text replacestringfor this quest

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.SetTextReplaceString)

---

### SetTextReplaceValue

```lua
void SetTextReplaceValue(int valueSlot, int value)
```

Set a quest value

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaQuest.SetTextReplaceValue)

---


## CDotaSubquestBase

*Элементов в категории: 3*

### CompleteSubquest

```lua
void CompleteSubquest()
```

Mark this subquest complete

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaSubquestBase.CompleteSubquest)

---

### SetTextReplaceString

```lua
void SetTextReplaceString(string pszString)
```

Set the text replacestringfor this subquest

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaSubquestBase.SetTextReplaceString)

---

### SetTextReplaceValue

```lua
void SetTextReplaceValue(int valueSlot, int value)
```

Set a subquest value

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDotaSubquestBase.SetTextReplaceValue)

---


## CPhysicsComponent

*Элементов в категории: 1*

### ExpensiveInstantRayCast

```lua
bool ExpensiveInstantRayCast(Vector Vector_1, Vector Vector_2, handle handle_3)
```

Do an instant (i.e. blocking) Ray Cast. Will do a handle/queue version later. Don't plan to use this for real!

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPhysicsComponent.ExpensiveInstantRayCast)

---


## CPointTemplate

*Элементов в категории: 4*

### DeleteCreatedSpawnGroups

```lua
void DeleteCreatedSpawnGroups()
```

DeleteCreatedSpawnGroups() : Deletes any spawn groups that this point_template has spawned. Note: The point_template will not be deleted by this.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPointTemplate.DeleteCreatedSpawnGroups)

---

### ForceSpawn

```lua
void ForceSpawn()
```

ForceSpawn() : Spawns all of the entities the point_template is pointing at.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPointTemplate.ForceSpawn)

---

### GetSpawnedEntities

```lua
handle GetSpawnedEntities()
```

GetSpawnedEntities() : Get the list of the most recent spawned entities

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPointTemplate.GetSpawnedEntities)

---

### SetSpawnCallback

```lua
void SetSpawnCallback(handle hCallbackFunc, handle hCallbackScope)
```

SetSpawnCallback( hCallbackFunc, hCallbackScope, hCallbackData ) : Set a callback for when the template spawns entities. The spawned entities will be passed in as an array.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPointTemplate.SetSpawnCallback)

---


## CBodyComponent

*Элементов в категории: 12*

### AddImpulseAtPosition

```lua
void AddImpulseAtPosition(Vector Vector_1, Vector Vector_2)
```

Apply an impulse at a worldspace position to the physics

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.AddImpulseAtPosition)

---

### AddVelocity

```lua
void AddVelocity(Vector Vector_1, Vector Vector_2)
```

Add linear and angular velocity to the physics object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.AddVelocity)

---

### DetachFromParent

```lua
void DetachFromParent()
```

Detach from its parent

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.DetachFromParent)

---

### GetSequence

```lua
<unknown> GetSequence()
```

Returns the active sequence

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.GetSequence)

---

### IsAttachedToParent

```lua
bool IsAttachedToParent()
```

Is attached to parent

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.IsAttachedToParent)

---

### LookupSequence

```lua
<unknown> LookupSequence(string string_1)
```

Returns a sequence id given a name

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.LookupSequence)

---

### SequenceDuration

```lua
float SequenceDuration(string string_1)
```

Returns the duration in seconds of the specified sequence

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SequenceDuration)

---

### SetAngularVelocity

```lua
void SetAngularVelocity(Vector Vector_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SetAngularVelocity)

---

### SetAnimation

```lua
void SetAnimation(string string_1)
```

Passstringfor the animation to play on this model

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SetAnimation)

---

### SetBodyGroup

```lua
void SetBodyGroup(string string_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SetBodyGroup)

---

### SetMaterialGroup

```lua
void SetMaterialGroup(utlstringtoken utlstringtoken_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SetMaterialGroup)

---

### SetVelocity

```lua
void SetVelocity(Vector velocity)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBodyComponent.SetVelocity)

---


## CBaseAnimating

*Элементов в категории: 10*

### GetAttachmentAngles

```lua
Vector GetAttachmentAngles(int iAttachment)
```

Get the attachement id's angles as a p,y,rvector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.GetAttachmentAngles)

---

### GetAttachmentOrigin

```lua
Vector GetAttachmentOrigin(int iAttachment)
```

Get the attachement id's originvector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.GetAttachmentOrigin)

---

### GetModelScale

```lua
float GetModelScale()
```

Get scale of entity's model.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.GetModelScale)

---

### IsSequenceFinished

```lua
bool IsSequenceFinished()
```

Ask whether the main sequence is done playing

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.IsSequenceFinished)

---

### ScriptLookupAttachment

```lua
int ScriptLookupAttachment(string pAttachmentName)
```

Get the named attachment id

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.ScriptLookupAttachment)

---

### SetBodygroup

```lua
void SetBodygroup(int iGroup, int iValue)
```

Sets a bodygroup

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.SetBodygroup)

---

### SetModelScale

```lua
void SetModelScale(float scale)
```

Sets the model's scale toscale,so if a unit had its model scale at 1, and you useSetModelScale(10.0), it would set the scale to10.0.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.SetModelScale)

---

### SetPoseParameter

```lua
float SetPoseParameter(string szName, float fValue)
```

Set the specified pose parameter to the specified value

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.SetPoseParameter)

---

### SetSkin

```lua
void SetSkin(int iSkin)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.SetSkin&action=edit&redlink=1)

---

### StopAnimation

```lua
void StopAnimation()
```

Stop the current animation by setting playback rate to 0.0.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CBaseAnimating.StopAnimation&action=edit&redlink=1)

---


## CBaseCombatCharacter

*Элементов в категории: 3*

### GetEquippedWeapons

```lua
table GetEquippedWeapons()
```

GetEquippedWeapons() : Returns an array of all the equipped weapons

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseCombatCharacter.GetEquippedWeapons)

---

### GetWeaponCount

```lua
int GetWeaponCount()
```

GetWeaponCount() : Gets the number of weapons currently equipped

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseCombatCharacter.GetWeaponCount)

---

### ShootPosition

```lua
Vector ShootPosition(int nHand)
```

Returns the shoot position eyes (or hand in VR).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseCombatCharacter.ShootPosition)

---


## ProjectileManager

*Элементов в категории: 6*

### ChangeTrackingProjectileSpeed

```lua
void ChangeTrackingProjectileSpeed(handle hAbility, int Speed)
```

Update speed

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.ChangeTrackingProjectileSpeed&action=edit&redlink=1)

---

### CreateLinearProjectile

```lua
int CreateLinearProjectile(table infoTable)
```

Creates a linear projectile and returns the projectile ID

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.CreateLinearProjectile)

---

### CreateTrackingProjectile

```lua
void CreateTrackingProjectile(handle handle_1)
```

Creates a tracking projectile

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.CreateTrackingProjectile)

---

### DestroyLinearProjectile

```lua
void DestroyLinearProjectile(int int_1)
```

Destroys the linear projectile matching the argument ID

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.DestroyLinearProjectile)

---

### GetLinearProjectileVelocity

```lua
Vector GetLinearProjectileVelocity(int int_1)
```

Returns a vector representing the current velocity of the projectile.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.GetLinearProjectileVelocity)

---

### ProjectileDodge

```lua
void ProjectileDodge(handle handle_1)
```

Makes the specified unit dodge projectiles

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/ProjectileManager.ProjectileDodge)

---


## CBaseTrigger

*Элементов в категории: 3*

### Disable

```lua
void Disable()
```

Disable the trigger

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseTrigger.Disable)

---

### Enable

```lua
void Enable()
```

Enable the trigger

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseTrigger.Enable)

---

### IsTouching

```lua
bool IsTouching(handle hEnt)
```

Checks whether the passed entity is touching the trigger.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseTrigger.IsTouching)

---


## CEnvEntityMaker

*Элементов в категории: 4*

### SpawnEntity

```lua
void SpawnEntity()
```

Create an entity at the location of the maker

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvEntityMaker.SpawnEntity)

---

### SpawnEntityAtEntityOrigin

```lua
void SpawnEntityAtEntityOrigin(handle hEntity)
```

Create an entity at the location of a specified entity instance

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvEntityMaker.SpawnEntityAtEntityOrigin)

---

### SpawnEntityAtLocation

```lua
void SpawnEntityAtLocation(Vector vecAlternateOrigin, Vector vecAlternateAngles)
```

Create an entity at a specified location and orientaton, orientation is Euler angle in degrees (pitch, yaw, roll)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvEntityMaker.SpawnEntityAtLocation)

---

### SpawnEntityAtNamedEntityOrigin

```lua
void SpawnEntityAtNamedEntityOrigin(string pszName)
```

Create an entity at the location of a named entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvEntityMaker.SpawnEntityAtNamedEntityOrigin)

---


## CDOTAVoteSystem

*Элементов в категории: 1*

### StartVote

```lua
void StartVote(handle handle_1)
```

Starts a vote, based upon atableof parameters

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAVoteSystem.StartVote)

---


## CMarkupVolumeTagged

*Элементов в категории: 1*

### HasTag

```lua
bool HasTag(string pszTagName)
```

Does this volume have the given tag.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CMarkupVolumeTagged.HasTag)

---


## CScriptPrecacheContext

*Элементов в категории: 2*

### AddResource

```lua
void AddResource(string string_1)
```

Precaches a specific resource

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptPrecacheContext.AddResource)

---

### GetValue

```lua
table GetValue(string string_1)
```

Reads a spawn key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptPrecacheContext.GetValue)

---


## CScriptKeyValues

*Элементов в категории: 1*

### GetValue

```lua
table GetValue(string string_1)
```

Reads a spawn key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptKeyValues.GetValue)

---


## CScriptParticleManager

*Элементов в категории: 11*

### CreateParticle

```lua
int CreateParticle(string particleName, int particleAttach, handle owningEntity)
```

Creates a new particle effect

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.CreateParticle)

---

### CreateParticleForPlayer

```lua
int CreateParticleForPlayer(string particleName, int particleAttach, handle owningEntity, handle owningPlayer)
```

Creates a new particle effect that only plays for the specified player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.CreateParticleForPlayer)

---

### CreateParticleForTeam

```lua
int CreateParticleForTeam(string string_1, int int_2, handle handle_3, int int_4)
```

Creates a new particle effect that only plays for the specified team

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.CreateParticleForTeam)

---

### DestroyParticle

```lua
void DestroyParticle(int particleID, bool immediately)
```

Destroys particle.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.DestroyParticle)

---

### GetParticleReplacement

```lua
string GetParticleReplacement(string string_1, handle handle_2)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.GetParticleReplacement)

---

### ReleaseParticleIndex

```lua
void ReleaseParticleIndex(int particleId)
```

Frees the specified particle index

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.ReleaseParticleIndex)

---

### SetParticleAlwaysSimulate

```lua
void SetParticleAlwaysSimulate(int int_1)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.SetParticleAlwaysSimulate)

---

### SetParticleControl

```lua
void SetParticleControl(int particleId, int controlIndex, Vector controlData)
```

Set the control point data for a control on a particle effect

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.SetParticleControl)

---

### SetParticleControlEnt

```lua
void SetParticleControlEnt(int int_1, int int_2, handle handle_3, int int_4, string string_5, Vector Vector_6, bool bool_7)
```

No Описание Set

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.SetParticleControlEnt)

---

### SetParticleControlForward

```lua
void SetParticleControlForward(int int_1, int int_2, Vector Vector_3)
```

(int nFXIndex, int nPoint, vForward)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.SetParticleControlForward)

---

### SetParticleControlOrientation

```lua
void SetParticleControlOrientation(int int_1, int int_2, Vector Vector_3, Vector Vector_4, Vector Vector_5)
```

(int nFXIndex, int nPoint, vForward, vRight, vUp)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptParticleManager.SetParticleControlOrientation)

---


## CScriptHeroList

*Элементов в категории: 3*

### GetAllHeroes

```lua
table GetAllHeroes()
```

Returns all the heroes in the world

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptHeroList.GetAllHeroes)

---

### GetHero

```lua
handle GetHero(int heroId)
```

Get the Nth hero in the Hero List

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptHeroList.GetHero)

---

### GetHeroCount

```lua
int GetHeroCount()
```

Returns the number of heroes in the world

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CScriptHeroList.GetHeroCount)

---


## CNativeOutputs

*Элементов в категории: 2*

### AddOutput

```lua
void AddOutput(string string_1, string string_2)
```

Add an output

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CNativeOutputs.AddOutput)

---

### Init

```lua
void Init(int int_1)
```

Initialize with number of outputs

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CNativeOutputs.Init)

---


## CEnvProjectedTexture

*Элементов в категории: 5*

### SetFarRange

```lua
void SetFarRange(float flRange)
```

Set light maximum range

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvProjectedTexture.SetFarRange)

---

### SetLinearAttenuation

```lua
void SetLinearAttenuation(float flAtten)
```

Set light linear attenuation value

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvProjectedTexture.SetLinearAttenuation)

---

### SetNearRange

```lua
void SetNearRange(float flRange)
```

Set light minimum range

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvProjectedTexture.SetNearRange)

---

### SetQuadraticAttenuation

```lua
void SetQuadraticAttenuation(float flAtten)
```

Set light quadratic attenuation value

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvProjectedTexture.SetQuadraticAttenuation)

---

### SetVolumetrics

```lua
void SetVolumetrics(bool bOn, float flIntensity, float flNoise, int nPlanes, float flPlaneOffset)
```

Turn on/off light volumetrics:boolbOn,floatflIntensity,floatflNoise,intnPlanes,floatflPlaneOffset

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CEnvProjectedTexture.SetVolumetrics)

---


## CInfoData

*Элементов в категории: 6*

### QueryColor

```lua
Vector QueryColor(utlstringtoken tok, Vector vDefault)
```

Query color data for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryColor)

---

### QueryFloat

```lua
float QueryFloat(utlstringtoken tok, float flDefault)
```

Queryfloatdata for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryFloat)

---

### QueryInt

```lua
int QueryInt(utlstringtoken tok, int nDefault)
```

Queryintdata for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryInt)

---

### QueryNumber

```lua
float QueryNumber(utlstringtoken tok, float flDefault)
```

Query number data for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryNumber)

---

### QueryString

```lua
string QueryString(utlstringtoken tok, string pDefault)
```

Querystringdata for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryString)

---

### QueryVector

```lua
Vector QueryVector(utlstringtoken tok, Vector vDefault)
```

Queryvectordata for this key

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CInfoData.QueryVector)

---


## CPhysicsProp

*Элементов в категории: 2*

### DisableMotion

```lua
void DisableMotion()
```

Enable motion for the prop

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPhysicsProp.DisableMotion)

---

### EnableMotion

```lua
void EnableMotion()
```

Enable motion for the prop

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPhysicsProp.EnableMotion)

---


## CDOTAGamerules

*Элементов в категории: 71*

### AddMinimapDebugPoint

```lua
void AddMinimapDebugPoint(int int_1, Vector Vector_2, int int_3, int int_4, int int_5, int int_6, float float_7)
```

Add a point on the minimap.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.AddMinimapDebugPoint)

---

### AddMinimapDebugPointForTeam

```lua
void AddMinimapDebugPointForTeam(int int_1, Vector Vector_2, int int_3, int int_4, int int_5, int int_6, float float_7, int int_8)
```

Add a point on the minimap for a specific team.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.AddMinimapDebugPointForTeam)

---

### BeginNightstalkerNight

```lua
void BeginNightstalkerNight(float duration)
```

Begin a temporary Nightstalker night.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.BeginNightstalkerNight&action=edit&redlink=1)

---

### BeginTemporaryNight

```lua
void BeginTemporaryNight(float duration)
```

Begin a temporary night.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.BeginTemporaryNight&action=edit&redlink=1)

---

### Defeated

```lua
void Defeated()
```

Kills the ancient, etc.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.Defeated)

---

### DidMatchSignoutTimeOut

```lua
bool DidMatchSignoutTimeOut()
```

true when we have waited some time after end of the game and not received signout

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.DidMatchSignoutTimeOut)

---

### EnableCustomGameSetupAutoLaunch

```lua
void EnableCustomGameSetupAutoLaunch(bool bool_1)
```

Enabled (true) or disable (false) auto launch for custom game setup.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.EnableCustomGameSetupAutoLaunch)

---

### FinishCustomGameSetup

```lua
void FinishCustomGameSetup()
```

Indicate that the custom game setup phase is complete, and advance to the game.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.FinishCustomGameSetup)

---

### GetCustomGameDifficulty

```lua
int GetCustomGameDifficulty()
```

Returns the difficulty level of the custom game mode

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetCustomGameDifficulty)

---

### GetCustomGameTeamMaxPlayers

```lua
int GetCustomGameTeamMaxPlayers(int int_1)
```

Get whether a team is selectable during game setup

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetCustomGameTeamMaxPlayers)

---

### GetDifficulty

```lua
int GetDifficulty()
```

Returns difficulty level of the custom game mode

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetDifficulty)

---

### GetDOTATime

```lua
float GetDOTATime(bool bool_1, bool bool_2)
```

(b IncludePregameTime b IncludeNegativeTime) Returns the actual DOTA in-game clock time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetDOTATime)

---

### GetDroppedItem

```lua
handle GetDroppedItem(int dropIndex)
```

Gets the Xth dropped item

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetDroppedItem)

---

### GetGameModeEntity

```lua
handle GetGameModeEntity()
```

Get the game mode entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetGameModeEntity)

---

### GetGameSessionConfigValue

```lua
string GetGameSessionConfigValue(string string_1, string string_2)
```

Get a string value from the game session config (map options)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetGameSessionConfigValue)

---

### GetGameTime

```lua
float GetGameTime()
```

Returns the number of seconds elapsed since map start. This time doesn't count up when the game is paused

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetGameTime)

---

### GetMatchSignoutComplete

```lua
bool GetMatchSignoutComplete()
```

Have we received the post match signout message that includes reward information

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetMatchSignoutComplete)

---

### GetNianFightStartTime

```lua
float GetNianFightStartTime()
```

Gets the start time for the Nian fight

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetNianFightStartTime)

---

### GetNianTotalDamageTaken

```lua
int GetNianTotalDamageTaken()
```

For New Bloom, get total damage taken by the Nian / Year Beast

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetNianTotalDamageTaken)

---

### GetPlayerCustomGameAccountRecord

```lua
table GetPlayerCustomGameAccountRecord(int int_1)
```

(Preview/Unreleased) Gets the player's custom game account record, as it looked at the start of this session

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetPlayerCustomGameAccountRecord)

---

### GetTimeOfDay

```lua
float GetTimeOfDay()
```

Get the time of day

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.GetTimeOfDay)

---

### IsDaytime

```lua
bool IsDaytime()
```

Is it day time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.IsDaytime)

---

### IsGamePaused

```lua
bool IsGamePaused()
```

Returns whether the game is paused.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.IsGamePaused)

---

### IsCheatMode

```lua
bool IsCheatMode()
```

which you can use to detect lobbies with cheats enabled or sv_cheats 1.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.IsCheatMode)

---

### IsNightstalkerNight

```lua
bool IsNightstalkerNight()
```

Is it Nightstalker night?

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.IsNightstalkerNight&action=edit&redlink=1)

---

### IsTemporaryNight

```lua
bool IsTemporaryNight()
```

Is it temporarily night?

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.IsTemporaryNight&action=edit&redlink=1)

---

### LockCustomGameSetupTeamAssignment

```lua
void LockCustomGameSetupTeamAssignment(bool bool_1)
```

Lock (true) or unlock (false) team assignemnt. If team assignment is locked players cannot change teams.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.LockCustomGameSetupTeamAssignment)

---

### MakeTeamLose

```lua
void MakeTeamLose(int team)
```

Makes ths specified team lose

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.MakeTeamLose)

---

### NumDroppedItems

```lua
int NumDroppedItems()
```

Returns the number of items currently dropped on the ground

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.NumDroppedItems)

---

### PlayerHasCustomGameHostPrivileges

```lua
bool PlayerHasCustomGameHostPrivileges(handle handle_1)
```

Whether a player has custom game host privileges (shuffle teams, etc.)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.PlayerHasCustomGameHostPrivileges)

---

### Playtesting_UpdateAddOnKeyValues

```lua
void Playtesting_UpdateAddOnKeyValues()
```

Updates custom hero, unit and ability KeyValues in memory with the latest values from disk

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.Playtesting_UpdateAddOnKeyValues)

---

### ResetDefeated

```lua
void ResetDefeated()
```

Restart after killing the ancient, etc.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.ResetDefeated)

---

### ResetToHeroSelection

```lua
void ResetToHeroSelection()
```

Restart the game at hero selection

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.ResetToHeroSelection)

---

### SendCustomMessage

```lua
void SendCustomMessage(string message, int teamID, int unknown(1?))
```

Displays a line of text in the left textbox (where usually deaths/denies/buysbacks are announced). This Функция takes restricted HTML as input! (<br>,<u>,<font>)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SendCustomMessage)

---

### SendCustomMessageToTeam

```lua
void SendCustomMessageToTeam(string string_1, int int_2, int int_3, int int_4)
```

Sends a message on behalf of a player to the specified team.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SendCustomMessageToTeam)

---

### SetCreepMinimapIconScale

```lua
void SetCreepMinimapIconScale(float scale)
```

Scale the creep icons on the minimap.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCreepMinimapIconScale)

---

### SetCustomGameAccountRecordSaveFunction

```lua
void SetCustomGameAccountRecordSaveFunction(handle handle_1, handle handle_2)
```

(Preview/Unreleased) Sets a callback to handle saving custom game account records (callback is passed a Player ID and should return a flat simple table)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameAccountRecordSaveFunction)

---

### SetCustomGameDifficulty

```lua
void SetCustomGameDifficulty(int int_1)
```

Set the difficulty level of the custom game mode

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameDifficulty)

---

### SetCustomGameEndDelay

```lua
void SetCustomGameEndDelay(float delay)
```

Sets the delay time until the game ends

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameEndDelay)

---

### SetCustomGameSetupAutoLaunchDelay

```lua
void SetCustomGameSetupAutoLaunchDelay(float float_1)
```

Set the amount of time to wait for auto launch.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameSetupAutoLaunchDelay)

---

### SetCustomGameSetupRemainingTime

```lua
void SetCustomGameSetupRemainingTime(float float_1)
```

Set the amount of remaining time, in seconds, for custom game setup. 0 = finish immediately, -1 = wait forever

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameSetupRemainingTime)

---

### SetCustomGameSetupTimeout

```lua
void SetCustomGameSetupTimeout(float float_1)
```

Setup (pre-gameplay) phase timeout. 0 = instant, -1 = forever (until FinishCustomGameSetup is called)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameSetupTimeout)

---

### SetCustomGameTeamMaxPlayers

```lua
void SetCustomGameTeamMaxPlayers(int int_1, int int_2)
```

Set whether a team is selectable during game setup

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomGameTeamMaxPlayers)

---

### SetCustomVictoryMessage

```lua
void SetCustomVictoryMessage(string string_1)
```

Sets the victory message.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomVictoryMessage)

---

### SetCustomVictoryMessageDuration

```lua
void SetCustomVictoryMessageDuration(float duration)
```

Sets how long the custom victory message should last

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetCustomVictoryMessageDuration)

---

### SetEventMetadataCustomTable

```lua
bool SetEventMetadataCustomTable(handle handle_1)
```

Event-only ( table hMetadataTable ).

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetEventMetadataCustomTable&action=edit&redlink=1)

---

### SetFirstBloodActive

```lua
void SetFirstBloodActive(bool bool_1)
```

Sets whether First Blood has been triggered.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetFirstBloodActive)

---

### SetGameWinner

```lua
void SetGameWinner(int team)
```

Makes ths specified team win

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetGameWinner)

---

### SetGoldPerTick

```lua
void SetGoldPerTick(int int_1)
```

Set the auto gold increase per timed interval.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetGoldPerTick)

---

### SetGoldTickTime

```lua
void SetGoldTickTime(float float_1)
```

Set the timeinterval between auto gold increases.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetGoldTickTime)

---

### SetHeroMinimapIconScale

```lua
void SetHeroMinimapIconScale(int iconSize)
```

(nMinimapHeroIconSize) - Set the hero minimap icon size.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetHeroMinimapIconScale)

---

### SetHeroRespawnEnabled

```lua
void SetHeroRespawnEnabled(bool canRespawn)
```

Control if the normal DOTA hero respawn rules apply.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetHeroRespawnEnabled)

---

### SetHeroSelectionTime

```lua
void SetHeroSelectionTime(float time)
```

Sets the amount of time players have to pick their hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetHeroSelectionTime)

---

### SetHideKillMessageHeaders

```lua
void SetHideKillMessageHeaders(bool hide)
```

Sets whether or not the kill banners should be hidden

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetHideKillMessageHeaders)

---

### SetNianFightStartTime

```lua
void SetNianFightStartTime(float float_1)
```

Sets the start time for the Nian fight

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetNianFightStartTime)

---

### SetOverlayHealthBarUnit

```lua
void SetOverlayHealthBarUnit(handle unit, int style)
```

Show this unit's health on the overlay health bar

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetOverlayHealthBarUnit)

---

### SetPostGameTime

```lua
void SetPostGameTime(float time)
```

Sets the amount of time players have between the game ending and the server disconnecting them.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetPostGameTime)

---

### SetPreGameTime

```lua
void SetPreGameTime(float time)
```

Sets the amount of time players have between picking their hero and game start.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetPreGameTime)

---

### SetRuneMinimapIconScale

```lua
void SetRuneMinimapIconScale(float scale)
```

Scale the rune icons on the minimap.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetRuneMinimapIconScale)

---

### SetRuneSpawnTime

```lua
void SetRuneSpawnTime(float time)
```

Sets the amount of time between rune spawns.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetRuneSpawnTime)

---

### SetSafeToLeave

```lua
void SetSafeToLeave(bool safeToLeave)
```

Mark this game as safe to leave.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetSafeToLeave)

---

### SetSameHeroSelectionEnabled

```lua
void SetSameHeroSelectionEnabled(bool enabled)
```

When true, players can repeatedly pick the same hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetSameHeroSelectionEnabled)

---

### SetShowcaseTime

```lua
void SetShowcaseTime(float time)
```

Set the duration of the 'radiant versus dire' showcase screen.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetShowcaseTime&action=edit&redlink=1)

---

### SetStartingGold

```lua
void SetStartingGold(int int_1)
```

Set the starting gold amount.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetStartingGold)

---

### SetStrategyTime

```lua
void SetStrategyTime(float time)
```

Set the duration of the strategy phase.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetStrategyTime&action=edit&redlink=1)

---

### SetTimeOfDay

```lua
void SetTimeOfDay(float time)
```

Set the time of day.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetTimeOfDay)

---

### SetTreeRegrowTime

```lua
void SetTreeRegrowTime(float time)
```

Sets the tree regrow time in seconds.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetTreeRegrowTime)

---

### SetUseBaseGoldBountyOnHeroes

```lua
void SetUseBaseGoldBountyOnHeroes(bool bool_1)
```

Heroes will use the basic NPC functionality for determining their bounty, rather than DOTA specific formulas.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetUseBaseGoldBountyOnHeroes)

---

### SetUseCustomHeroXPValues

```lua
void SetUseCustomHeroXPValues(bool bool_1)
```

Allows heroes in the map to give a specific amount of XP (this value must be set).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetUseCustomHeroXPValues)

---

### SetUseUniversalShopMode

```lua
void SetUseUniversalShopMode(bool enabled)
```

When true, all items are available at as long as any shop is in range, including Secret Shop items

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.SetUseUniversalShopMode)

---

### State_Get

```lua
int State_Get()
```

Get the current Gamerules state

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTAGamerules.State_Get)

---


## CToneMapControllerComponent

*Элементов в категории: 6*

### GetBloomScale

```lua
float GetBloomScale()
```

Gets bloomscale for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.GetBloomScale)

---

### GetMaxExposure

```lua
float GetMaxExposure()
```

Gets max exposure for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.GetMaxExposure)

---

### GetMinExposure

```lua
float GetMinExposure()
```

Gets min exposure for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.GetMinExposure)

---

### SetBloomScale

```lua
void SetBloomScale(float float_1)
```

Sets bloom scale for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.SetBloomScale)

---

### SetMaxExposure

```lua
void SetMaxExposure(float float_1)
```

Sets max exposure for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.SetMaxExposure)

---

### SetMinExposure

```lua
void SetMinExposure(float float_1)
```

Sets min exposure for this tonemap controller

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CToneMapControllerComponent.SetMinExposure)

---


## CDebugOverlayScriptHelper

*Элементов в категории: 34*

### Axis

```lua
void Axis(Vector Vector_1, Quaternion Quaternion_2, float float_3, bool bool_4, float float_5)
```

Draws an axis. Specify origin + orientation in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Axis)

---

### Box

```lua
void Box(Vector Vector_1, Vector Vector_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a world-space axis-aligned box. Specify bounds in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Box)

---

### BoxAngles

```lua
void BoxAngles(Vector Vector_1, Vector Vector_2, Vector Vector_3, Quaternion Quaternion_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws an oriented box at the origin. Specify bounds in local space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.BoxAngles)

---

### Capsule

```lua
void Capsule(Vector Vector_1, Quaternion Quaternion_2, float float_3, float float_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws a capsule. Specify base in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Capsule)

---

### Circle

```lua
void Circle(Vector Vector_1, Quaternion Quaternion_2, float float_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws a circle. Specify center in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Circle)

---

### CircleScreenOriented

```lua
void CircleScreenOriented(Vector Vector_1, float float_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a circle oriented to the screen. Specify center in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.CircleScreenOriented)

---

### Cone

```lua
void Cone(Vector Vector_1, Vector Vector_2, float float_3, float float_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws a wireframe cone. Specify endpoint and direction in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Cone)

---

### Cross

```lua
void Cross(Vector Vector_1, float float_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a screen-aligned cross. Specify origin in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Cross)

---

### Cross3D

```lua
void Cross3D(Vector Vector_1, float float_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a world-aligned cross. Specify origin in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Cross3D)

---

### Cross3DOriented

```lua
void Cross3DOriented(Vector Vector_1, Quaternion Quaternion_2, float float_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws an oriented cross. Specify origin in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Cross3DOriented)

---

### DrawTickMarkedLine

```lua
void DrawTickMarkedLine(Vector Vector_1, Vector Vector_2, float float_3, int int_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws a dashed line. Specify endpoint's in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.DrawTickMarkedLine)

---

### EntityAttachments

```lua
void EntityAttachments(ehandle ehandle_1, float float_2, float float_3)
```

Draws the attachments of the entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.EntityAttachments)

---

### EntityAxis

```lua
void EntityAxis(ehandle ehandle_1, float float_2, bool bool_3, float float_4)
```

Draws the axis of the entity origin

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.EntityAxis)

---

### EntityBounds

```lua
void EntityBounds(ehandle ehandle_1, int int_2, int int_3, int int_4, int int_5, bool bool_6, float float_7)
```

Draws bounds of an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.EntityBounds)

---

### EntitySkeleton

```lua
void EntitySkeleton(ehandle ehandle_1, float float_2)
```

Draws the skeleton of the entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.EntitySkeleton)

---

### EntityText

```lua
void EntityText(ehandle ehandle_1, int int_2, string string_3, int int_4, int int_5, int int_6, int int_7, float float_8)
```

Draws text on an entity

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.EntityText)

---

### FilledRect2D

```lua
void FilledRect2D(Vector2D Vector2D_1, Vector2D Vector2D_2, int int_3, int int_4, int int_5, int int_6, float float_7)
```

Draws a screen-space filled 2D rectangle. Coordinates are in pixels.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.FilledRect2D)

---

### HorzArrow

```lua
void HorzArrow(Vector Vector_1, Vector Vector_2, float float_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws a horizontal arrow. Specify endpoint's in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.HorzArrow)

---

### Line

```lua
void Line(Vector Vector_1, Vector Vector_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a line between two point's

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Line)

---

### Line2D

```lua
void Line2D(Vector2D Vector2D_1, Vector2D Vector2D_2, int int_3, int int_4, int int_5, int int_6, float float_7)
```

Draws a line between two point's in screenspace

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Line2D)

---

### PopDebugOverlayScope

```lua
void PopDebugOverlayScope()
```

Pops the identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.PopDebugOverlayScope)

---

### PushAndClearDebugOverlayScope

```lua
void PushAndClearDebugOverlayScope(utlstringtoken utlstringtoken_1)
```

Pushes an identifier used to group overlays. Deletes all existing overlays using this overlay id.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.PushAndClearDebugOverlayScope)

---

### PushDebugOverlayScope

```lua
void PushDebugOverlayScope(utlstringtoken utlstringtoken_1)
```

Pushes an identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.PushDebugOverlayScope)

---

### RemoveAllInScope

```lua
void RemoveAllInScope(utlstringtoken utlstringtoken_1)
```

Removes all overlays marked with a specific identifier, regardless of their lifetime.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.RemoveAllInScope)

---

### SolidCone

```lua
void SolidCone(Vector Vector_1, Vector Vector_2, float float_3, float float_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws a solid cone. Specify endpoint and direction in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.SolidCone)

---

### Sphere

```lua
void Sphere(Vector Vector_1, float float_2, int int_3, int int_4, int int_5, int int_6, bool bool_7, float float_8)
```

Draws a wireframe sphere. Specify center in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Sphere)

---

### SweptBox

```lua
void SweptBox(Vector Vector_1, Vector Vector_2, Vector Vector_3, Vector Vector_4, Quaternion Quaternion_5, int int_6, int int_7, int int_8, int int_9, float float_10)
```

Draws a swept box. Specify endpoint's in world space and the bounds in local space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.SweptBox)

---

### Text

```lua
void Text(Vector Vector_1, int int_2, string string_3, float float_4, int int_5, int int_6, int int_7, int int_8, float float_9)
```

Draws 2D text. Specify origin in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Text)

---

### Texture

```lua
void Texture(string string_1, Vector2D Vector2D_2, Vector2D Vector2D_3, int int_4, int int_5, int int_6, int int_7, Vector2D Vector2D_8, Vector2D Vector2D_9, float float_10)
```

Draws a screen-space texture. Coordinates are in pixels.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Texture)

---

### Triangle

```lua
void Triangle(Vector Vector_1, Vector Vector_2, Vector Vector_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws a filled triangle. Specify vertices in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.Triangle)

---

### UnitTestCycleOverlayRenderType

```lua
void UnitTestCycleOverlayRenderType()
```

Toggles the overlay render type, for unit tests

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.UnitTestCycleOverlayRenderType)

---

### VectorText3D

```lua
void VectorText3D(Vector Vector_1, Quaternion Quaternion_2, string string_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws 3D text. Specify origin + orientation in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.VectorText3D)

---

### VertArrow

```lua
void VertArrow(Vector Vector_1, Vector Vector_2, float float_3, int int_4, int int_5, int int_6, int int_7, bool bool_8, float float_9)
```

Draws a vertical arrow. Specify endpoint's in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.VertArrow)

---

### YawArrow

```lua
void YawArrow(Vector Vector_1, float float_2, float float_3, float float_4, int int_5, int int_6, int int_7, int int_8, bool bool_9, float float_10)
```

Draws a arrow associated with a specific yaw. Specify endpoint's in world space.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDebugOverlayScriptHelper.YawArrow)

---


## CBaseFlex

*Элементов в категории: 2*

### GetCurrentScene

```lua
handle GetCurrentScene()
```

Returns the instance of the oldest active scene entity(if any).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseFlex.GetCurrentScene)

---

### GetSceneByIndex

```lua
handle GetSceneByIndex(int index)
```

Returns the instance of the scene entity at the specified index.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseFlex.GetSceneByIndex)

---


## CSceneEntity

*Элементов в категории: 10*

### AddBroadcastTeamTarget

```lua
void AddBroadcastTeamTarget(int int_1)
```

Adds a team (by index) to the broadcast list

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.AddBroadcastTeamTarget)

---

### Cancel

```lua
void Cancel()
```

Cancel scene playback

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.Cancel)

---

### EstimateLength

```lua
float EstimateLength()
```

Returns length of this scene in seconds.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.EstimateLength)

---

### FindCamera

```lua
handle FindCamera()
```

Get the camera

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.FindCamera)

---

### FindNamedEntity

```lua
handle FindNamedEntity(string string_1)
```

given an entity reference, such as !target, get actual entity from scene object

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.FindNamedEntity)

---

### IsPaused

```lua
bool IsPaused()
```

If this scene is currently paused.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.IsPaused)

---

### IsPlayingBack

```lua
bool IsPlayingBack()
```

If this scene is currently playing.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.IsPlayingBack)

---

### LoadSceneFromString

```lua
bool LoadSceneFromString(string string_1, string string_2)
```

given a dummy scene name and a vcdstring, load the scene

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.LoadSceneFromString)

---

### RemoveBroadcastTeamTarget

```lua
void RemoveBroadcastTeamTarget(int int_1)
```

Removes a team (by index) from the broadcast list

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.RemoveBroadcastTeamTarget)

---

### Start

```lua
void Start(handle handle_1)
```

Start scene playback, takes activatorEntity as param

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CSceneEntity.Start)

---


## GridNav

*Элементов в категории: 12*

### CanFindPath

```lua
bool CanFindPath(Vector Vector_1, Vector Vector_2)
```

Determine if it is possible to reach the specified end point from the specified start point. bool (vStart, vEnd)

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.CanFindPath)

---

### DestroyTreesAroundPoint

```lua
void DestroyTreesAroundPoint(Vector Vector_1, float float_2, bool bool_3)
```

Destroy all trees in the area(vPosition, flRadius, bFullCollision

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.DestroyTreesAroundPoint)

---

### FindPathLength

```lua
float FindPathLength(Vector Vector_1, Vector Vector_2)
```

Find a path between the two points an return the length of the path. If there is not a path between the points the returned value will be -1. float (vStart, vEnd )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.FindPathLength)

---

### GetAllTreesAroundPoint

```lua
table GetAllTreesAroundPoint(Vector Vector_1, float float_2, bool bool_3)
```

Returns a table full of tree HSCRIPTS (vPosition, flRadius, bFullCollision).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.GetAllTreesAroundPoint)

---

### GridPosToWorldCenterX

```lua
float GridPosToWorldCenterX(int int_1)
```

Get the X position of the center of a given X index

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.GridPosToWorldCenterX)

---

### GridPosToWorldCenterY

```lua
float GridPosToWorldCenterY(int int_1)
```

Get the Y position of the center of a given Y index

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.GridPosToWorldCenterY)

---

### IsBlocked

```lua
bool IsBlocked(Vector Vector_1)
```

Checks whether the given position is blocked

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.IsBlocked)

---

### IsNearbyTree

```lua
bool IsNearbyTree(Vector position, float radius, bool bool_3)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.IsNearbyTree)

---

### IsTraversable

```lua
bool IsTraversable(Vector Vector_1)
```

Checks whether the given position is traversable

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.IsTraversable)

---

### RegrowAllTrees

```lua
void RegrowAllTrees()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.RegrowAllTrees)

---

### WorldToGridPosX

```lua
int WorldToGridPosX(float float_1)
```

Get the X index of a given world X position

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.WorldToGridPosX)

---

### WorldToGridPosY

```lua
int WorldToGridPosY(float float_1)
```

Get the Y index of a given world Y position

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/GridNav.WorldToGridPosY)

---


## Convars

*Элементов в категории: 12*

### GetBool

```lua
table GetBool(string variableName)
```

GetBool(name) : returns the convar as a boolean flag.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetBool)

---

### GetCommandClient

```lua
handle GetCommandClient()
```

GetCommandClient() : returns the player who issued this console command.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetCommandClient)

---

### GetDOTACommandClient

```lua
handle GetDOTACommandClient()
```

GetDOTACommandClient() : returns the DOTA player who issued this console command.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetDOTACommandClient)

---

### GetFloat

```lua
table GetFloat(string name)
```

GetFloat(name) : returns the convar as afloat. May returnnilif no such convar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetFloat)

---

### GetInt

```lua
table GetInt(string string_1)
```

GetInt(name) : returns the convar as anint. May returnnilif no such convar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetInt)

---

### GetStr

```lua
table GetStr(string variableName)
```

GetStr(name) : returns the convar as astring. May returnnilif no such convar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.GetStr)

---

### RegisterCommand

```lua
void RegisterCommand(string variableName, handle Функция, string helpText, int flags)
```

RegisterCommand(name, fn, helpString, flags) : register a console command.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.RegisterCommand)

---

### RegisterConvar

```lua
void RegisterConvar(string name, string defaultValue, string helpText, int flags)
```

RegisterConvar(name, defaultValue, helpString, flags): register a new console variable.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.RegisterConvar)

---

### SetBool

```lua
void SetBool(string variableName, bool value)
```

SetBool(name, val) : sets the value of the convar to thebool.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.SetBool)

---

### SetFloat

```lua
void SetFloat(string variableName, float value)
```

SetFloat(name, val) : sets the value of the convar to thefloat.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.SetFloat)

---

### SetInt

```lua
void SetInt(string string_1, int int_2)
```

SetInt(name, val) : sets the value of the convar to theint.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.SetInt)

---

### SetStr

```lua
void SetStr(string string_1, string string_2)
```

SetStr(name, val) : sets the value of the convar to thestring.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Convars.SetStr)

---


## Vector

*Элементов в категории: 13*

### __add

```lua
Vector __add(Vector a, Vector b)
```

Overloaded +. Adds vectors together

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._add)

---

### __div

```lua
Vector __div(Vector a, Vector b)
```

Overloaded /. Divides vectors

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._div)

---

### __eq

```lua
bool __eq(Vector a, Vector b)
```

Overloaded ==. Tests for Equality

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._eq)

---

### __len

```lua
float __len()
```

Overloaded # returns the length of the vector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._len)

---

### __mul

```lua
Vector __mul(Vector a, Vector b)
```

Overloaded * returns the vectors multiplied together

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._mul)

---

### __sub

```lua
Vector __sub(Vector a, Vector b)
```

Overloaded -. Subtracts vectors

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._sub)

---

### __tostring

```lua
string __tostring()
```

Overloaded .. Converts vectors to strings

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._tostring)

---

### __unm

```lua
Vector __unm()
```

Overloaded - operator

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector._unm)

---

### Cross

```lua
Vector Cross(Vector a, Vector b)
```

Cross product of two vectors

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector.Cross)

---

### Dot

```lua
float Dot(Vector a, Vector b)
```

Dot product of two vectors

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector.Dot)

---

### Length

```lua
float Length()
```

Length of the Vector

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector.Length)

---

### Length2D

```lua
float Length2D()
```

Length of the Vector in the XY plane

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector.Length2D)

---

### Normalized

```lua
Vector Normalized()
```

Returns the vector normalized

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Vector.Normalized)

---


## CDOTA_MapTree

*Элементов в категории: 4*

### CutDown

```lua
void CutDown(int TeamNumberKnownTo )
```

Cuts down this tree.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_MapTree.CutDown)

---

### CutDownRegrowAfter

```lua
void CutDownRegrowAfter(float RegrowAfter, int TeamNumberKnownTo )
```

Cuts down this tree. Regrow it after some time

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_MapTree.CutDownRegrowAfter)

---

### GrowBack

```lua
void GrowBack()
```

Grows back the tree if it was cut down.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_MapTree.GrowBack)

---

### IsStanding

```lua
bool IsStanding()
```

Returns true if the tree is standing, false if it has been cut down

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_MapTree.IsStanding)

---


## CDOTA_SimpleObstruction

*Элементов в категории: 2*

### IsEnabled

```lua
bool IsEnabled()
```

Returns whether the obstruction is currently active

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_SimpleObstruction.IsEnabled)

---

### SetEnabled

```lua
void SetEnabled(bool enabled, bool bForce)
```

Enable or disable the obstruction

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_SimpleObstruction.SetEnabled)

---


## CDOTA_Unit_Courier

*Элементов в категории: 1*

### UpgradeToFlyingCourier

```lua
bool UpgradeToFlyingCourier()
```

Upgrade to a flying courier

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Unit_Courier.UpgradeToFlyingCourier)

---


## CDOTA_Ability_DataDriven

*Элементов в категории: 2*

### ApplyDataDrivenModifier

```lua
handle ApplyDataDrivenModifier(handle hCaster, handle hTarget, string pszModifierName, handle hModifierTable)
```

Gets the Attack Capabilities of the unit

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_DataDriven.ApplyDataDrivenModifier)

---

### ApplyDataDrivenThinker

```lua
handle ApplyDataDrivenThinker(handle hCaster, Vector vLocation, string pszModifierName, handle hModifierTable)
```

Applies a data driven thinker at the location

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_DataDriven.ApplyDataDrivenThinker)

---


## CBaseModelEntity

*Элементов в категории: 5*

### SetLightGroup

```lua
void SetLightGroup(string pLightGroup)
```

SetLightGroup( string ): Sets the light group of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseModelEntity.SetLightGroup)

---

### SetModel

```lua
void SetModel(string pModelName)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseModelEntity.SetModel)

---

### SetRenderColor

```lua
void SetRenderColor(int r, int g, int b)
```

SetRenderColor( r, g, b ): Sets the render color of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseModelEntity.SetRenderColor)

---

### SetRenderMode

```lua
void SetRenderMode(int nMode)
```

SetRenderMode( int ): Sets the render mode of the entity.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseModelEntity.SetRenderMode)

---

### SetSize

```lua
void SetSize(Vector mins, Vector maxs)
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CBaseModelEntity.SetSize)

---


## CCustomGameEventManager

*Элементов в категории: 5*

### RegisterListener

```lua
int RegisterListener(string string_1, handle handle_2)
```

( string EventName, func CallbackFunction ) - Register a callback to be called when a particular custom event arrives. Returns a listener ID that can be used to unregister later.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomGameEventManager.RegisterListener)

---

### Send_ServerToAllClients

```lua
void Send_ServerToAllClients(string string_1, handle handle_2)
```

( string EventName, table EventData )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomGameEventManager.Send_ServerToAllClients)

---

### Send_ServerToPlayer

```lua
void Send_ServerToPlayer(handle handle_1, string string_2, handle handle_3)
```

( Entity Player, string EventName, table EventData )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomGameEventManager.Send_ServerToPlayer)

---

### Send_ServerToTeam

```lua
void Send_ServerToTeam(int int_1, string string_2, handle handle_3)
```

( int TeamNumber, string EventName, table EventData )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomGameEventManager.Send_ServerToTeam)

---

### UnregisterListener

```lua
void UnregisterListener(int int_1)
```

( int ListnerID ) - Unregister a specific listener

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomGameEventManager.UnregisterListener)

---


## CCustomNetTableManager

*Элементов в категории: 2*

### GetTableValue

```lua
handle GetTableValue(string string_1, string string_2)
```

( string TableName, string KeyName )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomNetTableManager.GetTableValue)

---

### SetTableValue

```lua
bool SetTableValue(string string_1, string string_2, handle handle_3)
```

( string TableName, string KeyName, script_table Value )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CCustomNetTableManager.SetTableValue)

---


## CDOTATutorial

*Элементов в категории: 25*

### AddBot

```lua
bool AddBot(string string_1, string string_2, string string_3, bool bool_4)
```

Add a computer controlled bot.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.AddBot)

---

### AddQuest

```lua
void AddQuest(string string_1, int int_2, string string_3, string string_4)
```

Add a quest to the quest log

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.AddQuest)

---

### AddShopWhitelistItem

```lua
void AddShopWhitelistItem(string string_1)
```

Add an item to the shop whitelist.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.AddShopWhitelistItem)

---

### CompleteQuest

```lua
void CompleteQuest(string string_1)
```

Complete a quest,

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.CompleteQuest)

---

### CreateLocationTask

```lua
void CreateLocationTask(Vector Vector_1)
```

Add a task to move to a specific location

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.CreateLocationTask)

---

### EnableCreepAggroViz

```lua
void EnableCreepAggroViz(bool bool_1)
```

Alert the player when a creep becomes agro to their hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.EnableCreepAggroViz)

---

### EnablePlayerOffscreenTip

```lua
void EnablePlayerOffscreenTip(bool bool_1)
```

Enable the tip to alert players how to find their hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.EnablePlayerOffscreenTip)

---

### EnableTowerAggroViz

```lua
void EnableTowerAggroViz(bool bool_1)
```

Alert the player when a tower becomes agro to their hero.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.EnableTowerAggroViz)

---

### FinishTutorial

```lua
void FinishTutorial()
```

End the tutorial.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.FinishTutorial)

---

### ForceGameStart

```lua
void ForceGameStart()
```

Force the start of the game.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.ForceGameStart)

---

### GetTimeFrozen

```lua
bool GetTimeFrozen()
```

Is our time frozen?

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.GetTimeFrozen)

---

### IsItemInWhiteList

```lua
bool IsItemInWhiteList(string string_1)
```

Is this item currently in the white list.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.IsItemInWhiteList)

---

### RemoveShopWhitelistItem

```lua
void RemoveShopWhitelistItem(string string_1)
```

Remove an item from the shop whitelist.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.RemoveShopWhitelistItem)

---

### SelectHero

```lua
void SelectHero(string string_1)
```

Select a hero for the local player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SelectHero)

---

### SelectPlayerTeam

```lua
void SelectPlayerTeam(string string_1)
```

Select the team for the local player

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SelectPlayerTeam)

---

### SetItemGuide

```lua
void SetItemGuide(string string_1)
```

Set the current item guide.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetItemGuide)

---

### SetOrModifyPlayerGold

```lua
void SetOrModifyPlayerGold(int int_1, bool bool_2)
```

Set gold amount for the tutorial player. (int) GoldAmount, (bool) true=Set, false=Modify

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetOrModifyPlayerGold)

---

### SetQuickBuy

```lua
void SetQuickBuy(string string_1)
```

Set players quick buy item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetQuickBuy)

---

### SetShopOpen

```lua
void SetShopOpen(bool bool_1)
```

Set the shop open or closed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetShopOpen)

---

### SetTimeFrozen

```lua
void SetTimeFrozen(bool bool_1)
```

Set if we should freeze time or not.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetTimeFrozen)

---

### SetTutorialConvar

```lua
void SetTutorialConvar(string string_1, string string_2)
```

Set a tutorial convar

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetTutorialConvar)

---

### SetTutorialUI

```lua
void SetTutorialUI(int int_1)
```

Set the UI to use a reduced version to focus attention to specific elements.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetTutorialUI)

---

### SetWhiteListEnabled

```lua
void SetWhiteListEnabled(bool bool_1)
```

Set if we should whitelist shop items.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.SetWhiteListEnabled)

---

### StartTutorialMode

```lua
void StartTutorialMode()
```

Initialize Tutorial Mode

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.StartTutorialMode)

---

### UpgradePlayerAbility

```lua
void UpgradePlayerAbility(string string_1)
```

Upgrade a specific ability for the local hero

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTATutorial.UpgradePlayerAbility)

---


## CDOTA_Ability_Lua

*Элементов в категории: 46*

### CastFilterResult

```lua
int CastFilterResult()
```

Determine whether an issued command with no target is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.CastFilterResult)

---

### CastFilterResultLocation

```lua
int CastFilterResultLocation(Vector vLocation)
```

(Vector vLocation) Determine whether an issued command on a location is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.CastFilterResultLocation)

---

### CastFilterResultTarget

```lua
int CastFilterResultTarget(handle hTarget)
```

(HSCRIPT hTarget) Determine whether an issued command on a target is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.CastFilterResultTarget)

---

### GetAssociatedPrimaryAbilities

```lua
string GetAssociatedPrimaryAbilities()
```

Returns abilities that are stolen simultaneously, or otherwise related in functionality.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetAssociatedPrimaryAbilities)

---

### GetAssociatedSecondaryAbilities

```lua
string GetAssociatedSecondaryAbilities()
```

Returns other abilities that are stolen simultaneously, or otherwise related in functionality. Generally hidden abilities.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetAssociatedSecondaryAbilities)

---

### GetBehavior

```lua
int GetBehavior()
```

Return cast behavior type of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetBehavior)

---

### GetCastAnimation

```lua
int GetCastAnimation()
```

Return casting animation of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCastAnimation)

---

### GetCastRange

```lua
int GetCastRange(Vector vLocation, handle hTarget)
```

Return cast range of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCastRange)

---

### GetChannelAnimation

```lua
int GetChannelAnimation()
```

Return channel animation of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetChannelAnimation)

---

### GetChannelledManaCostPerSecond

```lua
int GetChannelledManaCostPerSecond(int iLevel)
```

Return mana cost at the given level per second while channeling (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetChannelledManaCostPerSecond)

---

### GetChannelTime

```lua
float GetChannelTime()
```

Return the channel time of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetChannelTime)

---

### GetConceptRecipientType

```lua
int GetConceptRecipientType()
```

Return who hears speech when this spell is cast.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetConceptRecipientType)

---

### GetCooldown

```lua
float GetCooldown(int iLevel)
```

Return cooldown of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCooldown)

---

### GetCustomCastError

```lua
string GetCustomCastError()
```

Return the error string of a failed command with no target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCustomCastError)

---

### GetCustomCastErrorLocation

```lua
string GetCustomCastErrorLocation(Vector vLocation)
```

(Vector vLocation) Return the error string of a failed command on a location.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCustomCastErrorLocation)

---

### GetCustomCastErrorTarget

```lua
string GetCustomCastErrorTarget(handle hTarget)
```

(HSCRIPT hTarget) Return the error string of a failed command on a target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetCustomCastErrorTarget)

---

### GetGoldCost

```lua
int GetGoldCost(int iLevel)
```

Return gold cost at the given level (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetGoldCost)

---

### GetIntrinsicModifierName

```lua
string GetIntrinsicModifierName()
```

Returns the name of the modifier applied passively by this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetIntrinsicModifierName)

---

### GetManaCost

```lua
int GetManaCost(int iLevel)
```

Return mana cost at the given level (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetManaCost)

---

### GetPlaybackRateOverride

```lua
float GetPlaybackRateOverride()
```

Return the animation rate of the cast animation.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.GetPlaybackRateOverride)

---

### IsHiddenAbilityCastable

```lua
bool IsHiddenAbilityCastable()
```

Returns true if this ability can be used when not on the action panel.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.IsHiddenAbilityCastable)

---

### IsHiddenWhenStolen

```lua
bool IsHiddenWhenStolen()
```

Returns true if this ability is hidden when stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.IsHiddenWhenStolen)

---

### IsRefreshable

```lua
bool IsRefreshable()
```

Returns true if this ability is refreshed by Refresher Orb.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.IsRefreshable)

---

### IsStealable

```lua
bool IsStealable()
```

Returns true if this ability can be stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.IsStealable)

---

### OnAbilityPhaseInterrupted

```lua
void OnAbilityPhaseInterrupted()
```

Cast time did not complete successfully.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnAbilityPhaseInterrupted)

---

### OnAbilityPhaseStart

```lua
bool OnAbilityPhaseStart()
```

Cast time begins (return true for successful cast).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnAbilityPhaseStart)

---

### OnChannelFinish

```lua
void OnChannelFinish(bool bInterrupted)
```

(bool bInterrupted) Channel finished.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnChannelFinish)

---

### OnChannelThink

```lua
void OnChannelThink(float flInterval)
```

(float flInterval) Channeling is taking place.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnChannelThink)

---

### OnHeroCalculateStatBonus

```lua
void OnHeroCalculateStatBonus()
```

Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnHeroCalculateStatBonus)

---

### OnHeroDiedNearby

```lua
void OnHeroDiedNearby(handle unit, handle attacker, handle table)
```

A hero has died in the vicinity (ie Urn), takes table of params.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnHeroDiedNearby)

---

### OnHeroLevelUp

```lua
void OnHeroLevelUp()
```

Caster gained a level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnHeroLevelUp)

---

### OnInventoryContentsChanged

```lua
void OnInventoryContentsChanged()
```

Caster inventory changed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnInventoryContentsChanged)

---

### OnItemEquipped

```lua
void OnItemEquipped(handle hItem)
```

( HSCRIPT hItem ) Caster equipped item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnItemEquipped)

---

### OnOwnerDied

```lua
void OnOwnerDied()
```

Caster died.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnOwnerDied)

---

### OnOwnerSpawned

```lua
void OnOwnerSpawned()
```

Caster respawned or spawned for the first time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnOwnerSpawned)

---

### OnProjectileHit

```lua
bool OnProjectileHit(handle hTarget, Vector vLocation)
```

(HSCRIPT hTarget, Vector vLocation) Projectile has collided with a given target or reached its destination (target is invalid).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnProjectileHit)

---

### OnProjectileHit_ExtraData

```lua
bool OnProjectileHit_ExtraData(handle hTarget, Vector vLocation, handle table)
```

(HSCRIPT hTarget, Vector vLocation, table kv) Projectile has collided with a given target or reached its destination (target is invalid).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnProjectileHit_ExtraData)

---

### OnProjectileThink

```lua
void OnProjectileThink(Vector vLocation)
```

(Vector vLocation) Projectile is actively moving.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnProjectileThink)

---

### OnProjectileThink_ExtraData

```lua
void OnProjectileThink_ExtraData(Vector vLocation, handle table)
```

(Vector vLocation, table kv ) Projectile is actively moving.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnProjectileThink_ExtraData)

---

### OnSpellStart

```lua
void OnSpellStart()
```

Cast time finished, spell effects begin.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnSpellStart)

---

### OnStolen

```lua
void OnStolen(handle hSourceAbility)
```

( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnStolen)

---

### OnToggle

```lua
void OnToggle()
```

Ability is toggled on/off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnToggle)

---

### OnUnStolen

```lua
void OnUnStolen()
```

Special behavior when lost by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnUnStolen)

---

### OnUpgrade

```lua
void OnUpgrade()
```

Ability gained a level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.OnUpgrade)

---

### ProcsMagicStick

```lua
bool ProcsMagicStick()
```

Returns true if this ability will generate magic stick charges for nearby enemies.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.ProcsMagicStick)

---

### SpeakTrigger

```lua
int SpeakTrigger()
```

Return the type of speech used.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Ability_Lua.SpeakTrigger)

---


## CDOTA_CustomUIManager

*Элементов в категории: 4*

### DynamicHud_Create

```lua
void DynamicHud_Create(int int_1, string string_2, string string_3, handle handle_4)
```

Create a new custom UI HUD element for the specified player(s). ( int PlayerID /*-1 means everyone*/, string ElementID /* should be unique */, string LayoutFileName, table DialogVariables /* can be nil */ )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_CustomUIManager.DynamicHud_Create)

---

### DynamicHud_Destroy

```lua
void DynamicHud_Destroy(int int_1, string string_2)
```

Destroy a custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_CustomUIManager.DynamicHud_Destroy)

---

### DynamicHud_SetDialogVariables

```lua
void DynamicHud_SetDialogVariables(int int_1, string string_2, handle handle_3)
```

Add or modify dialog variables for an existing custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID, table DialogVariables )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_CustomUIManager.DynamicHud_SetDialogVariables)

---

### DynamicHud_SetVisible

```lua
void DynamicHud_SetVisible(int int_1, string string_2, bool bool_3)
```

Toggle the visibility of an existing custom hud element ( int PlayerID /*-1 means everyone*/, string ElementID, bool Visible )

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_CustomUIManager.DynamicHud_SetVisible)

---


## CPropHMDAvatar

*Элементов в категории: 1*

### GetVRHand

```lua
handle GetVRHand(int nHandID)
```

Get VR hand by ID

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPropHMDAvatar.GetVRHand)

---


## CPropVRHand

*Элементов в категории: 2*

### GetAttachment

```lua
handle GetAttachment()
```

Get the attachment on this hand

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPropVRHand.GetAttachment)

---

### SetAttachment

```lua
void SetAttachment(handle hAttachment)
```

Set the attachment for this hand

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CPropVRHand.SetAttachment)

---


## CDOTA_Buff

*Элементов в категории: 19*

### AddParticle

```lua
void AddParticle(int i, bool bDestroyImmediately, bool bStatusEffect, int iPriority, bool bHeroEffect, bool bOverheadEffect)
```

Assigns a particle index to a modifier using the booleans on the Функция. The particle disappears when the modifier is removed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.AddParticle)

---

### DecrementStackCount

```lua
void DecrementStackCount()
```

Decrease this modifier's stack count by 1.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.DecrementStackCount)

---

### Destroy

```lua
void Destroy()
```

Run all associated destroy functions, then remove the modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.Destroy)

---

### ForceRefresh

```lua
void ForceRefresh()
```

Run all associated refresh functions on this modifier as if it was re-applied.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.ForceRefresh)

---

### GetAbility

```lua
handle GetAbility()
```

Get the ability that generated the modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetAbility)

---

### GetCaster

```lua
handle GetCaster()
```

Get the owner of the ability responsible for the modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetCaster)

---

### GetClass

```lua
string GetClass()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetClass)

---

### GetCreationTime

```lua
float GetCreationTime()
```

Get the Dota game time that the modifier was created in.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetCreationTime)

---

### GetDieTime

```lua
float GetDieTime()
```

Get the Dota game time that the modifier was expires in.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetDieTime)

---

### GetDuration

```lua
float GetDuration()
```

Get the initial duration of the modifier, usually set via AddModifier() by using {duration = x} as a passed table value, or by using SetDuration(). Returns -1 if no duration is set.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetDuration)

---

### GetElapsedTime

```lua
float GetElapsedTime()
```

Get how many game time seconds have elapsed since the creation of the modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetElapsedTime)

---

### GetName

```lua
string GetName()
```

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetName)

---

### GetParent

```lua
handle GetParent()
```

Get the unit the modifier is parented to.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetParent)

---

### GetRemainingTime

```lua
float GetRemainingTime()
```

Get how many seconds are remaining until the modifier is going to be expired. Returns -1 if no duration is set.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetRemainingTime)

---

### GetStackCount

```lua
int GetStackCount()
```

Get the amount of stacks in the modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.GetStackCount)

---

### IncrementStackCount

```lua
void IncrementStackCount()
```

Increase this modifier's stack count by 1.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.IncrementStackCount)

---

### SetDuration

```lua
void SetDuration(float flDuration, bool bInformClient)
```

Set the duration of the modifier. Causes the animation circle to reset when the duration changes.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.SetDuration)

---

### SetStackCount

```lua
void SetStackCount(int iCount)
```

Sets the amount of stacks this modifier has.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.SetStackCount)

---

### StartIntervalThink

```lua
void StartIntervalThink(float flInterval)
```

Start this modifier's think Функция (OnIntervalThink) with the given interval (float). To stop, call with -1.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Buff.StartIntervalThink)

---


## CDOTA_Modifier_Lua

*Элементов в категории: 32*

### AllowIllusionDuplicate

```lua
bool AllowIllusionDuplicate()
```

True/false if this modifier is active on illusions.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.AllowIllusionDuplicate)

---

### DestroyOnExpire

```lua
bool DestroyOnExpire()
```

True/false if this buff is removed when the duration expires.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.DestroyOnExpire)

---

### GetAttributes

```lua
int GetAttributes()
```

Return the types of attributes applied to this modifier (enum value from DOTAModifierAttribute_t

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAttributes)

---

### GetAuraEntityReject

```lua
bool GetAuraEntityReject(handle hEntity)
```

Return true/false if this entity should receive the aura under specific conditions

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAuraEntityReject)

---

### GetAuraRadius

```lua
int GetAuraRadius()
```

Return the range around the parent this aura tries to apply its buff.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAuraRadius)

---

### GetAuraSearchFlags

```lua
int GetAuraSearchFlags()
```

Return the unit flags this aura respects when placing buffs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAuraSearchFlags)

---

### GetAuraSearchTeam

```lua
int GetAuraSearchTeam()
```

Return the teams this aura applies its buff to.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAuraSearchTeam)

---

### GetAuraSearchType

```lua
int GetAuraSearchType()
```

Return the unit classifications this aura applies its buff to.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetAuraSearchType)

---

### GetEffectAttachType

```lua
int GetEffectAttachType()
```

Return the attach type of the particle system from GetEffectName.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetEffectAttachType)

---

### GetEffectName

```lua
string GetEffectName()
```

Return the name of the particle system that is created while this modifier is active.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetEffectName)

---

### GetHeroEffectName

```lua
string GetHeroEffectName()
```

Return the name of the hero effect particle system that is created while this modifier is active.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetHeroEffectName)

---

### GetModifierAura

```lua
string GetModifierAura()
```

The name of the secondary modifier that will be applied by this modifier (if it is an aura).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetModifierAura)

---

### GetPriority

```lua
int GetPriority()
```

Return the priority of the modifier, see MODIFIER_PRIORITY_*.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetPriority&action=edit&redlink=1)

---

### GetStatusEffectName

```lua
string GetStatusEffectName()
```

Return the name of the status effect particle system that is created while this modifier is active.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetStatusEffectName)

---

### GetTexture

```lua
string GetTexture()
```

Return the name of the buff icon to be shown for this modifier.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.GetTexture)

---

### HeroEffectPriority

```lua
int HeroEffectPriority()
```

Relationship of this hero effect with those from other buffs (higher is more likely to be shown).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.HeroEffectPriority)

---

### IsAura

```lua
bool IsAura()
```

True/false if this modifier is an aura.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsAura)

---

### IsAuraActiveOnDeath

```lua
bool IsAuraActiveOnDeath()
```

True/false if this aura provides buffs when the parent is dead.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsAuraActiveOnDeath)

---

### IsDebuff

```lua
bool IsDebuff()
```

True/false if this modifier should be displayed as a debuff.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsDebuff)

---

### IsHidden

```lua
bool IsHidden()
```

True/false if this modifier should be displayed on the buff bar.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsHidden)

---

### IsPermanent

```lua
bool IsPermanent()
```

True/false if this modifier is permanent.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsPermanent&action=edit&redlink=1)

---

### IsPurgable

```lua
bool IsPurgable()
```

True/false if this modifier can be purged.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsPurgable)

---

### IsPurgeException

```lua
bool IsPurgeException()
```

True/false if this modifier can be purged by strong dispels.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsPurgeException)

---

### IsStunDebuff

```lua
bool IsStunDebuff()
```

True/false if this modifier is considered a stun for purge reasons.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.IsStunDebuff)

---

### OnCreated

```lua
void OnCreated(handle table)
```

Runs when the modifier is created.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnCreated)

---

### OnDestroy

```lua
void OnDestroy()
```

Runs when the modifier is destroyed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnDestroy)

---

### OnIntervalThink

```lua
void OnIntervalThink()
```

Runs when the think interval occurs.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnIntervalThink)

---

### OnRefresh

```lua
void OnRefresh(handle table)
```

Runs when the modifier is refreshed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnRefresh)

---

### OnRemoved

```lua
void OnRemoved()
```

Runs when the modifier is removed, before it is actually removed from the unit (OnDestroy runs after).

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnRemoved&action=edit&redlink=1)

---

### OnStackCountChanged

```lua
void OnStackCountChanged(int iStackCount)
```

Runs when the modifier stack count changed.

[Wiki документация](https://developer.valvesoftware.com/w/index.php?title=Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.OnStackCountChanged&action=edit&redlink=1)

---

### RemoveOnDeath

```lua
bool RemoveOnDeath()
```

True/false if this modifier is removed when the parent dies.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.RemoveOnDeath)

---

### StatusEffectPriority

```lua
int StatusEffectPriority()
```

Relationship of this status effect with those from other buffs (higher is more likely to be shown).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua.StatusEffectPriority)

---


## CDOTA_Modifier_Lua_Horizontal_Motion

*Элементов в категории: 5*

### ApplyHorizontalMotionController

```lua
bool ApplyHorizontalMotionController()
```

Starts the horizontal motion controller effects for this buff. Returns true if successful.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Horizontal_Motion.ApplyHorizontalMotionController)

---

### GetPriority

```lua
int GetPriority()
```

Get the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Horizontal_Motion.GetPriority)

---

### OnHorizontalMotionInterrupted

```lua
void OnHorizontalMotionInterrupted()
```

Called when the motion gets interrupted.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Horizontal_Motion.OnHorizontalMotionInterrupted)

---

### SetPriority

```lua
void SetPriority(int nMotionPriority)
```

Set the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Horizontal_Motion.SetPriority)

---

### UpdateHorizontalMotion

```lua
void UpdateHorizontalMotion(handle me, float dt)
```

Perform any motion from the given interval on the NPC.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Horizontal_Motion.UpdateHorizontalMotion)

---


## CDOTA_Modifier_Lua_Motion_Both

*Элементов в категории: 8*

### ApplyHorizontalMotionController

```lua
bool ApplyHorizontalMotionController()
```

Starts the horizontal motion controller effects for this buff. Returns true if successful.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.ApplyHorizontalMotionController)

---

### ApplyVerticalMotionController

```lua
bool ApplyVerticalMotionController()
```

Starts the vertical motion controller effects for this buff. Returns true if successful.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.ApplyVerticalMotionController)

---

### GetPriority

```lua
int GetPriority()
```

Get the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.GetPriority)

---

### OnHorizontalMotionInterrupted

```lua
void OnHorizontalMotionInterrupted()
```

Called when the motion gets interrupted.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.OnHorizontalMotionInterrupted)

---

### OnVerticalMotionInterrupted

```lua
void OnVerticalMotionInterrupted()
```

Called when the motion gets interrupted.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.OnVerticalMotionInterrupted)

---

### SetPriority

```lua
void SetPriority(int nMotionPriority)
```

Set the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.SetPriority)

---

### UpdateHorizontalMotion

```lua
void UpdateHorizontalMotion(handle me, float dt)
```

Perform any motion from the given interval on the NPC.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.UpdateHorizontalMotion)

---

### UpdateVerticalMotion

```lua
void UpdateVerticalMotion(handle me, float dt)
```

Perform any motion from the given interval on the NPC.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Motion_Both.UpdateVerticalMotion)

---


## CDOTA_Modifier_Lua_Vertical_Motion

*Элементов в категории: 5*

### ApplyVerticalMotionController

```lua
bool ApplyVerticalMotionController()
```

Starts the vertical motion controller effects for this buff. Returns true if successful.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Vertical_Motion.ApplyVerticalMotionController)

---

### GetMotionPriority

```lua
int GetMotionPriority()
```

Get the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Vertical_Motion.GetMotionPriority)

---

### OnVerticalMotionInterrupted

```lua
void OnVerticalMotionInterrupted()
```

Called when the motion gets interrupted.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Vertical_Motion.OnVerticalMotionInterrupted)

---

### SetMotionPriority

```lua
void SetMotionPriority(int nMotionPriority)
```

Set the priority

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Vertical_Motion.SetMotionPriority)

---

### UpdateVerticalMotion

```lua
void UpdateVerticalMotion(handle me, float dt)
```

Perform any motion from the given interval on the NPC.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Modifier_Lua_Vertical_Motion.UpdateVerticalMotion)

---


## CDOTA_Item_Lua

*Элементов в категории: 42*

### CastFilterResult

```lua
int CastFilterResult()
```

Determine whether an issued command with no target is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.CastFilterResult)

---

### CastFilterResultLocation

```lua
int CastFilterResultLocation(Vector vLocation)
```

(Vector vLocation) Determine whether an issued command on a location is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.CastFilterResultLocation)

---

### CastFilterResultTarget

```lua
int CastFilterResultTarget(handle hTarget)
```

(HSCRIPT hTarget) Determine whether an issued command on a target is valid.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.CastFilterResultTarget)

---

### GetAssociatedPrimaryAbilities

```lua
string GetAssociatedPrimaryAbilities()
```

Returns abilities that are stolen simultaneously by Rubick's Spell Steal, or otherwise related in functionality.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetAssociatedPrimaryAbilities)

---

### GetAssociatedSecondaryAbilities

```lua
string GetAssociatedSecondaryAbilities()
```

Returns other abilities that are stolen simultaneously by Rubick's Spell Steal, or otherwise related in functionality. Generally hidden abilities.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetAssociatedSecondaryAbilities)

---

### GetBehavior

```lua
int GetBehavior()
```

Return cast behavior type of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetBehavior)

---

### GetCastRange

```lua
int GetCastRange(Vector vLocation, handle hTarget)
```

Return cast range of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetCastRange)

---

### GetChannelledManaCostPerSecond

```lua
int GetChannelledManaCostPerSecond(int iLevel)
```

Return mana cost at the given level per second while channeling (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetChannelledManaCostPerSecond)

---

### GetChannelTime

```lua
float GetChannelTime()
```

Return the channel time of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetChannelTime)

---

### GetConceptRecipientType

```lua
int GetConceptRecipientType()
```

Return who hears speech when this spell is cast.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetConceptRecipientType)

---

### GetCooldown

```lua
float GetCooldown(int iLevel)
```

Return cooldown of this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetCooldown)

---

### GetCustomCastError

```lua
string GetCustomCastError()
```

Return the error string of a failed command with no target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetCustomCastError)

---

### GetCustomCastErrorLocation

```lua
string GetCustomCastErrorLocation(Vector vLocation)
```

(Vector vLocation) Return the error string of a failed command on a location.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetCustomCastErrorLocation)

---

### GetCustomCastErrorTarget

```lua
string GetCustomCastErrorTarget(handle hTarget)
```

(HSCRIPT hTarget) Return the error string of a failed command on a target.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetCustomCastErrorTarget)

---

### GetGoldCost

```lua
int GetGoldCost(int iLevel)
```

Return gold cost at the given level (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetGoldCost)

---

### GetIntrinsicModifierName

```lua
string GetIntrinsicModifierName()
```

Returns the name of the modifier applied passively by this ability.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetIntrinsicModifierName)

---

### GetManaCost

```lua
int GetManaCost(int iLevel)
```

Return mana cost at the given level (-1 is current).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetManaCost)

---

### GetPlaybackRateOverride

```lua
float GetPlaybackRateOverride()
```

Return the animation rate of the cast animation.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.GetPlaybackRateOverride)

---

### IsHiddenAbilityCastable

```lua
bool IsHiddenAbilityCastable()
```

Returns true if this ability can be used when not on the action panel.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.IsHiddenAbilityCastable)

---

### IsHiddenWhenStolen

```lua
bool IsHiddenWhenStolen()
```

Returns true if this ability is hidden when stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.IsHiddenWhenStolen)

---

### IsRefreshable

```lua
bool IsRefreshable()
```

Returns true if this ability is refreshed by Refresher Orb.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.IsRefreshable)

---

### IsStealable

```lua
bool IsStealable()
```

Returns true if this ability can be stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.IsStealable)

---

### OnAbilityPhaseInterrupted

```lua
void OnAbilityPhaseInterrupted()
```

Cast time did not complete successfully.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnAbilityPhaseInterrupted)

---

### OnAbilityPhaseStart

```lua
bool OnAbilityPhaseStart()
```

Cast time begins (return true for successful cast).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnAbilityPhaseStart)

---

### OnChannelFinish

```lua
void OnChannelFinish(bool bInterrupted)
```

(bool bInterrupted) Channel finished.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnChannelFinish)

---

### OnChannelThink

```lua
void OnChannelThink(float flInterval)
```

(float flInterval) Channeling is taking place.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnChannelThink)

---

### OnHeroCalculateStatBonus

```lua
void OnHeroCalculateStatBonus()
```

Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnHeroCalculateStatBonus)

---

### OnHeroDiedNearby

```lua
void OnHeroDiedNearby(handle unit, handle attacker, handle table)
```

A hero has died in the vicinity (ie Urn), takes table of params.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnHeroDiedNearby)

---

### OnHeroLevelUp

```lua
void OnHeroLevelUp()
```

Caster gained a level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnHeroLevelUp)

---

### OnInventoryContentsChanged

```lua
void OnInventoryContentsChanged()
```

Caster inventory changed.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnInventoryContentsChanged)

---

### OnItemEquipped

```lua
void OnItemEquipped(handle hItem)
```

( HSCRIPT hItem ) Caster equipped item.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnItemEquipped)

---

### OnOwnerDied

```lua
void OnOwnerDied()
```

Caster died.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnOwnerDied)

---

### OnOwnerSpawned

```lua
void OnOwnerSpawned()
```

Caster respawned or spawned for the first time.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnOwnerSpawned)

---

### OnProjectileHit

```lua
bool OnProjectileHit(handle hTarget, Vector vLocation)
```

(HSCRIPT hTarget, Vector vLocation) Projectile has collided with a given target or reached its destination (target is invalid).

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnProjectileHit)

---

### OnProjectileThink

```lua
void OnProjectileThink(Vector vLocation)
```

(Vector vLocation) Projectile is actively moving.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnProjectileThink)

---

### OnSpellStart

```lua
void OnSpellStart()
```

Cast time finished, spell effects begin.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnSpellStart)

---

### OnStolen

```lua
void OnStolen(handle hSourceAbility)
```

( HSCRIPT hAbility ) Special behavior when stolen by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnStolen)

---

### OnToggle

```lua
void OnToggle()
```

Ability is toggled on/off.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnToggle)

---

### OnUnStolen

```lua
void OnUnStolen()
```

Special behavior when lost by Spell Steal.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnUnStolen)

---

### OnUpgrade

```lua
void OnUpgrade()
```

Ability gained a level.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.OnUpgrade)

---

### ProcsMagicStick

```lua
bool ProcsMagicStick()
```

Returns true if this ability will generate magic stick charges for nearby enemies.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.ProcsMagicStick)

---

### SpeakTrigger

```lua
int SpeakTrigger()
```

Return the type of speech used.

[Wiki документация](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/CDOTA_Item_Lua.SpeakTrigger)

---


## AbilityLearnResult_t

*Элементов в категории: 5*

### ABILITY_CAN_BE_UPGRADED

```lua
0
```

---

### ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE

```lua
1
```

---

### ABILITY_CANNOT_BE_UPGRADED_AT_MAX

```lua
2
```

---

### ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL

```lua
3
```

---

### ABILITY_NOT_LEARNABLE

```lua
4
```

---


## Attributes

*Элементов в категории: 5*

### DOTA_ATTRIBUTE_INVALID

```lua
-1
```

---

### DOTA_ATTRIBUTE_STRENGTH

```lua
0
```

Strength attribute.

---

### DOTA_ATTRIBUTE_AGILITY

```lua
1
```

Agility attribute.

---

### DOTA_ATTRIBUTE_INTELLECT

```lua
2
```

Intelligence attribute.

---

### DOTA_ATTRIBUTE_MAX

```lua
3
```

---


## DAMAGE_TYPES

*Элементов в категории: 6*

### DAMAGE_TYPE_NONE

```lua
0
```

---

### DAMAGE_TYPE_PHYSICAL

```lua
1
```

Physical, reduced by armor.

---

### DAMAGE_TYPE_MAGICAL

```lua
2
```

Magical, reduced by magic resistance.

---

### DAMAGE_TYPE_PURE

```lua
4
```

Pure, not reduced by anything.

---

### DAMAGE_TYPE_ALL

```lua
7
```

---

### DAMAGE_TYPE_HP_REMOVAL

```lua
8
```

Deprecated.

---


## DOTAAbilitySpeakTrigger_t

*Элементов в категории: 2*

### DOTA_ABILITY_SPEAK_START_ACTION_PHASE

```lua
0
```

---

### DOTA_ABILITY_SPEAK_CAST

```lua
1
```

---


## DOTADamageFlag_t

*Элементов в категории: 11*

### DOTA_DAMAGE_FLAG_NONE

```lua
0
```

---

### DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR

```lua
1
```

---

### DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR

```lua
2
```

---

### DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY

```lua
4
```

---

### DOTA_DAMAGE_FLAG_BYPASSES_BLOCK

```lua
8
```

---

### DOTA_DAMAGE_FLAG_REFLECTION

```lua
16
```

---

### DOTA_DAMAGE_FLAG_HPLOSS

```lua
32
```

---

### DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT

```lua
64
```

---

### DOTA_DAMAGE_FLAG_NON_LETHAL

```lua
128
```

---

### DOTA_DAMAGE_FLAG_USE_COMBAT_PROFICIENCY

```lua
256
```

---

### DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS

```lua
512
```

---


## DOTAHUDVisibility_t

*Элементов в категории: 14*

### DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY

```lua
0
```

---

### DOTA_HUD_VISIBILITY_TOP_HEROES

```lua
1
```

---

### DOTA_HUD_VISIBILITY_TOP_SCOREBOARD

```lua
2
```

---

### DOTA_HUD_VISIBILITY_ACTION_PANEL

```lua
3
```

---

### DOTA_HUD_VISIBILITY_ACTION_MINIMAP

```lua
4
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_PANEL

```lua
5
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_SHOP

```lua
6
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_ITEMS

```lua
7
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY

```lua
8
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_COURIER

```lua
9
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_PROTECT

```lua
10
```

---

### DOTA_HUD_VISIBILITY_INVENTORY_GOLD

```lua
11
```

---

### DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS

```lua
12
```

---

### DOTA_HUD_VISIBILITY_COUNT

```lua
13
```

---


## DOTAInventoryFlags_t

*Элементов в категории: 7*

### DOTA_INVENTORY_ALLOW_NONE

```lua
0
```

---

### DOTA_INVENTORY_ALLOW_MAIN

```lua
1
```

---

### DOTA_INVENTORY_ALLOW_STASH

```lua
2
```

---

### DOTA_INVENTORY_ALL_ACCESS

```lua
3
```

---

### DOTA_INVENTORY_ALLOW_DROP_ON_GROUND

```lua
4
```

---

### DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN

```lua
8
```

---

### DOTA_INVENTORY_LIMIT_DROP_ON_GROUND

```lua
16
```

---


## DOTAMinimapEvent_t

*Элементов в категории: 11*

### DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK

```lua
2
```

---

### DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK

```lua
4
```

---

### DOTA_MINIMAP_EVENT_BASE_GLYPHED

```lua
8
```

---

### DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK

```lua
16
```

---

### DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING

```lua
32
```

---

### DOTA_MINIMAP_EVENT_TEAMMATE_DIED

```lua
64
```

---

### DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE

```lua
128
```

---

### DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED

```lua
256
```

---

### DOTA_MINIMAP_EVENT_HINT_LOCATION

```lua
512
```

---

### DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING

```lua
1024
```

---

### DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING

```lua
2048
```

---


## DOTAModifierAttribute_t

*Элементов в категории: 4*

### MODIFIER_ATTRIBUTE_NONE

```lua
0
```

---

### MODIFIER_ATTRIBUTE_PERMANENT

```lua
1
```

Modifier passively remains until strictly removed.

---

### MODIFIER_ATTRIBUTE_MULTIPLE

```lua
2
```

Allows modifier to stack with itself.

---

### MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE

```lua
4
```

Allows modifier to be assigned to invulnerable entities.

---


## DOTAMusicStatus_t

*Элементов в категории: 6*

### DOTA_MUSIC_STATUS_NONE

```lua
0
```

---

### DOTA_MUSIC_STATUS_EXPLORATION

```lua
1
```

---

### DOTA_MUSIC_STATUS_BATTLE

```lua
2
```

---

### DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION

```lua
3
```

---

### DOTA_MUSIC_STATUS_DEAD

```lua
4
```

---

### DOTA_MUSIC_STATUS_LAST

```lua
5
```

---


## DOTASlotType_t

*Элементов в категории: 48*

### DOTA_LOADOUT_TYPE_INVALID

```lua
-1
```

---

### DOTA_LOADOUT_TYPE_WEAPON

```lua
0
```

---

### DOTA_LOADOUT_TYPE_OFFHAND_WEAPON

```lua
1
```

---

### DOTA_LOADOUT_TYPE_WEAPON2

```lua
2
```

---

### DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2

```lua
3
```

---

### DOTA_LOADOUT_TYPE_HEAD

```lua
4
```

---

### DOTA_LOADOUT_TYPE_SHOULDER

```lua
5
```

---

### DOTA_LOADOUT_TYPE_ARMS

```lua
6
```

---

### DOTA_LOADOUT_TYPE_ARMOR

```lua
7
```

---

### DOTA_LOADOUT_TYPE_BELT

```lua
8
```

---

### DOTA_LOADOUT_TYPE_NECK

```lua
9
```

---

### DOTA_LOADOUT_TYPE_BACK

```lua
10
```

---

### DOTA_LOADOUT_TYPE_LEGS

```lua
11
```

---

### DOTA_LOADOUT_TYPE_GLOVES

```lua
12
```

---

### DOTA_LOADOUT_TYPE_TAIL

```lua
13
```

---

### DOTA_LOADOUT_TYPE_MISC

```lua
14
```

---

### DOTA_LOADOUT_TYPE_BODY_HEAD

```lua
15
```

---

### DOTA_LOADOUT_TYPE_MOUNT

```lua
16
```

---

### DOTA_LOADOUT_TYPE_SUMMON

```lua
17
```

---

### DOTA_LOADOUT_TYPE_SHAPESHIFT

```lua
18
```

---

### DOTA_LOADOUT_TYPE_TAUNT

```lua
19
```

---

### DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS

```lua
20
```

---

### DOTA_LOADOUT_TYPE_ABILITY_ATTACK

```lua
21
```

---

### DOTA_LOADOUT_TYPE_ABILITY1

```lua
22
```

---

### DOTA_LOADOUT_TYPE_ABILITY2

```lua
23
```

---

### DOTA_LOADOUT_TYPE_ABILITY3

```lua
24
```

---

### DOTA_LOADOUT_TYPE_ABILITY4

```lua
25
```

---

### DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE

```lua
26
```

---

### DOTA_LOADOUT_TYPE_VOICE

```lua
27
```

---

### DOTA_LOADOUT_TYPE_ACTION_ITEM

```lua
28
```

---

### DOTA_PLAYER_LOADOUT_START

```lua
28
```

---

### DOTA_LOADOUT_TYPE_COURIER

```lua
29
```

---

### DOTA_LOADOUT_TYPE_ANNOUNCER

```lua
30
```

---

### DOTA_LOADOUT_TYPE_MEGA_KILLS

```lua
31
```

---

### DOTA_LOADOUT_TYPE_MUSIC

```lua
32
```

---

### DOTA_LOADOUT_TYPE_WARD

```lua
33
```

---

### DOTA_LOADOUT_TYPE_HUD_SKIN

```lua
34
```

---

### DOTA_LOADOUT_TYPE_LOADING_SCREEN

```lua
35
```

---

### DOTA_LOADOUT_TYPE_WEATHER

```lua
36
```

---

### DOTA_LOADOUT_TYPE_HEROIC_STATUE

```lua
37
```

---

### DOTA_LOADOUT_TYPE_MULTIKILL_BANNER

```lua
38
```

---

### DOTA_LOADOUT_TYPE_CURSOR_PACK

```lua
39
```

---

### DOTA_LOADOUT_TYPE_TELEPORT_EFFECT

```lua
40
```

---

### DOTA_LOADOUT_TYPE_BLINK_EFFECT

```lua
41
```

---

### DOTA_LOADOUT_TYPE_TEAM_SHOWCASE

```lua
42
```

---

### DOTA_PLAYER_LOADOUT_END

```lua
42
```

---

### DOTA_LOADOUT_TYPE_NONE

```lua
43
```

---

### DOTA_LOADOUT_TYPE_COUNT

```lua
44
```

---


## DOTASpeechType_t

*Элементов в категории: 10*

### DOTA_SPEECH_USER_INVALID

```lua
0
```

---

### DOTA_SPEECH_USER_SINGLE

```lua
1
```

---

### DOTA_SPEECH_USER_TEAM

```lua
2
```

---

### DOTA_SPEECH_USER_TEAM_NEARBY

```lua
3
```

---

### DOTA_SPEECH_USER_NEARBY

```lua
4
```

---

### DOTA_SPEECH_USER_ALL

```lua
5
```

---

### DOTA_SPEECH_GOOD_TEAM

```lua
6
```

---

### DOTA_SPEECH_BAD_TEAM

```lua
7
```

---

### DOTA_SPEECH_SPECTATOR

```lua
8
```

---

### DOTA_SPEECH_RECIPIENT_TYPE_MAX

```lua
9
```

---


## DOTATeam_t

*Элементов в категории: 17*

### DOTA_TEAM_FIRST

```lua
2
```

---

### DOTA_TEAM_GOODGUYS

```lua
2
```

Radiant team.

---

### DOTA_TEAM_BADGUYS

```lua
3
```

Dire team.

---

### DOTA_TEAM_NEUTRALS

```lua
4
```

Neutral.

---

### DOTA_TEAM_NOTEAM

```lua
5
```

---

### DOTA_TEAM_CUSTOM_1

```lua
6
```

---

### DOTA_TEAM_CUSTOM_MIN

```lua
6
```

---

### DOTA_TEAM_CUSTOM_2

```lua
7
```

---

### DOTA_TEAM_CUSTOM_3

```lua
8
```

---

### DOTA_TEAM_CUSTOM_COUNT

```lua
8
```

---

### DOTA_TEAM_CUSTOM_4

```lua
9
```

---

### DOTA_TEAM_CUSTOM_5

```lua
10
```

---

### DOTA_TEAM_CUSTOM_6

```lua
11
```

---

### DOTA_TEAM_CUSTOM_7

```lua
12
```

---

### DOTA_TEAM_CUSTOM_8

```lua
13
```

---

### DOTA_TEAM_CUSTOM_MAX

```lua
13
```

---

### DOTA_TEAM_COUNT

```lua
14
```

---


## DOTAUnitAttackCapability_t

*Элементов в категории: 3*

### DOTA_UNIT_CAP_NO_ATTACK

```lua
0
```

Unit is unable to attack in any way.

---

### DOTA_UNIT_CAP_MELEE_ATTACK

```lua
1
```

Unit attacks are classified as melee (no uphill miss chance, attacks on enemies that are 350 over the attack range automatically miss).

---

### DOTA_UNIT_CAP_RANGED_ATTACK

```lua
2
```

Unit attacks are classified as ranged (can miss on uphill, disjointable, has projectile).

---


## DOTAUnitMoveCapability_t

*Элементов в категории: 3*

### DOTA_UNIT_CAP_MOVE_NONE

```lua
0
```

Unit cannot move in any way.

---

### DOTA_UNIT_CAP_MOVE_GROUND

```lua
1
```

Unit move while being obstructed by the terrain.

---

### DOTA_UNIT_CAP_MOVE_FLY

```lua
2
```

Unit ignores terrain.

---


## DOTA_UNIT_ORDERS

*Элементов в категории: 27*

### DOTA_UNIT_ORDER_NONE

```lua
0
```

---

### DOTA_UNIT_ORDER_MOVE_TO_POSITION

```lua
1
```

---

### DOTA_UNIT_ORDER_MOVE_TO_TARGET

```lua
2
```

---

### DOTA_UNIT_ORDER_ATTACK_MOVE

```lua
3
```

---

### DOTA_UNIT_ORDER_ATTACK_TARGET

```lua
4
```

---

### DOTA_UNIT_ORDER_CAST_POSITION

```lua
5
```

---

### DOTA_UNIT_ORDER_CAST_TARGET

```lua
6
```

---

### DOTA_UNIT_ORDER_CAST_TARGET_TREE

```lua
7
```

---

### DOTA_UNIT_ORDER_CAST_NO_TARGET

```lua
8
```

---

### DOTA_UNIT_ORDER_CAST_TOGGLE

```lua
9
```

---

### DOTA_UNIT_ORDER_HOLD_POSITION

```lua
10
```

---

### DOTA_UNIT_ORDER_TRAIN_ABILITY

```lua
11
```

---

### DOTA_UNIT_ORDER_DROP_ITEM

```lua
12
```

---

### DOTA_UNIT_ORDER_GIVE_ITEM

```lua
13
```

---

### DOTA_UNIT_ORDER_PICKUP_ITEM

```lua
14
```

---

### DOTA_UNIT_ORDER_PICKUP_RUNE

```lua
15
```

---

### DOTA_UNIT_ORDER_PURCHASE_ITEM

```lua
16
```

---

### DOTA_UNIT_ORDER_SELL_ITEM

```lua
17
```

---

### DOTA_UNIT_ORDER_DISASSEMBLE_ITEM

```lua
18
```

---

### DOTA_UNIT_ORDER_MOVE_ITEM

```lua
19
```

---

### DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO

```lua
20
```

---

### DOTA_UNIT_ORDER_STOP

```lua
21
```

---

### DOTA_UNIT_ORDER_TAUNT

```lua
22
```

---

### DOTA_UNIT_ORDER_BUYBACK

```lua
23
```

---

### DOTA_UNIT_ORDER_GLYPH

```lua
24
```

---

### DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH

```lua
25
```

---

### DOTA_UNIT_ORDER_CAST_RUNE

```lua
26
```

---


## DOTA_ABILITY_BEHAVIOR

*Элементов в категории: 32*

### DOTA_ABILITY_BEHAVIOR_NONE

```lua
0
```

---

### DOTA_ABILITY_BEHAVIOR_HIDDEN

```lua
1
```

Ability doesn't appear on the HUD.

---

### DOTA_ABILITY_BEHAVIOR_PASSIVE

```lua
2
```

Ability is classified as passive, and cannot be pressed.

---

### DOTA_ABILITY_BEHAVIOR_NO_TARGET

```lua
4
```

Ability fires immediately when pressed.

---

### DOTA_ABILITY_BEHAVIOR_UNIT_TARGET

```lua
8
```

Ability needs a unit target to be cast.

---

### DOTA_ABILITY_BEHAVIOR_POINT

```lua
16
```

Ability needs a target point to be cast.

---

### DOTA_ABILITY_BEHAVIOR_AOE

```lua
32
```

Ability is considered an AoE ability, respecting "AOERadius" KV when drawing the AoE overlay.

---

### DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE

```lua
64
```

Ability cannot be skilled.

---

### DOTA_ABILITY_BEHAVIOR_CHANNELLED

```lua
128
```

Ability is considered a channeling ability.

---

### DOTA_ABILITY_BEHAVIOR_ITEM

```lua
256
```

---

### DOTA_ABILITY_BEHAVIOR_TOGGLE

```lua
512
```

Ability can be toggled on and off.

---

### DOTA_ABILITY_BEHAVIOR_DIRECTIONAL

```lua
1024
```

---

### DOTA_ABILITY_BEHAVIOR_IMMEDIATE

```lua
2048
```

Ability ignores cast points and is fired as soon as the skill is pressed.

---

### DOTA_ABILITY_BEHAVIOR_AUTOCAST

```lua
4096
```

Ability can be set to auto cast.

---

### DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET

```lua
8192
```

---

### DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT

```lua
16384
```

---

### DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET

```lua
32768
```

---

### DOTA_ABILITY_BEHAVIOR_AURA

```lua
65536
```

Ability is considered an aura.

---

### DOTA_ABILITY_BEHAVIOR_ATTACK

```lua
131072
```

---

### DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT

```lua
262144
```

After casting that ability, the caster won't resume its last order.

---

### DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES

```lua
524288
```

Ability cannot be cast while rooted.

---

### DOTA_ABILITY_BEHAVIOR_UNRESTRICTED

```lua
1048576
```

---

### DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE

```lua
2097152
```

---

### DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL

```lua
4194304
```

---

### DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT

```lua
8388608
```

Ability doesn't stop the caster to be used.

---

### DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET

```lua
16777216
```

---

### DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK

```lua
33554432
```

After using ability, caster won't proceed to attack the nearby enemy (even if set otherwise in options)

---

### DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN

```lua
67108864
```

---

### DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING

```lua
134217728
```

Ability ignores backswing animation.

---

### DOTA_ABILITY_BEHAVIOR_RUNE_TARGET

```lua
268435456
```

Ability can target runes.

---

### DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL

```lua
536870912
```

Ability can be used without cancelling the current channel.

---

### DOTA_ABILITY_LAST_BEHAVIOR

```lua
536870912
```

---


## DOTA_HeroPickState

*Элементов в категории: 56*

### DOTA_HEROPICK_STATE_NONE

```lua
0
```

---

### DOTA_HEROPICK_STATE_AP_SELECT

```lua
1
```

---

### DOTA_HEROPICK_STATE_SD_SELECT

```lua
2
```

---

### DOTA_HEROPICK_STATE_INTRO_SELECT

```lua
3
```

---

### DOTA_HEROPICK_STATE_RD_SELECT

```lua
4
```

---

### DOTA_HEROPICK_STATE_CM_INTRO

```lua
5
```

---

### DOTA_HEROPICK_STATE_CM_CAPTAINPICK

```lua
6
```

---

### DOTA_HEROPICK_STATE_CM_BAN1

```lua
7
```

---

### DOTA_HEROPICK_STATE_CM_BAN2

```lua
8
```

---

### DOTA_HEROPICK_STATE_CM_BAN3

```lua
9
```

---

### DOTA_HEROPICK_STATE_CM_BAN4

```lua
10
```

---

### DOTA_HEROPICK_STATE_CM_BAN5

```lua
11
```

---

### DOTA_HEROPICK_STATE_CM_BAN6

```lua
12
```

---

### DOTA_HEROPICK_STATE_CM_BAN7

```lua
13
```

---

### DOTA_HEROPICK_STATE_CM_BAN8

```lua
14
```

---

### DOTA_HEROPICK_STATE_CM_BAN9

```lua
15
```

---

### DOTA_HEROPICK_STATE_CM_BAN10

```lua
16
```

---

### DOTA_HEROPICK_STATE_CM_SELECT1

```lua
17
```

---

### DOTA_HEROPICK_STATE_CM_SELECT2

```lua
18
```

---

### DOTA_HEROPICK_STATE_CM_SELECT3

```lua
19
```

---

### DOTA_HEROPICK_STATE_CM_SELECT4

```lua
20
```

---

### DOTA_HEROPICK_STATE_CM_SELECT5

```lua
21
```

---

### DOTA_HEROPICK_STATE_CM_SELECT6

```lua
22
```

---

### DOTA_HEROPICK_STATE_CM_SELECT7

```lua
23
```

---

### DOTA_HEROPICK_STATE_CM_SELECT8

```lua
24
```

---

### DOTA_HEROPICK_STATE_CM_SELECT9

```lua
25
```

---

### DOTA_HEROPICK_STATE_CM_SELECT10

```lua
26
```

---

### DOTA_HEROPICK_STATE_CM_PICK

```lua
27
```

---

### DOTA_HEROPICK_STATE_AR_SELECT

```lua
28
```

---

### DOTA_HEROPICK_STATE_MO_SELECT

```lua
29
```

---

### DOTA_HEROPICK_STATE_FH_SELECT

```lua
30
```

---

### DOTA_HEROPICK_STATE_CD_INTRO

```lua
31
```

---

### DOTA_HEROPICK_STATE_CD_CAPTAINPICK

```lua
32
```

---

### DOTA_HEROPICK_STATE_CD_BAN1

```lua
33
```

---

### DOTA_HEROPICK_STATE_CD_BAN2

```lua
34
```

---

### DOTA_HEROPICK_STATE_CD_BAN3

```lua
35
```

---

### DOTA_HEROPICK_STATE_CD_BAN4

```lua
36
```

---

### DOTA_HEROPICK_STATE_CD_BAN5

```lua
37
```

---

### DOTA_HEROPICK_STATE_CD_BAN6

```lua
38
```

---

### DOTA_HEROPICK_STATE_CD_SELECT1

```lua
39
```

---

### DOTA_HEROPICK_STATE_CD_SELECT2

```lua
40
```

---

### DOTA_HEROPICK_STATE_CD_SELECT3

```lua
41
```

---

### DOTA_HEROPICK_STATE_CD_SELECT4

```lua
42
```

---

### DOTA_HEROPICK_STATE_CD_SELECT5

```lua
43
```

---

### DOTA_HEROPICK_STATE_CD_SELECT6

```lua
44
```

---

### DOTA_HEROPICK_STATE_CD_SELECT7

```lua
45
```

---

### DOTA_HEROPICK_STATE_CD_SELECT8

```lua
46
```

---

### DOTA_HEROPICK_STATE_CD_SELECT9

```lua
47
```

---

### DOTA_HEROPICK_STATE_CD_SELECT10

```lua
48
```

---

### DOTA_HEROPICK_STATE_CD_PICK

```lua
49
```

---

### DOTA_HEROPICK_STATE_BD_SELECT

```lua
50
```

---

### DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT

```lua
51
```

---

### DOTA_HERO_PICK_STATE_ARDM_SELECT

```lua
52
```

---

### DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT

```lua
53
```

---

### DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT

```lua
54
```

---

### DOTA_HEROPICK_STATE_COUNT

```lua
55
```

---


## DOTA_MOTION_CONTROLLER_PRIORITY

*Элементов в категории: 5*

### DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST

```lua
0
```

---

### DOTA_MOTION_CONTROLLER_PRIORITY_LOW

```lua
1
```

---

### DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM

```lua
2
```

---

### DOTA_MOTION_CONTROLLER_PRIORITY_HIGH

```lua
3
```

---

### DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST

```lua
4
```

---


## DOTA_RUNES

*Элементов в категории: 14*

### DOTA_RUNE_INVALID

```lua
-1
```

---

### DOTA_RUNE_DOUBLEDAMAGE

```lua
0
```

---

### DOTA_RUNE_HASTE

```lua
1
```

---

### DOTA_RUNE_ILLUSION

```lua
2
```

---

### DOTA_RUNE_INVISIBILITY

```lua
3
```

---

### DOTA_RUNE_REGENERATION

```lua
4
```

---

### DOTA_RUNE_BOUNTY

```lua
5
```

---

### DOTA_RUNE_COUNT

```lua
6
```

---

### DOTA_RUNE_HAUNTED

```lua
7
```

---

### DOTA_RUNE_SPOOKY

```lua
8
```

---

### DOTA_RUNE_RAPIER

```lua
9
```

---

### DOTA_RUNE_TURBO

```lua
10
```

---

### DOTA_RUNE_MYSTERY

```lua
11
```

---

### DOTA_HALLOWEEN_RUNE_COUNT

```lua
12
```

---


## DOTA_UNIT_TARGET_FLAGS

*Элементов в категории: 20*

### DOTA_UNIT_TARGET_FLAG_NONE

```lua
0
```

No special flag rules.

---

### DOTA_UNIT_TARGET_FLAG_RANGED_ONLY

```lua
2
```

Targets only ranged units and heroes.

---

### DOTA_UNIT_TARGET_FLAG_MELEE_ONLY

```lua
4
```

Targets only melee units and heroes.

---

### DOTA_UNIT_TARGET_FLAG_DEAD

```lua
8
```

Targets dead units and heroes as well.

---

### DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES

```lua
16
```

Targets magic immune enemies as well.

---

### DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES

```lua
32
```

Targets non-magic immune allies as well.

---

### DOTA_UNIT_TARGET_FLAG_INVULNERABLE

```lua
64
```

Targets invulnerable units/heroes as well.

---

### DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE

```lua
128
```

Targets only those that are visible through the fog of war.

---

### DOTA_UNIT_TARGET_FLAG_NO_INVIS

```lua
256
```

Targets only those that are not invisible.

---

### DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS

```lua
512
```

Targets only those that are not considered ancients.

---

### DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED

```lua
1024
```

Targets player controlled units (ignores the rest of basic units).

---

### DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED

```lua
2048
```

Targets only those that are not being dominated.

---

### DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED

```lua
4096
```

Targets only those that are not summoned creatures.

---

### DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS

```lua
8192
```

Targets only those that are not illusions.

---

### DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE

```lua
16384
```

Targets only those that are not immune to attacks.

---

### DOTA_UNIT_TARGET_FLAG_MANA_ONLY

```lua
32768
```

Targets only those that has a mana bar.

---

### DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP

```lua
65536
```

---

### DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO

```lua
131072
```

Targets only those that are not considered creep heroes.

---

### DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD

```lua
262144
```

Targets units/heroes that are hidden as well.

---

### DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED

```lua
524288
```

Targets only those that are not nightmared.

---


## DOTA_UNIT_TARGET_TEAM

*Элементов в категории: 5*

### DOTA_UNIT_TARGET_TEAM_NONE

```lua
0
```

---

### DOTA_UNIT_TARGET_TEAM_FRIENDLY

```lua
1
```

Targets all those that are in the same team as the team that was declared the source.

---

### DOTA_UNIT_TARGET_TEAM_ENEMY

```lua
2
```

Targets all those that are not in the same team as the team that was declared the source.

---

### DOTA_UNIT_TARGET_TEAM_BOTH

```lua
3
```

Targets all entities from every team.

---

### DOTA_UNIT_TARGET_TEAM_CUSTOM

```lua
4
```

---


## DOTA_UNIT_TARGET_TYPE

*Элементов в категории: 11*

### DOTA_UNIT_TARGET_NONE

```lua
0
```

---

### DOTA_UNIT_TARGET_HERO

```lua
1
```

Targets heroes.

---

### DOTA_UNIT_TARGET_CREEP

```lua
2
```

Targets creeps.

---

### DOTA_UNIT_TARGET_BUILDING

```lua
4
```

Targets buildings.

---

### DOTA_UNIT_TARGET_MECHANICAL

```lua
8
```

Deprecated.

---

### DOTA_UNIT_TARGET_COURIER

```lua
16
```

Targets couriers.

---

### DOTA_UNIT_TARGET_BASIC

```lua
18
```

Targets units. (not necessarily creeps)

---

### DOTA_UNIT_TARGET_OTHER

```lua
32
```

---

### DOTA_UNIT_TARGET_ALL

```lua
63
```

Targets everything (including buildings, couriers, Shrines etc)

---

### DOTA_UNIT_TARGET_TREE

```lua
64
```

Targets trees.

---

### DOTA_UNIT_TARGET_CUSTOM

```lua
128
```

---


## EDOTA_ModifyGold_Reason

*Элементов в категории: 17*

### DOTA_ModifyGold_Unspecified

```lua
0
```

---

### DOTA_ModifyGold_Death

```lua
1
```

---

### DOTA_ModifyGold_Buyback

```lua
2
```

---

### DOTA_ModifyGold_PurchaseConsumable

```lua
3
```

---

### DOTA_ModifyGold_PurchaseItem

```lua
4
```

---

### DOTA_ModifyGold_AbandonedRedistribute

```lua
5
```

---

### DOTA_ModifyGold_SellItem

```lua
6
```

---

### DOTA_ModifyGold_AbilityCost

```lua
7
```

---

### DOTA_ModifyGold_CheatCommand

```lua
8
```

---

### DOTA_ModifyGold_SelectionPenalty

```lua
9
```

---

### DOTA_ModifyGold_GameTick

```lua
10
```

---

### DOTA_ModifyGold_Building

```lua
11
```

---

### DOTA_ModifyGold_HeroKill

```lua
12
```

---

### DOTA_ModifyGold_CreepKill

```lua
13
```

---

### DOTA_ModifyGold_RoshanKill

```lua
14
```

---

### DOTA_ModifyGold_CourierKill

```lua
15
```

---

### DOTA_ModifyGold_SharedGold

```lua
16
```

---


## EDOTA_ModifyXP_Reason

*Элементов в категории: 4*

### DOTA_ModifyXP_Unspecified

```lua
0
```

---

### DOTA_ModifyXP_HeroKill

```lua
1
```

---

### DOTA_ModifyXP_CreepKill

```lua
2
```

---

### DOTA_ModifyXP_RoshanKill

```lua
3
```

---


## EShareAbility

*Элементов в категории: 3*

### ITEM_FULLY_SHAREABLE

```lua
0
```

---

### ITEM_PARTIALLY_SHAREABLE

```lua
1
```

---

### ITEM_NOT_SHAREABLE

```lua
2
```

---


## LuaModifierType

*Элементов в категории: 5*

### LUA_MODIFIER_MOTION_NONE

```lua
0
```

---

### LUA_MODIFIER_MOTION_HORIZONTAL

```lua
1
```

---

### LUA_MODIFIER_MOTION_VERTICAL

```lua
2
```

---

### LUA_MODIFIER_MOTION_BOTH

```lua
3
```

---

### LUA_MODIFIER_INVALID

```lua
4
```

---


## ModifierPriority

*Элементов в категории: 5*

### MODIFIER_PRIORITY_LOW

```lua
0
```

---

### MODIFIER_PRIORITY_NORMAL

```lua
1
```

---

### MODIFIER_PRIORITY_HIGH

```lua
2
```

---

### MODIFIER_PRIORITY_ULTRA

```lua
3
```

---

### MODIFIER_PRIORITY_SUPER_ULTRA

```lua
4
```

---


## ParticleAttachment_t

*Элементов в категории: 15*

### PATTACH_INVALID

```lua
-1
```

---

### PATTACH_ABSORIGIN

```lua
0
```

Attaches the particle to the an origin.

---

### PATTACH_ABSORIGIN_FOLLOW

```lua
1
```

Attaches the particle to an origin, and causes it to follow the unit that is considered the source of the particle.

---

### PATTACH_CUSTOMORIGIN

```lua
2
```

Attaches the particle to a custom origin. (Requires passing a vector to the Control points)

---

### PATTACH_CUSTOMORIGIN_FOLLOW

```lua
3
```

---

### PATTACH_POINT

```lua
4
```

---

### PATTACH_POINT_FOLLOW

```lua
5
```

---

### PATTACH_EYES_FOLLOW

```lua
6
```

Attaches the particle to the "eyes" of the entity.

---

### PATTACH_OVERHEAD_FOLLOW

```lua
7
```

Attaches the particle to be set above the head of the entity.

---

### PATTACH_WORLDORIGIN

```lua
8
```

Attaches the particle to the ground.

---

### PATTACH_ROOTBONE_FOLLOW

```lua
9
```

---

### PATTACH_RENDERORIGIN_FOLLOW

```lua
10
```

---

### PATTACH_MAIN_VIEW

```lua
11
```

---

### PATTACH_WATERWAKE

```lua
12
```

---

### MAX_PATTACH_TYPES

```lua
13
```

---


## UnitFilterResult

*Элементов в категории: 29*

### UF_SUCCESS

```lua
0
```

---

### UF_FAIL_FRIENDLY

```lua
1
```

---

### UF_FAIL_ENEMY

```lua
2
```

---

### UF_FAIL_HERO

```lua
3
```

---

### UF_FAIL_CONSIDERED_HERO

```lua
4
```

---

### UF_FAIL_CREEP

```lua
5
```

---

### UF_FAIL_BUILDING

```lua
6
```

---

### UF_FAIL_MECHANICAL

```lua
7
```

---

### UF_FAIL_COURIER

```lua
8
```

---

### UF_FAIL_OTHER

```lua
9
```

---

### UF_FAIL_ANCIENT

```lua
10
```

---

### UF_FAIL_ILLUSION

```lua
11
```

---

### UF_FAIL_SUMMONED

```lua
12
```

---

### UF_FAIL_DOMINATED

```lua
13
```

---

### UF_FAIL_MELEE

```lua
14
```

---

### UF_FAIL_RANGED

```lua
15
```

---

### UF_FAIL_DEAD

```lua
16
```

---

### UF_FAIL_MAGIC_IMMUNE_ALLY

```lua
17
```

---

### UF_FAIL_MAGIC_IMMUNE_ENEMY

```lua
18
```

---

### UF_FAIL_INVULNERABLE

```lua
19
```

---

### UF_FAIL_IN_FOW

```lua
20
```

---

### UF_FAIL_INVISIBLE

```lua
21
```

---

### UF_FAIL_NOT_PLAYER_CONTROLLED

```lua
22
```

---

### UF_FAIL_ATTACK_IMMUNE

```lua
23
```

---

### UF_FAIL_CUSTOM

```lua
24
```

---

### UF_FAIL_INVALID_LOCATION

```lua
25
```

---

### UF_FAIL_DISABLE_HELP

```lua
26
```

---

### UF_FAIL_OUT_OF_WORLD

```lua
27
```

---

### UF_FAIL_NIGHTMARED

```lua
28
```

---


## modifierstate

*Элементов в категории: 35*

### MODIFIER_STATE_ROOTED

```lua
0
```

Set to true to cause the parent to become rooted.

---

### MODIFIER_STATE_DISARMED

```lua
1
```

Set to true to cause the parent to become disarmed.

---

### MODIFIER_STATE_ATTACK_IMMUNE

```lua
2
```

Set to true to cause the parent to become attack immune.

---

### MODIFIER_STATE_SILENCED

```lua
3
```

Set to true to cause the parent to become silenced.

---

### MODIFIER_STATE_MUTED

```lua
4
```

Set to true to cause the parent to become muted.

---

### MODIFIER_STATE_STUNNED

```lua
5
```

Set to true to cause the parent to become stunned.

---

### MODIFIER_STATE_HEXED

```lua
6
```

Set to true to cause the parent to become hexed.

---

### MODIFIER_STATE_INVISIBLE

```lua
7
```

Set to true to cause the parent to become invisible.

---

### MODIFIER_STATE_INVULNERABLE

```lua
8
```

Set to true to cause the parent to become invulnerable.

---

### MODIFIER_STATE_MAGIC_IMMUNE

```lua
9
```

Set to true to cause the parent to become immune to magic.

---

### MODIFIER_STATE_PROVIDES_VISION

```lua
10
```

Set to true to cause the parent to share its vision with the source of the modifier.

---

### MODIFIER_STATE_NIGHTMARED

```lua
11
```

Set to true to cause the parent to become nightmared.

---

### MODIFIER_STATE_BLOCK_DISABLED

```lua
12
```

Set to true to cause the parent to become unable to block attacks.

---

### MODIFIER_STATE_EVADE_DISABLED

```lua
13
```

Set to true to cause the parent to become unable to evade attacks.

---

### MODIFIER_STATE_UNSELECTABLE

```lua
14
```

Set to true to cause the parent to make it unselectable.

---

### MODIFIER_STATE_CANNOT_MISS

```lua
15
```

Set to true to cause the parent to always hit its target.

---

### MODIFIER_STATE_SPECIALLY_DENIABLE

```lua
16
```

Set to true to cause allies to be able to deny the parent.

---

### MODIFIER_STATE_FROZEN

```lua
17
```

Set to true to cause the parent to become frozen.

---

### MODIFIER_STATE_COMMAND_RESTRICTED

```lua
18
```

Set to true to cause the parent to become unable to issue orders.

---

### MODIFIER_STATE_NOT_ON_MINIMAP

```lua
19
```

Set to true to cause the parent to become invisible on the minimap.

---

### MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES

```lua
20
```

Set to true to cause the parent to become invisible on the minimap for enemies.

---

### MODIFIER_STATE_LOW_ATTACK_PRIORITY

```lua
21
```

Set to true to cause the parent to become low attack priority, causing it to be the last to be hit when attack moving.

---

### MODIFIER_STATE_NO_HEALTH_BAR

```lua
22
```

Set to true to cause the parent to have its health bar disabled (invisible).

---

### MODIFIER_STATE_FLYING

```lua
23
```

Set to true to cause the parent to fly, ignoring terrains and increasing its offset from the ground.

---

### MODIFIER_STATE_NO_UNIT_COLLISION

```lua
24
```

Set to true to cause the parent to become phased.

---

### MODIFIER_STATE_NO_TEAM_MOVE_TO

```lua
25
```

---

### MODIFIER_STATE_NO_TEAM_SELECT

```lua
26
```

---

### MODIFIER_STATE_PASSIVES_DISABLED

```lua
27
```

Set to true to cause the parent to have its passives disabled.

---

### MODIFIER_STATE_DOMINATED

```lua
28
```

Set to true to cause the parent to become dominated.

---

### MODIFIER_STATE_BLIND

```lua
29
```

Set to true to cause the parent to become blind.

---

### MODIFIER_STATE_OUT_OF_GAME

```lua
30
```

---

### MODIFIER_STATE_FAKE_ALLY

```lua
31
```

---

### MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY

```lua
32
```

Set to true to cause the parent to stay on the ground, but be considered flying when moving.

---

### MODIFIER_STATE_TRUESIGHT_IMMUNE

```lua
33
```

Set to true to cause the parent to become immune to truesight.

---

### MODIFIER_STATE_LAST

```lua
34
```

---


## quest_text_replace_values_t

*Элементов в категории: 5*

### QUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE

```lua
0
```

---

### QUEST_TEXT_REPLACE_VALUE_TARGET_VALUE

```lua
1
```

---

### QUEST_TEXT_REPLACE_VALUE_ROUND

```lua
2
```

---

### QUEST_TEXT_REPLACE_VALUE_REWARD

```lua
3
```

---

### QUEST_NUM_TEXT_REPLACE_VALUES

```lua
4
```

---


## Find Types

*Элементов в категории: 4*

### FIND_UNITS_EVERYWHERE

```lua
-1
```

Find units in the whole map.

---

### FIND_ANY_ORDER

```lua
0
```

Random the order units are found.

---

### FIND_CLOSEST

```lua
1
```

Find units from the closest to the source to the farthest.

---

### FIND_FARTHEST

```lua
2
```

Find units from the farthest to the source to the farthest.

---


## subquest_text_replace_values_t

*Элементов в категории: 3*

### SUBQUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE

```lua
0
```

---

### SUBQUEST_TEXT_REPLACE_VALUE_TARGET_VALUE

```lua
1
```

---

### SUBQUEST_NUM_TEXT_REPLACE_VALUES

```lua
2
```

---


## DOTAScriptInventorySlot_t

*Элементов в категории: 12*

### DOTA_ITEM_SLOT_1

```lua
0
```

---

### DOTA_ITEM_SLOT_2

```lua
1
```

---

### DOTA_ITEM_SLOT_3

```lua
2
```

---

### DOTA_ITEM_SLOT_4

```lua
3
```

---

### DOTA_ITEM_SLOT_5

```lua
4
```

---

### DOTA_ITEM_SLOT_6

```lua
5
```

---

### DOTA_STASH_SLOT_1

```lua
6
```

---

### DOTA_STASH_SLOT_2

```lua
7
```

---

### DOTA_STASH_SLOT_3

```lua
8
```

---

### DOTA_STASH_SLOT_4

```lua
9
```

---

### DOTA_STASH_SLOT_5

```lua
10
```

---

### DOTA_STASH_SLOT_6

```lua
11
```

---


## DOTA_GameState

*Элементов в категории: 10*

### DOTA_GAMERULES_STATE_INIT

```lua
0
```

---

### DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD

```lua
1
```

---

### DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP

```lua
2
```

---

### DOTA_GAMERULES_STATE_HERO_SELECTION

```lua
3
```

---

### DOTA_GAMERULES_STATE_STRATEGY_TIME

```lua
4
```

---

### DOTA_GAMERULES_STATE_TEAM_SHOWCASE

```lua
5
```

---

### DOTA_GAMERULES_STATE_PRE_GAME

```lua
6
```

---

### DOTA_GAMERULES_STATE_GAME_IN_PROGRESS

```lua
7
```

---

### DOTA_GAMERULES_STATE_POST_GAME

```lua
8
```

---

### DOTA_GAMERULES_STATE_DISCONNECT

```lua
9
```

---


## DOTALimits_t

*Элементов в категории: 7*

### DOTA_DEFAULT_MAX_TEAM

```lua
5
```

Default number of players per team.

---

### DOTA_DEFAULT_MAX_TEAM_PLAYERS

```lua
10
```

Default number of non-spectator players supported.

---

### DOTA_MAX_PLAYER_TEAMS

```lua
10
```

Max number of player teams supported.

---

### DOTA_MAX_TEAM

```lua
24
```

Max number of players per team.

---

### DOTA_MAX_TEAM_PLAYERS

```lua
24
```

Max number of non-spectator players supported.

---

### DOTA_MAX_SPECTATOR_TEAM_SIZE

```lua
40
```

How many spectators can watch.

---

### DOTA_MAX_PLAYERS

```lua
64
```

Max number of players connected to the server including spectators.

---


## GameActivity_t

*Элементов в категории: 209*

### ACT_DOTA_IDLE

```lua
1500
```

---

### ACT_DOTA_IDLE_RARE

```lua
1501
```

---

### ACT_DOTA_RUN

```lua
1502
```

---

### ACT_DOTA_ATTACK

```lua
1503
```

---

### ACT_DOTA_ATTACK2

```lua
1504
```

---

### ACT_DOTA_ATTACK_EVENT

```lua
1505
```

---

### ACT_DOTA_DIE

```lua
1506
```

---

### ACT_DOTA_FLINCH

```lua
1507
```

---

### ACT_DOTA_FLAIL

```lua
1508
```

---

### ACT_DOTA_DISABLED

```lua
1509
```

---

### ACT_DOTA_CAST_ABILITY_1

```lua
1510
```

---

### ACT_DOTA_CAST_ABILITY_2

```lua
1511
```

---

### ACT_DOTA_CAST_ABILITY_3

```lua
1512
```

---

### ACT_DOTA_CAST_ABILITY_4

```lua
1513
```

---

### ACT_DOTA_CAST_ABILITY_5

```lua
1514
```

---

### ACT_DOTA_CAST_ABILITY_6

```lua
1515
```

---

### ACT_DOTA_OVERRIDE_ABILITY_1

```lua
1516
```

---

### ACT_DOTA_OVERRIDE_ABILITY_2

```lua
1517
```

---

### ACT_DOTA_OVERRIDE_ABILITY_3

```lua
1518
```

---

### ACT_DOTA_OVERRIDE_ABILITY_4

```lua
1519
```

---

### ACT_DOTA_CHANNEL_ABILITY_1

```lua
1520
```

---

### ACT_DOTA_CHANNEL_ABILITY_2

```lua
1521
```

---

### ACT_DOTA_CHANNEL_ABILITY_3

```lua
1522
```

---

### ACT_DOTA_CHANNEL_ABILITY_4

```lua
1523
```

---

### ACT_DOTA_CHANNEL_ABILITY_5

```lua
1524
```

---

### ACT_DOTA_CHANNEL_ABILITY_6

```lua
1525
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_1

```lua
1526
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_2

```lua
1527
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_3

```lua
1528
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_4

```lua
1529
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_5

```lua
1530
```

---

### ACT_DOTA_CHANNEL_END_ABILITY_6

```lua
1531
```

---

### ACT_DOTA_CONSTANT_LAYER

```lua
1532
```

---

### ACT_DOTA_CAPTURE

```lua
1533
```

---

### ACT_DOTA_SPAWN

```lua
1534
```

---

### ACT_DOTA_KILLTAUNT

```lua
1535
```

---

### ACT_DOTA_TAUNT

```lua
1536
```

---

### ACT_DOTA_THIRST

```lua
1537
```

---

### ACT_DOTA_CAST_DRAGONBREATH

```lua
1538
```

---

### ACT_DOTA_ECHO_SLAM

```lua
1539
```

---

### ACT_DOTA_CAST_ABILITY_1_END

```lua
1540
```

---

### ACT_DOTA_CAST_ABILITY_2_END

```lua
1541
```

---

### ACT_DOTA_CAST_ABILITY_3_END

```lua
1542
```

---

### ACT_DOTA_CAST_ABILITY_4_END

```lua
1543
```

---

### ACT_MIRANA_LEAP_END

```lua
1544
```

---

### ACT_WAVEFORM_START

```lua
1545
```

---

### ACT_WAVEFORM_END

```lua
1546
```

---

### ACT_DOTA_CAST_ABILITY_ROT

```lua
1547
```

---

### ACT_DOTA_DIE_SPECIAL

```lua
1548
```

---

### ACT_DOTA_RATTLETRAP_BATTERYASSAULT

```lua
1549
```

---

### ACT_DOTA_RATTLETRAP_POWERCOGS

```lua
1550
```

---

### ACT_DOTA_RATTLETRAP_HOOKSHOT_START

```lua
1551
```

---

### ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP

```lua
1552
```

---

### ACT_DOTA_RATTLETRAP_HOOKSHOT_END

```lua
1553
```

---

### ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE

```lua
1554
```

---

### ACT_DOTA_TINKER_REARM1

```lua
1555
```

---

### ACT_DOTA_TINKER_REARM2

```lua
1556
```

---

### ACT_DOTA_TINKER_REARM3

```lua
1557
```

---

### ACT_TINY_AVALANCHE

```lua
1558
```

---

### ACT_TINY_TOSS

```lua
1559
```

---

### ACT_TINY_GROWL

```lua
1560
```

---

### ACT_DOTA_WEAVERBUG_ATTACH

```lua
1561
```

---

### ACT_DOTA_CAST_WILD_AXES_END

```lua
1562
```

---

### ACT_DOTA_CAST_LIFE_BREAK_START

```lua
1563
```

---

### ACT_DOTA_CAST_LIFE_BREAK_END

```lua
1564
```

---

### ACT_DOTA_NIGHTSTALKER_TRANSITION

```lua
1565
```

---

### ACT_DOTA_LIFESTEALER_RAGE

```lua
1566
```

---

### ACT_DOTA_LIFESTEALER_OPEN_WOUNDS

```lua
1567
```

---

### ACT_DOTA_SAND_KING_BURROW_IN

```lua
1568
```

---

### ACT_DOTA_SAND_KING_BURROW_OUT

```lua
1569
```

---

### ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK

```lua
1570
```

---

### ACT_DOTA_WHEEL_LAYER

```lua
1571
```

---

### ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START

```lua
1572
```

---

### ACT_DOTA_ALCHEMIST_CONCOCTION

```lua
1573
```

---

### ACT_DOTA_JAKIRO_LIQUIDFIRE_START

```lua
1574
```

---

### ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP

```lua
1575
```

---

### ACT_DOTA_LIFESTEALER_INFEST

```lua
1576
```

---

### ACT_DOTA_LIFESTEALER_INFEST_END

```lua
1577
```

---

### ACT_DOTA_LASSO_LOOP

```lua
1578
```

---

### ACT_DOTA_ALCHEMIST_CONCOCTION_THROW

```lua
1579
```

---

### ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END

```lua
1580
```

---

### ACT_DOTA_CAST_COLD_SNAP

```lua
1581
```

---

### ACT_DOTA_CAST_GHOST_WALK

```lua
1582
```

---

### ACT_DOTA_CAST_TORNADO

```lua
1583
```

---

### ACT_DOTA_CAST_EMP

```lua
1584
```

---

### ACT_DOTA_CAST_ALACRITY

```lua
1585
```

---

### ACT_DOTA_CAST_CHAOS_METEOR

```lua
1586
```

---

### ACT_DOTA_CAST_SUN_STRIKE

```lua
1587
```

---

### ACT_DOTA_CAST_FORGE_SPIRIT

```lua
1588
```

---

### ACT_DOTA_CAST_ICE_WALL

```lua
1589
```

---

### ACT_DOTA_CAST_DEAFENING_BLAST

```lua
1590
```

---

### ACT_DOTA_VICTORY

```lua
1591
```

---

### ACT_DOTA_DEFEAT

```lua
1592
```

---

### ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE

```lua
1593
```

---

### ACT_DOTA_SPIRIT_BREAKER_CHARGE_END

```lua
1594
```

---

### ACT_DOTA_TELEPORT

```lua
1595
```

---

### ACT_DOTA_TELEPORT_END

```lua
1596
```

---

### ACT_DOTA_CAST_REFRACTION

```lua
1597
```

---

### ACT_DOTA_CAST_ABILITY_7

```lua
1598
```

---

### ACT_DOTA_CANCEL_SIREN_SONG

```lua
1599
```

---

### ACT_DOTA_CHANNEL_ABILITY_7

```lua
1600
```

---

### ACT_DOTA_LOADOUT

```lua
1601
```

---

### ACT_DOTA_FORCESTAFF_END

```lua
1602
```

---

### ACT_DOTA_POOF_END

```lua
1603
```

---

### ACT_DOTA_SLARK_POUNCE

```lua
1604
```

---

### ACT_DOTA_MAGNUS_SKEWER_START

```lua
1605
```

---

### ACT_DOTA_MAGNUS_SKEWER_END

```lua
1606
```

---

### ACT_DOTA_MEDUSA_STONE_GAZE

```lua
1607
```

---

### ACT_DOTA_RELAX_START

```lua
1608
```

---

### ACT_DOTA_RELAX_LOOP

```lua
1609
```

---

### ACT_DOTA_RELAX_END

```lua
1610
```

---

### ACT_DOTA_CENTAUR_STAMPEDE

```lua
1611
```

---

### ACT_DOTA_BELLYACHE_START

```lua
1612
```

---

### ACT_DOTA_BELLYACHE_LOOP

```lua
1613
```

---

### ACT_DOTA_BELLYACHE_END

```lua
1614
```

---

### ACT_DOTA_ROQUELAIRE_LAND

```lua
1615
```

---

### ACT_DOTA_ROQUELAIRE_LAND_IDLE

```lua
1616
```

---

### ACT_DOTA_GREEVIL_CAST

```lua
1617
```

---

### ACT_DOTA_GREEVIL_OVERRIDE_ABILITY

```lua
1618
```

---

### ACT_DOTA_GREEVIL_HOOK_START

```lua
1619
```

---

### ACT_DOTA_GREEVIL_HOOK_END

```lua
1620
```

---

### ACT_DOTA_GREEVIL_BLINK_BONE

```lua
1621
```

---

### ACT_DOTA_IDLE_SLEEPING

```lua
1622
```

---

### ACT_DOTA_INTRO

```lua
1623
```

---

### ACT_DOTA_GESTURE_POINT

```lua
1624
```

---

### ACT_DOTA_GESTURE_ACCENT

```lua
1625
```

---

### ACT_DOTA_SLEEPING_END

```lua
1626
```

---

### ACT_DOTA_AMBUSH

```lua
1627
```

---

### ACT_DOTA_ITEM_LOOK

```lua
1628
```

---

### ACT_DOTA_STARTLE

```lua
1629
```

---

### ACT_DOTA_FRUSTRATION

```lua
1630
```

---

### ACT_DOTA_TELEPORT_REACT

```lua
1631
```

---

### ACT_DOTA_TELEPORT_END_REACT

```lua
1632
```

---

### ACT_DOTA_SHRUG

```lua
1633
```

---

### ACT_DOTA_RELAX_LOOP_END

```lua
1634
```

---

### ACT_DOTA_PRESENT_ITEM

```lua
1635
```

---

### ACT_DOTA_IDLE_IMPATIENT

```lua
1636
```

---

### ACT_DOTA_SHARPEN_WEAPON

```lua
1637
```

---

### ACT_DOTA_SHARPEN_WEAPON_OUT

```lua
1638
```

---

### ACT_DOTA_IDLE_SLEEPING_END

```lua
1639
```

---

### ACT_DOTA_BRIDGE_DESTROY

```lua
1640
```

---

### ACT_DOTA_TAUNT_SNIPER

```lua
1641
```

---

### ACT_DOTA_DEATH_BY_SNIPER

```lua
1642
```

---

### ACT_DOTA_LOOK_AROUND

```lua
1643
```

---

### ACT_DOTA_CAGED_CREEP_RAGE

```lua
1644
```

---

### ACT_DOTA_CAGED_CREEP_RAGE_OUT

```lua
1645
```

---

### ACT_DOTA_CAGED_CREEP_SMASH

```lua
1646
```

---

### ACT_DOTA_CAGED_CREEP_SMASH_OUT

```lua
1647
```

---

### ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP

```lua
1648
```

---

### ACT_DOTA_INTRO_LOOP

```lua
1649
```

---

### ACT_DOTA_BRIDGE_THREAT

```lua
1650
```

---

### ACT_DOTA_DAGON

```lua
1651
```

---

### ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START

```lua
1652
```

---

### ACT_DOTA_CAST_ABILITY_2_ES_ROLL

```lua
1653
```

---

### ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END

```lua
1654
```

---

### ACT_DOTA_NIAN_PIN_START

```lua
1655
```

---

### ACT_DOTA_NIAN_PIN_LOOP

```lua
1656
```

---

### ACT_DOTA_NIAN_PIN_END

```lua
1657
```

---

### ACT_DOTA_LEAP_STUN

```lua
1658
```

---

### ACT_DOTA_LEAP_SWIPE

```lua
1659
```

---

### ACT_DOTA_NIAN_INTRO_LEAP

```lua
1660
```

---

### ACT_DOTA_AREA_DENY

```lua
1661
```

---

### ACT_DOTA_NIAN_PIN_TO_STUN

```lua
1662
```

---

### ACT_DOTA_RAZE_1

```lua
1663
```

---

### ACT_DOTA_RAZE_2

```lua
1664
```

---

### ACT_DOTA_RAZE_3

```lua
1665
```

---

### ACT_DOTA_UNDYING_DECAY

```lua
1666
```

---

### ACT_DOTA_UNDYING_SOUL_RIP

```lua
1667
```

---

### ACT_DOTA_UNDYING_TOMBSTONE

```lua
1668
```

---

### ACT_DOTA_WHIRLING_AXES_RANGED

```lua
1669
```

---

### ACT_DOTA_SHALLOW_GRAVE

```lua
1670
```

---

### ACT_DOTA_COLD_FEET

```lua
1671
```

---

### ACT_DOTA_ICE_VORTEX

```lua
1672
```

---

### ACT_DOTA_CHILLING_TOUCH

```lua
1673
```

---

### ACT_DOTA_ENFEEBLE

```lua
1674
```

---

### ACT_DOTA_FATAL_BONDS

```lua
1675
```

---

### ACT_DOTA_MIDNIGHT_PULSE

```lua
1676
```

---

### ACT_DOTA_ANCESTRAL_SPIRIT

```lua
1677
```

---

### ACT_DOTA_THUNDER_STRIKE

```lua
1678
```

---

### ACT_DOTA_KINETIC_FIELD

```lua
1679
```

---

### ACT_DOTA_STATIC_STORM

```lua
1680
```

---

### ACT_DOTA_MINI_TAUNT

```lua
1681
```

---

### ACT_DOTA_ARCTIC_BURN_END

```lua
1682
```

---

### ACT_DOTA_LOADOUT_RARE

```lua
1683
```

---

### ACT_DOTA_SWIM

```lua
1684
```

---

### ACT_DOTA_FLEE

```lua
1685
```

---

### ACT_DOTA_TROT

```lua
1686
```

---

### ACT_DOTA_SHAKE

```lua
1687
```

---

### ACT_DOTA_SWIM_IDLE

```lua
1688
```

---

### ACT_DOTA_WAIT_IDLE

```lua
1689
```

---

### ACT_DOTA_GREET

```lua
1690
```

---

### ACT_DOTA_TELEPORT_COOP_START

```lua
1691
```

---

### ACT_DOTA_TELEPORT_COOP_WAIT

```lua
1692
```

---

### ACT_DOTA_TELEPORT_COOP_END

```lua
1693
```

---

### ACT_DOTA_TELEPORT_COOP_EXIT

```lua
1694
```

---

### ACT_DOTA_SHOPKEEPER_PET_INTERACT

```lua
1695
```

---

### ACT_DOTA_ITEM_PICKUP

```lua
1696
```

---

### ACT_DOTA_ITEM_DROP

```lua
1697
```

---

### ACT_DOTA_CAPTURE_PET

```lua
1698
```

---

### ACT_DOTA_PET_WARD_OBSERVER

```lua
1699
```

---

### ACT_DOTA_PET_WARD_SENTRY

```lua
1700
```

---

### ACT_DOTA_PET_LEVEL

```lua
1701
```

---

### ACT_DOTA_CAST_BURROW_END

```lua
1702
```

---

### ACT_DOTA_LIFESTEALER_ASSIMILATE

```lua
1703
```

---

### ACT_DOTA_LIFESTEALER_EJECT

```lua
1704
```

---

### ACT_DOTA_ATTACK_EVENT_BASH

```lua
1705
```

---

### ACT_DOTA_CAPTURE_RARE

```lua
1706
```

---

### ACT_DOTA_AW_MAGNETIC_FIELD

```lua
1707
```

---

### ACT_DOTA_CAST_GHOST_SHIP

```lua
1708
```

---


## modifierfunction

*Элементов в категории: 177*

### MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE

```lua
0
```

GetModifierPreAttack_BonusDamage

---

### MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC

```lua
1
```

GetModifierPreAttack_BonusDamage_Proc

---

### MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT

```lua
2
```

GetModifierPreAttack_BonusDamagePostCrit

---

### MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE

```lua
3
```

GetModifierBaseAttack_BonusDamage

---

### MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL

```lua
4
```

GetModifierProcAttack_BonusDamage_Physical

---

### MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL

```lua
5
```

GetModifierProcAttack_BonusDamage_Magical

---

### MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE

```lua
6
```

GetModifierProcAttack_BonusDamage_Pure

---

### MODIFIER_PROPERTY_PROCATTACK_FEEDBACK

```lua
7
```

GetModifierProcAttack_Feedback

---

### MODIFIER_PROPERTY_PRE_ATTACK

```lua
8
```

GetModifierPreAttack

---

### MODIFIER_PROPERTY_INVISIBILITY_LEVEL

```lua
9
```

GetModifierInvisibilityLevel

---

### MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY

```lua
10
```

GetModifierPersistentInvisibility

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT

```lua
11
```

GetModifierMoveSpeedBonus_Constant

---

### MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE

```lua
12
```

GetModifierMoveSpeedOverride

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE

```lua
13
```

GetModifierMoveSpeedBonus_Percentage

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE

```lua
14
```

GetModifierMoveSpeedBonus_Percentage_Unique

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2

```lua
15
```

GetModifierMoveSpeedBonus_Percentage_Unique_2

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE

```lua
16
```

GetModifierMoveSpeedBonus_Special_Boots

---

### MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2

```lua
17
```

GetModifierMoveSpeedBonus_Special_Boots_2

---

### MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE

```lua
18
```

GetModifierMoveSpeed_Absolute

---

### MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN

```lua
19
```

GetModifierMoveSpeed_AbsoluteMin

---

### MODIFIER_PROPERTY_MOVESPEED_LIMIT

```lua
20
```

GetModifierMoveSpeed_Limit

---

### MODIFIER_PROPERTY_MOVESPEED_MAX

```lua
21
```

GetModifierMoveSpeed_Max

---

### MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE

```lua
22
```

GetModifierAttackSpeedBaseOverride

---

### MODIFIER_PROPERTY_FIXED_ATTACK_RATE

```lua
23
```

GetModifierAttackSpeedBaseOverride

---

### MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT

```lua
24
```

GetModifierAttackSpeedBonus_Constant

---

### MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT

```lua
25
```

GetModifierCooldownReduction_Constant

---

### MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT

```lua
26
```

GetModifierBaseAttackTimeConstant

---

### MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT

```lua
27
```

GetModifierAttackPointConstant

---

### MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE

```lua
28
```

GetModifierDamageOutgoing_Percentage

---

### MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION

```lua
29
```

GetModifierDamageOutgoing_Percentage_Illusion

---

### MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE

```lua
30
```

GetModifierTotalDamageOutgoing_Percentage

---

### MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE

```lua
31
```

GetModifierSpellAmplify_Percentage

---

### MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE

```lua
32
```

GetModifierHPRegenAmplify_Percentage

---

### MODIFIER_PROPERTY_MAGICDAMAGEOUTGOING_PERCENTAGE

```lua
33
```

GetModifierMagicDamageOutgoing_Percentage

---

### MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE

```lua
34
```

GetModifierBaseDamageOutgoing_Percentage

---

### MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE

```lua
35
```

GetModifierBaseDamageOutgoing_PercentageUnique

---

### MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE

```lua
36
```

GetModifierIncomingDamage_Percentage

---

### MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE

```lua
37
```

GetModifierIncomingPhysicalDamage_Percentage

---

### MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT

```lua
38
```

GetModifierIncomingPhysicalDamageConstant

---

### MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT

```lua
39
```

GetModifierIncomingSpellDamageConstant

---

### MODIFIER_PROPERTY_EVASION_CONSTANT

```lua
40
```

GetModifierEvasion_Constant

---

### MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT

```lua
41
```

GetModifierNegativeEvasion_Constant

---

### MODIFIER_PROPERTY_AVOID_DAMAGE

```lua
42
```

GetModifierAvoidDamage

---

### MODIFIER_PROPERTY_AVOID_SPELL

```lua
43
```

GetModifierAvoidSpell

---

### MODIFIER_PROPERTY_MISS_PERCENTAGE

```lua
44
```

GetModifierMiss_Percentage

---

### MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS

```lua
45
```

GetModifierPhysicalArmorBonus

---

### MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE

```lua
46
```

GetModifierPhysicalArmorBonusUnique

---

### MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE

```lua
47
```

GetModifierPhysicalArmorBonusUniqueActive

---

### MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR

```lua
48
```

GetModifierIgnorePhysicalArmor

---

### MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION

```lua
49
```

GetModifierMagicalResistanceDirectModification

---

### MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS

```lua
50
```

GetModifierMagicalResistanceBonus

---

### MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE

```lua
51
```

GetModifierMagicalResistanceDecrepifyUnique

---

### MODIFIER_PROPERTY_BASE_MANA_REGEN

```lua
52
```

GetModifierBaseRegen

---

### MODIFIER_PROPERTY_MANA_REGEN_CONSTANT

```lua
53
```

GetModifierConstantManaRegen

---

### MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE

```lua
54
```

GetModifierConstantManaRegenUnique

---

### MODIFIER_PROPERTY_MANA_REGEN_PERCENTAGE

```lua
55
```

GetModifierPercentageManaRegen

---

### MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE

```lua
56
```

GetModifierTotalPercentageManaRegen

---

### MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT

```lua
57
```

GetModifierConstantHealthRegen

---

### MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE

```lua
58
```

GetModifierHealthRegenPercentage

---

### MODIFIER_PROPERTY_HEALTH_BONUS

```lua
59
```

GetModifierHealthBonus

---

### MODIFIER_PROPERTY_MANA_BONUS

```lua
60
```

GetModifierManaBonus

---

### MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS

```lua
61
```

GetModifierExtraStrengthBonus

---

### MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS

```lua
62
```

GetModifierExtraHealthBonus

---

### MODIFIER_PROPERTY_EXTRA_MANA_BONUS

```lua
63
```

GetModifierExtraManaBonus

---

### MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE

```lua
64
```

GetModifierExtraHealthPercentage

---

### MODIFIER_PROPERTY_STATS_STRENGTH_BONUS

```lua
65
```

GetModifierBonusStats_Strength

---

### MODIFIER_PROPERTY_STATS_AGILITY_BONUS

```lua
66
```

GetModifierBonusStats_Agility

---

### MODIFIER_PROPERTY_STATS_INTELLECT_BONUS

```lua
67
```

GetModifierBonusStats_Intellect

---

### MODIFIER_PROPERTY_CAST_RANGE_BONUS

```lua
68
```

GetModifierCastRangeBonus

---

### MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING

```lua
69
```

GetModifierCastRangeBonusStacking

---

### MODIFIER_PROPERTY_ATTACK_RANGE_BONUS

```lua
70
```

GetModifierAttackRangeBonus

---

### MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE

```lua
71
```

GetModifierAttackRangeBonusUnique

---

### MODIFIER_PROPERTY_MAX_ATTACK_RANGE

```lua
72
```

GetModifierMaxAttackRange

---

### MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS

```lua
73
```

GetModifierProjectileSpeedBonus

---

### MODIFIER_PROPERTY_REINCARNATION

```lua
74
```

ReincarnateTime

---

### MODIFIER_PROPERTY_RESPAWNTIME

```lua
75
```

GetModifierConstantRespawnTime

---

### MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE

```lua
76
```

GetModifierPercentageRespawnTime

---

### MODIFIER_PROPERTY_RESPAWNTIME_STACKING

```lua
77
```

GetModifierStackingRespawnTime

---

### MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE

```lua
78
```

GetModifierPercentageCooldown

---

### MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING

```lua
79
```

GetModifierPercentageCooldownStacking

---

### MODIFIER_PROPERTY_CASTTIME_PERCENTAGE

```lua
80
```

GetModifierPercentageCasttime

---

### MODIFIER_PROPERTY_MANACOST_PERCENTAGE

```lua
81
```

GetModifierPercentageManacost

---

### MODIFIER_PROPERTY_DEATHGOLDCOST

```lua
82
```

GetModifierConstantDeathGoldCost

---

### MODIFIER_PROPERTY_EXP_RATE_BOOST

```lua
83
```

GetModifierPercentageExpRateBoost

---

### MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE

```lua
84
```

GetModifierPreAttack_CriticalStrike

---

### MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE

```lua
85
```

GetModifierPreAttack_Target_CriticalStrike

---

### MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK

```lua
86
```

GetModifierMagical_ConstantBlock

---

### MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK

```lua
87
```

GetModifierPhysical_ConstantBlock

---

### MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL

```lua
88
```

GetModifierPhysical_ConstantBlockSpecial

---

### MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR

```lua
89
```

GetModifierPhysical_ConstantBlockUnavoidablePreArmor

---

### MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK

```lua
90
```

GetModifierTotal_ConstantBlock

---

### MODIFIER_PROPERTY_OVERRIDE_ANIMATION

```lua
91
```

GetOverrideAnimation

---

### MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT

```lua
92
```

GetOverrideAnimationWeight

---

### MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE

```lua
93
```

GetOverrideAnimationRate

---

### MODIFIER_PROPERTY_ABSORB_SPELL

```lua
94
```

GetAbsorbSpell

---

### MODIFIER_PROPERTY_REFLECT_SPELL

```lua
95
```

GetReflectSpell

---

### MODIFIER_PROPERTY_DISABLE_AUTOATTACK

```lua
96
```

GetDisableAutoAttack

---

### MODIFIER_PROPERTY_BONUS_DAY_VISION

```lua
97
```

GetBonusDayVision

---

### MODIFIER_PROPERTY_BONUS_NIGHT_VISION

```lua
98
```

GetBonusNightVision

---

### MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE

```lua
99
```

GetBonusNightVisionUnique

---

### MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE

```lua
100
```

GetBonusVisionPercentage

---

### MODIFIER_PROPERTY_FIXED_DAY_VISION

```lua
101
```

GetFixedDayVision

---

### MODIFIER_PROPERTY_FIXED_NIGHT_VISION

```lua
102
```

GetFixedNightVision

---

### MODIFIER_PROPERTY_MIN_HEALTH

```lua
103
```

GetMinHealth

---

### MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL

```lua
104
```

GetAbsoluteNoDamagePhysical

---

### MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL

```lua
105
```

GetAbsoluteNoDamageMagical

---

### MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE

```lua
106
```

GetAbsoluteNoDamagePure

---

### MODIFIER_PROPERTY_IS_ILLUSION

```lua
107
```

GetIsIllusion

---

### MODIFIER_PROPERTY_ILLUSION_LABEL

```lua
108
```

GetModifierIllusionLabel

---

### MODIFIER_PROPERTY_SUPER_ILLUSION

```lua
109
```

GetModifierSuperIllusion

---

### MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE

```lua
110
```

GetModifierSuperIllusionWithUltimate

---

### MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE

```lua
111
```

GetModifierTurnRate_Percentage

---

### MODIFIER_PROPERTY_DISABLE_HEALING

```lua
112
```

GetDisableHealing

---

### MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK

```lua
113
```

GetAlwaysAllowAttack

---

### MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL

```lua
114
```

GetOverrideAttackMagical

---

### MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH

```lua
115
```

GetModifierUnitStatsNeedsRefresh

---

### MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER

```lua
116
```

GetModifierBountyCreepMultiplier

---

### MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER

```lua
117
```

GetModifierBountyOtherMultiplier

---

### MODIFIER_EVENT_ON_SPELL_TARGET_READY

```lua
118
```

OnSpellTargetReady

---

### MODIFIER_EVENT_ON_ATTACK_RECORD

```lua
119
```

OnAttackRecord

---

### MODIFIER_EVENT_ON_ATTACK_START

```lua
120
```

OnAttackStart

---

### MODIFIER_EVENT_ON_ATTACK

```lua
121
```

OnAttack

---

### MODIFIER_EVENT_ON_ATTACK_LANDED

```lua
122
```

OnAttackLanded

---

### MODIFIER_EVENT_ON_ATTACK_FAIL

```lua
123
```

OnAttackFail

---

### MODIFIER_EVENT_ON_ATTACK_ALLIED

```lua
124
```

OnAttackAllied

---

### MODIFIER_EVENT_ON_PROJECTILE_DODGE

```lua
125
```

OnProjectileDodge

---

### MODIFIER_EVENT_ON_ORDER

```lua
126
```

OnOrder

---

### MODIFIER_EVENT_ON_UNIT_MOVED

```lua
127
```

OnUnitMoved

---

### MODIFIER_EVENT_ON_ABILITY_START

```lua
128
```

OnAbilityStart

---

### MODIFIER_EVENT_ON_ABILITY_EXECUTED

```lua
129
```

OnAbilityExecuted

---

### MODIFIER_EVENT_ON_ABILITY_FULLY_CAST

```lua
130
```

OnAbilityFullyCast

---

### MODIFIER_EVENT_ON_BREAK_INVISIBILITY

```lua
131
```

OnBreakInvisibility

---

### MODIFIER_EVENT_ON_ABILITY_END_CHANNEL

```lua
132
```

OnAbilityEndChannel

---

### MODIFIER_EVENT_ON_PROCESS_UPGRADE

```lua
133
```

---

### MODIFIER_EVENT_ON_REFRESH

```lua
134
```

---

### MODIFIER_EVENT_ON_TAKEDAMAGE

```lua
135
```

OnTakeDamage

---

### MODIFIER_EVENT_ON_STATE_CHANGED

```lua
136
```

OnStateChanged

---

### MODIFIER_EVENT_ON_ORB_EFFECT

```lua
137
```

---

### MODIFIER_EVENT_ON_ATTACKED

```lua
138
```

OnAttacked

---

### MODIFIER_EVENT_ON_DEATH

```lua
139
```

OnDeath

---

### MODIFIER_EVENT_ON_RESPAWN

```lua
140
```

OnRespawn

---

### MODIFIER_EVENT_ON_SPENT_MANA

```lua
141
```

OnSpentMana

---

### MODIFIER_EVENT_ON_TELEPORTING

```lua
142
```

OnTeleporting

---

### MODIFIER_EVENT_ON_TELEPORTED

```lua
143
```

OnTeleported

---

### MODIFIER_EVENT_ON_SET_LOCATION

```lua
144
```

OnSetLocation

---

### MODIFIER_EVENT_ON_HEALTH_GAINED

```lua
145
```

OnHealthGained

---

### MODIFIER_EVENT_ON_MANA_GAINED

```lua
146
```

OnManaGained

---

### MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT

```lua
147
```

OnTakeDamageKillCredit

---

### MODIFIER_EVENT_ON_HERO_KILLED

```lua
148
```

OnHeroKilled

---

### MODIFIER_EVENT_ON_HEAL_RECEIVED

```lua
149
```

OnHealReceived

---

### MODIFIER_EVENT_ON_BUILDING_KILLED

```lua
150
```

OnBuildingKilled

---

### MODIFIER_EVENT_ON_MODEL_CHANGED

```lua
151
```

OnModelChanged

---

### MODIFIER_EVENT_ON_MODIFIER_ADDED

```lua
152
```

OnModifierAdded

---

### MODIFIER_PROPERTY_TOOLTIP

```lua
153
```

OnTooltip

---

### MODIFIER_PROPERTY_MODEL_CHANGE

```lua
154
```

GetModifierModelChange

---

### MODIFIER_PROPERTY_MODEL_SCALE

```lua
155
```

GetModifierModelScale

---

### MODIFIER_PROPERTY_IS_SCEPTER

```lua
156
```

GetModifierScepter

---

### MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS

```lua
157
```

GetActivityTranslationModifiers

---

### MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND

```lua
158
```

GetAttackSound

---

### MODIFIER_PROPERTY_LIFETIME_FRACTION

```lua
159
```

GetUnitLifetimeFraction

---

### MODIFIER_PROPERTY_PROVIDES_FOW_POSITION

```lua
160
```

GetModifierProvidesFOWVision

---

### MODIFIER_PROPERTY_SPELLS_REQUIRE_HP

```lua
161
```

GetModifierSpellsRequireHP

---

### MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP

```lua
162
```

GetForceDrawOnMinimap

---

### MODIFIER_PROPERTY_DISABLE_TURNING

```lua
163
```

GetModifierDisableTurning

---

### MODIFIER_PROPERTY_IGNORE_CAST_ANGLE

```lua
164
```

GetModifierIgnoreCastAngle

---

### MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE

```lua
165
```

GetModifierChangeAbilityValue

---

### MODIFIER_PROPERTY_ABILITY_LAYOUT

```lua
166
```

GetModifierAbilityLayout

---

### MODIFIER_EVENT_ON_DOMINATED

```lua
167
```

OnDominated

---

### MODIFIER_PROPERTY_TEMPEST_DOUBLE

```lua
168
```

GetModifierTempestDouble

---

### MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE

```lua
169
```

PreserveParticlesOnModelChanged

---

### MODIFIER_EVENT_ON_ATTACK_FINISHED

```lua
170
```

OnAttackFinished

---

### MODIFIER_PROPERTY_IGNORE_COOLDOWN

```lua
171
```

GetModifierIgnoreCooldown

---

### MODIFIER_PROPERTY_CAN_ATTACK_TREES

```lua
172
```

GetModifierCanAttackTrees

---

### MODIFIER_PROPERTY_VISUAL_Z_DELTA

```lua
173
```

GetVisualZDelta

---

### MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION

```lua
174
```

---

### MODIFIER_FUNCTION_LAST

```lua
175
```

---

### MODIFIER_FUNCTION_INVALID

```lua
255
```

---


## DOTA_CONNECTION_STATE

*Элементов в категории: 7*

### DOTA_CONNECTION_STATE_UNKNOWN

```lua
0
```

---

### DOTA_CONNECTION_STATE_NOT_YET_CONNECTED

```lua
1
```

---

### DOTA_CONNECTION_STATE_CONNECTED

```lua
2
```

---

### DOTA_CONNECTION_STATE_DISCONNECTED

```lua
3
```

---

### DOTA_CONNECTION_STATE_ABANDONED

```lua
4
```

---

### DOTA_CONNECTION_STATE_LOADING

```lua
5
```

---

### DOTA_CONNECTION_STATE_FAILED

```lua
6
```

---


