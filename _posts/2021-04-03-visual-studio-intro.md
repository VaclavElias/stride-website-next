---
layout: post
title:  "Visual Studio Intro"
description: "11 Must Things to Know for Visual Studio Beginners"
categories: dotnet
tags: C# Visual-Studio Beginner
image: /assets/img/visual-studio.png
---

This Intro is a **quick reference** and it should help you to familiarise quickly with the key and essential **Visual Studio** (VS) functionality. The VS Integrated Development Environment (IDE) might look overwhelming in the beginning but there is no need to know everything. More you work with VS you will start discovering what you need and you will eventually understand the complexity of VS by passive learning.

Initial notes: 

- You should already be familiar with any coding/development IDE
- This is not a tutorial, this is a quick reference on what is the most important or helpful to know when you start working with Visual Studio. Do check any available material to familiarise and learn if you don't understand this guide 
- If you don't know certain terms just google them
- [Visual Studio Advance]({% link _posts/2021-05-24-visual-studio-advance.md %})

## Content

- [1. Solution vs Project](#1-solution-vs-project)
- [2. Opening Solution / Project](#2-opening-solution--project)
- [3. Solution Explorer](#3-solution-explorer)
- [4. Windows Management](#4-windows-management)
- [5. F12 is your friend - Go to Definition](#5-f12-is-your-friend---go-to-definition)
- [6. CTRL+T and CTRL+Q - Search Everywhere](#6-ctrlt-and-ctrlq---search-everywhere)
- [7. dotnet command](#7-dotnet-command)
- [8. Project story - Viewing csproj in summary](#8-project-story---viewing-csproj-in-summary)
- [9. Project Packages (nuget)](#9-project-packages-nuget)
- [10. Visual Studio Extensions](#10-visual-studio-extensions)
- [11. Visual Studio Settings](#11-visual-studio-settings)
- [Q&A](#qa)

## 1. Solution vs Project
Solution contains 1 or more projects to logically organise your projects together.

## 2. Opening Solution / Project
You can open a project by clicking on a file with extension **.sln** (solution) or **.csproj** (C# project). If you open a project which is part of a solution, the solution might open instead automatically.

## 3. Solution Explorer
Once you open your Solution or Project you want to see your **Solution Explorer** which contains a logical hierarchy of all folders and files which are needed to build your project. You are going to use this window and navigate through it very frequently. Usually you would have your Solution Explorer on the right or on the left always visible.

Note: If you cannot see it go to Menu → View → Click Solution Explorer (first in the menu)

## 4. Windows Management
You might use these options below frequently to arrange your windows. More info about [customising layouts](https://docs.microsoft.com/en-us/visualstudio/ide/customizing-window-layouts-in-visual-studio?view=vs-2022).
- Vertical Document Group - If you need to see different files next to each other ![Document Groups](/assets/img/2021/Visual-Studio-Document-Group.webp){: .img-fluid}
- Horizontal Document Group - If you need to see different files horizontally
- Split Window - You can split horizontally the edition of a file through Window → Split. This is especially useful when visualizing or editing two locations in a large file ![Split Window](/assets/img/2021/Visual-Studio-Horizontal-Split-Code-Editor.gif){: .img-fluid} ![Split Window](/assets/img/2021/Visual-Studio-Vertical-Split-Code-Editor.gif){: .img-fluid}

- New Window - Open an instance of the same file in a separate window, Window → New Window

## 5. F12 is your friend - Go to Definition
The **Go To Definition** feature navigates to the source of a type or member, and opens the result in a new tab.

- Pressing F12 while your text cursor is somewhere inside the symbol name
- Right click mouse on the symbol → Go to Definition
- Or ALT+F12 to peek the identifier definition without opening a new tab

## 6. CTRL+T and CTRL+Q - Search Everywhere
- CTRL+Q - Search everywhere in the code, including menu items
- CTRL+T - Search everywhere in the code

## 7. dotnet command
- It provides commands for working with .NET projects
  - e.g. ```dotnet build``` builds a project
  - e.g. ```dotnet --info``` shows detailed information about a .NET installation 
- It runs .NET applications
  - e.g. ```dotnet myApplication.exe``` or ```dotnet myApplication.dll```

## 8. Project story - Viewing csproj in summary
.NET projects are based on the MSBuild format. Project files, which have extensions like **.csproj** for C# project are in XML format. The csproj file includes settings related to targeted .NET Frameworks, project folders, NuGet package references etc.

You can edit in 2 ways

- Solution Explorer → Select your project → Right Click → Select Edit Project File
- Solution Explorer → Double click on the project name

## 9. Project Packages (nuget)
An essential tool for any modern development platform is a mechanism through which developers can create, share, and consume useful code. Often such code is bundled into "packages" that contain compiled code (as DLLs) along with other content needed in the projects that consume these packages (source [An introduction to Nuget](https://docs.microsoft.com/en-us/nuget/what-is-nuget)).

For .NET (including .NET Core), the Microsoft-supported mechanism for sharing code is **NuGet** (essentially a single ZIP file) with the **.nupkg** extension.

- Solution Explorer → Right click on Project→ Manage Nuget Packages
  - Browse - Search for new packages
  - Installed - See your installed packages
  - Updates - See current updates for your installed packages (mind minor vs major updates)

## 10. Visual Studio Extensions
Extensions allow you to customize and enhance your experience in Visual Studio by adding new features or integrating existing tools (Amazon, Azure, ..). The main purpose is to increase **your productivity** and cater to your workflow.

- Top Menu → Extensions → Manage Extensions
  - Installed - All installed and pre-installed extensions
  - Online - Search for new extensions
  - Updates - Update extensions, some extensions update automatically
  - Roaming Extensions Manager - If you are logged into Visual Studio with your Microsoft account you can sync your extensions to other devices with Visual Studio
- Top free extensions for development
  - CodeMaid
  - Productivity Power Tools 2019/2022 - Installs a few individual extensions for your productivity
  - Live Share - Real-time collaborative development in Visual Studio and Visual Studio Code
  - Web Essentials 2019/2022 -  Installs a few individual extensions for your web development
  - AWS Toolkit - If you work/deploy to AWS

## 11. Visual Studio Settings
- Top Menu → Edit → Advance → Word Wrap
    - Very useful so you don't need to move your horizontal bar
- Top Menu → Tools→ Options → Projects and Solutions → Track Active Item in Solution Explorer -
  - Solution Explorer item is selected automatically when you edit the file in the Editor
- Top Menu → Tools→ Options → Productivity Power Tools (Extension) → Power Commands → Remove and Sort Using on save

## Q&A
### Q: How to create a new project within the solution?

A1: Solution Explorer → Right click on Solution → Add → New project or Existing Project

A2: Top Menu → File → Add → New project or Existing Project

### Q: How to change the .NET version?

A1: Double click on the project file to open the project as XML and edit the ```<TargetFramework>net5.0</TargetFramework>``` tag.

A2: Solution Explorer → Right Click on the Project → Click Properties → Click Application → Change Target Framework