---
layout: page
title: Examples
description: Example Stride Website styling
---

[[TOC]]

## Includes

### Sponsor

We can include sponsor logos and links to their websites.

```liquid
{% raw %}{% include sponsor-org.md key:'ore' emoji:'💎' %}
{% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
{% include sponsor-user.md key:'vaclav' emoji:'🥇' %}{% endraw %}
```

The sponsors are defined in `_data/sponsors.json` file.

#### Sponsor Examples
{% include sponsor-org.md key:'ore' emoji:'💎' %}
{% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
{% include sponsor-user.md key:'vaclav' emoji:'🥇' %}


### Alert

This option allows to choose type and any font-awesome icon.

Only part of the icon name is required, for example from this `<i class="fa-solid fa-face-smile"></i>` we need just `fa-face-smile` part.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   icon:'fa-whatever-font-awesome-icon'
   title:'Some text' %}
{% endraw %}
```

This option automatically chooses the icon based on the type.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   title:'Some text' %}
{% endraw %}
```

This option allows to choose type without any icon.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   icon:''
   title:'Some text' %}
{% endraw %}
```

#### Alert Examples

{% include _alert.html type:'success' icon:'' title:'No icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'success' icon:'fa-face-smile' title:'Custom icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'success' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'warning' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'danger' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'info' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'secondary' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'dark' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'light' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'primary' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}