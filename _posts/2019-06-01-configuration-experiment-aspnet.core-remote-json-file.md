---
layout: post
title:  "Configuration experiment in ASP.NET Core – RemoteJsonFile"
categories: dotnet
tags: C# ASP.NET-Core
image: /assets/img/dotnet-bot_scene_juggling-small.png
---
This is an experiment project to access **appsettings.json** from Azure Blob or any remote url. I will use public access to this Azure file considering no user secrets are included in this file. You would need to add additional options to secure your link if any user secrets are transmitted.

Example url: https://your-storage.blob.core.windows.net/your-blob/appsettings.json

```csharp
services.AddRemoteJsonFile(Configuration, "AppSettings:Url:RemoteUrl", options =>
{
    Configuration = options;
});
```

Source here [CodeCapital.AspNetCore.Extensions.Configuration.Json](https://github.com/codecapital/CodeCapital.AspNetCore/tree/net5.0/src/CodeCapital.AspNetCore.Extensions.Configuration.Json).