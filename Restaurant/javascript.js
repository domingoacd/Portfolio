function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap();
var burger = document.getElementById("burger_menu");

burger.addEventListener("click", sideMenu);
var isOpen = false;
function sideMenu(){
    var side = document.getElementById("side_menu");
    var listItems = document.getElementsByClassName("selector");
    for(var i = 0; i < listItems.length; i++){
        listItems[i].addEventListener("click", function(){ 
            side.style.width = "0";
            isOpen = false;
        });
    }
    if(isOpen){
        side.style.width = "0";
        isOpen = false;
    }else{
        side.style.width = "100vw";
        isOpen = true;
    }
}
// document.getElementById("burger_menu").classList.toggle("change");