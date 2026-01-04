# ModDota Complete Documentation

Полная документация по созданию модов для Dota 2

Источник: https://moddota.com/

---

## 📑 Оглавление

- [Основы](#основы)
- [TypeScript](#typescript)
- [Abilities, Items & Modifiers](#abilities-items--modifiers)
- [Lua Modifiers](#lua-modifiers)
- [Datadriven Abilities](#datadriven-abilities)
- [Units](#units)
- [Scripting](#scripting)
- [Panorama UI](#panorama-ui)
- [Assets](#assets)
- [Maps](#maps)
- [Models](#models)
- [Particles](#particles)
- [Tools](#tools)

---

# Основы

## Introduction

* [](/)
  * Introduction



# Introduction

ModDota is an English-speaking community for Dota 2 Custom Game developers. This website collects tutorials made by it's community, that would help you to make your own custom game.

New to modding? Check out our [Getting Started](/getting-started) guide.

Or follow a video tutorial series:

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/index.md)

---

## Getting Started

* [](/)
  * Getting Started



On this page

# Getting Started

So you're completely new to Dota 2 modding? Don't know where in the hell to begin? This is the guide for you, the future Dota 2 modder!

Note: “Addon”, "mod", and “custom game” are all synonymous throughout this guide (and likely the entire website).

## The Facets of Dota 2 Modding​

The [Workshop Tools Wiki Homepage](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools) does a good job with subdividing all the possible aspects of Dota 2 modding:

  *  **Level design** \- Uses the tool called "Hammer"
  *  **Scripting** \- Divided into KeyValue editing and Lua scripting
  *  **Modeling** \- Importing your own custom models into your addon
  *  **Sounds** \- Importing your own custom sounds, or editing existing ones
  *  **Particles** \- Editing existing particles or creating your own using the Particle Editor Tool (PET)
  *  **Panorama** \- Creating custom UI or modifying existing Dota 2 UI with Panorama scripts



## Step #0: Installing and Launching the Dota 2 Workshop Tools​

You can't create mods for Dota without the Workshop Tools!

taken from [How to install the Dota 2 Workshop Tools](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Installing_and_Launching_Tools):

  * Right-click on Dota 2 in Steam and select View Downloadable Content.
  * Check the box in the Install column next to Dota 2 Workshop Tools DLC.
  * Click Close. The required content will begin downloading.
  * When download is finished, launch Dota 2 In Steam and select Launch Dota 2 - Tools.



## Step #1: Creating a New Addon From A Template​

To start off on a good foot, you’re going to want to create a new addon from a template. You have two options to choose from:

### Option 1: The TypeScript Addon Template​

Contains:

  * Dota 2 API type declarations, that help you with error checking and auto-completion of your code
  * Example gamerules
  * Example TypeScript ability
  * Example TypeScript modifier
  * Example Panorama UI with TypeScript
  * Automatic installation script
  * Latest Timers library



This template contains everything you need to get up and running to make mods with TypeScript. Dota 2 uses Lua as scripting language, so this template includes tools to automatically translate your TypeScript to Lua. It provides the framework for addon development, but other than that it only contains a few small examples. It comes with automatic setup for git version control out of the box.

To get started with the TypeScript template, see: [The template GitHub page](https://github.com/ModDota/TypeScriptAddonTemplate) and [TypeScript introduction](/scripting/Typescript/typescript-introduction) for the template and installation instructions.

### Option 2: The Barebones Lua Template​

Contains:

  * Some default gamerules and configuration you can easily adjust
  * Example Lua abilities
  * Example Lua modifiers
  * Some older libraries like `animations`, `physics`, `projectiles` and `timers`.



You can get started based off of the Barebones template, which is a community made alternative to Valve’s default addon templates (i.e. Holdout). This is the link to the updated Barebones: <https://github.com/DarkoniusXNG/barebones>  
After downloading it as a zip, you want to browse to your `.../Steam/SteamApps/dota 2 beta/` and merge the `game` and `content` folders from the .zip into the that /dota 2 beta/ folder (which should already have folders in it called `game` and `content`).

Next, start up the Workshop Tools (or restart them if you have them opened already), and double click your new addon. Set it as the default addon. Then, go into Hammer -> File -> Open -> template_map.vmap -> Press F9 to begin building the map. After Hammer finishes building your map, your custom game will automatically load in Dota.

## Step #2: Creating your map in Hammer​

(Credits to DarkMio for the gfy.)

Hammer is the tool you use to create worlds for your custom game. I highly recommend you start off creating something in Hammer first instead of diving straight into the scripting or another facet. You can have the most sophisticated scripting in the workshop, but how are people going to enjoy your game if there isn't a world they can play in?

Once you get to the point of having a rough layout blocked out for your map, it's probably safe to move on to scripting. You don't want to spend too much time piddling with detailing on something you realize needs changing once you get into the nitty gritty of your mode.

[The wiki page on Hammer](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design) does a good job with giving you a run-down of Hammer. I'd recommend you start with the [Tile editor](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design/Tile_Editor_Basics) section.

BMD has made some rather nice beginner Hammer tutorial videos:

  * [Part 1: Tile Editor](https://www.youtube.com/watch?v=GMvmdnNM6Sc)
  * [Part 2: Mesh Basics](https://www.youtube.com/watch?v=grLUv2hUDRY)
  * [Part 3: entity basics](https://www.youtube.com/watch?v=ln3ep-k__dk)



## Step #3: Scripting and beyond...​

Scripting is the next most important part of your addon. It is divided into Lua scripting, and KeyValue scripting. I'm going to go ahead and redirect you to [Noya's Beginner Scripting Guide](/scripting-introduction), since it has essentially the same information that would go in this section.

Now I'm going keep this short and sweet. I've already presented a ton of information for you to begin delving yourself into Dota 2 modding! Becoming good at Hammer mapping and good at Lua and KeyValue scripting will go a very long way in making successful, fun Dota 2 custom games. Please don't hesitate to ask questions in [the Moddota Discord channel](https://discord.gg/Mvn4gww).

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/getting-started.md)

---

## Scripting Introduction

* [](/)
  * Scripting Introduction



On this page

# Scripting Introduction

Part 2 of [Getting Started With Dota 2 Modding](/getting-started), this tutorial is meant to explain the basics of programming Dota 2 custom mods.

## Scripting​

So now you have your freshly created gamemode running and have played around the map editor a bit, it’s time to move into the programming realm of Dota 2 custom maps.

Go into your <addonName>/scripts/ folder. The 2 main script folders are **npc** and **vscripts**. The first holds the following .txt files:

  * npc_ **abilities** _custom.txt - Contains all the custom abilities of the gamemode.
  * npc_ **heroes** _custom.txt - Heroes with its abilities and stats
  * npc_ **items** _custom.txt - Items are abilities that go into a units inventory
  * npc_ **units** _custom.txt - All the data for non-hero units like buildings or creatures.
  * npc_ **abilities** _override.txt - Modified dota abilities/items with changed values.
  *  **herolist**.txt - List of the heroes available for picking.



These files are defined using KeyValues (KV) and are the core of the the **DataDriven system**. While they fulfill the definition of a programming language, it’s more like a big table containing all the possible data in a static document. it uses a relatively simple syntax whose only special characters are curly braces and quotes, with alternating sets of "Key" and "Value" or "Key" {table} pairs, where table is another set of KeyValues.

KV will define the data of abilities/items/units, while more elaborate behavior is handled with Lua or TypeScript.

Each .txt file contains its particular KVs, and when the game starts, each client (and server) will interpret them. Changes to these files won’t take effect until the game is started again, so be very aware of the syntax, as any extra/missing `"` or `{` `}` will usually make all the keyvalues that come after this error unusable. Consistent [indentation](https://en.wikipedia.org/wiki/Indent_style) is a good practice to learn early! KV is case-sensitive, so also pay attention to write everything like the game expects you to write. If your KV is not working, try putting it into [the KV checker](http://arhowk.github.io/) to look for errors.

Now it’s a good time to get your environment ready to write Dota Scripts. For this, the best way is getting [Visual Studio Code](https://code.visualstudio.com/). Use VSCode to open your addon root directory using File > Open Folder...

## Running and testing your game​

Once your environment is set up you can try to run your addon. Open the workshop tools (if you can't find them, they are in `/Steam/steamapps/common/dota 2 beta/game/bin/win64/dota2cfg.exe`, bookmark this) and select your addon.

Once the asset browser has launched, open the Console from the buttons at the top. To launch your addon simply type the following command into the bottom of the console:
    
    
    dota_launch_custom_game <custom_game_name> <map_name>  
    

If you have not done so, you will first need to build your map using Hammer before you can launch your game on it. You can also run your game on the default Dota 2 map using:
    
    
    dota_launch_custom_game <custom_game_name> dota  
    

After this command, you will enter a game with your addon rules. If you want to restart the game to reload the scripts, simply repeat the launch command (by pressing the up arrow in Console), or by typing `restart` in console.

## Lua/TypeScript Scripting​

Going back to the game/scripts folder, there’s the **vscripts** folder. Here is the place where all the Lua/TypeScript scripts are placed.

### Game Logic​

In every single gamemode, a file named addon_game_mode.lua must be present. While it is possible to add the game logic to this file (and in fact, valve did so in their holdout example), it is recommended that you reserve this file only for these 2 functions:

  * `Precache`, when the game starts and players pick their heroes, the engine will try to load the associated models/particles/sounds to those heroes. If we’re dynamically using a resource in Lua before preloading it won’t be displayed properly.
  * `Activate`, creates the base game mode entity and calls the initialize function.



![img](https://puu.sh/g2pUC/ca4413cc48.png)   
Precache function was folded in sublime

Using our barebones, you don’t need to touch this file apart from very specific situations, and all the core game logic will be coded in gamemode.lua (for older versions it's barebones.lua), which has been already required. We’ll call this your _main lua file_ from now on.

After addon_game_mode `Precache` & `Activate` are finished, the first function to be executed in the barebones.lua file is `GameMode:InitGameMode()`.

In here the game starts by initializing all sorts of rules and functions, which are registered over the GameRules and GameMode entities. For this, many variables are defined in settings.lua file to help organizing options like gold settings, kills, custom levels, etc.

This is the syntax of a function applied over GameRules, with one bool parameter:

`GameRules:SetHeroRespawnEnabled( ENABLE_HERO_RESPAWN )`

Just as KV, Lua is Case Sensitive. Also the placement of the functions within your main Lua file doesn’t generally matter. All the script lines within a function call will be run one after another, potentially on the same _frame_ ; one frame in Dota is 1/30 of a second.

Note the use of `:` colon before the function. In Lua, this is how we access the various **Game API functions**. We say that `GameRules` is an **HScript** or a **handle**. Handles are basically huge tables, with all the pertinent info of the entity. Over the [Scripting API page](https://moddota.com/api/#!/vscripts) you’ll see many different types of functions which can use different handles

Global functions don’t need any handle `:` prefix. Heroes, Creatures, Abilities and Items all have their different handle classes and attempting to call a function over an incompatible class will cause a VScript error, as pink text in console and red text on the gamescreen.

### The Console​

You can access the game console by pressing the ` key.

This will provide tons of useful information for debugging. The different colors represent the various “channels” of information. By default all the channels are in the same Log: Default tab. It’s very recommended that you make your own tabs to split the log viewer.

![img](https://i.imgur.com/y2BUNcS.png)

For Lua Scripting, we want to have a VScript Tab. Messages about the DataDriven system are in the General channel in yellow along with some other info, make a separate viewer for this too.

![img](https://puu.sh/g2nWY/22554172f6.png)

The new tabs:

![img](https://puu.sh/g2o1O/b46e113293.png)

The console will notify whenever a Lua scripting error happens, either when the game is being loaded (a syntax-compilation error) or at runtime. In this error, I wrote GameRules.SetHeroRespawnEnabled with `.` instead of `:`

![img](https://puu.sh/g2jo2/6c85128308.png)

You can then trace the error to that line and attempt to solve it, writing **script_reload** in the console to reload the script and check if it was actually fixed.

A DataDriven syntax error will usually look like this:

![img](https://puu.sh/g3HVp/27ef775669.png)

### Engine Events​

The second segment of the InitGameMode function is the **Listeners** :

`ListenToGameEvent('dota_player_gained_level', Dynamic_Wrap(GameMode, 'OnPlayerLevelUp'), self)`

The structure of this ListenToGameEvent is read as:

 **Whenever the dota_player_gained_level event is triggered, execute the scripts inside the OnPlayerLevelUp function.**

`OnPlayerLevelUp` and `GameMode` (or `barebones` in updated version) are just the names of the function and main class name we came up with, normally you don’t need to worry about them, all Listeners and functions are already available in barebones, ready to be expanded. `Dynamic_Wrap` is a function to ensure that the `script_reload` command also reloads the listeners. `script_reload` restarts lua scripts at runtime, unlike DataDriven files which require the game to be fully restarted. As you can see on the barebones example there are tons of possible events, and not all of them are listed there, those are just the most used ones.

The 3rd and last part of the `InitGameMode` in simplified Barebones are self defined variables to track info. These use the `self.` entity, which is a local reference to the GameMode entity, seen through all the functions inside the main lua file. Adding information to an entity like `entity.` is loosely called “indexing” and is basically adding another entry to the big table of that entity. This is very useful because this information is stored under the entity handle visible everywhere, and won’t change until we reassign it or destroy it.

Enough theory, let’s see how this all comes together. Let's take a look at OnNPCSpawned function, which is the listener for `npc_spawned` and triggers every time a unit or hero entity is added to the map.

Let’s analyze the contents of the `OnNPCSpawned` default function:

  * Lua
  * TypeScript


    
    
    -- An NPC has spawned somewhere in game.  This includes heroes  
    function GameMode:OnNPCSpawned(keys)  
        print("[BAREBONES] NPC Spawned")  
        DeepPrintTable(keys)  
        local npc = EntIndexToHScript(keys.entindex)  
      
        if npc:IsRealHero() and npc.bFirstSpawned == nil then  
            npc.bFirstSpawned = true  
            GameMode:OnHeroInGame(npc)  
        end  
    end  
    
    
    
    // An NPC has spawned somewhere in game.  This includes heroes  
    public OnNPCSpawned(event: NpcSpawnedEvent) {  
        print("[BAREBONES] NPC Spawned");  
        DeepPrintTable(event);  
        const npc = EntIndexToHScript(event.entindex);  
      
        if (npc.IsRealHero() && npc.bFirstSpawned == undefined) {  
            npc.bFirstSpawned = true;  
            OnHeroInGame(npc);  
        }  
    }  
    

First line will print the string in the VConsole. The print function is native to Lua, and accepts multiple parameters separated by commas.

`DeepPrintTable` is a Global Valve-made function which will display the information of the table passed. For keys in this case, it will be the .entindex and .splitscreenplayer. The **entity index** is a very important number to reference the entity. Ignore splitscreenplayer, it’s just legacy source stuff and never used in Dota 2.

![img](https://puu.sh/g2iLY/54583b0b65.png)

The next line defines a local variable. In Lua local variables have their scope limited to the block where they are declared. It is good programming style to use local variables whenever possible. Local variables help you avoid cluttering the global environment with unnecessary names. Moreover, access to local variables is faster than to global ones.

`local npc = EntIndexToHScript(keys.entindex)`

This is basically reading the information that is provided by the event, and storing it into a local variable within that function call. In this example all the Listener and their functions have already been processed, but for reference you can always check the [Built-In_Engine_Events wiki page](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Built-In_Engine_Events) to know exactly what parameters are carried by each event.

The npc local variable is an HScript, of handle type. All changes done into the npc variable will reflect on spawned unit.

The next line is a conditional, first it checks if the npc is a real hero (this excludes illusions) and it also checks if the .bFirstSpawned index (a self-defined variable) has not been assigned yet. If both conditions are true, changes the boolean value to true and calls the OnHeroInGame function.

To finish this basic Dota Lua tutorial, let’s modify the OnNPCSpawned function so that if a unit named npc_dota_neutral_kobold is spawned, wait 1 seconds and then kill itself. Added to the first if statement there’s this else-if condition:

  * Lua
  * TypeScript


    
    
    function GameMode:OnNPCSpawned(keys)  
        local npc = EntIndexToHScript(keys.entindex)  
      
        if npc:IsRealHero() and npc.bFirstSpawned == nil then  
            npc.bFirstSpawned = true  
            GameMode:OnHeroInGame(npc)  
        elseif npc:GetUnitName() == "npc_dota_neutral_kobold" then  
            Timers:CreateTimer( 1.0 , function()  
                npc:ForceKill(true)  
            end)  
        end  
    end  
    
    
    
    public OnNPCSpawned(event: NpcSpawnedEvent) {  
        const npc = EntIndexToHScript(keys.entindex);  
      
        if (npc.IsRealHero() && npc.bFirstSpawned == undefined) {  
            npc.bFirstSpawned = true;  
            OnHeroInGame(npc);  
        } else if (npc.GetUnitName() == "npc_dota_neutral_kobold") {  
            Timers.CreateTimer(1.0, () => {  
                npc.ForceKill(true);  
            });  
        }  
    }  
    

Here we make use of the Timers library for a simple 1.0 second delay, there are many different timer functions included and explained in timers.lua. The bool on ForceKill is to enable the death animation.

### Tables.​

Tables are the most important structure we will have to use. As mentioned before, all the info on entities can be seen as a table (even though it's technically a pointer to a C++ object), and you Get and Set the values through the various Game API functions.

There are some functions in the API that return a table of entity handles.

Let say you want to find all the units near the spawned kobold unit and kill them. The function `FindUnitsInRadius` can be used for this purpose, and takes a lot of parameters with different types which is worth explaining:

`table FindUnitsInRadius(int teamNumber, Vector position, handle cacheUnit, float radius, int teamFilter, int typeFilter, int flagFilter, int order, bool canGrowCache)`

The parameters Have to be in this order. This function is a global, so no `handle:` needed, but we need to keep the table under a variable, like this:

`local units = FindUnitsInRadius(...)`

For the teamNumber, finding out which team an entity is in can be done with `GetTeamNumber()` on the npc handle. As for the other Filter parameters, instead of real integers, we use a bunch of **Constants** that represent different number values. The complete list of Constants is [found on this wiki page](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Constants).

A Vector is represented as Vector(x,y,z) coordinates. The function to get the position of particular unit is called `GetAbsOrigin` and takes a npc handle.

As for the cache parameters, just leave it nil and false, they aren't of much use generally.

The complete function call to get the heroes in 500 radius from the spawned kobold would be:

  * Lua
  * TypeScript


    
    
    local units = FindUnitsInRadius(npc:GetTeamNumber(), npc:GetAbsOrigin(), nil, 500,  
                                    DOTA_UNIT_TARGET_TEAM_ENEMY, bit.bor(DOTA_UNIT_TARGET_BASIC, DOTA_UNIT_TARGET_HERO),  
                                    DOTA_UNIT_TARGET_FLAG_NONE, FIND_ANY_ORDER, false)  
    
    
    
    const units = FindUnitsInRadius(npc.GetTeamNumber(), npc.GetAbsOrigin(), undefined, 500,  
                                    UnitTargetTeam.ENEMY, UnitTargetType.Basic | UnitTargetType.HERO,  
                                    UnitTargetFlags.NONE, FindOrder.FIND_ANY_ORDER, false);  
    

The use of extra break lines is just to make it more readable. Now we want to **iterate over the entities of this table** , which is done like this:

  * Lua
  * TypeScript


    
    
    for key, unit in pairs(units) do  
        print(key, value)  
        unit:ForceKill(true)  
    end  
    
    
    
    for (const unit of units) {  
        unit.ForceKill(true);  
    }  
    

The `key` and `unit` are the chosen names to refer to the position and value inside the _units_ table, which will be read in pairs. Using `_` as the name of the key is a good convention when you want to make it clear that the first parameter won't be used. The 2nd parameter, unit, is used to iterate handles of the units found.

There is one more thing to consider: the "wait one frame" issue. Because all units are actually spawned at the (0,0,0) coordinates and then moved to the desired position, many times you'll need to create a 0 second timer (executes next frame) for some scripts to work, and this is one of those cases.

So, `OnNPCSpawned` is looking like this:

  * Lua
  * TypeScript


    
    
    function GameMode:OnNPCSpawned(keys)  
        local npc = EntIndexToHScript(keys.entindex)  
      
        if npc:IsRealHero() and npc.bFirstSpawned == nil then  
            npc.bFirstSpawned = true  
            GameMode:OnHeroInGame(npc)  
        elseif npc:GetUnitName() == "npc_dota_neutral_kobold" then  
            Timers:CreateTimer(0, function()  
                local units = FindUnitsInRadius(npc:GetTeamNumber(), npc:GetAbsOrigin(), nil, 500,  
                                                DOTA_UNIT_TARGET_TEAM_ENEMY, DOTA_UNIT_TARGET_HERO,  
                                                DOTA_UNIT_TARGET_FLAG_NONE, FIND_ANY_ORDER, false)  
      
                for key, value in pairs(units) do  
                    print(key, value)  
                    value:ForceKill(true)  
                end  
            end)  
        end  
    end  
    
    
    
    public OnNPCSpawned(event: NpcSpawnedEvent) {  
        const npc = EntIndexToHScript(keys.entindex);  
      
        if (npc.IsRealHero() && npc.bFirstSpawned == undefined) {  
            npc.bFirstSpawned = true;  
            OnHeroInGame(npc);  
        } else if (npc.GetUnitName() == "npc_dota_neutral_kobold") {  
            Timers.CreateTimer(() => {  
                const units = FindUnitsInRadius(npc.GetTeamNumber(), npc.GetAbsOrigin(), undefined, 500,  
                                                UnitTargetTeam.ENEMY, UnitTargetType.Basic | UnitTargetType.HERO,  
                                                UnitTargetFlags.NONE, FindOrder.FIND_ANY_ORDER, false);  
                  
                for (const unit of units) {  
                    unit.ForceKill(true);  
                }  
            });  
        }  
    }  
    

And the result ingame:

## Scripting Examples and Sources​

There are plenty of examples spread all across GitHub and with the contents of this guide you should now be able to understand the scripting flow of game logic and scripted abilities. The best GitHub repo to look for Dota 2 spells is [Elfansoer's dota 2 abilities library](https://github.com/Elfansoer/dota-2-lua-abilities).

If you want to check the scripts of a certain game on the [Custom Games Workshop](https://steamcommunity.com/workshop/browse/?appid=570&browsesort=trend&section=readytouseitems) which hasn't made their source public on GitHub (because they are fools), just follow these steps:

  1. Subscribe to the game. Download [Valve Resource Viewer](https://vrf.steamdb.info/) if you haven't done so yet.
  2. Check the URL, steamcommunity.com/sharedfiles/filedetails/?id= **copy this number**
  3. Go to your Steam folder -> SteamApps -> workshop -> content -> 570 (this is the dota folder)
  4. Search for the copied number folder
  5. Open the .vpk file with GCFScape or VRF and extract its contents anywhere you want. Now you can access its scripts and compiled models/particles/sounds.



![img](https://puu.sh/g2zNP/d1e018010e.png)

Whenever you have a doubt about how to use a particular GameAPI function, its possible to find examples all over GitHub by just writing the name of it, additionally filtering by lua like this:

![img](https://puu.sh/g2yTG/93f1641866.png)

Just make sure it's actually Dota Lua and not another game API, as some of the functions might share names with other engines.

That's all for the Scripting basics. I expect you to have more questions than when you started reading, feel free to drop all your doubts at the community's [Discord channel](https://discord.com/invite/tPvHaRz), you'll find help there 24/7.

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting-introduction.md)

---

# TypeScript

## TypeScript Introduction

* [](/)
  * Typescript
  * Typescript Introduction



On this page

# Typescript Introduction

Typescript is a powerful tool that we can use to improve our ability to properly script files for Dota 2. Using tstl (Typescript-to-Lua), it automatically generates a Lua file for the game to use for each file you're working on - this process is completely automatic from the moment it starts up.

Typescript is more strict compared to Lua, will use types to enforce certain functionalities, and will immediately alert you if you do something that doesn't make sense to it, and will show an error until you fix it. For instance, doing `GetStrength()` on an ability doesn't make sense and will show an error message.

Typescript can work well with most editors using plugins, however, [VSCode](https://code.visualstudio.com/) is recommended as it comes with Typescript support built in, and is a very powerful editor.

### Pros and Cons for using Typescript​

 **Pros:**

  * Enforces types, prevents you from using irrelevant functions.
  * Typescript is much more similar to most languages such as C#, Java, Javascript, and C (compared to Lua).
  * Auto-complete that will only show API functions that match the type being called.
  * Saves a ton of time by immediately finding logical errors in code, instead of having to find them in-game (sometimes as edge cases which may not be found during local testing).
  * Tremendous support of Typescript in the web (e.g. Stack Overflow) for common Typescript questions.
  * Typescript itself comes with very powerful built-in functionalities and types, such as Sets, Maps, and array functionalities. Additionally, it supports class and types inheritance.
  * Typescript is used for both Lua and Javascript, so you never have to switch between scripting languages; Typescript will convert it to the correct language for you.
  * Auto-complete for various arguments in APIs, such as a built-in event list.
  * Built-in enums and interfaces to make finding a specific Dota-based value extremely fast and easy.
  * Very easy to update new APIs when Valve (eventually) releases new functions.
  * Symlinks your Dota 2 folder for you as part of the setup, so you can easily integrate your changes into github, should you choose to do so.



 **Cons:**

  * Takes some time to set up for the first time.
  * Some rare types may be incorrect. Those can be updated manually when the need arises.
  * Sometimes, requires more of a set up for specific game logic, such as interfaces, typeguards and casts (this is again due to the nature of typed language).
  * Not very convenient to integrate for ongoing projects, though it can still work.
  * Referencing code or guides that are written in Lua might not be easy in Typescript due to differences between how the languages work.



### Setting Up TypeScript​

note

This guide assumes your operating system is Windows. If you have other operating systems, please contact us in the Typescript channel in the Discord below.

First, since Typescript uses Node.js, it must be installed on your computer. You can download NodeJS from [here](https://nodejs.org/en/). Simply choose the recommended version, which is the latest stable version. Download and install it with its default configuration.

Next, navigate to the [Typescript template](https://github.com/ModDota/TypeScriptAddonTemplate). This template has most of the files of a new addon configured for you, along with Typescript support. There are two versions to use the template:

  1. Without GitHub: if you're not planning to put your code in github, clone the above template. See below for explanation how.

  2. With GitHub: if you do plan on put your code in github, click on the ![Use this template](data:image/png;base64,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) button located in the top right of the github page. This will create a new github repository that uses the template under your name. Fill in the repository name, description, and whether it is public or private. You can leave "Include all branches" unchecked, then click "Create repository from template". When the new repository is created, clone it. See below for explanation how. For those unfamiliar with github, I recommend using a Github GUI, such as [Github Desktop](https://desktop.github.com/).




Cloning the repository meaning making a copy of it on your computer. This can be done by clicking on "Code", then on "Download Zip", as shown here:

![Cloning from Github](/assets/images/cloneRepo-0393f192490255cf7658da5aeb6a3da6.png)

You can then extract the ZIP anywhere you want. However, do NOT put it inside your Dota 2 folder. For example, I placed it in my Desktop, inside a folder named "Dota 2 custom games". The folder that becomes extracted is named `TypeScriptAddonTemplate-master`, so just rename the folder to more correctly reflect your custom game's name. For the sake of this tutorial, I named it `typescript-example`.

### Creating a Typescript-based addon in Dota​

Now that we have the files on our computer, we can set up a new addon game very quickly. There are a few steps remaining before doing so:

  * Go into your folder, in my case `typescript-example`.
  * Open `package.json` with any text editor. You'll notice that the `name` field is an empty string. Add the name of your custom game. For example, I named it `typescript_tutorial`. The field should look like this:


    
    
    "name": "typescript_tutorial",  
    

Save and close the file.

note

Make sure there is no folder with that name inside both the `game/dota_addons` and `content/dota_addons` of your Dota 2 game folder. The installation process will create those folders for you. If the folders exist, delete them first, or change the name in `package.json` to something else.

  * While inside the folder with the `package.json` file you just edited, click on the address bar, so the path to your folder becomes highlighted and editable as text. It should look like this:



![Click on path](/assets/images/clickAddressBar-13beaa0a49e0e1c848b0d79a1093c237.png)

  * While the path is highlighted, delete the text and instead type "cmd" and press Enter. This will open the Command Shell with the folder path shown right before your input cursor.

  * Type `npm install` and press enter. You'll see a loading bar, which should take up to a minute to complete. If it was successful, you should see that your `game` and `content` folders now have a "shortcut" icon next to them. They're now symlinked to your Dota 2 folder. The `typescript_tutorial` folder now exists for both `game/dota_addons/` and `content/dota_addons` in your Dota 2 folder.




note

Symlinked folders are copies of each other, where any action done on one is also applied on the other folder. Therefore, you can simply work on your conveniently placed folder (`Desktop/Dota 2 custom games/typescript-example` in my example), and it will automatically be applied on the Steam Dota 2 folder as well.

### Typescript Addon Structure​

Most of the structure for Typescript is identical to a standard Dota addon, such as having the `scripts/npc/` folder.

Note the `src` folder in the project's root. This is where you create and work on your Typescript files. When they're compiled, the resulting Lua files are placed in the appropriate locations, such as `/game/scripts/vscripts/` for files produced from `/src/vscripts/`. You can add additional folders inside those folders, which will keep the same routing in the output location.

You can change the structure of the folders inside the addon. However, you might need to adjust the output paths to match those changes. Some changes might break the mod, as Dota expects a specific structure to be set up (such as `game/scripts/vscripts`).

note

In `src`, you'll also find the `common` folder. This folder is extremely useful to storing interface decalarations that are shared between game logic and panorama, such as events and nettables, among other custom declarations such as enums. **This folder should only include d.ts files**.

There are a few additional files and folder responsible for making Typescript identify and work with Dota 2 API, and in the custom game in general. Most of those files can be left untouched. Most of those files are located at `/src/vscripts/` folder:

  * `tsconfig.json`: Configures how Typescript works in the Lua portion of the project. The same type of file exists in the `/src/panorama/` folder for javascript configuration for panorama.

  * `vscripts/lib/dota_ts_adapter.ts`: Responsible for registering various common classes, such as abilities, items, and modifiers.

  * `vscripts/lib/tstl-utils.ts`: Responsible for the typescript-to-Lua translation.

  * `vscripts/lib/timers.Lua` and `vscripts/lib/timers.d.ts`: The common Timers library is already included in default in its Lua form, with timers.d.ts including an interface to allow using the Timers library in Typescript.




### Updating Your Addon​

Occasionally, Valve will release new API or changes to existing API, usually at events and major patches. Your Typescript project will not automatically adjust to those changes as they need to be filed and typed first, which is usually done by the community who maintain Typescript template. However, when a new update is announced for Typescript for Dota 2, you can easily update your project. There are two ways to do so:

  * Using VSCode's terminal: If your chosen editor is VSCode and it has your project's folder loaded, click on Terminal -> New Terminal. A new terminal will open. Type `npm update` and press Enter.

  * Using cmd: Open cmd from your project's root directory (`Desktop/Dota 2 custom games/typescript-example` in my example), then type `npm update` and press enter.




The project will update to the newest version automatically.

### Activating The Watcher​

In order for your files to compile and have their compiled Lua or javascript equivalents, it is required to activate the watcher. The watcher watches over all changes done on your files in the project, and immediately produces a Lua or javascript equivalent, assuming the file compiled with no errors. There are three ways to activate the watcher:

  * Using VSCode's terminal: If you're using VSCode and it has your project's folder loaded, click on Terminal -> Run Build Task. Alternatively, you can use the hotkey for it, default `Ctrl+Shift+B`.

  * Using cmd: Open cmd from your project's root directory (`Desktop/Dota 2 custom games/typescript-example` in my example), then type `npm run dev` and press enter.

  * Other editors: Depending on the editor, the editor might have their own method to invoke a Run Build Task command; check the editor's documentation for more details.




### Normalized types​

When dumping enums from Dota's API, it comes with some predefined types. Some of those types are not very convenient to work with, so instead, we use the normalized types. Those normalized types change enums slightly, and their purpose is to increase readability of your code. The template comes with the normalized types already activated.

### Integrated Examples​

Per writing this tutorial, the Typescript template comes with a few examples to show how game logic is done in Typescript. I recommend keeping those files for reference until you're more comfortable with Typescript.

The examples are:

  * In `src/vscripts/abilities/heroes/meepo/earthbind_ts_example.ts`: A custom Meepo's Earthbind ability example.
  * In `src/vscripts/modifiers/modifier_panic.ts`: A custom modifier that restricts commands and orders the parent to periodically move to a random position near it.
  * In `src/vscripts/GameMode.ts`: Game mode logic examples, such as setting the maximum players for each team to 3. Timer and event listening examples are also shown here.
  * In `src/panorama/hud.ts`: Panorama example for subscribing and sending events.



You can see the how the examples apply in your addon:

  * Each hero you pick will have the custom Meepo's Earthbind ability added to it.
  * A welcome UI panel is shown in the center of the screen. Clicking on the close button in it will remove the panel and apply the panic modifier for a few seconds.



### Dedicated Typescript Channel in Moddota Discord​

We have a dedicated Typescript channel in our [moddota Discord](https://discord.gg/ZyHg6T9sTd) for every Typescript related question. Feel free to join and ask anything and we'll be happy to assist.

### What's Next?​

Check out the [Abilities in Typescript](/scripting/Typescript/typescript-ability) tutorial, which will show how to set up and code a basic ability to use in the game.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/typescript-introduction.md)

---

## Abilities in TypeScript

* [](/)
  * Typescript
  * Abilities in Typescript



On this page

# Abilities in Typescript

Regardless of what kind of game you're going for, you'll most probably have to code a couple of abilities for your characters to use to fight whatever they need to fight. Typescript enables coding many abilities with a ton of flexibility.

For this tutorial, I'm going to be demonstrating Typescript with a fairly, simple ability: Skywrath's Arcane Bolt. It fires a slow moving tracking projectile that deals damage that equals a base damage, plus a multiplier of the hero's intelligence.

This tutorial assumes you have basic knowledge of how abilities are registered for units or heroes. If you're not aware, I'd recommend the amazing guides by Elfansoer: [Ability Form](https://github.com/Elfansoer/dota-2-lua-abilities/wiki/Ability-Lua-Tutorial-1%3A-Ability-Form) and [Registering and Testing Ability](https://github.com/Elfansoer/dota-2-lua-abilities/wiki/Ability-Lua-Tutorial-2:-Registering-and-Testing-Ability). Note, however, that this guide assumes you'll be using Typescript instead of lua, so going over the rest of tutorials in Elfansoer's Ability Lua Tutorial are not required; however, he does a fantastic job explaining mechanics and techniques which are employed whenever coding an ability, regardless of language, so I'm going ahead and recommend going over those if you're interested.

Before we start, I'm going to go ahead and link the [moddota tools](https://moddota.com/api/#!/vscripts), which feature the most up to date API for custom games in Dota 2. If you were using Valve's wiki, ditch it; it hasn't been updated in years.

### Creating A New Ability​

Before we can start coding an ability, we need to define it. Typescript only replaces lua files, so anything with KVs, like the npc_abilities_custom.txt or npc_heroes_custom.txt files is completely unchanged.

In the npc_abilities_custom.txt, which is located in `scripts/npc` folder, we'll put the ability definition, which is taken straight from the original Dota 2:
    
    
    "typescript_skywrath_mage_arcane_bolt"  
    {  
        // General  
        //-------------------------------------------------------------------------------------------------------------  
        "BaseClass"                     "ability_lua"  
        "AbilityTextureName"            "skywrath_mage_arcane_bolt"  
        "ScriptFile"                      "abilities/typescript_skywrath_mage_arcane_bolt"  
        "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"  
        "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
        "AbilityUnitDamageType"         "DAMAGE_TYPE_MAGICAL"  
        "SpellImmunityType"             "SPELL_IMMUNITY_ENEMIES_NO"  
        "FightRecapLevel"               "1"  
        "AbilitySound"                  "Hero_SkywrathMage.ArcaneBolt.Cast"  
      
        // Casting  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityCastRange"              "875"  
        "AbilityCastPoint"              "0.1 0.1 0.1 0.1"  
      
        // Time  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityCooldown"               "5.0 4.0 3.0 2.0"  
      
        // Cost  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityManaCost"               "90"  
      
        // Special  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityValues"  
        {  
          "bolt_speed"              "500"  
          "bolt_vision"             "325"  
          "bolt_damage"             "60 80 100 120"  
          "int_multiplier"  
          {  
            "value" "1.6"  
            "CalculateSpellDamageTooltip" "1"  
          }  
          "vision_duration"         "3.34"  
        }  
        "AbilityCastAnimation"      "ACT_DOTA_CAST_ABILITY_1"  
    }  
    

Note that has slight changes: the ability was renamed to `typescript_skywrath_mage_arcane_bolt` in order to not conflict with the original ability. The ID was also removed, as it is not necessary for custom game abilities. Plus, for the sake of simplicity, the ability no longer has a scepter effect.

Three new fields were added:

  * `"BaseClass" "ability_lua"` \- though we code in Typescript, the resulting file will still be lua, which is what the engine expects. Therefore, we'll use "ability_lua" as the ability class type.

  * `"AbilityTextureName" "skywrath_mage_arcane_bolt"` \- since we're not using the original ability, it is necessary to add this field to tell the game which icon to use for the ability.

  * `"ScriptFile" "abilities/typescript_skywrath_mage_arcane_bolt"` \- this is the path of the file that has the code for the ability. Remember that it uses a relative path starting from the `/game/scripts/vscripts`, which has the `abilities` folder.




### Creating The Ability File​

Now that the ability is defined, it is time to start coding it. The first step would be to create a file named in `typescript_skywrath_mage_arcane_bolt` inside of source folder `src/vscripts/abilities`. The source is where we'll create the file, but when we compile it, it will be produce a lua file in `/game/vscripts/abilities`, as the game expects. Remember that even though we create the ability in Typescript, the engine works with lua files, which is what we need to produce.

We'll add the `.ts` extension, so the file that we'll be editing is `typescript_skywrath_mage_arcane_bolt.ts`.

note

While the [Watcher is active](/scripting/Typescript/typescript-introduction#activating-the-watcher), each time you save your file, a `.lua` file of the same name will be created in the respective output folder. This lua file will be used by the game, and will immediately update to correspond for any changes you do in your Typescript file.

### Adding The Ability Class​

First, we need to declare the ability's class. This is done by adding the following:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
      
    }  
    

Let's go over it quickly:

  * `@registerAbility()` \- This assigns the class to the global scope, which allows Dota to recognize the ability.

  * `export` \- Including this keyword is not actually required, but is recommended. It allows you to call this class as a type, if you need to do so at some point. For example, your ability might have a unique function or property that others might want to reference or call.

  * `class` \- Standard keyword for creating classes.

  * `typescript_skywrath_mage_arcane_bolt` \- This is exactly the same as the ability name. It must be identical to the name of the ability at the top of the ability definition.

  * `extends BaseAbility` \- All standard abilities extend the `BaseAbility` class, and inherit various traits of it, such as it being an entity.

  * `{}` \- Your entire code for that ability will be inside of those curly brackets.




While your cursor is inside that block, all functions inherited from `BaseAbility` will show up here. Simply start typing for the auto complete to immediately show you possible completions of what you typed.

note

If either @registerAbility() or BaseAbility are not recognized and show an error, highlight them, and use the `Ctrl + .` hotkey shortcut, which opens a small menu that suggests to import them. You'll see the top of the file now has the import statement: `import { BaseAbility, registerAbility } from "../lib/dota_ts_adapter";`, which shows that those are now imported from their respective files.

### Ability Properties​

Before we actually add any functions, we should add properties to the class. Those are very easily accessible from everywhere in the class, and are very useful to store information for that ability instance there. This is not required, but this is where I usually store any of the values for:

  * Particle paths

  * Sounds

  * Models

  * Any other information needed for the ability to function, such as a boolean or a number.




Let's add the ability properties for Ancient Bolt: its cast sound, its projectile particle, and its impact sound. Those are fetched from the asset browser. The class should now look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
    }  
    

note

The property names are arbitrary, and could be anything you'd like.

Note that after the property name, comes `: string`. This defines the type of the proeprty. Technically, this is not required, as Typescript will know that it is a string due to it being assigned to a string. However, it is good practice to add the type to increase readability and to make sure you don't assign it with something you didn't intend to.

### Coding The Ability: Properties and Methods​

Now that we've set up everything we need for the ability, let's start coding it. First, we'll add a OnSpellStart() method, which is called when the unit or hero casts it.
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
      
        }  
    }  
    

Inside OnSpellStart(), we want to fetch the target of the ability, which the bolt will be fired at. We'll initialize a variable to hold that information. We have two main types of variables that we can initialize:

  * `const` \- A constant. This variable must be assigned a value when it's called. This variables can never be reassigned. Useful for variables that should never change, such as instances of classes, or definitive results of a function that will be used as is.

  * `let` \- A standard variable. This variable can be undefined, be assigned immediately, or be assigned later. It can be reassigned as many times you need. Useful for things that change, such as numerical calculations, or boolean operators.




For this case, once we'll fetch our target, it should never change this cast, which is a good indication that we should use `const`. It will be immediately assigned to the ability's cursor target, using `this.GetCursorTarget()`.

note

`this` refers to the instance of the class where it is called, in this case, the `typescript_skywrath_mage_arcane_bolt` class. Since it inherits BaseAbility, it also inherits its functionality of fetching its cursor target.
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
        }  
    }  
    

### Checking Function's Arguments And Return Type​

In VSCode and similar editors that support it, hovering over a function will show a short explanation about it. For example, if we hover over `this.GetCursorTarget()`, we'll see the following:

![Function types](data:image/png;base64,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)

This lets us know that:

  1. This function doesn't expect any arguments.

  2. This function will return either a CDOTA_BaseNPC, or undefined.




In other words, `target` will either be assigned a CDOTA_BaseNPC, which usually corresponds to a unit or a hero, or, in the case it was called with the ability not being cast on any target, be assigned to `undefined`. This can occur, for example, if we try to use `this.GetCursorTarget()` on a No Target ability.

Typescript knows this, and will mark `target` as a potential undefined variable. Whenever we will try to use this variable, such as `target.GetHealth()`, it will warn us that `target` might be undefined, and therefore might not be able to call the function. The best practice is to use an if to check that target actually exists before any function that involves it.

note

If you're sure that variables that are potential undefined will be assigned with a valid value. You can force Typescript to ignore the potential for undefined by adding "!" to the end of the assignment. For example, we can use `const target = this.GetCursorTarget()!`. However, this is not recommended, as it defeats the purpose of having types in the first place - to make sure you don't do something that you cannot.

### Coding The Ability: Firing a projectile​

The next step would be to collect all remaining information for the projectile out of our ability definition. We want the projectile speed (`bolt_speed`) and vision range (`bolt_vision`). The rest will be collected on impact. Our function should now look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
        }  
    }  
    
    
    
    Since GetSpecialValueFor always returns a number, it doesn't have a potential for undefined. However, it will still return 0 if the engine will not be able to find the string provided for the ability.  
    

Next, we want to fire a tracking projectile at the target. The projectile cannot be dodged, and provides vision during its journey to the target, among other properties. Most of them have default values and can be omitted.

One of the great advantages of Typescript is that things like tracking projectiles have types. The editor immediately recognizes that we want properties for the tracking projectiles, and shows up possible properties for it when we go into it. Since this is a object full of properties, we need to open it with curly brackets:

![Tracking Projectile Properties](/assets/images/trackingProjectileProperties-72a0a391e37ed576362796807f174372.png)

note

In most editors, `ctrl + spacebar` is the hotkey to show auto-complete if it is not shown.

Let's fill it with properties we care about. The code will now look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            ProjectileManager.CreateTrackingProjectile(  
            {  
                Ability: this,  
                EffectName: this.projectile_arcane_bolt,  
                Source: this.GetCaster(),  
                Target: target,  
                bDodgeable: false,  
                bProvidesVision: true,  
                iMoveSpeed: bolt_speed,  
                iVisionRadius: bolt_vision,  
                iVisionTeamNumber: this.GetCaster().GetTeamNumber()  
            })  
        }  
    }  
    

The above codes fires a projectile at the target. Note that `Target` expects either a CDOTA_BaseNPC or undefined, so Typescript doesn't complain about it. If it hits the target, it will trigger the OnProjectileHit event, so let's use this function as well.

### Coding The Ability: Projectile Impact​

After creating the OnProjectileHit function, we might want to check if it comes with additional parameters that we can use. There are two ways to check for those additional parameters:

  1. Navigating to [moddota tools](https://moddota.com/api/#!/vscripts) and searching for the function, which shows the parameters:



![Dota Tools Parameters](/assets/images/dotaToolsSearchParameters-0b9ce9184943d0bb64b76eb3c9d861cb.png)

  2. In VSCode, Highlighting OnProjectileHit and pressing F12, which shows all references to the OnProjectileHit. The one defined in `api.generated.d.ts` includes the parameters of the function:



![Generated Types Parameters](/assets/images/apiGeneratedExample-1ba009e134b8828618d83ba666f8d3cb.png)

We can see that OnProjectileHit comes with a target that is either CDOTA_BaseNPC or undefined, and a location that is a Vector. The location will never be undefined and therefore always supplied, though it can be a Vector of (0, 0, 0).

We need to make sure there's a target. If there's no target, it means that the projectile didn't hit anything and simply dissipated (the target died or became invisible, for instance), which mean we don't need to do anything else. We use the `!` before the expression for negative testing, which will apply if `target` is either false or undefined.
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            ProjectileManager.CreateTrackingProjectile(  
            {  
                Ability: this,  
                EffectName: this.projectile_arcane_bolt,  
                Source: this.GetCaster(),  
                Target: target,  
                bDodgeable: false,  
                bProvidesVision: true,  
                iMoveSpeed: bolt_speed,  
                iVisionRadius: bolt_vision,  
                iVisionTeamNumber: this.GetCaster().GetTeamNumber()  
            })  
        }  
      
        OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector)  
        {  
            if (!target) return;  
        }  
    }  
    

Next, Let's quickly collect the remaining information of the ability from the ability definition: we need base damage, intelligence multiplier, and the vision's radius and duration after impact:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            ProjectileManager.CreateTrackingProjectile(  
            {  
                Ability: this,  
                EffectName: this.projectile_arcane_bolt,  
                Source: this.GetCaster(),  
                Target: target,  
                bDodgeable: false,  
                bProvidesVision: true,  
                iMoveSpeed: bolt_speed,  
                iVisionRadius: bolt_vision,  
                iVisionTeamNumber: this.GetCaster().GetTeamNumber()  
            })  
        }  
      
        OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector)  
        {  
            if (!target) return;  
      
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
            const bolt_damage = this.GetSpecialValueFor("bolt_damage");  
            const int_multiplier = this.GetSpecialValueFor("int_multiplier");  
            const vision_duration = this.GetSpecialValueFor("vision_duration");  
        }  
    }  
    

The last two things that we need to do is apply a AddFOWViewer, which shows an area of the map in fog of war, and apply damage to the target based on base damage plus a multiplier of the caster's intelligence. Adding the FOW Viewer is easy, so let's get it out of the way by adding the line:
    
    
    AddFOWViewer(this.GetCaster().GetTeamNumber(), location, bolt_vision, vision_duration, false);  
    

location is the parameter fetched from the function, while bolt_vision and vision_duration were retrieved from the ability definition. For damage, we have a small calculation. In order to do that calculation readable, let's make a `damage` variable. We want to assign it with the base damage, and then calculate the intelligence multiplier. Sounds like a good use case for a `let` variable initializer. We'll add the following line:
    
    
    let damage = bolt_damage;  
    

Now we want to add damage on top of the base damage. We can use the `+=` operator to sum the value on the right with the value already stored in `damage`, so the plan is to do `damage += this.GetCaster().GetIntellect() * int_multiplier`. However, for some reason, `GetIntellect()` is not shown as a function.

### Coding The Ability: Final Push​

So why isn't GetIntellect() showing up? The best way to do is check which class is GetIntellect() under. [Running a search in moddota tools](https://moddota.com/api/#!/vscripts?search=GetIntellect) will show us that the class GetIntellect() belongs to is `CDOTA_BaseNPC_Hero`, which makes sense: only heroes have intelligence; units, buildings, and other entities don't. But our caster is a hero, so what's the problem?

If we hover over `this.GetCaster()`, we'll see the following information on it:

![GetCaster Properties](data:image/png;base64,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)

According to the return type, GetCaster() returns a CDOTA_BaseNPC. But as we've established before, GetIntellect() only applies for the `CDOTA_BaseNPC_Hero` class. So we'll have to let Typescript know that our caster is a hero by casting. We cast by adding `as classname`; in this case, `this.GetCaster() as CDOTA_BaseNPC_Hero`. As the caster's type is now a hero, you can call hero related functions, such as `GetIntellect()`.

note

Generally, casting is not considered a good practice as you force Typescript to assume you're absolutely sure that the type is correct. Typeguards, which will be covered in a later tutorial, are considered a good way to make sure you don't use a type that doesn't support it. For instance, imagine what happens if at some point in your custom game, you give this ability to a creep, which doesn't have any Intelligence stat.

We'll only increase the intelligence multiplier after we made sure the caster is a hero; otherwise, we'll only use the base damage. After the check and the cast, our code should look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            ProjectileManager.CreateTrackingProjectile(  
            {  
                Ability: this,  
                EffectName: this.projectile_arcane_bolt,  
                Source: this.GetCaster(),  
                Target: target,  
                bDodgeable: false,  
                bProvidesVision: true,  
                iMoveSpeed: bolt_speed,  
                iVisionRadius: bolt_vision,  
                iVisionTeamNumber: this.GetCaster().GetTeamNumber()  
            })  
        }  
      
        OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector)  
        {  
            if (!target) return;  
      
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
            const bolt_damage = this.GetSpecialValueFor("bolt_damage");  
            const int_multiplier = this.GetSpecialValueFor("int_multiplier");  
            const vision_duration = this.GetSpecialValueFor("vision_duration");  
      
            AddFOWViewer(this.GetCaster().GetTeamNumber(), location, bolt_vision, vision_duration, false);  
      
            let damage = bolt_damage;  
            if (this.GetCaster().IsHero())  
            {  
                damage += (this.GetCaster() as CDOTA_BaseNPC_Hero).GetIntellect() * int_multiplier;  
            }  
        }  
    }  
    

All that's left is to apply the damage on the target. Same as the CreateTrackingProjectile, ApplyDamage is also typed, and will automatically show us the options. Unlike CreateTrackingProjectile, none of those properties are optional and are all mandatory to make a proper damage instance. That means that Typescript will ensure you assign all the properties with valid values.

Our code should now look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            ProjectileManager.CreateTrackingProjectile(  
            {  
                Ability: this,  
                EffectName: this.projectile_arcane_bolt,  
                Source: this.GetCaster(),  
                Target: target,  
                bDodgeable: false,  
                bProvidesVision: true,  
                iMoveSpeed: bolt_speed,  
                iVisionRadius: bolt_vision,  
                iVisionTeamNumber: this.GetCaster().GetTeamNumber()  
            })  
        }  
      
        OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector)  
        {  
            if (!target) return;  
      
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
            const bolt_damage = this.GetSpecialValueFor("bolt_damage");  
            const int_multiplier = this.GetSpecialValueFor("int_multiplier");  
            const vision_duration = this.GetSpecialValueFor("vision_duration");  
      
            AddFOWViewer(this.GetCaster().GetTeamNumber(), location, bolt_vision, vision_duration, false);  
      
            let damage = bolt_damage;  
            if (this.GetCaster().IsHero())  
            {  
                damage += (this.GetCaster() as CDOTA_BaseNPC_Hero).GetIntellect() * int_multiplier;  
            }  
      
            ApplyDamage(  
            {  
                attacker: this.GetCaster(),  
                damage: damage,  
                damage_type: DamageTypes.MAGICAL,  
                victim: target,  
                ability: this,  
                damage_flags: DamageFlag.NONE  
            });  
        }  
    }  
    

Lastly, I forgot to include sounds, so let's go ahead and emit sounds for casting (`sound_cast`) and sound for impact (`sound_impact`). The final code should look like this:
    
    
    @registerAbility()  
    export class typescript_skywrath_mage_arcane_bolt extends BaseAbility  
    {  
        sound_cast: string = "Hero_SkywrathMage.ArcaneBolt.Cast";  
        sound_impact: string = "Hero_SkywrathMage.ArcaneBolt.Impact";  
        projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";  
      
        OnSpellStart()  
        {  
            const target = this.GetCursorTarget();  
      
            const bolt_speed = this.GetSpecialValueFor("bolt_speed");  
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
      
            EmitSoundOn(this.sound_cast, this.GetCaster());  
      
            ProjectileManager.CreateTrackingProjectile(  
                {  
                    Ability: this,  
                    EffectName: this.projectile_arcane_bolt,  
                    Source: this.GetCaster(),  
                    Target: target,  
                    bDodgeable: false,  
                    bProvidesVision: true,  
                    iMoveSpeed: bolt_speed,  
                    iVisionRadius: bolt_vision,  
                    iVisionTeamNumber: this.GetCaster().GetTeamNumber(),  
                }  
            )  
        }  
      
        OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector)  
        {  
            if (!target) return;  
      
            EmitSoundOn(this.sound_impact, target);  
      
            const bolt_vision = this.GetSpecialValueFor("bolt_vision");  
            const bolt_damage = this.GetSpecialValueFor("bolt_damage");  
            const int_multiplier = this.GetSpecialValueFor("int_multiplier");  
            const vision_duration = this.GetSpecialValueFor("vision_duration");  
      
            AddFOWViewer(this.GetCaster().GetTeamNumber(), location, bolt_vision, vision_duration, false);  
      
            let damage = bolt_damage;  
            if (this.GetCaster().IsHero())  
            {  
                damage += (this.GetCaster() as CDOTA_BaseNPC_Hero).GetIntellect() * int_multiplier;  
            }  
      
            ApplyDamage(  
                {  
                    attacker: this.GetCaster(),  
                    damage: damage,  
                    damage_type: DamageTypes.MAGICAL,  
                    victim: target,  
                    ability: this,  
                    damage_flags: DamageFlag.NONE  
                }  
            );  
        }  
    }  
    

### Video Record​

Below is a short video record that shows the application of Skywrath Mage's Ancient Bolt in Typescript as explained in this section.

### What's Next?​

The next tutorial [Modifiers in Typescript](/scripting/Typescript/typescript-modifier) explains how to create a basic modifier, and link the modifier to an ability via Typescript.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/typescript-ability.md)

---

## Modifiers in TypeScript

* [](/)
  * Typescript
  * Modifiers in Typescript



On this page

# Modifiers in Typescript

Modifiers are an extremely important part of almost any Dota custom game. They allow you to modify certain properties of your hero, deal damage to it over time, or apply various effects on it. Like abilities, we'll also create them in Typescript.

We'll use an easy example which should cover a lot of common concepts for modifiers. This example is Skywrath's Ancient seal, which is an ability that simply applies a modifier to an enemy. The modifier applies the Silenced state on the enemy, and reduces its magic resist property by a percentage.

note

For simplicity sake, assume the ability has no shard or talents upgrades.

### Defining The Ability​

For starters, let's define the ability that applies the modifier. We'll begin with the KV, which is straightforward. Open `/game/scripts/npc/npc_abilities_custom.txt` and copy the following content inside the `"DOTAAbilities"` key.
    
    
    //=================================================================================================================  
    // Skywrath Mage: Ancient Seal  
    //=================================================================================================================  
    "typescript_skywrath_mage_ancient_seal"  
    {  
        // General  
        //-------------------------------------------------------------------------------------------------------------  
        "BaseClass"                     "ability_lua"  
        "AbilityTextureName"            "skywrath_mage_ancient_seal"  
        "ScriptFile"                    "abilities/typescript_skywrath_mage_ancient_seal"  
        "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"  
        "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_BOTH"  
        "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
        "SpellImmunityType"             "SPELL_IMMUNITY_ENEMIES_NO"  
        "SpellDispellableType"          "SPELL_DISPELLABLE_YES"  
        "AbilitySound"                  "Hero_SkywrathMage.AncientSeal.Target"  
      
        // Casting  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityCastRange"              "700 750 800 850"  
        "AbilityCastPoint"              "0.1 0.1 0.1 0.1"  
      
        // Time  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityCooldown"               "14"  
      
        // Cost  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityManaCost"               "80 90 100 110"  
      
        // Special  
        //-------------------------------------------------------------------------------------------------------------  
        "AbilityValues"  
        {  
          "resist_debuff"           "30 35 40 45"  
          "seal_duration"           "3.0 4.0 5.0 6.0"  
        }  
        "AbilityCastAnimation"      "ACT_DOTA_CAST_ABILITY_3"  
    }  
    

As the `ScriptFile` denotes it, the lua file should be in `vscripts/abilities/`. To do so, we'll create our TS file in `src/vscripts/abilities/`, where it would be appropriately routed when compiled. Create the `typescript_skywrath_mage_ancient_seal.ts` file and open it.

### Coding The Ability​

The ability itself is very straightforward, since all it does is apply a modifier on the target. For simplicity sake, let's decide the modifier will be named `modifier_typescript_ancient_seal`. Following is the ability:
    
    
    import { BaseAbility, registerAbility } from "../lib/dota_ts_adapter";  
      
    @registerAbility()  
    export class typescript_skywrath_mage_ancient_seal extends BaseAbility {  
        sound_cast = "Hero_SkywrathMage.AncientSeal.Target";  
      
        OnSpellStart() {  
            // Special values  
            const seal_duration = this.GetSpecialValueFor("seal_duration");  
      
            // Fetch target  
            const target = this.GetCursorTarget()!;  
      
            // Play sound  
            target.EmitSound(this.sound_cast);  
      
            // Add modifier  
            target.AddNewModifier(this.GetCaster(), this, "modifier_typescript_ancient_seal", { duration: seal_duration });  
        }  
    }  
    

Great! This applies the modifier on the target. The caster of the ability, denoted by `this.GetCaster()` in the first argument, is assigned to be modifier's associated caster, while the ability itself, denoted by `this` in the second argument, is assigned as the modifier's associated ability. We can get those by calling `this.GetCaster()` and `this.GetAbility()`, respectively from the modifier.

note

The unit we're adding the modifier to, in this case our `target`, becomes the parent of the modifier. We can get it from the modifier with `this.GetParent()`. This can be useful in various cases, such as when emitting sound from it, dealing damage to it, or placing particles on its current location.

Now let's create the modifier.

### Creating The Modifier​

This part is absolutely up to you and your organizational preferences: some prefer to add the modifier as a separate file, while some prefer to have the ability and its associated modifiers in the same file. You could place the modifier file inside `src/vscripts/modifiers`, for instance. In order to keep the guide simple, let's make the modifier in the same file.

Very similar to an ability in TS, modifiers are also a class. We create a modifier with the following structure:
    
    
    @registerModifier()  
    export class modifier_typescript_ancient_seal extends BaseModifier {  
      
    }  
    

As you can see, it's very similar to an ability, replacing `@registerAbility()` with `@registerModifier()`, and the `BaseAbility` extension with `BaseModifier`. Note that `@registerModifier()` takes care of LinkLuaModifier for you, so you don't need to call it on TS modifiers.

### Typechecking Modifier Calls​

Before we continue, one thing we must do is link the ability to the modifier, which makes sure the modifier is registered. In addition, rather than relying on a string for the naming of the modifier, we'll link the class name.

To do so, simply remove the quotation marks around the modifier name, then add `.name` to it. See below the code before and after linking the class:

  * Before
  * After


    
    
    // Add modifier  
    target.AddNewModifier(this.GetCaster(), this, "modifier_typescript_ancient_seal", { duration: seal_duration });  
    
    
    
    // Add modifier  
    target.AddNewModifier(this.GetCaster(), this, modifier_typescript_ancient_seal.name, { duration: seal_duration });  
    

This results at the exact name of the modifier as a string, which is enforced by Typescript.

note

If your modifier is in another file, you'll have to import it first before you can link it in the above fashion.

### Coding The Modifier​

Alright. Let's set and apply the properties for the modifier such as the particle effect. In addition, let's set some useful properties via modifier functions. Also, this is my personal choice, but I usually put ability specials as a class property so they can be easily used everywhere in the modifier.
    
    
    @registerModifier()  
    export class modifier_typescript_ancient_seal extends BaseModifier {  
        particle_seal = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_ancient_seal_debuff.vpcf";  
        resist_debuff?: number;  
      
        // When set to false, shows the modifier icon on the HUD. Otherwise, the modifier is hidden.  
        IsHidden() {  
            return false;  
        }  
      
        // When set to true, the outer circle of the modifier is red, indicating that the modifier is a debuff. Otherwise, the outer circle is green.  
        IsDebuff() {  
            return true;  
        }  
      
        // When set to true, the modifier can be purged by basic dispels.  
        IsPurgable() {  
            return true;  
        }  
      
        // Event call that is triggered when the modifier is created and attached to a unit.  
        OnCreated() {  
            // Get the ability and fetch ability specials from it  
            const ability = this.GetAbility();  
            if (ability) {  
                this.resist_debuff = ability.GetSpecialValueFor("resist_debuff");  
            }  
      
            // Add particle effect  
            const particle = ParticleManager.CreateParticle(this.particle_seal, ParticleAttachment.OVERHEAD_FOLLOW, this.GetParent());  
            ParticleManager.SetParticleControlEnt(particle, 1, this.GetParent(), ParticleAttachment.ABSORIGIN_FOLLOW, "hitloc", this.GetParent().GetAbsOrigin(), true);  
            this.AddParticle(particle, false, false, -1, false, true);  
        }  
    }  
    

Okay, so the modifier is defined, but its main parts of it are not yet defined: the silence and the magic resistance reduction. Let's do those next.

### States​

The `CheckState` function that modifiers have is called every frame and sets the state of the parent based on its modifiers. The function gets a bunch of states and pairs each of them with a boolean that decides whether the state should be applied.

We only need to silence the target, so that's the only state we require here. Add the following to the modifier:
    
    
    CheckState() {  
        return {[ModifierState.SILENCED]: true}  
    }  
    

Note the syntax: the curly braces start a [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype) of states, each assigned a boolean. If you have multiple states - boolean pairs, separate each pair with a comma.

### Modifier Properties​

The `DeclareFunctions` declares which function properties are included in this modifier. Since we need the property that modifies the magical resistance, let's call it here:
    
    
    DeclareFunctions() {  
        return [ModifierFunction.MAGICAL_RESISTANCE_BONUS];  
    }  
    

Unlike states, DeclareFunctions expects an array of modifier functions. If you have multiple modifier functions, separate them with a comma.

note

When hovering over a modifier function's name (e.g. `MAGICAL_RESISTANCE_BONUS`), a tooltip appears, showing you the name of the linked property function call. Simply copy the function into the modifier. This also has auto complete, if you prefer to do so manually.

Now that we declared the magical resistance bonus, let's return a negative bonus so the enemy get a negative magic resistance bonus from this modifier:
    
    
    GetModifierMagicalResistanceBonus() {  
        return this.resist_debuff ?? 0;  
    }  
    

Note that this function expects a number - anything else is not accepted.

note

`this.resist_debuff` is supposedly a number that is fetched from the ability special value. However, if for some reason `this.resist_debuff` is not initialized, it would be undefined, which is not accepted by this function. Using [Nullish Coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing), the value is defaulted to 0 if `this.resist_debuff` is undefined.

That's it! A simple modifier is done with a bunch of simple lines, which are all typechecked for us.

### What's Next?​

Next, you can learn about events in the next tutorial: [Events and Timers in Typescript](/scripting/Typescript/typescript-events).

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/typescript-modifier.md)

---

## Events and Timers in TypeScript

* [](/)
  * Typescript
  * Events and Timers in Typescript



On this page

# Events and Timers in Typescript

As you may know, Dota has many events. While developing a custom game, listening to events is very useful, as it allows you to do something when something occurs. For example, listening to an event that triggers on death, whenever a hero, unit or building are killed. Events will supply some information about the instance of that event. For example, in the above event, the killer and the victim will be included in the parameters.

### Important Note Before We Begin​

This section has many async functions that have callbacks as arguments. If you're not aware of what those are, W3Schools has great straightforward articles explaining [callbacks](https://www.w3schools.com/js/js_callback.asp) and [async functions](https://www.w3schools.com/js/js_asynchronous.asp) on the subject.

This tutorial will reference and explain code written in the Typescript Template. If you do not have it, please read the [Typescript Introduction](/scripting/Typescript/typescript-introduction) article for instructions. Though this will use the written code as examples, feel free to play around with the template as practice and to really understand how it all ties together.

### Built-in Events​

Built-in events, of which there are many, cannot be changed in terms of when they are triggered and what parameters are provided, so bear that in mind. However, you can add a listener to the event with a callback function - a function that will run when that event triggers.

Open the `GameMode.ts` file in the `/src/vscripts` folder of your project. There, you can find examples of events that we're listening to. For example, let's take the following event:
    
    
    ListenToGameEvent("npc_spawned", event => this.OnNpcSpawned(event), undefined);  
    

Calling the `ListenToGameEvent` creates a new listener to that event. In the first argument, a valid event's name must be provided. Typescript knows which event names are allowed and will refuse any other name that is not one of the known events. Not only that, it also knows what type of parameters each event pass along. You can use your IDE's intellisense (e.g. in VSCode it is ctrl + space by default) to show the name of all events, then simply select the event you want.

Then, the second argument is the callback function. Note that it has the `event => SomeFunctionName(event)` syntax, named the arrow function expressionn syntax. This is used to define a function that will run when the event triggers. Given an `event` object which describes the event, the function is called and run just like any other code.

The function can be an external function, like `this.OnNpcSpawned` in the example above where it is defined, or you can write out the function body right there. For example:
    
    
    ListenToGameEvent("npc_spawned", event => {  
        print("we just fired npc spawned event!");  
    }, undefined);  
    

note

I do not recommend writing function bodies in this manner unless it is a few lines at most, as the code can get messy and not very readable.

As was already stated, Typescript knows what are the parameters provided when an event is triggered. They are stored in an object that we call `event`. If we're using an external function, that function should expect that event, which makes sure it is only used when the appropriate event runs.

In the example of `this.OnNpcSpawned(event)`, we defined an external function in the same class to call whenever the event triggers, which looks like this:
    
    
    OnNpcSpawned(event: NpcSpawnedEvent) {  
        // After a hero unit spawns, apply modifier_panic for 8 seconds  
        const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event  
        // Give all real heroes (not illusions) the meepo_earthbind_ts_example spell  
        if (unit.IsRealHero()) {  
            if (!unit.HasAbility("meepo_earthbind_ts_example")) {  
                // Add lua ability to the unit  
                unit.AddAbility("meepo_earthbind_ts_example");  
            }  
        }  
    }  
    

There are a few things we can see here. First, the `event: NpcSpawnedEvent`, which describes the type of event this function requires. This has two advantages - first, if you use an incompatible event and callback, Typescript will notify you immediately. Second, that function knows which parameters are provided for you to use.

If you're unsure which type you should use, you can hover over `event` in the event listener call, and Typescript will let you know which type this event is. For example, hovering over the event of `npc_spawned` will show you the `NpcSpawnedEvent` type:

![Event type of predefined events](data:image/png;base64,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)

Since the event triggered, we know something spawned. In the function itself, we want to know what spawned and refer to it. If we check the properties of the `NpcSpawnedEvent` event, we can see that it has two properties: `entindex`, which is of type EntityIndex, and `is_respawn`, which is of type boolean.

note

You can look up types in the editor by clicking on a type and pressing F12.

The entindex refers to the Entity Index that maps to the entity that was spawned. If we wanted to get the entity itself, we would need to cast it to a handle, which can be done by calling `EntIndexToHScript`. Then, you can refer to that entity (usually a unit) and do whatever you need to happen when the unit spawns. You can also use the `is_respawn` property to determine if that unit has respawned if it was not its first time spawning.

### Custom Events​

In the likely case where the built-in events do not cover a situation that you want to trigger an event on, Dota allows you to create custom events. As with built-in events, Typescript plays a big part in creating custom events and ensuring the types of those events make sense.

Before we begin, we must first define the event. For that, we use a .d.ts file. If you want, you can read more about .d.ts files [here](https://en.wikipedia.org/wiki/TypeScript#Declaration_files). The bottom line is, we use .d.ts files to describe to Typescript about types of things that are globally available.

Navigate to `/src/common/events.d.ts`. There you can use the `CustomGameEventDeclarations` interface to add as many custom events as you want. The template designed the custom events to be pulled from events shown in this interface. We can see that it already has the `example_event` event which will be used as its name, and a type of `ExampleEventData`, which is later defined as an object that has various properties, such as `myNumber`.

note

The `/common` folder is for all types shared by both serverside and panorama, such as events or nettables. This means that you can define the event once and both sides will be able to see and use that event.

When you want to fire a custom event, you can use the `CustomGameEventManager.Send_ServerToPlayer` function to do so. There are other variants of this function, but to put it simply, this variant sends an event to a specific player. In this case, the first argument defines which player to send the event to, and the second argument defines which event it should trigger for that player. Note that you can only use custom events that were defined in the `CustomGameEventDeclarations` interface - Typescript will throw an error otherwise. The third argument is shaped based on the selected event, and enforces that the event is sent with all the required information for that event.

You can find an example of the `CustomGameEventManager.Send_ServerToPlayer` function call in `GameMode.ts`, which will show how it all ties together.

### Timers​

Timers is a library written in lua. We can use the Timers library to delay actions for a certain amount of time, after which a callback function is called. It can be used as a delay or as a repeat call that happens every few seconds, for example.

note

Timers is written in lua. Instead of converting it to Typescript, we use the file `timers.d.ts` to describe to Typescript how Timers is structured, allowing us to use the Timers library as is.

Going back to `GameMode.ts`, the file includes a couple Timers example. In both of them, the execution is simple. Let's inspect one of them:
    
    
    // Automatically skip setup in tools  
    if (IsInToolsMode()) {  
        Timers.CreateTimer(3, () => {  
            GameRules.FinishCustomGameSetup();  
        });  
    }  
    

This is a snippet of code that triggers when the game goes into the Custom Game Setup screen, where players can assign themselves to teams. In order for devs to not have to wait on this screen on every run, we added a check - if this is in tools mode (meaning, we're launching the game from the Dota Workshop Tools), then we create a timer. After 3 seconds, we run `GameRules.FinishCustomGameSetup();` which skips to the next step.

Note that the code does not wait for the timer to finish. The timer is created and the code moves on to the next line immediately. When the provided amount of time passes in game, the timer resolves, executing the callback function provided to it.

Timers can be set to repeat by returning a numeric value representing seconds. For instance, we could create the following timer:
    
    
    Timers.CreateTimer(5, () => {  
      print(`The current time in dota is: ${GameRules.GetDOTATime()}`);  
      return 1;  
    });  
    

Doing this will create a timer that initially takes 5 seconds to execute. Since we're returning 1, the timer will repeat every 1 second. In this example, on every execution, it will print the current time and message.

Note that you can return different values on each run to make the timer run with various delays on each repeat. Additionally, returning with no value or with `undefined` will make the timer no longer repeat, which can be used as a stop condition for a repeating timer.

note

Timers respect pauses. This means that they will not progress while the game is paused, postponing the code execution until the game is unpaused.

### Using Timers with Promises to delay code​

Sometimes you want to make a sequence of effects that occur one after another, but rather than immediately, you want them to apply after a short period has passed. While you could do that in Timers, that would create a series of callbacks, which can make the code messy and hard to read.

Instead, we could wrap the timer in a Promise. In case you are not aware of Promises, you can read on [Promises in W3Schools](https://www.w3schools.com/js/js_promise.asp). We will also use promises with the async/await concept, which you can read on [Async/Awaits in W3Schools](https://www.w3schools.com/js/js_async.asp). Those are somewhat complex subjects, so feel free to discuss with us in Moddota on it or seek additional articles or videos on it.

Let's make a `sleep` function that will return a Promise that resolves when the timer executes. I usually make all utility functions such as this in a different file, usually named `utils.ts`. Go to `/src/vscripts/libs` folder and create a file named `utils.ts`.

There, we want to create the sleep function, which looks like this:
    
    
    export function sleep(duration: number) {  
        return new Promise((resolve, reject) => {  
            Timers.CreateTimer(duration, () => resolve(""));  
        });  
    }  
    

As you can see, the function returns a Promise, which will resolve at some point in the future. You can wait then await for the promise to resolve using async/await. For the purposes of this example, let's look at the `OnNpcSpawned` function. It converts an entindex to a unit, then checks if it is a real hero (e.g. not an illusion). Then, if it doesn't have the ability, it gives him the ability immediately. Let's pretend that instead, we want to give it the ability after 5 seconds have passed.

First, since we want to use `await`, we must convert this function to an async function. Add the `async` keyword right before the function name:
    
    
    private async OnNpcSpawned(event: NpcSpawnedEvent) {  
    

Then, import `sleep` from `utils.ts`:
    
    
    import { sleep } from "./lib/util";  
    

And now we can sleep for 5 seconds using await:
    
    
    private async OnNpcSpawned(event: NpcSpawnedEvent) {  
        // After a hero unit spawns, apply modifier_panic for 8 seconds  
        const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event  
        // Give all real heroes (not illusions) the meepo_earthbind_ts_example spell  
        if (unit.IsRealHero()) {  
            if (!unit.HasAbility("meepo_earthbind_ts_example")) {  
                // Wait for 5 seconds before giving it the ability  
                await sleep(5);  
      
                // Add lua ability to the unit  
                unit.AddAbility("meepo_earthbind_ts_example");  
            }  
        }  
    }  
    

As you can see, this makes the code very clean and easy to use. Non-repeating Timers can be converted to sleep in this way to achieve the same result with a cleaner code flow.

There are many things that you can use async/await for, such as waiting for tracking projectiles to hit, waiting until an animation finishes and so on.

### What's Next?​

Feel free to start experimenting on your own! If you have something that you'd like me to cover in Typescript, please contact me in Discord and let me know.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/typescript-events.md)

---

## Tooltip Generator

* [](/)
  * Typescript
  * Tooltip Generator



On this page

# Tooltip Generator

Recently, the development of a new project that named the Tooltip Generator has been completed. This project was inspired by Ark's Eaglesong idea which purpose was to make adding localization as easy as possible, while reducing the chance to make mistakes. This project includes a secondary part, completely optional, named the Tooltip Codemaker, which helps those that already have a working addon with a lot of localization.

### The Tooltip Generator​

The tooltip generator creates predefined Typescript objects which fit into one of three categories: Standard Tooltips, Abilities, and Modifiers. The advantage to that is the ability to write a very easy to read object by code based on the group of tooltips you're making. Whenever you make a change to any of the files and save, the Tooltip Generator will immediately take the code you've created and makes localization files (such as addon_english.txt) that the game can read. This can be expanded further to support an infinite array of languages as well using the same code with slight changes to the fields you want to change.

### Wait, Typescript? My setup is lua!​

This project is designed to work on both lua and Typescript based addons. While you will have to use Typescript specifically to make the localization, the rest of your addon is completely unaffected by this.

note

Most editors have plugins that add Typescript support. VSCode has built-in Typescript support and requires no plugins. In order to view Typescript syntax, make sure that your editor has Typescript support installed or enabled.

### Why would I ever bother using that though?​

There are a few of reasons why I've started this project in the first place. I was getting frustrated by the "rules" of the KV, such as having to copy "DOTA_Tooltip_Ability_my_ability_name" over and over. I constantly mistyped "Description", and occasionally used only 2 percentages instead of 3 on "%something%%%" to show a variable with a percentage. And if I ever had a missing quote, the entire thing got broken, which is extremely annoying.

In addition, as I've developed my game, my addon file became **HUGE**. Because of the way Dota reads this file, you cannot use #base to split this into files, and some people have resorted to making a manual script that does that. It's a lot of hassle and wasted time for everyone involved.

This project attempts to solve all those problems:

  * It makes sure you never do any formatting mistake.
  * You only make a single object per ability or modifier and fill all the details for it.
  * You can use predefined enums to call modifier properties correctly.
  * You can split it to as many files as you want.
  * You can easily use your own variables to use keywords that repeat.
  * All languages are managed in a single location and are properly distributed to the appropriate files.



I encourage you to at least give this project a try. You won't be disappointed.

### What do I need in order to use it?​

This project uses Typescript and npm packages to function. Both of those require [NodeJS](https://nodejs.org/en/). If you don't have it installed, or have a really old version, download the latest stable version from NodeJS site and install it.

### The Tooltip Codemaker​

When I was developing the tooltip Generator, I manually did every single localization I had to code, and when I was done, I thought to myself: why didn't I just do a script that does it for me?

This gave birth to the Tooltip Codemaker. The Tooltip Codemaker is the exact opposite of the Tooltip Generator: instead of turning code into localization KVs, it turns localization KVs into code! This is particularly useful if you already have a lot of localization done by KV.

Most of the time, you'll only use this tool no more than once, to turn your current KV into code. After that, the assumption is that you'll continue creating the rest of the tooltips using the Tooltip Generator. If your addon is completely empty, you don't need it at all.

Note that the Codemaker isn't, and cannot be perfect, due to the nature of how localization KVs are defined. It looks for keywords like `_Description`, `_Lore`, `_Note` etc. to pinpoint the actual ability name, then groups all similar KVs to that ability. Abilities that have very similar naming scheme can be mistakenly grouped together; for example, in vanilla Dota, the `ice_blast` and `ice_blast_release` abilities were grouped as one, since it thought `_release` was one of the ability specials of `ice_blast`. Just make sure to take a look at the code after running the script and fix the mistakes manually, if any.

The script assumes that everything that begins with `Dota_Tooltip_Ability_...` is an ability, and everything that begins with `Dota_Tooltip_modifier_...` is a modifier (case insensitive). Everything else is regarded as a Standard Tooltip. That means that depending on your KVs, you might have to make changes to the compiler before running it in order to have it work on your addon's localization files.

You can find the Tooltip Codemaker in [this github repo](https://github.com/Shushishtok/tooltip-codemaker). Follow the readme for instructions on how to use it.

### Installing the Tooltip Generator​

In order to use the Tooltip Generator, you must install it. This only needs to be done once per project. Navigate to the game's root of your addon. For most projects, that would be in `dota 2 beta/game/dota_addons/your_addon/`. If you're using symlinks or a Typescript configuration, the symlinked folder is most likely to be the root of your folder.

Click on the path bar of the folder, type `cmd` and press enter. This should open the command line on the folder you're currently in. If you're not sure where the path bar is, press Alt+D to highlight it.

In the command line, type `npm install @shushishtok/tooltip_generator`. The installation should take a few seconds, which triggers an additional, "final" installation, which can take up to a few minutes. When the installation completes, it should show a success message and a few warnings - you can ignore those warnings. Keep the command line open for now.

After the installation is completed, a new file `package.json` is added to your addon's root, along with a `node_modules` folder. You can mostly ignore those files completely.

The installation assumes that your `resource` folder is located on your root, which should be the case for standard addons created by the Dota Workshop. If so, skip ahead. However, if this is not the case, open `package.json` and change `"~resource": "resource",` field to match the path from the root folder to that folder. For example, Typescript configurations using Moddota's Typescript Template will need to change it to `"~resource": "game/resource",`. Save the file and close it.

On the command line, type `npm run init` and press enter. This added a few files to the your `resource` folder, which you can also ignore. You'll also see a new folder, `localization`, which is the core of all your Typescript-coded localization files.

danger

The next step activates the Tooltip Generator, which will completely erase all of your addon localization files (such as addon_english.txt) and replace them with your code. Make sure to back them up before proceeding!

### Testing the Tooltip Generator​

Navigate to the `localization` folder inside your `resource` folder. In this folder you will find `localizationData.ts`. This is used as a sample for the tooltip generator. Open it to find the following code:
    
    
    StandardTooltips.push({  
        classname: "Hello",  
        name: "test"  
    });  
    

This object is a Standard Tooltip, which is expected to be converted to `"Hello" "test"` in the KV. Let's test it to check if it works as expected.

Using the same command line as before, run `npm run dev`. If works as expected, you should see it is watching a few files, and that it wrote a few localizations: ![npm run dev](/assets/images/npm-run-dev-cmd-b01780276541f7ba50f5d21404f2af9c.png)

Check the addon_english.txt file. It should now have only one localization, as we only have the single test object.

note

While the command line is running the `npm run dev` command, a "watcher" process is running and is waiting for changes. Any changes done in files in the `localization` folder will immediately re-compile the files and re-create the `addon_<language>` files.

You might notice that there are other language files as well. By default, the English, Russian and Standard Chinese (SChinese) are enabled. Later in this guide, we'll discuss language control for those files. Right now, all files have exactly the same output, so you can ignore them for now.

Just to make sure that the watcher is working correctly, go back to `localizationData.ts` and make a new Standard Tooltip object as follows:
    
    
    StandardTooltips.push({  
        classname: "watcher_test",  
        name: "This should be automatically added"  
    });  
    

Save your file. Your command line have refreshed (don't worry if you missed it). Check your `addon_english.txt` (you might have to close it and open it again to see changes). If can now also see a second localization `"watcher_test" "This should be automatically added"`, the test is successful.

note

You can activate the watcher in any editor that supports npm builds, like VSCode, by running the `npm run dev` in it. Sublime also has this support, but requires a short setup which you can find in the readme of the [Tooltip Generator Github repo](https://github.com/Shushishtok/tooltip_generator). Regardless, you can always use the command line to do so. The downside to it is needing to have the command line window open while the watcher is running, which isn't as fun.

### Localization Types​

In the base form of the localization generator, each localization goes into one of three categories:

  * Standard Tooltips: Everything that isn't an ability or a modifier. Has no predefined key structure, and can be everything. The above examples are Standard Tooltips. Those are the most simple types of KVs.

  * Ability Tooltips: All abilities adhere to the key structure of `DOTA_Tooltip_ability_abilityname`. They also have predefined suffix keys such as `_Description`, `_Lore`, `_Note0` etc. A single ability tooltip object can include many properties, as mentioned above, and supports all ability suffix keys.

  * Modifier Tooltips: All modifiers adhere to the key structure of `DOTA_Tooltip_modifiername`. It is common to start every modifier's name with `modifier_...`, but those should work here even if you named your modifiers differently.




In my personal mod, Dota Reimagined, I've created two more Tooltip Localization types: Reimagined Tooltips and Talent Tooltips. Those are disabled (commented out) in the compiler because they do not work on standard modes (even talents, that system is custom made in my mod). However, they can be used as good reference to setting up additional localization types if you so desire. Feel free to check the compiler (found at `node_modules/@shushishtok/tooltip_generator/localizationCompiler.ts`) and tweak it as you fit. The above Tooltips types should be sufficient for most modes.

### Standard Tooltip Example​

Standard Tooltips are extremely straightforward and are very easy to make. They have the following fields:

  * Classname: string
  * Name: string



Classname is the left side of the KV and Name is on the right. For instance, the following tooltip object:
    
    
    StandardTooltips.push({  
        classname: "standard_tooltip_example",  
        name: "Tooltip Example"  
    });  
    

Will produce the following KV:
    
    
    "standard_tooltip_example"      "Tooltip Example"  
    

As you can see, it produces exactly the class-name relationship of an object, with no other logic applied.

### Ability Localization Example​

Ability Tooltips are probably have the biggest objects, because abilities can include a lot of properties. Each property has an expected type (explained later). Ability Tooltips have the following fields:

  * Ability Classname: string
  * Name: string
  * Description: string
  * Lore: string
  * Notes: Array of strings
  * Scepter description: string
  * Shard description: string
  * Ability specials: Array of Ability special objects.



You may notice that notes and ability specials are arrays. This is because an ability can (technically) have an indefinite amount of notes and ability specials, those are defined here. Let's begin with a simple ability example:
    
    
    Abilities.push({  
        ability_classname: "aghanims_shard_explosion",  
        name: "Shard Explosion",  
        description: "Fires a shard at the target point which deals damage on impact.",  
        lore: "Aghanims' signature move, firing shards of arcane energy.",  
    });  
    

This is straightforward, and will create the following ability KV:
    
    
    "DOTA_Tooltip_Ability_aghanims_shard_explosion"    "Shard Explosion"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_description"    "Fires a shard at the target point which deals damage on impact."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Lore"    "Aghanims' signature move, firing shards of arcane energy."  
    

Pretty nifty, right? Let's add scepter and shards effects to the ability:
    
    
    Abilities.push({  
        ability_classname: "aghanims_shard_explosion",  
        name: "Shard Explosion",  
        description: "Fires a shard at the target point which deals damage to all enemies on impact.",  
        lore: "Aghanims' signature move, firing shards of arcane energy.",  
        scepter_description: "Increases damage and explosion range.",  
        shard_description: "Decreases cooldown of the ability."  
    });  
    

After saving, those are immediately added to the localization:
    
    
    "DOTA_Tooltip_Ability_aghanims_shard_explosion"    "Shard Explosion"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_description"    "Fires a shard at the target point which deals damage to all enemies on impact."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Lore"    "Aghanims' signature move, firing shards of arcane energy."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_scepter_description"    "Increases damage and explosion range."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_shard_description"    "Decreases cooldown of the ability."  
    

You may have noticed that I didn't use any number or ability special variable on the ability, so let's discuss that. Most ability fields supports using variables to be replaced as numbers in the game based on the value of an ability special. In KV, it is usually done by the format of `%something%`, where `something` reflecting an ability special value. The use of percentages as a delimiter always seemed flawed to me. Instead we use the `{something}` delimiter. Variables defined this way will be correctly processed to the format expected by KV. An advantage of that is the addition to percentages: if you wanted to show `20%` in game, where `20` is your ability special, all you have to do is `{something}%`. Let's make an example of that in our ability:
    
    
    Abilities.push({  
        ability_classname: "aghanims_shard_explosion",  
        name: "Shard Explosion",  
        description: "Fires a shard at the target point which deals {damage} damage to all enemies on impact.",  
        lore: "Aghanims' signature move, firing shards of arcane energy.",  
        scepter_description: "Increases damage by {scepter_damage} and explosion range by {scepter_aoe_bonus}.",  
        shard_description: "Decreases cooldown of the ability by {shard_cd_pct}%."  
    });  
    

This translates into proper KV:
    
    
    "DOTA_Tooltip_Ability_aghanims_shard_explosion"    "Shard Explosion"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_description"    "Fires a shard at the target point which deals %damage% damage to all enemies on impact."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Lore"    "Aghanims' signature move, firing shards of arcane energy."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_scepter_description"    "Increases damage by %scepter_damage% and explosion range by %scepter_aoe_bonus%."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_shard_description"    "Decreases cooldown of the ability by %shard_cd_pct%%%."  
    

Finally, let's talk about notes and ability specials. Notes are arrays of strings, with each string reflecting a note about the ability. The compiler will properly compiled them into Note0, Note1, Note2 etc that the game expects.

Ability specials are slightly more complex. Those are arrays of ability special objects. Each object expects, at the very least, the ability special name and its ingame text, like "shard_damage" and "DAMAGE". It expects nothing else except the text. However, it supports two optional fields:

  * Percentage
  * Item stat



Those are both booleans that default to false if omitted, and would only be included if you want to specifically enable them. The percentage field adds a `%` to the beginning of the text, while the item stat adds `+$` instead. Let's make our complete ability tooltip by integrating those into our example above:
    
    
    Abilities.push({  
        ability_classname: "aghanims_shard_explosion",  
        name: "Shard Explosion",  
        description: "Fires a shard at the target point which deals {damage} damage to all enemies on impact.",  
        lore: "Aghanims' signature move, firing shards of arcane energy.",  
        scepter_description: "Increases damage by {scepter_damage} and explosion range by {scepter_aoe_bonus}.",  
        shard_description: "Decreases cooldown of the ability by {shard_cd_pct}%.",  
        notes:  
        [  
            "The projectile moves at {projectile_speed} speed.",  
            "Despite the visual effect, all enemies in range immediately take damage upon impact.",  
            "Can be disjointed."  
        ],  
      
        ability_specials:  
        [  
            {  
                ability_special: "damage",  
                text: "DAMAGE"  
            },  
      
            {  
                ability_special: "radius",  
                text: "EXPLOSION RADIUS"  
            },  
      
            {  
                ability_special: "scepter_cd_reduction",  
                text: "COOLDOWN REDUCTION",  
                percentage: true  
            }  
        ]  
    });  
    

The Ability Tooltip object looks bigger because of the spaces between each ability special object, but honestly that's my own coding preference - as long as you adhere to the structure of objects inside an array, it would still process the information just as well.

This is processed to the final KV that the game reads perfectly:
    
    
    "DOTA_Tooltip_Ability_aghanims_shard_explosion"    "Shard Explosion"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_description"    "Fires a shard at the target point which deals %damage% damage to all enemies on impact."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Lore"    "Aghanims' signature move, firing shards of arcane energy."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Note0"    "The projectile moves at %projectile_speed% speed."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Note1"    "Despite the visual effect, all enemies in range immediately take damage upon impact."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_Note2"    "Can be disjointed."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_scepter_description"    "Increases damage by %scepter_damage% and explosion range by %scepter_aoe_bonus%."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_shard_description"    "Decreases cooldown of the ability by %shard_cd_pct%%%."  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_damage"    "DAMAGE"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_radius"    "EXPLOSION RADIUS"  
    "DOTA_Tooltip_Ability_aghanims_shard_explosion_scepter_cd_reduction"    "%COOLDOWN REDUCTION"  
    

### Modifier Localization Example​

The last group is a Modifier Tooltip. Unlike abilities, modifiers only have a classname, a name and a description. However, they also have an element of their own: they can present dynamic values by using modifier properties. I've always incorrectly used them, so I've took an extra step to fix this. For now, let's make a simple modifier:
    
    
    Modifiers.push({  
        modifier_classname: "modifier_greater_power",  
        name: "Greater Power",  
        description: "Increases your base damage and your move speed."  
    });  
    

It is very quickly processed to the following KV:
    
    
    "DOTA_Tooltip_modifier_greater_power"    "Greater Power"  
    "DOTA_Tooltip_modifier_greater_power_description"    "Increases your base damage and your move speed."  
    

This time, we want to also include the exact bonus to the base damage and the move speed bonus that you get from this modifier. Assuming you increase your base damage by using the `MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE` modifier property, we can use an enum to use it. Note that in order to be able to insert variables into strings, we need to use string interpolation, which is done by encasing the string with with backticks (see example if this isn't clear). In addition, we must adhere to the following structure: `{${LocalizationModifierProperty.SOME_PROPERTY}}`. When using string interpolation, `${variable}` convert during compilation to the actual variable's value. This allows us to use enums for those modifier properties.

note

When calling enums, you only need to specify the property's name, not the entire string. For instance, `MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE` will be called by simply typing `PREATTACK_BONUS_DAMAGE`. This will still be correctly processed by the compiler to the form the game expects.

Let's improve the above example with dynamic variables. The move speed bonus is a percentage bonus, so we'll also add a `%` sign to it.
    
    
    Modifiers.push({  
        modifier_classname: "modifier_greater_power",  
        name: "Greater Power",  
        description: `Increases your base damage by {${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}} and your move speed by {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}%.`  
    });  
    

Those values are enums, so the compiler makes sure those are typed correctly, and assuming they're surrounded by `{}`, they should be properly processed. This is processed into KV like this:
    
    
    "DOTA_Tooltip_modifier_greater_power"    "Greater Power"  
    "DOTA_Tooltip_modifier_greater_power_description"    "Increases your base damage by %dMODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE% and your move speed by %dMODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE%%%."  
    

This works for all modifier properties.

note

The property assumes the `d` (integer) prefix. If you want to use `f` (float) prefix instead, you can call it with `{f${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}}`. Right now, `f` is the only additional supported keyword - contact me if you wish to add additional keywords.

### Language Control​

Every tooltip can have different values based on the client's language, which is why we have many `addon_<language>.txt` files, one for each language. Different mods have different language supports, based on the primary language of the mode and additional translations. This has introduced the need for language control.

On the top of the .TS file, you can see an import for `Language`. This enum controls which languages are enabled; each enabled language will produce its `addon_<language>.txt` file. By default, the English, Russian and Standard Chinese languages are enabled. In addition, the `None` "language" is also enabled - it is only used for compilation, and should not be disabled or used.

In order to enable or disable a language, navigate to `/game/resource/languages.ts`. Inside it, you should see `export enum Language`, which has a list of languages. Simply comment or uncomment a language to disable or enable it. This needs to be compiled and refreshed for the changes to take effects, so restart your terminal with `npm run dev` and you should see the added/removed languages in the output.

### Language Override Example​

By default, all language files will have the same KVs. You can, however, override a specific language's field to make the compiler use a different string for that language. This is done by the `language_override` property which is available to all tooltip objects. Let's make an example utilizing the language override:
    
    
    StandardTooltips.push({  
        classname: "standard_tooltip_example",  
        name: "Tooltip Example",  
        language_overrides:  
        [  
            {  
                language: Language.Russian,  
                name_override: "Пример всплывающей подсказки"  
            }  
        ]  
    });  
      
    

As the example shows, we're overriding the `name` field of the `standard_tooltip_example` classname with a different text. This is done specifically for the Russian language using a language override object for the Standard Tooltip. Additional objects can be added for every language that we want to have a different text for. This results in the following KVs:

  * English
  * Russian
  * Standard Chinese


    
    
    "standard_tooltip_example"    "Tooltip Example"  
    
    
    
    "standard_tooltip_example"    "Пример всплывающей подсказки"  
    
    
    
    "standard_tooltip_example"    "Tooltip Example"  
    

If you checked the Standard Chinese KV, you probably saw that it retains its English language. Because it was not overriden, it still used the "main" value provided by the `name` property of the Standard Tooltip object.

### Splitting Files and Folders​

One of the biggest annoyances with the localization files is the inability to split them to different files without using a script. The tooltip generator allows you to split your tooltips to as many files and folders as you need, as long as those files and folders are created inside the `resource/localization` directory.

For a tooltip file to also properly be watched and processed, it must have the following code:
    
    
    import { AbilityLocalization, Language, LocalizationData, ModifierLocalization, StandardLocalization } from "~generator/localizationInterfaces";  
      
    export function GenerateLocalizationData(): LocalizationData  
    {  
        // This section can be safely ignored, as it is only logic.  
        //#region Localization logic  
        // Arrays  
        const Abilities: Array<AbilityLocalization> = new Array<AbilityLocalization>();  
        const Modifiers: Array<ModifierLocalization> = new Array<ModifierLocalization>();  
        const StandardTooltips: Array<StandardLocalization> = new Array<StandardLocalization>();  
      
        // Create object of arrays  
        const localization_info: LocalizationData =  
        {  
            AbilityArray: Abilities,  
            ModifierArray: Modifiers,  
            StandardArray: StandardTooltips,  
        };  
        //#endregion  
      
        // Enter localization data below!  
      
      
        // Return data to compiler  
        return localization_info;  
    }  
    

It doesn't matter what name it has, as long as it has the `.ts` extension. The tooltips go between the `Enter localization data below!` comment and the `Return data to compiler` comment.

note

I recommend making it into a snippet for easy creation of this signature for every file created. You can copy it from sample file `localizationData.ts` for every file that you need it .

### Dota Reimagined as examples (Talents, Reimagined Effects)​

You can check out [Dota Reimagined's github](https://github.com/Shushishtok/dota-reimagined/tree/master/game/resource/localization), which I originally developed this project for, to see how it looks in terms of folders and files. Each hero has its own file in the `heroes` folder, and each item has its own file in the `items` folder. `generic` folder has files for things like `addon_game_mode`.

Also, this uses Reimagined Effects and Talents on hero files, which are also processed into unique KVs that my game specifically has been designed to look for in panorama. You can check out how it exactly work and make your own changes to the compiler to support your unique KVs.

### Bugs, Feature Requests, and Questions​

Feel free to contact me in the [Moddota Discord](https://discord.gg/ZyHg6T9sTd) to ask any question, request features or to submit bugs and I'll be happy to assist.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/Typescript/tooltip-generator.md)

---

# Abilities, Items & Modifiers

## Ability KeyValues

* [](/)
  * Abilities, items, modifiers
  * Ability KeyValues



On this page

# Ability KeyValues

## DataDriven Ability​

A DataDriven ability is a collection _KeyValues_. KeyValues are simple, tree-based structures used for storing nested sections containing key/value pairs.

DataDriven abilities are defined inside scripts/npc/npc_abilities_custom.txt under a game addon folder.

This skeleton contains many keyvalues which will be expanded upon in this documentation.
    
    
    "datadriven_skeleton"  
    {  
        // General  
        // ----------------------------------------------------------------------------------------  
        "BaseClass"              "ability_datadriven"  
        "AbilityBehavior"        "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"  
        "AbilityTextureName"     "spellicon"  
        "AbilityUnitTargetTeam"  "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "AbilityUnitTargetType"  "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
        "AbilityUnitTargetFlags" "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES"  
        "AbilityUnitDamageType"  "DAMAGE_TYPE_MAGICAL"  
      
        "AbilityType"            "DOTA_ABILITY_TYPE_BASIC"  
        "MaxLevel"               "7"  
        "RequiredLevel"          "-4"  
        "LevelsBetweenUpgrades"  "7"  
      
        "AbilityCastPoint"       "0.0"  
        "AbilityCastAnimation"   "ACT_DOTA_ATTACK"  
        "AnimationPlaybackRate"  "1"  
        "AnimationIgnoresModelScale" "1"  
      
        // Stats  
        //----------------------------------------------------------------------------------------  
        "AbilityDamage"           "0 0 0 0"  
        "AbilityManaCost"         "0 0 0 0"  
        "AbilityCooldown"         "0.0 0.0 0.0 0.0"  
        "AbilityCastRange"        "0"  
        "AbilityCastRangeBuffer"  "250"  
        "AbilityChannelTime"      "0.0 0.0 0.0 0.0"  
        "AbilityChannelledManaCostPerSecond" "30 35 40 45"  
        "AbilityDuration"         "0.0 0.0 0.0 0.0"  
        "AoERadius"               "250"  
      
        // ...  
    }  
    

## BaseClass​

BaseClass can be any default dota ability name or "ability_datadriven", which allows the use of the entire data driven ability system.

Using a dota ability as the BaseClass can be done either as an override of the ability (goes in npc_abilities_override.txt) or just as a new ability in npc_abilities.custom.txt which inherits the exposed variables. This however doesn't let us change/add its internal structure, as that code is locked in C++ code.

Here we'll focus on everything that concerns writing custom abilities from scratch, using the `"BaseClass" "ability_datadriven"`.

## AbilityBehavior​

This describes how the ability works, the general behavior to perform when it is executed.

You can use different behaviors together, separated by spaces and | pipes.

Example:
    
    
    "DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_NO_TARGET"  
    

### List of every possible AbilityBehavior​

 **AbilityBehavior**|  **Description**  
---|---  
DOTA_ABILITY_BEHAVIOR_NO_TARGET| Doesn't need a target to be cast.   
Ability fires off as soon as the button is pressed.  
DOTA_ABILITY_BEHAVIOR_UNIT_TARGET| Needs a target to be cast on.   
Requires `AbilityUnitTargetTeam` and `AbilityUnitTargetType`, see Targeting.  
DOTA_ABILITY_BEHAVIOR_POINT| Can be cast anywhere the mouse cursor is.   
If a unit is clicked, it will just be cast where the unit was standing.  
DOTA_ABILITY_BEHAVIOR_PASSIVE| Cannot be cast.  
DOTA_ABILITY_BEHAVIOR_CHANNELLED| Channeled ability.  
If the user moves, or is silenced/stunned, the ability is interrupted.  
DOTA_ABILITY_BEHAVIOR_TOGGLE| Can be toggled On/Off.  
DOTA_ABILITY_BEHAVIOR_AURA| Ability is an aura.  
Not really used other than to tag the ability as such.  
DOTA_ABILITY_BEHAVIOR_AUTOCAST| Can be cast automatically.  
Usually doesn't work by itself in anything that is not an ATTACK ability.  
DOTA_ABILITY_BEHAVIOR_HIDDEN| Can't be cast, and won't show up on the HUD.  
DOTA_ABILITY_BEHAVIOR_AOE| Can draw a radius where the ability will have effect.  
Like POINT, but with an area of effect display.  
Makes use of `AOERadius`.  
DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE| CAnnot be learned by clicking on the HUD.  
Example: Invoker's abilities.  
DOTA_ABILITY_BEHAVIOR_ITEM| Ability is tied to an item. There is no need to use this, the game will internally assign this behavior to any `"item_datadriven"`.  
DOTA_ABILITY_BEHAVIOR_DIRECTIONAL| Has a direction from the hero.  
Examples: Mirana's Arrow, or Pudge's Hook.  
DOTA_ABILITY_BEHAVIOR_IMMEDIATE| Can be used instantly, without going into the action queue.  
DOTA_ABILITY_BEHAVIOR_NOASSIST| Ability has no reticle assist. (?)  
DOTA_ABILITY_BEHAVIOR_ATTACK| Is an attack, and cannot hit attack-immune targets.  
DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES| Cannot be used when rooted.  
DOTA_ABILITY_BEHAVIOR_UNRESTRICTED| Ability is allowed when commands are restricted.  
Example: Lifestealer's Consume.  
DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET| Does not alert enemies when target-cast on them.  
Example: Spirit Breaker's Charge.  
DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT| Should not resume movement when it completes.  
Only applicable ot no-target, non-immediate abilities.  
DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK| Ability should not resume command-attacking the previous target when it completes.  
Only applicable to no-target, non-immediate abilities and unit-target abilities.  
DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN| Ability still uses its normal cast point when stolen.  
Examples: Meepo's Poof, Furion's Teleport.  
DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING| Ability ignores backswing pseudoqueue.  
DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE| Can be executed while stunned, casting, or force-attacking. Only applicable to toggled abilities.  
Example: Morphling's Attribute Shift.  
DOTA_ABILITY_BEHAVIOR_RUNE_TARGET| Targets runes.  
DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL| Doesn't cancel abilities with `_CHANNELED` behavior.  
DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET| Bottle and Wards.  
DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET| (?)  
  
### Behavior Tooltips​

The following behaviors will generate a line in the ability tooltip. You want at least one of 1 behavior of this list. The rest of the ability behaviors don't have any UI support yet.

The UI can only show one behavior tooltip, but internally it will behave as expected, as long two contradicting keys are not used together (like _NO_TARGET_ with _UNIT_TARGET_ ).

 **AbilityBehavior**|  **ABILITY: _Tooltip_**|  **Takes precdence over:**  
---|---|---  
DOTA_ABILITY_BEHAVIOR_NO_TARGET|  **No Target**|   
DOTA_ABILITY_BEHAVIOR_UNIT_TARGET|  **Unit Target**|  POINT  
DOTA_ABILITY_BEHAVIOR_POINT|  **Point Target**|   
DOTA_ABILITY_BEHAVIOR_PASSIVE|  **Passive**|   
DOTA_ABILITY_BEHAVIOR_CHANNELLED|  **Channeled**|  POINT and UNIT  
DOTA_ABILITY_BEHAVIOR_TOGGLE|  **Toggle**|  POINT and UNIT  
DOTA_ABILITY_BEHAVIOR_AURA|  **Aura**|  PASSIVE  
DOTA_ABILITY_BEHAVIOR_AUTOCAST|  **Auto-Cast**|  UNIT_TARGET  
  
For example, an ability with
    
    
    "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELED"  
    

will be shown like this:

![img](https://i.imgur.com/xYjIXM8.jpg)

## AbilityType​

Omitting this will default to DOTA_ABILITY_TYPE_BASIC.

 **AbilityType**|  **Description**  
---|---  
DOTA_ABILITY_TYPE_BASIC| Normal ability, learnable at level 1 and upgradeable every 2 levels.  
DOTA_ABILITY_TYPE_ULTIMATE| 5 levels between upgrades, and requires level 6 to spend the first point on it.  
Also tags the ability as ultimate for the HUD.  
DOTA_ABILITY_TYPE_ATTRIBUTES| Used for attribute_bonus.  
DOTA_ABILITY_TYPE_HIDDEN| What for?  
  
Additionally, ability level intervals and limits can be directly changed with these keyvalues inside the ability block:

### MaxLevel​

The UI currently supports the following ability level displays: 1, 3, 4, and 7.

You can still use any integer value as MaxLevel, and it will assign the proper level values internally, but it will use a combination of these UI display numbers, then "start again" to another UI.

 _Example_ :
    
    
    "MaxLevel" "10"  
    

### RequiredLevel​

At which level the ability can first be learned. This takes negative values, to enable for skills to be skilled at any point, because the next value sets the levels between ranks of the ability, including the first one.

### LevelsBetweenUpgrades​

How many levels to wait to be able to learnt he next rank.

 _Example_ :
    
    
    "MaxLevel"              "7"  
    "RequiredLevel"         "-4"  
    "LevelsBetweenUpgrades" "7"  
    

Results in an ability that can be first skilled at levels 3/10/17/24/31/38/45.

Max level of the heroes can be changed using the Lua `SetCustomHeroMaxLevel(MAX_LEVEL)` [API function](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API).

## AbilityTextureName​

The icon file name that should be used in the UI for this ability. You can reutilize the icon from another just by putting that ability name here if desired. The internal name of every default dota ability can be found in: [Built-In Ability Names](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Built-In_Ability_Names).

To use your own icons, place them in `resources/flash3/images/spellicons` in you game addon folder, and just directly refer to the image name without the path or the extension.

 **Format** : 128x128 PNG
    
    
    "AbilityTextureName" "warchasers_buff"  
    

![img](https://i.imgur.com/PvTBUis.png)

### Reject Self-Cast​

Added in Reborn:
    
    
    "CastFilterRejectCaster" "1"  
    

### Cast While Hidden​

Added in Reborn:
    
    
    "IsCastableWhileHidden" "1"  
    

## Targeting​

3 key elements set the rules for target selection: **Team**, **Type**, and **Flags**.

### Team​

 **AbilityUnitTargetTeam**|  **Description**  
---|---  
DOTA_UNIT_TARGET_TEAM_BOTH| All  
DOTA_UNIT_TARGET_TEAM_ENEMY| Enemy  
DOTA_UNIT_TARGET_TEAM_FRIENDLY| Allied  
DOTA_UNIT_TARGET_TEAM_NONE| Default value by omission.  
DOTA_UNIT_TARGET_TEAM_CUSTOM| (?)  
  
### Type​

 **AbilityUnitTargetType**|  **Targets**  
---|---  
DOTA_UNIT_TARGET_ALL| Everything, including hidden entities.  
DOTA_UNIT_TARGET_HERO| npc_dota_hero Heroes.  
DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO  
DOTA_UNIT_TARGET_BASIC| Basic units, including summons.  
DOTA_UNIT_TARGET_MECHANICAL| npc_dota_creep_siege  
DOTA_NPC_UNIT_RELATIONSHIP_TYPE_SIEGE  
DOTA_UNIT_TARGET_BUILDING| npc_dota_tower, npc_dota_building  
DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BUILDING  
DOTA_UNIT_TARGET_TREE| ent_dota_tree  
Examples: Tangos, Quelling Blade.  
DOTA_UNIT_TARGET_CREEP| npc_dota_creature, npc_dota_creep  
Same as BASIC, but _might_ not include things like some summons.  
Examples: Death Pact, Devour.  
DOTA_UNIT_TARGET_COURIER| npc_dota_courier, npc_dota_flying_courier  
DOTA_NPC_UNIT_RELATIONSHIP_TYPE_COURIER  
DOTA_UNIT_TARGET_NONE| Nothing!  
DOTA_UNIT_TARGET_OTHER| Everything not included in the previous types.  
DOTA_UNIT_TARGET_CUSTOM| Not exposed?  
Examples: Replicate, Sunder, Demonic Conversion, Tether, Infest...  
  
### Flags​

Flags allow targeting units that are ignored by default (for example, magic immune enemies,) or to ignore specific types of units that will otherwise be targetable (like Ancients, or magic immune allies.)

 **AbilityUnitTargetFlags**|  **Targets / Ignores**  
---|---  
DOTA_UNIT_TARGET_FLAG_NONE| Default value by omission.  
DOTA_UNIT_TARGET_FLAG_DEAD| Dead units, which are otherwise ignored.  
DOTA_UNIT_TARGET_FLAG_MELEE_ONLY| Units with AttackCapabilities DOTA_UNIT_CAP_MELEE_ATTACK.  
DOTA_UNIT_TARGET_FLAG_RANGED_ONLY| Units with AttackCapabilities DOTA_UNIT_CAP_RANGED_ATTACK.  
DOTA_UNIT_TARGET_FLAG_MANA_ONLY| Units with mana, without `"StatusMana" "0"` in the npc_units file.  
DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP| Units with Disable Help on.  
Not sure how to make a DataDriven ability use it?  
DOTA_UNIT_TARGET_FLAG_NO_INVIS| Ignores invisible units (with MODIFIER_STATE_INVISIBLE.)  
DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES| Targets ENEMY units with `MODIFIER_STATE_MAGIC_IMMUNE`.  
Examples: Ensnare, Culling Blade, Primal Roar...  
DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES| Ignores FRIENDLY units with `MODIFIER_STATE_MAGIC_IMMUNE`.  
Example: Bane's Nightmare.  
DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE| Ignores units with `MODIFIER_STATE_ATTACK_IMMUNE`.  
DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE| Breaks when the unit goes into the fog of war.  
Examples: Mana Drain, Life Drain.  
DOTA_UNIT_TARGET_FLAG_INVULNERABLE| Units with `MODIFIER_STATE_INVULNERABLE`.  
Examples: Assassinate, Recall, Boulder Smash...  
DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS| Ignores units with `"IsAncient" "1"` defined.  
Example: Hand of Midas.  
DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO| Ignores units with `"ConsideredHero" "1"` defined.  
Examples: Astral Imprisonment, Disruption, Sunder.  
DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED| Ignores units with `MODIFIER_STATE_DOMINATED`.  
DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS| Ignores untis with `MODIFIER_PROPERTY_IS_ILLUSION`.  
DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED| Ignores units with `MODIFIER_STATE_NIGHTMARED`.  
DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED| Ignores units created through the `SpawnUnit` [action](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven#Actions).  
DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD| Units with `MODIFIER_STATE_OUT_OF_GAME`.  
DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED| Units controllable by a player, accesible with [Lua](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API)'s `IsControllableByAnyPlayer()`.  
DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES| Prioritizes units over trees when both are selectable.  
  
 **Clean list** :

  * DOTA_UNIT_TARGET_FLAG_NONE
  * DOTA_UNIT_TARGET_FLAG_DEAD
  * DOTA_UNIT_TARGET_FLAG_MELEE_ONLY
  * DOTA_UNIT_TARGET_FLAG_RANGED_ONLY
  * DOTA_UNIT_TARGET_FLAG_MANA_ONLY
  * DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP
  * DOTA_UNIT_TARGET_FLAG_NO_INVIS
  * DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES
  * DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES
  * DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE
  * DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE
  * DOTA_UNIT_TARGET_FLAG_INVULNERABLE
  * DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS
  * DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO
  * DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED
  * DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS
  * DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED
  * DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED
  * DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD
  * DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED
  * DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES



#### Fun with Flags​

Flags were seen as AbilityUnitTargetFlags completions, but this is not their sole application.

The same applies to Team and Types.

  * `"Flags"` and `"ExcludeFlags"` in a `"Target"` block gives control over how to target units to apply actions on them later:


    
    
    "Target"  
    {  
        "Center"    "CASTER"  
        "Flags"     "DOTA_UNIT_TARGET_FLAG_DEAD"  
    }  
    

  * `"TargetFlags"` in a `"LinearProjectile"` action allows a `LinearProjectile` to ignore units that would otherwise be included by default in the Team+Type values, for example those with `MODIFIER_STATE_INVISIBLE`.
  * `"Aura_Flags"` in a modifier with the other `"Aura"` keys can be used, for example, to make an aura modifier only affect ranged units by adding `DOTA_UNIT_TARGET_FLAG_RANGED_ONLY`.



The same applies for **Teams** and **Types**.

 _Example_ : Targets all friendly units in a radius of the caster, including couriers, buildings, and siege units. Excludes heroes, summons, and other player controlled units.
    
    
    "Target"  
    {  
        "Center"        "CASTER"  
        "Radius"        "%radius"  
      
        // AbilityUnitTargetTeam values.  
        "Teams"         "DOTA_UNIT_TARGET_TEAM_FRIENDLY"  
      
        // AbilityUnitTargetTypes  
        "Types"         "DOTA_UNIT_TARGET_ALL"  
        "ExcludeTypes"  "DOTA_UNIT_TARGET_HERO"  
      
        // AbilityUnitTargetFlags  
        "Flags"         "DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED"  
        "ExcludeFlags"  "DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED"  
    }  
    

 _Example_ : Mirana's Arrow projectile rewrite that only hits heroes, including those that are magic immune:
    
    
    "LinearProjectile"  
    {  
        "Target"            "POINT"  
        "EffectName"        "particles/units/heroes/hero_mirana/mirana_spell_arrow.vpcf"  
        "MoveSpeed"         "857"  
        "StartRadius"       "115"  
        "EndRadius"         "115"  
        "StartPosition"     "attach_attack1"  
        "FixedDistance"     "3000"  
        "TargetTeams"       "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "TargetTypes"       "DOTA_UNIT_TARGET_HERO"  
        "TargetFlags"       "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES"  
        "HasFrontalCone"    "0"  
        "ProvidesVision"    "1"  
        "VisionRadius"      "650"  
    }  
    

With `DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES`, and with `DOTA_UNIT_TARGET_FLAG_NONE`:

### Other keyvalues of the Action Target block​

#### Line​

To target units in a line between the caster and the targeted point.

Instead of the `"Radius"` keyvalue, which only takes one parameter, `Line` takes `Length` and `Thickness` integer values in a block like this:
    
    
    "Line"  
    {  
        "Length"    "600"  
        "Thickness" "250"  
    }  
    

#### Limiting the amount of targets​

`MaxTargets` takes an integer value to limit the amount of targets the Target block will select.
    
    
    "MaxTargets"    "10"  
    

`Random` also takes an integer to be as "take up to this number of units randomly."
    
    
    "Random"    "1"  
    

(For more complex targeting, Lua scripting is the answer.)

#### ScriptSelectPoints​

Its use is very rare, normally when the targeting is complex we would just use `RunScript` lua and do all the acitons inside the script.
    
    
    ScriptSelectPoints  
    {  
        ScriptFile  
        Function  
        Radius  
        Count  
    }  
    

A more in-depth explanation is needed to explain the complete usage of the Target block, as understanding the _scope_ of the "Target" "TARGET" keyvalue is one of the most difficult things of the datadriven system.

 **Sources**

  * [Constants wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Constants)
  * [Abilities Data Driven wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven)
  * Extracted [npc_abilities.txt](https://raw.githubusercontent.com/dotabuff/d2vpk/master/dota_pak01/scripts/npc/npc_abilities.txt) file
  * holdout_example keyvalues
  * random [github](https://github.com/) datamining
  * brute-forcing everything for countless hours!



* * *

If you have any content to expand or improve this documentation, please let me know.

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/ability-keyvalues.md)

---

## Item KeyValues

* [](/)
  * Abilities, items, modifiers
  * Item KeyValues



On this page

# Item KeyValues

A comprehensive guide to npc_items_custom and coding items

## General​

Start with "item _" and your item name. If you **don't** put `item_` at the begging of an item, bad things happen

`"item_custom" { ... }`

Each item needs its proper ID for purchasing on the shop, although you can define items without an ID if you only plan to create them through Lua. Do not override Dota IDs, use IDs between 1000~2000

`"ID" "1100"`

Next is the BaseClass. It can be DataDriven, or overriding an existing item from the [default dota item_names](https://github.com/dotabuff/d2vpk/blob/master/dota_pak01/scripts/npc/items.txt).
    
    
    "BaseClass" "item_datadriven"  
                "item_aegis"  
    

If you want to override an item, you won't be able to change/add abilities, you'll be limited to change values from items.txt (and some values can't even be changed) So it's recommended to always try to make a datadriven version of the item if you want to have complete freedom on what your item does.

Now that we settled that, I'll review the most common key values seen in items.

### Basic Rules​
    
    
    "ItemCost" "322"  
    "ItemKillable" "0"  
    "ItemSellable" "1"  
    "ItemPurchasable" "1"  
    "ItemDroppable" "1"  
    

ItemKillable lets both allies and enemies destroy the dropped item by attacking it.

### Stock​
    
    
    "ItemStockMax" "1"  
    "ItemStockTime" "100"  
    "ItemStockInitial" "3"  
    

### Ownership​

If you omit the following, its behavior will be NOT_SHAREABLE
    
    
    "ItemShareability" "ITEM_NOT_SHAREABLE"             //Rapier  
                       "ITEM_PARTIALLY_SHAREABLE"       //Ring of Regen  
                       "ITEM_FULLY_SHAREABLE"           //Gem  
                       "ITEM_FULLY_SHAREABLE_STACKING"  //Consumables  
    

### Charges​
    
    
    "ItemInitialCharges" "1" //How many charges should the item start with - Tango x3  
    "ItemDisplayCharges" "1" //Hide the charges of the item - Aegis  
    "ItemRequiresCharges" "1" //The active ability needs charges to be used - Urn  
    

Also remember to add this somewhere, normally at the beginning of a OnSpellStart block

`"SpendCharge" {}`

### Stacking, Consumable​
    
    
    "ItemStackable" "1"  
    "ItemPermanent" "0"  
    

If "ItemPermanent" is set to 1, charged items won't disappear when they hit 0 charges (Bottle, Urn, etc) By omitting it will also default to 1.

### Auto Cast​

This value is the key for Tomes of Stats and other consumable items:

`"ItemCastOnPickup" "1"`

### Upgradeable items​
    
    
    "MaxUpgradeLevel" "5" // Dagon - 5  
    "ItemBaseLevel" "1" //You'll need 5 different items, and change each accordingly  
    

### Recipes​
    
    
    "item_recipe_custom"  
    {  
        "ID" "1200"  
        "BaseClass"           "item_datadriven"  
        "ItemRecipe"          "1" //destroyed after combine  
        "ItemCost"            "0" //if its 0, it will combine without needing a recipe.  
        "ItemResult"          "item_custom" //the result of combining the ItemRequirements  
        "ItemRequirements"  
        {  
            "01" "item_ingredient_1;item_ingredient_2;item_ingredient_3"  
            "02" "item_ingredient_1;item_ingredient_2;item_ingredient_alternative_3"  
        }  
    }  
    

 **IMPORTANT NOTE:** Your item name for the recipe to be recognized by the Dota Shop UI NEEDS to have this format:
    
    
    "item_recipe_(name of your item)"  
    

Meaning if the ItemResult you want to get is called _"item_capuchino"_ , your recipe would be: _"item_recipe_capuchino"_

![img](https://puu.sh/dyDFL/f0a814100d.jpg)

If you don't, the item will till be combinable but it won't show the neat lines to the possible upgrades.

### Disassembling​
    
    
    "ItemDisassembleRule" "DOTA_ITEM_DISASSEMBLE_ALWAYS"  
                          "DOTA_ITEM_DISASSEMBLE_NEVER"  
    

## Common Modifier Key Values for items​

We now have an item, but it doesn't do anything on its own. To make it add stats or buffs, we need to set modifiers inside the item definition For more on Modifiers, check the [Constants in the wiki]
    
    
    "Modifiers"  
    {  
        "item_custom_modifier"  
        {  
            "Passive" "1"  
            "IsHidden" "0"  
            "Attributes" "MODIFIER_ATTRIBUTE_MULTIPLE" //This makes duplicate items stack their properties  
            "Properties"  
            {  
                "MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT" "%movement_speed"  
                "MODIFIER_PROPERTY_EVASION_CONSTANT" "%evasion"  
                "MODIFIER_PROPERTY_STATS_STRENGTH_BONUS" "%bonus_str_agi"  
                "MODIFIER_PROPERTY_STATS_AGILITY_BONUS" "%bonus_agi"  
                "MODIFIER_PROPERTY_STATS_INTELLECT_BONUS" "%bonus_int"  
                "MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE" "%damage_bonus_percent"  
            }  
      
            "States"  
            {  
                "MODIFIER_STATE_SPECIALLY_DENIABLE" "MODIFIER_STATE_VALUE_ENABLED"  
                "MODIFIER_STATE_MAGIC_IMMUNE" "MODIFIER_STATE_VALUE_ENABLED"  
                "MODIFIER_STATE_NO_HEALTH_BAR" "MODIFIER_STATE_VALUE_ENABLED"  
            }  
        }  
    }  
      
    

## Adding spell functionality​

Apart from this values specially related to items, you can add **_everything_** that could be part of a datadriven ability, for example:
    
    
    "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_PASSIVE"  
    "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_BOTH"  
    "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
    "AbilityCastAnimation" "ACT_DOTA_CAST_ABILITY_1"  
    "AbilityManaCost" "100"  
    "AbilityValues"  
    { ... }  
    

 **[Ability Events](/abilities/datadriven/datadriven-ability-events-modifiers)** like `"OnSpellStart"`, `"OnOwnerDied"` or `"OnEquip"` also go here in the main block.

You need at least set the AbilityBehavior for your item to not be active (if you don't, it will default to `DOTA_ABILITY_BEHAVIOR_UNIT_TARGET`).

See more on the complete [DataDriven Ability Breakdown](/abilities/ability-keyvalues)

## Icons and Custom Shops​

For your item to have an icon you'll need to go to your addon folder under this path:

`/resource/flash3/images/items`

And put a .PNG file with dimensions **86 x 64** , with the same name as the "item_custom", WITHOUT the "item_"

![img](https://i.imgur.com/4Jr9cpF.png)

Then in your "item_custom" code, you add the following:

`"AbilityTextureName" "item_custom"`

You can also use the names of the dota icons. Just make sure this line starts with `"item_`, so the engine knows to look the image on the items folder.

Adding the item to a shop. Layout [Here] For this, inside your addon folder you need to go inside scripts/shops and make/edit a .txt file with this name file structure:

`mapName_shops.txt`

mapName should be the name of YOUR MAP (.vmap file in Hammer or content folder), NOT your addon name (both could be the same, or you could have multiple maps with different shops)

Adding "_shops" to the mapName is also mandatory.

A template shop file can be copied from here: <https://pastebin.com/KZrtm1xQ>

In addition to this file, your item can have key value rules for where it can be bought
    
    
    "SideShop" "1"  
    "SecretShop" "0"  
    

At the moment of writing this guide, we can only set up 3 different shops (Home, Side and Secret). You can change categories and shop tab names, with [addon_english modding]

To make an actual shop area inside your map on Hammer, check this other tutorial [tutorial_creating_a_custom_shop_step_by_step](https://www.reddit.com/r/Dota2Modding/comments/2dpts1/tutorial_creating_a_custom_shop_step_by_step/)

To disable your dota items, use [this npc_abillities_override.txt](https://pastebin.com/pGExrS4A) inside the scripts/npc folder.

## Cosmetic Values: Models, Effects, Tags and others.​

These values are optional but greatly improve the quality of your item

### Sounds when Picked, Dropped​
    
    
    "UIPickupSound" "Item.PickUpRingShop" //Sound when adquiring the item  
    "UIDropSound" "Item.DropRecipeShop" //Sound when dropping the item manually  
    "WorldDropSound" "Item.DropGemWorld" //Sound when dropping the item on death (?)  
    

### Model and Glow in the world.​

VMDL and Particle files can be seen through the [Asset Browser]
    
    
    "Model" "models/chest_worlddrop.vmdl"  
    "Effect" "particles/generic_gameplay/dropped_item.vpcf"  
    

You can find good models in /props_gameplay, /econ or use your own customs

Important: If you create the item through lua [CreateItemOnPositionSync], you need to provide vision of the world position where the item is being created, at least briefly, to properly display the particle effect.

### Change the displayed color of the item​
    
    
    "ItemQuality"    "artifact" //Orange  
                     "epic" //Purple  
                     "rare" //Blue  
                     "common" //Green  
                     "component" //White  
                     "consumable" //White  
    

### Tags & Alias​

Tags are defined in addon_english, find them in [dota_english] under _// Tags_ Aliases help the search bar to find the item quickly with abreviations
    
    
    "ItemShopTags" "int;str;agi;mana_pool;health_pool;hard_to_tag"  
    "ItemAliases" "this;appears_in;search"  
    

Omit to not announce.
    
    
    "ItemDeclarations" "DECLARE_PURCHASES_TO_TEAMMATES"  
                       "DECLARE_PURCHASES_IN_SPEECH"  
                       "DECLARE_PURCHASES_TO_SPECTATORS"  
    

### Restrictions​

This is how Basher is disallowed for certain heroes
    
    
    "InvalidHeroes" "npc_dota_hero_spirit_breaker;npc_dota_hero_faceless_void"  
    

For the Scripted, more powerful version, read more on [Item Restrictions & Requirements](/abilities/scripting/item-restrictions-requirements)

* * *

## Alt-Click​

Alt-click text on items in Inventory and dropped on the ground. Takes the strings from resource/addon_english.txt or any other languages.

### PingOverrideText​

Overrides the default "[ALLIES] **ItemName** dropped here". It will look for _#DOTA_Chat_Text_String_ ( _Text_String_ can be whatever) in your addon strings.

In the item_datadriven:
    
    
    "PingOverrideText" "DOTA_Chat_Text_String"  
    

In addon_english.txt:
    
    
    "DOTA_Chat_Text_String" "[VOLVO] Giff"  
    

### ItemAlertable​

Displays "[ALLIES] Gather for **ItemName** here."

![img](https://puu.sh/duiGf/025d66f1cd.jpg)
    
    
    "ItemAlertable" "1"  
    ```~  
      
      
    ---  
      
    That's it for all the Item-related key values. In next post we'll review different examples.  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/item-keyvalues.md)

---

## The Importance of AbilityValues

* [](/)
  * Abilities, items, modifiers
  * The importance of AbilityValues values



# The importance of AbilityValues values

 _To specify numeric values, you can put in a number or you can use`%name` formatting to grab values out of the "AbilityValues" block of the ability. The advantage to using the `%name` syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips._

When coding abilities or items, **do not** fall into the trap of replacing the use of AbilityValues variables with a constant (i.e. writing `"Duration" "12"`, `"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "-30"` or doing similar assignations in lua scripts), thinking it will only be used once.

There's **2 problems** with doing this

  * Tooltips are hard

If you don't use AbilityValues for each variable, when you get to making the tooltips, you'll find pretty much impossible to make quality dota-styled strings because your spell description needs to have direct copies of the values you've put in the ability. To make this worse, if you ever make a change to an static number in your datadriven ability, you will also need to update the addon_english.txt

  * Consistency between Lua & Key Values

Changing a key value won't only affect the datadriven but also the scripts and its easy to make a change and forget to extend this change to the .lua file. Doing proper references to the Specials also eliminates this problem.


  


 **TL;DR** : Use as many AbilityValues values as possible, then modifying/balancing your abilities can be done just by changing these variables and it will extend to the rest of the game mode.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/the-importance-of-abilityvalues-values.md)

---

## Passing AbilityValues into Lua

* [](/)
  * Abilities, items, modifiers
  * Passing AbilityValues values into Lua



# Passing AbilityValues values into Lua

Given this "AbilityValues" block in the ability:
    
    
    "AbilityValues"  
    {  
      "radius" "300"  
      "mana_per_second" "5 10 15 20"  
    }  
    

There are 2 functions to connect these with: `GetSpecialValueFor` and `GetLevelSpecialValueFor`. Both are applied over an ability.
    
    
    local ability = event.ability  
    local radius = ability:GetSpecialValueFor("radius")  
    local mana_per_second = ability:GetLevelSpecialValueFor("mana_per_second", (ability:GetLevel() - 1))  
    

The first one will get the value for the **current level** of the ability.

The second one will get the value for the **specified level** of the ability

The first one is the most common and should be **used every time** , unless you need the value for a specific level.

Note the use of `(ability:GetLevel() - 1)` as the second parameter (which tells the script which level to take). This is needed because ability levels are 1-indexed but `GetLevelSpecialValueFor` is 0-indexed.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/passing-abilityvalues-values-into-lua.md)

---

## AbilityDuration Tooltips

* [](/)
  * Abilities, items, modifiers
  * AbilityDuration tooltips



# AbilityDuration tooltips

 **TL;DR:** AbilityDuration is a fairly useless keyvalue because whoever coded it forgot to make an automatic tooltip like with `AbilityDamage`. Use a "duration" AbilityValue and connect it with lua instead.

Imagine you want to have an ability apply a modifier for some seconds, duration changing with levels.

You can fall for the trap and do this:
    
    
    "AbilityDuration" "3 2 2"  
    

And then have your modifier refer to %AbilityDuration in the "Duration" modifier key. All fine for now.

But when when you want to indicate that your ability lasts for said duration, this AbilityDuration doesn't generate a **"DURATION:"** tooltip by itself, so you have 3 options:

 **Option 1.** Write "Last 3 seconds at level 1 and then 2 at level 2 and 3" in the _Description.

This is bad for the reasons explained before.

 **Option 2*.** Have a "duration" AbilityValue in addition to the "AbilityDuration" and keep both values syncronized.

Suboptimal but decent solution, as it allows you to use ability:GetAbilityDuration() which takes takes its value from AbilityDuration.

 **Option 3.** Remove AbilityDuration, only keep the AbilityValue. Best way as far as I can tell.
    
    
    "AbilityValues"  
    {  
      "duration" "3 2 2"  
    }  
    

And then do this in a Lua Script if needed.
    
    
    function HowToTooltip(event)  
       local ability = event.ability  
       local duration = ability:GetLevelSpecialValueFor("duration", (ability:GetLevel() - 1))  
       local damage = ability:GetAbilityDamage()  
    end  
    

Has the same results and works for every scenario.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/abilityduration-tooltips.md)

---

## Simple Custom Ability

* [](/)
  * Abilities, items, modifiers
  * Simple Custom Ability



# Simple Custom Ability

I have created a tutorial on making a simple custom ability here:

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/simple-custom-ability.md)

---

## Creating Innate Abilities

* [](/)
  * Abilities, items, modifiers
  * Creating innate (available from level 1) abilities



On this page

# Creating innate (available from level 1) abilities

This article will guide you through creating an ability which is available to the given hero right away, like Earth Spirit's Stone Remnant. This guide assumes you already have an ability set up on a hero.

## Lua abilities​

Lua abilities can define a `Spawn` method, that is invoked by the engine when ability is cretated.
    
    
    my_innate_ability = my_innate_ability or {}  
    function my_innate_ability:Spawn()  
        if IsServer() then  
            self:SetLevel(1)  
        end  
    end  
    

## Datadriven and builtin abilities​

The plan is:

  1. Subscribe to the hero spawn event
  2. Determine if the spawned hero has a specific ability
  3. Level it up



Okay. Since the entry point to every mod is the file `addon_game_mode.lua` go right there and find `function Activate()`. Activate is the function called on the very start of our custom game when all the players have loaded. We can subscribe to events using `ListenToGameEvent`.

Put the following code inside the `Activate` function:
    
    
    ListenToGameEvent('npc_spawned', function(event)  
        HandleNpcSpawned(event.entindex)  
    end, nil)  
    

This code is subscribing to the `npc_spawned` event and then calling the HandleNpcSpawned function (we will create that later) with the spawned entity index. That entity index is provided to us in the event table when the event is triggered.

Let's create the `HandleNpcSpawned` function, put it in the same file just below `Activate`:
    
    
    function HandleNpcSpawned(entityIndex)  
        local entity = EntIndexToHScript(entityIndex)  
        local innateAbilityName = "my_innate_ability"  
          
        if entity:IsRealHero() and entity:HasAbility(innateAbilityName) then  
            entity:FindAbilityByName(innateAbilityName):SetLevel(1)  
        end  
    end  
    

Let's go line by line here. After defining a function which accepts our entityIndex parameter we define a variable, which holds the actual entity. We turn entity index into an actual entity using `EntIndexToHScript`. Now we can call methods on our actual entity. First we declare our innate ability name for easier usage. Then we make a condition where we check that our entity is indeed a hero and that it has that ability. If all conditions hold true we get the handle of that ability and set it to level 1 right away.

That's it! Now all heroes who have `my_innate_ability` will automatically have it leveled up on spawn.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/creating-innate-abilities.md)

---

## Making Abilities Use Charges

* [](/)
  * Abilities, items, modifiers
  * Making any ability use charges



# Making any ability use charges

A guide/snippet which will help you to make any ability use charges like Shrapnel or Stone Caller.

First, add save this [file](https://gist.github.com/DoctorGester/1939e277e677e9394924) with a name "modifier_charges.lua" to your vscripts folder (or any subfolder inside of it)

Then, add an initialization line to your addon_game_mode.lua:
    
    
    LinkLuaModifier("modifier_charges", LUA_MODIFIER_MOTION_NONE)  
    

If your file is into a subfolder you can do it like that
    
    
    LinkLuaModifier("modifier_charges", "subfolder/anothersubfolder/modifier_charges", LUA_MODIFIER_MOTION_NONE)  
    

Gratz, you've successfully installed it!

Now you can add charges to any ability with this code:
    
    
    unit:AddNewModifier(unit, unit:FindAbilityByName("ability_name"), "modifier_charges", {  
        max_count = 2,  
        start_count = 1,  
        replenish_time = 6  
    })  
    

The settings in the end are pretty self-explanatory. You can omit the start_count if you want.

That's it, folks.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/making-any-ability-use-charges.md)

---

## Calling Spells with SetCursor

* [](/)
  * Abilities, items, modifiers
  * Calling Spells with SetCursor



# Calling Spells with SetCursor

`CDotaBaseAbility:OnSpellStart` in combination with `CDotaBaseNPC:SetCursorCastTarget` and `CDOTABaseNPC:SetCursorPosition` are used to "Call" spells.

This is a powerful way to interact with Valve's spells in particular. This allows you to:

  * Activate hidden abilities
  * Ignore turn-restrictions
  * Ignore castpoint or cooldown
  * Ignore any other cruft associated with the formal spell-casting methods



This is easy to use, easy to configure and easy to think about. Here is an example that casts Tether on a hidden dummy unit, activated by a datadriven spell:
    
    
    local tether = caster:FindAbilityByName("trollsandelves_hidden_tether")  
    tether:SetLevel(4)  
    tether:EndCooldown()  
    caster:SetCursorCastTarget(dummy)  
    tether:OnSpellStart()  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/calling-spells-with-setcursor.md)

---

## Lua Item Tutorial

* [](/)
  * Abilities, items, modifiers
  * Lua Item Tutorial



On this page

# Lua Item Tutorial

This tutorial is walk-through of creating completely new item with the new item_lua base class.   
For this first tutorial we create upgrade from Blink Dagger to Blink Staff. How it will work is that when targeting any point in ground it will work like Blink Dagger does but if you target allied Unit you can 'tag' it to blink instead of you. We will also add passive bonuses from the item we will have in the recipe.

### Blink Staff​

First open up your npc_items_custom.txt in your favourite text editor. (I use notepad++) If you don't have this file in your scripts\npc\ folder then create it and copy following into it.
    
    
    "DOTAAbilities"  
    {  
    }  
    

First and most important thing is naming your item. for this example I will use "item_blink_staff". Note that using the same name when referring to this item is important as dota 2 assumes some naming schemes.  
We will also setup unique ID for the item and a base class that tells the game that we are intending to create a lua item.
    
    
    "DOTAAbilities"  
    {  
        "item_blink_staff"  
        {  
            "ID"                            "1250" // anything above 1250 should be safe to use.  
            "BaseClass"                     "item_lua"  
        }  
    }  
    

Next we need an image for the item. For that we use "AbilityTextureName" as items classify as sort of abilities in dota 2. Its important that we have our image file in correct place and named correctly.   
For item in this example the file should be found from following path:
    
    
     dota 2 beta\game\dota_addons\{your addon name}\resource\flash3\images\items\blink_staff.png  
    

note that the file name is 'blink_staff.png' instead of 'item_blink_staff.png'. This is because dota will read ability texture name of 'item_blink_staff' as 'item\blink_staff.png'  
It is also important to note that using same name for your ability texture is doubly important as the image in shop doesn't appear correctly if you use different name.  
The image I will be using for this item is this one: ![enter image description here](https://i.imgur.com/yz4ghPc.png)  

    
    
    "DOTAAbilities"  
    {  
        "item_blink_staff"  
        {  
            "ID"                            "1250" // anything above 1250 should be safe to use.  
            "BaseClass"                     "item_lua"  
            "AbilityTextureName"            "item_blink_staff"  
        }  
    }  
    

The last part we must add is link to the script file. You should create new *.lua file somewhere in your scripts\vscripts folder. You can even create sub-folder for it if you want to be organized. Now your 'npc_items_custom.txt' should be something like this.
    
    
    "DOTAAbilities"  
    {  
        "item_blink_staff"  
        {  
            "ID"                            "1250" // anything above 1250 should be safe to use.  
            "BaseClass"                     "item_lua"  
            "AbilityTextureName"            "item_blink_staff"  
            "ScriptFile"                    "lua_items/blink_staff/blink_staff.lua"  
        }  
    }  
    

Truth of the lua items and abilities is that all you really need to define for them in lua file is their class table. So lets create that into our lua file:
    
    
    if item_blink_staff == nil then  
        item_blink_staff = class({})  
    end  
    

IMPORTANT: Make sure you use same name as you defined in your npc_items_custom.txt  
Now next we want to define cooldown and mana cost for our blink staff. This can be done through 'npc_items_custom.txt' or through lua. Note that everything we define through lua we can manipulate more dynamically. For example we could reduce cooldown by half durring night time or double the mana cost if player has positive k/d ratio.  
Also advantage of defining them in npc_items_custom.txt is that what ever shows in the store (before player has the item) is the values defined there. Also currently there is issue that Manacost will always display the value defined by 'npc_item_custom.txt' but the item will still grey(blue?)-out when your mana is lower than what is defined in lua for mana cost.  
Because we want things to look smooth lets define some basic parameters we can later over ride in lua as we like:
    
    
    "DOTAAbilities"  
    {  
        "item_blink_staff"  
        {  
            "ID"                            "1250" // anything above 1250 should be safe to use.  
            "BaseClass"                     "item_lua"  
            "AbilityTextureName"            "item_blink_staff"  
            "ScriptFile"                    "lua_items/blink_staff/blink_staff.lua"  
            // Casting  
            //--------------------------------------------  
            "AbilityCastRange"              "0" //We could define limit here but blink dagger has unlimited range to let player use it more efficiently. The range limiting comes in the script. 0 means unlimited.  
            "AbilityCastPoint"              "0.3" //It's the wind up time of spell.  
            "AbilityCooldown"               "10.0"  
            "AbilityManaCost"               "50"  
        }  
    }  
    

For more key-value stuff involving items use Noyas guide: [Datadriven items](/abilities/item-keyvalues)

  
Its great reference but lets get on with the lua stuff!

### Defining Cast Rules​

First we add behaviours. This will define what happens when player activates the hot-key of the item.
    
    
    function item_blink_staff:GetBehavior()  
        local behav = DOTA_ABILITY_BEHAVIOR_POINT + DOTA_ABILITY_BEHAVIOR_UNIT_TARGET + DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES  
        return behav  
    end  
    

The GetBehaviour() function is called by the engine when it needs to know how the ability should act on different occations. The 'return' should return number 'int' value. Valve has made defining this easy for us by providing them as keys we can just sum together. These values take advantage of bit band where for example:
    
    
    Key ------ Value ------ Bytes  
    DOTA_ABILITY_BEHAVIOR_UNIT_TARGET ------ 8 ------ 01000  
    DOTA_ABILITY_BEHAVIOR_POINT ------ 16 ------ 10000  
    DOTA_ABILITY_BEHAVIOR_UNIT_TARGET + DOTA_ABILITY_BEHAVIOR_POINT ------ 24 ------ 11000  
    

As you can see in the bytes, while the value might look arbitrary, the bytes act like on/off switch of the behaviour. For available values for the behaviours use following link: <https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API#DOTA_ABILITY_BEHAVIOR>

Next we add mana cost and cooldown.
    
    
    function item_blink_staff:GetManaCost()  
        return 50  
    end  
      
    function item_blink_staff:GetCooldown( nLevel )  
        return 10  
    end  
    

As items are defined like abilities the GetCooldown function has helper parameter for level of the ability. You can ignore it for items completely as the level will almost always be 1 (exception of corner cases like bkb or dagon.)

Now lets get to the actual spell casting part.

First we create OnSpellStart() function and define some initial keys to use in the script.
    
    
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = 1200 --How far can we actually blink?  
        local nClamp = 960 --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
    end  
    

Note that while we are in 'item_blink_staff' class we can use 'self' as quick reference to it.  
Now that we have our stuff set up lets start blinking our caster!
    
    
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = 1200 --How far can we actually blink?  
        local nClamp = 960 --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
      
        ProjectileManager:ProjectileDodge(hCaster)  --We disjoint disjointable incoming projectiles.  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_start.vpcf", PATTACH_ABSORIGIN, hCaster) --Create particle effect at our caster.  
        hCaster:EmitSound("DOTA_Item.BlinkDagger.Activate") --Emit sound for the blink  
        local vDiff = vPoint - vOrigin --Difference between the points  
        if vDiff:Length2D() > nMaxBlink then  --Check caster is over reaching.  
            vPoint = vOrigin + (vPoint - vOrigin):Normalized() * nClamp -- Recalculation of the target point.  
        end  
        hCaster:SetAbsOrigin(vPoint) --We move the caster instantly to the location  
        FindClearSpaceForUnit(hCaster, vPoint, false) --This makes sure our caster does not get stuck  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_end.vpcf", PATTACH_ABSORIGIN, hCaster) --Create particle effect at our caster.  
    end  
    

IMPORTANT: We are using sounds and particle effects already precached by default. If you wish to use particle effects and sounds from other heroes or your custom ones then you have to do precaching for those resources.  
This is what our item should do right now:

### Cast on Allied​

Now we are going to create the part that makes this item unique compared to blink dagger. First we if statement in our cast function that distinguishes how it should act depending on the target. Also at same time we make sure that double tapping the item works like it does with blink dagger (self targeting blinks towards base)

Because this lua ability stuff still has some minor issues we have to return to our 'npc_items_custom.txt' file to add some targeting help. Just add the following to the item.
    
    
            "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_FRIENDLY"  
            "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
    

Now looking at our lua code you can see that we can use most of our writen blink code in multiple places. Thats why we are going to change things around a bit like this:
    
    
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = 1200 --How far can we actually blink?  
        local nClamp = 960 --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
        self:Blink(hCaster, vPoint, nMaxBlink, nClamp)  
    end  
      
      
    function item_blink_staff:Blink(hTarget, vPoint, nMaxBlink, nClamp)  
        local vOrigin = hTarget:GetAbsOrigin() --Our units's location  
        ProjectileManager:ProjectileDodge(hTarget)  --We disjoint disjointable incoming projectiles.  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_start.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
        hTarget:EmitSound("DOTA_Item.BlinkDagger.Activate") --Emit sound for the blink  
        local vDiff = vPoint - vOrigin --Difference between the points  
        if vDiff:Length2D() > nMaxBlink then  --Check caster is over reaching.  
            vPoint = vOrigin + (vPoint - vOrigin):Normalized() * nClamp -- Recalculation of the target point.  
        end  
        hTarget:SetAbsOrigin(vPoint) --We move the caster instantly to the location  
        FindClearSpaceForUnit(hTarget, vPoint, false) --This makes sure our caster does not get stuck  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_end.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
    end  
    

Now we can just use the newly defined Blink function to blink our caster, and allies without writing it all again.  
Lets write the self cast now. We create IF statement first to check if we have hTarget. Then we check if the target is same as the caster or not. Also if we don't have hTarget we default to blinking ourselves. To get the location we want to blink towards we need to find some target location. For this we will use the fountain. (ent_dota_fountain)
    
    
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = 1200 --How far can we actually blink?  
        local nClamp = 960 --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
        if hTarget then  
            if hCaster == hTarget then  
                if not self.hFountain and not self.bNoFountain then --We check if we have ever tried finding the fountain before.  
                local hFountain = Entities:FindByClassname(nil, "ent_dota_fountain") --Find first fountain  
                local bFound = false --Make the boolean for while statement.  
                    while not bFound do  
                        if hFountain then --Is there a fountain entity?  
                            if hFountain:GetTeamNumber() == hCaster:GetTeamNumber() then -- Is it the right team?  
                                self.hFountain = hFountain --Store it so we don't have to trouble finding the foundtain again.  
                                bFound = true --Make sure while statement ends  
                            else  
                                hFountain = Entities:FindByClassname(hFountain, "ent_dota_fountain") --Find the next fountain if we didn't find the right team.  
                            end  
                        else  
                            self.bNoFountain = true --We have concluded that there is no fountain entity for this team. Lets not do that again!  
                            bFound = true --We could alternatively use 'Break' but I find this more funny.  
                        end  
                    end  
                end  
                if self.hFountain then --Do we have fountain?  
                    vPoint = self.hFountain:GetAbsOrigin() --Lets change our target location there then.  
                    self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
                else  
                    self:EndCooldown()  
                    self:RefundManaCost()  
                end  
            end  
        else  
            self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
        end  
    end  
    

As you can see, this time we used while statement to go through all fountain entities and stored the results of our search into the ability. If it finds no entities it saves a boolean value so that it won't try to find fountain the next time. Also just like blink dagger if the target cannot be found the we won't blink at all.

  
Next we need to allow targeting allies with the spell but instead of blinking we store their id for next time we do "point" targeting on ground. There are few ways we can do this but It would be fair if we give them some sort of warning what is happening. So lets create two modifiers. One will simply be effect on target ally and one will be hidden modifier to store the target's entity index for short duration.

First we need to link our intended modifiers to the ability. Top of your blink staff lua file should look like this
    
    
    if item_blink_staff == nil then  
        item_blink_staff = class({})  
    end  
      
    LinkLuaModifier( "item_blink_staff_effect_modifier", "lua_items/blink_staff/effect_modifier.lua", LUA_MODIFIER_MOTION_NONE )  
    

Then we need our effect modifier file that was declared. For purposes of this tutorial we will use particle effect for armlet so we can skip precache again.
    
    
    if item_blink_staff_effect_modifier == nil then  
        item_blink_staff_effect_modifier = class({})  
    end  
      
    function item_blink_staff_effect_modifier:OnCreated( kv )  
        if IsServer() then  
            if self:GetCaster() ~= self:GetParent() then  
                local nFXIndex = ParticleManager:CreateParticle("particles/items_fx/armlet.vpcf", PATTACH_ROOTBONE_FOLLOW, self:GetParent())  
                self:AddParticle( nFXIndex, false, false, -1, false, false )  
            end  
        end  
    end  
      
    function item_blink_staff_effect_modifier:GetAttributes()  
        return MODIFIER_ATTRIBUTE_MULTIPLE + MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE  
    end  
      
    function item_blink_staff_effect_modifier:IsHidden()  
        if self:GetCaster() == self:GetParent() then  
        return true  
        else  
        return false  
        end  
    end  
    

As you can see we for the first time used IsServer() function. This is used so some of the game logic is not ran multiple times (as some portions of the code is ran on both clients and server) Also for purposes of this tutorial we will use this same effect for both the caster and the target of the blink staff. We could create two modifiers but that would be wasteful. That's why we added some extra functionality to the modifier so we can distinguish if the target of the modifier is the caster or not. Also in case there are more than one blink staff in game we make sure there can be multiple modifiers of the same type on single unit.

Now we need to add the code that lets us add the modifier to the target and store that target's entity index to our modifier and when point casting retrieve the target again. For this tutorial we give player five seconds to recast. We also end cooldown and refund mana cost on ally target.
    
    
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = 1200 --How far can we actually blink?  
        local nClamp = 960 --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
        if hTarget then  
            if hCaster == hTarget then  
                if not self.hFountain and not self.bNoFountain then --We check if we have ever tried finding the fountain before.  
                local hFountain = Entities:FindByClassname(nil, "ent_dota_fountain") --Find first fountain  
                local bFound = false --Make the boolean for while statement.  
                    while not bFound do  
                        if hFountain then --Is there a fountain entity?  
                            if hFountain:GetTeamNumber() == hCaster:GetTeamNumber() then -- Is it the right team?  
                                self.hFountain = hFountain --Store it so we don't have to trouble finding the foundtain again.  
                                bFound = true --Make sure while statement ends  
                            else  
                                hFountain = Entities:FindByClassname(hFountain, "ent_dota_fountain") --Find the next fountain if we didn't find the right team.  
                            end  
                        else  
                            self.bNoFountain = true --We have concluded that there is no fountain entity for this team. Lets not do that again!  
                            bFound = true --We could alternatively use 'Break' but I find this more funny.  
                        end  
                    end  
                end  
                if self.hFountain then --Do we have fountain?  
                    vPoint = self.hFountain:GetAbsOrigin() --Lets change our target location there then.  
                    self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
                else  
                    self:EndCooldown() --Cooldown refund if we could not find fountain on self cast  
                    self:RefundManaCost() --Manacost refund if we could not find fountain on self cast  
                end  
            else  
                hTarget:AddNewModifier( hCaster, self, "item_blink_staff_effect_modifier", { duration = 5 } ) --lets add modifier to target  
                hCaster:AddNewModifier( hCaster, self, "item_blink_staff_effect_modifier", { duration = 5 } ) --lets add modifier to caster  
                local hModifier = hCaster:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) --find that modifier (they really should fix this by returning handle when adding new modifier.  
                local nTargetIndex = hTarget:GetEntityIndex() --lets find the targets entity index  
                hModifier:SetStackCount(nTargetIndex) --add that index to the modifier as it's stack count  
                self:EndCooldown() --Cooldown refund so can cast again  
                self:RefundManaCost() --Manacost refund  
            end  
        else  
      
            local hModifier = hCaster:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) --Check if we have someone selected  
            if hModifier then  
                hTarget = EntIndexToHScript(hModifier:GetStackCount()) --Find the target with the ent index  
                if hTarget:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) then --Check if the target is not purged.  
                    self:Blink(hTarget, vPoint, nMaxBlink, nClamp) --BLINK!  
                else --Someone purged our target  
                self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
                end  
            else  
                self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
            end  
        end  
    end  
    

Now there are two more things we need to do before we are done with our lua script. Right now this item has unlimited cast range for purposes of targeting allied unit. We also have issue of this item being abused when target does not want to be 'helped' by another. (Aka. Disable Help)  
Luckyly we have one tool for both of them: CastFilterResultTarget and GetCustomCastErrorTarget.  
Lets add following functions to our item's script:
    
    
      
    function item_blink_staff:CastFilterResultTarget( hTarget ) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = 1200 --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return UF_FAIL_CUSTOM  
            end  
        end  
      
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return UF_FAIL_CUSTOM  
        else  
        return UF_SUCCESS  
        end  
    end  
      
    function item_blink_staff:GetCustomCastErrorTarget( hTarget) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = 1200 --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return "#dota_hud_error_target_has_disable_help"  
            end  
        end  
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return "#dota_hud_error_target_out_of_range" --returning error from localization  
        end  
    end  
    

Now to save time and sanity you might want to add 'Special' values to your script. These are values you can modify easily without opening the script and searching for them there. This is extremely helpful when you use those values in multiple places. It also lets you display the values in your item description.  
First add following block to your item in 'npc_items_custom.txt'
    
    
            "AbilityValues"  
            {  
          "max_blink" "1200"  
          "blink_clamp" "960"  
          "help_range" "3000"  
          "help_duration" "5.0"  
            }  
    

Now to use these values you use this function in your ability:
    
    
    self:GetSpecialValueFor( "max_blink" )  
    

Or in your modifier you have to get the handle for your ability first:
    
    
    self:GetAbility():GetSpecialValueFor( "max_blink" )  
    

Now we find and replace all those values with correct retrieval of a special value and we should end up with following result:
    
    
      
    function item_blink_staff:OnSpellStart()  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local hTarget = false --We might not have target so we make fail-safe so we do not get an error when calling - self:GetCursorTarget()  
        if not self:GetCursorTargetingNothing() then  
            hTarget = self:GetCursorTarget()  
        end  
        local vPoint = self:GetCursorPosition() --We will always have Vector for the point.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local nMaxBlink = self:GetSpecialValueFor( "max_blink" ) --How far can we actually blink?  
        local nClamp = self:GetSpecialValueFor( "blink_clamp" ) --If we try to over reach we use this value instead. (this is mechanic from blink dagger.)  
        if hTarget then  
            if hCaster == hTarget then  
                if not self.hFountain and not self.bNoFountain then --We check if we have ever tried finding the fountain before.  
                local hFountain = Entities:FindByClassname(nil, "ent_dota_fountain") --Find first fountain  
                local bFound = false --Make the boolean for while statement.  
                    while not bFound do  
                        if hFountain then --Is there a fountain entity?  
                            if hFountain:GetTeamNumber() == hCaster:GetTeamNumber() then -- Is it the right team?  
                                self.hFountain = hFountain --Store it so we don't have to trouble finding the foundtain again.  
                                bFound = true --Make sure while statement ends  
                            else  
                                hFountain = Entities:FindByClassname(hFountain, "ent_dota_fountain") --Find the next fountain if we didn't find the right team.  
                            end  
                        else  
                            self.bNoFountain = true --We have concluded that there is no fountain entity for this team. Lets not do that again!  
                            bFound = true --We could alternatively use 'Break' but I find this more funny.  
                        end  
                    end  
                end  
                if self.hFountain then --Do we have fountain?  
                    vPoint = self.hFountain:GetAbsOrigin() --Lets change our target location there then.  
                    self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
                else  
                    self:EndCooldown() --Cooldown refund if we could not find fountain on self cast  
                    self:RefundManaCost() --Manacost refund if we could not find fountain on self cast  
                end  
            else  
                hTarget:AddNewModifier( hCaster, self, "item_blink_staff_effect_modifier", { duration = self:GetSpecialValueFor( "help_duration" ) } ) --lets add modifier to target  
                hCaster:AddNewModifier( hCaster, self, "item_blink_staff_effect_modifier", { duration = self:GetSpecialValueFor( "help_duration" ) } ) --lets add modifier to caster  
                local hModifier = hCaster:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) --find that modifier (they really should fix this by returning handle when adding new modifier.  
                local nTargetIndex = hTarget:GetEntityIndex() --lets find the targets entity index  
                hModifier:SetStackCount(nTargetIndex) --add that index to the modifier as it's stack count  
                self:EndCooldown() --Cooldown refund so can cast again  
                self:RefundManaCost() --Manacost refund  
            end  
        else  
      
            local hModifier = hCaster:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) --Check if we have someone selected  
            if hModifier then  
                hTarget = EntIndexToHScript(hModifier:GetStackCount()) --Find the target with the ent index  
                if hTarget:FindModifierByNameAndCaster("item_blink_staff_effect_modifier", hCaster) then --Check if the target is not purged.  
                    self:Blink(hTarget, vPoint, nMaxBlink, nClamp) --BLINK!  
      
                else --Someone purged our target  
                self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
                end  
            else  
                self:Blink(hCaster, vPoint, nMaxBlink, nClamp) --BLINK!  
            end  
        end  
    end  
      
      
    function item_blink_staff:Blink(hTarget, vPoint, nMaxBlink, nClamp)  
        local vOrigin = hTarget:GetAbsOrigin() --Our units's location  
        ProjectileManager:ProjectileDodge(hTarget)  --We disjoint disjointable incoming projectiles.  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_start.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
        hTarget:EmitSound("DOTA_Item.BlinkDagger.Activate") --Emit sound for the blink  
        local vDiff = vPoint - vOrigin --Difference between the points  
        if vDiff:Length2D() > nMaxBlink then  --Check caster is over reaching.  
            vPoint = vOrigin + (vPoint - vOrigin):Normalized() * nClamp -- Recalculation of the target point.  
        end  
        hTarget:SetAbsOrigin(vPoint) --We move the caster instantly to the location  
        FindClearSpaceForUnit(hTarget, vPoint, false) --This makes sure our caster does not get stuck  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_end.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
    end  
      
    function item_blink_staff:CastFilterResultTarget( hTarget ) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return UF_FAIL_CUSTOM  
            end  
        end  
      
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return UF_FAIL_CUSTOM  
        else  
        return UF_SUCCESS  
        end  
    end  
      
    function item_blink_staff:GetCustomCastErrorTarget( hTarget) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return "#dota_hud_error_target_has_disable_help"  
            end  
        end  
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return "#dota_hud_error_target_out_of_range" --returning error from localization  
        end  
    end  
    

Now if we want to make sure the consistancy between npc_items_custom.txt and our lua file is complete we can use self.BaseClass for things like cooldown or castrange. Lets replace our mana cost and cooldown functions to see how it works.
    
    
    function item_blink_staff:GetManaCost()  
        return self.BaseClass.GetManaCost( self, nLevel )  
    end  
      
    function item_blink_staff:GetCooldown( nLevel )  
        return self.BaseClass.GetCooldown( self, nLevel )  
    end  
    

Now all we need to do is make localization for the item. In your 'dota 2 beta\game\dota_addons{addon name}\resource' folder you should have addon_english.txt  
If you are using some different language you might use differently named file. But all languages defaults to english if others fail.  
Open it up and lets add following lines to the mix.
    
    
      
            "DOTA_Tooltip_ability_item_blink_staff"                                           "Blink Staff"  
            "DOTA_Tooltip_ability_item_blink_staff_Description"                               "Teleport to a target point up to 1200 units away. Can be used on allied units to select them to blink instead of you."  
            "DOTA_Tooltip_ability_item_blink_staff_max_blink"                                 "Max Blink Distance:"  
            "DOTA_Tooltip_ability_item_blink_staff_help_range"                                "Help Range:"  
      
            "DOTA_Tooltip_item_blink_staff_effect_modifier"                                             "Blink Staff"  
            "DOTA_Tooltip_item_blink_staff_effect_modifier_Description"                                 "Targeted by Blink Staff"  
    

Lets see what we have now:

Now there are still some things we need to do but first lets fix the most obvious problem. Currently there is a bug where the:  
"AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_FRIENDLY"  
Is ignored!  
We can fix it by adding team check to our cast filters:
    
    
      
    function item_blink_staff:CastFilterResultTarget( hTarget ) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if hCaster:GetTeamNumber() ~= hTarget:GetTeamNumber() then  
            return UF_FAIL_CUSTOM  
        end  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return UF_FAIL_CUSTOM  
            end  
        end  
      
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return UF_FAIL_CUSTOM  
        else  
        return UF_SUCCESS  
        end  
    end  
      
    function item_blink_staff:GetCustomCastErrorTarget( hTarget) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) --How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if hCaster:GetTeamNumber() ~= hTarget:GetTeamNumber() then  
            return "#dota_hud_error_cant_cast_on_enemy"  
        end  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return "#dota_hud_error_target_has_disable_help"  
            end  
        end  
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return "#dota_hud_error_target_out_of_range" --returning error from localization  
        end  
    end  
    

Problem with this method is that its easier for user to blink towards the enemy rather than even try 'helping' him/her. But in this tutorial we assume you can figure it out your how to edit the code to blink when caster and target have different teams using the cast filter changes as example.  
Now the thing that makes blink dagger less as efficient as escape tool is it's Cooldown when hurt. Lets add that in! To do that we create Intrinsic modifier. Lets link our new modifier:
    
    
    LinkLuaModifier( "item_blink_staff_passive_modifier", "lua_items/blink_staff/passive_modifier.lua", LUA_MODIFIER_MOTION_NONE )  
    function item_blink_staff:GetIntrinsicModifierName()  
        return "item_blink_staff_passive_modifier"  
    end  
    

Now create our declared lua file for it and its contents should be something like this:
    
    
    if item_blink_staff_passive_modifier == nil then  
        item_blink_staff_passive_modifier = class({})  
    end  
      
    function item_blink_staff_passive_modifier:IsHidden()  
        return true --we want item's passive abilities to be hidden most of the times  
    end  
      
    function item_blink_staff_passive_modifier:DeclareFunctions() --we want to use these functions in this item  
        local funcs = {  
            MODIFIER_EVENT_ON_TAKEDAMAGE  
        }  
      
        return funcs  
    end  
      
    function item_blink_staff_passive_modifier:OnTakeDamage( params ) --When ever the unit takes damage this is called  
        if IsServer() then --this should be only run on server.  
            local hAbility = self:GetAbility() --we get the ability where this modifier is from  
            if params.attacker ~= self:GetParent() and params.unit == self:GetParent() and  params.attacker:IsHero()  then  
            hAbility:StartCooldown(hAbility:GetSpecialValueFor( "hurt_cooldown" )) --we start the cooldown  
            end  
        end  
    end  
    

As you can see used declare functions to tell the game what to expect from this modifier. This makes sure the game doesn't check this modifier with every event that might be effected.  
We also added new special value for cooldown when caster gets hurt. Remember to add that to your 'npc_items_custom.txt' as float value preferably.
    
    
                "05"  
                {  
                    "var_type"              "FIELD_FLOAT"  
                    "hurt_cooldown"         "3.0"  
                }  
    

Now we should have covered all the main issues. Next we add recipe for the item and add stats from the components.

### Recipe and Stats​

As you might have noticed testing our item, it right now costs no gold to purchase. There are two things we can do here. We can either add ItemCost into our 'npc_items_custom.txt' file or create a recipe for the item. When you create a recipe for your item the game automatically calculates the item cost. We can also add ItemCost to our new recipe to let the game know that you have to buy it aswell instead of items being automatically combined into one. We are also adding the stats from our component items so be sure to add special values to your item reflecting the component stats.

I will be using item_quarterstaff, item_robe and item_blink for my components. I also make the recipe cost 325 gold. One important thing to note when creating recipe is the naming scheme. The recipe name should always be 'item_recipe_your_item'  
my item: item_blink_staff  
my recipe: item_recipe_blink_staff  
Also you must give each item in npc_items_custom.txt unique ID. If you don't you may find odd bugs like item not being purchasable. Here is my current entries in npc_items_custom.txt
    
    
      
        "item_blink_staff"  
        {  
            "ID"                            "1250"  
            "BaseClass"                     "item_lua"  
            "ScriptFile"                    "lua_items/blink_staff/blink_staff.lua"  
            "AbilityTextureName"            "item_blink_staff"  
            "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_FRIENDLY"  
            "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
            "AbilityCastRange"              "0"  
            "AbilityCastPoint"              "0.3"  
            "AbilityCooldown"               "10.0"  
            "AbilityManaCost"               "50"  
            //// Item Info  
            ////-------------------------------------------------------------------------------------------------------------  
            "ItemCost"                      "3900"  
            "ItemShopTags"                  "blink;staff"  
            "ItemQuality"                   "rare"  
            "ItemAliases"                   "blink;staff"  
        //  
            "AbilityValues"  
            {  
          // Blink  
          "max_blink" "1200"  
          "blink_clamp" "960"  
          "help_range" "3000"  
          "help_duration" "5.0"  
          "hurt_cooldown" "3.0"  
      
                // Quearterstaff  
          "bonus_damage" "10"  
          "bonus_attack_speed" "10"  
      
          // Robe Of Magi  
          "bonus_int" "6"  
            }  
        }  
      
        "item_recipe_blink_staff"  
        {  
            // General  
            //-------------------------------------------------------------------------------------------------------------  
            "BaseClass"                     "item_datadriven"  
            "ID"                            "1251"  
      
            // Item Info  
            //-------------------------------------------------------------------------------------------------------------  
            "ItemCost"                      "325"  
            "ItemShopTags"                  ""  
      
            // Recipe  
            //-------------------------------------------------------------------------------------------------------------  
            "ItemRecipe"                    "1"  
            "ItemResult"                    "item_blink_staff"  
            "ItemRequirements"  
            {  
                "01"                        "item_quarterstaff;item_robe;item_blink"  
            }  
        }  
    

Notice that the item requirements part lists the items you need. For valve defined ones use this as reference:   
<https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Built-In_Item_Names>   
Also notice how the first entry is defined "01" . This is because you can create recipe that can be used with different sets of components. This is used by valve in Power Threads where you can use any of the basic 450 costing attribute items.  
Now while we have defined special values for our blink staff stats, we have not actually used those values anywhere. Lets get back to our blink staff passive modifier lua file we used for the cooldown when taking damage.  
Here we have to declare new functions for the stats we need.
    
    
    function item_blink_staff_passive_modifier:DeclareFunctions() --we want to use these functions in this item  
        local funcs = {  
            MODIFIER_EVENT_ON_TAKEDAMAGE,  
            MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,  
            MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT,  
            MODIFIER_PROPERTY_STATS_INTELLECT_BONUS  
        }  
      
        return funcs  
    end  
    

Now that we have declared what we want to effect in game with this modifier lets add functions the game can call on the correct events.
    
    
    function item_blink_staff_passive_modifier:GetModifierBonusStats_Intellect()  
        local hAbility = self:GetAbility() --we get the ability where this modifier is from  
        return hAbility:GetSpecialValueFor( "bonus_int" )  
    end  
      
    function item_blink_staff_passive_modifier:GetModifierAttackSpeedBonus_Constant()  
        local hAbility = self:GetAbility() --we get the ability where this modifier is from  
        return hAbility:GetSpecialValueFor( "bonus_attack_speed" )  
    end  
      
    function item_blink_staff_passive_modifier:GetModifierPreAttack_BonusDamage()  
        local hAbility = self:GetAbility() --we get the ability where this modifier is from  
        return hAbility:GetSpecialValueFor( "bonus_damage" )  
    end  
    

Now last thing we need to do is tell player about the awe-inspiring stats this item gives them. Lets add our new stats to the addon_english.txt  
After that our file should have something like this:
    
    
      
            "DOTA_Tooltip_ability_item_blink_staff"                                           "Blink Staff"  
            "DOTA_Tooltip_ability_item_blink_staff_Description"                               "Teleport to a target point up to 1200 units away. Can be used on allied units to select them to blink instead of you."  
            "DOTA_Tooltip_ability_item_blink_staff_max_blink"                                 "Max Blink Distance:"  
            "DOTA_Tooltip_ability_item_blink_staff_help_range"                                "Help Range:"  
            "DOTA_Tooltip_ability_item_blink_staff_bonus_damage"                              "+$damage"  
            "DOTA_Tooltip_ability_item_blink_staff_bonus_attack_speed"                        "+$attack"  
            "DOTA_Tooltip_ability_item_blink_staff_bonus_int"                                 "+$int"  
      
            "DOTA_Tooltip_item_blink_staff_effect_modifier"                                             "Blink Staff"  
            "DOTA_Tooltip_item_blink_staff_effect_modifier_Description"                                 "Targeted by Blink Staff"  
    

Now we are pretty much done. But because the biggest advantage of lua items is that we can define so many things dynamically so rest of this tutorial we will do few experiments that might not seem very balanced or sensible from game play perspective but just because we can!

### Advanced Uses​

First Lets try effecting the help casting range if we are dealing with large mana pool hero. Since we are using cast filters for the help range limitation we can do this part there. To do this we use our already defined hCaster handle and use function :GetMaxMana() to return the hero's mana pool. Then we add that value to our already existing help range. This means that if our caster has 5000 mana pool to use late game he or she will have massive support range of 8000 units.  
So lets change the CastFilterResult target and error functions with following:
    
    
        local nRangeBonus = hCaster:GetMaxMana() --Get our caster's mana pool  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) + nRangeBonus--How far can we actually target?  
    

The end result should look something like this
    
    
    function item_blink_staff:CastFilterResultTarget( hTarget ) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nRangeBonus = hCaster:GetMaxMana() --Get our caster's mana pool  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) + nRangeBonus--How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if hCaster:GetTeamNumber() ~= hTarget:GetTeamNumber() then  
            return UF_FAIL_CUSTOM  
        end  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return UF_FAIL_CUSTOM  
            end  
        end  
      
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return UF_FAIL_CUSTOM  
        else  
        return UF_SUCCESS  
        end  
    end  
      
    function item_blink_staff:GetCustomCastErrorTarget( hTarget) -- hTarget is the targeted NPC.  
        local hCaster = self:GetCaster() --We will always have Caster.  
        local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
        local vPoint = hTarget:GetAbsOrigin() --Our target's location  
        local nRangeBonus = hCaster:GetMaxMana() --Get our caster's mana pool  
        local nMaxRange = self:GetSpecialValueFor( "help_range" ) + nRangeBonus--How far can we actually target?  
        local vDiff = vPoint - vOrigin --Difference between the points  
        local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
        local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
        if hCaster:GetTeamNumber() ~= hTarget:GetTeamNumber() then  
            return "#dota_hud_error_cant_cast_on_enemy"  
        end  
        if nTargetID and nCasterID then --making sure they both exist  
            if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                return "#dota_hud_error_target_has_disable_help"  
            end  
        end  
        if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
        return "#dota_hud_error_target_out_of_range" --returning error from localization  
        end  
    end  
    

Now you may have noticed how we are using almost same code for both cast filter and the error function. Here is a way to reduce the redundancy:
    
    
    function item_blink_staff:CastFilterResultTarget( hTarget ) -- hTarget is the targeted NPC.  
        return self:CCastFilter( hTarget, false )  
    end  
      
    function item_blink_staff:GetCustomCastErrorTarget( hTarget) -- hTarget is the targeted NPC.  
        return self:CCastFilter( hTarget, true )  
    end  
      
    function item_blink_staff:CCastFilter( hTarget, bError )  
        if IsServer() then --this should be only run on server.  
            local hCaster = self:GetCaster() --We will always have Caster.  
            local vOrigin = hCaster:GetAbsOrigin() --Our caster's location  
            local vPoint = hTarget:GetAbsOrigin() --Our target's location  
            local nRangeBonus = hCaster:GetMaxMana() --Get our caster's mana pool  
            local nMaxRange = self:GetSpecialValueFor( "help_range" ) + nRangeBonus--How far can we actually target?  
            local vDiff = vPoint - vOrigin --Difference between the points  
            local nTargetID = hTarget:GetPlayerOwnerID() --getting targets owner id  
            local nCasterID = hCaster:GetPlayerOwnerID() --getting casters owner id  
            if hCaster:GetTeamNumber() ~= hTarget:GetTeamNumber() then  
                if bError then  
                    return "#dota_hud_error_cant_cast_on_enemy"  
                else  
                    return UF_FAIL_CUSTOM  
                end  
            end  
            if nTargetID and nCasterID then --making sure they both exist  
                if PlayerResource:IsDisableHelpSetForPlayerID(nTargetID, nCasterID) then --target hates having caster help him out.  
                    if bError then  
                        return "#dota_hud_error_target_has_disable_help"  
                    else  
                        return UF_FAIL_CUSTOM  
                    end  
                end  
            end  
            if vDiff:Length2D() > nMaxRange then  --Check caster is over reaching.  
                if bError then  
                    return "#dota_hud_error_target_out_of_range" --returning error from localization  
                else  
                    return UF_FAIL_CUSTOM  
                end  
            end  
            if not bError then  
                return UF_SUCCESS  
            end  
        end  
    end  
    

### Item Levels​

As I mentioned early in the tutorial things like bkb and dagon has item levels used. Dagon uses separate items to define the levels while bkb has built-in leveling when ever it is used. We are going to code where we reduce our blink staff help range when ever it is used to help a player.  
First we need to add new values for our help ranges between the levels. These are simply separated by spaces between values.
    
    
                "03"  
                {  
                    "var_type"              "FIELD_INTEGER"  
                    "help_range"            "3000 2500 2000 1500 1000"  
                }  
    

Because there is some odd bugs here and there, the MaxLevel value that we would use for normal abilities doesn't work for items. To help us define it in the script we create new special value for it.
    
    
                "09"  
                {  
                    "var_type"              "FIELD_INTEGER"  
                    "max_level"             "5"  
                }  
    

Back to the lua script, we need to upgrade the item only when ally is teleported and not when we simply tag our ally for teleport. First find this line:
    
    
    self:Blink(hTarget, vPoint, nMaxBlink, nClamp) --BLINK!  
    

Under it lets add the upgrade part. Note that we have to check we don't upgrade the item when it's fully upgraded.
    
    
    if self:GetLevel() < self:GetSpecialValueFor( "max_level" ) then --We can't define max level for item like we can with abilities. Best to create special value for it.  
        self:UpgradeAbility(true)  
    end  
    

We could also add condition where if the game is currently in night time the upgrade doesn't happen. Letting our hero help his allies for free!
    
    
    if self:GetLevel() < self:GetSpecialValueFor( "max_level" ) and GameRules:IsDaytime() then  
        self:UpgradeAbility(true)  
    end  
    

Now if we want to let our hero refresh the help range levels then we can either script some event where we reset the item's level with:
    
    
    self:SetLevel(1)  
    

Or we can use more elegant choice of modifying our recipe to act like charge refresh for drums of endurance.
    
    
      
        "item_recipe_blink_staff"  
        {  
            // General  
            //-------------------------------------------------------------------------------------------------------------  
            "BaseClass"                     "item_datadriven"  
            "ID"                            "1251"  
      
            // Item Info  
            //-------------------------------------------------------------------------------------------------------------  
            "ItemCost"                      "325"  
            "ItemShopTags"                  ""  
      
            // Recipe  
            //-------------------------------------------------------------------------------------------------------------  
            "ItemRecipe"                    "1"  
            "ItemResult"                    "item_blink_staff"  
            "ItemRequirements"  
            {  
                "01"                        "item_quarterstaff;item_robe;item_blink"  
                "02"                        "item_blink_staff"  
            }  
        }  
    

Notice how we added "02" to the item requirements and it only requires the item "item_blink_staff". This means we can combine our original blink staff to create fully new one with level set to its default value.  
Now what you should remember to do is change the description of the item and not keep the player guessing.
    
    
            "DOTA_Tooltip_ability_item_blink_staff_Description"                               "Teleport to a target point up to 1200 units away. Can be used on allied units to select them to blink instead of you. If you take damage the Blink Staff is put on 3.0 second cooldown. Every time you help ally the help range is reduced by 500. This doesn't apply if used durring night time. You maximum mana is added to the help distance."  
    

### The End​

That is end of this tutorial. If you have requests concerning this tutorial or improvements/corrections please comment bellow.  
You can find this and other lua items and abilities from my Dota2Overflow github repo.  
<https://github.com/DrTeaSpoon/Dota2Overflow>

  
To help declaring modifier functions use this for resource:  
https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Lua_Abilities_and_Modifiers#Modifier_Functions  
Big thanks to BMD for barebones. While this tutorial has nothing to do with his repo, I used it for testing ground and creating the visual aids.  
Big thanks to all who have contributed to https://github.com/Pizzalol/SpellLibrary  


Happy Blinking!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-item-tutorial.md)

---

## Reutilizing Built-In Modifiers

* [](/)
  * Abilities, items, modifiers
  * Reutilizing Built-In Modifiers



On this page

# Reutilizing Built-In Modifiers

Here it will be explained how to reuse any Built-In modifier through the datadriven system.

This has many uses, as sometimes it's impossible to replicate some effects that are very hidden/hardcoded within the engine.

In a previous example, the [Illusion Ability Example](http://moddota.com/forums/discussion/62/illusion-ability-example) made use of the `"modifier_illusion modifier"` in Lua like this:
    
    
    illusion:AddNewModifier(caster, ability, "modifier_illusion", { duration = duration,  
                                                                    outgoing_damage = outgoingDamage,  
                                                                    incoming_damage = incomingDamage })  
    

The fields between { } are **Very** specific. For that particular modifier, I took the values from [this magic list](http://moddota.com/resources/modifier_keys.txt), but this isn't the only way of acquiring them, as this list is very incomplete.

The Full List of Built-In Modifiers can be found [on the the wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Built-In_Modifier_Names)

`AddNewModifier` can be replaced by the datadriven `"ApplyNewModifier"` Action block like this:

 **Basic Example:** This will apply 1 frame of MODIFIER_STATE_NO_UNIT_COLLISION
    
    
    "ApplyModifier"  
    {  
        "ModifierName"  "modifier_phased"  
        "Target"       "TARGET"  
        "Duration"     "0.03"  
    }  
    

However this isn't more than a shortcut to avoid creating a new modifier with the state. The real strength of this method is in applying modifiers that have very custom properties that aren't easily reproduced with the basic Properties/States/etc.

  


For example, in the `alchemist_chemical_rage` ability, Alchemist changes its attack/idle/run animation, model effect, attack sound and also gets the ability bonus.

If we wanted to get all the cosmetic properties but with different ability effects, we need to rewrite the skill from scratch, but sadly the autoattack sound and animations for attack/idle/run aren't easily changed, and we would need to find a wacky workaround for it.

Instead, we can make use of the `"modifier_alchemist_chemical_rage_transform"` which will handle everything, transforming the hero and applying a `"modifier_alchemist_chemical_rage"` with the exact ability we want.

  


Now to find out the field names and pass values to the modifier, follow these steps:

#### Step 1 - Finding the ability modifier​

Go to the original ability that uses the modifier you want to reuse form the list. The [SpellLibrary](https://github.com/Pizzalol/SpellLibrary/tree/SpellLibrary/game/dota_addons/spelllibrary/scripts/npc/abilities) contains a split list of all Dota Abilities with its own names, it's very easy to find the fields there.

  


#### Step 2 - Setting the AbilityValues fields​

Copy the ability specials from the main ability into your datadriven AbilityValues block. If the custom ability doesn't have the field, the modifier will default to 0, so you can remove those that you want to ignore.

 **Example:** [alchemist_chemical_rage](https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/npc/abilities/alchemist_chemical_rage_datadriven.txt#L30) AbilityValues block, with 2 added values and most of its ability bonus removed.
    
    
    "AbilityValues"  
    {  
      "duration" "25.0"  
      "transformation_time" "0.35"  
      "bonus_movespeed_percent" "50"  
      "bonus_attack_speed" "322"  
    }  
    

  


#### Step 3 - Applying the modifier​

On the desired Ability or Modifier Event, add the ApplyModifier action:
    
    
    "ApplyModifier"  
    {  
        "ModifierName" "modifier_alchemist_chemical_rage_transform"  
        "Target"       "CASTER"  
        "Duration"     "%transformation_time"  
    }  
    

 **Without a Duration field** , the modifier might be applied for duration = nil, meaning infinite duration.

  


#### Step 4 - Adjusting the Tooltip​

![img](https://puu.sh/eHc3N/2b62c46b84.jpg)

The modifier_alchemist_chemical_rage tooltip needs to be adjusted to ignore AbilityValues we don't need, and instead use our `bonus_attack_speed` and `bonus_movespeed_percent`.

  1. Go to dota_english.txt, which can be found in the main dota file or in [this repository link](https://raw.githubusercontent.com/dotabuff/d2vpk/master/dota/resource/dota_english.txt)

  2. Find the modifier tooltip of the spell we want to modify, copy them into your addon_english and edit them:



    
    
    "DOTA_Tooltip_modifier_alchemist_chemical_rage"             "Legacy Chemical Rage"  
    "DOTA_Tooltip_modifier_alchemist_chemical_rage_Description" "Increasing attack and movement speed."  
    

After modifying the addon_english.txt:

![img](https://puu.sh/eHpXB/8fe79a1d57.jpg)

Note that you cannot refer to a new custom %dMODIFIER _PROPERTY_[CONSTANT_LIST](http://moddota.com/forums/discussion/14/datadriven-ability-breakdown-documentation##properties)% in the tooltip, because it doesn't have the custom values in its modifier.

Instead you can make those tooltips in the separate modifier, or directly add the numbers to the original modifier tooltip if they are static values (like in this cause I could've written 50 and 322). Sadly, you can't set the built-in modifier as hidden either.

  


#### Full Example​
    
    
    "alchemist_chemical_rage_warcraft"  
    {  
        "BaseClass"            "ability_datadriven"  
        "AbilityTextureName"   "alchemist_chemical_rage_warcraft"  
        "MaxLevel"             "3"  
      
        "AbilityBehavior"      "DOTA_ABILITY_BEHAVIOR_NO_TARGET"  
        "AbilityCastAnimation" "ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START"  
      
        "AbilityCastRange"      "700"  
        "AbilityCastPoint"      "0.0"  
        "AbilityCooldown"       "30.0"  
      
        "AbilityManaCost"       "25"  
      
        "AbilityValues"  
        {  
            "duration" "15.0"  
            "transformation_time" "0.35"  
            "bonus_movespeed_percent" "50"  
            "bonus_attack_speed" "25 75 125"  
        }  
      
        "precache"  
        {  
            "soundfile" "soundevents/game_sounds_heroes/game_sounds_alchemist.vsndevts"  
            "particle"  "particles/status_fx/status_effect_chemical_rage.vpcf"  
            "particle"  "particles/units/heroes/hero_alchemist/alchemist_chemical_rage.vpcf"  
        }  
      
        "OnSpellStart"  
        {  
            "FireSound"  
            {  
                "EffectName"   "Hero_Alchemist.ChemicalRage.Cast"  
                "Target"       "CASTER"  
            }  
      
            "ApplyModifier"  
            {  
                "ModifierName" "modifier_alchemist_chemical_rage_transform"  
                "Target"       "CASTER"  
                "Duration"     "%transformation_time"  
            }  
      
            // Extra Modifier with what we need to add for the custom ability  
            "ApplyModifier"  
            {  
                "ModifierName" "modifier_chemical_rage_warcraft"  
                "Target"       "CASTER"  
            }  
      }  
      
        "Modifiers"  
        {  
      
            "modifier_chemical_rage_warcraft"  
            {  
                "IsBuff"   "1"  
                "IsHidden" "1"  
                "Duration" "%duration"  
      
                "Properties"  
                {  
                    "MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT" "%bonus_attack_speed"  
                    "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%bonus_movespeed_percent"  
                }  
            }  
        }  
    }  
    

  


Hopefully this will help you have more options if the ability you want to modify hasn't been rewritten yet, or to get a particular effect which is hard to replicate by normal means.

 _Remember to share any interesting discoveries in here, for the benefit of everyone in the community._

Thanks for reading!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/reutilizing-built-in-modifiers.md)

---

## Using Modifier Properties in Tooltips

* [](/)
  * Abilities, items, modifiers
  * Using Modifier Properties in tooltips



On this page

# Using Modifier Properties in tooltips

Any time you see a modifier tooltip using a non-static number it's getting its value from one of that modifier's [MODIFIER _PROPERTY_](https://moddota.com/api/#!/vscripts/modifierfunction)'s

some examples: ![img](https://i.imgur.com/dngijaZ.png)
    
    
    "DOTA_Tooltip_modifier_fountain_aura_buff_Description"              "Heals %dMODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE%%% HP and %dMODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE%%% mana per second."  
    

![img](https://i.imgur.com/bzU8GAF.png)
    
    
    "DOTA_Tooltip_modifier_smoke_of_deceit_Description" "Invisible, moving %dMODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE%%% faster, and hidden from the minimap. Attacking or moving within %dMODIFIER_PROPERTY_TOOLTIP% range of an enemy hero or tower will break the invisibility."  
    

![img](https://i.imgur.com/Xy0hTsD.png)
    
    
    "DOTA_Tooltip_modifier_tower_aura_bonus_Description"    "Armor increased by %dMODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS% and health regeneration by %dMODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT%."  
    

and approximately 560 more examples in valve's [abilities_english.txt](https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/resource/localization/abilities_english.txt)

As you can see, all of those numbers are not manually written into the modifier description, they are dynamically grabbed from the modifier.

### Why is this useful?​

Because if you manually write the numbers into the tooltip then any time you make a number change in the ability you will have to remember to update every related tooltip, and hassle aside you're bound to miss some.

Using the dynamic tooltip you only have to change the number in one place and it gets updated everywhere. And you can change the number you are returning in your script during the game.

### How to do it​

First, please note that this only works with Lua Modifiers and Valve's built in modifiers. It cannot be done with datadriven modifiers.

Any time you use a modifier property in a lua modifier the value you `return` will be available for use in the modifier's description tooltip.

In your modifier script:
    
    
    function modifier_example:DeclareFunctions()  
        return {  
            MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,  
        }   
    end  
      
    function modifier_example:GetModifierPreAttack_BonusDamage()  
        return 100  
    end  
    

In your addon_\<language>.txt
    
    
    "DOTA_Tooltip_modifier_example_Description" "Granting %dMODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE% bonus damage!"  
    

This would result in a tooltip that says: **`Granting 100 bonus damage!`**

In the tooltip the percentage `%` sign surrounds the MODIFIER _PROPERTY_ to mark it as text to be replaced with the value of the modifier property. If the contents between the %'s don't match the format then it wont work.

### The Format​

`%<-><number><d|f>MODIFIER_PROPERTY_%`

Snippet from [abilities_english.txt](https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/resource/localization/abilities_english.txt):
    
    
    // substitution for modifier tooltips  
    // %dMODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS% - 'd' prints the value returned by the function as an integer  
    // 'd' for integer  
    // 'f' for float  
    // optional '-' to not abs() the values  
    // optional number to specify the number of decimals to print after a float  
    // eg: %-2fMODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE%   
    // use %% to draw a percentage sign   
    test  
    

The first thing needed is a `d` for integer (whole number), or `f` for float (floating point number) Note that this is case sensitive, they must be lowercase. And one of these is required, if you try to omit it, it will not work.

`%d...%` `%f...%`

Next is the modifier property name, make sure there is no empty space.

`%dMODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT%` `%fMODIFIER_PROPERTY_TOOLTIP%`

That's it, that's all you need for your tooltip to display.

But, there are 2 more options you can use.

By default the returned number will be absolute. Meaning that even if you return a negative number it will be positive in the tooltip. Putting a dash/minus sign `-` before the d/f will make it not abs() the number, so it can be negative.

`%-dMODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT%` `%-fMODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT%`

And with a float you can add a number before the `f` to choose how many decimals to display (default 1)

`%-2fMODIFIER_PROPERTY_MANA_REGEN_CONSTANT%` `%3fMODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT%`

and finally, if you want to write a percentage sign `%` in your modifier tooltip you simply put 2 `%%` next to eachother where ever you want it in the tooltip.

`"This is a percentage sign: %%"`

`"Gaining %dMODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE%%% bonus movement speed"`

### MODIFIER_PROPERTY_TOOLTIP​

I'll leave a special note here for MODIFIER_PROPERTY_TOOLTIP and MODIFIER_PROPERTY_TOOLTIP2 These modifier properties do not do anything functionality wise, they exist only to display a custom number in your tooltip.

A simple example could be:
    
    
    function modifier_example:DeclareFunctions()  
        return {  
            MODIFIER_PROPERTY_TOOLTIP,  
            MODIFIER_PROPERTY_TOOLTIP2,  
        }   
    end  
      
    function modifier_example:OnTooltip()  
        return self:GetStackCount()  
    end  
    function modifier_example:OnTooltip2()  
        return self.number_of_killed_units  
    end  
    

### My %property% always shows 0 ??​

If you're having this issue then your returned value is probably only seen on the Server and not the Client. See this guide for instruction: [Sending Server values to the Client](https://moddota.com/abilities/server-to-client)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/modifier-properties-in-tooltips.md)

---

## Sending Server Values to Client

* [](/)
  * Abilities, items, modifiers
  * Sending Server values to the Client in a modifier.



On this page

# Sending Server values to the Client in a modifier.

Modifier scripts are run on both the server, and every client in the game. A lot of the [Lua API](https://moddota.com/api/#!/vscripts) is server-side functions that the client cannot use.

And so, often times when using modifiers you will have to use Server only functions for calculations or whatever your purpose may be.

Usually the server is what handles the functionality, while the client is just for displaying information.

So if you for example gave your hero bonus damage that you calculated or stored only on the server then you would see that your hero does deal the bonus damage, but its not displayed on the UI or any Tooltips.

Example that grants 2x your primary attribute as bonus damage:
    
    
    modifier_example = class({})  
      
    function modifier_example:DeclareFunction()  
        return {  
            MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE  
        }  
    end  
      
    function modifier_example:GetModifierPreAttack_BonusDamage()  
        if not IsServer() then return end  
        --GetPrimaryStatValue is a server-only function  
        return self:GetParent():GetPrimaryStatValue() * 2  
    end  
    

With this modifier you will run into the mentioned issue where your attack damage is not updated in the UI, but you will still deal the bonus damage.

To fix this, we need to somehow send this server-only value to the client. There are 2 primary methods for doing this, though there are other less convienient ways.

### Modifier Stack Count​

This is the most basic method, where all you need to do is Set the modifiers stack count on the server and the stack count is automatically synced to the client.

Example using this method:
    
    
    modifier_example = class({})  
      
    function modifier_example:DeclareFunction()  
        return {  
            MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE  
        }  
    end  
      
    function modifier_example:GetModifierPreAttack_BonusDamage()  
        if IsServer() then  
            local stat = self:GetParent():GetPrimaryStatValue()  
            self:SetStackCount(stat)  
        end  
      
        return self:GetStackCount() * 2  
    end  
    

Great, now the damage is applied and displayed correctly!

But, there are some limitations with using modifier stacks.

  * You can only set integer values. No floats, booleans, strings, or tables.
  * You can only set one stack count per modifier.
  * The stack count is displayed on the modifier buff icon, and this is not always wanted.



So what can you do if you need to send one of these unsupported values or even send multiple values to the client?

Well, there are some workarounds but what you should use is Modifier Transmitters.

### Modifier Transmitters​

Modifier transmitters allow you to send any amount of any value types from the server to the client in your modifier. But they require a bit of set-up.

There are 3 functions needed to make use of transmitters.

  * `SetHasCustomTransmitterData` This should be called in your modifier's `OnCreated` function to tell the server you want your modifier to transmit data to the client

  * `AddCustomTransmitterData` This is where you pick the data you want to send to the client, run on server-side only

  * `HandleCustomTransmitterData` This is where the server data is sent to, run on client-side only.

  * and also `SendBuffRefreshToClients` for refreshing the transmitted data if needed.




Example that grants bonus damage and attack speed based on your current health.
    
    
    modifier_example = class({})  
      
    function modifier_example:OnCreated( kv )  
        if not IsServer() then return end  
        --grab some values from the ability's KV  
        local percent_health_to_damage = self:GetAbility():GetSpecialValueFor("percent_health_to_damage")  
        local percent_health_to_atk_spd = self:GetAbility():GetSpecialValueFor("percent_health_to_atk_spd")  
      
        --GetHealth is a server-only function  
        local health = self:GetParent():GetHealth()  
      
        --calculate our values on the server.  
        self.damage = health * percent_health_to_damage  
        self.attack_speed = health * percent_health_to_atk_spd  
      
        --tell the server we are ready to send data to the client  
        self:SetHasCustomTransmitterData(true)  
      
        --we want to think so we can periodically refresh the data we are sending to the client  
        --note: this can be called on client, but in this script its only called on server, so it only thinks on server.  
        self:StartIntervalThink(0.1)  
    end  
      
    --refresh the modifier on every think  
    function modifier_example:OnIntervalThink()  
        self:OnRefresh()  
    end  
      
    --this function is called when a modifier is reapplied, or manually refreshed in a script.  
    function modifier_example:OnRefresh( kv )  
        if IsServer() then  
        --call OnCreated again to recalculate our values  
        self:OnCreated()  
          
            --SendBuffRefreshToClients is a server-only function  
            self:SendBuffRefreshToClients()  
        end  
    end  
      
    --this is a server-only function that is called whenever modifier:SetHasCustomTransmitterData(true) is called,  
    -- and also whenever modifier:SendBuffRefreshToClients() is called  
    function modifier_example:AddCustomTransmitterData()  
        return {  
            damage = self.damage,  
            attack_speed = self.attack_speed,  
        }  
    end  
      
    --this is a client-only function that is called with the table returned by modifier:AddCustomTransmitterData()  
    function modifier_example:HandleCustomTransmitterData( data )  
        self.damage = data.damage  
        self.attack_speed = data.attack_speed  
    end  
      
    function modifier_example:DeclareFunctions()  
        return {  
            MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT,  
            MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,  
        }  
    end  
      
    function modifier_example:GetModifierAttackSpeedBonus_Constant()  
        return self.attack_speed  
    end  
      
    function modifier_example:GetModifierPreAttack_BonusDamage()  
        return self.damage  
    end  
    

You can find many other examples of modifier transmitters on [GitHub](https://github.com/search?l=Lua&q=SetHasCustomTransmitterData&type=Code)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/server-to-client.md)

---

# Lua Modifiers

## Extending Hero/NPC API

* [](/)
  * Abilities, items, modifiers
  * Lua Modifiers
  * Extending Hero/NPC API with lua modifiers



# Extending Hero/NPC API with lua modifiers

When creating cool new abilities or game mechanics you often run into issues with the lack of good API. While I admit the dota 2 has massive API, it seems to focus on few very odd things or mechanics not fully exposed by default game. (Runes, Spell Stealing, Illusions). To fix those issues you might want to expand it. Here is one method of doing so. If you are using BMD's Barebones then you already have neatly exposed function `GameMode:OnHeroInGame(hero)` in your `internal/gamemode.lua` file. Otherwise you will want to listen to NPC spawning when initializing your game mode:
    
    
    function Activate()  
      LinkLuaModifier( "heroes_base_mod", "lua_modifiers/hero_base_mod.lua", LUA_MODIFIER_MOTION_NONE )  
      ListenToGameEvent('npc_spawned', Dynamic_Wrap(CModDotaTutorialsGameMode, 'OnNPC_Spawn'), CModDotaTutorialsGameMode)  
    end  
      
    function CModDotaTutorialsGameMode:OnNPC_Spawn(keys)  
      local npc = EntIndexToHScript(keys.entindex)  
      if npc:IsRealHero() and npc.bInit == nil then  
        npc.bInit = true  
            OnHeroFirst_Spawn(npc)  
      end  
    end  
      
    function OnHeroFirst_Spawn(hero)  
      hero:AddNewModifier( hero, nil, "heroes_base_mod", {} )  
    end  
    

NOTE: Keep in mind your gamemode's function name. I used `CModDotaTutorialsGameMode`. You should probably have something else. Now lets get back to topic. As you noticed we used `LinkLuaModifier`. We should create file it points to in your vscripts folder `"lua_modifiers/hero_base_mod.lua"` For this example we are tracking what is the last spell player has cast. This could be used potentially as the building blocks for recreating Rubick's spell steal. If you are unfamiliar with lua modifiers here is the only essential part of your modifier:
    
    
    if heroes_base_mod == nil then  
        heroes_base_mod = class({})  
    end  
    

Next we want to make sure the modifier is not disabled at any point:
    
    
    function heroes_base_mod:GetAttributes()  
        return MODIFIER_ATTRIBUTE_PERMANENT + MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE  
    end  
    

Here is the meat of our function's purpose. Track when this hero casts a spell.
    
    
    function heroes_base_mod:DeclareFunctions()  
        local funcs = {  
            MODIFIER_EVENT_ON_ABILITY_EXECUTED  
        }  
        return funcs  
    end  
      
    function heroes_base_mod:OnAbilityExecuted(params)  
        if IsServer() then --Make sure we are doing this only server side.  
            if params.unit == self:GetParent() then --we only want the spells cast by this unit.  
                if not params.ability:IsItem() then --we don't want to track items.  
                    self.lastability = params.ability --record the ability handle.  
                end  
            end  
        end  
    end  
    

Now we get to the magic:
    
    
    function heroes_base_mod:OnCreated(kv)  
        local hMod = self --we can only reference to "self" in our own function we pass this modifier to function we create for the unit.  
        local hParent = self:GetParent() --the unit.  
        if hParent.GetLastSpell == nil then --if for some odd reason there is already such function  
            function hParent:GetLastSpell() ---we create new function for the unit.  
                if hMod.lastability ~= nil then --if unit has cast any spells  
                    return hMod.lastability --return the last ability.  
                else  
                    return nil --in case there is nothing to return. this is sort of redundant.  
                end  
            end  
        end  
    end  
    

Because we assume every hero having this modifier its kinda useless to show it on the screen.
    
    
    function heroes_base_mod:IsHidden()  
        return true  
    end  
    

Now that we have our modifier done. We want some way of testing it. I decided to go with simple console command. Add following to your game init function.
    
    
    -- this is in function Activate()  
     Convars:RegisterCommand( "mod_test_spells", Dynamic_Wrap(CModDotaTutorialsGameMode, 'PrintLastSpells'), "Print last spell for every hero", FCVAR_CHEAT )  
    

Now the actual console command's function:
    
    
    function CModDotaTutorialsGameMode:PrintLastSpells()  
      print( '** Last Spell **' )  
        local tList = HeroList:GetAllHeroes()  
        for k,v in pairs(tList) do  
            local s = v:GetLastSpell()  
            if s == nil then  
                print( v:GetName() .. ' has cast no spells yet.')  
            else  
                print( v:GetName() .. ' last cast ' .. v:GetLastSpell():GetAbilityName())  
            end  
        end  
      print( '****************' )  
    end  
    

Now you should be able to use console command `mod_test_spells` to print out the last spell every hero has used. Next topic: [Linken Sphere & Lotus Orb.](/abilities/lua-modifiers/2)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/1.md)

---

## Linken's Sphere & Lotus Orb

* [](/)
  * Abilities, items, modifiers
  * Lua Modifiers
  * Linken's Sphere & Lotus Orb



# Linken's Sphere & Lotus Orb

When you script your targeted lua abilities you may have had issue of the protection against such spells not working. Linken Sphere and Lotus Orb. To allow your cool new ability to be effected by these items you only need to add this line in your code:
    
    
    if hTarget:TriggerSpellAbsorb( self ) then return end  
    

`hTarget` in this example is assumed to be the target unit. The `self` is your ability. It is used by abilities like lotus orb to know what spell to send back. The `hTarget:TriggerSpellAbsorb( self )` returns true only if player has Linken Sphere or some custom item coded to have similar function. In case of Lotus Orb the same line triggers Lotus Orb but always returns false. Now to create your own Lotus/Linken like effects here are the two function declarations:
    
    
    function my_modifier:DeclareFunctions()  
        local funcs = {  
            MODIFIER_PROPERTY_REFLECT_SPELL, --Lotus Orb trigger.  
            MODIFIER_PROPERTY_ABSORB_SPELL --Linken's Sphere trigger.  
        }  
        return funcs  
    end  
      
    function my_modifier:GetReflectSpell(keys)  
      print("you cast your spell on me!")  
    end  
      
    function my_modifier:GetAbsorbSpell(keys)  
      if something then  
          print("counter spell!")  
           return 1 --conditions were met, lets return 1 to block the spell.  
        end  
        return false --do nothing and let the spell through.  
    end  
    

With Linken sphere the code is pretty much checking the cooldown of the origin ability and if not on cooldown, play effect, return 1.
    
    
    function my_modifier:GetAbsorbSpell(keys)  
        local hAbility = self:GetAbility()  
        if hAbility:IsCooldownReady() then  
        --your cool effect here.  
        hAbility:StartCooldown(hAbility:GetCooldown(hAbility:GetLevel()))  
        return 1  
        end  
        return false  
    end  
    

Simple right? The Lotus Orb is bit more complex and even my version is not fully tested for bugs but it has been working perfectly so far.
    
    
    function my_modifier:GetReflectSpell(keys)  
        if self.stored ~= nil then  
            self.stored:RemoveSelf() --we make sure to remove previous spell.  
        end  
        local hCaster = self:GetParent()  
        local hAbility = hCaster:AddAbility(kv.ability:GetAbilityName())  
        hAbility:SetStolen(true) --just to be safe with some interactions.  
        hAbility:SetHidden(true) --hide the ability.  
        hAbility:SetLevel(kv.ability:GetLevel()) --same level of ability as the origin.  
        hCaster:SetCursorCastTarget(kv.ability:GetCaster()) --lets send this spell back.  
        hAbility:OnSpellStart() --cast the spell.  
        self.stored = hAbility --store the spell reference for future use.  
    end  
    

The reason we remove the stored spell at next trigger is to make sure there is no 'null' reference. For example if a modifier created by the spell tries to access the origin spell, if we were to remove it right after the cast, the game would give error message. Some ideas how you could use all that you have learned here: -Create combination of lotus and linken sphere. (block and reflect) -Passive that reflects every third spell. -Passive that blocks spell and gives you the mana used on it. -Blink & disjoint projectiles when a spell is cast against you.

Here is small piece of code to get you started with the blink:
    
    
    function my_modifier:Blink(hTarget, vPoint, nMaxBlink, nClamp)  
        local vOrigin = hTarget:GetAbsOrigin() --Our units's location  
        ProjectileManager:ProjectileDodge(hTarget)  --We disjoint disjointable incoming projectiles.  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_start.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
        hTarget:EmitSound("DOTA_Item.BlinkDagger.Activate") --Emit sound for the blink  
        local vDiff = vPoint - vOrigin --Difference between the points  
        if vDiff:Length2D() > nMaxBlink then  --Check caster is over reaching.  
            vPoint = vOrigin + (vPoint - vOrigin):Normalized() * nClamp -- Recalculation of the target point.  
        end  
        hTarget:SetAbsOrigin(vPoint) --We move the caster instantly to the location  
        FindClearSpaceForUnit(hTarget, vPoint, false) --This makes sure our caster does not get stuck  
        ParticleManager:CreateParticle("particles/items_fx/blink_dagger_end.vpcf", PATTACH_ABSORIGIN, hTarget) --Create particle effect at our caster.  
    end  
    

Next Topic: [Transformations](/abilities/lua-modifiers/3)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/2.md)

---

## Transformations

* [](/)
  * Abilities, items, modifiers
  * Lua Modifiers
  * Transformations



# Transformations

For this tutorial I am cheating and not explaining how to make lua ability. If you want to see full example of the code [click here!](https://gitlab.com/DrTeaSpoon/Dota2Overflow/tree/master/game/dota_addons/dota2overflow/scripts/vscripts/lua_abilities/ultimates/metamorph)

Now we focus on the lua modifier. While we can do transformation and stuff in data driven counterpart, there is lack of calculations that make these things work better. First order of issue is attack range and type. We assume our custom ability has special value for `attack_range` and is designed to be a melee creature transformation. For this example we are using roshan so for attack range to match original we set it to `128`
    
    
    function transformation_mod:OnCreated( kv )  
        if IsServer() then  
            self.AttackBonus = (self:GetParent():GetAttackRange() - self:GetAbility():GetSpecialValueFor("attack_range")) * -1  
            --We get original attack range and substract away the wanted attack range, then negate the result.  
            --YAY Math!  
            self.OriginalAtkCap = self:GetParent():GetAttackCapability()  
            --Save original so we can set it back.  
            self:GetParent():SetAttackCapability(DOTA_UNIT_CAP_MELEE_ATTACK)  
        end  
    end  
    

Now we need to make sure when this modifier is lost, we change the attack type back to the original.
    
    
    function transformation_mod:OnDestroy()  
        if IsServer() then  
            self:GetParent():SetAttackCapability(self.OriginalAtkCap)  
        end  
    end  
    

What we want the transformation to effect should go here, these are some of the commons.
    
    
    function transformation_mod:DeclareFunctions()  
        local funcs = {  
            MODIFIER_PROPERTY_MODEL_CHANGE,  
            MODIFIER_PROPERTY_MODEL_SCALE,  
            MODIFIER_PROPERTY_ATTACK_RANGE_BONUS  
        }  
        return funcs  
    end  
    

Now we need to setup the functions for these wonderful functions. First one is for the model. Second is for the attack range. Last is for the scale.
    
    
    function transformation_mod:GetModifierModelChange() return "models/creeps/roshan/roshan.vmdl" end  
    function transformation_mod:GetModifierAttackRangeBonus() return self.AttackBonus end  
    function transformation_mod:GetModifierModelScale() return self:GetAbility():GetLevel()*0.5 end  
    

Last issues are using ability while immune and correctly duplicating modifier for illusions.
    
    
    function metamorphosis_mod:GetAttributes() return MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE end  
    function metamorphosis_mod:AllowIllusionDuplicate() return true end  
    

Thats pretty much it. You can add particle effects and/or animations. Though as a note there are some issues with animations on some heroes. For example phantom lancer's death animation makes the player model vanish so I suggest being careful with chosen animation.

Next Topic: [Enchanting Trees](/abilities/lua-modifiers/4)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/3.md)

---

## Enchanting Trees

* [](/)
  * Abilities, items, modifiers
  * Lua Modifiers
  * Enchanting Trees



# Enchanting Trees

Without further delay. Lets get to it! `npc_abilities_custom.txt` entry for our ability.
    
    
    "enchant_tree_lua"  
    {  
        // These are required for this to work  
        "BaseClass"             "ability_lua"  
        "ScriptFile"                    "lua_abilities/enchant_tree/ability.lua" //set your script file path in 'vscripts' folder  
        "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"  
        "AbilityUnitTargetTeam"         "DOTA_UNIT_TARGET_TEAM_CUSTOM"  
        "AbilityUnitTargetType"         "DOTA_UNIT_TARGET_TREE"  
        "AbilityDuration"               "10.0" //well, technically optional.  
        // Optional stuff  
        "AbilityTextureName"            "enchant_tree_lua"  
        "AbilityCastPoint"              "0.1"  
        "AbilityCooldown"               "5.0"  
        "AbilityManaCost"               "100"  
        "AbilityCastRange"              "400"  
    }  
    

This is your basic start for lua ability.
    
    
    if enchant_tree_lua == nil then  
        enchant_tree_lua = class({})  
    end  
    LinkLuaModifier( "enchant_tree_lua_mod", "lua_abilities/enchant_tree/modifier.lua", LUA_MODIFIER_MOTION_NONE )  
    

The magic happens here. `CreateModifierThinker` creates sort of invisible unit with modifier attached to it.
    
    
    function enchant_tree_lua:OnSpellStart()  
        CreateModifierThinker( self:GetCaster(), self, "enchant_tree_lua_mod", { duration = self:GetDuration() }, self:GetCursorPosition(), self:GetCaster():GetTeamNumber(), true )  
    end  
    

Now for the next piece of magic we need to setup our cool modifier. In this example the file path would be "vscripts/lua_abilities/enchant_tree/modifier.lua". There are two major parts for every 'tree enchantment'. First is making sure that we have tree nearby. Because of engine limitations the trees are difficult to interact with. For our solution we are simply requesting from gridnav every half a second if there is trees in very small area at our thinker unit's location. The last part is minor optimization that may become redundant but was not at the time of developing this. There was issue where the thinker unit would remain on the map for some time after the modifier was destroyed.
    
    
    if enchant_tree_lua_mod == nil then  
        enchant_tree_lua_mod = class({})  
    end  
    function enchant_tree_lua_mod:OnCreated( kv )  
        if IsServer() then  
            self:StartIntervalThink(0.5)  
        end  
    end  
    function enchant_tree_lua_mod:OnIntervalThink()  
        if IsServer() then  
            if not GridNav:IsNearbyTree(self:GetParent():GetAbsOrigin(), 10, false) then  
                self:Destroy()  
            end  
        end  
    end  
    function enchant_tree_lua_mod:OnDestroy()  
        if IsServer() then  
            UTIL_Remove( self:GetParent() )  
        end  
    end  
    

Now comes the fun part. What do we want to do with this modifier. I decided to go with soul collecting tree: if enemy hero is killed in radius(you need to add this to special values of your `npc_abilities_custom.txt`) the owner of the spell steal up to 2 of victim's primary stat.
    
    
    function enchant_tree_lua_mod:DeclareFunctions()  
        local funcs = {  
            MODIFIER_EVENT_ON_HERO_KILLED  
        }  
        return funcs  
    end  
      
    function enchant_tree_lua_mod:OnHeroKilled(kv)  
        if IsServer() then  
            if kv.unit and kv.unit:GetTeam() ~= self:GetCaster():GetTeam() then  
                if (self:GetParent():GetAbsOrigin() - kv.unit:GetAbsOrigin()):Length2D() <= self:GetAbility():GetSpecialValueFor("radius") then  
                    self:CollectSoul(kv.unit)  
                end  
            end  
        end  
    end  
      
    function enchant_tree_lua_mod:CollectSoul(hTarget)  
      local primary = hTarget:GetPrimaryAttribute()  
      local val = hTarget:GetPrimaryStatValue()  
      local n = math.max (0, math.min(2,val))  
      if primary == 0 then  
        self:GetCaster():ModifyStrength(n)  
        hTarget:ModifyStrength(n*-1)  
      elseif primary == 1 then  
        self:GetCaster():ModifyAgility(n)  
        hTarget:ModifyAgility(n*-1)  
      else  
        self:GetCaster():ModifyIntellect(n)  
        hTarget:ModifyIntellect(n*-1)  
      end  
    end  
    

For those fancy effects that ironwood tree has you might want to add these lines
    
    
    function enchant_tree_lua_mod:GetEffectName()  
     return "particles/items_fx/ironwood_tree.vpcf"  
    end  
      
    function enchant_tree_lua_mod:GetEffectAttachType()  
     return PATTACH_OVERHEAD_FOLLOW  
    end  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/4.md)

---

## Custom Barriers

* [](/)
  * Abilities, items, modifiers
  * Lua Modifiers
  * Custom Barriers



On this page

# Custom Barriers

## What are barriers?​

In this tutorial I'll be going over what barriers are, and how they are created and handled.

To start off, we should get ourselves a little more familiar with barriers in general. Barriers come in 3 flavours;

  * `Universal` : Blocks All damage (gold)
  * `Physical` : Blocks Physical damage (red)
  * `Spell` : Blocks Magic damage (blue)



`Physical` and `Spell` barriers only block their respective damage type, but `Universal` blocks both of those as well as pure damage. Conceptually, barriers are simple to understand. It's when we start getting into the execution that it gets more complex.

### Barrier Functions​

MODIFIER_PROPERTY| Function Name  
---|---  
MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT| GetModifierIncomingDamageConstant( event )  
MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT| GetModifierIncomingPhysicalDamageConstant( event )  
MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT| GetModifierIncomingSpellDamageConstant( event )  
The event in question is a 'ModifierAttackEvent'

attacker| CDOTA_BaseNPC  
---|---  
damage| float  
damage_type| DAMAGE_TYPES  
damage_category| DamageCategory_t  
damage_flags| DOTADamageFlag_t  
inflictor?| CDOTABaseAbility  
original_damage| float  
ranged_attack| bool  
target| CDOTA_BaseNPC  
no_attack_cooldown| bool  
record| int  
fail_type| attackfail  
report_max?| bool  
  
The ? on inflictor and report_max denote that they are optional and may not be defined, depending on how the damage was dealt (such as through an auto attack).

The main things you're going to want to care about from the event are:

  * damage
  * report_max



While each property is useful when you need them, most of the time a barrier just acts as a bonus health pool for the unit, so you only care about how much damage was done. `damage` is a float that contains the amount of post-reduction damage the parent took, and `report_max` is a bool for the client that determines whether we return the max or the current health of the barrier. 

Since a barrier is dynamic and requires properties on both the client and the server side of the code to be in sync, we need to make use of custom transmitter data. This guide assumes you are familiar with the custom transmitter concept, but if you're not, then you can refer to the guide [here](https://moddota.com/abilities/server-to-client/#transmitters) and continue afterwards. It's alright, I'll wait.

### Simple Example​

Below is the code for a basic all damage barrier that starts with 100 health and is removed when the health reaches 0.

Simple Universal Barrier
    
    
    modifier_custom_all_barrier = class({})  
      
    function modifier_custom_all_barrier:OnCreated()    
        if not IsServer() then return end  
          
        -- Set up our properties for the barrier's health  
        self.max_barrier_health = 100  
        self.current_barrier_health = self.max_barrier_health  
      
        -- Tell the modifier we want to transmit the data  
        self:SetHasCustomTransmitterData(true)  
    end  
      
    function modifier_custom_all_barrier:OnRefresh()  
        self:OnCreated()  
      
        -- Tell the client that we need to get the properties again  
        if IsServer() then self:SendBuffRefreshToClients() end  
    end  
      
    -- Send our properties to client  
    function modifier_custom_all_barrier:AddCustomTransmitterData()  
        return {  
            max_barrier_health = self.max_barrier_health,  
            current_barrier_health = self.current_barrier_health  
        }  
    end  
      
    -- Get the properties from the server   
    function modifier_custom_all_barrier:HandleCustomTransmitterData(data)  
        self.max_barrier_health = data.max_barrier_health  
        self.current_barrier_health = data.current_barrier_health  
    end  
      
    -- Declare which barrier type it is  
    function modifier_custom_all_barrier:DeclareFunctions()  
        return {  
            MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT  
        }  
    end  
      
    function modifier_custom_all_barrier:GetModifierIncomingDamageConstant( event )  
      
        -- Return the max health on the client if it's a max report, otherwise return the current health  
        if IsClient() then  
            if event.report_max then  
                return self.max_barrier_health  
            else  
                return self.current_barrier_health  
            end  
        end  
      
        -- Reduce the barrier's health by the damage  
        self.current_barrier_health = self.current_barrier_health - event.damage  
      
        -- Tell the client that we need to update the health property  
        self:SendBuffRefreshToClients()  
      
        -- Check if the damage exceeded the barrier's health  
        if self.current_barrier_health <= 0 then  
            self:Destroy()  
      
            -- If it did, return the amount of damage we blocked as a negative to reduce it  
            return -(event.damage + self.current_barrier_health)  
        else  
      
            -- Otherwise, return the full value of the damage as a negative to cancel it out  
            return -event.damage  
        end  
    end  
    

It certainly looks like a lot, but let's go through and break it down into digestible chunks and see what is happening.

### Going through the example​

Outside of the basic functions, we have some new ones popping up already. Some noteworthy additions are `SetHasCustomTransmitterData()` and `SendBuffRefreshToClients()`.

Basic declarations
    
    
    modifier_custom_all_barrier = class({})  
      
    function modifier_custom_all_barrier:OnCreated()    
        if not IsServer() then return end  
          
        -- Set up our properties for the barrier's health  
        self.max_barrier_health = 100  
        self.current_barrier_health = self.max_barrier_health  
      
        -- Tell the modifier we want to transmit the data  
        self:SetHasCustomTransmitterData(true)  
    end  
      
    function modifier_custom_all_barrier:OnRefresh()  
        self:OnCreated()  
      
        -- Tell the client that we need to get the properties again  
        if IsServer() then self:SendBuffRefreshToClients() end  
    end  
    

These are used to keep our client's current health property up to date with each time it changes on the server, so we need to make sure to call `SendBuffRefreshToClients()` when the barrier's health changes. 

But when does it change?

Taking barrier damage
    
    
    function modifier_custom_all_barrier:GetModifierIncomingDamageConstant( event )  
      
        -- Return the max health on the client if it's a max report, otherwise return the current health  
        if IsClient() then  
            if event.report_max then  
                return self.max_barrier_health  
            else  
                return self.current_barrier_health  
            end  
        end  
      
        -- Reduce the barrier's health by the damage  
        self.current_barrier_health = self.current_barrier_health - event.damage  
      
        -- Tell the client that we need to update the health property  
        self:SendBuffRefreshToClients()  
      
        -- Check if the damage exceeded the barrier's health  
        if self.current_barrier_health <= 0 then  
            self:Destroy()  
      
            -- If it did, return the amount of damage we blocked as a negative to reduce it  
            return -(event.damage + self.current_barrier_health)  
        else  
      
            -- Otherwise, return the full value of the damage as a negative to cancel it out  
            return -event.damage  
        end  
    end  
    

The barrier's health is updated when `GetModifierIncomingDamageConstant()` is called. The client only cares about what the properties for max health and current health are, so it returns immediately, leaving the rest of the code for the server to deal with the logic of the barrier losing health. 

The way that a barrier works is that it's a flat damage reduction on the incoming damage. So after you reduce the health of the barrier, you need to return the amount of damage that you blocked so that Dota knows how much to reduce the damage by. The client has a positive number returned to it, while the server has a negative number.

note

The client calls `GetModifierIncomingDamageConstant()` twice per frame, once to get the max health of the barrier (report_max = true), and another time to get the current health of the barrier (report_max = false). The server only calls `GetModifierIncomingDamageConstant()` when the parent takes damage.

And there we have it. We've gone through and seen how the barrier is set up and how the health is updated on both the client and the server so that it stays in sync.

The rest of this page will be about a library I've been working on to both add more features to and streamline the process of making barriers in general.

## Custom Barrier Library​

### Setting up the library​

[This library](https://pastebin.com/ksjUgy3A) is meant to be an extension of the normal modifier class and adds some useful methods to a modifier, and will turn it into a barrier for you. It can be put into the vscripts folder, but must be required on **both** the server and the client, so put it into the `addon_init.lua` file. If you don't have one, simply create it and put it in the vscripts folder where your `addon_game_mode.lua` file is.

### Creating a custom barrier​
    
    
    CustomBarriers:TurnModifierIntoBarrier( CDOTA_Buff )  
    

This function does most of the heavy lifting, it will add all the necessary functions to your modifier and turn it into a barrier. This needs to be called **_after_** all your modifier functions have been declared. The modifier also needs to know what type of barrier it is, and how much max health it has.

Setting type and max health
    
    
    -- You can either use the get functions to declare them  
    function modifier:GetBarrierType()   
        return DAMAGE_TYPE   
    end  
      
    function modifier:GetBarrierMaxHealth()  
        return int  
    end  
      
    -- Or you can set them in the modifier's OnCreated()  
    function modifier:OnCreated()  
        self:SetBarrierType( DAMAGE_TYPE )  
        self:SetBarrierMaxHealth( int )  
    end  
    

This is already enough to have a functional barrier of the type you want. 

### Library Functions​

These functions are added to the modifier when you call `CustomBarriers:TurnModifierIntoBarrier( CDOTA_Buff )`, they're not added into the `CDOTA_Buff` base class. `IsBarrier()` is the only one that is added to the `CDOTA_Buff` base class, so calling the others on a modifier you haven't turned into a barrier will cause an error.

Function Name| Return| Description  
---|---|---  
IsBarrier()| bool| Returns true if the barrier is visible.  
IsBarrierFor( [DAMAGE_TYPES](https://moddota.com/api/#!/vscripts/DAMAGE_TYPES) )| bool| Returns true if the damage type will be blocked by the barrier.  
SetBarrierType( [DAMAGE_TYPES](https://moddota.com/api/#!/vscripts/DAMAGE_TYPES) )|  _nil_|  Sets the barrier to block the specified type of damage.  
GetBarrierType()| [DAMAGE_TYPES](https://moddota.com/api/#!/vscripts/DAMAGE_TYPES)| Returns what type of damage the barrier will block.  
SetBarrierMaxHealth( int )|  _nil_|  Sets the barrier's max health.  
GetBarrierMaxHealth()| int| Gets the barrier's max health.  
SetBarrierHealth( int )|  _nil_|  Sets the barrier's current health.  
GetBarrierHealth()| int| Gets the barrier's current health.  
SetBarrierInitialHealth( int )|  _nil_|  Sets the barrier's initial health.  
GetBarrierInitialHealth()| int| Gets the barrier's initial health.  
IsPersistent()| bool| Whether the modifier will be destroyed when the barrier's health reaches 0. Defaults to `false`.  
ShowOnZeroHP()| bool| Whether the barrier bar is visible at 0 hp. Defaults to `false`.  
OnBarrierDamagedFilter( event )| bool| A filter for damage to the barrier. Return false if you want the unit to be damaged instead. Set the `event.damage` to 0 if you want no damage to be done at all. (Only called on server)  
  
  * `GetBarrierType()` and `SetBarrierType()` are designed to be used with the 3 main damage types; `Physical`, `Magical`, and `Pure`. `Pure` refers to the Universal barrier in this case.
  * `ShowOnZeroHP()` will only work if `IsPersistent()` is `true`.



### Example of a library barrier​

Let's say we want to have a magic damage barrier that starts at 0, is always around, increases based on the magic damage we deal, and has a cap of based on our max hp. Sounds very complex right? Let's see how we do.
    
    
    modifier_magic_barrier = class({})  
      
    -- We want to hide it when the hp is 0  
    function modifier_magic_barrier:IsHidden()   
        return self:GetBarrierHealth() <= 0   
    end  
      
    function modifier_magic_barrier:IsPermanent()   
        return true   
    end  
      
    -- Make sure the modifier isn't destroyed when it's at 0 hp  
    function modifier_magic_barrier:IsPersistent()   
        return true  
    end  
      
    -- We want a magic barrier  
    function modifier_magic_barrier:GetBarrierType()   
        return DAMAGE_TYPE_MAGICAL   
    end  
      
    -- Declare the max barrier health as % of our max hp  
    function modifier_magic_barrier:GetBarrierMaxHealth()   
        return math.ceil(self:GetParent():GetMaxHealth() * self.barrier_cap)   
    end  
      
    -- Start at 0 barrier hp  
    function modifier_magic_barrier:GetBarrierInitialHealth()   
        return 0   
    end  
      
    -- Here we want to just declare some properties to make our life easier  
    function modifier_magic_barrier:OnCreated()  
        self.barrier_cap = self:GetAbility():GetSpecialValueFor("barrier_cap")/100  
      
        if IsServer() then   
            self.barrier_conversion = self:GetAbility():GetSpecialValueFor("barrier_conversion")/100  
            self:StartIntervalThink(0.2)  
        end  
    end  
      
    -- We need to keep track of our max hp somehow, if we dont then it will only update when we take damage  
    function modifier_magic_barrier:OnIntervalThink()  
        self:SetBarrierMaxHealth( math.ceil(self:GetParent():GetMaxHealth() * self.barrier_cap) )  
    end  
      
    -- We want to know when something takes damage to check if it's from us  
    function modifier_magic_barrier:DeclareFunctions()   
        return {  
            MODIFIER_EVENT_ON_TAKEDAMAGE  
        }   
    end  
      
    -- Here we check when we do magic damage  
    function modifier_magic_barrier:OnTakeDamage( event )  
        if IsClient() then return end -- don't need the client here  
      
        if keys.unit == self:GetParent() or keys.attacker ~= self:GetParent() then   
            return -- we only care about us doing damage  
        end  
      
        if keys.damage_type ~= DAMAGE_TYPE_MAGICAL then return end -- we only want magic damage  
      
        -- now we can turn a portion of the magic damage we've done into our barrier health!  
        local amount = keys.damage * self.barrier_conversion  
      
        -- Set the health directly, but don't exceed the max health  
        self:SetBarrierHealth( math.min( self:GetBarrierHealth() + amount, self:GetBarrierMaxHealth() ) )  
    end  
      
    -- Now that we've created our modifier, we can tell the library to turn it into a barrier!  
    CustomBarriers:TurnModifierIntoBarrier( modifier_magic_barrier )  
    

### Compact Example​

Let's take the [Simple Example](https://moddota.com/abilities/lua-modifiers/5#simple-example) from earlier and remake it using the Library.

Simple Universal Barrier (Lib Edition)
    
    
    modifier_custom_all_barrier = class({})  
    function modifier_custom_all_barrier:GetBarrierType() return DAMAGE_TYPE_PURE end  
    function modifier_custom_all_barrier:GetBarrierMaxHealth() return 100 end   
    CustomBarriers:TurnModifierIntoBarrier( modifier_custom_all_barrier )  
    

This still functions the exact same as the previous version, all of the barrier specific code is just being handled by `CustomBarriers` instead.

info

[Link to the library](https://pastebin.com/ksjUgy3A)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/5.md)

---

# Datadriven Abilities

## DataDriven Ability Events & Modifiers

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * DataDriven Ability Events & Modifiers



On this page

# DataDriven Ability Events & Modifiers

A guide that tries to cover every Ability & Modifier Event of the _ability_datadriven_ system, with examples.

[![img](https://i.imgur.com/T7W828Q.png)](http://moddota.com/forums/discussion/13/datadriven-ability-events-modifiers "Start")

  * Ability Events
    * Spell Start
    * Toggleable Abilities
    * Channeled Abilities
    * Death and Spawn
    * Projectiles
    * Item Equip
    * Others
  * Modifier Events
    * Create and Destroy
    * Repeating Actions
    * Attacks
    * Damage
    * Killing and Dying
    * Orbs
    * Others

  
This is an Intermediate guide that expects some knowledge of the most common first-level keyvalues. If unsure about the meaning of any of them, check the [DataDriven Ability Breakdown](http://moddota.com/forums/discussion/14/datadriven-ability-breakdown).

### Introduction​

In the Data Driven system, an Event is something that triggers when a particular in-game event occurs, for example, finishing the cast of an ability.

They are of the form On[ _EventTriggerKeyword_ ], like `OnSpellStart` `OnCreated` etc.

There's a complete (for the most part) [list of Events in the Workshop Tools Wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven#Ability_Events_and_Actions) but what I'm gonna do is explain each one of them with examples of how and when to use them.

In the process I'm also going to make use of different [Actions](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven#Actions), inside the Events, some are self explanatory and some require some in-depth explanation on how to use them.

There are 2 types, **Ability Events** and **Modifier Events**.

Ability Events go on the "first level" of the ability. Modifier Events need to be inside a modifier block.

Basic Skeleton looks like this:
    
    
    "ability_custom"  
    {  
        // AbilityBehavior and General values  
        // AbilityValues block  
        // precache block  
      
        // Ability Events  
        "OnSpellStart"  
        { [ACTIONS] }  
      
        "Modifiers"  
        {  
            "modifier_custom"  
              {  
                // Modifier Events  
                "OnCreated"  
                { [ACTIONS] }  
            }  
        }  
    }  
    

When the Event triggers, all the Actions defined in its block will be executed.

To test if your Event is actually happening when you expect, you can add the following Action block inside it:
    
    
    "RunScript"  
    {  
        "ScriptFile" "utilities.lua"  
        "Function" "Test"  
    }  
    

`RunScript` is one of the most common and potent Actions you'll use for creating complex abilities. For it to work, you need to have a Script File, in this case _utilities.lua_ , inside the vscripts folder.

The Function called can have this:
    
    
    function Test( event )  
        print("It works!")  
    end  
    

This will display to the Console the values passed (usually a huge table) if your event trigger is being detected correctly.

I'll try to stay away from RunScript as the Action to not have to make this a Dota Lua API wall of text, which is to be addressed in another, more advanced tutorial.

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/datadriven-ability-events-modifiers.md)

---

## All About the Target

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * All about the Target



On this page

# All about the Target

I wanted to review a [very old thread](http://moddota.com/cmsinternal/index.php/tet/pre-empting-problems-in-dota) which was posted almost one year ago but still isn't completely well documented anywhere:

> "Target" is one bitch of a key.

And yet, it's arguably the most important KV to understand, as its found in almost every datadriven Action.

Having a wrong `"Target"` block is the number one reason of having to relaunch the game, testing with many combinations until you finally get the right context.

Quoting the [wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven#Action_Target_Values) on this:

> Note: These names mean different things in different events. It may require some experimentation to discover exactly what in each case.

This thread intends to compile every Target-related decision.

To test everything and get results, I used some simple scrips to test which parameters are seen in each event context. The KV and Lua Scripts are found in the second post, which also contains all the debug data.

After running many tests with different ability behaviors, here's what I got:

## ABILITY EVENT CONTEXTS​

### Behavior: DOTA_ABILITY_BEHAVIOR_NO_TARGET​

Event| Target  
---|---  
OnSpellStart| CASTER, UNIT, ATTACKER  
OnAbilityPhaseStart| CASTER, UNIT, ATTACKER  
  
### DOTA_ABILITY_BEHAVIOR_UNIT_TARGET​

This behavior adds TARGET as a possible value for the Target key:

Event| Target  
---|---  
OnSpellStart| CASTER, TARGET, UNIT, ATTACKER  
OnAbilityPhaseStart| CASTER, TARGET, UNIT, ATTACKER  
  
### AbilityChannelTime > 0​

`DOTA_ABILITY_BEHAVIOR_CHANNELLED` only purpose is to change the ability Tooltip to _"Channeled"_. In fact, the `BEHAVIOR_CHANNELED` isn't even needed, `"AbilityChannelTime"` is all that matters for the actual ability behavior.

Event| Target  
---|---  
OnChannelFinish| CASTER, TARGET, UNIT, ATTACKER  
OnChannelInterrupted| CASTER, TARGET, UNIT, ATTACKER  
OnChannelSucceeded| CASTER, TARGET, UNIT, ATTACKER  
  
### With Linear and Tracking Projectile Actions​

Event| Target  
---|---  
OnProjectileFinish| CASTER, TARGET, PROJECTILE  
OnProjectileHitUnit| CASTER, TARGET, PROJECTILE  
  
### DOTA_ABILITY_BEHAVIOR_TOGGLE​

Event| Target  
---|---  
OnToggleOff| CASTER  
OnToggleOn| CASTER  
  
### Item pickup and drop​

Event| Target  
---|---  
OnEquip| CASTER  
OnUnequip| CASTER  
  
### Any Behavior​

Event| Target  
---|---  
OnOwnerDied| CASTER  
OnOwnerSpawned| CASTER  
OnUpgrade| CASTER  
  
## MODIFER EVENT CONTEXTS​

### Caster-Target​

Target always refers to the owner of the modifier.

Event| Target  
---|---  
OnCreated| CASTER, TARGET  
OnDestroy| CASTER, TARGET  
OnIntervalThink| CASTER, TARGET  
OnProjectileDodge| CASTER, TARGET  
  
### Damage​

In these events we can send an extra parameter, referenced as %attack_damage

Note that this is not a value taken from an AbilityValues, instead it is generated by the system to be used in very particular events.

Event| Target| %attack_damage value  
---|---|---  
OnTakeDamage| CASTER, UNIT, ATTACKER| post reduction  
OnDealDamage| CASTER, UNIT, ATTACKER| post reduction  
  
### Attacks​

In some of the attack events we can also use the %attack_damage

Event| Target| %attack_damage value  
---|---|---  
OnAttack| CASTER, TARGET, ATTACKER| 0  
OnAttackStart| CASTER, TARGET, ATTACKER| 0  
OnAttackAllied| CASTER, TARGET, ATTACKER| 0  
OnAttacked| CASTER, TARGET, ATTACKER| post reduction  
OnAttackLanded| CASTER, TARGET, ATTACKER|  **before** reduction, the real attack value  
OnAttackFailed| CASTER, TARGET, ATTACKER|  **before** reduction, the real attack value  
  
### Killing​

Event| Target  
---|---  
OnDeath| CASTER, UNIT, ATTACKER  
OnKill| CASTER, UNIT, ATTACKER  
OnHeroKilled| CASTER, TARGET, ATTACKER  
  
### Caster-Unit​

Event| Target| Extra  
---|---|---  
OnAbilityEndChannel| CASTER, UNIT| TARGET if the ability isn't NO_TARGET  
OnAbilityExecuted| CASTER, UNIT| TARGET if the ability isn't NO_TARGET  
OnOrder| CASTER, UNIT| TARGET if the Order is an ability with target  
OnRespawn| CASTER, UNIT| needs "Attributes" "PERMANENT" on its modifier  
OnManaGained| CASTER, UNIT|   
OnSpentMana| CASTER, UNIT|   
OnStateChanged| CASTER, UNIT|   
OnTeleporting| CASTER, UNIT|   
OnTeleported| CASTER, UNIT|   
OnUnitMoved| CASTER, UNIT|   
OnHealReceived| CASTER, UNIT|   
OnHealthGained| CASTER, UNIT|   
  
### Never Triggered​

OnAbilityStart - Broken?

  


Please report if you find any inconsistencies.

  


On the next post you'll find the random rambling analyzed to get the results.

Then we'll move to Multiple Targets, acting over different entities, Flags, etc.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/all-about-the-target.md)

---

## Channeling Animations

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Channeling Animations



On this page

# Channeling Animations

### Short Version:​

ApplyModifier with short duration in a OnThinkInterval, channeling modifier has an OverrideAnimation with a ACT_ from the [Action List](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Actions_List) or with the method explained later.

 **Short Version Example:**
    
    
     "Modifiers"  
    {  
        "modifier_channeling"  
        {  
            "ThinkInterval" "1.0"  
            "OnIntervalThink"  
            {  
                // Looping Animation  
                "ApplyModifier"  
                {  
                    "ModifierName"  "channelling_animation"  
                    "Target"        "CASTER"  
                }  
            }  
        }  
      
        "channelling_animation"  
        {  
            "IsHidden" "1"  
            "Duration" "0.9"  
            "OverrideAnimation" "ACT_DOTA_CAST_ABILITY_2"  
        }  
    }  
    

### Full Version​

!

Instead of trying to find the desired animation in the Action List on the wiki, you can view the animations on the model you are trying to use and their respective names.

For this, go to the Asset Browser, type your hero name + _vmdl_ , in this case I'm going to use drow.vmdl. Double click it, you will enter the Model Editor. In here, you want to go to the top tabs and click Tools -> View Sequences.

![img](https://puu.sh/eGRRP/c9e6fcc98f.png)

After this, you can select any animation and it will animate the white blocks at the right. To get the ACT_ name, you can click Properties then open the Activities box, or just tick down the Activity checkbox in the Sequences window, which will show how all the animations are refered ingame.

![img](https://puu.sh/eGRRP/c9e6fcc98f.png)

 **Note** : Ignore the +string.

 **Full Example** :
    
    
    "dark_ranger_life_drain"  
    {  
        "BaseClass" "ability_datadriven"  
        "AbilityTextureName" "dark_ranger_life_drain"  
        "MaxLevel" "3"  
      
        "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING"  
        "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
        "AbilityUnitDamageType" "DAMAGE_TYPE_MAGICAL"  
        "AbilityCastAnimation" "ACT_DOTA_CAST_ABILITY_2"  
      
        "AbilityCastRange" "700"  
        "AbilityCastPoint" "0.3"  
        "AbilityCooldown" "8.0"  
      
        "AbilityManaCost" "50"  
        "AbilityChannelTime" "8"  
      
        "precache"  
        {  
            "particle" "particles/units/heroes/hero_pugna/pugna_life_drain.vpcf"  
            "soundfile" "soundevents/game_sounds_heroes/game_sounds_pugna.vsndevts"  
        }  
      
        "AbilityValues"  
        {  
          "hp_drain_per_second" "25 40 55"  
        }  
      
        "OnSpellStart"  
        {  
            "ApplyModifier"  
            {  
                "ModifierName" "modifier_life_drain"  
                "Target" "TARGET"  
            }  
      
            "FireSound"  
            {  
                "EffectName" "Hero_Pugna.LifeDrain.Target"  
                "Target" "CASTER"  
            }  
        }  
      
        "OnChannelFinish"  
        {  
            "RemoveModifier"  
            {  
                "ModifierName" "modifier_life_drain"  
                "Target" "TARGET"  
            }  
        }  
      
        "Modifiers"  
        {  
            "modifier_life_drain"  
            {  
                "IsDebuff" "1"  
                "OnCreated"  
                {  
                    "AttachEffect"  
                    {  
                        "Target" "TARGET"  
                        "EffectName" "particles/units/heroes/hero_pugna/pugna_life_drain.vpcf"  
                        "EffectAttachType" "start_at_customorigin"  
      
                        "ControlPointEntities"  
                        {  
                            "CASTER" "attach_hitloc"  
                            "TARGET" "attach_hitloc"  
                        }  
      
                    }  
                }  
      
                "ThinkInterval" "1.0"  
                "OnIntervalThink"  
                {  
                    // Health Transfer  
                    "Damage"  
                    {  
                        "Type" "DAMAGE_TYPE_MAGICAL"  
                        "Target" "TARGET"  
                        "Damage" "%hp_drain_per_second"  
                    }  
      
                    "Heal"  
                    {  
                        "Target" "CASTER"  
                        "HealAmount" "%hp_drain_per_second"  
                    }  
      
                    // Looping Animation  
                    "ApplyModifier"  
                    {  
                        "ModifierName" "channelling_animation"  
                        "Target" "CASTER"  
                    }  
                }  
            }  
      
            "channelling_animation"  
            {  
                "IsHidden" "0"  
                "Duration" "0.9"  
                "OverrideAnimation" "ACT_DOTA_CAST_ABILITY_2"  
            }  
        }  
    }  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/channeling-animations.md)

---

## Invisibility Ability Example

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Invisibility Ability Example



# Invisibility Ability Example

This is a datadriven + lua ability that will apply the invis state and texture, with some extra particles and effects.

(Some effects might not be from this example, as this video shows the Assassin hero, find it in the repository later on)

 **KV:**
    
    
     "assassin_walk_the_shadows"  
    {  
      // General  
      //--------------------------------------------------------------------------------------------------  
      "BaseClass" "ability_datadriven"  
      "AbilityTextureName" "assassin_skill1"  
      "MaxLevel" "7"  
      "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"  
      
      // Stats  
      //--------------------------------------------------------------------------------------------------  
      "AbilityCastPoint" "0"  
      "AbilityCooldown" "5"  
      "AbilityManaCost" "6 8 11 14 18 22 26 30"  
      
      // Damage.  
      //-----------------------------------------------------------------------------------------------  
      "AbilityDamage" "25 150 300 600 1100 2000 3300 5000"  
      "AbilityUnitDamageType" "DAMAGE_TYPE_PHYSICAL"  
      
      // Special  
      "AbilityValues"  
      {  
        "duration" "25"  
        "bonus_movespeed" "35"  
        "bonus_damage" "150 300 525 840 1260 1900 3000 4500"  
        "stun_duration" "3.25"  
      }  
      
      "precache"  
      {  
        "particle" "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"  
        "soundfile" "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts"  
      }  
      
      //----------------------------------------------------------------------------------------------  
      "OnSpellStart"  
      {  
        "FireSound"  
        {  
          "EffectName" "Hero_TemplarAssassin.Meld"  
          "Target" "CASTER"  
        }  
        "RunScript"  
        {  
          "ScriptFile" "abilities/assassin.lua"  
          "Function" "walk_the_shadows_cast"  
        }  
      }  
      
      "Modifiers"  
      {  
        "assassin_walk_the_shadows_buff"  
        {  
          "IsBuff" "1"  
          "Duration" "%duration"  
          "EffectName" "particles/units/heroes/hero_templar_assassin/templar_assassin_meld.vpcf"  
          "EffectAttachType" "follow_origin"  
          "OnCreated"  
          {  
            "FireEffect"  
            {  
              "EffectName" "particles/units/heroes/hero_bounty_hunter/bounty_hunter_windwalk_smoke.vpcf"  
              "EffectAttachType" "follow_origin"  
              "Target" "CASTER"  
            }  
          }  
          "Properties"  
          {  
            "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%bonus_movespeed"  
          }  
          "States"  
          {  
            "MODIFIER_STATE_INVISIBLE" "MODIFIER_STATE_VALUE_ENABLED"  
            "MODIFIER_STATE_NO_UNIT_COLLISION" "MODIFIER_STATE_VALUE_ENABLED"  
          }  
          "OnAttackLanded"  
          {  
            "RunScript"  
            {  
              "ScriptFile" "abilities/assassin.lua"  
              "Function" "walk_the_shadows_attack"  
            }  
            "Stun"  
            {  
              "Target" "TARGET"  
              "Duration" "%stun_duration"  
            }  
          }  
          "OnAbilityExecuted"  
          {  
            "RunScript"  
            {  
              "ScriptFile" "abilities/assassin.lua"  
              "Function" "walk_the_shadows_interrupt"  
            }  
          }  
        }  
      }  
    }  
    

 **Lua Scripts:**
    
    
     function walk_the_shadows_cast( event )  
      event.ability:ApplyDataDrivenModifier(event.caster, event.caster, "assassin_walk_the_shadows_buff", nil)  
      event.caster:AddNewModifier(event.caster, event.ability, "modifier_invisible", {duration = 25})  
      
    end  
      
    function walk_the_shadows_interrupt( event )  
     event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")  
     event.caster:RemoveModifierByName("modifier_invisible")  
    end  
      
    function walk_the_shadows_attack( event )  
      
     event.caster:RemoveModifierByName("assassin_walk_the_shadows_buff")  
      
     ApplyDamage({ victim = event.target, attacker = event.caster, damage = event.ability:GetAbilityDamage(), damage_type = event.ability:GetAbilityDamageType(), ability = event.ability   })  
      
    end  
    

The line that takes care of applying the "transparency" is AddNewModifier with modifier_invisible.

Credits to my buddy [igo](https://github.com/igo95862) that made this ability for [The Black Road project](https://github.com/Aleteh/TBR3) which is still WIP but there are some interesting stuff we made already.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/invisibility-ability-example.md)

---

## Illusion Ability Example

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Illusion Ability Example



# Illusion Ability Example

This is a lua script to properly create an illusion.

Note: Datadriven Modifiers with "AllowIllusionDuplicate" aren't automatically created with this method and need to be added manually in lua. In this same script we also attempt to add the datadriven version of `modifier_metamorphosis` which can also be found [here in the SpellLibrary](https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/npc/abilities/terrorblade_metamorphosis_datadriven.txt)
    
    
    -- Creates an Illusion, making use of the built in modifier_illusion  
    function ConjureImage( event )  
     print("Conjure Image")  
     local caster = event.caster  
     local player = caster:GetPlayerID()  
     local ability = event.ability  
     local unit_name = caster:GetUnitName()  
     local origin = caster:GetAbsOrigin() + RandomVector(100)  
     local duration = ability:GetLevelSpecialValueFor( "illusion_duration", ability:GetLevel() - 1 )  
     local outgoingDamage = ability:GetLevelSpecialValueFor( "illusion_outgoing_damage", ability:GetLevel()-1)  
     local incomingDamage = ability:GetLevelSpecialValueFor( "illusion_incoming_damage", ability:GetLevel()-1)  
      
     -- handle_UnitOwner needs to be nil, else it will crash the game.  
     local illusion = CreateUnitByName(unit_name, origin, true, caster, nil, caster:GetTeamNumber())  
     illusion:SetPlayerID(caster:GetPlayerID())  
     illusion:SetControllableByPlayer(player, true)  
       
     -- Level Up the unit to the casters level  
     local casterLevel = caster:GetLevel()  
     for i=1,casterLevel-1 do  
      illusion:HeroLevelUp(false)  
     end  
      
     -- Set the skill points to 0 and learn the skills of the caster  
     illusion:SetAbilityPoints(0)  
     for abilitySlot=0,15 do  
      local ability = caster:GetAbilityByIndex(abilitySlot)  
      if ability ~= nil then   
       local abilityLevel = ability:GetLevel()  
       local abilityName = ability:GetAbilityName()  
       local illusionAbility = illusion:FindAbilityByName(abilityName)  
       illusionAbility:SetLevel(abilityLevel)  
      end  
     end  
      
     -- Recreate the items of the caster  
     for itemSlot=0,5 do  
      local item = caster:GetItemInSlot(itemSlot)  
      if item ~= nil then  
       local itemName = item:GetName()  
       local newItem = CreateItem(itemName, illusion, illusion)  
       illusion:AddItem(newItem)  
      end  
     end  
      
     -- Add our datadriven Metamorphosis modifier if appropiate  
     -- You can add other buffs that want to be passed to illusions this way  
     if caster:HasModifier("modifier_metamorphosis") then  
      local meta_ability = caster:FindAbilityByName("terrorblade_metamorphosis_datadriven")  
      meta_ability:ApplyDataDrivenModifier(illusion, illusion, "modifier_metamorphosis", nil)  
     end  
      
     -- Set the unit as an illusion  
     -- modifier_illusion controls many illusion properties like +Green damage not adding to the unit damage, not being able to cast spells and the team-only blue particle   
     illusion:AddNewModifier(caster, ability, "modifier_illusion", { duration = duration, outgoing_damage = outgoingDamage, incoming_damage = incomingDamage })  
       
     -- Without MakeIllusion the unit counts as a hero, e.g. if it dies to neutrals it says killed by neutrals, it respawns, etc.  
     illusion:MakeIllusion()  
      
    end  
    

The entire ability (with its datadriven code) can be found at the SpellLibrary in github

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/illusion-ability-example.md)

---

## Rotate Ability Example

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Rotate Ability Example



# Rotate Ability Example

 **Block**
    
    
     "Rotate"  
    {  
        "Target"       "TARGET"  
        "PitchYawRoll"  "0 0 0" //x y z values  
    }  
    

 **Example:** Rotate the caster every interval
    
    
    "OnSpellStart"  
    {  
        "ApplyModifier"  
        {  
            "ModifierName"  "modifier_rotating"  
            "Target"       "CASTER"  
        }  
    }  
      
    "Modifiers"  
    {   
        "modifier_rotating"  
        {  
            "ThinkInterval" "%interval"   
            "OnIntervalThink"  
            {  
                "Rotate"  
                {  
                    "Target"       "TARGET"  
                    "PitchYawRoll"  "%x %y %z"  
                }  
            }  
        }  
    }  
    

  


 **Pitch** Rotation, 15 every frame (0.03 interval)

  


 **Yaw** Rotation, 15 every frame

  


 **Roll** Rotation, 15 every frame

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/rotate-ability-example.md)

---

## Point Channeling AoE Ability Example

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Point Channeling AoE Ability Example



On this page

# Point Channeling AoE Ability Example

Here I'll explain a method to do this type of abilities effectively, based on this Earthquake Example:

We will review each important section of the code with comments on it, including how to get the particles to show.

### General Definition:​
    
    
    "far_seer_earthquake"  
    {  
        "BaseClass"          "ability_datadriven"  
        "AbilityTextureName" "far_seer_earthquake"  
        "MaxLevel"           "1"  
        "AbilityType"        "DOTA_ABILITY_TYPE_ULTIMATE"  
      
        "AbilityBehavior"   "DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE"  
        "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_BUILDING"  
        "AbilityUnitDamageType" "DAMAGE_TYPE_MAGICAL"  
        "AbilityCastAnimation"  "ACT_DOTA_SPAWN"  
      
        "AbilityCastRange"   "1000"  
        "AbilityCastPoint"   "0.5"  
        "AbilityCooldown"    "90.0"  
      
        "AbilityManaCost"    "150"  
        "AbilityChannelTime" "25.0"  
      
        "AOERadius"          "%radius"  
      
    //...  
    

Target Team/Type and DamageType are just there to show the tooltips.

`"AbilityChannelTime"` is a must have that will determine how much time the spell can be maintained.

Note the `"AOERadius"` which accepts a `"%radius"` from AbilityValues in its value. "AOERadius" needs `"DOTA_ABILITY_BEHAVIOR_AOE"` to display the AoE Circle.

* * *

### Ability Special block​
    
    
    "AbilityValues"  
    {  
      "duration" "25.0"  
      "building_damage_per_sec" "50"  
      "radius" "250"  
      "movement_speed_slow_pct" "-75"  
      "wave_interval" "1.0"  
    }  
    

Nothing interesting except remarking that `"%duration"` **cannot** be used as a value for `"AbilityChannelTime"` (doing so makes it loop forever), so the ability will just refer to the duration and when changing the value, also change the channel time.

* * *

### Precache block​
    
    
    "precache"  
    {  
      "particle"    "particles/units/heroes/hero_leshrac/leshrac_split_earth.vpcf"  
      "particle"    "particles/units/heroes/hero_warlock/warlock_rain_of_chaos_explosion.vpcf"  
      "particle"    "particles/units/heroes/hero_earthshaker/temp_eruption_dirt.vpcf"  
      "particle"    "particles/dire_fx/dire_lava_falling_rocks.vpcf"  
      "particle"    "particles/units/heroes/hero_earthshaker/earthshaker_echoslam_start_fallback_mid.vpcf"  
      "particle" "particles/econ/items/earthshaker/egteam_set/hero_earthshaker_egset/earthshaker_echoslam_start_egset.vpcf"  
      "soundfile"   "soundevents/game_sounds_heroes/game_sounds_leshrac.vsndevts"  
    }  
    

Has all the particles used and leshrac soundfile loaded.

Paths were copied directly from the asset browser, unmodified particles. I'll explain each of its attachments when we get to them.

* * *

### Spell Start​

When the cast point is complete, perform the following actions:
    
    
    "OnSpellStart"  
    {  
        "RunScript"  
        {  
            "ScriptFile"    "heroes/far_seer/earthquake.lua"  
            "Function"   "EarthquakeStart"  
            "Target"     "POINT"  
        }  
      
    //...  
    

This calls a very simple Lua script which creates a dummy unit to apply a thinker modifier which does the "waves".

When using an `"AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_POINT"`, you can pass the POINT targeted as an extra parameter to the function (it won't be passed automatically, like CASTER or TARGET). This can be accessed as the **target_points [1]** on the event.

 **Lua**
    
    
     function EarthquakeStart( event )  
        -- Variables  
        local caster = event.caster  
        local point = event.target_points[1]  
      
        caster.earthquake_dummy = CreateUnitByName("dummy_unit", point, false, caster, caster, caster:GetTeam())  
        event.ability:ApplyDataDrivenModifier(caster, caster.earthquake_dummy, "modifier_earthquake_thinker", nil)  
    end  
    

There is a Datadriven function to do something similar, **"CreateThinker"** , but because we need to stop the ability from casting the waves if the hero stops channeling the ability, its better to have the dummy "indexed" on the _caster handle_ so that we can run another script to remove it without the need to do a search for it.

Back to the dummy unit, this is its definition:
    
    
    "dummy_unit_vulnerable"  
    {  
        "BaseClass"            "npc_dota_creature"  
        "AttackCapabilities"   "DOTA_UNIT_CAP_NO_ATTACK"  
        "VisionDaytimeRange"   "0"  
        "VisionNighttimeRange"  "0"  
        "UnitRelationshipClass" "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD"  
        "MovementCapabilities"  "DOTA_UNIT_CAP_MOVE_NONE"  
        "Ability1"             "dummy_passive_vulnerable"  
    }  
    

And the passive ability:
    
    
    "dummy_passive_vulnerable"  
    {  
        "BaseClass"       "ability_datadriven"  
        "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_PASSIVE"  
        "Modifiers"  
        {  
            "dummy_modifier"  
            {  
                "Passive" "1"  
                "States"  
                {  
                    "MODIFIER_STATE_NO_UNIT_COLLISION"  "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_NO_TEAM_MOVE_TO"    "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_NO_TEAM_SELECT"     "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_COMMAND_RESTRICTED" "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_ATTACK_IMMUNE"      "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_MAGIC_IMMUNE"       "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_NOT_ON_MINIMAP"     "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_UNSELECTABLE"       "MODIFIER_STATE_VALUE_ENABLED"  
                    "MODIFIER_STATE_NO_HEALTH_BAR"      "MODIFIER_STATE_VALUE_ENABLED"  
                }  
            }  
        }  
    }  
    

 **IMPORTANT:** The dummy doesn't have `MODIFIER_STATE_INVULNERABLE` enabled, because that state is a bitch, usually preventing from applying modifiers even if they have `MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE`. That's why I called it _vulnerable even tho it can't take damage.

* * *

Back to the OnSpellStart, 2 more actions:
    
    
    "OnSpellStart"  
    {   //...  
      
        "DestroyTrees"  
        {  
            "Target" "POINT"  
            "Radius"    "%radius"  
        }  
      
        "DelayedAction"  
        {  
            "Delay" "0.5"  
            "Action"  
            {  
                "ApplyModifier"  
                {  
                    "ModifierName"  "modifier_earthquake_channelling"  
                    "Target" "CASTER"  
                }  
            }  
        }  
     }  
    

First action will destroy the trees around the POINT targeted and the second action applies a modifier that takes care of the channeling animation, using the same method explained in the [Channeling Animations Tutorial](http://moddota.com/forums/discussion/77/channeling-animations)

Animation needs to start half a second later to sync with the damage, this is a matter of experimenting with the time frames.

* * *

### Channel Finish​

When the ability finishes channeling either because the channel time has finished or it was cancelled, we need to stop the animation and the dummy thinker:
    
    
    "OnChannelFinish"  
    {  
        "RunScript"  
        {  
            "ScriptFile"    "heroes/far_seer/earthquake.lua"  
            "Function"   "EarthquakeEnd"  
        }  
      
        "RemoveModifier"  
        {  
            "ModifierName"  "modifier_earthquake_channelling"  
            "Target"       "CASTER"  
        }  
    }  
    

The 2nd lua function is even shorter, only has 1 API call to instantly remove the dummy:
    
    
    function EarthquakeEnd( event )  
        local caster = event.caster  
      
        caster.earthquake_dummy:RemoveSelf()  
    end  
    

* * *

### Modifiers​

Now lets move to the the Modifiers block, the first couple handles the animation:
    
    
    "Modifiers"  
    {  
        "modifier_earthquake_channelling"  
        {  
            "IsHidden"          "1"  
            "ThinkInterval"     "1.0"  
            "OverrideAnimation" "ACT_DOTA_KINETIC_FIELD"  
            "OnIntervalThink"  
            {  
                "ApplyModifier"  
                {  
                    "ModifierName"  "modifier_channeling"  
                    "Target"       "CASTER"  
                    "Duration"     "0.9"  
                }  
            }  
        }  
      
        "modifier_channeling"  
        {  
            "IsHidden"          "1"  
            "OverrideAnimation" "ACT_DOTA_KINETIC_FIELD"  
        }  
      
    //...  
    

"modifier_earthquake_thinker" is the modifier applied in Lua to the dummy, and has the main logic for all the damage, particles, sounds and other effects needed. It has a lot bunch of actions, so I'll break it up
    
    
    "modifier_earthquake_thinker"  
    {  
        "Aura"        "modifier_eartquake_slow"  
        "Aura_Radius" "%radius"  
        "Aura_Teams"  "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "Aura_Types"  "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
      
    //...  
    

This constantly applies another modifier effect to all units around a radius of the targeted point, in this ability its a simple slow effect:
    
    
    "modifier_eartquake_slow"  
    {  
       "IsDebuff"   "1"  
       "Properties"  
       {  
           "MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE" "%movement_speed_slow_pct"  
       }  
    }  
    

* * *

Back to the "modifier_earthquake_thinker", we have to have actions on 2 instances: When the modifier is created, and then on each wave interval.

#### Main modifier created​
    
    
    "OnCreated"  
    {  
        "FireSound"  
        {  
            "EffectName"    "Hero_Leshrac.Split_Earth"  
            "Target"     "TARGET"  
        }  
      
        // Many simple particle attachments:  
        "AttachEffect"  
        {  
            "EffectName" "particles/econ/items/earthshaker/egteam_set/hero_earthshaker_egset/earthshaker_echoslam_start_egset.vpcf"  
            "EffectAttachType" "follow_origin"  
            "Target"           "TARGET"  
        }  
      
        "AttachEffect"  
        {  
            "Target"    "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName"    "particles/dire_fx/dire_lava_falling_rocks.vpcf"  
        }  
      
        "AttachEffect"  
        {  
            "Target"    "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName"    "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf"  
        }  
      
    //...  
    

"TARGET" in all this scope will refer to the unit that has the modifier, i.e. the dummy.

I used one extra particle that needs to have the Control Point 1 attached to the target, else it will show on the middle of the map.
    
    
        "AttachEffect"  
        {  
            "Target"           "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName"       "particles/units/heroes/hero_earth_spirit/espirit_spawn.vpcf"  
            "ControlPointEntities"  
            {  
                "TARGET"    "attach_origin"  
                "TARGET"    "attach_origin"  
            }  
        }  
    

"ControlPointEntities" will set the CP0 to the origin of the dummy, and do the same for CP1.

To realize that the CP1 needs to be set else the particle will fail to display properly, this is the procedure:

  1. Open the particle system on the Particle Editor, double clicking on it (needs **decompiled particles**!)

![img](https://puu.sh/f61DF/2ed8e1c122.jpg)

  2. Select Control Point #1 on the Control Points List:

![img](https://puu.sh/f61JZ/8593db279d.png)

  3. Hold and drag the control point to somewhere else by clicking on the blue rectangle:

![img](https://puu.sh/f61MV/9d913ef133.jpg)

  4. Notice that there's some dust that moved with the Control Point.

![img](https://puu.sh/f61pF/1c83b2e5cc.jpg)




 **This means you need to set it!** Else it will stay unattached and originate on the (0,0,0) position at the map.

* * *

#### Main modifier wave interval actions​

Still following this? Great, it's almost finished, only missing the `"OnIntervalThink"` actions which do the damage +effects every `"wave_interval"`
    
    
    "ThinkInterval" "%wave_interval"  
    "OnIntervalThink"  
    {  
        "Damage"  
        {  
            "Target"  
            {  
                "Center" "TARGET"  
                "Radius" "%radius"  
                "Teams"  "DOTA_UNIT_TARGET_TEAM_BOTH"  
                "Types"  "DOTA_UNIT_TARGET_BUILDING"  
            }  
            "Type"   "DAMAGE_TYPE_MAGICAL"  
            "Damage"    "%building_damage_per_sec"  
        }  
      
        "FireSound"  
        {  
            "EffectName"  "Hero_Leshrac.Split_Earth"  
            "Target"      "TARGET"  
        }  
      
        // Simple particle attachment  
        "FireEffect"  
        {  
            "EffectName"       "particles/units/heroes/hero_warlock/warlock_rain_of_chaos_explosion.vpcf"  
            "EffectAttachType" "follow_origin"  
            "Target"           "TARGET"  
        }  
        "FireEffect"  
        {  
            "EffectName"       "particles/units/heroes/hero_earthshaker/temp_eruption_dirt.vpcf"  
            "EffectAttachType" "follow_origin"  
            "Target"           "TARGET"  
        }  
    //...  
    

There's a couple of specific particle firing that need a separate explanation:

To find what each control point does, follow the same method as with the espirit_spawn.vpcf, but knowing this particles were designed for AoE effects, you should instead write radius-range numbers on the control points and see the effect on the particle editor.
    
    
        "AttachEffect"  
        {  
            "Target"           "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName"       "particles/units/heroes/hero_leshrac/leshrac_split_earth.vpcf"  
            "ControlPoints"  
            {  
                "01"    "%radius 50 50"  
            }  
        }  
      
        "AttachEffect"  
        {  
            "Target"           "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName"       "particles/units/heroes/hero_leshrac/leshrac_pulse_nova.vpcf"  
            "ControlPoints"  
            {  
               "01" "%radius 0 %radius"  
            }  
        }  
      
        "AttachEffect"  
        {  
            "Target"           "TARGET"  
            "EffectAttachType" "follow_origin"  
            "EffectName" "particles/units/heroes/hero_earthshaker/earthshaker_echoslam_start_fallback_mid.vpcf"  
            "ControlPoints"  
            {  
                "01"    "1 0 0"  
            }  
        }  
    }  
    

Not gonna lie, it's mostly trial and error and just a bit of reading whatever the PET info has to enlighten you:

![img](https://puu.sh/f62Ph/2d34e46b46.png)

* * *

* * *

### Complete code can be found at the following links:​

### [DataDriven](https://github.com/MNoya/DotaCraft/blob/master/game/dota_addons/dotacraft/scripts/npc/abilities/heroes/far_seer_earthquake.txt)​

### [Lua](https://github.com/MNoya/DotaCraft/blob/master/scripts/vscripts/heroes/far_seer/earthquake.lua)​

  * For more examples of this style of ability, check:

    * [Blizzard](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/archmage_blizzard.txt)
    * [Rain of Fire](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/pit_lord_rain_of_fire.txt)
    * [Tornado](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/naga_sea_witch_tornado.txt)



* * *

If you find a way to improve this method or have any questions, leave them here.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/point-channeling-aoe-ability-example.md)

---

## Apply Hero and Creep Modifier Durations

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Apply Hero and Creep modifier durations



# Apply Hero and Creep modifier durations

I came up with this method after [kritth](http://moddota.com/forums/profile/1600/kritth) showed us that you can directly add a `"Duration"` key value to an `"ApplyModifier"` block and the use of the `"Target"` block without a Radius (defaulting to 0).

Basically, abusing the datadriven system we can do this on any event:
    
    
    "ApplyModifier"  
    {  
        "ModifierName"  "modifier_name"  
        "Target"  
        {  
            "Center"    "TARGET"  
            "Types"  "DOTA_UNIT_TARGET_HERO"  
        }  
        "Duration"  "%hero_duration"      
    }  
      
    "ApplyModifier"  
    {  
        "ModifierName"  "modifier_name"  
        "Target"  
        {  
            "Center"    "TARGET"  
            "Types"  "DOTA_UNIT_TARGET_BASIC"  
        }  
        "Duration"  "%creep_duration"  
    }  
    

modifier_name being any modifier **without a "Duration"** specified directly in its block.

Hopefully this will make many codes that need to apply different duration to hero and creeps way better to read and polish. Until now I was using Lua to define the different duration but after seeing this system it's just way better.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/apply-hero-and-creep-modifier-durations.md)

---

## Physics Ability Example - Exorcism

* [](/)
  * Abilities, items, modifiers
  * Datadriven
  * Physics Ability Example - Exorcism



# Physics Ability Example - Exorcism

Here's in the breakdown of an ability that spawns units and moves them with rotation, making use of the [Physics library](https://github.com/bmddota/barebones/blob/source2/game/dota_addons/barebones/scripts/vscripts/physics.lua)

The end result while there is no enemies to go to would be like this:

I include a Debug boolean that can be enabled to show the path and acquisition of different states:

The complete codes for the ability can be found in the following [SpellLibrary](https://github.com/Pizzalol/SpellLibrary) links:

  * [death_prophet_exorcism_datadriven](https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/npc/abilities/death_prophet_exorcism_datadriven.txt)

  * [exorcism.lua](https://github.com/Pizzalol/SpellLibrary/blob/SpellLibrary/game/dota_addons/spelllibrary/scripts/vscripts/heroes/hero_death_prophet/exorcism.lua)




The entire lua file has comments for every decision. I hope it helps understand and adapt this skill to different behaviors.

* * *

I'll just leave the lines related to physics here, special thanks to BMD for helping me through the entire process of rewriting this ability.

First step is to make each spawned unit a physics units and apply the properties.   
[Physics Readme](https://github.com/bmddota/barebones/blob/source2/PhysicsReadme.txt) to know what these do.
    
    
    -- Make the spirit a physics unit  
    Physics:Unit(unit)  
      
    -- General properties  
    unit:PreventDI(true)  
    unit:SetAutoUnstuck(false)  
    unit:SetNavCollisionType(PHYSICS_NAV_NOTHING)  
    unit:FollowNavMesh(false)  
    unit:SetPhysicsVelocityMax(spirit_speed)  
    unit:SetPhysicsVelocity(spirit_speed * RandomVector(1))  
    unit:SetPhysicsFriction(0)  
    unit:Hibernate(false)  
    unit:SetGroundBehavior(PHYSICS_GROUND_LOCK)  
    

After this, we want to control the units behavior on each frame, making use of the OnPhysicsFrame function. 
    
    
    -- This is set to repeat on each frame  
    unit:OnPhysicsFrame(function(unit)  
      
        -- Move the unit orientation to adjust the particle  
        Unit:SetForwardVector( ( unit:GetPhysicsVelocity() ):Normalized() )  
      
        -- Movement and Collision detection are state independent  
      
        -- MOVEMENT   
        -- Get the direction  
        local diff = point - unit:GetAbsOrigin()  
        diff.z = 0  
        local direction = diff:Normalized()  
      
        -- Calculate the angle difference  
        local angle_difference = RotationDelta(VectorToAngles(unit:GetPhysicsVelocity():Normalized()), VectorToAngles(direction)).y  
              
        -- Set the new velocity  
        if math.abs(angle_difference) < 5 then  
        -- CLAMP  
        local newVel = unit:GetPhysicsVelocity():Length() * direction  
        unit:SetPhysicsVelocity(newVel)  
        elseif angle_difference > 0 then  
        local newVel = RotatePosition(Vector(0,0,0), QAngle(0,10,0), unit:GetPhysicsVelocity())  
        unit:SetPhysicsVelocity(newVel)  
        else          
        local newVel = RotatePosition(Vector(0,0,0), QAngle(0,-10,0), unit:GetPhysicsVelocity())  
        unit:SetPhysicsVelocity(newVel)  
        end  
      
        -- COLLISION CHECK  
        local distance = (point - current_position):Length()  
        local collision = distance < 50  
      
        -- STATE DEPENDENT LOGIC  
        -- Damage, Healing and Targeting are state dependent.  
        -- Check the full script on SpellLibrary  
    

Last is to stop the units, very simple with this:
    
    
    unit:SetPhysicsVelocity(Vector(0,0,0))  
    unit:OnPhysicsFrame(nil)  
    

* * *

For a different logic, check [Locust Swarm](https://github.com/MNoya/DotaCraft/blob/master/scripts/vscripts/heroes/crypt_lord/locust_swarm.lua) from **[DotaCraft](https://github.com/MNoya/DotaCraft)** repository, it uses the same movement physics but has different acquire and return logic, to fit Warcraft 3 behavior.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/physics-ability-example-exorcism.md)

---

# Units

## Unit KeyValues

* [](/)
  * Units
  * Unit KeyValues



On this page

# Unit KeyValues

This document covers every keyvalue of the npc_units_custom file

![img](https://i.imgur.com/T7W828Q.png)

  * General
  * Boolean Values and Flags
  * Selection Properties
  * Sounds
  * Abilities
  * Stats
  * Bounds
  * Movement
  * Health and Mana
  * Armor and Attack Types
  * Vision
  * Lua VScript AI
  * Creature Block



## General​

Most unit names start with "npc_" but this isn't necessary. A basic unit definition looks like this:

<https://pastebin.com/KB7EsSLF>

The definition of the default dota units can be found in [npc_units.txt](https://github.com/dotabuff/d2vpk/blob/master/dota_pak01/scripts/npc/npc_units.txt)

### Base Classes​

There are a lot of classes for units, the [complete list can be found in here](https://moddota.com/forums/discussion/comment/746/#Comment_746), but as we don't have much control over their properties, only a few are really useful for custom units in general:

  *  ** _npc_dota_creature_**

The most useful baseclass, it doesn't have any critical hardcoded property so it's the go-to unit type for most units. It also allows the usage of the "Creature" block, which will is reviewed in the next section. It's linked to the `"DOTA_UNIT_TARGET_BASIC"` target type in abilities.

There is however one simple property imposed to this unit type, which for the most part it's useful but it's good to keep in mind, and it's that **abilities are automatically skilled** up to the MaxLevel if possible (limited by the Level*2 of the creature, meaning a Level 1 creature will autolearn its abilities upto the 2nd rank). This can be of course modified through Lua `SetLevel` on each ability.

  *  ** _npc_dota_building_**

Linked to `"DOTA_UNIT_TARGET_BUILDING"`, this baseclass can prove useful in many situations. 

It has the following properties imposed to it, which we have **no control** over them:

    * Invulnerable by default. Very annoying, it can be removed through Lua with `building_handle:RemoveModifierByName("modifier_invulnerable")`
    * Visible through fog. This is troublesome, and forces any game that wants to have building strategies to use npc_dota_creature and define custom building damage, with some other downsides.
    * No visual turning, even if internally the unit is actually changing its forward vector. Usually a good thing, the creature equivalent behavior for this is the stunned state.  
Worth mentioning `npc_dota_tower` is a subclass of building, and is coded to trigger stuff like the announcers, team gold sharing and aggro AI. Use npc_dota_building with attack to make towers that aren't forced to use those mechanics.
  *  ** _npc_dota_thinker_**

For dummy units. More on this later


  
For the rest of this guide, we'll be assuming a `"BaseClass" "npc_dota_creature"`

### Level​
    
    
    "Level"                        "32"  
    

![img](https://puu.sh/ho10S/fe733ccd2e.jpg)

This level can be accessed and modified with Lua though various creature functions.

### Model and Scale​
    
    
    "Model"                        "models/heroes/dragon_knight/dragon_knight.vmdl"  
    "ModelScale"                    "0.8"  
    

Self explanatory, get the models through the asset browser and set its size (it will use "1" by omission).

Creatures using models that are broken down for cosmetic equipment will be 'naked' unless we attach them wearables. More on this later.

### Minimap Icons​
    
    
    "MinimapIcon"               "minimap_candybucket"  
    "MinimapIconSize"           "1000"  
    

Produces: ![img](https://puu.sh/ho19t/c5c7f7bb39.jpg)

### Unit Label​
    
    
    "UnitLabel"                    "healing_ward"  
    

This can be any name, its only useful purpose is to use with Lua `GetUnitLabel()` which can work as an easy method of tagging units.

## Boolean Values and Flags​
    
    
    "HasInventory"                "1"  
    

Associated Lua functions: `HasInventory()` and `SetHasInventory(bool)`

 **Note:** `SetHasInventory(true)` won't work on units that didn't have `"HasInventory" "1"` previously defined.
    
    
    "IsSummoned"                "1"  
    "CanBeDominated"            "0"  
    

Self explanatory, the default values are 0 for summoned (so the lua IsSummoned will always return false unless you set this), and 1 for dominated creaturesl

  
``` "ConsideredHero" "1" ```

`"DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO"` datadriven flag. Gives the unit a hero styled health bar:

![img](https://puu.sh/ho2pt/c687566db4.jpg)

  
``` "IsAncient" "1" ``` Associated Lua function: `IsAncient()`  
`"DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS"` datadriven flag.  
``` "IsNeutralUnitType" "1" ```

Associated Lua function: `IsNeutralUnitType()`

  
``` "CanBeDominated" "0" ```

Helm of the Dominator specific. No associated Lua function, but it's easy to make one to read from this value if you wish.

  
``` "AutoAttacksByDefault" "0" ```

Ignores Auto Attack Behavior setting, forces to not autoattack. Used on Visage Familiars.

  
``` "ShouldDoFlyHeightVisual" "0" ```

![img](https://puu.sh/ho2MV/7f3e6d0fd8.jpg)

Seems broken, no noticeable difference.

  
``` "WakesNeutrals" "1" ```

Unit won't aggro units on the Neutral team within their acquisition range.

## Selection properties​
    
    
    "SelectionGroup"               "string"                
    "SelectOnSpawn"                "1"  
    "IgnoreAddSummonedToSelection" "1"  
    

  *  **SelectionGroup** will make it so that all the units of this type are in a group which can be accessed through tab.



![img](https://puu.sh/ho1rl/d0d5e48cd3.jpg) _I pressed tab once and all these units got selected after defining them in the same control group_

  *  **SelectOnSpawn** forces the unit into the selection of the hero, even if the "Auto Select Summoned Units" setting is turned off. It's used on Visage Familiars.

  *  **IgnoreAddSummonedToSelection** if set to 1, makes the "Auto Select Summoned Units" ignore this unit when it spawns. It's used on Brewmaster Primal Split units.




## Sounds​
    
    
    "SoundSet"                     "Hero_DragonKnight"  
    "GameSoundsFile"               "soundevents/game_sounds_heroes/game_sounds_dragon_knight.vsndevts"  
    "IdleSoundLoop"                "Hero_DragonKnight.Tutorial_Intro"  
    

  *  **SoundSet** with the correct **GameSoundsFile** associated takes care of sounds like attacks and walking footsteps. The SoundSet string should be the first part of each of the hero sounds, which can be easily seen through the [Dota 2 Sound Editor](https://github.com/pingzing/dota2-sound-editor). [Example](https://puu.sh/ho4KA/f7ad0ff2ca.png)

  *  **IdleSoundLoop** will be played constantly after the unit spawns. Some heroes don't have a loop sound defined, but as in the example above it's possible to use this as an Spawn sound for the unit if you add the string of a non-loopable sound.




## Abilities​
    
    
    "AbilityLayout"               "4"  
    "Ability1"                    ""            // Ability 1.  
    //"Ability2" ... up to "Ability16"  
    

The unit can hold up to 16 abilities at any time being.

`"AbilityLayout"` is used for the built-in Flash UI to change how many abilities it can display, and currently its limited to 4, 5 and 6 (anything else will malfunction)

## Stats​

Because of :valve: - reasons , unit stats aren't hover-able, but they are there.

### Physical and Magical protection​
    
    
    "ArmorPhysical"                "0"  
    "MagicalResistance"            "0"  
    

### Attack Capabilities​
    
    
    "AttackCapabilities"         "DOTA_UNIT_CAP_NO_ATTACK"  
    

List of Attack Capabilities:

  * `DOTA_UNIT_CAP_NO_ATTACK`
  * `DOTA_UNIT_CAP_MELEE_ATTACK`
  * `DOTA_UNIT_CAP_RANGED_ATTACK`



#### Other Attack Stats:​
    
    
    "AttackDamageMin"            "50"       // Damage range min.  
    "AttackDamageMax"            "40"       // Damage range max.  
    "AttackRate"                 "1.7"     // Speed of attack.  
    "AttackAnimationPoint"       "0.75"    // Normalized time in animation cycle to attack.  
    "AttackAcquisitionRange"     "800"     // Range within a target can be acquired.  
    "AttackRange"                "600"     // Range within a target can be attacked.  
    "AttackRangeBuffer"          "250"     // Extra range the target can move without canceling the attack  
    

#### Ranged Attack Projectiles​
    
    
    "ProjectileModel"            "particles/units/heroes/hero_lina/lina_base_attack.vpcf"  
    "ProjectileSpeed"            "900"  
    

Find hero/unit attack particles with the asset browser, filtering for the hero name + "attack vpcf" 

If you have any "Melee to Ranged" mechanic, the unit definition should have a projectile speed, else it will default to 0, effectively making them never reach its target.

#### The things we could do...​
    
    
    "AttackDamageType"           "DAMAGE_TYPE_ArmorPhysical"  
    

This is seen in every unit file, but worthless/unsupported. In the future, we could see it being used to easily define Air/Ground attacks, Magic Attacks, etc, which currently require scripted abilities to simulate those behaviors.

### Attribute Stats​

Attributes are ignored for anything that isn't a hero unit, but because anything used to define units can also be used for npc_heroes_custom, these are the keyvalues, all self explanatory:
    
    
    "AttributePrimary"             "DOTA_ATTRIBUTE_STRENGTH"  
    "AttributeBaseStrength"        "0"            // Base strength  
    "AttributeStrengthGain"        "0"            // Strength bonus per level.  
    "AttributeBaseAgility"         "0"            // Base agility  
    "AttributeAgilityGain"         "0"            // Agility bonus per level.  
    "AttributeBaseIntelligence"    "0"            // Base intelligence  
    "AttributeIntelligenceGain"    "0"            // Intelligence bonus per level.  
    

### Bounty​

If you want to make any complex rule for XP/Gold, for example, give less XP from this unit to heroes at a certain level, it's better to leave the values at 0 and grant it through lua.
    
    
    "BountyXP"                    "0"            // Experience earn.  
    "BountyGoldMin"                "0"           // Gold earned min.  
    "BountyGoldMax"                "0"           // Gold earned max.  
    

## Bounds​

This defines the unit collision with other units.
    
    
    "BoundsHullName"            "DOTA_HULL_SIZE_HERO"  
    

Bound Size Reference:

Value| Radius in Hammer units  
---|---  
DOTA_HULL_SIZE_SMALL| 8  
DOTA_HULL_SIZE_REGULAR| 16  
DOTA_HULL_SIZE_SIEGE| 16  
DOTA_HULL_SIZE_HERO| 24  
DOTA_HULL_SIZE_HUGE| 80  
DOTA_HULL_SIZE_BUILDING| 81  
DOTA_HULL_SIZE_FILLER| 96  
DOTA_HULL_SIZE_BARRACKS| 144  
DOTA_HULL_SIZE_TOWER| 144  
  
  * Lua `SetHullRadius(float)` can change this to any value in between or even above 144.


    
    
    "RingRadius"                "70"  
    

The visible selection ring when the unit is selected

![img](https://puu.sh/ho2lF/02ab15803e.jpg)
    
    
    "HealthBarOffset"           "250"  
    

The height from the ground at which the Health Bar should be placed. By default this value is set to "-1" to use the models default height. The bigger the Model and ModelScale, this should be adjusted to a higher number so it doesn't look weird.

![img](https://puu.sh/ho2CK/8ae5a734d8.jpg)

## Movement​
    
    
    "MovementCapabilities"        "DOTA_UNIT_CAP_MOVE_NONE"  
    "MovementSpeed"               "300"       // Speed  
    "MovementTurnRate"            "0.5"       // Turning rate.  
    

List of Movement Capabilities

  * `DOTA_UNIT_CAP_MOVE_NONE`
  * `DOTA_UNIT_CAP_MOVE_GROUND`
  * `DOTA_UNIT_CAP_MOVE_FLY`



##### Less used movement-related values:​
    
    
    "HasAggressiveStance"         "0"  
    

Plays alternate idle/run animation when near enemies, e.g. Abaddon model
    
    
    "FollowRange"                 "100"  
    

Distance to keep when following. Healing Ward/Sigil have it set at 250.

## Health and Mana​
    
    
    "StatusHealth"                "150"       // Base health.  
    "StatusHealthRegen"           "0"         // Health regeneration rate.  
    "StatusMana"                  "0"         // Base mana.  
    "StatusManaRegen"             "0"         // Mana regeneration rate.  
    

 **Notes:**

  * Negative Health/Mana Regen doesn't work.
  * Setting StatusMana on 0 will make it not have a mana bar.
  * There is currently **no way of Setting MAX Mana** in Lua! Unit mana pool modification has to be done with the Creature block and Levels.



### Rarely used:​
    
    
    "StatusStartingMana"          "-1"  
    

-1 means default to full mana, which is the default. It can be changed to any integer value so the units don't spawn with a filled pool.

## Armor and Attack Types​

The Table of Physical Attacks vs Armor Types can be found [here in this link to the dota wiki](https://dota2.gamepedia.com/Attack_damage#Attack_damage_types)
    
    
    "CombatClassAttack"           "DOTA_COMBAT_CLASS_ATTACK_HERO"  
    "CombatClassDefend"           "DOTA_COMBAT_CLASS_DEFEND_HERO"  
    

### Attack Types Table​

Name| Dota Equivalent  
---|---  
Normal| DOTA_COMBAT_CLASS_ATTACK_BASIC  
Pierce| DOTA_COMBAT_CLASS_ATTACK_PIERCE  
Siege| DOTA_COMBAT_CLASS_ATTACK_SIEGE  
Chaos| DOTA_COMBAT_CLASS_ATTACK_LIGHT  
Hero| DOTA_COMBAT_CLASS_ATTACK_HERO  
  
### Armor Types Table​

Name| Dota Equivalent  
---|---  
Unarmored| DOTA_COMBAT_CLASS_DEFEND_SOFT  
Light| DOTA_COMBAT_CLASS_DEFEND_WEAK  
Medium| DOTA_COMBAT_CLASS_DEFEND_BASIC  
Heavy| DOTA_COMBAT_CLASS_DEFEND_STRONG  
Fortified| DOTA_COMBAT_CLASS_DEFEND_STRUCTURE  
Hero| DOTA_COMBAT_CLASS_DEFEND_HERO  
  
## Vision​
    
    
    "VisionDaytimeRange"        "1200"        // Range of vision during day light.  
    "VisionNighttimeRange"      "1800"        // Range of vision at night time.  
    

Vision on any unit can't exceed 1800, any value above that will just default to 1800.

  
## Unit Relationship Class

This doesn't seem to make any difference, might be deprecated or just used for tagging stuff internally.
    
    
    "UnitRelationshipClass"       "DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT"  
    

List:

  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BARRACKS`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_BUILDING`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_COURIER`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_DEFAULT`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_HERO`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_SIEGE`
  * `DOTA_NPC_UNIT_RELATIONSHIP_TYPE_WARD`



## Lua VScript AI​
    
    
    "vscripts"                    "path_to_ai_script.lua"  
    

This will load a lua script file as soon as the unit is spawned. With a Spawn ( entityKeyValues ) function one can initiate a thinker to do any sort of logic, this is a very simple example for a unit that goes through a series of waypoints while casting spells anytime its possible: [ai_tank_miniboss.lua](https://github.com/MNoya/Warchasers/blob/master/game/dota_addons/warchasers/scripts/vscripts/ai_tank_miniboss.lua).

## Neutral Behavior​

When you add a creep to the map and set it to the neutral team, the default is to turn it to a neutral. If you wan't to use a custom behavior, turn it off:
    
    
    "UseNeutralCreepBehavior"   "0"  
    

## Creature Block​

The creature block allows for a variety of features to be applied from KV like basic AI, stat bonuses based on creature level, and wearables. All these settings can and should be put inside **one** creature block, but they will be separated by category in this guide

### Stats Settings and Items​
    
    
    "Creature"  
    {  
      "CanRespawn"        "0"  
      
      //Pathing Setting  
      "DisableClumpingBehavior" "1"  
      
      //Level Up Parameters  
      "HPGain"           "10"  
      "DamageGain"       "20"  
      "ArmorGain"        "0.25"  
      "MagicResistGain"  "0"  
      "MoveSpeedGain"    "1"  
      "BountyGain"       "3"  
      "XPGain"           "15"  
      
      "DisableResistance" "80.0"  
      
      //Starting Items | Note: requires "HasInventory" "1" outside of creature block  
      "EquippedItems"  
      {  
        "Maelstrom" { "Item"  "item_maelstrom" }  
        "Treads" { "Item"  "item_power_treads" }  
        "SnY" { "Item"  "item_sange_and_yasha" }  
      }  
    }  
    

### Wearables​

See [this](https://moddota.com/units/create-creature-attachwearable-blocks-directly-from-the-keyvalues) guide for more info.
    
    
    "Creature"  
    {  
      "AttachWearables"  
      {  
        "Wearable1" { "ItemDef" "101" }  
        "Wearable2" { "ItemDef" "102" }  
        "Wearable3" { "ItemDef" "103" }  
      }  
    }  
    

### Creature AI​

I highly recommend using Lua for AI instead, but will leave some information here anyway.
    
    
    "Creature"  
    {  
      // ?  
      "PermanentDesire"  "1"  
      
      "DefaultState"  "Invade"  
      
      "States"  
      {  
        "Invade"  
        {  
          "Name"          "Invade"  
          "Aggression"    "100.0"  
          "Avoidance"     "0.0"  
          "Support"       "0.0"  
          "RoamDistance"  "2000.0"  
        }  
      }  
        
      "OffensiveAbilities"  
      {  
        "Ability1"                  
        {  
          "Name"        "broodmother_spawn_spiderlings"  
        }  
        "Ability2"  
        {  
          "Name"        "centaur_hoof_stomp"  
      
          //Targeting Parameters  
          "Radius"             "275"  
          "MinimumTargets"     "2"  
          "UseAtHealthPercent" "50"  
          "UseSelfishly"       "1"  
      
          //Ability Descriptors  
          "AOE"          "1"  
          "Debuff"       "1"  
          "Buff"         "1"  
          "Stun"         "1"  
          "Damage"       "1"  
          "Heal"         "1"  
        }  
      }  
      "DefensiveAbilities"  
      {  
        "Ability1"  
        {  
          "Name"           "undying_tombstone"  
          "AOE"            "1"  
          "Radius"         "1000"  
          "MinimumTargets" "1"  
        }  
      }  
    }  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/unit-keyvalues.md)

---

## Unit Producing Buildings

* [](/)
  * Units
  * Unit producing buildings



On this page

# Unit producing buildings

This is a response tutorial on @Lemon30 [question thread](https://moddota.com/forums/discussion/168/unit-producing-buildings-how-do-they-work), I'm gonna explain the scripting approaches to fully spawning units with a building, including making them controllable and defining initial orders.

## Step 1: The npc_units_custom.txt files​

First of all, you'll need a KeyValue definition for a building and the unit you want to spawn.

There are many examples of units in [Warchasers](https://github.com/MNoya/Warchasers/tree/master/game/dota_addons/warchasers/scripts/npc/units) & [DotaCraft](https://github.com/MNoya/DotaCraft/tree/master/game/dota_addons/dotacraft/scripts/npc/units) repositories, so I don't think I need to explain much about this.

I want to make one special note here though. **"BaseClass" "npc_dota_building" can be seen through fog**.

So if you have a problem with this, don't make your unit a building, but a **npc_dota_creature instead**.

This has the issue of creatures having a turn rate, so additionally you'll need to apply a MODIFIER_STATE_STUNNED on them, make the Magic Immune so most spells don't damage them, and make an special rule for spells that are supposed to damage buildings this way.

That being said, we won't be bothering with that for the purpose of this tutorial.

I'll be using a simplified version of the [human_barracks](https://pastebin.com/z5Jk9W17) definition, with a "human_train_footman" ability, which I'll expand on the possibilities for it later.

## Step 2: Putting your unit into the map.​

There are 2 main options for doing this, one is Hammer oriented, and the other is a fully scripted approach.

### Hammer Units​

As described in the first thread, you can point and click to add a unit to the map, with all sort of properties.

The problem with this approach is that even though the building is "part of your team", you have no control over it, the same way you can't control the autoattacks of Towers in Dota.

To solve this, we need to use a couple of lines in lua, basically the `SetOwner` and `SetControllableByPlayer` [API functions](https://moddota.com/api/#!/vscripts/CBaseEntity).

`[CBaseEntity] void SetOwner( handle_owningEntity )` **\-- Sets this entity's owner**

`[CDOTA_BaseNPC] void SetControllableByPlayer( int, bool )` **\-- Set this unit controllable by a player.**

To properly call these functions, I'm gonna assume you already know the basics explained under the [Beginners Guide to Scripting](https://moddota.com/scripting-introduction) and just explain where should you call these with an example.

A good GameMode hook to call these would be after the dota_player_picked_hero, so given a standard barebones listener like this:
    
    
    ListenToGameEvent('dota_player_pick_hero', Dynamic_Wrap(GameMode, 'OnPlayerPickHero'), self)  
    

In OnPlayerPickHero you need to **find the handle of the BaseEntity/BaseNPC** , that is, the unit you want to change ownership and control state.

This can be done in a couple of ways, for example, using the functions defined under [CEntities](https://moddota.com/api/#!/vscripts/CEntities). We want this building to have a unique identifier so its easy to search it, so inside Hammer, select it, go into its properties, and give it a name (I use the Alt+Enter hotkey for this):

![img](https://puu.sh/gs6Ec/c0a81f34ae.jpg)

Now you can search the building and get a local variable to it with this line:
    
    
    local building = Entities:FindByName(nil, "building_barracks1")  
    

Note: **Remember to select Entities when building the map**!

The OnPlayerPickHero function should then look like this:
    
    
    function GameMode:OnPlayerPickHero(keys)  
        local hero = EntIndexToHScript(keys.heroindex)  
        local player = EntIndexToHScript(keys.player)  
        local playerID = hero:GetPlayerID()  
      
        local building = Entities:FindByName(nil, "building_barracks1")  
        building:SetOwner(hero)  
        building:SetControllableByPlayer(playerID, true)  
    end  
    

Now your building should be fully controllable for ability usage, and even subtract gold from the player if you use abilities with gold cost.

### Scripting Approach​

Hey Hammer is good and everything, but it's behavior is very static. You need to have predefined position for the units, build the map everytime you make a change, and can't choose to not spawn any of them if there are less players than expected, etc.

There is a fully scripted method for placing units on the map, which is done by using the `CreateUnitByName` function, with some additional perks.

`handle CreateUnitByName( szUnitName, vLocation, bFindClearSpace, hNPCOwner, hUnitOwner, iTeamNumber )`

Still working inside the same OnPlayerPickHero, we can either make an static position for each playerID, such as _Vector(450,322,128)_ , doing random positions with named info_target entities in Hammer, or a dynamic position based on the hero spawn location. Let's do the latter:
    
    
    local origin = hero:GetAbsOrigin() -- Spawn position  
    local fv = hero:GetForwardVector() -- Vector the hero is facing  
    local distance = 300  
    local position = origin + fv * distance  
    

This will define a Vector facing 300 units to the direction the hero is facing.

Now, CreateUnitByName should then be called in this way:
    
    
    local building = CreateUnitByName("human_barracks", position, true, hero, hero, hero:GetTeamNumber())  
    

Even though we set the hNPCOwner and hUnitOwner, the SetOwner and SetControllableByPlayer are still necessary.

#### Building invulnerability​

There's an small issue with npc_dota_building baseclass which is that they spawn with "modifier_invulnerable" by default, to get rid of this, run this line:
    
    
    building:RemoveModifierByName("modifier_invulnerable")  
    

#### Did I mention Buildings are retarded?​

There's another issue, buildings will sometimes be not created where you want them to be, and instead be stuck to the (0,0,0) position, so, if this happens, add this:
    
    
    Timers:CreateTimer(function() building:SetAbsOrigin(position) end)  
    

Wait 1 frame, and using BMD's timers4life, your building will finally appear in the correct position

#### Precache​

Last thing is the Unit's Precache requirement. Unlike units dropped on Hammer, lua CreateUnitByName won't run the precache {} blocks of the unit abilities nor Model, so we need to do it manually in either addon_game_mode.lua or in PostLoadPrecache() if you are worried about your clients not loading properly. I'll just go with the first method in this case:
    
    
    function Precache( context ) -- Find this in addon_game_mode.lua  
        PrecacheUnitByNameSync("human_barracks", context)  
    end  
    

Done! Full code of the building spawning on front of the hero looks like this:
    
    
    function GameMode:OnPlayerPickHero(keys)  
        local hero = EntIndexToHScript(keys.heroindex)  
        local player = EntIndexToHScript(keys.player)  
        local playerID = hero:GetPlayerID()  
      
        -- Choose a Position  
        local origin = hero:GetAbsOrigin() -- Spawn position  
        local fv = hero:GetForwardVector() -- Vector the hero is facing  
        local distance = 300  
        local position = origin + fv * distance  
      
        -- Spawning  
    local building = CreateUnitByName("human_barracks", position, true, hero, hero, hero:GetTeamNumber())  
        building:SetOwner(hero)  
        building:SetControllableByPlayer(playerID, true)  
        building:SetAbsOrigin(position)  
        building:RemoveModifierByName("modifier_invulnerable")  
    

  


## Step 3: Scripting the unit-spawning ability inside the building​

Now that we have a fully working building ingame, let's move to npc_abilities_custom.txt and creature spawning from this building.

There are 2 main ways of doing this: with the DataDriven Action "SpawnUnit", or just with the `CreateUnitByName` Lua function as explained before.

### DataDriven "SpawnUnit"​

I actually prefer this DD Action and use it extensively thorough all of DotaCraft's unit spawning, because it has access to the very useful `"OnSpawn"` Sub-Event, which is only accessible through this action, and has some other options for unit count, limit (so you can't have more than X units of the same unit at the same time), modifier_kill integration, etc.

Of course you could listen to the game event of unit spawned and do your OnSpawn stuff there, but that makes the ability less modular and harder to maintain.

SpawnUnit should be used as it follows, and is included in the Sublime Dota KV snippets:
    
    
    "SpawnUnit"  
    {  
        "UnitName"       "npc_name"  
        "Target"         "CASTER"  
        "Duration"       "%duration"  
        "UnitCount"      "1"  
        "UnitLimit"      "0"  
        "GrantsGold"     "1"  
        "GrantsXP"       "1"  
        "SpawnRadius"    "10"  
        "OnSpawn"  
        {  
            "ApplyModifier"  
            {  
                "ModifierName"  "modifier_phased"  
                "Target"        "TARGET"  
                "Duration"      "0.03"  
            }  
            [ACTIONS]  
        }  
    }  
    

Applying "modifier_phased" for 1 frame is to prevent units getting stuck, for example if you cast the ability directly on the caster, without the phasing, it will be stuck on the same point and both units will be unable to move. This is similar to running the Lua `FindClearSpaceForUnit`, because once the phasing ends, units will try to find an empty position.

Units created by this function are already under control of the owner of the building.

Inside the "OnSpawn" replacing the [ACTIONS], it's useful to send orders to the unit, which can be referenced in lua as the event.target.

Here is a full example:

<https://pastebin.com/9g316n5A>

The footman unit definition is just a Dragon Knight with some wearables, [I copied it here](https://pastebin.com/XW3wWmhd).

Note the usage of a RunScript to call a MoveToRallyPoint function, this will introduce the 4th and last step of this guide.

## Orders​

Various orders can be run after the unit spawns.

Try to use the `ExecuteOrderFromTable` to avoid dropping orders because the unit is doing something else (like spawning), if you want to use easier functions like `MoveToPosition` you might need to add timers to make sure the unit is ready to perform the order.

Also, the Ownership of the unit needs to be changed to the **hero handle** , because the caster is a creature and those can't gain gold!
    
    
    function MoveToRallyPoint( event )  
        local caster = event.caster  
        local target = event.target  
      
        -- Change this to your desired Vector, usually as an hscript:GetAbsOrigin()  
        local position = Vector(420,322,128)  
      
        ExecuteOrderFromTable({ UnitIndex = target:GetEntityIndex(),  
                                OrderType = DOTA_UNIT_ORDER_MOVE_TO_POSITION,  
                                Position = position, Queue = true })  
        print(target:GetUnitName().." moving to position",position)  
      
        local player = caster:GetPlayerOwner()  
        local hero = player:GetAssignedHero()  
        target:SetOwner(hero)  
    end  
    

* * *

  
That's it for now, post any doubts about anything below. Thanks for reading!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/unit-producing-buildings.md)

---

## Creating Units with a Duration

* [](/)
  * Units
  * Creating units with a duration



On this page

# Creating units with a duration

This is a quick tutorial on how to create custom units so that they appear with a circular timer next to their health bar and the time remaining on the XP bar

If you are not sure to what I am referring to then look at these images ![img](https://i.imgur.com/NL1Gqmr.png) and ![img](https://i.imgur.com/GOeKyp7.png)

The thing that we will need is `modifier_kill`

You can either apply it in KV using `ApplyModifier` or in Lua using `AddNewModifier`

It allows for more flexibility and allows for the proper creation of summoned timed units through Lua

### KV example​

Here is an example of it in KV; one spider spawns without the `modifier_kill` and the other one with it

 ** _Note:_** In this example there is no difference between applying `modifier_kill` or using the inbuilt `Duration` parameter of the `SpawnUnit` action block
    
    
    "test_ability"  
    {  
        // General  
        "BaseClass"                "ability_datadriven"  
        "AbilityBehavior"                "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE"  
        "AbilityType"                    "DOTA_ABILITY_TYPE_BASIC"  
        // Time  
        "AbilityCooldown"                "0.0"  
        // Cost  
        "AbilityManaCost"                "0"  
        // Special  
        "AbilityValues"  
        {  
            "duration"                    "10.0"  
        }  
        "OnSpellStart"  
        {  
            "SpawnUnit"  
            {  
                "UnitName"    "npc_dota_broodmother_spiderling"  
                "UnitCount"    "1"  
                "SpawnRadius"    "200"  
                "Target"        "CASTER"  
      
                "OnSpawn"  
                {  
                    "ApplyModifier"  
                    {  
                        "ModifierName"    "modifier_kill"  
                        "Target"        "TARGET"  
                        "Duration"        "%duration"  
                    }  
                }  
            }  
            "SpawnUnit"  
            {  
                "UnitName"    "npc_dota_broodmother_spiderling"  
                "UnitCount"    "1"  
                "SpawnRadius"    "200"  
                "Target"        "CASTER"  
            }  
        }  
    }  
    

and a short video along with it

### Lua example​

This is a really simple example on how to use it with Lua

this function will apply the `modifier_kill` modifier with a duration of 10 seconds after which the caster will die
    
    
    function KillCaster( keys )  
        local caster = keys.caster  
      
        caster:AddNewModifier(caster, nil, "modifier_kill", {duration = 10})  
    end  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/creating-units-with-a-duration.md)

---

## Adding Simple AI to Units

* [](/)
  * Units
  * Adding a Very Simple AI to Units



On this page

# Adding a Very Simple AI to Units

This tutorial will cover how to issue very simple orders to units. This tutorial uses a move order to make a unit wander inside an area randomly, and a cast order to make a unit cast an untargeted spell randomly.

This tutorial assumes a basic knowledge of lua scripting.

## Drawbacks​

  * This technique should not be used for units which need to perform more than one kind of order each. If a more advanced AI is required, you should check holdout_example's lua ai scripts.
  * Some functionality is hard-coded into this script. If you want to iterate on your game and change the behaviour often, I would suggest having some global constants or loading in the values from an external KV file. Doing this allows you to keep all the values in one place.



## References​

I've copied some units from holdout_example for testing, and copied Berserkers Call from [Spell Library](https://github.com/Pizzalol/SpellLibrary).

If you need help on making your own units or abilities, Noya's documentation is an excellent resource: [Datadriven Units](/units/unit-keyvalues) [DataDriven Ability Breakdown - Documentation](https://moddota.com/abilities/ability-keyvalues)

## Hammer Setup​

In Hammer, I've placed an info_target entity named "spawn_loc_test" which can be found in lua. This allows me to place the units spawn location in Hammer without changing the lua scripts around. If you wish to do this, give each entity a unique name and place them where you want the spawn point on your map.

## Lua Setup​

In the InitGameMode() function we do a few things: seed the random number generator, create an empty table in order to keep track of every unit with behaviour, spawn some units, and set a thinker function up.

Settings which aren't relevant to this tutorial have been omitted, but in this function you can set up things like GameRules for your game mode.
    
    
    function CAITesting:InitGameMode()  
        print( "Loading AI Testing Game Mode." )  
        -- SEEDING RNG IS VERY IMPORTANT  
        math.randomseed(Time())  
      
        -- Set up a table to hold all the units we want to spawn  
        self.UnitThinkerList = {}  
      
        -- Spawn some units  
        for i = 1,5 do  
            self:SpawnAIUnitWanderer()  
        end  
        for i = 1,3 do  
            self:SpawnAIUnitCaster()  
        end  
      
        -- Set the unit thinker function  
        GameRules:GetGameModeEntity():SetThink( "OnUnitThink", self, "UnitThink", 1 )  
    end  
    

## Spawning a Wanderer​

This function will spawn a unit with wandering behaviour. The bounds which the unit wanders between are hard coded. An easy way to determine these bounds is to spawn a simple entity in Hammer (such as info_target), move it about and read the coordinates. In this example, my info_target entity is named "spawn_loc_test".
    
    
    function CAITesting:SpawnAIUnitWanderer()  
        --Start an iteration finding each entity with this name  
        --If you've named everything with a unique name, this will return your entity on the first go  
        local spawnVectorEnt = Entities:FindByName(nil, "spawn_loc_test")  
      
        -- GetAbsOrigin() is a function that can be called on any entity to get its location  
        local spawnVector = spawnVectorEnt:GetAbsOrigin()  
      
        -- Spawn the unit at the location on the neutral team  
        local spawnedUnit = CreateUnitByName("npc_dota_creature_kobold_tunneler", spawnVector, true, nil, nil, DOTA_TEAM_NEUTRALS)  
      
        -- make this unit passive  
        spawnedUnit:SetIdleAcquire(false)  
      
        -- Add some variables to the spawned unit so we know its intended behaviour  
        -- You can store anything here, and any time you get this entity the information will be intact  
        spawnedUnit.ThinkerType = "wander"  
        spawnedUnit.wanderBounds = {}  
        spawnedUnit.wanderBounds.XMin = -768  
        spawnedUnit.wanderBounds.XMax = 768  
        spawnedUnit.wanderBounds.YMin = -64  
        spawnedUnit.wanderBounds.YMax = 768  
      
        -- Add a random amount to the game time to randomise the behaviour a bit  
        spawnedUnit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)  
      
        -- finally, insert the unit into the table  
        table.insert(self.UnitThinkerList, spawnedUnit)  
    end  
    

## Spawning a Caster​

This function will spawn a unit with casting behaviour. The bounds which the unit is spawned in are hard coded. The spell is an untargeted spell which requires no additional variables to cast.
    
    
    function CAITesting:SpawnAIUnitCaster()  
        -- Generate a random location inside the neutrals area  
        local spawnVector = Vector(math.random(-768, 768), math.random(-64, 768), 128)  
      
        -- Spawn the unit at the location on the neutral team  
        local spawnedUnit = CreateUnitByName("npc_dota_creature_gnoll_assassin", spawnVector, true, nil, nil, DOTA_TEAM_NEUTRALS)  
      
        -- make this unit passive  
        spawnedUnit:SetIdleAcquire(false)  
      
        -- Add some variables to the spawned unit so we know its intended behaviour  
        -- You can store anything here, and any time you get this entity the information will be intact  
        spawnedUnit.ThinkerType = "caster"  
        spawnedUnit.CastAbilityIndex = spawnedUnit:GetAbilityByIndex(0):entindex()  
      
        -- Add a random amount to the game time to randomise the behaviour a bit  
        spawnedUnit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)  
      
        -- finally, insert the unit into the table  
        table.insert(self.UnitThinkerList, spawnedUnit)  
    end  
    

## Thinker Function​

This function gets called every second. It will read each of the units and determine if they should be issued with a new order, then issue that order.
    
    
    function CAITesting:OnUnitThink()  
        if GameRules:State_Get() == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS then  
      
            local deadUnitCount = 0  
      
            -- Check each of the units in this table for their thinker behaviour  
            for ind, unit in pairs(self.UnitThinkerList) do  
      
                -- The first check should be to see if the units are still alive or not.  
                -- Keep track of how many units are removed from the table, as the indices will change by that amount  
                if unit:IsNull() or not unit:IsAlive() then  
                    table.remove(self.UnitThinkerList, ind - deadUnitCount)  
                    deadUnitCount = deadUnitCount + 1  
      
                -- Check if the game time has passed our random time for next order  
                elseif GameRules:GetGameTime() > unit.NextOrderTime then  
      
                    if unit.ThinkerType == "wander" then  
                        --print("thinker unit is a wanderer")  
                        --print("time: " .. GameRules:GetGameTime() .. ". next wander: " .. unit.NextWanderTime)  
      
                        -- Generate random coordinates to wander to  
                        local x = math.random(unit.wanderBounds.XMin, unit.wanderBounds.XMax)  
                        local y = math.random(unit.wanderBounds.YMin, unit.wanderBounds.YMax)  
                        local z = GetGroundHeight(Vector(x, y, 128), nil)  
      
                        print("wandering to x: " .. x .. " y: " .. y)  
      
                        -- Issue the movement order to the unit  
                        unit:MoveToPosition(Vector(x, y, z))  
      
      
                    elseif unit.ThinkerType == "caster" then  
      
                        -- If you want a more complicated order, use this syntax  
                        -- Some more documentation: https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ExecuteOrderFromTable  
                        -- Unit order list is here: https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Panorama/Javascript/API#dotaunitorder_t  
                        -- (Ignore the dotaunitorder_t. on each one)  
      
                        print("casting ability " .. EntIndexToHScript(unit.CastAbilityIndex):GetName())  
      
                        local order = {  
                            UnitIndex = unit:entindex(),  
                            AbilityIndex = unit.CastAbilityIndex,  
                            OrderType = DOTA_UNIT_ORDER_CAST_NO_TARGET,  
                            Queue = false  
                        }  
                        ExecuteOrderFromTable(order)  
                    end  
      
                    -- Generate the next time for the order  
                    unit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)  
                end  
            end  
      
            -- Make sure our testing map stays on day time  
            if not GameRules:IsDaytime() then  
                GameRules:SetTimeOfDay(0.26)  
            end  
      
        elseif GameRules:State_Get() >= DOTA_GAMERULES_STATE_POST_GAME then  
            return nil  
        end  
      
        -- this return statement means that this thinker function will be called again in 1 second  
        -- returning nil will cause the thinker to terminate and no longer be called  
        return 1  
    end  
    

## Finishing Up​

If you need more advanced behaviour, an AI script should be used. The method covered in this tutorial can be extended up to a point however, for example casting a ground-targeted ability in a random area would be possible using only code posted here.

The full files for this example can be found here: <https://github.com/Wigguno/AITesting>

If you have any questions, the [ModDota Discord](https://discord.gg/Mvn4gww) helpdesk channel is always happy to help.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/adding-a-very-simple-ai-to-units.md)

---

## Writing Simple AI for Neutrals

* [](/)
  * Units
  * Writing a simple AI for neutrals



On this page

# Writing a simple AI for neutrals

 **NOTE:** This article is a rewrite of a very old AI tutorial: <http://yrrep.me/dota/dota-simple-ai.html>

I have encountered many questions about AI on the modding irc over the time, so I decided to write up a tutorial for a very basic AI that can be used in Lua. The term AI might seem intimidating as a programmer that has little to no experience with it, I will try however to lay out the process for a simple state-driven AI in a way that is as clear as possible. Hopefully by the end of this article writing your own AI does not seem as scary anymore.

## What are we making​

We will make a little state-driven AI that mimics how neutrals behave in DotA 2. This means it will do these things:

  * It will stand idle in its location until an enemy comes in range.
  * After spotting an enemy it will run to attack them.
  * If the neutral runs too far from its initial 'idle location' it will return back to it.
  * Repeat from the first point.



The first phase to making reliable AI (in the sense that it will always do what you expect it to) is planning. I personally think that making a diagram representing the different states and the transitions between these states are a big help when making an AI like this. The more effort you put into this diagram, the easier the actual implementation of your AI will be.

For our neutral example I have translated the text describing the unit's behaviour into a state diagram, which contains all possible states and the conditions for transitioning between these states. The result is the following diagram:

![State transition diagram](https://i.imgur.com/TWgPSJx.png)

These diagrams can be made with any software with drawing possibilities such as paint, photoshop or word. I really like using <https://www.draw.io/>, which is an online drawing tool specialised for drawing diagrams and graphs.

In the diagram you can see the different states represented by boxes and transitions represented by arrows. The labels on the arrows describe when this transition happens.

## Implementing a single state​

To show how to translate one state to code I will give the example implementation of the aggressive state. I am implementing each state as a 'think' function that will check if any of the transition conditions are true, and execute that transition if they are true. 

Look at the 'Aggressive' state in the above diagram. It has two transitions, so I would expect the 'AggressiveThink' function to contain one check for 'Target died', one check for 'Out of leash range', and some aggressive behavior that happens inside the state.

This translates to the following code:
    
    
    function modifier_ai:AggressiveThink()  
        -- Check if the unit has walked outside its leash range  
        if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then  
            self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint  
            self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)  
            return -- Stop processing this state  
        end  
          
        -- Check if the target has died  
        if not self.aggroTarget:IsAlive() then  
            self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint  
            self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)  
            return -- Stop processing this state  
        end  
          
        -- Still in the aggressive state, so do some aggressive stuff.  
        self.unit:MoveToTargetToAttack(self.aggroTarget)  
    end  
    

This way of translating your state diagram to code will always work as long as you can write code describing your transition conditions.

## AI as Lua modifier​

Now we have one function that describes one 'tick' of one of our AI states, how do we make sure this is called?

The easiest way to create an AI tied to one unit is to make the AI a Lua modifier. This modifier has some very convenient properties built in:

  * The AI will stop once the unit dies
  * The modifier provides convenient created/destroyed handlers to setup/cleanup your AI
  * The modifier provides an interval think



So really, the very core of your AI comes down to calling `StartIntervalThink(interval)` in your modifier's `OnCreated`, and then in the `OnIntervalThink` calling the correct 'state' function that you created like in the previous section.

## Complete AI modifier​

Below is the complete state diagram from above implemented as AI. This AI can be added to `unit` by calling:
    
    
    unit:AddNewModifier(nil, nil, "modifier_ai", { aggroRange = 600, leashRange = 600 });  
    

I pass in some parameters to the AI behavior when I apply it, allowing for customization per-unit. Keep in mind this modifier is just like any other Lua modifier, so you can execute any code you can also call in regular modifiers.
    
    
    modifier_ai = class({})  
      
    local AI_STATE_IDLE = 0  
    local AI_STATE_AGGRESSIVE = 1  
    local AI_STATE_RETURNING = 2  
      
    local AI_THINK_INTERVAL = 0.5  
      
    function modifier_ai:OnCreated(params)  
        -- Only do AI on server  
        if IsServer() then  
            -- Set initial state  
            self.state = AI_STATE_IDLE  
      
            -- Store parameters from AI creation:  
            -- unit:AddNewModifier(caster, ability, "modifier_ai", { aggroRange = X, leashRange = Y })  
            self.aggroRange = params.aggroRange  
            self.leashRange = params.leashRange  
      
            -- Store unit handle so we don't have to call self:GetParent() every time  
            self.unit = self:GetParent()  
      
            -- Set state -> action mapping  
            self.stateActions = {  
                [AI_STATE_IDLE] = self.IdleThink,  
                [AI_STATE_AGGRESSIVE] = self.AggressiveThink,  
                [AI_STATE_RETURNING] = self.ReturningThink,  
            }  
      
            -- Start thinking  
            self:StartIntervalThink(AI_THINK_INTERVAL)  
        end  
    end  
      
    function modifier_ai:OnIntervalThink()  
        -- Execute action corresponding to the current state  
        self.stateActions[self.state](self)      
    end  
      
    function modifier_ai:IdleThink()  
        -- Find any enemy units around the AI unit inside the aggroRange  
        local units = FindUnitsInRadius(self.unit:GetTeam(), self.unit:GetAbsOrigin(), nil,  
            self.aggroRange, DOTA_UNIT_TARGET_TEAM_ENEMY, DOTA_UNIT_TARGET_ALL, DOTA_UNIT_TARGET_FLAG_NONE,   
            FIND_ANY_ORDER, false)  
      
        -- If one or more units were found, start attacking the first one  
        if #units > 0 then  
            self.spawnPos = self.unit:GetAbsOrigin() -- Remember position to return to  
            self.aggroTarget = units[1] -- Remember who to attack  
            self.unit:MoveToTargetToAttack(self.aggroTarget) --Start attacking  
            self.state = AI_STATE_AGGRESSIVE --State transition  
            return -- Stop processing this state  
        end  
      
        -- Nothing else to do in Idle state  
    end  
      
    function modifier_ai:AggressiveThink()  
        -- Check if the unit has walked outside its leash range  
        if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then  
            self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint  
            self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)  
            return -- Stop processing this state  
        end  
          
        -- Check if the target has died  
        if not self.aggroTarget:IsAlive() then  
            self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint  
            self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)  
            return -- Stop processing this state  
        end  
          
        -- Still in the aggressive state, so do some aggressive stuff.  
        self.unit:MoveToTargetToAttack(self.aggroTarget)  
    end  
      
    function modifier_ai:ReturningThink()  
        -- Check if the AI unit has reached its spawn location yet  
        if (self.spawnPos - self.unit:GetAbsOrigin()):Length() < 10 then  
            self.state = AI_STATE_IDLE -- Transition the state to the 'Idle' state(!)  
            return -- Stop processing this state  
        end  
      
        -- If not at return position yet, try to move there again  
        self.unit:MoveToPosition(self.spawnPos)  
    end  
    

## Your next (more complicated) AI​

This tutorial only covers a very basic concepts for making your first AI, but if you want to extend this here are some more interesting ideas:

  * Since you are using a lua modifier, you do not have to change state in a think function, you can also just register a modifier event listener and change state inside those!
  * Generalize state classes and give each state `OnStateEnter`, `OnStateThink` and `OnStateLeave` functions.
  * You can nest these AIs! You could make the internal behavior of one state be its own AI built in the same way.



[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/simple-neutral-ai.md)

---

## Create Creature AttachWearable Blocks

* [](/)
  * Units
  * Create Creature AttachWearable blocks directly from the keyvalues



# Create Creature AttachWearable blocks directly from the keyvalues

For those still Ctrl+F'ing and copying from [items_game.txt](https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/items/items_game.txt) I bring you the better solution:

First, "Map" the valid wearables from items_game:
    
    
    function MapWearables()  
        GameRules.items = LoadKeyValues("scripts/items/items_game.txt")['items']  
        GameRules.modelmap = {}  
        for k,v in pairs(GameRules.items) do  
            if v.name and v.prefab ~= "loading_screen" then  
                GameRules.modelmap[v.name] = k  
            end  
        end  
    end  
    

Then, there's 2 options:

  * Generate a default set for a hero name (internal `npc_dota_hero_name`)
  * Generate a bundle set, you can use this list for set names: <https://dota2.gamepedia.com/Equipment>



**Usage**

  * For default hero sets, run `GenerateDefaultBlock(hero_name)`
  * For generating a bundle set, run: `GenerateBundleBlock(set_name)`



 **Code, using 4 space indents**
    
    
     function GenerateDefaultBlock( heroName )  
        print("    \"Creature\"")  
        print("    {")  
        print("        \"AttachWearables\" ".."// Default "..heroName)  
        print("        {")  
        local defCount = 1  
        for code,values in pairs(GameRules.items) do  
            if values.name and values.prefab == "default_item" and values.used_by_heroes then  
                for k,v in pairs(values.used_by_heroes) do  
                    if k == heroName then  
                        local itemID = GameRules.modelmap[values.name]  
                        GenerateItemDefLine( defCount, itemID, values.name )  
                        defCount = defCount + 1  
                    end  
                end  
            end  
        end  
        print("        }")  
        print("    }")  
    end  
       
    function GenerateBundleBlock( setname )  
        local bundle = {}  
        for code,values in pairs(GameRules.items) do  
            if values.name and values.name == setname and values.prefab and values.prefab == "bundle" then  
                bundle = values.bundle  
            end  
        end  
      
        print("    \"Creature\"")  
        print("    {")  
        print("        \"AttachWearables\" ".."// "..setname)  
        print("        {")  
        local wearableCount = 1  
        for k,v in pairs(bundle) do  
            local itemID = GameRules.modelmap[k]  
            if itemID then  
                GenerateItemDefLine(wearableCount, itemID, k)  
                wearableCount = wearableCount+1  
            end  
        end  
        print("        }")  
        print("    }")  
    end  
       
    function GenerateItemDefLine( i, itemID, comment )  
        print("            \""..tostring(i).."\" { ".."\"ItemDef\" \""..itemID.."\" } // "..comment)  
    end  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/create-creature-attachwearable-blocks-directly-from-the-keyvalues.md)

---

# Scripting

## Custom Mana System

* [](/)
  * Scripting
  * Custom Mana System



On this page

# Custom Mana System

This is a guide to make a simple custom mana system. A working barebones addon is assumed.

In this example we'll make a classic _Rage_ system, meaning:

  1. No normal mana regeneration, starting mana 0
  2. Gain mana after an attack, scaling with level
  3. Gain mana after being attacked, scaling with level
  4. Gain mana on particular spell cast
  5. Decrease mana over time, scaling with level



Hope this is enough for most systems, let me know if you have another concept that I should add.

##No normal mana regeneration and start mana at 0 The easier approach is to nullify your hero's Intelligence For this you'll need to set the following in your hero definition
    
    
    //KV code inside npc_heroes_custom.txt  
    "AttributeBaseIntelligence" "0" // Base intelligence  
    "AttributeIntelligenceGain" "0" // Intelligence bonus per level.  
      
    "StatusMana"    "50"    // Initial Max Mana  
    "StatsManaRegen"    "0" // Base Mana Regen (KV doesn't like negative numbers here)  
    

If you need to keep your Int stat but still have 0 natural mana regen, you'll need to apply modifiers for each Int point with negative mana regen to compensate.

I won't be following this process in this guide, but you can check the guide [on the wiki](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Using_Bitfields_To_Adjust_Stat_Value_Bonuses)

For your mana to start at 0, we'll begin by making the passive hidden ability which will be the base for our Rage system:
    
    
    //KV code inside npc_abilities_custom.txt  
    "barbarian_rage"  
    {  
        "BaseClass" "ability_datadriven"  
        "AbilityTextureName"    "barbarian_rage"  
        "MaxLevel" "1"  
        "AbilityBehavior"   "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN"  
      
        "Modifiers"  
        {  
            "rage_modifier"  
            {  
                "Passive"   "1" //Auto apply this modifier when the spell is learned  
                "IsBuff"    "1" //Display as a green modifier  
                "IsHidden"  "0" //Show in the UI  
      
                "OnCreated"  
                {  
                    "RunScript"  
                    {  
                        "ScriptFile"    "barbarian.lua"  
                        "Function"  "ZeroManaOnSpawn"  
                    }  
                }  
            }  
        }  
    }  
    

This requires a barbarian.lua script inside _your_addon/scripts/vscripts_ folder. The script is very simple:
    
    
     -- lua code inside barbarian.lua  
        function ZeroManaOnSpawn( event )  
            local hero = event.caster  
            Timers:CreateTimer(.01, function()  
            -- Set Mana to 0 on created  
            hero:SetMana(0)  
        end)  
     end  
    

We need to do a wait a bit for the hero to be properly spawned else it might fail. Notice the use of [BMD's Timers](https://github.com/bmddota/barebones/blob/source2/game/dota_addons/barebones/scripts/vscripts/timers.lua).

###Before we continue: Right now our spell is not even available on the hero, and we want it to be learned when we spawn. For this we'll need to add the following in our `OnHeroInGame` _listener (_ function hook of npc_spawned, see [barebones Event Hooks](https://github.com/bmddota/barebones/blob/source2/game/dota_addons/barebones/scripts/vscripts/barebones.lua#L443) )
    
    
    -- lua code inside OnHeroInGame(hero)  
    local heroName = hero:GetUnitName()  
    if heroName == "npc_dota_hero_beastmaster" then  
        -- Add the spell  
        hero:AddAbility("barbarian_rage")  
        -- Level it up  
        hero:FindAbilityByName("barbarian_rage"):SetLevel(1)  
    end  
    

The if is not exactly neccessary but you'll need to filter your desired hero somehow. We'll use Beastmaster for our example

## Gain mana after an attack, scaling with level​

Our rage_modifier block gains another modifier event:
    
    
    "OnAttackLanded"  
    {  
        "RunScript"  
        {  
            "ScriptFile"    "barbarian.lua"  
            "Function"  "ManaOnAttack"  
        }  
    }  
    

I'll use a basic formula for it, which gives a base mana per attack but also scales with levels slightly. Keep in mind this function is used for a 200 hero level system, so if you have something different of bigger mana costs, you need to adjust to your liking.
    
    
    -- lua code inside barbarian.lua  
    function ManaOnAttack( event )  
        local hero = event.caster  
        local level = hero:GetLevel()  
      
        hero:GiveMana(0.01 * level + 3)  
    end  
    

## Gain mana after being attacked, scaling with level​

Our modifier block gains another modifier event:
    
    
    "OnAttacked"  
    {  
       "RunScript"  
        {  
            "ScriptFile"    "barbarian.lua"  
            "Function"  "ManaOnAttacked"  
        }  
    }  
    

Same as before, another different formula can be used, we will give a bit less mana on attacked
    
    
    function ManaOnAttacked( event )  
       local hero = event.caster  
       local level = hero:GetLevel()  
      
       hero:GiveMana(0.01 * level + 0.4)  
    end  
    

## Gain mana on particular spell cast​
    
    
    "OnSpellStart"  
    {  
        "RunScript"  
        {  
            "ScriptFile"    "barbarian.lua"  
            "Function"  "leap"  
        }  
    }  
    

Then in your lua spell script we need to have this somewhere:
    
    
    local manaGain = event.ability:GetSpecialValueFor("mana_gain")  
    event.caster:GiveMana(manaGain)  
    

This will take your "mana_gain" from AbilityValues, in my leap example it would be:
    
    
    "AbilityValues"  
    {  
      "mana_gain" "8 16 25 35 47 60 72 85"  
    }  
    

## Decrease mana over time, scaling with level​

In the beginning we had set our StatsManaRegen to 0. This is done to properly control the mana regen dinamically in our main lua file

Base Mana Regen will need to be updated when the hero spawns `OnHeroInGame`, and then each time he levels up `OnPlayerLevelUp` if we want it to scale.

For this we create a local function somewhere inside our main addon lua file and call it whenever we need (at least once `OnHeroInGame`):
    
    
    function AdjustWarriorClassMana( hero )  
        Timers:CreateTimer(0.1,function()  
            local heroLevel = hero:GetLevel()  
            -- Adjust the new mana regen  
            hero:SetBaseManaRegen( -(0.01 * heroLevel) - 0.25)  
        end)  
    end  
      
    

With this, our hero's mana will decrease over time by ~0.3 and slightly faster on higher levels.

I hope I covered everything and kept a middle ground explanation style for those who are new to scripted abilities, without boring those who aren't.

Thanks for reading, feel free to ask any questions or discuss variations of mana systems.

Check the original complete file scripts in TBR Github

  * [main lua scripts](https://github.com/Aleteh/TBR3/blob/master/scripts/vscripts/tbr.lua)

  * [barbarian lua scripts](https://github.com/Aleteh/TBR3/blob/master/scripts/vscripts/abilities/barbarian.lua)

  * [heroes_custom file](https://github.com/Aleteh/TBR3/blob/master/scripts/npc/npc_heroes_custom.txt)

  * [abilities file](https://github.com/Aleteh/TBR3/blob/master/scripts/npc/npc_abilities_custom.txt)




[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/custom-mana-system.md)

---

## Item Restrictions & Requirements

* [](/)
  * Scripting
  * Item Restrictions & Requirements



On this page

# Item Restrictions & Requirements

This implements the following mechanic:

### 1\. Key Values Table​

First create a text file to write down your item properties. File Name, extension and path can be anything as long as the file structure is a proper table.

For this example, we will use this path: **scripts** / **maps** / **item_info**.kv
    
    
    "Items"  
    {  
        "item_name_here" //change it to a custom items  
        {  
            "levelRequired" "10"  
            "classRequired" "Warrior"   
        }  
      
        "item_other_name_here"   
        {  
            "levelRequired" "25"  
        }  
    }  
    

To load a table into your game mode, you need to use the `LoadKeyValues( "path/to/file" ) lua function. This can be called at GameMode:InitGameMode() inside your main lua addon. GameMode = self
    
    
    self.ItemInfoKV = LoadKeyValues( "scripts/maps/item_info.kv" )   
    

If your table is badly formed (e.g. you missed a quotation mark or a bracket), this will fail and you'll get a lua console error when starting the game.

Note how I didn't add a "classRequired" to the 2nd item. When trying to access the `GameMode.ItemInfoKV[itemNane].classRequired` value will be nil, meaning there is no restriction on class (but still checks the level)

There are many ways to set a class, the most basic one is indexing `.class` in the hero handle the first time the hero is in game (using the barebones.lua default calls)
    
    
    function GameMode:OnHeroInGame(hero)  
      
        if heroName == "npc_dota_hero_axe" then  
            hero.class = "Warrior"  
            print("Axe is ready!")  
        end  
          
    end  
    

### 2\. OnEquip Ability Event​

Add this datadriven event on every item that needs to do a check for restrictions. It calls a lua script to do the logic check against the table.

This is needed because the listener for inventory changed is broken, and the Lua `OnItemPickedUp` event hook doesn't account for someone dragging an item into another players inventory.
    
    
    "OnEquip"   
    {     
        "RunScript"  
        {  
            "ScriptFile"    "items.lua"  
            "Function"  "ItemCheck"  
        }  
    }  
    

### 3\. Lua Script​

In this example, I'll look for Level and Class requirements

Make use of the [CustomError Flash UI by zedor](https://github.com/zedor/CustomError) to display a red error message when the item doesn't met any criteria found in the table.

There are some `DeepPrintTable` and `print` to check that the table is being reviewed as you expect.
    
    
    function ItemCheck( event )  
        local itemName = event.ability:GetAbilityName()  
        local hero = EntIndexToHScript( event.caster_entindex )  
        local itemTable = GameMode.ItemInfoKV[itemName]  
        print("Checking Restrictions for "..itemName)  
        DeepPrintTable(itemTable)  
      
        -- if there is no subtable for this item, end this script  
        if itemTable == nil then  
            return true  
        end  
      
        -- This timer is needed because OnEquip triggers before the item actually being in inventory  
        Timers:CreateTimer(0.1,function()  
            -- Go through every item slot  
            for itemSlot = 0, 5, 1 do   
                local Item = hero:GetItemInSlot( itemSlot )  
                -- When we find the item we want to check  
                if Item ~= nil and itemName == Item:GetName() then  
                    DeepPrintTable(Item)  
      
                    -- Check Level Restriction  
                    if itemTable.levelRequired then  
                        print("Name","Level Req","Hero Level")  
                        print(itemName,itemTable.levelRequired,hero:GetLevel())  
                        -- If the hero doesn't met the level required, show message and call DropItem  
                        if itemTable.levelRequired > hero:GetLevel() then  
                            FireGameEvent( 'custom_error_show', { player_ID = pID, _error = "You need level "..itemTable.levelRequired.." to use this." } )  
                            DropItem(Item, hero)  
                        end   
                    end  
      
                    -- Check Class Restriction  
                    if itemTable.classRequired then  
                        print("Name","Class Req","Hero Class")  
                        print(itemName,itemTable.classRequired,hero.class)  
                        -- If the item is for an specific class, message and drop  
                        if itemTable.classRequired ~= hero.class then  
                            FireGameEvent( 'custom_error_show', { player_ID = pID, _error = "Requires ".. hero.class .." to use." } )  
                            DropItem(Item, hero)  
                        end  
                    end  
                end  
            end  
        end)  
    end  
      
    function DropItem( item, hero )  
        -- Error Sound  
        EmitSoundOnClient("General.CastFail_InvalidTarget_Hero", hero:GetPlayerOwner())  
      
        -- Create a new empty item  
        local newItem = CreateItem( item:GetName(), nil, nil )  
        newItem:SetPurchaseTime( 0 )  
      
        -- This is needed if you are working with items with charges, uncomment it if so.  
        -- newItem:SetCurrentCharges( goldToDrop )  
      
        -- Make a new item and launch it near the hero  
        local spawnPoint = Vector( 0, 0, 0 )  
        spawnPoint = hero:GetAbsOrigin()  
        local drop = CreateItemOnPositionSync( spawnPoint, newItem )  
        newItem:LaunchLoot( false, 200, 0.75, spawnPoint + RandomVector( RandomFloat( 50, 150 ) ) )  
          
        --finally, remove the item  
        hero:RemoveItem(item)  
    end  
      
    

* * *

Leave your questions or suggestions below.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/item-restrictions-requirements.md)

---

## Item Drop System

* [](/)
  * Scripting
  * Item Drop System



On this page

# Item Drop System

Here I'll go over the implementation of a flexible item drop system for any sort of gamemode, mostly useful for RPGs.

There are multiple ways to do this, for example [Warchasers uses a pure datadriven system](https://github.com/MNoya/Warchasers/blob/master/scripts/npc/npc_abilities_custom.txt#L3687-L5667) that goes over 2 thousand lines of abilities, each one for a different drop type... yeah you don't want to do that 😅 

The best way for this is to have a text file to configure what items can drop from each unit, how many, its chances, etc, then whenever a unit dies, if it has an entry for item drops, handle the chances and drops accordingly, with a couple of choices that can be further extended if necessary.

* * *

### 1\. Key Values Table​

I recommend having a _kv_ folder under scripts to store this and other similar table files. The file can have any extension, but using _.kv_ is a good convention.
    
    
    "Drops"   
    {   
        "creature_name1"  
        {   
            "item_name1" "10"  
            "item_name2" "50"  
            "item_name3" "100"  
        }  
    }  
    

This table will set a creature to drop the first item with 10% chance, 50% on the second, and the third item will be dropped every time.

After saving and naming the file, this table has to be loaded in Lua, ideally in the initialization of the game mode, using the `LoadKeyValues("relative/path/to/file")` this way:
    
    
    GameRules.DropTable = LoadKeyValues("scripts/kv/item_drops.kv")  
    

In this initial version, each item drop chance is independent from the others. From the same creature there might be 1 drop, all of them, or none (if the chances are all less than 100). This behavior will be expanded later to provide some of the classic drop options.

### 2\. OnEntityKilled Lua Event​

Simply listen to `entity_killed` and call a custom RollDrops function with the killed unit as a parameter.
    
    
    ListenToGameEvent('entity_killed', Dynamic_Wrap(GameMode, 'OnEntityKilled'), self)  
    
    
    
    function GameMode:OnEntityKilled( keys )  
        local killedUnit = EntIndexToHScript( keys.entindex_killed )  
        if killedUnit:IsCreature() then  
            RollDrops(killedUnit)  
        end  
    end  
    

### 3\. RollDrops Lua Script​

Now given the subtable of the unit name contained in the main Drop Table, if it exists, iterate over the elements rolling each chance value.

If the Roll succeeds, proceed to create an item handle with the name, and `LaunchLoot` it with some fancy parameters (could also just use a `CreateItemOnPositionSync` to drop the item instantly at the death position)
    
    
    function RollDrops(unit)  
        local DropInfo = GameRules.DropTable[unit:GetUnitName()]  
        if DropInfo then  
            for item_name,chance in pairs(DropInfo) do  
                if RollPercentage(chance) then  
                    -- Create the item  
                    local item = CreateItem(item_name, nil, nil)  
                    local pos = unit:GetAbsOrigin()  
                    local drop = CreateItemOnPositionSync( pos, item )  
                    local pos_launch = pos+RandomVector(RandomFloat(150,200))  
                    item:LaunchLoot(false, 200, 0.75, pos_launch, nil)  
                end  
            end  
        end  
    end  
    

### 4\. Extending the solution to allow multiple drops of the same item​

The way Lua KV tables work, it's not possible to have more than 1 of the same index, so if we were to add 2 "item_name1" entries both with some chance value, LoadKeyValues would fail.

To get around this, the table has to use another level and have each possible item drop of the unit be a table by itself:
    
    
    "Drops"   
    {   
        "creature_name1"  
        {   
            "1"  
            {  
                "Item"     "item_name1"  
                "Chance"   "10"  
                "Multiple" "3"  
            }  
            "2"  
            {  
                "Item"     "item_name2"  
                "Chance"   "50"  
                "Multiple" "1"  
            }  
        }  
    }  
    

This structure along with the Multiple value will allow an item to be dropped more than once from the same creature. _"Multiple" "1"_ will just be 1 drop max.

The RollDrops function needs to be adjusted to read the subtables and the Item/Chance in a slightly different way:
    
    
    function RollDrops(unit)  
        local DropInfo = GameRules.DropTable[unit:GetUnitName()]  
        if DropInfo then  
            for k,ItemTable in pairs(DropInfo) do  
                local chance = ItemTable.Chance or 100  
                local max_drops = ItemTable.Multiple or 1  
                local item_name = ItemTable.Item  
                for i=1,max_drops do  
                    if RollPercentage(chance) then  
                        print("Creating "..item_name)  
                        local item = CreateItem(item_name, nil, nil)  
                        item:SetPurchaseTime(0)  
                        local pos = unit:GetAbsOrigin()  
                        local drop = CreateItemOnPositionSync( pos, item )  
                        local pos_launch = pos+RandomVector(RandomFloat(150,200))  
                        item:LaunchLoot(false, 200, 0.75, pos_launch, nil)  
                    end  
                end  
            end  
        end  
    end  
    

The 'or 100' and 'or 1' are just to make sure that if the "Chance" or "Multiple" lines are missing, a default value ('drop always' and 'drop 1') will be used.

### 5\. Extending to "100% drop one of these"​

Sometimes doing "50% of item 1 and 50% of item 2" is too random, because it will mean sometimes a mob will drop nothing, and sometimes it might drop 2. In order to reduce the randomness and ensure a certain combination of items will drop, the most common approach is to have a set list of possible drops, and make it so that the unit will drop only one of that set at random.

To do this, instead of tying a single item to each item table, there will be yet another table of the { possible Set of items } that we want this creature to drop:
    
    
    "Drops"   
    {   
        "creature_name1"  
        {   
            "1"  
            {  
                "ItemSets"  
                {  
                    "1" "item_name_set1"  
                    "2" "item_name_set2"  
                    "3" "item_name_set3"  
                }  
                "Chance"   "100" //of dropping 1 of the set  
            }  
            "2"  
            {  
                "Item"     "item_name2"  
                "Chance"   "50"  
                "Multiple" "3"  
            }  
        }  
    }  
    

The ItemSets entry could also have a "Multiple" kv if we wanted an scenario like "2 of these 3", but this can't guarantee that the 2nd roll won't drop the same item than the first, if it did.

And the RollDrops now looks like this:
    
    
    function RollDrops(unit)  
        local DropInfo = GameRules.DropTable[unit:GetUnitName()]  
        if DropInfo then  
            print("Rolling Drops for "..unit:GetUnitName())  
            for k,ItemTable in pairs(DropInfo) do  
                -- If its an ItemSet entry, decide which item to drop  
                local item_name  
                if ItemTable.ItemSets then  
                    -- Count how many there are to choose from  
                    local count = 0  
                    for i,v in pairs(ItemTable.ItemSets) do  
                        count = count+1  
                    end  
                    local random_i = RandomInt(1,count)  
                    item_name = ItemTable.ItemSets[tostring(random_i)]  
                else  
                    item_name = ItemTable.Item  
                end  
                local chance = ItemTable.Chance or 100  
                local max_drops = ItemTable.Multiple or 1  
                for i=1,max_drops do  
                    print("Rolling chance "..chance)  
                    if RollPercentage(chance) then  
                        print("Creating "..item_name)  
                        local item = CreateItem(item_name, nil, nil)  
                        item:SetPurchaseTime(0)  
                        local pos = unit:GetAbsOrigin()  
                        local drop = CreateItemOnPositionSync( pos, item )  
                        local pos_launch = pos+RandomVector(RandomFloat(150,200))  
                        item:LaunchLoot(false, 200, 0.75, pos_launch, nil)  
                    end  
                end  
            end  
        end  
    end  
    

* * *

#### Example​

[item_drops.kv file at TBR](https://github.com/Aleteh/TBR3/blob/master/game/dota_addons/theblackroad3/scripts/kv/item_drops.kv)

Leave any questions or suggestions below

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/item-drop-system.md)

---

## Making RPG-like Looting Chest

* [](/)
  * Scripting
  * Making a "rpg-like" looting chest



# Making a "rpg-like" looting chest

Hello , it's the first time i'm making a tutorial here (and on lua too) I was working on this for the last 2 day for my mod , an I didn't seen something similar for now So today i'll teach you how to make a chest you must open , and then you can obtain item or gold from it (or anything you want idc)

first off , you need to create you chest item in npc_item_custom.txt :
    
    
    "item_chest"  
        {  
            // General  
            //-------------------------------------------------------------------------------------------------------------  
            "ID"                            "1282"                                                      // Here put a unused ID.  
            "AbilityBehavior"               "DOTA_ABILITY_BEHAVIOR_CHANNELLED|DOTA_ABILITY_BEHAVIOR_NO_TARGET" // here we define it as a channeled item  
            "BaseClass"                     "item_datadriven"  
            "AbilityTextureName"            "item_present" //Here goes the texture name of the item  
            "ItemShareability"              "ITEM_FULLY_SHAREABLE" // make everyone able to use it  
            "Model"                         "models/props_winter/present.vmdl"  
            "ItemKillable"                  "0" // the chest can't be destroyed when on ground  
            "ItemSellable"                  "0" // can't be sold at a shop  
            "ItemPurchasable"               "0" //can't be purchased  
            "ItemDroppable"                 "1" // can be put on the ground (set it to 0 if you don't want allow the player to  
            "ItemCost"                      "99999"   
            "ItemQuality"                   "artifact"  
            "ItemDeclarations"              "DECLARE_PURCHASES_TO_TEAMMATES | DECLARE_PURCHASES_IN_SPEECH | DECLARE_PURCHASES_TO_SPECTATORS"  
            "AbilityCooldown"               "1.0" //time before the player can open another chest  
            "AbilityChannelTime"            "1.0" //time the player must channel to open the chest  
              
      
      
            "OnChannelSucceeded"  
            {  
                "RunScript"  
                {  
                    "ScriptFile"            "lua_datadriven/chest.lua" //create a folder named lua_item in "your_game_mode\scripts\vscripts" and create a text file called chest.lua  
                    "Function"              "chest_open" // here we call the function  
                    "chest_name"                "chest_1" // here you can give a name to this chest in case you want more than 1 chest type   
                    "gold"              "1" // does this chest give gold or only item ? (0 = no gold , 1 = gold instead of item , 2 = gold + item)  
                    "gold_amt"              "1500" // how many gold the chest give if it give out  
                    "gold_rand"             "250" // if you want gold to be random  
      
                }  
            }  
        }  
    

then your script in lua_datadriven/chest.lua 
    
    
    function chest_open(keys)  
        local item_list = LoadKeyValues("scripts/kv/chest_result.kv") --Here we load a kv file where we will put all the item you can find in chest  
        local caster = keys.caster  
        local Player_ID = caster:GetPlayerOwnerID()   
        local item = keys.ability  
        local gold = 0  
        if keys.gold >0 then  
            gold = keys.gold_amt + math.random(-(keys.gold_rand),(keys.gold_rand))  
        end  
        caster:RemoveItem(item)--Here we remove the chest  
        local chest_name = keys.chest_name  
      
        item_list = item_list[chest_name] --he we load the item list specific to this chest  
        --DeepPrintTable (item_list) --undo the commentary to check if your item_list is right  
        local len = 0  
        for k,v in pairs( item_list ) do  
            len = len + 1  
        end  
        local item_number = 0  
        if keys.gold == 1 then  
            item_number = math.random(1,(len + 1)) --here we determine the item number (soo here we chose the item), the +1 is to add the gold chance in ,you can change it to 2 or more if you want gold to have higger change of appear  
        else  
            item_number = math.random(1,len)  
        end  
        if item_number > len then --in case the player obtaine gold instead of item  
               PlayerResource:ModifyGold(Player_ID, gold, true, 0 )   
        else  
            local item_name = item_list[tostring(item_number)] -- i know it could be better , but i'm not realy used to kv  
            local item_reward = CreateItem( item_name, caster, caster )  
            caster:AddItem(item_reward)  
            if keys.gold == 2 then  
                PlayerResource:ModifyGold(Player_ID, gold, true, 0 )   
            end  
        end  
    end  
    

and finaly we create our kv file where we put all the item for each chest "scripts/kv/chest_result.kv"
    
    
    "put_the_name_you_wanna"   
    {   
        "chest_1"  
        {   
            "1" "item_assault"  
            "2" "item_desolator"  
            "3" "item_sange_and_yasha"     
            "4" "item_butterfly"  
        }  
        "chest_2"  
        {   
            "1" "item_youritem"  
        }  
    }  
    

Now you can easely make a chest for your rpg game :D If you want to make the chest loot on enemy death , look this another tutorial from Noya about an [item drop system](https://moddota.com/scripting/item-drop-system)

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/making-a-rpg-like-looting-chest.md)

---

## Scripted Shop Spawning

* [](/)
  * Scripting
  * Scripted Shop Spawning



On this page

# Scripted Shop Spawning

A feature commonly asked about is how to dynamically create shops. Turns out it's actually quite easy! Here's what to do.

## Step 1​

You need to create the triggering area for your shop in hammer. Use the block tool ( **ctrl+b** ) to draw the triggering area you want for the shop, you can change the shape in the block tool to whatever you need.

Draw the area somewhere off the map. You don't want players randomly stumbling across it.

## Step 2.​

Turn the block into a entity by selecting it and pressing **ctrl+t**. Change the entity class to trigger_shop and give it a name. Also filter materials and find the trigger material, drag it onto the block. Finally set the shop type at the bottom. It should now look like this ![ShopInHammer](https://i.imgur.com/XqzWA3I.jpg). When that's done rebuild the map.

## Step 3.​

Now simply add the following code to create a shop at your desired location! I added this to OnConstructionCompleted in building helper.
    
    
    local shopEnt = Entities:FindByName(nil, "my_new_shop") -- entity name in hammer  
    local newshop = SpawnEntityFromTableSynchronous('trigger_shop', {origin = unit:GetAbsOrigin(), shoptype = 1, model=shopEnt:GetModelName()}) -- shoptype is 0 for a "home" shop, 1 for a side shop and 2 for a secret shop  
    

Example:

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/scripted-shop-spawning.md)

---

## Lava Damage

* [](/)
  * Scripting
  * Lava damage



# Lava damage

Hello, this is a small tutorial giving back to the awesome Moddota community.

Today we going to create Lava area when a hero step on that lava he will get damaged per sec until he die.

 **First you need to create a block and assign trigger texture to it**

First press Shift+B and drag your desired box for the lava area.

Once you've created your Block, we have to assign it a trigger material.  
This can be done by going to the material library and name filtering "trigger", then drag and drop this material onto the block.  
It should change to the specified (trigger) material.

Then convert the mesh to Entity by pressing Ctrl+T or find the `Outliner` => Right Click => Selected Meshes => Tie to Entity. Afterwards, name it plus assign this Entity script to lavatrigger.lua <\-- you can name it whatever you want.

![](https://i.imgur.com/5eZycip.png)

Next we go to Outputs tabs in top and click on it add the following in the picture.

![](https://i.imgur.com/nvr9nhv.png)

Now go to your vscript folder and create a file called lavatrigger.lua and put this script inside.
    
    
    LAVA_MODIFIER_NAME = "lava_modifier"  
    LAVA_DAMAGE_AMOUNT = 10  
      
    lava_modifier = lava_modifier or class({})  
      
    local LAVA_DAMAGE_TICK_RATE = 0.5  
      
    function lava_modifier:IsHidden()  
        return true  
    end  
      
    function lava_modifier:IsPurgable()  
        return false  
    end  
      
    function lava_modifier:IsDebuff()  
        return false  
    end  
      
    function lava_modifier:DeclareFunctions()  
        local funcs = {}  
        return funcs  
    end  
      
    -- Modifiers exist both on server and client, so take care what methods you use  
    function lava_modifier:OnCreated()  
        if IsServer() then  
            self:SetStackCount(0)  
            self:StartIntervalThink(LAVA_DAMAGE_TICK_RATE)  
        end  
    end  
      
    function lava_modifier:OnIntervalThink()  
        if IsServer() then  
            if self:GetStackCount() > 0 then  
                local ent = self:GetCaster()  
                local damageTable = {  
                    victim = ent,  
                    attacker = ent,  
                    damage = LAVA_DAMAGE_AMOUNT,  
                    damage_type = DAMAGE_TYPE_PURE,  
                }  
                ApplyDamage(damageTable)  
            end  
        end  
    end  
      
    LinkLuaModifier(LAVA_MODIFIER_NAME, "lavatrigger", LUA_MODIFIER_MOTION_NONE)  
      
    function applyLava(trigger, delta)  
        if not IsServer() then  
            return  
        end  
      
        local ent = trigger.activator  
      
        if not ent then  
            return  
        end  
        if not ent:HasModifier(LAVA_MODIFIER_NAME) then  
            ent:AddNewModifier(ent, nil, LAVA_MODIFIER_NAME, nil)  
        end  
        local originalStacks = ent:GetModifierStackCount(LAVA_MODIFIER_NAME, nil)  
        local newStacks = originalStacks + delta  
        ent:SetModifierStackCount(LAVA_MODIFIER_NAME, ent, newStacks)  
    end  
      
    function lavaEnter(trigger)  
        applyLava(trigger, 1)  
    end  
      
    function lavaExit(trigger)  
        applyLava(trigger, -1)  
    end  
    

You should be done!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/lava-damage.md)

---

## Using Dota Filters

* [](/)
  * Scripting
  * Using the order filter and other filters



On this page

# Using the order filter and other filters

## Filters in general​

This tutorial explains the use of the different filter functions currentlly in the API, and illustrates this using a small example in the order filter.

There are currently 9 filters available in the lua API, namely:

  *  **AbilityTuningFilter** \- Filters abilities and all values they use on cast.
  *  **BountyRunePickupFilter** \- Filters bounty rune pickups.
  *  **DamageFilter** \- Filters damage events.
  *  **ExecuteOrderFilter** \- Filters orders (usually given by players).
  *  **ModifierGainedFilter** \- Filters modifiers events when they are first applied to a unit.
  *  **ModifyExperienceFilter** \- Filters modifications of experience.
  *  **ModifyGoldFilter** \- Filters modifications of gold.
  *  **RuneSpawnFilter** \- Filters rune spawns.
  *  **TrackingProjectileFilter** \- Filters tracking projectile launches.



These filters are set using functions like `CDOTABaseGameMode:SetExecuteOrderFilter(function, context)`, check the [API declarations](https://github.com/TypeScriptToLua/Dota2Declarations/blob/master/dota-api.d.ts#L1193) for the exact function name for each function. The filters can then be cleared again using functions like `CDOTABaseGameMode:ClearExecuteOrderFilter()` and similar functions - again, see the [API declarations](https://github.com/TypeScriptToLua/Dota2Declarations/blob/master/dota-api.d.ts#L1193) .

## The general idea​

 **(This is the most important section of this entire tutorial)**

The Source 2 engine listens for events, either generated by players or units in the game. The engine has a lot of handlers that determine what to do when a certain event is received. Filters get to look at these events before they reach the engine and have the opportunity to decide not to deliver the event, or maybe to deliver a modified version of the event.

An analogy to explain this is that of a company receiving mail. The regular situation would be the company(the engine) receiving mail (events) and reading them as usual. Now imagine a new secretary is hired(the filter) that reads every letter received and decides if the letter is important enough to be handled or not. This system is illustrated in the following picture:

![Filtering visualized](https://i.imgur.com/Op4u0Oa.png)

## Filters in Lua​

So now we know how filters work, how do we use them. This explanation will use the `ExecuteOrderFilter`, keep in mind that all filters use the same basic idea.

The first step is to set the filter using the `CDOTABaseGameMode:SetExecuteOrderFilter(function, context)` API call. Let's analyze what this function expects. There are two parameters:

 **Parameter: function** \- The filter function. This function is your actual filter. It is called every time the event you are filtering is called (in this case when an order arrives). The filter function receives two parameters: **self** and **event**. The **self** parameter is just the context of the function (and is hidden if you use Dynamic_Wrap and the : operator). The really interesting parameter is the **event** parameter. This parameter contains all the data of the event. Your filter function should look at this function and make a decision. There are three possible outcomes:

  1. You want to do nothing and accept the event, you `return true`.
  2. You want to reject the event, it will be like this event never happened, `return false`.
  3. You want to accept the event with some changes, all you have to do **modify the event table** and `return true`.



 **Parameter: context** \- This parameter is what is passed into the filter function as **self**.

## Example 1: Disabling glyph​

Time to put into practice what we just used. We know the glyph is an order given by a player, so we should use the order filter to disable it. All we have to do is find any glyph orders and return false. Of course you can add any restriction you want based on the contents of the event parameter. Just `DeepPrintTable( event )` to see what data is available to you.

To check which order types there are, look at the [API](https://moddota.com/api/#!/vscripts/dotaunitorder_t).

Note that in this example the : operator on `GameMode:OrderFilter` hides the first (`self`) parameter.
    
    
    --First set the filter to start catching events, usually this is in your init  
    GameRules:GetGameModeEntity():SetExecuteOrderFilter(Dynamic_Wrap(GameMode, "OrderFilter"), self)  
      
    --......................  
      
    --Add the order filter to your game mode entity  
    function GameMode:OrderFilter(event)  
        --Check if the order is the glyph type  
        if event.order_type == DOTA_UNIT_ORDER_GLYPH then  
            return false  
        end  
      
        --Return true by default to keep all other orders the same  
        return true  
    end  
    

## Example 2: Order modification​

This example mimics a sort of 'drunk' state of a unit by adding a random offset to any movement orders. The code is pretty easy, all you have to do is modify the incoming order and return true.
    
    
    --First set the filter to start catching events, usually this is in your init  
    GameRules:GetGameModeEntity():SetExecuteOrderFilter(Dynamic_Wrap(GameMode, "OrderFilter"), self)  
      
    --......................  
      
    --Add the order filter to your game mode entity  
    function GameMode:OrderFilter(event)  
        --Check if the order is the glyph type  
        if event.order_type == DOTA_UNIT_ORDER_MOVE_TO_POSITION then  
            local offsetVector = RandomVector(100)  
            event.position_x = event.position_x + offsetVector.x  
            event.position_y = event.position_y + offsetVector.y  
            return true  
        end  
      
        --Return true by default to keep all other orders the same  
        return true  
    end  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/using-dota-filters.md)

---

## Particle Attachment

* [](/)
  * Scripting
  * Particle Attachment



On this page

# Particle Attachment

## Particle Types​

Each particle system in Dota is designed for a certain purpose, for example: 

  * Buff/Debuff or Ambient effect
  * Explosions and other limited-time effects
  * Circle AoE Indicators
  * Line Indicators
  * Projectiles (Linear or Tracking)
  * Others



When attempting to use some of the available particles, keep in mind what was the original behavior of it.

For example if you try to use a projectile particle as a buff, or an explosion as a projectile, you will get disastrous or just no effect at all.

You can browse particles in the asset browser, for filtering just write keywords like "particle" or "vpcf".

Also every time you use a particle, remember to add them in a datadriven precache block on the ability:
    
    
    "precache"  
    {  
        "particle"  "particles/units/heroes/hero_magnataur/magnataur_shockwave.vpcf"  
    }  
    

Else you won't see them unless they belonged originally to the hero that is casting them.

## Parents and Childs​

A Parent Particle is indicated by a P in the Asset Broswer.

![img](https://puu.sh/esM9P/998defaf12.jpg)

You normally want to use a Parent because it will show the complete particle effect. Childs are harder to display and might not show or display properly.

![img](https://puu.sh/esz6V/b4912e2ca5.png)

Copy this entire path for the particleName

## Attachments​

Particles need to be Attached to some entity location to begin its behavior. This can be as easy as a single `"Target" "TARGET"` line, or contain many weird attach points that you will need to discover through numerous trial and error attempts.

Here is a list of every attach type, in order of importance/relevance. 

Constant| String| Attachment Description  
---|---|---  
PATTACH_ABSORIGIN_FOLLOW| follow_origin| Follows the movement of the target at its origin location  
PATTACH_OVERHEAD_FOLLOW| follow_overhead| Follows the movement of the target over its head  
PATTACH_ABSORIGIN| attach_origin| Starts at the origin of the target and stays there  
PATTACH_POINT| attach_hitloc| Normally the body of the model, where the attack projectiles hit  
PATTACH_POINT_FOLLOW| follow_hitloc| Follows the body  
PATTACH_CUSTOMORIGIN| start_at_customorigin| Enables the attachment to a custom origin  
PATTACH_CUSTOMORIGIN_FOLLOW| follow_customorigin| Follow the movement of the custom origin set  
PATTACH_WORLDORIGIN| world_origin| Targets a Point entity in the world, use with "TargetPoint" key  
PATTACH_EYES_FOLLOW| follow_eyes| Fills the screen, used for the damage stun or arcana drop indicator.  
PATTACH_POINT_FOLLOW_SUBSTEPPED| follow_attachment_substepped|   
PATTACH_RENDERORIGIN_FOLLOW| follow_renderorigin|   
PATTACH_ROOTBONE_FOLLOW| follow_rootbone|   
Attach to an specific bone| attach_attack1| You can check these by opening the hero VMDL file in the Model Editor.  
-| start_at_origin|   
-| start_at_attachment|   
-| follow_attachment|   
  
Basically the engine will try to find the "bone" or attach point and type of the constant/string used, if the model has it and the particle is designed to properly attach to that point you will get a nice behavior. 

Numerous times when dealing with complex particle systems you will get errors like:

  * Particle childs showing at the Vector (0,0,0). 
    * This is what normally happens when you miss a Control Point (explained later)
  * Effect appearing in a different position than expected. 
    * Wrong attachment or particle can't attach that place.



## Control Points​

Control points are x,y,z values that are used to set the particle to a target entity location or a vector for radius, color, duration, speed, etc.

It's easier to understand them with examples, so we'll move through some basic particles that don't need specific control points and then see some that need them to display properly.

### Decompiled Particles​

With Reborn, now the default dota particles can be opened directly with the Particle Editor and make copies of them. Read more about this on the wiki in [Particle Copy Tool](https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Particle_Copy_Tool)

## Examples​

### 1\. Simple buff particles, datadriven​

This type of particles is the easiest to attach. They are tied to a modifier and automatically stop after the modifier is destroyed.

For this to, the particle system duration usually needs to be infinite, designed as a simple buff, internally they have a single control point which is set with the `EffectAttachType` key.

 **Example**
    
    
     "modifier_borrowed_time"  
    {  
        "EffectName" "particles/units/heroes/hero_abaddon/abaddon_borrowed_time.vpcf"  
        "EffectAttachType" "follow_origin"  
      
        "StatusEffectName" "particles/status_fx/status_effect_abaddon_borrowed_time.vpcf"  
        "StatusEffectPriority" "15"  
    }  
    

Status Effects are a particular type of particle that is generally applied to change the texture color of the hero, for things like illusions, ghosts, etc.

### 2\. Basic attachment​

When you want more than one particle attached to a modifier or the particle needs additional control points, you need to do it in a `"FireEffect"` or `"AttachEffect"` block instead.
    
    
    "modifier_stampede"  
    {  
        "OnCreated"  
        {  
            "AttachEffect"  
            {  
                "EffectName" "particles/units/heroes/hero_centaur/centaur_stampede_overhead.vpcf"  
                "EffectAttachType" "follow_overhead"  
                "Target" "TARGET"  
            }  
        }  
    }  
    

`"Target"` uses the same target rules as any datadriven block

### 3\. Control Points​

When the easy attachment procedure fails, it means the particle has Control Points to control certain properties like radius, position of multiple elements, color, etc.

To know what each CP controls, you need to open the particle in the Particle Editor. Now you will be able to double click any of the copied particles in the Asset Browser and try to understand how to set each CP

Control Points can be either set in the datadriven `"AttachEffect"` or in lua. Doing it in Lua has the advantage that you can dynamically reload the control points by doing script_reload after changing the code.

#### 3.1 Lua Particle Attachment with `SetParticleControl`​

 **Example**
    
    
     local particle = ParticleManager:CreateParticle("particles/units/heroes/hero_omniknight/omniknight_purification.vpcf", PATTACH_ABSORIGIN_FOLLOW, target)  
    ParticleManager:SetParticleControl(particle, 0, target:GetAbsOrigin())  
    ParticleManager:SetParticleControl(particle, 1, Vector(particle_radius,0,0))  
    

CP0 is not really needed (because this type of attachment already sets the particle to follow the AbsOrigin) but its nice to have.

CP1.x controls the radius of the particle, as seen in the Particle Editor after playing around with the values

![img](https://puu.sh/esEVP/9c852a02ca.png)

Hovering over the button tells us its a "Position along ring" 

**Example**
    
    
     local target = event.unit  
    local player = PlayerResource:GetPlayer( caster:GetPlayerID() )  
    local particleName = "particles/units/heroes/hero_alchemist/alchemist_lasthit_coins.vpcf"   
    local particle = ParticleManager:CreateParticleForPlayer( particleName, PATTACH_ABSORIGIN, target, player )  
    ParticleManager:SetParticleControl( particle, 0, target:GetAbsOrigin() )  
    ParticleManager:SetParticleControl( particle, 1, target:GetAbsOrigin() )  
    

In this particular case, we are using `CreateParticleForPlayer` to only display it to one particular player. Could also use PATTACH_OVERHEAD_FOLLOW

#### 3.2 Datadriven `"ControlPoints"` block​

The same can be translated to datadriven, except if you need the control points to be decided at runtime (like, doing a radius * some variable)
    
    
    "FireEffect"  
    {  
        "Target" "TARGET"  
        "EffectName" "particles/units/heroes/hero_omniknight/omniknight_purification.vpcf"  
        "EffectAttachType" "follow_origin"  
      
        "ControlPoints"  
        {  
            "00" "0 0 0"  
            "01" "%radius %radius %radius"  
        }  
    }  
    

Keep in mind that a `"FireEffect"` or `"AttachEffect"` action can be inside any Ability or Modifier Event, not only on the `"OnCreated"` / `"OnDestroy"` Modifier Events.

 **Example:**
    
    
     "OnSpellStart"  
    {  
        "FireEffect"  
        {  
            "EffectName"       "particles/units/heroes/hero_lina/lina_spell_light_strike_array_ray_team.vpcf"  
            "EffectAttachType" "start_at_customorigin"  
            "TargetPoint"      "POINT" //This also works with world_origin  
      
            "ControlPoints"  
            {  
                "01" "%light_strike_array_aoe 0 0"  
                "03" "0 0 0"  
            }  
        }  
    }  
    

### 4\. Control Point Entities​

Some times, particle attach points can get even more complicated when they need to be attached on specific locations or entities. If your attachment is not working with the simple lua method, you need to try the next level of control point setup, the **Control Point Entities** , in either Lua or Keyvalues.

#### 4.1 Lua `SetParticleControlEnt`​

 **Example** : This is the proper lua attachment for Abaddon Aphotic Shield Particle:
    
    
    target.ShieldParticle = ParticleManager:CreateParticle("particles/units/heroes/hero_abaddon/abaddon_aphotic_shield.vpcf", PATTACH_ABSORIGIN_FOLLOW, target)  
    ParticleManager:SetParticleControl(target.ShieldParticle, 1, Vector(shield_size,0,shield_size))  
    ParticleManager:SetParticleControl(target.ShieldParticle, 2, Vector(shield_size,0,shield_size))  
    ParticleManager:SetParticleControl(target.ShieldParticle, 4, Vector(shield_size,0,shield_size))  
    ParticleManager:SetParticleControl(target.ShieldParticle, 5, Vector(shield_size,0,0))  
      
    ParticleManager:SetParticleControlEnt(target.ShieldParticle, 0, target, PATTACH_POINT_FOLLOW, "attach_hitloc", target:GetAbsOrigin(), true)  
    

PATTACH_POINT_FOLLOW puts the particle at the targets body in this case. PATTACH_ABSORIGIN_FOLLOW will put it at its feet, and PATTACH_OVERHEAD_FOLLOW at its head.

Note the partice being defined under the `target.` handle, this is because we will need to destroy it later in Lua, becase attaching a particle this way will not stop the particle effect by itself after the modifier is destroyed, as we are just tying the particle to a target. This is not a concern if the particle is meant for a short duration (unlike the buff particles that last forever until removed)

#### 4.2 DataDriven `"ControlPointEntities"`​

This works by setting each CP in order to its key. If you need to set the CP8 to a Targets hitloc, you **need** 8 "TARGET" (or "CASTER" or anything) lines.

 **Example**
    
    
     "modifier_aphotic_shield"  
    {  
        "OnDestroy"  
        {  
            "AttachEffect"  
            {  
                 "EffectName" "particles/units/heroes/hero_abaddon/abaddon_aphotic_shield_explosion.vpcf"  
                 "EffectAttachType" "follow_origin"  
                 "Target" "UNIT"  
                 "ControlPointEntities"  
                {  
                    "TARGET" "attach_origin"  
                    "TARGET" "attach_origin"  
                }  
            }  
        }  
    }  
    

 **Example 2**
    
    
     "modifier_return"  
    {  
        "Passive" "1"  
        "OnAttacked"  
        {  
            "RunScript"  
            {  
                "ScriptFile" "heroes/hero_centaur/return.lua"  
                "Function" "Return"  
            }  
            "FireEffect"  
            {  
                "EffectName" "particles/units/heroes/hero_centaur/centaur_return.vpcf"  
                "EffectAttachType" "attach_hitloc"  
                "Target" "CASTER"  
                "ControlPointEntities"  
                {  
                    "CASTER" "attach_hitloc"  
                    "ATTACKER" "attach_hitloc"  
                }  
            }  
        }   
    }  
    

 **Example 3**
    
    
     "OnProjectileHitUnit"  
    {  
        "FireEffect"  
        {  
        "EffectName" "particles/units/heroes/hero_alchemist/alchemist_unstable_concoction_explosion.vpcf"  
            "EffectAttachType" "attach_hitloc"  
            "Target" "TARGET"  
            "ControlPointEntities"  
            {  
                "TARGET" "attach_hitloc"   
                "TARGET" "attach_hitloc"  
                "TARGET" "attach_hitloc"  
                "TARGET" "attach_hitloc"  
            }   
        }  
    }  
    

 **Example 4**

Custom bones!
    
    
    "AttachEffect"  
    {  
        "Target" "CASTER"  
        "EffectName" "particles/units/heroes/hero_kunkka/kunkka_weapon_tidebringer.vpcf"  
        "EffectAttachType" "start_at_customorigin"  
        "ControlPointEntities"  
        {  
            "CASTER" "attach_sword"  
            "CASTER" "attach_sword"  
            "CASTER" "attach_sword"  
        }  
    }  
    

ControlPointEntities is the hardest method of Particle Attachment. Use it with caution and pride.

### 5\. Stopping a Lua Particle​

If the entity dies, it will normally destroy the particle.

To stop something like we created in the Aphotic Shield example, add a `"OnDestroy"` of the modifier with a RunScript that calls something like this:
    
    
    function EndShieldParticle( event )  
        local target = event.target  
        target:EmitSound("Hero_Abaddon.AphoticShield.Destroy")  
        ParticleManager:DestroyParticle(target.ShieldParticle,false)  
    end  
    

If the particle has a fixed duration you can also easily use BMD Timers:
    
    
    Timers:CreateTimer(duration, function()   
        ParticleManager:DestroyParticle(particle,false))  
    end)  
    

### 6\. Difference between "FireEffect" and "AttachEffect"​

When used inside a modifier, _AttachEffect_ will automatically stop the particle after the modifier is destroyed, while _FireEffect_ won't (if the particle duration is infinite)

FireEffect is pretty much the same as doing the lua `ParticleManager:CreateParticle` in this sense.

So if you FireEffect with a particle of infinite duration inside a modifier, it will still live after the modifier ends.

If the particle duration has a short duration, using any of the 2 Effect actions has the same results.

### 7\. Projectile Particles​

There are two types of projectile particles: Linear and Tracking. 

Linear follow a straight line and collide with anything in its path. Use `"DeleteOnHit" "0"` inside the `"OnProjectileHitUnit"` Ability Event if you want them to continue going up to its fixed distance.

Tracking can curve and follow a target movement. Every ranged attack particle is of this type.

#### LinearProjectile​

 **DataDriven Example**
    
    
     "LinearProjectile"  
    {  
        "Target" "POINT"  
        "EffectName" "particles/units/heroes/hero_nyx_assassin/nyx_assassin_impale.vpcf"  
        "StartRadius" "%width"  
        "EndRadius" "%width"  
        "MoveSpeed" "%speed"  
        "TargetTeams" "DOTA_UNIT_TARGET_TEAM_ENEMY"  
        "TargetTypes" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"  
        "TargetFlags" "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES"  
        "FixedDistance" "%length"  
        "ProvidesVision" "0"  
        "HasFrontalCone" "0"  
    }  
    

 **Lua Example**
    
    
     --[[  
        Author: kritth  
        Date: 10.01.2015  
        Start traversing the ship  
    ]]  
    function ghostship_start_traverse( keys )  
      local ability = keys.ability  
      local casterPoint = caster:GetAbsOrigin()  
      local targetPoint = keys.target_points[1]  
      local spawnDistance = ability:GetLevelSpecialValueFor( "ghostship_distance", ability:GetLevel() - 1 )  
      local projectileSpeed = ability:GetLevelSpecialValueFor( "ghostship_speed", ability:GetLevel() - 1 )  
      local radius = ability:GetLevelSpecialValueFor( "ghostship_width", ability:GetLevel() - 1 )  
      
        -- Get necessary vectors  
        local forwardVec = targetPoint - casterPoint  
                forwardVec = forwardVec:Normalized()  
        local backwardVec = casterPoint - targetPoint  
                backwardVec = backwardVec:Normalized()  
        local spawnPoint = casterPoint + ( spawnDistance * backwardVec )  
        local impactPoint = casterPoint + ( spawnDistance * forwardVec )  
        local velocityVec = Vector( forwardVec.x, forwardVec.y, 0 )  
      
        -- Spawn projectile  
        local projectileTable = {  
            Ability = ability,  
            EffectName = "particles/units/heroes/hero_kunkka/kunkka_ghost_ship.vpcf",  
            vSpawnOrigin = spawnPoint,  
            fDistance = spawnDistance * 2,  
            fStartRadius = radius,  
            fEndRadius = radius,  
            fExpireTime = GameRules:GetGameTime() + 5,  
            Source = caster,  
            bHasFrontalCone = false,  
            bReplaceExisting = false,  
            bProvidesVision = false,  
            iUnitTargetTeam = targetBuffTeam,  
            iUnitTargetType = targetType,  
            vVelocity = velocityVec * projectileSpeed  
        }  
        ProjectileManager:CreateLinearProjectile( projectileTable )  
      
    end  
    

#### TrackingProjectile​

 **DataDriven Example**
    
    
     "TrackingProjectile"  
    {  
        "Target" "TARGET"  
        "EffectName" "particles/units/heroes/hero_alchemist/alchemist_unstable_concoction_projectile.vpcf"  
        "Dodgeable" "0"  
        "ProvidesVision" "1"  
        "VisionRadius" "%vision_range"  
        "MoveSpeed" "%movement_speed"  
        "SourceAttachment" "DOTA_PROJECTILE_ATTACHMENT_ATTACK_1"  
    }  
    

 **Lua Example**
    
    
     local projectile_speed = ability:GetSpecialValueFor( "projectile_speed" )  
    local particle_name = "particles/units/heroes/hero_abaddon/abaddon_death_coil.vpcf"  
      
    -- Create the projectile  
        local info = {  
            Target = target,  
            Source = caster,  
            Ability = ability,  
            EffectName = particle_name,  
            bDodgeable = false,  
            bProvidesVision = true,  
            iMoveSpeed = projectile_speed,  
            iVisionRadius = 0,  
            iVisionTeamNumber = caster:GetTeamNumber(),  
            iSourceAttachment = DOTA_PROJECTILE_ATTACHMENT_ATTACK_1  
        }  
        ProjectileManager:CreateTrackingProjectile( info )  
    

  


 **Note** : You can't generally use a particle designed to be Linear in a Tracking action and vice versa. 

You might be able to mimic a Linear behavior using a Tracking projectile if you make it to track a dummy unit that can't move, but you need another invisible Linear projectile to do the hit effects.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/particle-attachment.md)

---

## Basic Vector Math

* [](/)
  * Scripting
  * Basic Vector Math



On this page

# Basic Vector Math

While creating games it is hard to avoid using vector math, however they are not commonly taught in schools. While they are fairly intuitive once you get used to them, learning about vector math for the first time can be a bit difficult, therefore this tutorial.

## Introduction to vectors​

### What is a vector​

Vectors are a way to describe a point or direction in space. This space can have any number of dimensions, but for this tutorial we will focus on 2D just because it is easier to draw. All of these concepts also apply to higher dimension vectors though!

Usually a vector will be represented as `(x, y)`, which you can either interpret as:

> Point with coordinates (x, y)

or

> Movement from (0, 0) to point (x, y)

note

When using vectors as a movement they only describe a movement TO somewhere, originating from the origin (0, 0). If you want to describe a movement that also has a FROM part, you need a second vector to describe the initial position.

#### Example​

So let's look at how we would think about and vizualize two vectors: `A: (3, 2)` and `B: (-1, 3)`:

![Vector vizualization](https://i.imgur.com/4lalG0u.png)

 **Note:** vectors have no origin and always originate from (0, 0). If you consider vectors as movements from origin to a point, you can also calculate their length, denoted by l_A and l_B.

### Adding vectors​

So let's say you consider vectors as movements, you can simply add two vectors to get the result of doing both movements. For example if you have a vector `A (xa, ya)` and `B (xb, yb)` indicating two movements, what is the result of doing both `A` and `B`? This is visualized like so:

![Vector addition](https://i.imgur.com/YBzf6oO.png)

 **Note:** Moving by vector A first and then by B will result in the same vector as moving by B first followed by A. (This is why visualizing vector addition always results in this parallelogram).

Example

You can use calculate things like offsets or knockbacks using addition, i.e where does a unit end after getting knocked back in some direction?
    
    
    newUnitPos = unitPos + knockbackVector  
    

### Subtracting vectors​

Now let's say we want to know the inverse question to the previous one: Assuming I have two vector positions `A` and `B`, what movement do I have to do to get from `A` to `B`? The answer to this is a vector subtraction: `C = B - A`. Note that this works exactly like regular math, so doing `A + C = B`:

![Vector subtraction](https://i.imgur.com/Sa4gnxz.png)

 **Note:** Just like when subtracting regular numbers, order matters! `B - A` gives the vector from `A` to `B`, while `A - B` gives the opposite vector, from `B` to `A`.

Example

You can use vector subtraction to calculate the difference in position between two units, and get for example the distance between them:
    
    
    distanceBetweenUnit1AndUnit2 = length(unit2Pos - unit1Pos)  
    

### Multiplying vectors​

The last 'basic' vector operation I want to go over is multiplication with a number (NOT with another vector).

When multiplying a vector with a number it retains its direction, but its length is multiplied by this number:

![Vector multiplication](https://i.imgur.com/1h83sJr.png)

Example

You can use vector multiplication to rescale vectors to a certain length. For example when you have a unit or normal vector (length 1), multiplying with a number will make it that length.
    
    
    vectorOfLength100 = vectorOfLength1 * 100  
    

### Vectors as Direction/Orientation​

As seen before, vectors look very much like a direction to somewhere. This makes them very useful for representing the orientation of something instead of using an angle (because angles make calculating much more difficult).

To do so, orientation is often expressed as vectors of length 1. This is because of the special relation vectors have with angles: For an angle `a`, `(cos(a), sin(a))` is a vector of length 1, pointing in the direction of angle `a`:

![Vectors and angles](https://i.imgur.com/vjW0ye7.png)

You might be wondering what the point of this is, for an application if why storing orientation as vectors of length 1 see section 'Spawning an item in front of the player'.

### Dot product​

The final vector concept for this tutorial is the 'dot product' of two vectors. Simply put, this dot product gives you a measure of 'how much vectors are pointing in the same direction'. If two vectors (of length 1) point in exactly the same direction, the dot product is 1. If two vectors (of length 1) point in exactly the opposite direction the dot product is -1. If the two vectors are at a 90 degree angle, the dot product is 0:

![Dot product](https://i.imgur.com/erBE2yl.png)

note

Technically `dot(A, B) = length(A) * length(B) * cos(angle)`, so watch out when calculating the dot product of non-length-1 vectors: they will no longer range from -1 to 1.

### Normalization​

As mentioned shown above it is often very useful to have vectors of length 1 (only the direction, not the distance). This is so common there is a standard procedure to calculate this: Normalization. When normalizing a vector you simply divide it by its length (or multiply with 1/length). This will always give you a vector of length 1.

note

Vectors with length 1 are referred to as 'Normal' or 'Unit' vectors.

## Vector math in games​

### Spawning an item in front of the player​

Let's say we want to spawn an item 100 units in front of a player hero, how do we calculate this location `A`?

We can visualize this question like this:

![Spawning in front of a player](https://i.imgur.com/1ksId50.png)

Referencing this visualization it is obvious we can calculate this A as follows:

  * Lua
  * TypeScript


    
    
    -- Calculate the vector from the hero to the point by multiplying  
    -- their forward vector (length 1) with the desired distance.  
    local heroToPoint = hero:GetForwardVector() * 100  
    -- Calculate world position  of the item by adding the vector  
    -- from hero to point to the world position of the hero  
    local itemPos = hero:GetAbsOrigin() + heroToPoint  
    
    
    
    // Calculate the vector from the hero to the point by multiplying  
    // their forward vector (length 1) with the desired distance.  
    const heroToPoint = (hero.GetForwardVector() * 100) as Vector;  
    // Calculate world position  of the item by adding the vector  
    // from hero to point to the world position of the hero  
    const itemPos = (hero.GetAbsOrigin() + heroToPoint) as Vector;  
    

### Checking if unit is facing a direction​

Another common question is how can we calculate if my unit is facing a specific point on the map.

We visualize this problem like this:

![Facing point?](https://i.imgur.com/iBH3cIk.png)

So looking at the visualization, when does a unit face point P? Well it looks like this happens when their forward vector (the orange one) aligns with the vector from the unit to the point (the purple one). So capturing this in code would look a little like this:

  * Lua
  * TypeScript


    
    
    function isUnitFacingPoint(unit, point)  
      -- Calculate the relative position of the unit to the point  
      local relativePosition = point - unit:GetAbsOrigin()  
      -- Remember, using dot product works best with normal vectors  
      -- The unit's forward is already normal, but we need to normalize  
      -- the relative position to only get its direction.  
      local directionToPoint = relativePosition:Normalized()  
      
      -- Check if the alignment of the forward vector and relative direction  
      -- is within some acceptable range of tolerance  
      return unit:GetForwardVector():Dot(directionToPoint) > 0.7  
    end  
    
    
    
    function isUnitFacingPoint(unit: CDOTA_BaseNPC, point: Vector): boolean {  
      // Calculate the relative position of the unit to the point  
      const relativePosition = (point - unit.GetAbsOrigin()) as Vector;  
      // Remember, using dot product works best with normal vectors  
      // The unit's forward is already normal, but we need to normalize  
      // the relative position to only get its direction.  
      const relativeDirection = relativePosition.Normalized();  
      
      // Check if the alignment of the forward vector and relative direction  
      // is within some acceptable range of tolerance  
      return unit.GetForwardVector().Dot(relativeDirection) > 0.7;  
    }  
    

### Checking if unit is attacked from behind​

This question is similar to the previous question, only now there are two units facing in different ways:

![Attacking from behind](https://i.imgur.com/uLT3QzQ.png)

Looking at this drawing it becomes obvious that the forward vector of unit 2 (F2) actually does **not** matter. What matters is the angle (dot product) between the forward vector of the unit getting attacked, and the where the attack is coming from (the vector from unit 2 to unit 1: `P1 - P2`)

  * Lua
  * TypeScript


    
    
    function isAttackedFromBehind(victim, attacker)  
      -- Calculate the relative position from attacker to victim (P1 - P2)  
      local relativePosition = victim:GetAbsOrigin() - attacker:GetAbsOrigin()  
      -- Normalize relative position to get attack direction  
      local attackDirection = relativePosition:Normalized()  
      -- Get the forward vector of the victim  
      local victimForward = victim:GetForwardVector()  
      
      -- Check if both normal(!) vectors are pointing in the same direction  
      return victimForward:Dot(attackDirection) > 0.7  
    end  
    
    
    
    function isAttackedFromBehind(victim: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC): boolean {  
      // Calculate the relative position from attacker to victim (P1 - P2)  
      const relativePosition = (victim.GetAbsOrigin() - attacker.GetAbsOrigin()) as Vector;  
      // Normalize relative position to get attack direction  
      const attackDirection = relativePosition.Normalized();  
      // Get the forward vector of the victim  
      const victimForward = victim.GetForwardVector();  
      
      // Check if both normal(!) vectors are pointing in the same direction  
      return victimForward.Dot(attackDirection) > 0.7;  
    }  
    

### Creating some effects around player​

Consider the case where you want multiple things to happen evenly spaced in a circle around the player character. We can visualize it as follows:

![Circular effect](https://i.imgur.com/TOqC1Ly.png)

By now it should be obvious we need to add the green vectors to the player position, the question is however how do you calculate these green vectors?

What we can simply do is divide the full circle radius (2 * pi) by the number of points we want to use, and then for each angle calculate the unit vector from the angle, multiply it with the desired length and add it to the player position:

  * Lua
  * TypeScript


    
    
    -- Calculate the angle between each point on the circle  
    -- (This is in radians, the full circle is 2*pi radians)  
    local angle = 2 * math.pi / numPoints  
      
    for i=1,numPoints do  
      -- Create direction vector from the angle  
      local direction = Vector(math.cos(angle * i), math.sin(angle * i))  
      -- Multiply the direction (length 1) with the desired radius of the circle  
      local circlePoint = direction * radius  
      
      -- Add the calculated green vector to the player position and do something  
      doSomething(player:GetAbsOrigin() + circlePoint)  
    end  
    
    
    
    // Calculate the angle between each point on the circle  
    // (This is in radians, the full circle is 2*pi radians)  
    const angle = (2 * Math.PI) / numPoints;  
      
    for (let i = 0; i < numPoints; i++) {  
      // Create direction vector from the angle  
      const direction = Vector(Math.cos(angle * i), Math.sin(angle * i));  
      // Multiply the direction (length 1) with the desired radius of the circle  
      const circlePoint = (direction * radius) as Vector;  
      
      // Add the calculated green vector to the player position and do something  
      doSomething((player.GetAbsOrigin() + circlePoint) as Vector);  
    }  
    

### Physics with vectors - Homing projectile​

As you have seen vector math is quite powerful and can be used to express positional and movement concepts in simple statements. In this final example I will show how to a simple 'physics' simulation to create a homing projectile.

We will express the projectile using two vectors: `position` and `velocity`. This makes the projectile unable to instantly change its direction, but suffer some inertia: it will home in on the player on every tick, but it cannot easily slow down or change direction:

![](https://i.imgur.com/GVK8Nbo.png)

To achieve this effect we simply 'accelerate' the velocity of the projectile towards the player on every update, so the velocity turns towards the player a little bit every update. We then simply update the position based on the current velocity:

  * Lua
  * TypeScript


    
    
    function updateProjectile(projectile, target)  
        -- Calculate direction from projectile to target  
        local relativeTargetPos = target:GetAbsOrigin() - projectile:GetAbsOrigin()  
        local targetDirection = relativeTargetPos:Normalized()  
      
        -- Now we update the projectile velocity to point more to the target  
        -- Note: you can increase/decrease acceleration to make it change direction  
        -- faster or slower  
        projectile.velocity = projectile.velocity + targetDirection * acceleration  
      
        -- Next we update the projectile position by simply adding the velocity  
        projectile.position = projectile.position + projectile.velocity  
    end  
    
    
    
    function updateProjectile(projectile: Projectile, target: CDOTA_BaseNPC): void {  
      // Calculate direction from projectile to target  
      const relativeTargetPos = (target.GetAbsOrigin() - projectile.GetAbsOrigin()) as Vector;  
      const targetDirection = relativeTargetPos.Normalized();  
      
      // Now we update the projectile velocity to point more to the target  
      // Note: you can increase/decrease acceleration to make it change direction  
      // faster or slower  
      projectile.velocity = (projectile.velocity + targetDirection * acceleration) as Vector;  
      
      // Next we update the projectile position by simply adding the velocity  
      projectile.position = (projectile.position + projectile.velocity) as Vector;  
    }  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/vector-math.md)

---

## Precache - Fixing and Avoiding Issues

* [](/)
  * Scripting
  * Precache, Fixing and avoiding issues



# Precache, Fixing and avoiding issues

When spawning units through KV and Lua, you might have to deal with the precache-dilemma. This also applies to particles and sounds. I talked about it briefly in the [precache section of the datadriven breakdown](http://moddota.com/forums/discussion/14/datadriven-ability-breakdown-documentation##precache) but here I have an straightforward example to help understand the matter.

So, if you see an unselectable orange ERROR as the model of a unit, then you have a precache model issue:

<https://puu.sh/fBzOp/5c7afff665.jpg>

Missing particles are indicated by red crosses:

 **How to fix and avoid this crap?**

First, the datadriven `"SpawnUnit"` Action will always precache the "UnitName" custom unit and whatever cosmetics you have attached to it. For example in this [Avatar of Vengeance ability](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/warden_avatar_of_vengeance.txt), I'll be spawning a Spectre with some hats:
    
    
    "SpawnUnit"  
    {  
        "UnitName"  "npc_avatar_of_vengeance"  
        "UnitCount" "1"  
        "SpawnRadius"   "100"  
        "Duration"  "%duration"  
        "Target"        "CASTER"  
        "OnSpawn"  
        {  
        "FireSound"  
        {  
            "EffectName" "Hero_Spectre.Haunt"  
            "Target"     "CASTER"  
        }  
        }  
    }  
    

Now there will be many many times that SpawnUnit doesn't cut it, and you need to spawn units in lua, using the `CreateUnitByName` function.

If I went ahead and just spawned my unit in lua (simplified example of [this script](https://github.com/MNoya/DotaCraft/blob/master/scripts/vscripts/heroes/warden/avatar_of_vengeance.lua#L35)):
    
    
    function SpiritOfVengeanceSpawn( event )  
        local caster = event.caster  
        local unit_name = "npc_spirit_of_vengeance"  
        local origin = caster:GetAbsOrigin()  
        local spirit = CreateUnitByName(unit_name, origin, true, caster, caster, caster:GetTeamNumber())  
    end  
    

Without any previous precache I'll get something like the ERROR model like before, or if this isn't the first I run the tools (because after the 1st run it attempts to store some models to keep on the cache), something like this:

<https://puu.sh/fBwmn/0659d05a11.jpg>

So yeah, that's bad, here's how to fix it:

 **Always add a datadriven precache block with all models, sounds and particles that your ability would use**

In this case, I precache all the models and the ambient particles I'm using, inside the main datadriven ability.
    
    
    "precache"  
    {  
        "soundfile" "soundevents/game_sounds_heroes/game_sounds_spectre.vsndevts"  
        "model"     "models/heroes/vengeful/vengeful.vmdl"  
        "model"     "models/items/vengeful/vengeful_immortal_weapon/vengeful_immortal_weapon.vmdl"  
        "model"     "models/items/vengefulspirit/fallenprincess_shoulders/fallenprincess_shoulders.vmdl"  
        "model"     "models/items/vengefulspirit/fallenprincess_legs/fallenprincess_legs.vmdl"  
        "model"     "models/items/vengefulspirit/fallenprincess_head/fallenprincess_head.vmdl"  
        "particle"      "particles/units/heroes/hero_vengeful/vengeful_ambient.vpcf"  
        "particle"      "particles/econ/items/vengeful/vengeful_wing_fallenprincess/venge_wingsoffallenprincess_ambient.vpcf"  
    }  
    

Now all the models will load properly.

<https://puu.sh/fBx1X/8f04e3cd86.jpg>

Final note, some cosmetics you might want to use have their own particles and its hard to know their names. In the first gif (the one with the red crosses) I was missing the wing particle effect for fallenprincess_shoulders. If this is the case, you can also find the particles used by the cosmetic in its [item_game.txt](https://raw.githubusercontent.com/dotabuff/d2vpk/master/dota_pak01/scripts/items/items_game.txt) definition:

<https://puu.sh/fBxWT/83cceac063.png>

  


Now after adding that particle (which I just looked up on the Asset Browser and copied the path to the .vpcf), everything is displaying properly:

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/precache-fixing-and-avoiding-issues.md)

---

## Advanced RPG Looting Chest in TypeScript

* [](/)
  * Scripting
  * Advanced rpg looting chest in typescript



# Advanced rpg looting chest in typescript

In this guide you will learn to create a channeling chest, which drops loot. The tricky part is to scale that item, because "Scale" is not supported, and to keep that item while channeling. Also you want to replace it with a opened chest model after successfully opening it. If the channeling fails, you also want to keep the chest. It also should keep the scale and rotation. Also the chest we are using has two different material sets and of course we want to support "Skin" either.

So we gotta implement that. Lets go.

In our example we use models/props_generic/chest_treasure_02.vmdl and models\props_generic\chest_treasure_02_open.vmdl, which both have a golden and brown material. 0 is brown, 1 is gold.
    
    
    "DOTAAbilities"  
    {  
      
        "item_treasure_chest_2"  
        {  
        "BaseClass"                       "item_lua"  
        "Model"                           "models/props_generic/chest_treasure_02.vmdl"  
            "ScriptFile"                      "item_treasure_chest_2.lua"  
            "AbilityBehavior"                 "DOTA_ABILITY_BEHAVIOR_CHANNELLED"  
        "AbilityTextureName"              "item_desolator"  
      
            "ItemShareability"                 "ITEM_FULLY_SHAREABLE"  
            "ItemKillable"                     "0"  
            "ItemSellable"                     "0"   
            "ItemPurchasable"                  "0"  
            "ItemDroppable"                    "1"   
            "ItemPermanent"                    "0"  
            "ItemCost"                         "99999"   
              
            "AbilityCooldown"                  "0.0" // Ability cooldown must be 0  
            "AbilityChannelTime"               "2.5"  
            "AbilityUnitTargetType"           "DOTA_UNIT_TARGET_HERO"  
            "OnlyPlayerHeroPickup"            "1"  
            "CreepHeroPickup"                 "1"  
            "DisplayOverheadAlertOnReceived"  "0" // Show no item accquired overhead effect  
            "ItemCastOnPickup"                "1" // Start channeling on pickup  
      
            // Custom Values  
            // -------------  
            "ReplaceOnOpen"                   "models\props_generic\chest_treasure_02_open.vmdl"  
            "Skin"                            "1"  
        }  
    }  
    

Instead of item_desolator, you should use a better icon :)
    
    
    // registerAbility() and BaseItem is provided by dota_ts_adapter and needs to imported.  
      
    @registerAbility()  
    class item_treasure_chest_2 extends BaseItem {  
      
        position!: Vector;  
        angles!: Vector;  
        kv!: Record<string, string>;  
        channelingPlaceholder!: CBaseAnimating;  
      
        Spawn() {  
            if (IsServer()) {  
                this.kv = this.GetAbilityKeyValues() as Record<string, string>;             
                this.HandleSkinAndScale();  
            }  
        }  
      
        private HandleSkinAndScale(){  
            const kvSkin = this.GetSkin();  
            const kvScale = this.GetScale();  
      
            if(kvSkin == 0 && kvScale == 1){  
                return;  
            }  
            // Container is not created by engine at Spawn() time  
            Timers.CreateTimer(0.01, () => {  
                const container = this.GetContainer();  
      
                if(container){  
                    container.SetSkin(kvSkin);  
                    container.SetModelScale(kvScale);  
                }  
            });  
        }  
      
        // Since we channel this ability on pickup it isnt the same as the item icon, so we need to set it here.  
        // When using a custom icon, make sure to support both formats (spellicon/icon)  
        GetAbilityTextureName() {  
            return GetAbilityTextureNameForAbility(this.GetName());  
        }  
      
        // OnSpellStart gets called twice for some reason, thats why we check if position and placeholder are set  
        OnSpellStart() {  
            if (IsClient()) {  
                return;  
            }  
      
            if(!this.position){  
                this.position = this.GetContainer()!.GetOrigin();  
                this.angles = this.GetContainer()!.GetAnglesAsVector();  
            }  
      
            if (!this.channelingPlaceholder) {  
               this.channelingPlaceholder = this.SpawnReplacementChests(this.GetChestModel());  
            }  
        }  
      
        OnChannelFinish(interrupted: boolean) {  
            if (IsClient()) {  
                return;  
            }  
            if (interrupted) {  
                this.RedropChest();  
                this.DeleteChest();  
                return;  
            }  
            this.OnChestOpen();  
        }  
      
        OnChestOpen() {  
            print("Opened chest");  
              
            this.CreateLoot();  
            this.SpawnReplacementChests(this.GetChestOpenModel());  
            this.DeleteChest();  
        }  
      
        // spawned chests do not have a collider  
        private SpawnReplacementChests(model: string): CBaseAnimating{  
      
            const item = SpawnEntityFromTableSynchronous("prop_dynamic", {  
                model: model,  
                scale: this.GetScale(),  
                origin: this.position,  
                angles: this.angles,  
                skin: this.GetSkin()  
            }) as CBaseAnimating;  
      
            item.ResetSequence("chest_treasure_idle");  
      
            return item as CBaseAnimating;  
        }  
      
        private RedropChest() {  
            const chestReplace = CreateItem(this.GetName(), undefined, undefined);  
            const item = CreateItemOnPositionSync(this.position, chestReplace);  
            item.SetAngles(this.angles.x, this.angles.y, this.angles.z);  
            item.SetModelScale(this.GetScale());  
            item.ResetSequence("chest_treasure_idle");  
        }  
      
        private DeletePlaceholder(){  
            this.channelingPlaceholder.RemoveSelf();  
        }  
      
        private DeleteChest() {  
            // Removing an item also destroys the underlying entity, be carefull  
            this.GetCaster().RemoveItem(this);  
            this.DeletePlaceholder();  
        }  
      
        private CreateLoot(){  
            const caster = this.GetCaster();  
      
            const item = CreateItem("item_desolator", caster.GetPlayerOwner(), undefined);  
            const worldItem = CreateItemOnPositionSync(this.position, item);  
            item?.LaunchLoot(false, 124, RandomFloat(0.5, 1.2), caster.GetOrigin().__add(RandomVector(RandomInt(50, 150))));  
        }  
      
        private GetChestOpenModel() {  
            return this.kv["ReplaceOnOpen"];  
        }  
      
        private GetChestModel(){  
            return this.kv["Model"];  
        }  
      
        private GetSkin(){  
            return tonumber(this.kv["Skin"]) || 0;  
        }  
      
        protected GetScale(){  
            return tonumber(this.kv["Scale"]) || 1;  
        }  
    }  
    

Finally you will want to give your chest a tooltip name. Add "DOTA _Tooltip_ability_item_treasure_chest_2" "Testchest" to your addon_ *.txt.

There are some drawbacks to this approach. You cant change the pickup range and the itemquality. Please leave a comment in discord or edit this page, if you know.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/advanced-looting-chest.md)

---

# Panorama UI

## Inclusive Panorama UI

* [](/)
  * Panorama UI
  * Inclusive Panorama UI



# Inclusive Panorama UI

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/inclusive-panorama-ui.md)

---

## Introduction to Panorama UI with TypeScript

* [](/)
  * Panorama UI
  * Introduction to Panorama UI with TypeScript



On this page

# Introduction to Panorama UI with TypeScript

## What is TypeScript and why should I use it​

[TypeScript](https://www.typescriptlang.org/) is a language created by and for people that were unhappy with Javascript and all of its quirks and flaws. TypeScript is a language with its own syntax (although similar to Javascript) that compiles to Javascript in a way that avoids a lot of Javascript's issues.

The name TypeScript comes from the fact that the language is basically Javascript with type checking, but on top of that it supports all of the newest Javascript language construct that are not supported by Panorama.

 **Pros of using TypeScript:**

  * Type checking
  * Code completion based on type (also for API!)
  * Prevents scoping issues
  * Proper OOP constructs (such as classes, interfaces, inheritance...)



 **Cons of using TypeScript:**

  * Requires some setup
  * Remember to compile
  * Requires good definitions for Panorama



## How to install TypeScript​

  1. Install [Node.js](https://nodejs.org/en/) which is used to compile TypeScript.
  2. Create a `package.json` file in the root directory of your project with at least `{}` content.
  3. Install required dependencies by opening a command prompt and executing `npm install -D typescript panorama-types`.



That's it, after these three steps you are ready to start using TypeScript.

[Visual Studio Code](https://code.visualstudio.com/) supports TypeScript out of the box. For other editors you might have to install a plugin to get language features (for example [Sublime TypeScript plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin#installation), available through Sublime Text package manager).

## How to set up TypeScript for your dota addon​

TypeScript requires a `tsconfig.json` used to configure it for your project. Put it in your addon's `content/panorama` directory. You can adjust all settings yourself, but I usually have this set to the most strict settings. My preferred configuration:
    
    
    {  
        "compilerOptions": {  
            "target": "es2017",  
            "lib": ["es2017"],  
            "types": ["panorama-types"],  
            "strict": true  
        }  
    }  
    

Your addon's content directory structure should be something like this:
    
    
    content/dota_addons/[addon]/  
        ...  
        panorama/  
            layout/  
            scripts/  
            styles/  
            tsconfig.json  
    

## Your first TypeScript UI​

To illustrate why I like using TypeScript for modular UI I will walk through a small example. We will be making some hero portraits with player name and a healh bar: ![What we are making](https://i.imgur.com/ZrqqlFo.png)

Since this tutorial is about TypeScript I will just quickly give the xml and css, this is standard stuff:
    
    
    <root>  
        <styles>  
            <include src="file://{resources}/styles/custom_game/example.css" />  
        </styles>  
      
        <scripts>  
            <include src="file://{resources}/scripts/custom_game/PlayerPortrait.js" />  
            <include src="file://{resources}/scripts/custom_game/ExampleUI.js" />  
        </scripts>  
      
        <snippets>  
            <snippet name="PlayerPortrait">  
                <Panel class="PlayerPortrait" hittest="false">  
                    <Image id="HeroImage" hittest="false" />  
                    <Label id="PlayerName" />  
                    <Panel class="HealthContainer">  
                        <Panel id="HealthBar" />  
                    </Panel>  
                </Panel>  
            </snippet>  
        </snippets>  
      
        <Panel hittest="false" style="width: 100%; height: 100%;">  
            <Panel id="HeroPortraits" />  
        </Panel>  
    </root>  
    

CSS:
    
    
    #HeroPortraits {  
        width: 300px;  
        height: 650px;  
        margin-top: 150px;  
        flow-children: down;  
    }  
    .PlayerPortrait {  
        background-color: blue;  
        height: 80px;  
        width: 300px;  
        margin-bottom: 10px;  
    }  
    #HeroImage {  
        width: 80px;  
        height: 80px;  
        background-color: black;  
    }  
    #PlayerName {  
        color: white;  
        font-size: 25px;  
        margin-top: 10px;  
        margin-left: 90px;  
    }  
    .HealthContainer {  
        width: 200px;  
        height: 20px;  
        x: 90px;  
        y: 50px;  
        background-color: black;  
    }  
    #HealthBar {  
        height: 20px;  
        width: 50%;  
      
        background-color: green;  
    }  
    

As you can see the XML of this part of the UI has a snippet containing the XML of a player portrait containing a hero image, a label for the player name and a health container and health bar inside that container. The CSS applies some simple layout to this.

## Writing TypeScript for your UI​

First we want to define a class of our UI and to link that to the XML. We do this by taking an existing panel and wrapping it into a typescript class, as follows:
    
    
    class ExampleUI {  
        // Instance variables  
        panel: Panel;  
      
        // ExampleUI constructor  
        constructor(panel: Panel) {  
            this.panel = panel;  
            $.Msg(panel); // Print the panel  
        }  
    }  
      
    let ui = new ExampleUI($.GetContextPanel());  
    

Nothing too exciting, we basically create a new ExampleUI object in ExampleUI.ts from the context panel, so this entire XML file is now an instance of the ExampleUI class. If you build this by pressing **ctrl+b** in Sublime, you will see it creates a new compiled ExampleUI.js file with the same name. This compiled file is loaded by Panorama. If you load your game mode at this point you should see a print in console printing your UI panel.

Now let's create a class for a hero portrait. In this case we do not wrap an existing element, but instead create a panel in the constructor. To do this we do still need a parent panel, so we require that as parameter for the constructor, as well as the hero name and player name. After creating a panel and loading the snippet into it we look up some of its child elements and store them for later.
    
    
    class PlayerPortrait {  
        // Instance variables  
        panel: Panel;  
        heroImage: ImagePanel;  
        playerLabel: LabelPanel;  
        hpBar: Panel;  
      
        constructor(parent: Panel, heroName: string, playerName: string) {  
            // Create new panel  
            const panel = $.CreatePanel("Panel", parent, "");  
            this.panel = panel;  
      
            // Load snippet into panel  
            panel.BLoadLayoutSnippet("PlayerPortrait");  
      
            // Find components  
            this.heroImage = panel.FindChildTraverse("HeroImage") as ImagePanel;  
            this.playerLabel = panel.FindChildTraverse("PlayerName") as LabelPanel;  
            this.hpBar = panel.FindChildTraverse("HealthBar")!;  
      
            // Set player name label  
            this.playerLabel.text = playerName;  
      
            // Set hero image  
            this.heroImage.SetImage("s2r://panorama/images/heroes/" + heroName + "_png.vtex");  
      
            // Initialise health at 100%  
            this.SetHealthPercent(100);  
        }  
      
        // Set the health bar to a certain percentage (0-100)  
        SetHealthPercent(percentage: number) {  
            this.hpBar.style.width = Math.floor(percentage) + "%";  
        }  
    }  
    

This is saved in a second file **PlayerPortrait.ts** which compiles to PlayerPortrait.js. Therefore this file is also included in the scripts section of the xml (see above).

The constructor simply creates a new panel and loads a snippet into it, and then sets some default values. The class also defines a SetHealthPercent function that manipulates the health bar.

Now we go back to the ExampleUI class and make a couple PlayerPortrait instances to the PlayerPortraits element:
    
    
    class ExampleUI {  
        // Instance variables  
        panel: Panel;  
      
        // ExampleUI constructor  
        constructor(panel: Panel) {  
            this.panel = panel;  
      
            // Find container element  
            const container = this.panel.FindChild("HeroPortraits")!;  
      
            // Create portrait for player 0, 1 and 2  
            const portrait0 = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");  
            const portrait1 = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");  
            const portrait2 = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");  
      
            // Set HP of player 1 and 2 to a different value  
            portrait0.SetHealthPercent(80);  
            portrait2.SetHealthPercent(20);  
        }  
    }  
      
    let ui = new ExampleUI($.GetContextPanel());  
    

Your UI should now look like the screenshot we set out to make at the start.

## Advanced TypeScripting​

Now this UI is not very useful for an actual game, so let's do something a bit more complicated. We want to save the player portraits and then whenever we receive an event that a player's HP has changed we want to retrieve the proper PlayerPortrait instance.

We do this by adding another instance variable to the ExampleUI, a map that maps playerIDs to the correct PlayerPortrait instance. When creating PlayerPortrait instances we put them in the map. When we get an hp_changed event we update the proper panel. The type of this map can be expressed in TypeScript as `{[playerID: number]: PlayerPortrait}`.

One of the advantages of TypeScript is that you can explicitly define which events you receive and what their contents are. We define the HPChanged event as follows:
    
    
    interface HPChangedEvent {  
        playerID: PlayerID,  
        hpPercentage: number  
    }  
    

Putting these together our ExampleUI.ts file now looks as follows:
    
    
    interface HPChangedEvent {  
        playerID: PlayerID;  
        hpPercentage: number;  
    }  
      
    class ExampleUI {  
        // Instance variables  
        panel: Panel;  
        playerPanels: Partial<Record<PlayerID, PlayerPortrait>> = {}; // A map with number keys and PlayerPortrait values  
      
        // ExampleUI constructor  
        constructor(panel: Panel) {  
            this.panel = panel;  
      
            const container = this.panel.FindChild("HeroPortraits")!;  
            container.RemoveAndDeleteChildren();  
      
            // Create portrait for player 0, 1 and 2  
            this.playerPanels[0] = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");  
            this.playerPanels[1] = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");  
            this.playerPanels[2] = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");  
      
            // Listen for health changed event, when it fires, handle it with this.OnHPChanged  
            GameEvents.Subscribe<HPChangedEvent>("hp_changed", (event) => this.OnHPChanged(event));  
        }  
      
        // Event handler for HP Changed event  
        OnHPChanged(event: HPChangedEvent) {  
            // Get portrait for this player  
            const playerPortrait = this.playerPanels[event.playerID];  
      
            // Set HP on the player panel  
            playerPortrait.SetHealthPercent(event.hpPercentage);  
        }  
    }  
      
    let ui = new ExampleUI($.GetContextPanel());  
    

We simply bound a handler for the `hp_changed` event in the constructor of our ExampleUI, and whenever that happens OnHPChanged is called, which looks up the player portrait in the map and calls SetHealthPercent on the portrait.

## Summary​

To conclude, I hope to have convinced you TypeScript helps to write readable, modular UI scripts in Panorama. TypeScript helps you by finding typing errors before you compile, and even prevents errors by taking scoping into account. On top of that the code completion for the panorama API is very useful. The more I use TypeScript to write Panorama, the more I am impressed by how useful it is. Hopefully you give it a try and discover for yourself.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/introduction-to-panorama-ui-with-typescript.md)

---

## Keybindings

* [](/)
  * Panorama UI
  * Keybindings



On this page

# Keybindings

### Introduction​

With the recent update (20th of july) valve added support for custom keybindings. That is, you can bind key's to fire a custom command.

The technique used is derived from rpg_example.

Although this method is not nescessarily limited to panorama this tutorial will focus on using them within panorama.

### Setup​

Start by adding a couple of lines to your `addoninfo.txt` file located in `/game/<your addon>/addoninfo.txt`
    
    
    "AddonInfo"  
    {  
      "TeamCount" "10"  
      "maps"      "your_map"  
      "IsPlayable"  "1"  
      "your_map"  
      {  
              "MaxPlayers"                    "10"  
      }  
      "Default_Keys"  
        {  
            "01"  
            {  
                "Key"       "S"  
                "Command"   "CustomGameExecuteAbility1"  
                "Name"      "Execute Ability 1"  
            }  
            "02"  
            {  
                "Key"       "Z"  
                "Command"   "+CustomGameTestButton"  
                "Name"      "Example"  
            }  
        }  
    }  
    

The important parts are of course what is defined in `"Default_Keys"`

`"Key"` is the key you want to bind, use capital letters here

`"Command"` is the command to fire, make sure the command name is unique.  
The prefix of the command defines when the command will trigger.

`"Name"` Name of the command, used for debugging purposes.

####Command Prefixes

Prefix| Example| Description  
---|---|---  
 _(nothing)_|  _command_|  Command will trigger on press and release  
 **+**|  _+command_|  Trigger when key is pressed (used for normal key press)  
 **-**|  _-command_|  Command will trigger when key is released  
  
The prefixes do not lock the command to be triggered only in that event. But is a good self-reference for what you want the keybind to do.

### Panorama​

Catching the keybind commands in Panorama is easy:
    
    
    function OnExecuteAbility1ButtonPressed()  
    {  
      $.Msg("'S' Pressed or Released");  
    }  
      
    function OnTestButtonPressed()  
    {  
      $.Msg("'Z' Pressed");  
    }  
      
    function OnTestButtonReleased()  
    {  
      $.Msg("'Z' Released");  
    }  
      
    (function() {  
      Game.AddCommand( "CustomGameExecuteAbility1", OnExecuteAbility1ButtonPressed, "", 0 );  
      Game.AddCommand( "+CustomGameTestButton", OnTestButtonPressed, "", 0 );  
      Game.AddCommand( "-CustomGameTestButton", OnTestButtonReleased, "", 0 );  
    })();  
    

Note how the prefixes are used again. Even though we only defined `CustomGameTestButton` to be fired on _key down_ , we can easily catch the release event in our JS aswell.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/keybindings.md)

---

## DOTAScenePanel

* [](/)
  * Panorama UI
  * DOTAScenePanel



On this page

# DOTAScenePanel

In this tutorial we'll go through the tricks you can do with the undocumented DOTAScenePanel class in panorama.

Now, you might have seen its usage if you looked through the sources in the main menu. This panel allows us to display 3D content in panorama. You might have tried using it yourself. It's pretty easy to setup a simple panel to display a unit, with code like

`<DOTAScenePanel style="width:400px;height:400px;" unit="npc_dota_hero_sven" particleonly="false"/>`

Please note `particleonly='false'` is required for `DOTAScenePanel` to display anything other then particles properly.

Code like this is used to display heroes in the armory. This panel is also has no custom dynamic properties, meaning that we can't change the unit after creating a panel.

In armory, heroes models can be rotated, and this behaviour can be enabled with `allowrotation="true"` settled. However, this parameter is not compatible with custom background maps.

## Background maps​

But wait, there's more! DOTAScenePanel accepts the "map" parameter, which points to a specific type of vmaps - background maps. You can find them in asset browser in background folder. Those vmaps only accept a specific set of entities and are shown in panorama using cameras. Let's follow up by creating a simple background map.

### Setting up the map​

Start up hammer editor and create a new map. Save it in your maps folder as 'background.vmap'. Go to Map -> Map Properties (Ctrl-Shift-P) and check the 'Compile as background map' checkbox.

Use the Entity Tool (Shift-E) and choose the `prop_dynamic` entity, then click somewhere in the world to place it.

Select that newly placed entity in the outliner and change its `World Model` property to `models/courier/donkey_unicorn/donkey_unicorn.vmdl`.

Now you've got your movie star ready to be displayed. You can also change the `Default Animation` field to `idle` or any string from its model entries.

Now we've got _action_ , but still missing _lights_ and _camera_. Let's begin with light - with the Entity Tool (Shift-E), create a `env_global_light` entity. Change it's name to `light`, for example.

Same as `env_global_light`, create a `point_camera` entity. Select your newly created camera, move your hammer camera in such way that you can see the donkey and click `View - Align Selection to Active Camera`.

As the last step select your camera and give it a name in the properties, like `camera1`.

Save your map and build it (F9).

### Setting up panorama​

I won't describe how to set up a basic panorama environment, if you are having issues with displaying simple panels, refer to <https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Panorama> Once you've ready to go, simply add `<DOTAScenePanel style="width:400px;height:400px;" map="background" light="light" camera="camera1" particleonly="false"/>` to your XML, you should see your donkey movie star in its full glory. Shouldn't take you more than 10 minutes.

Now let's get to the advanced part.

## The part where magic gets real​

### Units with cosmetics​

We can easily build up a "unit" like scene, using the `portrait_world_unit` entity type. This entity supports all kinds of units and also cosmetic item definitions. The quirk here is that you have to enter the raw properties editing mode to set displayed entity to a hero. Item definitions property all refer to different loadout slots and accept item IDs. Item ID list can be found [here](https://github.com/dotabuff/d2vpk/blob/master/dota_pak01/scripts/items/items_game.txt).

![Lina is awesome](https://i.imgur.com/ZsmLQA3.png)

### Multiple cameras​

This is pretty straightforward, `DOTAScenePanel` also accepts the `camera` parameter in the definition, which will try to find the camera with the provided name.

![https://puu.sh/o3Gv7/783de89488.jpg](https://puu.sh/o3Gv7/783de89488.jpg)

Important to note, compiling the map again does change the look of the panorama panel without restarting the map, but you can't change it at runtime. You'll understand how to achieve the same result in the following parts.

### Dynamic layout loading​

Since the only thing DOTAScenePanel respects is its own layout definition, we will have to provide it from the start. Fortunately we can load layout from string, while altering the definition.
    
    
    var camera = "camera1";  
    var style = "width:400px;height:400px;";  
    if (someCondition) {  
        camera = "camera2";  
    }  
      
    var sceneContainer = $("#SomeContainer");  
    sceneContainer.BCreateChildren("<DOTAScenePanel style='" + style + "' map='background' particleonly='false' light='light' camera='" + camera + "'"/>");  
    

As you might have noticed, you have to wrap the whole thing in '', while also providing the initial container for the layout. Pretty terrible, but for now it seems like the only way.

### Firing IO events​

#### Animation​

Now the REAL fun starts. Dashboard source code uses the `DOTAGlobalSceneFireEntityInput` event which starts the particles on the home button, for example. This event is basically a `DoEntFire` specifically for DOTAScenePanel.

For example usage, set up a simple `<DOTAScenePanel id="scene" style="width:400px;height:400px;" map="background"/>` (notice the `id`, it's very important!) once again. But this time, alter the map and change the donkey `Name` property to `donkey`, don't forget to rebuild the map.

Now make a basic panorama button, and give it `onactivate="DOTAGlobalSceneFireEntityInput(scene, donkey, SetAnimation, death)"`.

Now if you've done everything correctly, your donkey should play his death animation every time you press the button. How? Magic. But really though, refer to the _Inputs_ part of [this page](https://developer.valvesoftware.com/wiki/Prop_dynamic). Notice the `SetAnimation` input.

Also notice how we've used `DOTAGlobalSceneFireEntityInput` in onactivate as if it were a real function, which it isn't. That's because panel events are special cornflakes. In panorama javascript you have to use `$.DispatchEvent("DOTAGlobalSceneFireEntityInput", arguments)` to achieve the same result.

Example
    
    
    $.DispatchEvent("DOTAGlobalSceneFireEntityInput", "LightBuilder", "donkey", "SetAnimation", "spawn");  
    

#### Scripts? Scripts!​

If you were a good boy, you might have noticed the `RunScriptFile` and `RunScriptCode` inputs.

Now make a `donkey.lua` file in your `vscripts` folder and put a simple `print("Onions have layers, donkey")` in it.

Now set your button onactivate to `DOTAGlobalSceneFireEntityInput(scene, donkey, RunScriptFile, donkey)`.

Notice the lack of file extension. Press the button again. You should see the message in the console. Congratulations!

But don't get too excited. Yes, you can execute lua from panorama. But it's _clientside_ -lua and it's _very_ limited. You can't even move things there. The only good thing I could think to do is particles. A recent patch added ParticleManager support to clientside lua. So theoretically you can create, destroy and move different particles there, and particles are very powerful.

#### Entity parenting​

The way cosmetics in dota works is that every cosmetic item is a separate entity which is parented to a hero, attached to a specific attach point with specific offsets and offset angles. And we can do that too! (Well, partly, at least)

The way that works is you select a prop_dynamic, in object properties put up a parent entity name, put in the `Parent Model Bone/Attachment Name` (you can look up attachment names in the model editor), check the `Use Model Attachment Offset` checkbox and then realize that changing attachment offset doesn't work. At least for now. Changing angles works though so there is hope that offset will be fixed someday.

That's it for today!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/dotascenepanel.md)

---

## Button Examples

* [](/)
  * Panorama UI
  * Button Examples



On this page

# Button Examples

Here are some button examples that you can use in your custom games.

* * *

## Example 1 - Default Valve Button​

Here is the button that valve mostly uses for Dota 2. (Valve mostly recolor them for different uses: Green for Store, Gold-ish for Dotaplus etc.)

![https://i.imgur.com/fZyO9sA.png](https://i.imgur.com/fZyO9sA.png)

XML:
    
    
    <TextButton id="DefaultValveButtonID" class="DefaultValveButtonClass" text="#DefaultValveButton"/>  
    

CSS:
    
    
    #DefaultValveButtonID  
    {  
        horizontal-align: center;  
        vertical-align: bottom;  
        margin-bottom: 20px;  
        box-shadow: black -4px -4px 8px 8px;  
        margin-top: 20px;  
    }  
    .DefaultValveButtonClass  
    {  
        width: 270px;  
          
        min-width: 192px;  
        min-height: 36px;  
          
        background-color: gradient( linear, 0% 0%, 0% 100%, from( #373d45 ), to( #4d5860 ) );  
        border-style: solid;  
        border-width: 1px;  
          
        padding: 4px 10px;  
          
        border-top-color: #555555;  
        border-left-color: #494949;  
        border-bottom-color: #333333;  
        border-right-color: #404040;  
          
        transition-property: background-color;  
        transition-duration: 0.05s;  
        transition-timing-function: linear;  
    }  
    .DefaultValveButtonClass Label  
    {  
        margin-top: 2px;  
        text-transform: uppercase;  
        letter-spacing: 2px;  
        color: #FFFFFF;  
        text-align: center;  
        horizontal-align: center;  
        vertical-align: middle;  
        text-shadow: 2px 2px 0px 1.0 #000000;  
          
        transition-property: color;  
        transition-duration: 0.35s;  
        transition-timing-function: ease-in-out;  
          
        font-size: 18px;  
        font-family: defaultFont;  
    }  
    .DefaultValveButtonClass:hover  
    {  
        background-color: gradient( linear, 0% 0%, 0% 100%, from( #4c5561 ), to( #6c7d88 ) );  
        border-top-color: #aaaaaa77;  
        border-left-color: #aaaaaa33;  
        border-bottom-color: #333333;  
        border-right-color: #404040;  
    }  
    .DefaultValveButtonClass:active  
    {  
        background-color: gradient( linear, 0% 0%, 0% 100%, from( #393939), to( #555555 ) );  
        border-top-color: #222222;  
        border-left-color: #303030;  
        border-bottom-color: #666666;  
        border-right-color: #444444;  
        sound: "ui_generic_button_click";  
    }  
    

* * *

## Example 2 - Purple Button​

![https://i.imgur.com/uZKACHo.png](https://i.imgur.com/uZKACHo.png)

XML:
    
    
    <Button id="ExampleButton1">  
      <Label class="ExampleButton1Label" text="#Click"/>  
    </Button>  
    

CSS:
    
    
    #ExampleButton1  
    {  
        width: 330px;  
        min-height: 36px;  
        box-shadow: #F78F9015 -4px -4px 8px 8px;  
        background-color: black;  
        border: 1px solid #aaaaaa;  
        horizontal-align: right;  
        vertical-align: bottom;  
        margin-bottom: 20px;  
        margin-top: 8px;  
        margin-left: 32px;  
        margin-right: 32px;  
        padding: 0px;  
        flow-children: down;  
        background-image: url("s2r://panorama/images/textures/glassbutton_darkmoon_hover_psd.vtex");  
        background-size: 100%;  
        background-position: 50% 50%;  
        background-repeat: no-repeat;  
        transition-property: box-shadow, background-image, background-color;  
        transition-duration: .16s;  
        transition-timing-function: ease-in-out;  
        border-radius: 6px;  
    }  
    #ExampleButton1:hover  
    {  
        background-image: url("s2r://panorama/images/textures/glassbutton_darkmoon_psd.vtex");  
        box-shadow: fill transparent 0px 0px 0px 0px;  
        border: 1px solid #555555;  
    }  
    .ExampleButton1Label  
    {  
        width: 100%;  
        text-align: center;  
        margin-top: 3px;  
        font-size: 20px;  
        font-weight: thin;  
        text-transform: uppercase;  
        letter-spacing: 2px;  
        font-size: 22px;  
        color: grey;  
    }  
    

* * *

## Example 3 - Text Button with Icon​

You can add icon to your button -in this case, it is sized 26x26px default dota 2 logo- to make it look better.

![https://i.imgur.com/Fe5MiGc.png](https://i.imgur.com/Fe5MiGc.png)

XML:
    
    
    <Button id="ExampleButton2ID" class="ExampleButton2Class">  
      <Panel class="Contents">  
        <Panel class="CustomIcon"/>  
        <Label id="ExampleButton2Label" text="#ExampleButton"/>  
      </Panel>  
    </Button>  
    

CSS:
    
    
    #ExampleButton2ID  
    {  
        horizontal-align: center;  
        vertical-align: bottom;  
        margin-bottom: 22px;  
    }  
    .ExampleButton2Class  
    {  
        background-color: gradient( linear, 0% 0%, 0% 100%, from( #6b211c ), to( #8e2b19 ) );  
        border: 1px solid #bc4539;  
          
        transition-property: border, brightness;  
        transition-duration: 0.1s;  
        transition-timing-function: linear;  
        overflow: noclip;  
        min-width: 300px;  
        min-height: 45px;  
    }  
    .Contents  
    {  
        horizontal-align: center;  
        vertical-align: middle;  
        flow-children: right;  
        margin: 0px 20px;  
    }  
    .CustomIcon   
    {  
        background-image: url("s2r://panorama/images/control_icons/dota_logo_white_png.vtex");  
        background-size: contain;  
        width: 26px;  
        height: 26px;  
        margin-top: 4px;  
        margin-right: 4px;  
        horizontal-align: center;     
        vertical-align: middle;  
    }  
    .ExampleButton2Class:hover  
    {  
        brightness: 2;  
    }  
    .ExampleButton2Class:hover Label  
    {  
        color: white;     
    }  
    .ExampleButton2Class:active  
    {  
        brightness: 3;  
        border: 1px solid #501F18;  
          
        sound: "ui_generic_button_click";  
    }  
    .ExampleButton2Class Label  
    {  
        margin-top: 2px;  
        text-transform: uppercase;  
        color: white;  
        horizontal-align: center;  
        font-weight: bold;  
        font-size: 24px;  
        letter-spacing: 2px;  
        text-align: center;  
        vertical-align: middle;  
        text-shadow: 0px 0px 6px 1.0 #000000;  
        padding-left: 8px;  
        padding-right: 8px;  
        padding-top: 2px;  
          
          
        transition-property: color;  
        transition-duration: 0.1s;  
        transition-timing-function: linear;  
    }  
    .ExampleButton2Class:active Label   
    {  
        transform: translateY(1px);  
    }  
    

* * *

## Example 4 - Popup ESC Menu Buttons​

![https://i.imgur.com/v9LFLaw.png](https://i.imgur.com/v9LFLaw.png)

XML:
    
    
    <Panel id="PopupESCMenu">  
      <Panel id="ESCActionButtons">  
        <Button id="ESCResumeButton" class="ButtonBevel ESCMenuButton">  
          <Label text="RESUME" />  
        </Button>  
        <Button id="ESCOptionsButton" class="ButtonBevel ESCMenuButton">  
          <Label text="OPTIONS" />  
        </Button>  
        <Button id="ESCTestButton" class="ButtonBevel ESCMenuButton">  
          <Label text="TEST" />  
        </Button>  
        <Button id="ESCExitButton" class="ButtonBevel ESCMenuButton">  
          <Label text="EXIT" />  
        </Button>  
      </Panel>  
    </Panel>  
    

CSS:
    
    
    #PopupESCMenu {  
        width: 350px;  
        vertical-align: center;  
        horizontal-align: center;  
        opacity: 1.0;  
        transform: none;  
          
        transition-property: opacity, transform, pre-transform-scale2d, wash-color;  
        transition-duration: 0.4s;  
        transition-delay: 0.0s;  
        transition-timing-function: ease-in-out;  
        box-shadow: #00000099 -4px -4px 8px 8px;  
        flow-children: down;  
        padding: 2px;  
        background-image: url("file://{images}/custom_game/interface/esc_bg_psd.png");  
        background-position: center top;  
        background-color: none;  
    }  
    #ESCActionButtons {  
        flow-children: down;  
        width: fit-children;  
        horizontal-align: center;  
    }  
    .ButtonBevel {  
        width: 270px;  
        min-width: 192px;  
        min-height: 36px;  
          
        margin-top: 8px;  
        margin-bottom: 6px;  
          
        background-color: gradient( linear, 0% 0%, 0% 100%, from( #373d45 ), to( #4d5860 ) );  
        border-style: solid;  
        border-width: 1px;  
          
        padding: 4px 10px;  
          
        border-top-color: #555555;  
        border-left-color: #494949;  
        border-bottom-color: #333333;  
        border-right-color: #404040;  
          
        transition-property: background-color;  
        transition-duration: 0.05s;  
        transition-timing-function: linear;  
        box-shadow: #00000055 -2px -2px 4px 4px;  
    }  
    .ESCMenuButton {  
        margin-top: 8px;  
        margin-bottom: 6px;  
        width: 270px;  
    }  
    #ESCResumeButton {  
        background-color: #589c5e33;  
    }  
    #ESCResumeButton:hover {  
        opacity: 1.3;  
    }  
    .ESCMenuButton Label  
    {  
        font-weight: normal;  
        color: gradient( linear, 0% 0%, 0% 100%, from( #eaeaea ), to( #ababab) );  
    }  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/button-examples.md)

---

## Hiding HUD with SetHUDVisible

* [](/)
  * Panorama UI
  * Hiding HUD with SetHUDVisible



# Hiding HUD with SetHUDVisible

caution

This tutorial is outdated. It's recommended to use Panorama for UI manipulation now.

 **Example:**
    
    
     GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_TIMEOFDAY, false);  
    

There's a function currently missing from the API page: SetHUDVisible(int, bool) which I want to document here.

Credits to BMD for this list:

HUD Component| int value  
---|---  
DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY| 0  
DOTA_HUD_VISIBILITY_TOP_HEROES| 1  
DOTA_HUD_VISIBILITY_TOP_SCOREBOARD| 2  
DOTA_HUD_VISIBILITY_ACTION_PANEL| 3  
DOTA_HUD_VISIBILITY_ACTION_MINIMAP| 4  
DOTA_HUD_VISIBILITY_INVENTORY_PANEL| 5  
DOTA_HUD_VISIBILITY_INVENTORY_SHOP| 6  
DOTA_HUD_VISIBILITY_INVENTORY_ITEMS| 7  
DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY| 8  
DOTA_HUD_VISIBILITY_INVENTORY_COURIER| 9  
DOTA_HUD_VISIBILITY_INVENTORY_PROTECT| 10  
DOTA_HUD_VISIBILITY_INVENTORY_GOLD| 11  
DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS| 12  
  
Note that changing it once doesn't let you change it back without restarting tools, so this shouldn't be used to manipulate the HUD after the game loads.

 **Usage**

Somewhere in a game started event, I used `player_connect_full`
    
    
    mode = GameRules:GetGameModeEntity()  
    mode:SetHUDVisible(hud_component_value, false)  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/hiding-hud-with-sethudvisible.md)

---

## Bundling Scripts with Webpack

* [](/)
  * Panorama UI
  * Bundling scripts with webpack



On this page

# Bundling scripts with webpack

## What is webpack and why should I use it?​

Working on a large codebase there are two ways to organize your code. The first is just keeping all logic in a single `.js` file, which quickly becomes hard to change and comprehend. The second approach is splitting code by functionality, creating multiple `.js` files and including all of them in the layout file.

While the second approach is preferred it also has some problems. Lack of explicit references to value definitions makes it hard to track where a certain values comes from, and, since all files use a single shared scope, naming conflicts can arise.

In Lua these problems are solved with `require` function, which allows one script to include another. JavaScript also got an official solution to this problem in EcmaScript 2015 - modules.

The concept of modules is pretty simple. First you need to mark things that you want to expose from a file with `export` keyword:

utils.js
    
    
    export function sayHello() {  
      $.Msg('Hello, world!');  
    }  
    

And then you can `import` it in other file:

script.js
    
    
    import { sayHello } from './utils';  
      
    sayHello();  
    

However there's a catch: even though modules have been a part of JavaScript for a while, a lot of integrations (including Panorama) don't support it yet.

That's where webpack is useful. webpack takes your modules, resolves dependencies and merges them into a single plain `.js` file, that can be used in Panorama.

In addition, webpack:

  * Gives you an access to [a large ecosystem](https://www.npmjs.com/) of JavaScript packages
  * Makes it easier to share code with other custom games, using custom packages and [npm](https://www.npmjs.com/)
  * Makes it possible to share code with other environments, such as Node.js-based web servers, or Lua side of your custom game built with [TypeScriptToLua](https://typescripttolua.github.io/)
  * Consolidates all your Panorama code transformation tools, such as TypeScript, Sass, and code generators



## Getting Started​

note

You can skip most of the manual configuration in this guide by using a [JavaScript](https://github.com/ark120202/dota-templates/tree/webpack) or [TypeScript](https://github.com/ark120202/dota-templates/tree/webpack-typescript) templates.

### Installation​

  1. Install [Node.js](https://nodejs.org/).
  2. Create a `package.json` file in the root directory of your project with this content:


    
    
    {  
      "scripts": {  
        "build": "node --preserve-symlinks node_modules/webpack/bin/webpack.js --config content/panorama/webpack.config.js",  
        "dev": "node --preserve-symlinks node_modules/webpack/bin/webpack.js --config content/panorama/webpack.config.js --watch"  
      }  
    }  
    

note

We have to use `node --preserve-symlinks node_modules/webpack/bin/webpack.js` instead of just `webpack` because of reverse symlinking.

  3. Install dependencies by opening a command prompt and executing `npm install -D webpack@next webpack-cli webpack-panorama`.



### Basic Configuration​

webpack requires you to pass a configuration file, telling it how to transform your files. As you might have noticed in the previous step, in this tutorial we'll store it in `content/panorama/webpack.config.js`.

Here's a basic configuration:

content/panorama/webpack.config.js
    
    
    const path = require('path');  
    const { PanoramaTargetPlugin } = require('webpack-panorama');  
      
    /** @type {import('webpack').Configuration} */  
    module.exports = {  
      entry: {  
        hud: './hud/script.js',  
      },  
      
      mode: 'development',  
      context: path.resolve(__dirname, 'src'),  
      output: {  
        path: path.resolve(__dirname, 'scripts/custom_game'),  
      },  
      
      resolve: {  
        // Required because of reverse symlinking  
        symlinks: false,  
      },  
      
      plugins: [new PanoramaTargetPlugin()],  
    };  
    

Now let's create a few files for webpack to work on:

content/panorama/src/hud/script.js
    
    
    import { sayHello } from '../utils';  
      
    sayHello();  
    

content/panorama/src/utils.js
    
    
    export function sayHello() {  
      $.Msg('Hello, world!');  
    }  
    

And layout files to make Panorama run our script:

content/panorama/layout/custom_game/hud.xml
    
    
    <root>  
      <scripts>  
        <include src="file://{resources}/scripts/custom_game/hud.js" />  
      </scripts>  
      <Panel />  
    </root>  
    

content/panorama/layout/custom_game/custom_ui_manifest.xml
    
    
    <root>  
      <Panel>  
        <CustomUIElement type="Hud" layoutfile="file://{resources}/layout/custom_game/hud.xml" />  
      </Panel>  
    </root>  
    

Now you can run `npm run build` in your terminal to build the project once, or `npm run dev` to make it rebuild the project every time you change your scripts.

After building the project, webpack would output a `content/panorama/scripts/custom_game/hud.js` bundle.

### Using external packages​

Besides local script files, modules allow you to use code written by other developers.

For example, let's add a popular utility library [`lodash`](https://lodash.com/).

First, you need to add it to your project using npm:
    
    
    npm install lodash  
    

And then you can import it like any other module:
    
    
    import * as _ from 'lodash';  
      
    $.Msg(_.uniq([1, 2, 1, 3, 1, 2])); // => [1,2,3]  
    

Similarly you can use packages created specifically for Panorama, for example [react-panorama](/panorama/react) or [`panorama-polyfill`](https://www.npmjs.com/package/panorama-polyfill).

You can find more packages built for Panorama using this search query: [keywords:dota, panorama](https://www.npmjs.com/search?q=keywords%3Adota%2C%20panorama).

## Loaders and TypeScript​

webpack loaders are packages that process your files before webpack puts them into a bundle.

One good example of a loader is [`babel-loader`](https://www.npmjs.com/package/babel-loader), which processes your code with Babel, allowing you to use newer JavaScript features, and non-standard syntax extensions, such as [JSX](/panorama/react#JSX).

First you need to install a few dependencies:
    
    
    npm install -D babel-loader @babel/core @babel/preset-react  
    

Now you need to tell webpack when and how to use this loader, using `module.rules` configuration section:

content/panorama/webpack.config.js
    
    
      resolve: {  
        symlinks: false,  
      },  
      
    + module: {  
    +   rules: [  
    +     { test: /\.js$/, loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } },  
    +   ],  
    + },  
      
      plugins: [new PanoramaTargetPlugin()],  
    

### TypeScript​

Currently support for [TypeScript](/panorama/introduction-to-panorama-ui-with-typescript) for Panorama cannot be provided just with a loader, because of a way referenced script files are processed. To resolve this you also need to use [`fork-ts-checker-webpack-plugin`](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin).
    
    
    npm install -D typescript ts-loader fork-ts-checker-webpack-plugin  
    npm install panorama-types  
    

content/panorama/webpack.config.js
    
    
    +const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");  
      
    module.exports = {  
      entry: {  
    -   hud: './hud/script.js',  
    +   hud: './hud/script.ts',  
      },  
      
      resolve: {  
    +   extensions: ['.ts', '.tsx', '...'],  
        symlinks: false,  
      },  
      
    + module: {  
    +   rules: [  
    +     { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } },  
    +   ],  
    + },  
      
      plugins: [  
        new PanoramaTargetPlugin(),  
    +   new ForkTsCheckerWebpackPlugin({  
    +     typescript: {  
    +       configFile: path.resolve(__dirname, "tsconfig.json"),  
    +     },  
    +   }),  
      ],  
    };  
    

content/panorama/tsconfig.json
    
    
    {  
      "include": ["src"],  
      "compilerOptions": {  
        "target": "es2017",  
        "lib": ["es2017"],  
        "types": ["panorama-types"],  
        "moduleResolution": "node",  
        "strict": true  
      }  
    }  
    

## XML layout files​

In the previous steps webpack have been used only for script assets. This isn't perfect, because you have to manually keep entry points in sync, directory structure isn't centralized, and you can't use webpack for .css asset processing.

The solution is to let webpack take care of all your Panorama files.

And modify `webpack.config.js` like that:

content/panorama/webpack.config.js
    
    
    const path = require('path');  
    const { PanoramaTargetPlugin } = require('webpack-panorama');  
      
    /** @type {import('webpack').Configuration} */  
    module.exports = {  
      entry: {  
    -   hud: './hud/script.js',  
    +   hud: { filename: 'hud/layout.xml', import: './hud/layout.xml' },  
      },  
      
      mode: 'development',  
      context: path.resolve(__dirname, 'src'),  
      output: {  
        path: path.resolve(__dirname, 'layout/custom_game'),  
    +   publicPath: 'file://{resources}/layout/custom_game/',  
      },  
      
      resolve: {  
        symlinks: false,  
      },  
      
    + module: {  
    +   rules: [  
    +     { test: /\.xml$/, loader: 'webpack-panorama/lib/layout-loader' },  
    +     { test: /\.js$/, issuer: /\.xml$/, loader: 'webpack-panorama/lib/entry-loader' },  
    +   ],  
    + },  
      
      plugins: [new PanoramaTargetPlugin()],  
    };  
    

Now you need to move layout file to the source directory, and use relative script path:

content/panorama/src/hud/layout.xml
    
    
    <root>  
      <scripts>  
        <include src="./script.js" />  
      </scripts>  
      <Panel />  
    </root>  
    

## Custom UI Manifest​

Now you don't need to synchronize your script entrypoints and layout script references, however you still have to do this for `custom_ui_manifest.xml`. `PanoramaManifestPlugin` allows you to define your entrypoints in a simple format, and generates `custom_ui_manifest.xml` including them.

content/panorama/webpack.config.js
    
    
    const path = require('path');  
    -const { PanoramaTargetPlugin } = require('webpack-panorama');  
    +const { PanoramaManifestPlugin, PanoramaTargetPlugin } = require('webpack-panorama');  
      
    /** @type {import('webpack').Configuration} */  
    module.exports = {  
    - entry: {  
    -   hud: { filename: 'hud/layout.xml', import: './hud/layout.xml' },  
    - },  
      
      mode: 'development',  
      context: path.resolve(__dirname, 'src'),  
      output: {  
        path: path.resolve(__dirname, 'layout/custom_game'),  
        publicPath: 'file://{resources}/layout/custom_game/',  
      },  
      
      module: ...,  
      
      plugins: [  
        new PanoramaTargetPlugin(),  
    +   new PanoramaManifestPlugin({  
    +     entries: [{ import: './hud/layout.xml', type: 'Hud' }]  
    +   }),  
      ],  
    };  
    

note

Since webpack 5 is currently in beta, some transitive dependencies might yield deprecation warnings. They can be safely ignored.

`entries` option of `PanoramaManifestPlugin` accepts a list of entrypoints following this schema:
    
    
    interface ManifestEntry {  
      /**  
       * Module(s) that are loaded upon startup.  
       */  
      import: string;  
      
      /**  
       * Specifies the name of the output file on disk.  
       *  
       * @example  
       * { import: './loading-screen/layout.xml', filename: 'custom_loading_screen.xml' }  
       */  
      filename?: string | null;  
      
      /**  
       * Type of a Custom UI.  
       *  
       * When not provided, this entry would be omitted from `custom_ui_manifest.xml` file.  
       *  
       * Can be defined only for XML entrypoints.  
       */  
      type?: ManifestEntryType | null;  
    }  
      
    type ManifestEntryType =  
      | 'GameSetup'  
      | 'HeroSelection'  
      | 'Hud'  
      | 'HudTopBar'  
      | 'FlyoutScoreboard'  
      | 'GameInfo'  
      | 'EndScreen';  
    

## CSS​

Since now all layout files are processed with webpack, adding a new resource type isn't any different from adding a new resource type for JavaScript.
    
    
    npm install -D file-loader  
    

content/panorama/webpack.config.js
    
    
      module: {  
        rules: [  
          { test: /\.xml$/, loader: 'webpack-panorama/lib/layout-loader' },  
          { test: /\.js$/, issuer: /\.xml$/, loader: 'webpack-panorama/lib/entry-loader' },  
    +     {  
    +       test: /\.css$/,  
    +       issuer: /\.xml$/,  
    +       loader: 'file-loader',  
    +       options: { name: '[path][name].css', esModule: false },  
    +     },  
        ],  
      },  
    

### SASS​
    
    
    npm install -D sass-loader sass  
    

content/panorama/webpack.config.js
    
    
      module: {  
        rules: [  
          { test: /\.xml$/, loader: 'webpack-panorama/lib/layout-loader' },  
          { test: /\.js$/, issuer: /\.xml$/, loader: 'webpack-panorama/lib/entry-loader' },  
          {  
    -       test: /\.css$/,  
    +       test: /\.(css|s[ac]ss)$/,  
            issuer: /\.xml$/,  
            loader: 'file-loader',  
            options: { name: '[path][name].css', esModule: false },  
          },  
    +     { test: /\.s[ac]ss$/, loader: 'sass-loader' }  
        ],  
      },  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/webpack.md)

---

## React in Panorama

* [](/)
  * Panorama UI
  * React in Panorama



On this page

# React in Panorama

React is a JavaScript library for building user interfaces. It allows you to break down UI into small reusable building blocks (components) and simplifies state management.

Usually React is used for building websites and web applications, but [`react-panorama`](https://github.com/ark120202/react-panorama) allows you to use the power of React in Dota 2.

## Installation​

To avoid wasting time on configuration, it's recommended to start with the [JavaScript](https://github.com/ark120202/dota-templates/tree/webpack-react) or [TypeScript](https://github.com/ark120202/dota-templates/tree/webpack-typescript-react) templates, even if you're integrating it into an existing project.

Alternatively, if you want to configure build tools yourself, or you want to use it without any build steps (UMD), you can check out [`react-panorama` installation guide](https://github.com/ark120202/react-panorama#installation).

## JSX​

Here's a basic hello-world application built with React:
    
    
    import React from 'react';  
    import { render } from 'react-panorama';  
      
    render(<Label text="Hello, world!" />, $.GetContextPanel());  
    

The first parameter that gets passed to the `render` function is a tree of components constructed using JSX - an extension to the JavaScript syntax.

JSX tree is a regular JavaScript expression, just like a string, or object literal. That means you can manipulate it like any regular JS value - store it in variables, use it in conditions, or return it from functions.

For more information about JSX you can check out [official React documentation](https://reactjs.org/docs/introducing-jsx.html).

## Components​

Instead of having all your UI in a monolithic XML file, React encourages you to split functionality into small building blocks - components.

In React, components are simple functions that return JSX:
    
    
    import React from 'react';  
    import { render } from 'react-panorama';  
      
    function App() {  
      return <Label text="Hello, world!" />;  
    }  
      
    render(<App />, $.GetContextPanel());  
    

Components can accept parameters as a function argument:
    
    
    import React from 'react';  
    import { render } from 'react-panorama';  
      
    function HeroRow({ heroName }: { heroName: string }) {  
      return (  
        <Panel style={{ flowChildren: 'right' }}>  
          <DOTAHeroImage heroimagestyle="icon" heroname={heroName} />  
          <Label style={{ marginLeft: '5px' }} localizedText={heroName} />  
        </Panel>  
      );  
    }  
      
    function HeroList() {  
      return (  
        <Panel style={{ flowChildren: 'down' }}>  
          <HeroRow heroName="npc_dota_hero_abaddon" />  
          <HeroRow heroName="npc_dota_hero_abyssal_underlord" />  
          <HeroRow heroName="npc_dota_hero_alchemist" />  
        </Panel>  
      );  
    }  
      
    render(<HeroList />, $.GetContextPanel());  
    

## State​

In modern React applications, state is usually managed using [hooks](https://reactjs.org/docs/hooks-intro.html). One of the basic hooks, [`useState`](https://reactjs.org/docs/hooks-state.html), allows you to declare a component-scoped variable, which re-renders the component every time its value gets changed. Here's a basic counter example:
    
    
    import React, { useState } from 'react';  
    import { render } from 'react-panorama';  
      
    function Counter() {  
      const [count, setCount] = useState(0);  
      const increment = () => setCount(count + 1);  
      
      return (  
        <Panel style={{ flowChildren: 'down' }}>  
          <Label text={`Count: ${count}`} />  
          <TextButton className="ButtonBevel" text="Increment" onactivate={increment} />  
        </Panel>  
      );  
    }  
      
    render(<Counter />, $.GetContextPanel());  
    

Similarly, you can use `useState` to bind state to input elements:

  * ToggleButton
  * Slider
  * TextEntry


    
    
    import React, { useState } from 'react';  
    import { render } from 'react-panorama';  
      
    function ConditionalRendering() {  
      const [showDetails, setShowDetails] = useState(false);  
      
      return (  
        <Panel style={{ flowChildren: 'down' }}>  
          <ToggleButton  
            text="Show details"  
            selected={showDetails}  
            onactivate={() => setShowDetails(!showDetails)}  
          />  
      
          {showDetails && <Label text="Details!" />}  
        </Panel>  
      );  
    }  
      
    render(<ConditionalRendering />, $.GetContextPanel());  
    
    
    
    import React, { useState } from 'react';  
    import { render } from 'react-panorama';  
      
    function ColorPicker() {  
      const [red, setRed] = useState(0.5);  
      const [green, setGreen] = useState(0.5);  
      const [blue, setBlue] = useState(0.5);  
      
      return (  
        <Panel style={{ flowChildren: 'right' }}>  
          <Slider value={red} onvaluechanged={(p) => setRed(p.value)} />  
          <Slider value={green} onvaluechanged={(p) => setGreen(p.value)} />  
          <Slider value={blue} onvaluechanged={(p) => setBlue(p.value)} />  
          <Panel  
            style={{  
              backgroundColor: `rgb(${red * 255}, ${green * 255}, ${blue * 255})`,  
              width: '125px',  
              height: '125px',  
            }}  
          />  
        </Panel>  
      );  
    }  
      
    render(<ColorPicker />, $.GetContextPanel());  
    
    
    
    import React, { useState } from 'react';  
    import { render } from 'react-panorama';  
      
    function ReservedText() {  
      const [text, setText] = useState('');  
      
      return (  
        <Panel style={{ flowChildren: 'down' }}>  
          <TextEntry text={text} ontextentrychange={(p) => setText(p.text)} />  
          <Label text={`Reversed text: ${[...text].reverse().join('')}`} />  
        </Panel>  
      );  
    }  
      
    render(<ReservedText />, $.GetContextPanel());  
    

## Listening to events​

In React, the only things that should affect what component shows are its props and state. So, in order to make component update data when a certain game event happens, you need to make event listener update component's state.

Since we can update component state only within the component itself, we also have to put our `GameEvents.Subscribe` call inside the component. However you can't register it in the render function itself, because it gets executed more often than we need to, since we need to register our listener only when the component gets mounted for the first time. That's when we have to use another builtin hook - [`useEffect`](https://reactjs.org/docs/hooks-effect.html).

`useEffect` hook is a function that usually gets called with 2 parameters. First one is the callback we want to execute, which would register our listener. The second is the list of state variable that our . Since we don't use any state for our listener, we can just use an empty array (`[]`). Also, optionally our callback can return a cleanup function, which is called either when one of dependencies changes, or when component gets unmounted.
    
    
    import React, { useEffect, useState } from 'react';  
    import { render } from 'react-panorama';  
      
    function KDA() {  
      const [kills, setKills] = useState(() => Game.GetLocalPlayerInfo().player_kills);  
      const [deaths, setDeaths] = useState(() => Game.GetLocalPlayerInfo().player_deaths);  
      const [assists, setAssists] = useState(() => Game.GetLocalPlayerInfo().player_assists);  
      
      useEffect(() => {  
        const handle = GameEvents.Subscribe('dota_player_kill', () => {  
          const playerInfo = Game.GetLocalPlayerInfo();  
          setKills(playerInfo.player_kills);  
          setDeaths(playerInfo.player_deaths);  
          setAssists(playerInfo.player_assists);  
        });  
      
        return () => GameEvents.Unsubscribe(handle);  
      }, []);  
      
      return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;  
    }  
      
    render(<KDA />, $.GetContextPanel());  
    

`react-panorama` provides a custom hook that makes listening to game events a little easier:
    
    
    import React, { useState } from 'react';  
    import { render, useGameEvent } from 'react-panorama';  
      
    function KDA() {  
      const [kills, setKills] = useState(() => Game.GetLocalPlayerInfo().player_kills);  
      const [deaths, setDeaths] = useState(() => Game.GetLocalPlayerInfo().player_deaths);  
      const [assists, setAssists] = useState(() => Game.GetLocalPlayerInfo().player_assists);  
      useGameEvent('dota_player_kill', () => {  
        const playerInfo = Game.GetLocalPlayerInfo();  
        setKills(playerInfo.player_kills);  
        setDeaths(playerInfo.player_deaths);  
        setAssists(playerInfo.player_assists);  
      }, []);  
      
      return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;  
    }  
      
    render(<KDA />, $.GetContextPanel());  
    

Just like that, you can listen to UI events, custom net table updates, or just time passing. `react-panorama` provides [a few more custom hooks](https://github.com/ark120202/react-panorama#hooks) for common use cases.

### Custom hooks​

One of things that React Hooks make easier is code reuse. For example, we can extract logic used to listen to KDA changes into a custom `useKDA` hook.
    
    
    import React, { useState } from 'react';  
    import { render, useGameEvent } from 'react-panorama';  
      
    function useKDA() {  
      // Since both initializing and updating state is the same process,  
      // we can extract it into a regular function  
      function getKDA() {  
        const playerInfo = Game.GetLocalPlayerInfo();  
        return {  
          kills: playerInfo.player_kills,  
          deaths: playerInfo.player_deaths,  
          assists: playerInfo.player_assists,  
        };  
      }  
      
      const [kda, setKDA] = useState(getKDA);  
      
      useGameEvent('dota_player_kill', () => setKDA(getKDA()), []);  
      
      return kda;  
    }  
      
    function KDA() {  
      const { kills, deaths, assists } = useKDA();  
      
      return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;  
    }  
      
    function KDARatio() {  
      const { kills, deaths, assists } = useKDA();  
      const ratio = (kills + assists) / (deaths || 1);  
      
      return <Label style={{ color: 'white' }} text={`KDA Ratio: ${ratio}`} />;  
    }  
      
    function App() {  
      return (  
        <Panel style={{ flowChildren: 'down' }}>  
          <KDA />  
          <KDARatio />  
        </Panel>  
      );  
    }  
      
    render(<App />, $.GetContextPanel());  
    

## Next Steps​

This tutorial have covered only basics of React. React has a large ecosystem of libraries, patterns and articles, lots of which would apply to Panorama. As a starting point you can check out [the official React website](https://reactjs.org/) (although some parts of it are [a little](https://github.com/reactjs/reactjs.org/issues/1782) [outdated](https://github.com/reactjs/reactjs.org/issues/1788)).

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/react.md)

---

# Assets

## Asset File Type Reference

* [](/)
  * Assets
  * Asset File Type Reference



# Asset File Type Reference

This list contains all the info for asset types with its related tools & guides explaining the formats.

Type| .Extension| S1 Equivalent| Info, Format, Decompiler  
---|---|---|---  
Animation| vanim| smd|  _.smd_ files are added to a _.vmdl_ through the Model Editor to make _.vanim_ files.  
Animation Sequence| vgarp| ?| ??  
Map| vmap| vmf| Hammer Files.  
No decompiler known to humans yet, but it is rumored that a magical penguin is working on it  
Material| vmat| vmt| Made with .tga files in the Material Editor.  
Decompiler: [S2DC](https://moddota.com/forums/discussion/264/source-2-decompiler)  
Model| vmdl| mdl| Decompilation Guide: [MDL to VMDL Conversion](/assets/models/mdl-to-vmdl-conversion)  
Mesh| vmesh| smd,dmx,fbx| Defines the shape of a model.  
Loaded to the Model editor to make a new model.  
Particle| vpcf| pcf| Decompiler: [S2DC](https://moddota.com/forums/discussion/264/source-2-decompiler)  
No method yet known for PCF to VPCF conversion.  
Sound| vsnd| wav| Takes wav/mp3 files and converts them to this file through a _.vsndevts_  
Sound Event| vsndevts| txt| [Sound Editor](https://github.com/pingzing/dota2-sound-editor) reads the Source 1 strings which are identical to the ones used in Source 2.  
Guide: [Adding and playing Custom Sounds](/assets/custom-sounds)  
Texture| vtex| vtx| Compiled out of .tga files.  
Compiler/Decompiler: [ModKit](https://github.com/Myll/Dota-2-ModKit/releases)  
Guide: [Extracting and Compiling VTEX files](http://moddota.com/forums/discussion/85/extracting-and-compiling-vtex-files)  
  
It will be updated as we get more knowledge and build more tools for file decompiling and conversion.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/asset-file-type-reference.md)

---

## Custom Sounds

* [](/)
  * Assets
  * Custom Sounds



On this page

# Custom Sounds

Here's an step by step guide to custom sound events.

## 1 - Preparing the file​

You want a file with mp3 extension, .wav might work but I haven't tried it. You can convert sounds to mp3 using any decent sound editor, I use Audacity, you can download it from [here](https://audacity.sourceforge.net/download/)

If you want a sound from a youtube video, I recommend using this website: <https://www.vidtomp3.com/>

## 2 - Copy/Move the file to the content folder​

Sound files to be compiled by Source2 dota need to be placed in the **content\dota_addons\ADDON_NAME\sounds** folder. If you don't have it, create one.

Folder structure:

![img](https://puu.sh/guI0g/438a0323a4.png)

## 3 - The Custom Sounds Valve Event​

Also inside the content folder of your addon, there should be an soundevents folder:

![img](https://puu.sh/guI3k/1c84b64257.png)

Create one if there isn't. Here is the place where text files with the **.vsndevts** extension are located. You can name it as you want was long as you keep that extension. I usually use custom_sounds.vsndevts for all the addon's sounds, and **make sure to precache this file somewhere** (usually it's easier to do it once in Lua Precache(context) and forget about it).

The structure of the file is quite simple, it's a KV list with a sound string name as the first value of each sound block and then many values that control different properties of the sounds which aren't really important most of the times if you use this code:
    
    
    "SoundStringName"  
    {  
        "operator_stacks"  
        {  
            "update_stack"  
            {  
                "reference_operator"  
                {  
                    "operator"              "sos_reference_stack"  
                    "reference_stack"       "dota_src1_3d"  
                    "operator_variables"  
                    {  
                        "vsnd_files"  
                        {  
                            "value"  
                            {  
                                  "value0"        "sounds/FileName.vsnd"  
                            }  
                        }  
                        "volume"            {   "value"     "10.00000"  }  
                        "pitch_rand_min"    {   "value"     "-0.05000"  }  
                        "pitch_rand_max"    {   "value"     "0.050000"  }  
                        "pitch"             {   "value"     "1.000000"  }  
                        "soundlevel"        {   "value"     "100.00000" }  
                        "distance_max"      {   "value"     "1600.000"  }  
                        "event_type"        {   "value"     "1.000000"  }  
                    }  
                }  
            }  
        }  
    }  
    

First **`"AddonName.FileName"`** , which is your desired sound string and will be used to Fire/Emit it

Last and most important, the **`"sounds/FileName.vsnd"`** contains a relative path to the sound files **compiled valveSound**. The sound you added on the step 2 was an mp3, the engine will convert this sound to .vsnd when the **.vsndevts** file is compiled/build.

In this whole block, the only lines you want to change when doing the new sound. Here's the whole [CourierMadness' custom_sounds.vsndevts](https://pastebin.com/kcuLqZBm), as you can see, its basically a big copy paste of the same block, just changing those 2 lines.

You can change the volume/pitch of your sounds of course, play around the operator_variables for this.

## Step 4 - Emitting and making sure the sound is being compiled​

Once the sound event file is done, you need to force the game to compile it before calling the string with KV `"FireSound"` or any Lua `EmitSound()` variant.

For this, go into the Workshop Tools Asset Browser of your addon, type the name of your custom sound event and do a Full Recompile+Reload

![img](https://puu.sh/guIUd/4ce0b6f142.png)

Now, if you go into your game addon folder, there should be a sounds and soundevents folder, which should contain your _c compiled version of the files made in the content folder.

![img](https://puu.sh/guJ7J/00d69a1243.png)

If this isn't the case, go into the Asset Browser again and instead of your sound event, type the name of your sound file, and click on it, if it starts playing, it has been properly compiled.

* * *

Thanks for reading, leave any questions below.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/custom-sounds.md)

---

## Extracting and Compiling VTEX Files

* [](/)
  * Assets
  * Extracting and Compiling VTEX files



On this page

# Extracting and Compiling VTEX files

Hello everybody. Recently, I've been looking through the .VTEX files used by most of the sprites and particle effects in-game, but I couldn't find any extensive documentation about it. Therefore, I decided to write this little guide in case anybody else finds it useful.

### Extracting from VTEX​

1) Extracting images from compiled VTEX files (.VTEX_C) is actually quite simple, but we need those files first. If you haven't already extracted them, you can find them in pak01_dir.vpk, which is located in your dota_ugc\game\dota_imported folder. Use a tool like GCFScape to open and extract the files that you need.

![img](https://i.imgur.com/xsQnBg9.png)

2) Next, go to your dota_ugc\game\bin\win64 directory (the tools aren't present in the win32 directory, for some reason). Type the following:
    
    
    resourceinfo.exe -i <your vtex_c file> -debug tga -mip  
    

This extracts the various mip maps and stores them as individual TGA images. If everything goes well, you should get something like this:

![img](https://i.imgur.com/HrXehTo.png)

Additionally, you should also have one or more TGA images in your win64 directory, depending on how many mip levels the texture has. Open the one with "_mip0", as this is the base (original) image.

![img](https://i.imgur.com/nKUPQQG.png)

3) There is no step 3. Congratulations. You have successfully extracted the underlying TGA image from a compiled VTEX file. Easy, right?

### Compiling to VTEX​

1) Compiling to VTEX is also quite easy. First, put all of the TGA images you plan on using in the same directory. If you are only compiling one image, then this is not a problem. For this example though, I will be changing several of the icons in the original msg_01.vtex file.

![img](https://i.imgur.com/j4T6CW8.png)

2) Next, we need to create a VTEX file. VTEX files are ASCII data files which describe the properties of the texture, the inputs, and the outputs. If you created your mod from an empty template, you should find some examples of VTEX files in the dota_ugc\content\dota_addons\(modname)\materials\particle directory. Open one of them up and it should look something like this:

![img](https://i.imgur.com/FkcOxgM.png)

Simply replace the filename in the highlighted line ("m_fileName", under "CDmeInputTexture") with the name of your TGA image and you're set.

2b) If you're creating a texture with sequences however, you must create a .MKS file first. Like VTEX files, MKS files are ASCII data files, although these files describe how and which sprites to render in-game. Refer to the [Valve Developer Wiki](https://developer.valvesoftware.com/wiki/Animated_Particles) for more information on MKS files and animated particles in general. Note that you do NOT need to compile the MKS files with mksheet.exe first.

Once you have the .mks file, replace the filename as mentioned above with the name of the MKS file instead.

3) Go back to dota_ugc\game\bin\win64, and type the following:
    
    
    resourcecompiler -i <your vtex file>  
    

If everything goes well, you should see something like this:

![img](https://i.imgur.com/qQyXGI9.png)

You should also see a .VTEX_C file somewhere in your dota_ugc\game\dota_addons\(modname)\materials folder, which you can now freely use all throughout your mod.

![img](https://i.imgur.com/xCQSs0C.png)

### Download​

If you want to use the example .VTEX_C file created by this tutorial to use in your mod, you can download it [here](https://www.mediafire.com/download/fgce2192os392on/iw_msg_01.zip). For comparison:

![img](https://i.imgur.com/AQT6Foz.png) ![img](https://i.imgur.com/JpsmJxS.png)

### Bonus GIF​

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/extracting-and-compiling-vtex-files.md)

---

## Custom Minimap Icons

* [](/)
  * Assets
  * Custom Minimap Icons



On this page

# Custom Minimap Icons

Here is a quick and simple step by step guide on how to make and use your own minimap icons for creatures

## Step 1: Get the files​

[minimap_icon.zip](https://drive.google.com/file/d/1nsisy1oPKXsGR3LFhfRjBhwQIp9A7jY2/view?usp=sharing)

This contains the following files:

  *  **addon_hud_textures.txt**
  *  **vgui/hud/minimap_icon.txt**
  *  **vgui/hud/minimap_icon.vmat**
  *  **vgui/hud/minimap_icon.psd**



addon_hud_textures is an unique file to define the paths for every custom icon.

The 3 minimap_icon files are used together, and should be renamed to the name your future icon, like _minimap_questgiver_ or _boss_kappa_.

## Step 2: Edit the files​

### PSD Image​

Use a graphic editor such as Photoshop or GIMP to edit the PSD file. 

In the example source file, I quickly made this transparent image from [this source](https://i.imgur.com/x3L74Hw.png):

![img](https://i.imgur.com/78Z3kaV.png)

The suggested image size is **64x64**.  
If you want to use a different image size it **must be a power of two**.

 **Important** : You need to have an Alpha layer filled with the transparent figure you want to display:

![img](https://puu.sh/lhQL0/81b3632bad.png)

For better results, add strong black borders to the image as an outline (and remember to update the Alpha layer accordingly).

### VMAT Material​

Open the vmat with any code editor and make sure to change minimap_icon.psd for the name of your choice. Keep the rest unchanged
    
    
    "Layer0"  
    {  
        "Shader"            "ui.vfx"  
        "F_STENCIL_MASKING" "1"  
        "Texture"           "materials/vgui/hud/minimap_icon.psd" //EDIT THIS  
        "F_TRANSLUCENT"     "1"  
    }  
    

### Texture KV File​

Same process in the addon_hud_textures.txt file
    
    
    ""  
    {  
        "TextureData"  
        {  
            "minimap_icon" //EDIT THIS  
            {  
                "file"     "materials/vgui/hud/minimap_icon.vmat" //EDIT THIS  
                "x"        "0"  
                "y"        "0"  
                "width"    "64"  
                "height"   "64"  
            }  
        }  
    }  
    

For more icons, just copy the minimap_icon block again with another name inside TextureData

### Step 3: Move the files​

  *  **minimap_icon** files go in **content** /dota_addons/YOUR_ADDON/materials/ **vgui/hud/**. 

  * **addon_hud_textures.txt** file goes in **game** /dota_addons/YOUR_ADDON/scripts/




### Step 4: Compile and check​

Go into the asset browser, write the name of your icon, open the vmat by double clicking on it (this will compile it).

![img](https://puu.sh/lhRLL/31d63b48d9.jpg)

### Step 5: Set your unit to use the new icon​

In the unit definition, add these lines:
    
    
    "MinimapIcon"        "minimap_icon"  
    "MinimapIconSize"    "1000"  
    "MinimapDisableTint" "1"  
    

`MinimapIconSize` determines the relative size of the minimap icon, while `MinimapDisableTint` can be 0 or omitted if you want the creature to use different team colors.

### 6\. Try it ingame​

![img](https://puu.sh/lhQFp/37192e1e63.jpg)

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/custom-minimap-icons.md)

---

# Maps

## Hammer Tutorials

* [](/)
  * Assets
  * Maps
  * Hammer Tutorials



On this page

# Hammer Tutorials

## Tile Editor​

## Mesh Basics​

## Entity Basics​

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/maps/hammer-tutorials.md)

---

## Making Skip/Clip Blocks

* [](/)
  * Assets
  * Maps
  * Making skip/clip blocks out of models



# Making skip/clip blocks out of models

This is the quickest but one very useful tip for Hammer map design. 

When you drag a prop model into the map, it won't have any collision, so if you want heroes to walk over it or be blocked by it, you need to add a skip or clip block. You could make a very raw block like a neanderthal, but there is a better way that will maintain every edge on the model:

  1. Copy Paste Special (Ctrl+Shift+V with the model selected)
  2. Selected props -> Convert into Editable Mesh (Ctrl+Shift+T with the newly selected pasted model)
  3. Apply material (Shift+T)



That's it.

Thanks BMD for the gyfs

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/maps/making-skip-clip-blocks-out-of-models.md)

---

# Models

## Importing Custom Models

* [](/)
  * Assets
  * Models
  * Importing custom models



# Importing custom models

Many people probably have the idea of using custom models into the map but having a hard time with importing models into the engine, importing animation for the models, importing texture for the model, creating up your hero without cosmetic problem, and especially, doing this with .mdx format which is originally from Warcraft 3 since many people seems to want to port maps from warcraft 3 to source 2. Here is the tutorial on how to do so.

This tutorial will mainly focus on importing .mdx to source 2 engine for hero's use. But the steps are also usable with other models, units, and extensions as well if it has base model and animation ready. If you have any suggestion, question or improvement to this tutorial, do not hesitate send me a message or leave a comment.

## Credits:

\- Dun1007, on importing mdx to source 2  
\- Tailer007, for the model in this example (not sure who was the original modeler)  
\- BMD, for his timers' file

## Required materials:

\- Dota 2  
\- Dota 2 Workshop Tools Alpha  
\- 3ds max  
\- timers.lua, can be found [here](https://github.com/bmddota/barebones/blob/source2/game/dota_addons/barebones/scripts/vscripts/timers.lua)  
\- model, in this example, I will use Asuna from SAO in this link. [Click here](https://api.viglink.com/api/click?format=go&jsonp=vglnk_14224047875778&drKey=1082&libId=fca55403-b124-4a6f-b0f3-ffaf43c9ed30&loc=http%3A%2F%2Fchaosrealm.info%2Ftopic%2F10759280%2F5%2F&v=1&out=http%3A%2F%2Fz5.ifrm.com%2F30005%2F144%2F0%2Fp1230621%2FAsunaV1.rar&ref=http%3A%2F%2Fchaosrealm.info%2Ftopic%2F10759280%2F4%2F&title=Tailer%27s%20Tailored%20Models&txt=%3Cimg%20src%3D%22http%3A%2F%2Fz5.ifrm.com%2F30005%2F144%2F0%2Fp1232295%2Fdl_but.png%22%20alt%3D%22Attachments%3A%22%3E%20AsunaV1.rar%20\(146.95%20KB\))  
\- impexpmdx_v2.0.4.ms, this is only required for .mdx format  
\- Warcraft 3 Model editor, this is only required for .mdx format, can get via this [link](https://www.hiveworkshop.com/threads/war3-model-editor.62876/)  
\- GCFScape, for opening the vpk file

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/importing-custom-models.md)

---

## MDL to VMDL Conversion

* [](/)
  * Assets
  * Models
  * MDL to VMDL Conversion



On this page

# MDL to VMDL Conversion

This guide will go through the process of making a **.vmdl file** (Source 2 Model) from a **.mdl file** and other model-related files from Source 1. The Wyvern Hatchling courier will be used as example, but the same process applies to heroes, buildings and any Valve Dota model.

### Required Tools​

  * [GCFScape](https://developer.valvesoftware.com/wiki/GCFScape)
  * [Crowbar](https://steamcommunity.com/groups/CrowbarTool/discussions/0/617328415069203029/)
  * [VTFEdit](https://developer.valvesoftware.com/wiki/VTFEdit)
  * Workshop Tools (Material and Model Editor)



### 1\. Acquire the **model** and **material** files from the main game VPK ( _pak01_dir.vpk_ ) using GCFScape.​

The following file types are required:

  * .mdl
  * .vvd
  * .dx90.vtx
  * .vtf



Model files will be in a subfolder of the _/models/_ folder:

![img](https://puu.sh/i3ayn/10871a9310.png)

Right-click extract into a folder of your choice.

![img](https://puu.sh/i3aCO/4887dee9a8.png)

Color Material files are located in the the _materials/models/_ folder. In this example this courier has 3 associated color files, one for each skin, so we'll get 

![img](https://puu.sh/i3aCw/5df098fb34.png)

Finally we should have these:

![img](https://puu.sh/i3aF1/ac40c1028e.png)

### 2\. Use Crowbar to decompile the model files into meshes (.smd)​

![img](https://puu.sh/i3aHy/2c37903006.png)

![img](https://puu.sh/i3aIq/aa87bc8d72.png)

Result on the output folder:

![img](https://puu.sh/i3byq/f3640f6f4b.png)

### 3\. Use VTFEdit to generate color TGAs out of the VTF files acquired in step 1.​

![img](https://puu.sh/i3aJa/775179ec38.jpg)

![img](https://puu.sh/i3aKg/33590b10c1.jpg)

Do File-> Export.

Result ([IrfanView](https://www.irfanview.com/) is an oldschool image viewer that can open TGAs just fine):

![img](https://puu.sh/i3bEp/1176075e01.png)

### 4\. Move the generated files to your addons **/content/** folder.​

  * Move the decompiled files generated in step 2 to **/content/models/**



![img](https://puu.sh/i3cT8/8962d8e943.png)

  * Move the TGA files generated in step 3 to **/content/materials/**



![img](https://puu.sh/i3cQg/76e8c16b46.png)

Create new folders on each or just drop the files over the respective directories. Make sure to use the content folder (not the /game/).   
The location of the reference mesh in /content/models/ will determine the location where the .vmdl file will be saved.

### 5\. Generate a .vmat file from the TGA files.​

  * Open the Material Editor
  * File -> New Material
  * Without doing anything yet, **Save** the empty material with the name of the TGA you want to make a .vmat for. ![img](https://puu.sh/i3d02/b647383364.png)
  * Browse and find the TGA to use ![img](https://puu.sh/i3d8I/b8d0e0b25d.png)
  * The file should be visible by default with the _color. extension ![img](https://i.imgur.com/Bbu4VtP.jpg)
  * Save the final material. ![img](https://i.imgur.com/Jbw6kyq.jpg)



### 6\. Make a New VMDL from the Mesh file (.smd)​

  * Open the Model Editor
  * New VMDL from Mesh File (Ctrl+M) ![img](https://puu.sh/i3gPC/eb6efe93f2.jpg)
  * Select the reference .smd file generated in step 2. ![img](https://i.imgur.com/Q7VH7Nq.png)
  * If everything went well you should get a red error mesh: ![img](https://i.imgur.com/MQmf1IM.jpg)



### 7\. Add a Material Remap for the missing textures, using the .vmat file from step 5.​

  * On the menus, Model -> Add Material Remap ![img](https://i.imgur.com/NgZbK7n.png)
  * Select the Material Remap List and collapse the properties on the Property Editor ![img](https://i.imgur.com/oRNgV71.png)
  * Search Material, select on from the drop down list. These are missing materials which have to be remaped to the the .vmat made earlier.
  * Ctrl+S to save the model, now the model comes together with the texture to take shape:



![img](https://i.imgur.com/o22c9Iy.jpg)

  * IF the model shows as **Error** , something went wrong. Make sure to delete the auto-compiled models and materials of the same name on the /game/ folders, which are now corrupted. Make sure everything is using the proper names and directories, sometimes the Model/Material editor feel like not working and doing Volvo things.



### 8\. Add the Animations on the _anims folder and make Activities for them.​

![img](https://i.imgur.com/5BvFhPg.png)

Select all of them.

![img](https://i.imgur.com/GPPJld3.png)

The Animations will now preview when you click over them, the model will move, but for game to use the animations it needs an Activity (the ACT_DOTA_name strings).

On the Sequences window (Do Tools-> View Sequences if it doesn't show up), make sure **Activity** is selected. It will show an empty list between brackets []

![img](https://puu.sh/i3xPr/4ac46797fe.png)

Now, select each animation you want to have a activity for.

![img](https://puu.sh/i3yr7/447456fe3a.png)

On the Property Editor, there is a an Activities element which will have 0 items by default. Click on the **+** to add one.

![img](https://puu.sh/i3yyc/2bde52de31.png)

Add a Name to it, try to use the ACT_DOTA_name that better adjusts to the activity description

![img](https://puu.sh/i3yxi/2cbd4d5b16.png)

Finally, we have usable animations:

![img](https://puu.sh/i3yyc/2bde52de31.png)

 **Note:** This is also useful to be able to have access to some of the ACT_DOTA_ACTIVITY+ **string** activities that some of the Taunt and Alternative animations use which currently can't be used for abilities and other purposes (as it just ignores the **+string** part).   
Knowing this, it's possible to assign some unused activity string like "ACT_DOTA_MINI_TAUNT" and force its usage trough the `OverrideAnimation` KV.

### 9\. Add the Hitboxes​

Go to Model->Hitboxes->Auto Populate and accept the list of all bones.

![img](https://puu.sh/i3yki/3624cba10a.png)

If you enable Display-> Hitboxes and Hitbox Names you should see something like these:

![img](https://puu.sh/i3ymK/0c24d9b35c.png)

* * *

Final result is the finished model with all its animations (hopefully):

* * *

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/mdl-to-vmdl-conversion.md)

---

## Adding Hitbox to Models

* [](/)
  * Assets
  * Models
  * Adding Hitbox to Models without a Bone



On this page

# Adding Hitbox to Models without a Bone

If you tried some of Valve's prop models, you had already noticed that many of them don't have a hitbox, so they can't be used for selectable units.

There is a very easy process that takes no longer than a couple of minutes to add one. 

In this tutorial, I will add a hitbox to this model: `gryphon_statue001.vmdl.`

![img](https://puu.sh/lLH62/45243b2ded.jpg)

## Step 1. Hammer DMX Export​

Open Hammer, make a new map ( File->New or CTRL+N ), and drag the model into the origin. 

![img](https://puu.sh/lLHek/b90cae10f2.png)

You can also rotate, scale, or displace it as required.

After its done, select the model and right-click on it. Then under the **Selected Objects** options, click **Create Model From Selection**. Save to your **Models** directory. Bear in mind that you can select multiple mesh in the viewport and export them as a single model, but their textures will not properly export with them.

## Step 2. Generate a VMDL​

Search for your new model in the Asset Browser and double-click it to open.

![img](https://i.imgur.com/l12Ub1w.png)

## Step 3. Download Cube.fbx​

This is a mesh with 1 bone. [Download it directly](/assets/files/cube-6adcea5510cba432b357c9f99c6fd3d4.fbx) and put the file in your models directory.

Credits to @Internet_Veteran

## Step 4. Add the Cube.fbx a 'Simple Animation'​

This is the critical part. Basically you'll be adding the cube mesh into the new model. You can do this on the model editor **Add - > Add Simples Animations...** and click "OK." It will ask for an fbx file to add. Choose the Cube.fbx that you placed in your models directory.

## Step 5: The a "Bone"​

Now go to **Add - > Bone** and name it 'bone.' 

## Step 6: Add and Adjust the "Hitbox"​

Now go to **Add - > Hitbox** and choose **(New HitboxSet)** as the parent node, and click "OK." Name the hitbox "hitbox" and click "OK," then choose "bone" as the parent_bone for the hitbox.

Now use the blue arrows in the viewport to adjust the size of the hitbox.

![img](https://i.imgur.com/pyrL292.png)

Finally, go to **File - > Save and Compile**

That's all! Now your model will have a hitbox ingame!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/adding-hitbox-to-models-without-a-bone.md)

---

## Importing Models and Material Editor

* [](/)
  * Assets
  * Models
  * Importing models and using the material editor



# Importing models and using the material editor

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/importing-models-and-using-material-editor.md)

---

## Exporting Models and Materials

* [](/)
  * Assets
  * Models
  * Exporting Models and Materials/Textures



# Exporting Models and Materials/Textures

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/exporting-models-and-materials-textures.md)

---

## Custom Hero Models

* [](/)
  * Assets
  * Models
  * Custom Hero models, materials and animations



# Custom Hero models, materials and animations

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/custom-hero-models-materials-animations.md)

---

# Particles

## Particle Tutorial

* [](/)
  * Assets
  * Particles
  * Particle Tutorial



On this page

# Particle Tutorial

 **Important Note:** _This article is strongly connected to an extern particle tool and tutorial collection and most links will guide you there:[Github](https://github.com/Nibuja05/dota_particle_editor_tutorial)._

# Particle Tutorial

The Particle Editor is a powerful tool that allows to create all kinds of particle effects, from ambient effects to projectiles up to HUD animations. So its definitely worth for everybody to learn how to create their own. Here you will learn the basics to understand the tool, as well as advanced techniques to master particle creation!

## How to get started?​

This project should help you find your way into the world of particle effects. Several documents are available for this purpose:

  * The [Particle Editor Guide](https://github.com/Nibuja05/dota_particle_editor_tutorial/blob/master/Particle%20Editor%20Guide.md), which contains detailed information about all possible areas of the Particle Editor and can thus be used both as an introduction and as a reference manual.
  * The [Tutorials Page](https://github.com/Nibuja05/dota_particle_editor_tutorial/blob/master/Tutorials.md), a collection of step-by-step tutorials for complete beginners as well as some more in-depth and complex problems.
  * The [Function Library](https://github.com/Nibuja05/dota_particle_editor_tutorial/blob/master/Function%20Library.md), a collection of all knows functions with their usage and other useful information.



If you're completely new to this topic, it would be recommended to start reading the Particle Editor Guides topics `The Tool` and `Functions`. After that follow some basic tutorials from the Tutorials Page.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/particle-tutorial.md)

---

## Particle Basics

* [](/)
  * Assets
  * Particles
  * Particle Basics



# Particle Basics

So I was asked by many people about particle creation and work flow since the tutorial provided by the steam (or someone that is put on the Valve developer site) seems to stop at one point. Since I can't do too much of complicated work today, I will write some tutorials to get people start diving into particles. I will write it in series of multiple tutorials by taking request from people and such since particles itself is kinda big topic. Just leave me a comment or send me a message what kind of particle system you want to see created manually. I will try my best to mimic the system and write it out step by step. Don't hesitate to contact me if you have any question, comment, or improvement to the tutorial.

Also noted that some particles system implementation might have Lua scripting involved if it is very complicated system. So a little of basic lua scripting will help you every now and then.

Again, let me know what kind of particle system you want to see created so I can keep this tutorial series going.

Here is the list of functions covered in this tutorial:

### Renderer

\- Render sprites [WIP]  
\- Render models [WIP]  
\- Render sprite trail [WIP]  
\- Render rope [WIP]  
\- Render deferred light [WIP]  


### Operator

\- Lifespan decay  
\- Alpha fade and decay  
\- Color fade  
\- Movement basic  
\- Radius Scale  
\- Movement place on ground [WIP]  
\- Noise Scalar/Vector [WIP]  
\- Normalized Vector [WIP]  
\- Oscillate Scalar/Vector [WIP]  
\- Remap Control Point to Scalar/Vector/Velocity [WIP]  
\- Rotation Basic [WIP]  
\- Rotation orient relative to CP [WIP]  
\- Rotation orient to 2d direction [WIP]  
\- Rotation spin yaw/roll [WIP]  
\- Inherit attribute from parent particle [WIP]  


### Initializer

\- Alpha random  
\- Color random  
\- Lifetime random  
\- Radius random  
\- Position along ring  
\- Position within sphere random  


[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/particle-basics.md)

---

## Chaos Wave Particle

* [](/)
  * Assets
  * Particles
  * Chaos Wave Particle



# Chaos Wave Particle

# Introduction

This is taken from the project I'm currently working on. The basic idea behind this particle system was that this projectile is a cyclone/tornado in xy-axis travel forward with certain amount of velocity. If you don't have any basic in particle editor, please go to [this link](/assets/particles/particle-basics) first. Before you read further, here is the finished product.

![](https://i.imgur.com/fwxoB5H.png)

Don't worry too much about the statue model, I put it there just to check height reference before porting into the map itself. There are many ways to approach this but here is how I approach it.

```lua Wave - Render sprites - Lifespan decay - Movement basic - Remap control point to velocity (CP1) - Rotation orient to 2d direction (Roll) - Rotation from CP forward orientation (Yaw) - Radius scale - Ramp scale linear simple (Yaw) - Ramp scale linear simple (Radius) - Noise vector - Alpha fade out simple - Alpha fade in simple - Position within sphere random - Color random - Sequence random - Rotation random - Remap control point to scalar (Radius, CP2) - Position modify offset random - Remap control point to scalar (Life Duration, CP3) Electric charge - Render sprites - Movement basic - Radius scale - Lifespan Decay - Alpha fade and decay - Lifetime random - Color random - Rotation random - Sequence random - Position from parent particles - Remap control point to scalar (Radius, CP2) - Alpha random - Position modify offset random - Emit continuously Ground (optional) - Render sprites - Remap control point to velocity (CP1) - Lifespan decay - Movement basic - Radius scale - Alpha fade and decay - Movement place on ground - Position within sphere random - Color random - Remap control point to scalar (Life Duration, CP3) - Remap control point to scalar (Radius, CP2) - Alpha random - Emit continuously ```

# Part one: Wave particle

Now let's start making this particle system.

\- Open particle editor and create new Particle.  
\- Add **"Render sprites"** in Renderer.  
\- Add **"Emit continuously"** in Emitter.  
\- Add **"Lifespan Decay"** in Operator.

Now don't worry too much about particle count yet. That can be adjusted later before you actually finish this particle system. Let's change the value of Render sprites to:

#### Render sprites

Field| Value  
---|---  
texture| materials/particle/juggernaut/juggernaut_blade_fury.vtex  
orientation type| World-Z align  
  
Since that texture is a sequence texture, I want to alternate the use of each sequence. This can be done by the following:

\- Add **"Sequence random"** in Initializer.

Now let's adjust the sequence we want. Since it's a cyclone/tornado with space in the middle, we might want something similar to sequence #3 to #6. So we change the following values:

#### Sequence random

Field| Value  
---|---  
sequence min| 3  
sequence max| 6  
  
Now it's time to place this particle somewhere.

\- Add **"Position within sphere random"** in Initializer.

We don't need to change anything here since it's just reference point for emitter. Now your particle should look like this.

![](https://i.imgur.com/qa2KLoV.png)

Well it shouldn't keep lying on the floor like that. Now we want to rotate it to the direction that it should face. But before we get to that, we have to set up something first.

\- Add **"Movement basic"** in Initializer.  
\- Add **"Remap control point to velocity"** in Initializer. (Default control point will be 1)

I will leave these two functions as default since I don't need anything special about velocity in this system. Now if we adjust the Control Point #1 on the right hand side, you can freely adjust the velocity as if it is a control point in-game, so you can see result immediately. My particle now moves but it faces upward, and I don't want that. Let's rotate our particle with following functions.

\- Add **"Rotation orient to 2d direction"** in Operator.  
\- Add **"Rotation from CP forward orientation"** in Operator.

With following values:

#### Rotation orient to 2d direction

Field| Value  
---|---  
rotation offset| 90.0  
rotation field| Roll  
  
#### Rotation from CP forward orientation

Field| Value  
---|---  
control point number| 1  
rotation field| Yaw  
rotation offset| 45.0  
  
These two functions will automatically adjust your sprite so it faces the direction it's moving all the time. I chose not to use 90.0 in second function because at 90 degree, your particle will be very hard to see from the top, so I adjust them down a bit. Now you should see result like this.

![](https://i.imgur.com/RBJadLc.png)

Now basic functionality is done, I will adjust the outlook of the particle by following function.

\- Add **"Color random"** in Initializer.  
\- Add **"Rotation random"** in Initializer.  
\- Add **"Position modify offset random"** in Initializer.

Now change the color to the color you like, leave the rotation random as is, and adjust third function as follow:

#### Position modify offset random

Field| Value  
---|---  
offset min| 0.0 0.0 100.0  
offset max| 0.0 0.0 100.0  
  
This is so that our particles will start in the air instead of on the ground. You can pull reference model up to adjust the height as you like.

Now that is done, we will start assigning the rest of the control points as followed:

\- Add "Remap control point to scalar" in Initializer.  
\- Add "Remap control point to scalar" in Initializer. (Yes twice)

And adjust the value to the following.

#### Remap control point to scalar #1

Field| Value  
---|---  
input control point number| 2  
output field| Radius  
input minimum| 0.0  
input maximum| 9999.0  
output minimum| 0.0  
output maximum| 9999.0  
  
#### Remap control point to scalar #2

Field| Value  
---|---  
input control point number| 3  
output field| Life Duration  
input minimum| 0.0  
input maximum| 10.0  
output minimum| 0.0  
output maximum| 10.0  
  
Now put these values into the control points on right.

Field| Value  
---|---  
Control Point #1| 1000 0 0  
Control Point #2| 300 0 0  
Control Point #3| 3 0 0  
  
You should see something like this.

![](https://i.imgur.com/AZNq6lw.png)

Now those are all the initializers you need, let's now adjust the detail while our particles are traveling in operator.

Since I feel like the tornado should grow larger as it goes and there should be fade in and out effect, I add the following functions to the system.

\- Add **"Radius scale"** in Operator.  
\- Add **"Alpha fade out simple"** in Operator.  
\- Add **"Alpha fade in simple"** in Operator.

Adjust these values as you like. I left them as default except one which is:

#### Radius scale

Field| Value  
---|---  
radius start scale| 0.0  
  
Now your particle should look like this. (I just adjust the color random, so it will look a bit different from previous image.)

![](https://i.imgur.com/X50ysJh.png)

Since it is kinda power wave, I want to add the feeling of being unstable to the system. So I add these functions.

\- Add **"Ramp scalar linear simple"** in Operator.  
\- Add **"Ramp scalar linear simple"** in Operator. (Yes twice)  
\- Add **"Noise vector"** in Operator.

Adjust its value to the following:

#### Ramp scalar linear simple #1

Field| Value  
---|---  
ramp rate| 15.0  
ramp field| Yaw  
  
#### Ramp scalar linear simple #2

Field| Value  
---|---  
ramp rate| 2500  
end time| 9999.0  
ramp field| Radius  
  
#### Noise vector

Field| Value  
---|---  
output field| Position  
output minimum| -100.0 -100.0 -100.0  
output maximum| 100.0 100.0 100.0  
additive| true  
  
Now your wave particle is done. It should look similar to the following:

![](https://i.imgur.com/Oh5BbNQ.png)

What I said about "done" is actually a lie. You still need to adjust your particle count. My advice is that keep the count at minimum to suit the purpose of your system. Currently, the particle count should be at around 300 all the time and it's not good for overall performance. Since my particles will be used somewhat as a projectile, I don't want high particle counts. To reduce this I change the following setting.

#### Base Properties

Field| Value  
---|---  
max particles| 60  
  
#### Emit continuously

Field| Value  
---|---  
emission duration| 2.0  
emission rate| 30.0  
  
With this, the particle count should be below 60 at all time since I want them to emit only for 2 seconds, 30 particles each, and the memory allocated is only enough for 60 particles. Now your base wave particles are done. **Very important, don't forget to save.**

# Part two: Spark Particle

Now that I have my wave particle working, I feel like it needs something like an electric spark during the duration. However, since this particle is based on the wave particle, we need to make some adjustments to the wave particle.

\- Create new particle for static and save it.  
\- In wave particle, add newly created particle as a children.

First off as usual, you want to start rendering your sprite and emitter and decay.

\- Add **"Render sprites"** in Renderer.  
\- Add **"Emit continuously"** in Emitter.  
\- Add **"Lifespan decay"** in Operator.

Change your render sprites' texture to,

``` materials/particle/electrical_arc_smooth/electrical_arc_smooth.vtex ```

Now think about the actual electric spark, it needs to be fast, colorful, looks different all the time, and a little bit of transparency. From those idea, I add following functions.

\- Add **"Lifetime random"** in Initializer.  
\- Add **"Color random"** in Initializer.  
\- Add **"Rotation random"** in Initializer.  
\- Add **"Sequence random"** in Initializer.  
\- Add **"Alpha random"** in Initializer.

Adjust the color accordingly for Color random, and leave Rotation random as default. For other functions, change the value to following.

#### Lifetime random

Field| Value  
---|---  
lifetime min| 0.03  
lifetime max| 0.07  
  
#### Sequence random

Field| Value  
---|---  
sequence min| 0  
sequence max| 3  
  
#### Alpha random

Field| Value  
---|---  
alpha min| 150  
alpha max| 175  
  
Now you should have something similar to this.

![](https://i.imgur.com/cG34Wwj.png)

When that's done, we want to change our radius accordingly as we already had control point in wave particles and make the spark scatter from the center.

\- Add **"Remap control point to scalar"** in Initializer.  
\- Add **"Position modify offset random"** in Initializer.

Now we adjust the value to the following:

#### Remap control point to scalar

Field| Value  
---|---  
input control point number| 2  
output field| Radius  
input maximum| 999.0  
output maximum| 999.0  
  
#### Position modify offset random

Field| Value  
---|---  
offset min| -0.3 -0.3 -0.3  
offset max| 0.3 0.3 0.3  
control point number| 0  
offset proportional to radius| true  
![](https://i.imgur.com/TPtr49u.png)

As you can see, now our particles are huge! Sparks are supposed to be small so let's resize it with this, add a little bit more movement to our sparks, and also add some fade decay to our particle.

\- Add **"Movement basic"** in Operator.  
\- Add **"Radius Scale"** in Operator.  
\- Add **"Alpha fade and decay"** in Operator.

Adjust the values to the following.

#### Movement basic

Field| Value  
---|---  
gravity| 0.0 0.0 300.0  
drag| 0.05  
  
#### Radius scale

Field| Value  
---|---  
radius start scale| 0.07  
radius end scale| 0.14  
scale bias| 0.65  
  
#### Alpha fade and decay

Field| Value  
---|---  
start fade in time| 0.0  
end fade in time| 0.2  
start fade out time| 0.4  
end fade out time| 1.0  
start alpha| 0.0  
end alpha| 0.0  
  
Now your spark should look something like this.

![](https://i.imgur.com/qwqaa5l.png)

With the wave particles, it looks like this.

![](https://i.imgur.com/2QciUbK.png)

Now we want the spark to follow the wave, we add this function to the spark particle.

\- Add **"Position from parent particles"** in Initializer.

Leave the value as default, you can adjust it to your taste though. Now we are almost done, we have to reduce particle count in the system. Change the values of the following function.

#### Base Properties

Field| Value  
---|---  
max particles| 64  
  
#### Emit continuously

Field| Value  
---|---  
emission duration| 4.0  
emission rate| 200.0  
  
Now that's done, you should see something like the following in your wave particle.

![](https://i.imgur.com/ERIr5ld.png)

With this, your spark particle is done. Feel free to adjust the value to your taste.

# Part three: Ground Particle (Optional)

You may wonder why I list this part as optional. It is not a requirement since it doesn't really make you see what's happening in the particle editor. When you head into the game, if the place has light color background, it will become very hard to see bright color particle. With this ground particle, I basically layout the dark particle under the wave particle to make it more visible to the user.

This particle borrows most of the value from wave particle except one function. I will list all of the functions and its adjusted value below. For more detail on each of the functions, please go back to read in wave particle section.

#### Base Properties

Field| Value  
---|---  
max particles| 60.0  
  
#### Renderer: Render Sprites

Field| Value  
---|---  
orientation type| World-Z Align  
texture| materials/particle/dirt/ground_decay/ground_decay01.vtex  
  
#### Operator: Remap control point to velocity

#### Operator: Lifespan decay

#### Operator: Movement basic

#### Operator: Radius Scale

Field| Value  
---|---  
radius start scale| 0.2  
radius end scale| 1.2  
  
#### Operator: Alpha fade and decay

#### Operator: Movement place on ground

#### Initializer: Position within sphere random

#### Initializer: Color random

#### Initializer: Remap control point to scalar

Field| Value  
---|---  
input control point number| 3  
output field| Life Duration  
input maximum| 10.0  
output maximum| 10.0  
  
#### Initializer: Remap control point to scalar

Field| Value  
---|---  
input control point number| 2  
output field| Radius  
input maximum| 9999.0  
output maximum| 9999.0  
  
#### Initializer: Alpha random

Field| Value  
---|---  
alpha min| 30  
alpha max| 50  
  
#### Initializer: Emit continuously

Field| Value  
---|---  
emission duration| 2.0  
emission rate| 30.0  
  
 **Don't forget to save your file.** Now that's done, let's combine all the works together.

# Part four: Finalize the system

Our system is almost finished. Now we are going to add multiple layer of wave.

\- Open your wave particle.  
\- Remove the children.  
\- Save as a new particle for an outer layer (this should have no children).  
\- Save as a new particle again for the outline (this should also have no children).

These three layer will behave the same, there are only three different between each layer.

1\. Radius  
2\. Color  
3\. Sequence number

Let's set our 3 layers (or more if you want to) as following.

For the inner most layer, our core layer, adjust the color to become very bright, have **radius end scale** in **Radius scale** as 0.6, and **sequence min/max** set to 7 and 8.

For the outer layer, second layer, adjust the color to be between the very bright color and black, have **radius end scale** in **Radius scale** as 1.0, and **sequence min/max** set to 7 and 8.

For the outline layer, last layer, adjust the color to be black and have **radius end scale** in **Radius scale** as 1.2.

Now we combine the two outer layer into our core layer by adding children. Your screen should look like this.

![](https://i.imgur.com/ymA3yUU.png)

If you don't have ground particle, you should be done at this point. However, if you have ground particle then:

\- Create new particle.  
\- Add ground particle as children.  
\- Add wave particle as children.

It is important that ground particle is above wave particle. This is the order in which your particle will be rendered. If ground particle is below wave particle, it will be on top of wave particle and that's not how we want it.

# Implement in-game

Now that the particle is ready, we have to put it to use in game. Note that this particle is not fully compatible with projectile. Therefore, we mimic the projectile as following:

#### KV npc_abilities_custom.txt

In the ability you want to use, put these lines in.
    
    
    "precache"  
    {  
        "particle"      "particles/custom/tutorial/cyclone.vpcf"  
    }  
    

Now when you want to launch particles in lua, you do the following
    
    
    local info = {  
        ...  
        EffectName = "",  
        vVelocity = keys.caster:GetForwardVector() * ProjectileSpeed,  
        fDistance = Distance,  
        fStartRadius = Radius,  
        fEndRadius = Radius,  
        ...  
    }  
      
    local projectile = ProjectileManager:CreateLinearProjectile(info)  
      
    -- Create particle  
    local tornadoFxIndex = ParticleManager:CreateParticle( "particles/custom/tutorial/cyclone.vpcf", PATTACH_CUSTOMORIGIN, caster )  
    ParticleManager:SetParticleControl( tornadoFxIndex, 0, keys.caster:GetAbsOrigin() )  
    ParticleManager:SetParticleControl( tornadoFxIndex, 1, keys.caster:GetForwardVector() * ProjectileSpeed )  
    ParticleManager:SetParticleControl( tornadoFxIndex, 2, Vector( Radius, 0, 0 ) )  
    ParticleManager:SetParticleControl( tornadoFxIndex, 3, Vector( Distance / ProjectileSpeed, 0, 0 ) )  
      
    Timers:CreateTimer( 6.0, function()  
            ParticleManager:DestroyParticle( tornadoFxIndex, false )  
            ParticleManager:ReleaseParticleIndex( tornadoFxIndex )  
            return nil  
        end  
    )  
    

With those implemented, your particles should show up in-game now.

This concludes my tutorial on making Chaos Wave particles. If you have any comment, question, or improvement to the guide, please do not hesitate to leave a comment or contact me. Let me know what you want to see created next!

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/chaos-wave-particle.md)

---

## Falling Cherry Blossom Particle

* [](/)
  * Assets
  * Particles
  * Falling cherry blossom petal for spring mood particle



# Falling cherry blossom petal for spring mood particle

If you are new to particle creation, you should read [this particle basic](/assets/particles/particle-basics) first because I will not explain in detail these functions in detail. I will instead explain the thought process that comes in my mind during each creation. Now let's get started.

I was working on my map the other day in the following image.

![](https://i.imgur.com/chIqYgk.jpg)

I feel like it lacks some kind of "spring" mood to it. So I feel like there should be petal falling down. Since it's pretty simple to do, I feel like I should include this as example in the tutorial. The end result will be like following image. You might not see much with static picture, but after you are finished, there will be those petals flying around in your map.

![](https://i.imgur.com/lIl4maG.jpg)

If you know what to do, you can simply add these functions to your system. I will also explain in detail on my thought process and steps on creating this as well.

```lua Render sprites Lifespan decay Alpha fade out simple Movement basic Rotation basic Noise vector Rotation spin roll Radius scale Alpha fade in simple Rotation random Position within sphere random Alpha random Lifetime random Radius random Emit continuously ```

Now if you want to know further detail on this system then

\- open up particle editor  
\- create a new particle.

Now I want petals to show up.

\- Add **"Render Sprites"** in Renderer since there is no self-animation involved in this system.  
\- Now I check orientation type, it's already set to "Screen Align" so it's good to go.  
\- Scroll down to the texture field, you can see the circle sprite.

But I want petal sprite for this situation, falling circle might be able to work as snow but not for spring.

\- Click on Magnifying glass to open up browser.  
\- In this point, you can use your custom vtex material as a texture but in this tutorial, materials/particle/flower/flower.vtex will do the job.

Now that renderer is up, I need an emitter to show my petal.

\- Add **"Emit continuously"** in Emitter since I want my petals to keep falling down.

 **Don't forget to change your max particles number in Base Properties and emission rate accordingly so your particle system will not overflow with too many particles.** In this tutorial, I set mine to 160 as I think that should do the job. Now your screen should have something similar to this.

![](https://i.imgur.com/y3wMAMp.png)

Now that it shows the petal, but there is nothing going on yet. Since I want these petals to move and disappear at some points, I continue on to next step:

\- Add **"Lifespan decay"** in Operator since I want them to disappear at some points.  
\- Add **"Movement basic"** in Operator since I want them to move at some points.

Now I do feel like this scene somewhat needs a gravity since petal will be falling down in some directions. So I make some changes to the value in Movement basic as followed:

Field| Value  
---|---  
gravity| 100 -100 -200  
drag| -0.4  
  
The gravity is freely adjustable to your taste, but I like mine to go in this direction. Your result should be something similar to this.

![](https://i.imgur.com/aFNmLNT.png)

Now I have the petals showing up and move due to gravity, I want them to spread around in the area not just start from origin. So I do this

\- Add **"Position within sphere random"** in Initializer to position my petals.

Now, there are two ways to approach how you initialize this function.

\- First way is to manually adjust the value in particle editor.  
\- Second way is to bind it to the control point.

I will explain the first way since I will use it statically in my hammer (adjusting these control points in hammer is hell.)

Now I want them to start within certain radius and start with certain speed. I change following values.

Field| Value  
---|---  
distance min| 0.0  
distance max| 1500.0 (maximum radius you want to cover)  
distance bias absolute value| 0.0 0.0 0.7 (since I only want them to show up on the top half of sphere)  
speed min| 10  
speed max| 10  
speed in local coordinate system min| 0 0 -20  
speed in local coordinate system max| 0 0 -20  
  
If you want to bind these value to control point, simply change **scale CP** , in which (x, y, z) will represent (distance, speed, local speed), to desired control point and set all the above value to 1.0 except distance min and distance bias absolute value. Now that it is done, you should see something similar to the following.

![](https://i.imgur.com/7qvk253.png)

Now I feel like these petals lack natural feeling to it. So I add the randomness to this system by following functions.

\- Add **"Rotation random"** in Initializer.  
\- Add **"Alpha random"** in Initializer.  
\- Add **"Lifetime random"** in Initializer.  
\- Add **"Radius random"** in Initializer.

Now you have to go in each function and adjust the value to your taste. The followings are the settings I use in this tutorial.

#### Rotation random

\- default value

#### Alpha random

People won't like it if these petals will obstruct the view of the players so I set the values as followed.

Field| Value  
---|---  
alpha min| 100  
alpha max| 150  
  
#### Lifetime random

The petals should disappear at different time so I set the values as followed.

Field| Value  
---|---  
lifetime min| 1.5  
lifetime max| 3.0  
  
#### Radius random

In reality, petals are not the same size every where, so I set the values as followed.

Field| Value  
---|---  
radius min| 10.0  
radius max| 20.0  
  
Once those are all set, you should see the result similar to below.

![](https://i.imgur.com/VhuUzL9.png)

Now that you see randomness at creation, but the sudden pop in and out is kinda annoying to me. So I get rid of them by:

\- Add **"Alpha fade in simple"** in Operator.  
\- Add **"Alpha fade out simple"** in Operator.

I left those value as default as I think it's already much better than earlier. You can freely adjust those values as you like.

Now the petals fall and fade in and out, we want them to rotate as they go so it looks more natural. To do so, add the following function.

\- Add **"Rotation basic"** in Operator.  
\- Add **"Rotation spin roll"** in Operator.

And now adjust the values of Rotation spin roll and leave Rotation basic as default.

Field| Value  
---|---  
spin rate degree| 10.0  
  
So now the petals start spinning, I want to make them get smaller as they go to reduce some blocking vision to players. So I add:

\- Add **"Radius scale"** in Operator.

However, I don't want them to start right away and the petals don't just go back to 0.0 scale, so I adjust the following values:

Field| Value  
---|---  
start time| 0.5  
end time| 1.0  
radius start scale| 1.0  
radius end scale| 0.4  
  
Now you should have something looking similar to this.

![](https://i.imgur.com/ioODWyt.png)

Now it almost looks natural but it lacks wind. Normally when petals fall down, it should somewhat be affected by the wind. To achieve this, I add the following function:

\- Add **"Noise Vector** in Operator.

You should now see your petals blinking with different color. Don't panic. We haven't adjusted the value yet so it's set to default that way. Now I want to adjust so the noise will add into my sprite as it goes with randomness. So I set the values to the following:

Field| Value  
---|---  
output field| Position  
output minimum| -10.0 -10.0 -10.0  
output maximum| 10.0 10.0 10.0  
noise coordinate scale| 0.2  
additive| true  
  
Now with this, your falling petals should look very natural, and you can adjust all those values as you desire. The result particles should be similar to the following.

![](https://i.imgur.com/ajnc7uu.png)

This reaches the end of this tutorial. If you have any question, comment, or improvement to the guide, please don't hesitate to leave a comment or send me a message. Let me know what you want to see created next!.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle.md)

---

## Volcano Particle

* [](/)
  * Assets
  * Particles
  * Volcano Particle



# Volcano Particle

Here I'll explain how to modify preexisting particles for the creation of a [Volcano ability](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/abilities/firelord_volcano.txt) :nuke:

I won't be making the particles from scratch or going really deep into its possibilities, so make sure to read the wonderful [Particle Creation Series](http://moddota.com/forums/discussion/110/particles-creation-series) by kritth to get a deeper understanding than just this example.

  


First we want a ~250 AoE radius volcano earth cone.

There is an useful particle system useful for this, espirit_spawn.vpcf, open it.

Go into its first child, _ground.

I want to hide the soild model because this spell will need some collision with the volcano, spawning a [simple volcano unit](https://github.com/MNoya/DotaCraft/blob/master/scripts/npc/units/firelord_volcano.txt). So in the main particle, disable the Render Model.

Now we need to adjust its child to fit the parent size and duration, making it loop with rocks.

  * Add Emit Continuously
  * Disable the Movement basic and alfa fade out simple
  * Disable the 2 Remap particle count to scalar
  * Radius from 16 to 25, make the place on ground 0
  * Lifetime random, on the max value, change it to 0. This will make the earth move constantly and randomly.

  


Let's repeat the same steps on the other childs to make the dust-debris effect repeat

  * On the _groundburst:
    * Add Emit continuously.
    * Because more particles is always better, we want more debris to be launched. For this, go to its base properties, filter for Max, and double the max particles value. <https://puu.sh/fx0cP/9f961c2c84.png>
    * Then go to the Emit instanteneously, in the num to emit, also double this value.
    * Also increase the radius size of the launched particles by going into Initializer's Radius random and seting the min & max to 0.1 and 0.5
    * Finally, change to a darker rock model, Render Model to bad_barracks_stones003.vmdl



<https://puu.sh/fzghv/60aacd4e5e.png>

It's looking like this now (I forgot to hide the model for this preview)

  
Moving onto _grounddustbdust, we see that the particle already has an Emit continuously, but it isn't actually looping as we'd want to, it's just emitting a single cloud.

  * Change Emit continuously to emission duration 0
  * Disable Remap scalar to Vector on the bottom of the Initializer functions (this gets rid of the black clouds)
  * I also want the smoke to raise higher, for this change the Movement Basic 3rd value Z to 400 from the original 200.



Now the particle system is kinda filling the entire particle with dust, so we do the following:

  * In Initializer Radius Random, change the radius max to 15 from 40.
  * In Base Properties, reduce the max particles to 20 from 36.



Finally we finished the core base of the volcano:

Because I don't want or need to have additional control points, I'll make sure that all the control points of this particle system are fixed to the CP0.

By going into the main particle system and moving the CP1, we wee that the dust and ground burst are tied to CP1. We want them at CP0 for simplicity

To know which fields have which control point, hover over them:

<https://puu.sh/fx7rp/2f77543e58.jpg>

Now go to this position along ring, change the CP to 0, and its done. 

<https://puu.sh/fx7wH/1d245d2e56.png>

Repeat the same process on the groundburst particle.

* * *

Now, lets add fire to it! 🔥

In case you don't have the latest decompiled particles (which should include Techies and SF Arcana particles), download them from here: **[Decompiled Particles](http://moddota.com/resources/decompiled_particles.zip)**. There should also be a link in the [Resources Page](http://moddota.com/forums/resources)

  


Back to the particle editor, open the recently forked, sf_fire_arcana_wings system

  * Hide the wing effects by disabling the render model of the wings 



<https://puu.sh/fAac1/f03b7350a1.png>

  * Make a new child
  * Add the espirit_spawn custom system made earlier.



<https://puu.sh/fAcn5/8132f680eb.jpg>

  * Change the first 3 sf_fire_arcana_wings child particles to emit continuously like before.

  * Going into sf_fire_arcana_wings_smoke_body you can see theres many wings_rope childs copied, each one of these childs has a different ground position.

Lets keep only 1 at the middle and disable the rest while also making it emit continously. The _wings_rope is already set to emit continuously but has a limited emission duration to 2.0, change it to 0.

Also disable the 2nd Remap initial scalars to properly get the permanent particle. 

  * Now go into the rope_detail and do exactly the same: emission to ration 0, no Remap initial scalar. Also disable the noise vector, which makes the particle stutter after a while.

  * Go back to wings_smoke, and disable the Initializer: Position modify offset random, as this is preventing the rope from starting at the center of CP1. 

  * For the _beams, also make them permanent, disable the Stop effect after duration, durations on the Emit continuously have to be 0. Decrease the max particle count to a third of its value, 36->12\. Change the offset to 0,0,10 

  * In grow_rope, add Emit continuously and disable the Initializers for remap Particle count to scalar on its child rope_glow, only need to change emission duration to 0. 

  * _ember emission duration 0 also 

  * Add an emit continuously to to _core 

  * _souls_hands_pnt is supposed to be attached to shadow fiends hands, but our model doesn't use that, so we need to change it a bit, basically doing the same as before (changing or adding constant emitting, removing stuff that makes it stop, etc) 

  * I'll disable _souls_hands_tail because its too much noise already, and replace the Pull towards control point by a movement basic Z of 50, so that it looks like the light is coming from the center and flowing up. 




Now after all that mess:

* * *

After the core volcano is done, now its time to add some boulders that originate from the center to all points in the 500 aoe radius of the ability.

This would be an extra particle system which I want to repeat at a time interval of my choice in the ability, so it will be just 1 instance and I can easiliy ThinkInterval + FireEffect it.

I will use a modified warlock_rain_of_chaos_explosion.vpcf with sf_fire_arcana_shadowraze for this purpose.

  * First add a shadowraze children <https://puu.sh/fyMVL/ef8b4c1300.jpg> <https://puu.sh/fyNqp/6a310ed236.jpg> and increase the duration of most explosion effects, so it lasts a bit more after the explosion.

  * _char increased lifetime random to 4 and 5. child char_fire doubled emit continously emission duration

  * _end_smoke emission duration to 3.0 seconds




That's it for the shadowraze, now changing the rocks to move slower, last for longer and have an endcap animation when they hit the ground!

On chaos_explosion

We need to change some initializer functions to decrease the speed and make the rocks last longer

  * Disable Radius scale to make the rocks not decrease in size
  * Disable Lifespan decay, this makes particle not disappear after a fixed duration.
  * Add the following operator to make the particles disappear when they hit the ground: **Cull when crossing plane** , keep it at the 0,0,1 plane normal by default.
  * Also add Position modify offset random Initializer, to make them start a bit higher on the z so that some rocks dont get removed earlier. I put both offset min and max at 20.
  * Increase the amount of emited particles, num to emit = 36. Also make them not spawn all in the same frame, maximum mission per frame = 1.
  * Decrease the speed on the position along ring operator, min initial speed = 800 and max = 100.



Result: 

* * *

Last but not least, another effect will be played when damaging a unit.

Now modifying particles/custom/sf_fire_arcana_base_attack_impact.vpcf is possible after having it decompiled earlier, and making a bigger and flashier explosion should be trivial with what I explained in the previous particle modifications.

I'll also add a lone_druid_bear_entangle_ground_soil_cauldron effect in here, to leave the mark where an rock damaged an anemy.

Finally after getting the particle with the ability together...

* * *

I hope this isn't too much of a mess to reproduce and there's useful pieces of information hidden in between my random rambling :puppeyface: 

If I missed something or there's any doubts or suggestions just bombard this thread with them, I'll be glad to answer and learn from the mistakes I constantly do while modding particles.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/volcano-particle.md)

---

## Status Effects

* [](/)
  * Assets
  * Particles
  * Status Effects



On this page

# Status Effects

This is a basic guide on how to create/modify status effect particles in the particle editor. This is my first tutorial so any feedback is welcome. A template file is at the bottom of the tutorial if you want to create a status effect quickly.

## What is a Status Effect?​

Status Effects are particles that change the surface texture and its parameters of a model. They distinguish themselves from normal particles by not needing an emitter and are mostly used for buffs/debuffs and effigies.

 **Examples:**

![https://i.imgur.com/ViSMwvo.jpg](https://i.imgur.com/ViSMwvo.jpg)  
![https://i.imgur.com/4UyiXu4.jpg](https://i.imgur.com/4UyiXu4.jpg)  
![https://i.imgur.com/LMMyBO8.jpg](https://i.imgur.com/LMMyBO8.jpg)  
![https://i.imgur.com/YRYNesy.jpg](https://i.imgur.com/YRYNesy.jpg)  
![https://i.imgur.com/z7Et01i.jpg](https://i.imgur.com/z7Et01i.jpg)

## Getting Started​

Create a new File in the Particle Editor and Save it. Now before you start make sure you turn on „ **view as DOTA Status Effect** “ in the Particle Editor under the view tab. This is important otherwise you can’t make any sense out of the functions.

What you need for a basic Status Effect:

  *  **Renderers:**

    * Render status effect
  *  **Operators:**

    * Lifespan endcap timed decay
  *  **Initializers:**

    * 9x Scalar random
    * 8x Vector component random or 3x Vector random
    * 2x Color random



 ** _This is how the functions window should look like in the end when using "Vector component random" (order is not important):_**

![https://i.imgur.com/aSymXLa.jpg](https://i.imgur.com/aSymXLa.jpg)

## Step by Step​

 _Note:_ Since i’m not too experienced in modeling and texturing i cannot exactly tell what type of texture or parameter does what but i can show you how to modify it.  
Please also note that your Status Effect will not be visible in the particle editor. You will have to go ingame to see it.

### Base Properties​

In the base properties set initial particles and max particles to 1. Leave the rest as it is.

### Lifespan endcap timed decay​

Just leave this as it is.

### Render status effect​

This function will have the most impact on how the status effect looks. It selects what type of texture is replaced with what .vtex/.vmat file. In Valve’s Status effects those textures are defined through multiple „Vector component random“. They basically do the same thing but we are choosing „Render status effect“ because it is much easier to handle and understand.

![https://i.imgur.com/jIhkOve.jpg](https://i.imgur.com/jIhkOve.jpg)

 _Note:_ The ones that will probably have the most impact are: color warp texture and detail 2 texture.

##### Color warp texture​

A 3D texture that applies a color transformation like hue shift or contrast adjustments to the original colors. Click on the magnifying glass and type colorwarp in the searchbar to see all the color warp textures.

 _Note:_ Only colorwarp textures will work for this.

Results with different Colorwarp textures: 

_Associated Parameters_ :

  * ColorWarpBlendFactor



##### Detail 2 texture​

A texture that is repeatedly overlaid on the model. You can basically use any texture for this. You can even use your own(just look up how to convert .tga to .vtex on google). Make sure you select an appropriate blend mode for your texture with **D_DETAIL_2** (will be covered later on). If you don't need this set Detail2BlendFactor to 0.

Results with different Detail 2 Textures(Blend Mode: 5): 

_Associated Parameters_ :

  * Detail2BlendFactor
  * D_DETAIL_2
  * Detail2TexCoordScale



##### Diffuse warp texture​

Determines where diffuse reflections occur. This is mostly obsolete since it is not enabled on most heroes. If you don't need this set DiffuseWarpBlendToFull to 0.

 _Associated Parameters_ :

  * DiffuseWarpBlendToFull



##### Fresnel color warp texture​

Applies a colortransfromation around the edges of the model. Use color warp textures for this.

 _Note_ : You don't need to have this.

##### Fresnel warp texture​

Determines where the fresnel color warp is applied.

##### Specular warp texture​

Determines where the specular reflection occurs. Specular reflection is a mirror-like reflection of the Light. If you don't need this set SpecularScale to 0.

Results with different amounts of Specular Reflection:

 _Associated Parameters_ :

  * SpecularColor
  * SpecularScale
  * SpecularExponent
  * SpecularExponentBlendToFull
  * SpecularBlendToFull



##### Environment map texture​

I’m not sure what this does. It doesn’t seem to have much impact.

### Scalar random​

In the properties window you can set what the scalar random function should do. The output field defines what parameter should be changed and the min and max values(which should be most of the time equal) set how much it is changed.

![https://i.imgur.com/lfiWxVo.jpg](https://i.imgur.com/lfiWxVo.jpg)

 ** _For our 9 Scalar random we need:_**

 _Note_ : In this guide min and max will always be equal. If you don’t know what does what just play around with the values and observe the changes ingame.

  *  **ColorWarpBlendFactor**
    * Defines how much the Color Warp Texture is applied.
    *  _Values_ : 1 = Fully applied, 0 = Fully Ignored.
  *  **D_DETAIL_2**
    * Blend method of the detail 2 texture. (Some of them are: Add, Add SelfIllum, Mod2X)
    *  _Values_ : 0 to 5 in whole numbers.
  *  **Detail2TexCoordScale**
    * Sets the coordinate scale of the Detail2 Textue.
    *  _Values_ : 0 to 8. The larger the number the smaller the Detail2 Texture and the more often it needs to be placed on the model. Typical Values: 2-5.
  *  **Detail2BlendFactor**
    * Defines how much the Detail2 Texture is blended in.
    *  _Values_ : 1 = Fully blended in, 0 = Fully transparent, can also be >1.
  *  **CubeMapScalar**
    * Multiplier that controls the overall intensity of the Cube Map. You don't need to know what this does exaclty since it doesen’t seem to have much impact.
    *  _Values_ : 0 to 20.
  *  **AmbientScale**
    * Sets how strong Ambient Lighting is applied.
    *  _Values_ : Larger Values will make the Ambient Lighting appear stronger.
  *  **RimLightScale**
    * Sets how strong the Rim Light is shown. Rim Light is the highlighting around the edges of the model.
    *  _Values_ : 0 to 100. Larger Values will make the Rim Light appear stronger.
  *  **NONE($RIMLIGHTBLENDTOFULL)**
    * Defines how much the Rim Light is blended in.(I‘m not sure on this)
    *  _Values_ : 0 to 1.
  *  **NONE($FRESNELCOLORWARPBLENDTOFULL)**
    * Defines how much the Fresnel Colorwarp Texture is blended in. (I‘m not sure on this)
    *  _Values_ : 0 to 1.



### Vector component random/Vector random​

 _Note_ : You can either use 8 _Vector component random_ or 3 _Vector random_

##### Vector component random​

Here the functionality is defined through the output field and the component field. The output field selects a set of three different parameters (as you can see some of them can be NONE and are just placeholders). The component field chooses what exact parameter from that set should be changed. X Component selects the first, Y Component the second and Z Component the third. Like in Scalar random min and max define how much the parameter is changed.

![https://i.imgur.com/UtssvMq.jpg](https://i.imgur.com/UtssvMq.jpg)

##### Vector random​

Has the same purpose as _Vector component random_ but here you can edit all 3 parameters of the set in one function. The first min and max values set the min and max for the first parameter of the chosen set, the second min and max set the values for the second parameter and so on. If you don't need a parameter set it's min and max values to 0 or -1.

![https://i.imgur.com/1rg3eDr.jpg](https://i.imgur.com/1rg3eDr.jpg)

 ** _For our 8 Vector component random or 3 Vector random we need:_**

 _Note_ : Again just play around with the values to see yourself what is changed.  
With _Vector random_ you only need one of each set.

#### 2x/1x SpecularScale +NONE+DiffuseWarpBlendToFull​

  *  **SpecularScale**

    * Sets how strong the Specular Reflection is visible.
    *  _Values_ : 0 to 1000. Larger Values result in stronger Specular Reflection. Typically: 0 to 100.
  *  **DiffuseWarpBlendToFull**

    * Defines how much the Diffuse Warp Texture is blended in.
    *  _Values_ : 1 = Fully blended in, 0 = Fully transparent.



#### 3x/1x SpecularExponent+SpecularExponentBlendToFull+SpecularBlendToFull​

  *  **SpecularExponent**

    * Sets the size of the Specular Highlight Spot.
    *  _Values_ : 1 to 512. Typically 5 to 20.
  *  **SpecularExponentBlendToFull**

    * Defines how much the Specular Exponent is blended in.
    *  _Values_ : 1 = Fully blended in, 0 = Fully transparent.
  *  **SpecularBlendToFull**

    * Defines how much the Specular is blended in.
    *  _Values_ : 1 = Fully blended in, 0 = Fully transparent.



#### 3x/1x ReflectionsTintBaseBlendToNone+MetalnessBlendToFull+SelfIllumBlendToFull​

  *  **ReflectionsTintBaseBlendToNone**

    * I’m not certain on this but it has something to do with Specular Reflection.
    *  _Values_ : 0 to 1. Larger Values will make the Specular Reflection appear stronger.
  *  **MetalnessBlendToFull**

    * Determines how metallic the Status Effect appears.
    *  _Values_ : 0 = no metalness, 1 = full metalness.
  *  **SelfIllumBlendToFull**

    * Sets How much self illumination the status effect will have.
    *  _Values_ : 0 = no self Illumination, 1 = full self Illumination.



### Color random​

With the Color random function we can define the Rim Light Color and the Specular Color. The only options we need from the properties window are color 1, color 2 and output field. The output field again sets what will be changed and color 1 and 2 set to what color it will be changed.

![https://i.imgur.com/0Syq2Lb.jpg](https://i.imgur.com/0Syq2Lb.jpg)

 ** _For our 2 Color random we need:_**

 _Note_ : Color 1 and 2 don’t need to be the same but in most cases they should be.

  *  **RimLightColor**

    * Sets the Rim Light Color.
  *  **SpecularColor**

    * Sets the Specular Color.



## Template​

Here you can download a template of a basic status effect particle file:  
<https://dl.dropboxusercontent.com/u/32606308/status_effect_template.vpcf> (right click --> save target as)  
Make sure to put it in the **content** folder of your addon.

You can simply edit the _colorwarp texture_ and _detail 2 texture_ to get fast results. Make sure you choose an appropriate blend mode with **D_DETAIL_2** for your _detail 2 texture_ and use an appropriate _colorwarp texture_ (as mentioned above).

Hope this helps. Feel free to ask questions or give me feedback.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/status-effects.md)

---

# Tools

## Setting Up for Collaboration

* [](/)
  * Tools
  * Setting Up Your Addon For Collaboration



On this page

# Setting Up Your Addon For Collaboration

Talking to dota 2 mod developers, or just software developers in general, you will often hear the words 'repositories', 'version control' and 'git'. The reason these are such popular topics is that version control is a very important topic within software development, and if you are working on a piece of software you SHOULD use it. In this article, I will try to clarify firstly what version control is, why you would want to use it, and how I have personaly set it up for dota 2. If you read it all the way to the end I might even give you some shameful stories about how I learnt most of this through trial and error.

# Table of contents

  * What is version control
  * Why you should use version control
  * Git
  * How to use Git
  * Remotes
  * Git clients
  * How to set up a dota 2 mod repository
    * How to make your dota 2 symlinks



## What is version control​

The name already gives it away, but version control is a method to control.. well, your versions. A more useful description would be that version control is a way of tracking different versions and stages of development in your software. The term repository is used to describe a project that is managed by some kind of version control. You basically have a system in place that tracks any changes and makes sure that everyone working on the software can work on the same version of this software simultaneously. This usually means that you have a 'remote' server that has all files, and every time you or somebody else makes a change, this remote knows this and can distribute this version to other people working on the software. There are multiple methods to do version control, popular ones include Git, SVN and Mercurial. This article will focus on Git as it is in my opinion the most convenient method.

## Why you should use version control​

There are a lot of reasons so use version control, I will list the ones that I personally think are the most important:

  *  **Working together** :   
Version control allows multiple people to work on the same files without overriding eachother's changes. Git just looks at individual line changes, and when two people happen to edit the same line it will automatically detect the clash and ask for it to be resolved.
  *  **Looking back** :   
Using version control you save different versions of your software. This means that at a later point in time you can always look back at a previous version. This means you can go back to an older version if something is seriously messed up, or you can just look at the code you had previously to compare it with your current code.
  *  **Back-ups** :   
Like stated before, most version control systems have a remove that keeps track of all the changes in the software. This means that if your hard-drive were to crash, you could always get the software from your remove like nothing happened.



I would also like to address some (wrong) misconceptions about why you would _not_ want to use version control:

  *  _"This software is so simple it does not need version control"_ :   
I have to admit that in some cases this is true, generally if you only plan on working on the code for one or two days you can get away with it. However, if you plan on working on software for longer than two days you should use version control to keep track of your development process. Just the back-up function of version control makes it worth-while.
  *  _"I am the only person working on this code"_ :   
Trust me, this is probably the worst argument for not using version control. Like in the point above the back-up function alone makes it worth-while to use it. Furthermore the division of your software into different versions is very useful for the development process.



## Git​

Like mentioned before, this article will focus on the use of Git. So what is Git? Git is a method of version control where all collaborators have their own repository on their machine. Whenever they commit a change, only their repository is updated. Once the developer is happy with what he has he can push all changes he has made to the remote, so other collaborators can pull them. Git also allows for different branches, meaning that you can have two branches with different versions of your software active at the same time, and changes by developers are only applied to one branch. Branches can also be merged so that changes made in one branch are also applied in the other branch. A common example of this is software having a master branch and development branch. While developing the developers push to the development branch, once the software is at a major milestone they merge the development branch into the master branch, so that has only major milestone versions on it. Meanwhile the developers can continue working on the development branch again.

## How to use Git​

There are a lot of tutorials on git you can find on google, I will however give a summary of the core concepts here. First of all **commit** every time you want to save your changes. A commit is basically a version of your software, you can always to back to your commits at a later point in time. **Pulling** is the action of getting all commits for some branch from your remote. This way you also get your collaborator's changes. On the other hand, **pushing** is the opposite of pulling. It pushes your commit history to the remote, so the other collaborators can get it. Remember: always pull before pushing!

Merge conflicts Even though Git keeps track of individual lines, you will have situations where multiple collaborators have changed the same lines. When pulling from the remote, git will automatically detect these so called 'merge conflicts' and ask you to resolve them. The basic way of resolving merge conflicts is to open the file that has the conflict. You will see some lines that basically look like this:
    
    
    <<<<<<< HEAD  
    nine  
    =======  
    eight  
    >>>>>>> branch-a  
    

Basically everything between '<<<<<<<HEAD' and '=====' is what you have for that line, everything between the '==========' line and the '>>>>>>>' line is what you pulled from the remote. Resolve the conflict by just removing everything except the code you want to keep. This can be your stuff, the stuff from the remote or even both! A fixed file could look like this (I chose to keep both):
    
    
    nine  
    eight  
    

## Remotes​

A remote is basically a remote location at which your software and its different versions are stored, and which are used to communicate versions to all collaborators of that piece of software. There are many different services providing remotes, though for dota 2 modding I would recommend using Git with one of these two services:

[Github](https://github.com/) \- A very user- (and noob-) friendly git provider. Github has a nice interface and very easy to use GUI client for windows. Please note that this client only the absolute basics, if you want more complicated stuff you will need to use the command-line. There are a lot of dota 2 mods on github already, you can just search the site for them, try it!

[BitBucket](https://bitbucket.org/) \- Bitbucket also offers a remote service, similar to github. Bitbucket is not as noob-friendly as Github. If you want to use bitbucket you will not be able to use the Github for windows client, more on that later.

## Git clients​

There are three main methods of doing git:

  * [SourceTree](https://www.sourcetreeapp.com/) \- My personal favourite. Sourcetree is a git client with a GUI. At first it may seem a bit intimidating, as there are a lot of options, but after some time you automatically learn how it works. Works with any git remote and provides a lot of functionality.
  * [Github client](https://windows.github.com/) \- Github provides desktop client with a nice and very user-friendly interface. The drawback of this client is that it only works with github remotes, and only allows the bare minimum of git functionality without opening up the command line. Also only works on windows.
  * [Git command line](https://git-scm.com/) \- Git is basically command-line driven, so ofcourse you can choose to not use any fancy clients at all, but just type the commands directly into your command line. Other clients are basically just user interfaces built on top of this.



## How to set up a dota 2 mod repository​

Setting up a dota 2 mod repository is not entirely trivial, as there two directories you want to include at diffent locations instead of creating your repository on just one directory. You could of course make a repository of your dota_ugc folder, but ideally you would like to have one repository per project instead of having to track changes to all of them in the same repository.

So here is my solution: I made a directory somewhere on my harddrive, doesn't matter where, and called it 'Dota 2 Mods'. Inside this directory I made different directories for each mod I made, so I would have a Bomberman directory, Invoker Warfare directory, etc etc. So how do I get my mod files in here? The answer is symbolic links, or symlinks for short. A symlink is basically a reference to a different directory on your PC. This means that you can have the same directory at two locations in your file system. Changing the contents of this directory will affect the files in the directory at both locations.

The repository directory will look something like this:
    
    
    myproject/  
    ├── game/          // symlink junction to dota 2 beta/game/dota_addons/myproject/  
    ├── content/       // symlink junction to dota 2 beta/content/dota_addons/myproject  
    └── ...            // other files like documents, scripts, etc can go in myproject/ and your repository too  
    

### How to make your dota 2 symlinks​

Inside your mod's folder open the command window by shift-rightclicking the folder (make sure you have no files selected) and pressing 'Open command window here'. Now just fill in the commands for each folder you want to include. I'll show you my commands, but keep in mind you might have to change the path to your directories:
    
    
    mklink /j "game" "D:\Program Files\Steam\steamapps\common\dota 2 beta\dota_ugc\game\dota_addons\bomberman"  
    mklink /j "content" "D:\Program Files\Steam\steamapps\common\dota 2 beta\dota_ugc\content\dota_addons\bomberman"  
    

If you did it right you should now see a game and content directory inside your mod's directory! You can now just make a repository of that directory, and it should automatically also take the contents of your symbolically linked directories into account. An additional benefit of this method is that you can also put other things in your mod folder to be included in your version control. Personally I have a documents directory in there too, storing all documents I have produced related to the mod.

 **Bonus hint:** Make sure you add thumbnail_cache.bin to your gitignore. It prevents this useless file from bloating your repository.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/setting-up-for-collaboration.mdx)

---

## Useful Console Commands

* [](/)
  * Tools
  * Useful Console Commands



# Useful Console Commands

Here are the console commands useful for modding. If you constantly use one which isn't on this list, please post it 

`dota_launch_custom_game <addon_name> <map_name>`: Launches the map_name inside the addon_name content folder. This avoids having to open the map in hammer, You can `disconnect` or `restart` at any point.

`entityreport`: prints all the spawned entities as a list of index and class

![img](https://puu.sh/g7Tp0/950028a084.png)

`entitysummary`: prints a summary with the percentage of each entity class

![img](https://puu.sh/g7TmQ/9dd2962c89.png)

`soundlist`: all the sounds playing at the current time, and total memory used

![img](https://puu.sh/g7TlG/cd98c96995.png)

`script_help2`: shows the list of all the Game API functions

![img](https://puu.sh/g7U5Z/a72fc9be17.jpg)

`dota_modifier_dump`: shows a list of all the modifiers currently applied to every entity

![img](https://puu.sh/g7U53/ad13d17fae.jpg)

`host_timescale <float>`: Speeds the game up to that number

 _host_timescale 10_

[ Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/useful-console-commands.md)

---

## Setting Up with GitHub

* [](/)
  * Tools
  * Setting Up Your Addon With GitHub



On this page

# Setting Up Your Addon With GitHub

Split the game into a `game` and `content` folder, then add junctions or symlinks to link them with the Dota files.

## Windows - Create the junctions​

For `game` folder, run
    
    
    mklink /J "C:\Users\Veggiesama\Desktop\HVH\game\hunter_v_hunted\" "C:\Games\steamapps\common\dota 2 beta\game\dota_addons\hunter_v_hunted\"  
    # Junction created for C:\Users\Veggiesama\Desktop\HVH\game\hunter_v_hunted\ <<===>> C:\Games\steamapps\common\dota 2 beta\game\dota_addons\hunter_v_hunted\  
    

For `content` folder, run
    
    
    mklink /J "C:\Users\Veggiesama\Desktop\HVH\content\hunter_v_hunted\" "C:\Games\steamapps\common\dota 2 beta\content\dota_addons\hunter_v_hunted\"  
    #Junction created for C:\Users\Veggiesama\Desktop\HVH\content\hunter_v_hunted\ <<===>> C:\Games\steamapps\common\dota 2 beta\content\dota_addons\hunter_v_hunted\  
    

To remove junctions, simply remove the link directory
    
    
    rmdir "C:\Users\Veggiesama\Desktop\HVH\content\hunter_v_hunted\" -force  
    

## Linux - Create the symlinks​

For `game` folder, run
    
    
    ln -s /home/username/games/Steam/steamapps/common/dota2/game/dota_addons/my_custom_game /home/username/workspaces/dota2-workshops/my_custom_game/game  
    

For `content` folder, run
    
    
    ln -s /home/username/games/Steam/steamapps/common/dota2/content/dota_addons/my_custom_game /home/username/workspaces/dota2-workshops/my_custom_game/content  
    

Remove the symlinks by using
    
    
    unlink /home/username/workspaces/dota2-workshops/my_custom_game/content  
    umlink /home/username/workspaces/dota2-workshops/my_custom_game/game  
    

Now you can do modifications from the steamapps folder and still use Github for version control from a linked folder.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/setting-up-your-addon-with-github.md)

---

## Combining KV Files

* [](/)
  * Tools
  * Combining KV files using #base



On this page

# Combining KV files using #base

Having one kv file containing every unit or ability definition as is default in the mod interface can become very annoying very quickly. Splitting up this one file into several smaller KV files makes it easier to keep an overview and manage your files. Usually people would use modkit for this, but:

 **[ModKit](https://github.com/stephenfournier/Dota-2-ModKit) is not needed to combine KV files**

Thanks to some detective work done in #steamdb and some testing on my part, we discovered dota KV has a working #base directive, which tells the engine to combine another KV file with the current one.

 **This method works for:**

  * Unit/Ability definition files (like npc_units_custom.txt or npc_abilities_custom.txt).
  * Custom key value files loaded into lua with LoadKeyValues.
  * Localisation files (addon_english.txt)



## How it works​

Assume we start with one file at path `scripts/npc/npc_abilities_custom.txt` with the following content:
    
    
    "DOTAAbilities"  
    {  
        "Ability1"  
        {  
            "SomeProperty1"    "1"  
            "SomeProperty2"    "2"  
        }  
      
        "Ability2"  
        {  
            "SomeProperty1"    "1"  
            "SomeProperty2"    "2"  
        }  
    }  
    

Now let's say we want to split this up into two files, we can create another file `scripts/npc/abilities_2.txt`. This file has to have a root element just like the other files, we can just copy DOTAAbilities. Also copy the content to be separated so this is the result:
    
    
    "DOTAAbilities"  
    {  
        "Ability2"  
        {  
            "SomeProperty1"    "1"  
            "SomeProperty2"    "2"  
        }  
    }  
    

Now edit the main file to include this new abilities_2.txt file by adding `#base "[relativePath]"`, this results in:
    
    
    #base "abilities_2.txt"  
    "DOTAAbilities"  
    {  
        "Ability1"  
        {  
            "SomeProperty1"    "1"  
            "SomeProperty2"    "2"  
        }  
    }  
    

When loading this KV file, the engine will now automatically add the contents of abilities_2.txt to npc_abilities_custom.txt by combining the two root objects in both files. This means that the name of the root object does not matter, so instead of `"DOTAAbilities"` you could have `"MYOTHERFILE"`, or even just empty string `""`. You should not have identical keys in both root objects, but if you do then the ones defined later (think of #base happening before the rest of the file) will override already defined ones.

This also supports directories. Keep in mind all paths are relative. Say I create `scripts/npc/customAbilities/ability1.txt`, I can include this from `scripts/npc/npc_abilities_custom.txt` using `#base "customAbilities/ability1.txt"`.

 **PS:** Other extensions are also allowed, you could name your included files *.kv

## Credits for pointing out this is part of the KV spec:​

  * XMPPwocky
  * xPaw
  * Netshroud



[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/combining-kv-files-using-base.md)

---

## vConsole Improvements

* [](/)
  * Tools
  * improvement vConsole



On this page

# improvement vConsole

![icon](data:image/png;base64,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)

## vConsole​

Dota2 Tools have a console `vConsole2.exe`

Today I will show you how to change the functionality of the toolbar. In this article, we will not consider the configuration and standard features of the vConsole program.

> Standard toolbar view:

![vconsole](/assets/images/vConsole-e43471a1ad8e717a31132be2fe4e3a4d.png)

This is the part of the program that we will expand on today. What opportunities will we get :

1) Button launches a tool from the dll (in default config bug reporter and NetGraph ) 1) Button applies a console command (in default config launches AssetBrowser ) 1) Button launches an external program (VsCode , Notepade++, Sublime text, and of course Dota2 Tools )

In variant 1 we probably can't change anything (or it would be very difficult and my knowledge is lacking).

But the other two are just right.

We need this configuration file for the console : `dota 2 beta\game\core\tools\sdk_vconsole_subtools.txt`

The file format is the usual key-value. The key parameters that I was able to find for this file:
    
    
    m_Name                       - Section name - importance is low, no visibility (but better to use).  
    m_MenuString                 - Name for menu list Tools.  
    m_SubToolIconPath            - Path for image icon (Button or menu). Great choice here "\dota 2 beta\game\core\tools\images\". You can also shorten the way "game:tools/images/workshopmanager/icon_refresh_activated.png"  
    m_ToolbarString              - Name for button.  
    m_StatusBarTipString         - ToolTip in status bar and pop-up tooltip on the button.  
    m_CommandString              - any/all console commands that you already use in Dota2 Tools, (commands separated by semicolons are executed alternately, as in the console).  
    m_ExecutablePath             - the path to the executable file. (the slash in the path name, must be escaped with a slash \\)  
    m_ExecutableArguments        - arguments to run the executable file  
    m_LibraryPath                - the path to the DLL (for internal Dota tools)  
    m_AdditionalDependencies     - additional dependencies (probably expand the tools we are not really available)  
    m_bRequiresAppConnection     - Checking the connection to the application Dota2 (if Dota2 is running the icon takes full color, otherwise the icon is completely in shades of gray and cannot be clicked)   
    m_bRequiresToolConnection    - Checking the connection to the application Dota2 Tools (AssetBrowser only in tools, netgraph is also available in Dota2)  
    m_bInternalUseOnly           - only internal use - the essence is not clear.  
    m_bAllowAutoStart            - run at console start (not sure if it works in every situation)  
    m_ToolConfig                 - I don't know what it's for.(Maybe here you can specify the config from PET Hammer and other tools)  
    m_MaterialSystemDependencies - we are not interested (section with other dependencies - did not notice the difference by editing it)  
    m_SubTools                   - Our area for customization  
    // +dota_launch_custom_game  - comments work  
    

Many names will speak for themselves.

We are interested in the `m_SubTools` section of this file.

* * *

##  ** **Important : DOTA2 may overwrite this file after an update (not always), make sure to make a backup copy (with your edits).****​

* * *

Examples from my config. restarting the map with clearing the console :
    
    
    {  
        m_Name                      = "Restart"   
        m_MenuString                = "Restart"  
        m_SubToolIconPath           = "game:tools/images/workshopmanager/icon_refresh_activated.png"  
        m_ToolbarString             = "Restart"  
        m_StatusBarTipString        = "Restart map"  
        m_CommandString             = "clear;restart"  
        m_bRequiresToolConnection   = true  
    }  
    

running Dota2 Tools with the test addon and launch parameters:
    
    
    {  
        m_Name                      = "tp"  
        m_MenuString                = "Test project"  
        m_SubToolIconPath           = "game:tools/images/hammer/toggle_tools_materials_activated.png"  
        m_ToolbarString             = "Test A"  
        m_StatusBarTipString        = "Test Addon load"  
        m_ExecutablePath            = "X:\\Steam\\steamapps\\common\\dota 2 beta\\game\\bin\\win64\\dota2.exe"  
        m_ExecutableArguments       = "-nobreakpad 375360 -tools -addon test -novid -uidev -dev -nominidumps -condebug -toconsole -vconsole "  
    }  
    

running a VSCode program with arguments (in this case the workspace is specified):
    
    
    {  
        m_Name                      = "vsc"  
        m_MenuString                = "VSCode"  
        m_SubToolIconPath           = "C:/Microsoft VS Code/resources/app/resources/win32/code_70x70.png"  
        m_ToolbarString             = "VSCode XX"  
        m_StatusBarTipString        = "Run Vscode Addon XxxXxx"  
        m_ExecutablePath            = "X:\\Microsoft VS Code\\Code.exe"  
        m_ExecutableArguments       = "X:\\xxxx\\xx_scripts.code-workspace"  
    }  
    

* * *

View of my toolbar without Dota2 tools running : ![toolbar1](/assets/images/toolbar1-f86c5c10a181b248457ac1459bd57d14.png)

with running tools :

![toolbar2](/assets/images/toolbar2-9b8538c62a50c5a2f82cb3b6817b9cc2.png)

I hope my article will help you better organize your workspace when developing addons and you will be able to make more good and interesting projects.

> PS my native languages BY RUS , I apologize for possible translation inaccuracies.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/improvement-vConsole.md)

---

## GitHub Repositories and Search

* [](/)
  * Tools
  * GitHub Repositories and Search



On this page

# GitHub Repositories and Search

## Templates​

  * [TypeScript Template](https://github.com/ModDota/TypeScriptAddonTemplate)
  * [Barebones](https://github.com/DarkoniusXNG/barebones)
  * [But Template](https://github.com/Snoresville/dota2buttemplate_fixed)



## Examples & Guides​

  * [Lua Abilities](https://github.com/Elfansoer/dota-2-lua-abilities)
  * [Spell Library](https://github.com/Pizzalol/SpellLibrary)
  * [Particle Editor Tutorial](https://github.com/Nibuja05/dota_particle_editor_tutorial)



## Custom Games​

  * [Dota Imba](https://github.com/EarthSalamander42/dota_imba)
  * [Dota Reimagined](https://github.com/Shushishtok/dota-reimagined)
  * [Legends of Dota Redux](https://github.com/darklordabc/Legends-of-Dota-Redux)
  * [Open Angel Arena](https://github.com/OpenAngelArena/oaa)
  * [Dota Tutorial](https://github.com/ModDota/dota-tutorial)



## Tools​

  * [Tooltip Generator](https://github.com/Shushishtok/tooltip_generator)
  * [Tooltip Codemaker](https://github.com/Shushishtok/tooltip-codemaker)



## Misc​

  * [Game Tracking](https://github.com/SteamDatabase/GameTracking-Dota2)
  * [Valve Resource Format](https://github.com/SteamDatabase/ValveResourceFormat)
  * [Typescript Declarations](https://github.com/ModDota/TypeScriptDeclarations)
  * [Dota VPK Updates](https://github.com/spirit-bear-productions/dota_vpk_updates/)



## Code Search​

> [GitHub Code Search](https://github.com/search) ([Docs](https://docs.github.com/en/search-github/searching-on-github/searching-code))

The search function on GitHub has some very handy features to find code.

Filter| Syntax| Example  
---|---|---  
Language| `language:language`| `SendEventClientSide language:JavaScript` ([Link](https://github.com/search?q=SendEventClientSide+language%3AJavaScript&type=code&l=JavaScript))  
Repository| `repo:username/reponame`| `AddFOWViewer repo:EarthSalamander42/dota_imba` ([Link](https://github.com/search?q=AddFOWViewer+repo%3AEarthSalamander42%2Fdota_imba+&type=code))  
Path| `path:your/path`| `FindAllByClassname path:game/scripts/vscripts/` ([Link](https://github.com/search?q=FindAllByClassname+path%3Agame%2Fscripts%2Fvscripts%2F&type=code))  
User| `user:username`| `ListenToGameEvent user:ModDota` ([Link](https://github.com/search?q=ListenToGameEvent+user%3AModDota&type=code))  
Boolean Operators| `OR`   
`AND`   
`NOT`| `CastAbilityNoTarget (language:Lua OR language:TypeScript)` ([Link](https://github.com/search?q=CastAbilityNoTarget+%28language%3ALua+OR+language%3ATypeScript%29&type=code))   
`CastAbilityNoTarget NOT path:.d.ts` ([Link](https://github.com/search?q=CastAbilityNoTarget+NOT+path%3A.d.ts&type=code))  
Wildcard Characters| `. , : ; / \ ` ' " = * ! ? # $ & + ^ \| ~ < > ( ) { } [ ] @`  
 _No escaping support_| `FindAllByClassname path:game/scripts/vscripts/*.lua` ([Link](https://github.com/search?q=FindAllByClassname+path%3Agame%2Fscripts%2Fvscripts%2F*.lua&type=code))  
  
And yes, the filters can of course be combined.

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/github-repos-and-search.md)

---


# Дополнительная информация

## Contribute

* [](/)
  * Contribute



On this page

# Contribute

## Suggest an article on GitHub​

To suggest a new article go to the [/_articles directory of the ModDota GitHub](https://github.com/ModDota/moddota.github.io/tree/source/_articles)

 **Note: You need to be logged in to your GitHub account for this.**

Next, click the 'Create file' button as indicated: ![Click the create new file button](https://i.imgur.com/hzOmlcA.png)

### Fill your article​

In the new file window you have to add a descriptive file name and text for your article:

![Fill your article](https://i.imgur.com/4CcOl0i.png)

 **Tip:** You can use the preview tab at the top to preview the article!

#### IMPORTANT: Mandatory fields​

There are some mandatory fields you need to fill for the article to work:

First, you need to set a file name. Choose a descriptive name, words separated by `-` (no spaces). **The file must end with .md!**

Second, you need to set some basic article information at the top, the layout is always the same (including dashes):
    
    
    ---  
    title: <Title of your article>    # Title of your article (required)  
    author: <your name>               # Your name  
    steamId: '<your steam ID>'        # Your steam ID to link to your steam profile  
    date: <date>                      # The date of writing  
    ---  
    

The only required field is `title`, all other fields can be safely omitted.

### Submit your article for review​

Once you're done you just need to add a very short description on the tutorial you just made at the bottom of the page. This will show up in the change history of the website. Once you are done hit the green 'Propose new file' button.

![Submit your tutorial](https://i.imgur.com/xkwdcRx.png)

### Article review​

Someone will check if the article is not broken on the website and is not missing information, you might be asked to make some changes before the page is added to the website.

Once your tutorial is merged it is automatically released to the website.

## Writing tutorials​

Tutorials can be written in Markdown markup language, with some extra features from GitHub Flavored Markdown supported. To get familiar with the syntax, you can visit [this page](https://commonmark.org/help/).

In addition, this website supports markdown extensions provided by [Docusaurus](https://v2.docusaurus.io/docs/markdown-features):

named-code-example.lua
    
    
    function foo() {  
      -- Highlighted line  
    }  
    

note

Admonitions

### Embeds​

 **To add a Gfycat gif to the page use the following format:**

To embed <https://gfycat.com/remarkableimportantant>:

Use `<Gfycat id="remarkableimportantant" />`

 **To add a YouTube player to the page use the following:**

To embed <https://www.youtube.com/watch?v=GMvmdnNM6Sc>:

Use `<YouTube id="GMvmdnNM6Sc" />`

### Headings​

In Docusaurus, Markdown's [headings] get an additional meaning - they are used to generate Table of Contents, which you can see on the right side from the article.

info

Only headings of levels 2 (##) and 3 (###) would appear in the Table of Contents.

caution

Do not use headings of the first level (#) in tutorials. It would be automatically added based on the `title` field.

## Using a git fork​

 **Warning: Advanced users only**

This website is set up as a Github Pages project which is automatically rendered from its source contents by Jekyll. Content is rendered automatically after each push to master and published to the website.

You can simply fork or clone the repository to edit the files and submit a pull request to the main repository.

File structure is as follows:
    
    
    .  
    _articles/         # Directory storing all articles on the website as markdown files  
      | article1.md  
      | ...  
    _includes/         # Directory containing Jekyll includes  
    _layouts/          # Website layout files. (NOTE: We override the Jekyll Minima theme, only overrides   | ...                  are in this directory, the default minima files are not in this repo)  
    _sass/             # Sass stylesheets, will automatically be built when releasing  
      
    ask-a-question.md  # The 'Ask-A-Question' page  
    contribute.md      # This page  
    index.md           # Homepage  
    

[Edit this page](https://github.com/ModDota/moddota.github.io/edit/source/_articles/contribute.md)