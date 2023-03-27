---
layout: post
title: 'Xenko 1.0 Released'
author: silicon-studio
image: /images/blog/release-1.0-alpha/dragon_banner.jpg
image_thumb: /images/blog/release-1.0-alpha/thumb.jpg
tags: ['Release']
---

A new version is available for download. Run the Xenko Studio to download and install the latest version.

---

[[TOC]]

{% img 'Dragon Banner' '/images/blog/release-1.0-alpha/dragon_banner.jpg' %}

## In Progress
<ul>
<li>General: Integration of <a href="http://esotericsoftware.com/">Spine</a> </li>
<li>General: Preparations for open-source release</li>
<li>Issue: Installed in c:\ProgramData (<a href="https://github.com/SiliconStudio/paradox/issues/2">#2</a>)</li>
<li>Issue: InvalidOperationException: No screen modes found (<a href="https://github.com/SiliconStudio/paradox/issues/7">#7</a>)</li>
<li>UI: Improve layout of GameMenu sample.</li>
<li>UI: Improve grid children measure process (fix some layout bugs).</li>
</ul>

## Version 1.0.0-alpha07

<p>Release date: 2014/09/04</p>
<h4>Issues fixed</h4>
<ul>
<li>Studio: Exiting the Xenko Studio was generating errors.</li>
</ul>

## Version 1.0.0-alpha06

<p>Release date: 2014/09/04</p>
<h4>New Features</h4>
<ul>
<li>Integrated release notes in the welcome menu</li>
<li>Welcome to the new workspace!</li>
<li>Integrate release notes in the new workspace</li>
<li>Engine: Reload automatically shaders at runtime when they are modified on the disk (Windows only)</li>
<li>Shaders: New DiscardTransparentThreshold shader. Set the threshold below the one a pixel will be discarded.</li>
<li>Shaders: New shaders dealing with normal and tangent skinning.</li>
<li>Materials: Add UseTransparentMask parameter key in material to disable alpha blending and use the alpha channel as a mask of the texture. Use AlphaDiscardThreshold parameter key to set the desired threshold below the one a pixel will be discarded.</li>
<li>Assets: Support for <code>TGA</code> and <code>PSD</code> files for textures.</li>
<li>UI: Add horizontally align text in EditText using property TextAlignment.</li>
<li>UI: Add mouse wheel delta value since last frame using property <code>IInputManager.MouseWheelDelta</code>.</li>
<li>UI: Add image stretch type <code>StretchType.FillOnStretch</code> and modify <code>StretchType.Fill</code> behavior (previous <code>StretchType.Fill</code> mode is now implemented by <code>StretchType.FillOnStretch</code>).</li>
</ul>

<h4>Enhancements</h4>

<ul>
<li>General: Visual Studio Express 2013 can now open Xenko Projects (with some limitations) (<a href="https://github.com/SiliconStudio/paradox/issues/4">#4</a>)</li>
<li>Engine: Change default Windows output type to Windows Application (<a href="https://github.com/SiliconStudio/paradox/issues/8">#8</a>): By default, a console is only opened when there is a message, assemblies are created in debug and the debugger is not attached.</li>
<li>Engine: Add anisotropic texture filtering on mobile platforms that support it.</li>
<li>Sample: AnimatedModel. Add lighting to the model. Use default Xenko pre defined shaders.</li>
<li>Sample: ForwardLighting. Add transparent meshes.</li>
<li>Sample: Set the same orientation for all samples on Android.</li>
<li>Studio: Modal windows are not displayed in the taskbar anymore</li>
<li>Studio: Improvement in the sprite editor: possibility to drop image files in the interface, improved region selection rectangle.</li>
<li>Studio: Performance improvement in the editor, particularly in the sprite editor</li>
<li>UI: Allow 0-sized strip definition in Grid.</li>
<li>UI: Allow mixing of relative/absolute element positioning in Canvas.</li>
<li>UI: Allow user to modify values of the UIRenderingContext.</li>
</ul>

<h4>Issues fixed</h4>

<ul>
<li>Build: Android project fails to build (<a href="https://github.com/SiliconStudio/paradox/issues/3">#3</a>)</li>
<li>Studio: GameStudio was using 100% of one CPU core (<a href="https://github.com/SiliconStudio/paradox/issues/1">#1</a>)</li>
<li>Studio: Splash Screen always on top (<a href="https://github.com/SiliconStudio/paradox/issues/6">#6</a>)</li>
<li>Studio: Fix GameStudio crash when importing assets using the add files button (<a href="https://github.com/SiliconStudio/paradox/issues/9">#9</a>)</li>
<li>Studio: Build log is now displaying build feedback</li>
<li>Studio: Fixed the Hue selection in the color picker</li>
<li>Engine: Reduce effect change detection footprint (for example when changing the lighting configuration of the scene).</li>
<li>Engine: Reuse rendering states.</li>
<li>Shaders: Fix incorrect normal and tangent skinning in shaders.</li>
<li>Shaders: Fix converter Hlsl to Glsl.</li>
<li>Input: Fixed InputManager crash when window size is reach 0.</li>
<li>Physics: Character Controller was not working properly on iOS.</li>
</ul>