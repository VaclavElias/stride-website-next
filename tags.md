---
layout: page
title: Blog Tags
tags: search
---
Welcome to the Tags page, where you can explore all the blog posts grouped by topic.
<!-- excerpt -->
{% for tag in collections.tagList %}
  <h3>{{ tag | replace: "-"," " }}</h3>
  <ul>
  {% if tag == 'Meeting' or tag == 'Release' %}
  {% assign sorted_posts = collections[tag] | sort: "date" | reverse %}{% else %}
  {% assign sorted_posts = collections[tag] | sort: "data.title" %}{% endif %}
  {% for post in sorted_posts %}<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>{% endfor %}</ul>
{% endfor %}