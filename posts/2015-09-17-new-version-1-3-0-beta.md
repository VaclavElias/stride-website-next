---
layout: post
title: 'Xenko 1.3β is out!'
author: 'Silicon Studio'
disqus_short_name: paradox3d
image_thumb: /images/blog/release-1.3/thumb.png
---
We are proud to announce the release of a new version of Xenko, bringing lots of usage enhancements and many bug fixes - over 1000 commits since previous version! We have been working hard to bring to you most of the feature listed on our [roadmap](https://trello.com/b/FwbjOjjB/paradox-roadmap). 

Also, if you haven't participate to our [survey](/blog/roadmap-and-survery/), please take the time to help us prioritize the features you need for your projects!

 <a href="https://youtu.be/-RbIALRmhs0" target="_blank"><img alt="Rescue Robot Tech Demo" src="/images/backgrounds/rescue-robot-tech-demo.jpg"/></a>

<!--more-->

___

# Highlights

## Assets

We have been improving many parts to smooth the management of assets in your project.

### Faster compiler

In the previous version, asset compilation could take 5 seconds or more, even if nothing needed to be recompiled. Most of the time was taken by the JIT compilation and initialization of some types in the asset compiler. We have introduced a new compiler process that stays on flight and is able to respond faster to compilation requests. This process shuts down automatically after not being used for a while. This optimization is reducing the total time to recompile a project to less than 1 second, when nothing was changed. We are still looking to improve this compilation step a lot more in a future release!

### Game Settings

A new mandatory "GameSettings" asset allows you to define the main properties of your game:
Default Startup Scene
Resolution
Graphics Profile (DX9, 10 or 11)
HDR or LDR mode
Color Space: Gamma or Linear (more details below)

<p>
    <img src="/images/blog/release-1.3/GameSettings13.png" align="center" />
</p>

It will automatically be created when opening an old project with version 1.3.
We plan to add many more options to this asset from now on.

### Compilation control

Until now, all assets of a game package and its dependencies were compiled as part of your game.

Starting with version 1.3, we compile only assets required by your game. This makes game compilation much faster (especially if you have lots of unused assets).

Don’t worry, most of it is done automatically for you! We do this by collecting dependencies from the new Game Settings asset. Since it references the Default Scene, we can easily detect all the required asset references (Models, Materials, Asset referenced by your scripts and so on).

<p>
    <img src="/images/blog/release-1.3/AssetControlExample.png" align="center" />
</p>

In case you were loading anything in your script using `Asset.Load`, you can still tag those assets specifically with "Mark as Root" in the editor.

However, we now recommend to instead create a field in your script and fill it directly in the editor. All the samples have been updated to this new practice, so please check them out.

### Raw assets

We have added support for raw assets. You can now easily add your own config/xml files or load proprietary file formats. Raw assets are imported as-is in the game and can be accessed at runtime using the `Assets.OpenStream(...)` method.

### Assets consolidation

We encourage users to organize their raw assets (such as FBX, PNG, JPG files) in a specific subfolder (just like the samples are doing it).

However, if you prefer to have your raw assets copied side by side with Xenko assets, it is now possible by checking "Keep Source Side by Side" on assets.

When doing so, source assets will be copied alongside the Xenko asset with the same name. Those changes happen when saving the project. In case some irreversible changes happen (i.e. delete or overwrite an existing file), a confirmation will be required by the user.

This option is still off by default when importing new assets, but we plan to make it a project setting if you want to manage project that way for your whole team.

<p>
    <img src="/images/blog/release-1.3/AssetConsolidation.png" align="center" />
</p>

Don’t forget to save new versions of your raw assets at the new location.

 ___

## Rendering

### Integration of SpriteStudio (OPTIX)

We added preliminary support for [SpriteStudio](http://www.webtech.co.jp/eng/spritestudio/) animations and sprite sheet importing. At this point only few animation keys are supported.

Animation pipeline is very similar to a 3D model with smooth interpolations.

Check out our new Sprite Studio Demo in the samples:

<p>
    <img src="/images/blog/release-1.3/SpriteStudioDemo.jpg" align="center" />
</p>


### Materials: Vertex stream, Shader nodes…

In addition to the current color providers supported by materials (texture, scalar, ...), we have added support for 2 new ones:

You can now use a color/values coming from **vertex attributes/stream** and use them directly in material color providers:

<p>
    <img src="/images/blog/release-1.3/RenderingMaterialsVertexStream.png" align="center" />
</p>

This allows for example to blend two textures in a diffuse material, based on the value of a color coming from the vertex buffer.

Also, you can use a shader directly as a color provider (inheriting from `ComputeColor`), allowing you to display procedural textures. For now, the list of shaders is not filtered so many shaders are not compatible with the material input. This is something that we are going to improve in a future release. Have a look at the `Custom Material Shader` sample to check, how this can be used in practice in your project.

### Gamma vs. Linear and improved support for HDR

In the previous version, the rendering of all thumbnails and previews were neither HDR nor gamma correct. Also, working in linear space required to manually check sRGB mode on all textures of your project, which was quite cumbersome. There were also many places where the engine was not correctly distinguishing between gamma and linear space. 

In this version, the engine is now able to fully support pipelines that are HDR and gamma correct. You can still switch to a LDR and/or linear color pipeline, if your game requires legacy color handling. Thumbnails and preview should now match the settings of your game (HDR/LDR and Gamma/Linear). At runtime, if a platform doesn’t support SRgb textures/rendertargets (used for gamma correct rendering), the game will switch transparently to gamma colorspace. On these platforms, the rendering will not be gamma correct.

By default, all new games are now created with `Linear` colorspace. This setting can be changed in the GameSettings:

<p>
    <img src="/images/blog/release-1.3/GameSettingsColorSpace.png" align="center" />
</p>

The texture importer by default now automatically uses the color space defined at game level:

<p>
    <img src="/images/blog/release-1.3/TextureColorSpace.png" align="center" />
</p>

___

## Sprites

### Atlas generation

We have added support to create automatically atlas texture generated from sprite sheets. This feature is optional and the user can continue generating their atlas manually if they prefer. It supports sprite border size.

<p>
    <img src="/images/blog/release-1.3/SpriteSheetTextureAtlas.png" align="center" />
</p>

### Alpha detection

We have also improve automatic alpha detection of textures and sprites. In addition to looking at the input file type and header, we are detecting actual data of the textures or sprites to detect alpha. This feature will be extended also to other types of texture formats (normal maps...etc.)

### Sprite editor improvements

The sprite editor has been improved in several ways. First, the left pane now let you select the sheet type (sprites or UI) and the color key. To easily set the color key from the image itself, a color picking tool has been added. It is also possible to duplicate an existing sprite so you don’t have to enter the same parameters again and again.

<p>
    <img src="/images/blog/release-1.3/SpriteEditorLeft.png" align="center" />
</p>

Selecting the area of each sprite in a sheet can be annoying, so we added a magic wand tool to easily create a rectangle that fit the edges of the sprite you click on, using either transparency, or the color key to determine sprite limits.

<p>
    <img src="/images/blog/release-1.3/MagicWand.gif" align="center" />
</p>

 ___

## Scene editor

We made several improvements to manage the hierarchy of entities. First, the root node representing the scene has been removed. You can now access the graphics compositor and editor settings via the *Scene settings* button.
<p>
   <img src="/images/blog/release-1.3/SceneSettings.png" align="center" />
</p>

Also, to help you sort and filter entities in your scene, we added the concept of folders. You can create folders either at root level, or inside an entity, and move other folders/entities into them. Folders are completely virtual and exist only at design time. The actual hierarchy of entities is not affected by them.
<p>
   <img src="/images/blog/release-1.3/SceneFolders.png" align="center" />
</p>


Aligning the camera along coordinate axes was cumbersome. We added a new nativation gizmo to the top-right corner of the scene editor, which allows you to easily rotate the camera around axes in 45° increments. Clicking on the center of the cube a second time, will switch between perspective and orthographic projection. Camera controls have also been improved when working in orthographic mode, to make it easier to move around in 2D worlds.
<p>
   <img src="/images/blog/release-1.3/NavigationGizmo.gif" align="center" />
</p>
Finally, the camera menu has been improved to allow you to customize various options related to the editor camera. These options were previously available in the editor settings section of the scene properties. This section has been removed.
<p>
   <img src="/images/blog/release-1.3/CameraMenu.png" align="center" />
</p>


The material selection mode, introduced in the previous version, has been improved to allow you to perform close-ups on single meshes of a model. Hovering over the desired mesh and pressing 'F' while in material mode, will now center the camera on it.

 ___

## Physics improvements

Physics support has seen a lot of improvements.
The physics system is now **loaded automatically** - no need anymore to load it manually from code.

### Element types

Physics elements have been simplified. To reduce confusion between object types some element types have been removed/merged with others. Each element type is now represented by separate class (instead of having a type property). This provides a clearer abstraction and easier configuration from the editor. Physics gizmos are **color coded** by element type.
<p>
   <img src="/images/blog/release-1.3/physics_elements_new.png" align="center" />
</p>

### Linking to bones

You can now properly link physics elements to bones of a model hierarchy. This makes it possible to create ragdolls, flags, etc. from the editor. Searching for the correct node is assisted by the editor. No need to memorize the name of the node.
You currently still need to set up constraints programmatically. This will also be possible from the editor in the future.
Also, complex entity hierarchies are now well handled.

<p>
    <img src="/images/blog/release-1.3/physics_nodes.png" align="center" />
</p>

### Async scripting for collision handling

Collision handling has been redesigned and now uses an async/await pattern. Events have been removed. Instead awaitable APIs are available, improving both internal performance and the readability of your code.

<pre class="line-numbers language-csharp">
<code class=" language-csharp">
    //start our state machine
    while (Game.IsRunning)
    {
        //wait for entities coming in
        await trigger.FirstCollision();

        SimpleMessage.OnStart();

        //now wait for entities exiting
        await trigger.AllCollisionsEnded();

        SimpleMessage.OnStop();
    }</code></pre>

### Collider shapes

You can now declare collider shapes right **inside of a physics component**, for increased productivity. These shapes will also be affected by the scaling of the entity. Using Collider Shape assets to share shapes among elements is still possible, of course.

A **Convex Hull collider shape** has been added, providing a shape that is shrink wrapped to a model. For more complex model, a shape is wrapped to each mesh. In the future we also hope to provide complex convex decomposition.

<p>
    <img src="/images/blog/release-1.3/physics_inlineshapes_new.png" align="center" />
</p>
 ___

## Manage code and scripts from Game Studio

Scripts are now a new special type of asset.

<p>
    <img src="/images/blog/release-1.3/script_asset.png" align="center" />
</p>
You can now create scripts straight from the Game Studio, without any need to have visual studio installed if wanted, Just fire your favorite code editor and start making scripts for your game!

Renaming/Deleting/Adding a script from visual studio will be detected after script recompile in the Game Studio.

Renaming/Deleting/Adding a script from the Game Studio will be detected after project save in Visual Studio.

For this release when you drag and drop a script asset into a script component the first script in the code file will get picked up. (this will be improved very soon)

 ___

## Scripting

### Script Priorities

Added `Script.Priority`, that allows you to control how a script will be scheduled each frame. Script will be executed by Priority order. You can change Priority of an already running Script during execution to control accurately the order of execution of your scripts.

Also, all `SyncScript` and `AsyncScript` are now managed in the same scheduler and priorities between them will apply (before, all `AsyncScript` were executed first, then all `SyncScript`).

### Live Scripting improvements

After our first initial version, we tried to improve live scripting usability with two new features.

When running a game in live scripting while Visual Studio is started, the debugger will automatically attach to the newly started session. Note: Visual Studio might complain when you try to edit files. Disabling *Edit & Continue* of managed code will fix this issue.

During reload, you may want to keep some specific properties that are usually not serialized (public members with `DataMemberIgnore` or private/internal members). You can now use `[DataMember(Mask = LiveScriptingMask)]` on your script fields and properties to achieve this.

Last, GameStudio-side logging has been improved to better show what happens in the remote game process.

## Model Node Link improvements

Model Node Link components allows you to make one entity follow a given model node or bone. They have been reworked and made easier to use.

Firstly, if now target model is set, they will now automatically use the parent entitie’s model. When editing the target node, the editor will now display a list of available model nodes to choose from:
<p>
    <img src="/images/blog/release-1.3/ModelNodeLinkNodeSelection.png" align="center" />
</p>

Also, transformation is not ignored anymore. It is now possible to apply an offset, relative to the node.

Lastly, node link information is now visible in the scene tree view for easier discoverability:
<p>
    <img src="/images/blog/release-1.3/ModelNodeLinkSceneTreeInfo.png" align="center" />
</p>

 ___

# Breaking changes

- General: you now need to redistribute your games with VS2015 C++ redist instead of VS2013 ones.
- Engine: When implementing a new entity component type, if you were using EntityComponent.Enabled, you now need to inherit from ActivableEntityComponent instead.
- Engine: Script execution order was previously undefined but is now controlled by Script.Priority. Please make sure it didn’t affect your game.
- Rendering: Remove post effect GammaTransform as the new pipeline is now using sRGB render targets for gamma correct pipeline.
- Rendering: Remove `LightShadowImportance`. Switch to a single configuration done through the `LightShadiwMapSize` enum.
- Rendering: Rename ILightColor to IColorProvider and move to namespace Engine.Rendering.Colors. Add extensions methods (github issue [#296](https://github.com/SiliconStudio/xenko/issues/296)) 
- Physics: Collision events are removed. An async/await pattern is encouraged from now on.
- Sprite Sheets: They are now automatically packed. If this affects you, you can simply disable this setting by editing your Sprite Sheet asset.

# Version 1.3.0-beta

Release date: 2015/09/17

Almost 1000 commits are included in this release since the previous version of July. You will find more details in the following sections.

## Enhancements

### General

- Switched Xenko to VS2015. You can still compile your games with VS2013, but you will need to ship VS2015 C++ redistributables instead of VS2013 ones.
- Graphics platform is not part of user projects anymore, it is either automatically deduced and will likely be controllable from new Game Settings asset
- Visual Studio Solution configuration is now switched automatically based on the startup project and vice versa.
- On Android, we better detect ADB (check registry, running process before trying to find on PATH)

### Game Studio

- Removed the *Code* section of a package and merged its content into the package top-level
- Animation preview now displays current time and duration of the animation, and has a proper scale under the seek bar
- Add a button in the asset properties to open the asset editor when it’s available for this asset type (currently only for scenes and sprite sheets)
- Some lists in the property grid can be reordered by drag and drop
- File and directory properties now accept drops from Windows Explorer
- Better handling of assets that can be edited, moved or deleted
- Better placement of the checkboxes in the property grid so the indentation is not affected by the presence of a checkbox
- The status bar now display background works, such as project build, thumbnail or effect compilation... and indicate progress and result
- The output panel will display an asterisk when new messages are logged.
- Scene editor: Add the concept of folders to sort assets
- Scene editor: Removed the root scene node, and added a *Scene settings* button to access the scene properties
- Scene editor: Add a navigation gizmo to easily reorient the camera
- Scene editor: Moved all camera options into the camera menu of the toolbar and removed them from the Editor settings section of the property grid
- Scene editor: The tree view will scroll automatically when dragging entities in a long list
- Scene editor: Invert up/down and forward/backward keys when the camera is orthographic
- Scene editor: Display list of model nodes when editing ModelNodeLinkComponent.NodeName
- Scene editor: Display Model Node Link information in the scene tree view
- Scene editor: Select newly created entities when dropping asset to the scene
- Scene editor: Snap newly created entities when dropping asset to the scene if snapping is enabled
- Sprite editor: Add a button to center the view on the current sprite region
- Sprite editor: Magic wand tool to easily select sprite region. Works with either transparency or color key, support ctrl+click to include multiple partd in the same region.
- Sprite editor: Add a color picking tool to select the color key
- Sprite editor: Add buttons to cycle between the different sprite, with proper keyboard shortcut
- Sprite editor: Add a button to duplicate the selected sprites
- Sprite editor: Sprites can be reordered by drag and drop and can be dropped into a different spritesheet
- Sprite editor: More options in sprite context menu
- Sprite editor: Keep the position and zoom of the image when changing selected sprite
- Sprite editor: Support DDS images (and many other formats)

### Assets

- Add ability to include raw assets in a game and loading them with the `Assets.OpenStream` API.
- Background asset compiler for faster asset compiling tasks.
- Added concept of "Root" assets (auto collect game assets, and user can manually mark additional ones)
- Added a new undeletable GameSettings asset where you can configure various global settings.
- Added a "Keep Source Side by Side" to force raw assets to be copied alongside their Xenko asset counterpart while saving.
- Switch to FBX SDK 2016 when handling FBX assets

### Engine

- Added Entity.AddChild() and Entity.GetParent() extension methods ([#251](https://github.com/SiliconStudio/xenko/issues/251))
- Added Script.Priority to give better control of script order of execution. Also interleaves execution of AsyncScript and SyncScript in the same scheduler.
- If ModelNodeLinkComponent.Model is null, it now automatically uses parent model
- ModelNodeLinkComponent now uses TransformationComponent values to applies an additional relative offset on top of the node transformation
- Reworked transformation order so that it is easy to add new components similar to Model Node Link Components (i.e. Sprite link, etc…)
- `AnimationComponent.Play()` now returns a `PlayingAnimation`, on which you can use `await playingAnimation.Ended()`.
- AsyncScripts now provide a `CancellationToken` that can be passed to async APIs to properly cancel them
- AsyncScripts now also have a `Cancel` method to do synchronous cleanup
- Before, every type of entity components could be disabled. From now on, they need to inherit from `ActivableEntityComponent`.
- Added the possibility to reference audio and font assets from scripts
- Unify API of collider shapes, procedural models and geometric primitives

### Input

- Added support for sensor input

### Rendering

- Shader material nodes as color providers are re-enabled in Materials. Refer to the 'Custom material shader' sample for details
- Vertex stream in materials can be used as color providers.
- Better support for ColorSpace (Gamme vs. Linear) throughout the engine
- Improve `ToneMap` color transform, Add Hejl 2 tonemapping operator. Add `AutoExposure`/manual exposure and `TemporalAdaptation` flags.

## Issues fixed

### Assets

- Obj + mtl file import support
- Fixed .blend assimp import
- Assimp imported meshes scale property support.
- Custom assets are now loaded correctly when used in the package they are defined in ([#280](https://github.com/SiliconStudio/xenko/issues/280))
- Local packages are now correctly loaded after their dependencies
- If you use "Keep Source Side by Side" on assets with raw assets, they will be copied alongside the asset while saving the project

### Build

- Restored UserDoc functionality 
- Added support for user's native libraries

### Engine

- Fixed an issue when creating StartupScripts in other StartupScripts ([#294](https://github.com/SiliconStudio/xenko/issues/294))

### Game Studio

- Animation preview won’t freeze the Game Studio anymore
- Display an error message if Game Studio was started in 32 bit mode
- Previews and thumbnails now properly take skinning into account
- SpriteFont can now be properly referenced in scripts.
- There was some issues when importing shader log and undoing that
- The layout of the Game Studio was improperly saved
- Display properly the name of entities/sprites on the top of the property grid when something else than an asset is selected
- Scene editor: Issues in camera control: LMB+RMB allows to pan the camera, fix mouse lock when using middle click, fix right-click on gizmos
- Scene editor: Modifying a materials tessellation now properly updates the scene
- Scene editor: Orientation of the camera gizmo was sometimes incorrectly computed
- Scene editor: Transformations applied on a selection of multiple object were sometimes incorrectly processed
- Scene editor: Duplication using Ctrl key while using the transformation gizmo
- Scene editor: Prevent a crash that might occur when loading a large scene
- Scene editor: Transparency was incorrectly processed in the camera preview

### Input

- Input: Properly detect HasMouse on Windows 10, Store and Phone platforms

### Rendering

- Fix ImageReadBack latency to force readback on first frame if previous frames were not available.
- Ensure recursive materials are generating an log error instead of a StackOverflowException 
- Fixed issue where not all enabled lights would be rendered ([#297](https://github.com/SiliconStudio/xenko/issues/297))

### Shaders

- Swizzling scalars now works on OpenGL platforms
- Display a proper error message when variables of different types have the same semantic ([#197](https://github.com/SiliconStudio/xenko/issues/197))

### Samples

- Fixed corrupted scene of the ‘Sprite entity sample ([#281](https://github.com/SiliconStudio/xenko/issues/281))

# Known Issues

- Rendering: Color used in SpriteBatch is not gamma correct and is considered as Linear It means that if you used a Color to modify a sprite with SpriteBatch, the sprite will appear a bit brighter.
- Rendering: DynamicFonts are not yet gamma correct.
- Rendering: Shadow maps are not rendered correctly with orthographic projections
- Input: Windows Phone touch inputs are sometimes not consistent with other platforms.
- UI: EditText is not implemented on Windows 10, Phone and Store

