function initMap(){
    var location = {lat: 40.655030, lng: -97.881740};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
}