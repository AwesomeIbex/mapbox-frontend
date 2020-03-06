mapboxgl.accessToken = 'pk.eyJ1IjoiZGRhbGwiLCJhIjoiY2swM3YweWV3MXltcTNicHJtOWtodGhxdyJ9.3IKD0ZouC3cC4lxXSK8Dhw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14,
    center: [-2.35900390625, 51.3811186546102]
});

const url = "http://192.168.64.7:31380";

function addAdminLines() {
    map.addLayer({
        "id": "admin-10",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/admin/{z}/{x}/{y}`],
            "minzoom": 15,
            "maxzoom": 22
        },
        "source-layer": "admin",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.50,
            "line-color": "#138800",
            "line-width": 1
        }
    }, 'waterway-label');
}

function addAreoways() {
    map.addLayer({
        "id": "aeroways",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/aeroways/{z}/{x}/{y}`],
            "minzoom": 12,
            "maxzoom": 15
        },
        "source-layer": "aeroways",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.75,
            "line-color": "#fffd00",
            "line-width": 1
        }
    }, 'waterway-label');
}

function addWaterways() {
    map.addLayer({
        "id": "waterways",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/waterways/{z}/{x}/{y}`],
            "minzoom": 10,
            "maxzoom": 22
        },
        "source-layer": "waterways",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 1,
            "line-color": "#4a0313",
            "line-width": 1.25
        }
    }, 'waterway-label');
}

function addBarriers() {
    map.addLayer({
        "id": "barrierways",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/barrierways/{z}/{x}/{y}`],
            "minzoom": 10,
            "maxzoom": 14
        },
        "source-layer": "barrierways",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.15,
            "line-color": "#886d3e",
            "line-width": 0.5
        }
    }, 'waterway-label');
}

function addRoads() {
    map.addLayer({
        "id": "roads",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/roads/{z}/{x}/{y}`],
            "minzoom": 17,
            "maxzoom": 13
        },
        "source-layer": "roads",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.75,
            "line-color": "#810002",
            "line-width": 0.5
        }
    }, 'waterway-label');
}

function addBuildings() {
    map.addLayer({
        "id": "buildings",
        "type": "fill",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/buildings/{z}/{x}/{y}`],
            "minzoom": 16,
            "maxzoom": 11
        },
        "source-layer": "buildings",
        "paint": {
            "fill-color": "#7a0071",
            "fill-opacity": 0.40
        }
    }, 'waterway-label');
}

function addWaterAreas() {
    map.addLayer({
        "id": "waterareas",
        "type": "fill",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/waterareas/{z}/{x}/{y}`],
            "minzoom": 16,
            "maxzoom": 10
        },
        "source-layer": "waterareas",
        "paint": {
            "fill-color": "#6e0011",
            "fill-opacity": 1
        }
    }, 'waterway-label');
}

function addAmenities() {
    map.addLayer({
        "id": "amenities",
        "source": {
            "type": "vector",
            "tiles": [`${url}/tiles/amenities/{z}/{x}/{y}`]
        },
        "source-layer": "amenities",
        "type": "symbol",
        "layout": {
            "icon-image": "{type}-11",
            "text-padding": 1,
            "text-offset": [0, 0.65],
            "text-rotation-alignment": "viewport",
            "text-anchor": "top",
            "text-size": 10,
            "text-max-width": 8,
            "text-font": ["Roboto Regular", "Noto Regular"],
            "text-field": "{name}"
        },
        "paint": {
            "text-color": "#ffffff",
            "text-halo-color": "#E6E6E6",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }
    }, 'waterway-label');
}


map.on('load', function () {
    // addAdminLines();
    addBarriers();
    // addAreoways();
    // addWaterways();
    addWaterAreas();
    addRoads();
    addBuildings();
    // addAmenities();

});

map.addControl(new mapboxgl.NavigationControl());
