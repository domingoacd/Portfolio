function isIsogram(str) {
    for (let character of str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() === character.toLowerCase() && i !== str.indexOf(character)) return false;
        }
    }
    return true;
}
console.log(isIsogram("ap"));
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var contactMap = new google.maps.Map(document.getElementById("contact-map"), mapOptions);

}
myMap();