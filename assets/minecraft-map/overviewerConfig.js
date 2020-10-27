var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "http://capodannovalsugana.ns0.it/minecraft-map/signpost.png",
            "signMarker": "http://capodannovalsugana.ns0.it/minecraft-map/signpost_icon.png",
            "bedMarker": "http://capodannovalsugana.ns0.it/minecraft-map/bed.png",
            "spawnMarker": "http://capodannovalsugana.ns0.it/minecraft-map/markers/marker_home.png",
            "spawnMarker2x": "http://capodannovalsugana.ns0.it/minecraft-map/markers/marker_home_2x.png",
            "queryMarker": "http://capodannovalsugana.ns0.it/minecraft-map/markers/marker_location.png",
            "queryMarker2x": "http://capodannovalsugana.ns0.it/minecraft-map/markers/marker_location_2x.png",
            "compass": {
                "0": "http://capodannovalsugana.ns0.it/minecraft-map/compass_upper-left.png",
                "1": "http://capodannovalsugana.ns0.it/minecraft-map/compass_upper-right.png",
                "3": "http://capodannovalsugana.ns0.it/minecraft-map/compass_lower-left.png",
                "2": "http://capodannovalsugana.ns0.it/minecraft-map/compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1603787161",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "http://capodannovalsugana.ns0.it/minecraft-map/day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1603754188,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -208,
                96,
                -176
            ],
            "minZoom": 0,
            "spawn": [
                -208,
                96,
                -176
            ],
            "north_direction": 0
        },
        {
            "name": "Nighttime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "http://capodannovalsugana.ns0.it/minecraft-map/night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1603754188,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -208,
                96,
                -176
            ],
            "minZoom": 0,
            "spawn": [
                -208,
                96,
                -176
            ],
            "north_direction": 0
        }
    ]
};
