---
layout: post
title:  Stride minimal API / Code only approach
description: Stride3D with minimal code approach
categories: stride3d
tags: C# Stride3D .NET Game
image: https://www.stride3d.net/images/svg/logo.svg
---
12 lines of code, this is what it takes to run Stride 3D example below (plus some ```usings``` on the top).

This works only with [Stride](https://www.stride3d.net/) **4.1+**.

Follow the steps in this [stride-code-only](https://github.com/VaclavElias/stride-code-only) repository.

Related [tweet](https://twitter.com/VasoElias/status/1525162302487543809).

```csharp
using var game = new Game();

game.Run(start: (Scene rootScene) =>
{
    game.SetupBase3DScene();

    var entity = new Entity(new Vector3(1f, 0.5f, 3f));

    entity.Add(new ModelComponent(new CubeProceduralModel().Generate(game.Services)));

    entity.Scene = rootScene;
});
```