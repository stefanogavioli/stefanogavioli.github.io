---
layout: post
title:  "Minecraft map"
date:   2020-10-27 10:15:00 +0200
categories: js leaflet minecraft
excerpt_separator: <!--more-->
---
<script type="text/javascript" src="/assets/minecraft-map/overviewerConfig.js"></script>
<script type="text/javascript" src="/assets/minecraft-map/overviewer.js"></script>
<script type="text/javascript" src="/assets/minecraft-map/baseMarkers.js"></script>

<link rel="stylesheet" href="/assets/minecraft-map/leaflet.css" />
<script src="/assets/minecraft-map/leaflet.js"></script>
<link rel="stylesheet" href="/assets/minecraft-map/overviewer.css" type="text/css" />

The map was created with [overviewer](https://overviewer.org/). The resulting **60k** files, totaling a size of more than **2 GB** have been hosted locally since GitHub Pages (on which this website is hosted) does not support either too many files and too heavy repos.

These files are hosted on a local machine with an [nginx](https://www.nginx.com/) server. Easy and simple. The leg work was to adapt the css in order to adapt the given one with the library I use here ([materializecss](https://materializecss.com/)).

To reduce size I've also tried .webp images but they don't work as well as .png and do not save enough space to be worth. 
<!--more-->

Here's the map:
<div class="mapbody">
    <noscript style="color:white; background-color:black">
        If you can see this message, there is likely a problem loading the Overviewer JavaScript components.
        Check the JavaScript console for error messages.
    </noscript>
    <div id="mcmap"></div>
    
    <script>
    $(document).ready(function() {overviewer.util.initialize()});
    </script>
</div>
