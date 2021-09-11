var city = 'seoul';
$.getJSON(
  // 현재 날씨 (Current Weather Data)
  'http://api.openweathermap.org/data/2.5/forecast?q=' +
    city +
    '&appid=866315eec302cac5409c1d8c6f88c94b&units=metric',
  function (data) {
    //data로 할일...
    //alert(data.list[0].dt);
    var $Temp = data.list[0].main.temp;
    var $feels_like = data.list[0].main.feels_like;
    var $humidity = data.list[0].main.humidity;
    var $weather_icon = data.list[0].weather[0].icon;
    var $dt_txt = data.list[0].dt_txt;
    var $year = $dt_txt.substring(0, 4);
    var $month = $dt_txt.substring(5, 7);
    var $day = $dt_txt.substring(8, 10);
    var $dt = data.list[0].dt;

    /* function convertTime(t){
          var $ot = new Date(t*1000);
          var $dn = "오전";
          var $hr = $ot.getHours();
          if ($hr>13){
            $hr -= 12;
            $dn = "오후";
          }
          var $m = $ot.getMinutes();
          var $s = $ot.getSeconds();
          return $dn + " " + $hr + "시 "+ $m +"분";
        }
        var $ct = convertTime($dt); */

    $('.alertweather_tmp').append($Temp.toFixed(1));
    $('.alertweather_tmp_feels_like').append($feels_like.toFixed(1));
    $('.alertweather_humidity').append($humidity + '%');
    $('.icon').append(
      '<img src="http://openweathermap.org/img/wn/' +
        $weather_icon +
        '@2x.png">'
    );
    $('.time').append($year + '년 ' + $month + '월 ' + $day + '일');

    $('.alertweather_tmp').append('℃');
    $('.alertweather_tmp_feels_like').append('℃');
  }
);
$.getJSON(
  // 시간대별 날씨 (Hourly Forecast)
  'https://api.openweathermap.org/data/2.5/onecall?lat=37.5833&lon=127&appid=866315eec302cac5409c1d8c6f88c94b&units=metric',
  function (hourly_data) {
    function convertTime(t) {
      var $ot = new Date(t * 1000);
      var $dn = '오전';
      var $hr = $ot.getHours();
      if ($hr > 13) {
        $hr -= 12;
        $dn = '오후';
      }
      return $dn + ' ' + $hr + '시';
    }
    //1
    var $temp = hourly_data.hourly[1].temp;
    $('.tmp0').append($temp.toFixed(1));
    $('.tmp0').append('℃');

    var $icon = hourly_data.hourly[1].weather[0].icon;
    $('.icon0').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[1].dt;
    var $ct = convertTime($dt);
    $('.time0').append($ct);
    //4
    var $temp = hourly_data.hourly[4].temp;
    $('.tmp1').append($temp.toFixed(1));
    $('.tmp1').append('℃');

    var $icon = hourly_data.hourly[4].weather[0].icon;
    $('.icon1').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[4].dt;
    var $ct = convertTime($dt);
    $('.time1').append($ct);
    //7
    var $temp = hourly_data.hourly[7].temp;
    $('.tmp2').append($temp.toFixed(1));
    $('.tmp2').append('℃');

    var $icon = hourly_data.hourly[7].weather[0].icon;
    $('.icon2').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[7].dt;
    var $ct = convertTime($dt);
    $('.time2').append($ct);
    //10
    var $temp = hourly_data.hourly[10].temp;
    $('.tmp3').append($temp.toFixed(1));
    $('.tmp3').append('℃');

    var $icon = hourly_data.hourly[10].weather[0].icon;
    $('.icon3').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[10].dt;
    var $ct = convertTime($dt);
    $('.time3').append($ct);
    //13
    var $temp = hourly_data.hourly[13].temp;
    $('.tmp4').append($temp.toFixed(1));
    $('.tmp4').append('℃');

    var $icon = hourly_data.hourly[13].weather[0].icon;
    $('.icon4').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[13].dt;
    var $ct = convertTime($dt);
    $('.time4').append($ct);
    //16
    var $temp = hourly_data.hourly[16].temp;
    $('.tmp5').append($temp.toFixed(1));
    $('.tmp5').append('℃');

    var $icon = hourly_data.hourly[16].weather[0].icon;
    $('.icon5').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[16].dt;
    var $ct = convertTime($dt);
    $('.time5').append($ct);

    //19
    var $temp = hourly_data.hourly[19].temp;
    $('.tmp6').append($temp.toFixed(1));
    $('.tmp6').append('℃');

    var $icon = hourly_data.hourly[19].weather[0].icon;
    $('.icon6').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[19].dt;
    var $ct = convertTime($dt);
    $('.time6').append($ct);

    //22
    var $temp = hourly_data.hourly[22].temp;
    $('.tmp7').append($temp.toFixed(1));
    $('.tmp7').append('℃');

    var $icon = hourly_data.hourly[22].weather[0].icon;
    $('.icon7').append(
      '<img src="http://openweathermap.org/img/wn/' + $icon + '@2x.png">'
    );

    var $dt = hourly_data.hourly[22].dt;
    var $ct = convertTime($dt);
    $('.time7').append($ct);
  }
);
