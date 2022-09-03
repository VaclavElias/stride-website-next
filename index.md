---
layout: default
title: Homee
excerpt: Stride is an open-source MIT C# game engine designed for the future of gaming.
---
{% include carousel_home.html %}
  {% assign name = 'Vaclav Elias' %}
  {% include test.html myValue:name %}
<div class="bg-dark">
    <div class="container-xxl py-5 px-4 px-sm-5">
        <div class="row g-5 py-sm-5">
            <div class="col-sm-12 col-lg-7">
                <div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SlipyjcEb0g?controls=0&autoplay=1&mute=1&loop=1&playlist=SlipyjcEb0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-5 order-last order-sm-first">
                <h1 class="h1 mb-3">Open-source C# Game Engine</h1>
                <p class="lead">Stride is a free and open-source 2D and 3D cross-platform game engine.
                <p class="lead">Stride can be used to create video games for PC, mobile devices and virtual reality or interactive content.</p>
                <div class="mt-5">
                    <a href="/download/" class="btn btn-lg btn-primary me-2 mb-3">
                        <i class="fa-solid fa-download"></i> Download 4.1
                    </a>
                    <a href="{{ page._github-url }}" class="btn btn-lg btn-outline-primary mb-3">
                        <i class="fa-brands fa-github text-decoration-none"></i> Source Code (MIT)
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>