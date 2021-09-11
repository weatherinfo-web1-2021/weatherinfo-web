function nightday() {
  var target = document.querySelector('#night_day');
  var body = document.querySelector('header');
  var head = document.querySelector('.header-title');
  var x = document.getElementsByTagName('li');
  if (target.value === 'night') {
    body.style.backgroundImage = "url('../img/night.jpeg')";
    body.style.color = 'white';
    target.value = 'day';
    head.style.color = 'white';
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = 'white';
      var a_obj = x[i].getElementsByTagName('a');
      for (let j = 0; j < a_obj.length; j++) {
        a_obj[j].style.color = 'white';
      }
    }
  } else {
    body.style.backgroundImage = "url('../img/clouds.jpg')";
    body.style.color = 'black';
    target.value = 'night';
    head.style.color = 'black';
    for (i = 0; i < x.length; i++) {
      x[i].style.color = 'white';
      var a_obj = x[i].getElementsByTagName('a');
      for (j = 0; j < a_obj.length; j++) {
        a_obj[j].style.color = 'black';
      }
    }
  }
}
