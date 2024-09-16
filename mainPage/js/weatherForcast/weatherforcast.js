$.getJSON(
  'https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&appid=f09d75112c5bc3ebcdc2ceddcc684aa6&units=metric',
  function (result) {
    for (var i = 0; i < 8; i++) {
      var ftime = result.daily[i].dt;
      var fMtemp = Math.round(result.daily[i].temp.max);
      var fmtemp = Math.round(result.daily[i].temp.min);

      // 일일 날짜 반환 함수
      function convertTime(t) {
        var ot = new Date(t * 1000);
        var dt = ot.getDate();
        var mt = ot.getMonth() + 1;
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        var day = ot.getDay();
        var dayLabel = week[day];

        return dayLabel + ', ' + mt + '.' + dt;
      }
      var currentTime = convertTime(ftime);
      var dayDate = '<td>' + currentTime + '</td>';
      var disTemp = '<td>' + fMtemp + ' / ' + fmtemp + '℃</td>';

      // 아이콘 표시하기
      var wiconUrl =
        '<td>' +
        '<img src="http://openweathermap.org/img/wn/' +
        result.daily[i].weather[0].icon +
        '@2x.png" alt="' +
        result.daily[i].weather[0].description +
        '">' +
        '</td>';
      $('.icons').append(wiconUrl);
      $('.dayAndDate').append(dayDate);
      $('.temp').append(disTemp);
    }
  }
);
