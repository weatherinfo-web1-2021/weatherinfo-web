function nightday(){
    var target = document.querySelector("#night_day");
    var body = document.querySelector("body");
    var head = document.querySelector(".header-title");
    if(target.value === 'night') {
    body.style.backgroundImage = "url('../img/night.jpg')" ;
    body.style.color = 'white';
    target.value = 'day';
    head.style.color = 'white';
    }
    else {
    body.style.backgroundImage = "url('../img/day.jpeg')" ;
    body.style.color = 'black';
    target.value = 'night';
    head.style.color = 'black';
    }
}