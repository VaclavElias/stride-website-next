---
layout: post
title:  "Jazor experiment"
excerpt: "Jazor is a JavaScript helper library for ASP.NET Core websites which takes common and repeated workflow scenarios to simple actions. It is crossing some Blazor and SPA functionality as well. It is useful if you are using intensively ASP.NET Core Views and Partial Views, avoiding any JSON."
categories: dotnet
tags: TypeScript ASP.NET-Core Advance
image: /assets/img/dotnet-bot_scene_juggling-small.png
---

This experiment library helps with very common actions on the website which involve repeating JavaScript code across multiple different projects. Click a button or a link, do something in the backend and UI. This library takes an approach rather updating whole HTML blocks than granular tags with JSON and JavaScript libraries, so there is no need fiddling and mapping JSON objects to whatever UI you have.

You might find this approach useful in certain project cases if you want to write minimum or no JavaScript. Still, JavaScript knowledge is required in certain scenarios. 

There is a crossover with [Blazor](https://github.com/dotnet/blazor) or rather Jazor is filling a gap between static HTML/Razor pages and Blazor.

When could you possibly use this library and not necessarily Blazor?
- You have got many Partial views in Razor pages and views which you would like to reuse e.g. 
```c#
public IActionResult OnGetNews() =>  Partial("_NewsPartial", 10);
```
- You would like a hybrid of your current website and add simple SPA functionality
- Your project doesn't require minimising traffic in between the browser and server

This library is using currently:
 
- TypeScript to handle all common actions workload
- ASP.NET Core 5.0 TagHelpers to simplify using **data-** and a bit help with strongly typed Controllers and Actions
- GitHub link [https://github.com/VaclavElias/Jazor](https://github.com/VaclavElias/Jazor)


## Requirements

1. Add ```jazor.js``` to your Razor page or _Layout.
2. Add ```@addTagHelper *, Jazor``` to your _ViewImports.cshtml

## ToDo
- Add more functionality
- Make prompts and spinners pluggable

## Examples
I will be using [Bootstrap](https://getbootstrap.com/) in my examples.

### Example 1
Load multiple delayed HTML / Partial Views.

 - Load News part
 - Load Top News part after 1 second
 - This will load your HTML from your desired url
 
```html
    <div jazor-url="/examples/news">Loading...</div>
    <div jazor-url="@((nameof(ExamplesController), nameof(ExamplesController.TopNews), null))" jazor-delay="1">Loading...</div>
```

### Example 2

Click a button or link to load HTML / Partial Views to your target element.


```html
    <button jazor-click="/examples/itnews" jazor-target="content" type="button" class="btn btn-primary">Show .NET News</div>
    <button jazor-click="@((nameof(ExamplesController), nameof(ExamplesController.AngularNews), null))" jazor-target="content" type="button" class="btn btn-primary">Show Angular News</button>

    <div id="content">The content will be loaded here.</div>
```

