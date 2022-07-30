---
layout: post
title:  "Visual Studio Advance"
description: "11 Must Things to Know for Visual Studio Beginners"
categories: dotnet
tags: C# Visual-Studio Advance
image: /assets/img/visual-studio.png
---

This post is a **quick reference** and should help you to familiarise quickly with the key and essential **Visual Studio** (VS) functionality. The VS Integrated Development Environment (IDE) might look overwhelming in the beginning but there is no need to know everything. More you work with VS you will start discovering what you need and you will eventually understand the complexity of VS by passive learning.  

Initial notes: 

- You should already be familiar with any coding/development IDE
- This is not a tutorial, this is a quick reference on what is the most important or helpful to know when you start working with Visual Studio. Do check any available material to familiarise and learn if you don't understand this guide 
- If you don't know certain terms just google them
- [Visual Studio Intro]({% link _posts/2021-04-03-visual-studio-intro.md %})

## Content

- [1. Solution vs Project](#1-solution-vs-project)
- [2. Solution Explorer](#2-solution-explorer)
- [3. Sharing your Code](#3-live-sharing-your-code---collaborative-coding)
- [4. Default Configuration - AppSettings.cs / appsettings.json](#4-default-configuration---appsettingscs--appsettingsjson)
- [5. Manage User Secrets](#5-manage-user-secrets)
- [6. editorconfig](#6-editorconfig)
- [Q&A](#qa)

## 1. Solution vs Project
Depends on your circumstances and your team workflow, you might find different (sometimes confusing) folder structure patterns. 

VS projects can be in different physical locations on your drive and your VS solution is referencing them wherever the projects are. You can also have multiple solutions ***.sln** if you need to reference/view projects in different ways. Many projects will be grouped together in their parent folder.

Your solution projects might be independent from each other or some of them might have dependencies. The circular dependencies are not allowed and it is an anti-pattern.

There are many ways to organise your solution. If you work in a team or alone, consistency is important.

See some basic folder structure examples:

### Example 1 - Projects in one repository - Mono-repo

This example is showing independent projects with no project dependencies, which are grouped together in the **api-bureau.sln** solution. The intention might be to extract a common library which will be used by all projects. All projects are in the same repository to simplify a workflow for the small team who needs to work across all projects. 
```
/api-bureau
/api-bureau/api-bureau.sln
/api-bureau/.gitignore

/api-bureau/src/ApiBureau.CloudCall.Api
/api-bureau/src/ApiBureau.Confluence.Api
/api-bureau/src/ApiBureau.SharePoint.Api

/api-bureau/test/ApiBureau.CloudCall.Api.UnitTests
/api-bureau/test/ApiBureau.Confluence.Api.UnitTests
/api-bureau/test/ApiBureau.SharePoint.Api.UnitTests

```

### Example 2 - Projects in multiple repositories

This example is showing projects, which are grouped together in the *ApiBureau.AllApis.sln* solution. The only dependency is that *all-apis* project is dependent on all other APIs. The teams working mostly independently prefer to have their repos separated.

Note: Visual Studio 2022+ supports managing multiple repositories from one solution.

```
/api-bureau
/api-bureau/all-apis/.gitignore
/api-bureau/all-apis/ApiBureau.AllApis.sln
/api-bureau/all-api/src/ApiBureau.AllApis.Console

/api-bureau/cloudcall-api/.gitignore
/api-bureau/cloudcall-api/ApiBureau.CloudCall.sln
/api-bureau/cloudcall-api/src/ApiBureau.CloudCall.Api
/api-bureau/cloudcall-api/test/ApiBureau.CloudCall.Api.UnitTests

/api-bureau/confluence-api/.gitignore
/api-bureau/confluence-api/ApiBureau.Confluence.sln
/api-bureau/confluence-api/src/ApiBureau.Confluence.Api
/api-bureau/confluence-api/test/ApiBureau.Confluence.Api.UnitTests

/api-bureau/sharepoint-api/.gitignore
/api-bureau/sharepoint-api/ApiBureau.SharePoint.sln
/api-bureau/sharepoint-api/src/ApiBureau.SharePoint.Api
/api-bureau/sharepoint-api/test/ApiBureau.SharePoint.Api.UnitTests

```

## 2. Solution Explorer

By default your Solution Explorer is showing only the most relevant files. And some files e.g., ***.cs** will automatically appear in your Solution Explorer when you copy a file to your project folder or create a new C# file.

Some files e.g., *.gitignore* are hidden in the Solution Explorer so they don't distract you. It is good to familiarise yourself with the project folders and files. You can toggle these files by: 

- Solution Explorer Toolbar → Click Show All Files

Or you can see all files on your drive through File Explorer:

- Solution Explorer → Right click on Solution -> Open Folder in File Explorer

If you don't use Solution Explorer, you can collapse this window to a vertical bar on the side of your screen. This is helpful when you share a screen, to get more visibility of your code.

- Solution Explorer → Click the Auto Hide **pin icon**

To reverse, click the vertical bar, then Solution Explorer and then pin icon again.

More [Solution Explorer resources](https://docs.microsoft.com/en-us/visualstudio/ide/use-solution-explorer?view=vs-2022).

## 3. Live Sharing your Code - Collaborative Coding

You are becoming familiar with VS and one day you need a help with your code. Your colleague or friend doesn't have the project you are working on, maybe they don't have VS but they have Visual Studio Code. Now you can share your VS session with anyone. Your colleagues will see exactly what you see, or they can navigate independently without downloading your project.

Live Share lets you collaboratively explore, edit and debug with others in real time, regardless of what programming languages you're using or app types you're building.

Read more about [Live Sharing](https://docs.microsoft.com/en-us/visualstudio/liveshare/quickstart/share).

## 4. Default Configuration - AppSettings.cs / appsettings.json

Application configuration is a huge subject. If you are working with ASP.NET Core, get familiar with **appsettings.json** and also with **AppSettings.cs**. ```IOptions<AppSettings>``` will let you use your configuration through strongly typed settings and dependency injection. 

.NET has lots of helpers and methods which will simplify access to your configuration and you can use them also outside of ASP.NET Core applications, e.g., Console Application.

Very important is the sequence of configuration providers:

1. appsettings.json
1. appsettings.{Environment}.json
1. User secrets
1. Environment variables
1. Command-line arguments

Lots of reading on this subject here [Application Configuration](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0).

## 5. Manage User Secrets

Any passwords, secrets, any information you don't want to share has to be secured and not committed to your source control system like **Git**. How do you do it in VS? Very easily.

- Solution Explorer → Select your project → Right Click → Select Manage User Secrets
   - VS might ask to install this NuGet ```Microsoft.Extensions.Configuration.UserSecrets``` or it will open file ```secrets.json```.
- You can use also .NET CLI to manage this file

File ```secrets.json``` is kept outside of your VS projects and solution and it is never pushed to your git repository. Note, that this file **is not encrypted**. It is a plain text file, still hanging on your computer in this location:

```
%APPDATA%\Microsoft\UserSecrets\<user_secrets_id>\secrets.json
```

Read more about [Secrets in development](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=linux) subject.


## 6. editorconfig

If you work alone or in a team, code consistency is very important in each project.

You can add an EditorConfig file to your project or codebase to enforce consistent coding styles for everyone that works in the codebase. Do ask your colleagues and propose this process if it is not in place. Consistency helps with readability across all projects.

More about this subject here [Settings with EditorConfig](https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options?view=vs-2022).

## Q&A
### Q: How to change the .NET version?

A1: Double click on the project file to open the project as XML and edit the ```<TargetFramework>net5.0</TargetFramework>``` tag. You can also target multiple frameworks by replacing this tag with ```<TargetFrameworks>net5.0;net6.0</TargetFrameworks>``` tag.

